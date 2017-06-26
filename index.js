var hyperlog = require('hyperlog')
var memdb = require('memdb')
var store = require('memory-chunk-store')
var osmdb = require('osm-p2p-db')

module.exports = function () {
  var db = {
    log: memdb(),
    index: memdb()
  }

  return osmdb({
    log: hyperlog(db.log, { valueEncoding: 'json' }),
    db: db.index,
    store: store(4096)
  })
}
