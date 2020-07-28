'use strict';

module.exports = [
  {
    name: 'health',
    base: 100,
    formula: {
      requires: [],
      fn: function (character, health) {
        return health + (character.level ** 2);
      },
    },
  },
  {
    name: 'movement',
    base: 100,
    formula: {
      requires: [],
      fn: function (character, movement) {
        return movement + (character.level ** 2);
      },
    },
  },
  { name: 'energy', base: 100 },
  { name: 'strength', base: 0 },
  { name: 'dexterity', base: 0 },
  { name: 'intellect', base: 0 },
  { name: 'stamina', base: 0 },
  { name: 'charisma', base: 0 },
  { name: 'armor', base: 0 },
  { name: 'resist_fire', base: 0 },
  { name: 'resist_cold', base: 0 },
  { name: 'resist_pois', base: 0 },
  { name: 'resist_acid', base: 0 },
  { name: 'resist_elec', base: 0 },
  { name: 'resist_mind', base: 0 },
  { name: 'resist_magic', base: 0 },
  { name: 'race', base: '' },
  { name: 'sex', base: '' },
  { name: 'alignment', base: '' },
  { name: 'kills', base: 0 },
  { name: 'deaths', base: 0 },
  { name: 'fame', base: 0 },
  { name: 'height', base: 0 },
  { name: 'weight', base: 0 },
  { name: 'timeplayed', base: 0 },
  { name: 'atlas', base: 0 },
  { name: 'critical', base: 0 },
];
