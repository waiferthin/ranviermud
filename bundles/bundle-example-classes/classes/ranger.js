
'use strict';
/**
* See warrior.js for more on classes.
*/
module.exports = {
name: 'RANGER',
description: 'Add description',
abilityTable: {},
  setupPlayer: (state, player) => {
  player.prompt = '[ %health.current%/%health.max% <b>hp</b> %movement.current%/%movement.max% <b>mv</b> ]';
}
};
      