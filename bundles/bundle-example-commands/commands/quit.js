'use strict';

const { Broadcast } = require('ranvier');

module.exports = {
  usage: 'quit',
  command: (state) => (args, player) => {
    if (player.isInCombat()) {
      return Broadcast.sayAt(player, "You're too busy fighting for your life!");
    }
    if(!player.hasAttribute('movement')) {
      player.addAttribute(state.AttributeFactory.create('movement', 100));
    }
    player.save(() => {
      Broadcast.sayAt(player, "Goodbye!");
      Broadcast.sayAtExcept(player.room, `${player.name} disappears.`, player);
      state.PlayerManager.removePlayer(player, true);
    });
  }
};
