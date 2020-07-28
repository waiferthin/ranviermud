'use strict';

const { Broadcast, PlayerRoles } = require('ranvier');
const PlayerClass = require('../../bundle-example-classes/lib/PlayerClass');

module.exports = {
  usage: 'class <object>',
  requiredRole: PlayerRoles.ADMIN,
  command: (state) => (args, player) => {
    if (!args || !args.length) {
      return Broadcast.sayAt(player, 'Help TBD');
    }
    let parts = args.split(' ');
    if (parts[0] == 'add') {
      if(!parts[1]) {
      return Broadcast.sayAt(player, 'What class would you like to add?');
      }
      if (parts.length > 2) {
        return Broadcast.sayAt(player, 'Only one class name is allowed');
      }
      PlayerClass.addClass(parts[1]);
    }

    if (parts[0] == 'list') {
      let classes = PlayerClass.getClasses();
        classes = Object.entries(classes).map(([id, instance]) => {
          return [id, instance.config];
        });
        for (const [ id, config ] of classes) {
          Broadcast.sayAt(player, `[<bold>${id}</bold>] - <bold>${config.name}</bold>`);
        }
      //return Broadcast.sayAt(player, classes);
    }
  }
};
