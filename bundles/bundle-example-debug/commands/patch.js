'use strict';

const { Broadcast: B, PlayerRoles } = require('ranvier');

/**
 * Command to allow you to reload a command's definition from disk without restarting the server
 */
module.exports = {
  requiredRole: PlayerRoles.ADMIN,
  usage: 'patch <attribute>',
  command: state => (args, player) => {
  if (!args || !args.length) {
    return B.sayAt(player, 'Patch which attribute?');
  }

B.sayAt(player, `<b><red>PATCH</red></b>: testing [${args}]...`);
/* const attribute = ;
const target = ;
for (if !target.hasAttribute()) {
  player.addAttribute(state.AttributeFactory.create(attr, defaultAttributes[attr]));
}
*/

  }
};
/*
  for (const attr in defaultAttributes) {
    player.addAttribute(state.AttributeFactory.create(attr, defaultAttributes[attr]));
  }
    const command = state.CommandManager.get(commandName);
    if (!command) {
      return B.sayAt(player, 'There is no such command, restart the server to add new commands.');
    }

    delete require.cache[require.resolve(command.file)];
    B.sayAt(player, `<b><red>HOTFIX</red></b>: Reloading [${commandName}]...`);

    const newCommand = state.BundleManager.createCommand(command.file, command.name, command.bundle);
    state.CommandManager.add(newCommand);
    B.sayAt(player, `<b><red>HOTFIX</red></b>: Done!`);
  }
}; */
