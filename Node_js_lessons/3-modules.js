// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative_flavor');
require('./7-mind_grenade');
sayHi('Susan')
sayHi(names.jhon)
sayHi(names.peter)