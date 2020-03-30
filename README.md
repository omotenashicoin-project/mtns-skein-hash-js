# mtns-skein-hash-js

> Performs the skein hash.

## Installation
```
$ npm install --save mtns-skein-hash-js
```

## Usage

```js
var skein = require('skeinhash');

skein('Run skein hash');
// -> '74ef4926a2839af2f83efcab24c30127fc9170ee00f2b2134cb13db5846fc5f7'

```

## API

### skein(str)

#### str

Type: `string`

Get the skein hash.

### skein(str,input,output)

#### str

Type: `string` (input 0), 8 bit `array` (input 1), 32 bit `array` (input 2)

Get the skein hash as `string` (output 0), a 8 bit `array` (output 1), a 32 bit `array` (output 2).
