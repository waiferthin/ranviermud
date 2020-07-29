'use strict';

const { Broadcast, PlayerRoles } = require('ranvier');
const ItemUtil = require('../../bundle-example-lib/lib/ItemUtil');

//XXX WIP
  //find an object
module.exports = {
  requiredRole: PlayerRoles.ADMIN,
  usage: 'ofind',
  command: state => (args, player) => {
    player.save(() => {
      Broadcast.sayAt(player, "Saved.");
    });
  }
};
