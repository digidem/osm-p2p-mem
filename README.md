# osm-p2p-mem

> Create an osm-p2p-db instance backed entirely by in-memory storage.

Quick and easy! Each instance has no shared mutable global state. Great for
use in unit tests.

## Usage

```js
var osmdb = require('osm-p2p-mem')

var osm = osmdb()

// ready to use! no async wait.
```

## API

```js
var osmdb = require('osm-p2p-mem')
```

### var osm = osmdb()

No arguments. Creates a new
[`osm-p2p-db`](https://github.com/digidem/osm-p2p-db) instance.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install osm-p2p-mem
```

## See Also

- [osm-p2p](https://github.com/digidem/osm-p2p)
- [osm-p2p-db](https://github.com/digidem/osm-p2p-db)

## License

ISC

