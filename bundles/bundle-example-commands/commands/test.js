'use strict';

const { Broadcast: B, CommandType, Logger, PlayerRoles, Room } = require('ranvier');
const { NoPartyError, NoRecipientError, NoMessageError } = require('ranvier').Channel;
const { CommandParser, InvalidCommandError, RestrictedCommandError } = require('../../bundle-example-lib/lib/CommandParser');

module.exports = {
  usage: 'quit',
  command: (state) => (args, player) => {
/*    player.metadata.history = 'grin';
    let data = player.metadata.history;
    try{
      const result = CommandParser.parse(state, player.metadata.history, player);
      if (!result) {
        throw null;
      }
    } catch (error) {
      switch(true) {
        case error instanceof InvalidCommandError:
          if (player.room && player.room instanceof Room) {
              // check to see if room has a matching context-specific command
              const roomCommands = player.room.getMeta('commands');
              const [commandName, ...args] = data.split(' ');
              if (roomCommands && roomCommands.includes(commandName)) {
                player.room.emit('command', player, commandName, args.join(' '));
                break;
              }
          }

          B.sayAt(player, "Huh?");
          Logger.warn(`WARNING: Player tried non-existent command '${data}'`);
          break;
        case error instanceof RestrictedCommandError:
          B.sayAt(player, "You can't do that.");
          break;
        default:
          Logger.error(error);
      }
    } */
  }
};
