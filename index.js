var kappa = require('kappa-core')
var ram = require('random-access-memory')
var memdb = require('memdb')
var Osm = require('kappa-osm')

module.exports = function () {
  return Osm({
    core: kappa(ram, { valueEncoding: 'json' }),
    index: memdb(),
    storage: function (name, cb) { cb(null, ram()) }
  })
}
