'use strict';

const { Broadcast, ItemType } = require('ranvier');
const ArgParser = require('../../bundle-example-lib/lib/ArgParser');

module.exports = {
  usage: 'prompt',
  command : (state) => (args, player, arg0) => {
    if (!args || !args.length) {
      return Broadcast.sayAt(player, player.prompt);
    }

    let parts = args.split(' ');
    let prompt = ''
   for(let i = 0;i < parts.length;i++) {
      if (parts[i] === "%h") {
       prompt += '<b><red>%health.current%</red></b>/<red>%health.max%</red> <b>hp</b> ';
      }
      if (parts[i] === "%m") {
       prompt += '<b><red>%movement.current%</red></b>/<red>%movement.max%</red> <b>mv</b> ';
      }
/*      else {
      prompt +=
    } */
    }
    player.prompt = '[ ' + prompt + ']'

}
};
