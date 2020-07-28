'use strict';



const fs = require('fs');
const path = require('path');

const classesDir = `${__dirname}/../classes/`;
let classes = null;

/**
 * Base player class
 */
class PlayerClass {
  static getClasses() {
    if (classes) {
      return classes;
    }

    classes = {};
    const files = fs.readdirSync(classesDir);

    for (const classFile of files) {
      const classPath = classesDir + classFile;
      if (!fs.statSync(classPath).isFile() || !classFile.match(/js$/)) {
        continue;
      }

      const id = path.basename(classFile, path.extname(classFile));
      const config = require(classPath);

      classes[id] = new this(id, config);
    }

    return classes;
  }

  static addClass(className) {
    try {
      let bigClass = className.toUpperCase();
      let data = `
'use strict';
/**
* See warrior.js for more on classes.
*/
module.exports = {
name: '${bigClass}',
description: 'Add description',
abilityTable: {},
  setupPlayer: (state, player) => {
  player.prompt = '[ %health.current%/%health.max% <b>hp</b> %movement.current%/%movement.max% <b>mv</b> ]';
}
};
      `;
      fs.writeFile("./bundles/bundle-example-classes/classes/" + className + ".js", data, function(err, result) {
        if(err) console.log('error', err);
      });

      }
    catch (er) {
      console.error ("Error occurred", er);
      }
  }

  static get(id) {
    return this.getClasses()[id];
  }

  /**
   * @param {string} id  id corresponding to classes/<id>.js file
   * @param {object} config Definition, this object is completely arbitrary. In
   *     this example implementation it has a name, description, and ability
   *     table. You are free to change this class as you wish
   */
  constructor(id, config) {
    this.id = id;
    this.config = config;
  }

  /**
   * Override this method in your class to do initial setup of the player. This
   * includes things like adding the resource attribute to the player or anything
   * else that should be done when the player is initially given this class
   * @param {GameState} state
   * @param {Player} player
   */
  setupPlayer(state, player) {
    if (typeof this.config.setupPlayer === 'function') {
      this.config.setupPlayer(state, player);
    }
  }

  /**
   * Table of level: abilities learned.
   * Example:
   *     {
   *       1: { skills: ['kick'] },
   *       2: { skills: ['bash'], spells: ['fireball']},
   *       5: { skills: ['rend', 'secondwind'] },
   *     }
   * @type {Object<number, Array<string>>}
   */
  get abilityTable() {
    return this.config.abilityTable;
  }

  get abilityList() {
    return Object.entries(this.abilityTable).reduce((acc, [ , abilities ]) => {
      return acc.concat(abilities.skills || []).concat(abilities.spells || []);
    }, []);
  }

  /**
   * Get a flattened list of all the abilities available to a given player
   * @param {Player} player
   * @return {Array<string>} Array of ability ids
   */
  getAbilitiesForPlayer(player) {
    let totalAbilities = [];
    Object.entries(this.abilityTable).forEach(([level, abilities]) => {
      if (level > player.level) {
        return;
      }
      totalAbilities = totalAbilities.concat(abilities.skills || []).concat(abilities.spells || []);
    });
    return totalAbilities;
  }

  /**
   * Check to see if this class has a given ability
   * @param {string} id
   * @return {boolean}
   */
  hasAbility(id) {
    return this.abilityList.includes(id);
  }

  /**
   * Check if a player can use a given ability
   * @param {Player} player
   * @param {string} abilityId
   * @return {boolean}
   */
  canUseAbility(player, abilityId) {
    return this.getAbilitiesForPlayer(player).includes(abilityId);
  }
}

module.exports = PlayerClass;
