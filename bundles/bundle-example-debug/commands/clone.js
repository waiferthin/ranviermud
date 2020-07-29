'use strict';

const { Broadcast, PlayerRoles, ItemType } = require('ranvier');
const ArgParser = require('../../bundle-example-lib/lib/ArgParser');
const ItemUtil = require('../../bundle-example-lib/lib/ItemUtil');
const uuid = require('uuid/v4');

//XXX WIP
  //make a clone of an object
module.exports = {
  requiredRole: PlayerRoles.ADMIN,
  usage: 'clone',
  command: state => (args, player) => {
    if (!args.length) {
      return Broadcast.sayAt(player, 'Clone what?');
    }

    if (!player.room) {
      return Broadcast.sayAt(player, 'You are floating in the nether, you cannot clone anything right now.');
    }

    // can't clone anything to inventory if your inventory is is full
    if (player.isInventoryFull()) {
      return Broadcast.sayAt(player, "You can't clone any more items.");
    }
    // get 3.foo from bar -> get 3.foo bar
    let parts = args.split(' ').filter(arg => !arg.match(/from/));

    let source = null, search = null, container = null;
    if (parts.length === 1) {
      search = parts[0];
      source = player.inventory;
    }

    const item = ArgParser.parseDot(search, source);
    if (!item) {
      return Broadcast.sayAt(player, "You don't see anything like that here.");
    }

    if (item.metadata.noPickup) {
      return Broadcast.sayAt(player, `${ItemUtil.display(item)} can't be picked up.`);
      console.log("Item cloned no pickup!");
      player.addItem(item);
    }

    console.log("Item cloned!");
//    state.ItemManager.add(item);
    player.inventory.addItem(item);
    item.uuid = uuid();
    console.log(item.id);
    Broadcast.sayAt(player, `<green>You have cloned: </green>${ItemUtil.display(item)}<green> with ID .${item.uuid}</green>`);
    player.save();
  }
};


/*    player.save(() => {
      Broadcast.sayAt(player, "Saved.");
    }); */
