# randx

Module for randomizing arrays with position key.

The position of a random array can be stored in a key. The key is a "random key". Random key can be reused to get a random array position.

## Installation

To install randx, use npm:

```
npm install randx
```

To install randx, use yarn:

```
yarn add randx
```

## Usage

Generate random key.
```javascript
const randx = require('randx');

randx.generateKey();
// >> "mdBKQmuIUjdDDHaGOd7cfdniAO"

randx.generateKey(50);
// >> "JdK3gfefeMAcqRulFVhWE5QlgqEMdVQ0Gg5iaJ8YhQGxvPa40o"
```

Random array.
```javascript
const randx = require('randx');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

randx.randomArray(array);
// >> [7,8,6,1,9,2,5,4,3]

randx.randomArray(array);
// >> [7,4,5,2,8,9,6,3,1]
```

Random array with random key.
```javascript
const randx = require('randx');

const randomKey1 = '123*#abc';
const randomKey2 = 'abcdefg';
const randomKey3 = randx.generateKey(26);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

randx.randomArray(array, randomKey1); // >> [9,8,6,5,1,4,3,7,2]
randx.randomArray(array, randomKey1); // >> [9,8,6,5,1,4,3,7,2]

randx.randomArray(array, randomKey2); // >> [5,6,7,8,9,1,2,3,4]
randx.randomArray(array, randomKey2); // >> [5,6,7,8,9,1,2,3,4]

randx.randomArray(array, randomKey3); // >> [3,5,1,2,7,4,9,6,8]
randx.randomArray(array, randomKey3); // >> [3,5,1,2,7,4,9,6,8]

```

# Test
Run unit test using command:

```
npm run test
```

# LICENSE
randx is licensed under the MIT license.