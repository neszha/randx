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
// >> "AHsi6c2k1BS2b4Jx4v391h1JC3"

randx.generateKey(50);
// >> "1g0fBoI5h9183uRb4xG6EKm395q0Z9G21ibaE7RvJJn243Ph6Y"
```

Random array.
```javascript
const randx = require('randx');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

randx.randomArray(array);
// >> [3,8,4,7,2,5,6,9,1]

randx.randomArray(array);
// >> [3,1,8,7,4,9,2,5,6]
```

Random array with random key.
```javascript
const randx = require('randx');

const randomKey1 = '123*#abc';
const randomKey2 = 'abcdefg';
const randomKey3 = '63369d5337987abed6a80ff4'; // ObjectId in MongoDb
const randomKey4 = randx.generateKey(26);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

randx.randomArray(array, randomKey1); // >> [7,5,1,9,3,2,6,8,4]
randx.randomArray(array, randomKey1); // >> [7,5,1,9,3,2,6,8,4]

randx.randomArray(array, randomKey2); // >> [1,2,3,8,9,5,4,7,6]
randx.randomArray(array, randomKey2); // >> [1,2,3,8,9,5,4,7,6]

randx.randomArray(array, randomKey3); // >> [9,2,1,6,5,3,4,8,7]
randx.randomArray(array, randomKey3); // >> [9,2,1,6,5,3,4,8,7]

randx.randomArray(array, randomKey4); // >> [5,2,6,9,7,1,3,8,4]
randx.randomArray(array, randomKey4); // >> [5,2,6,9,7,1,3,8,4]

```

# Test
Run unit test using command:

```
npm run test
```

# LICENSE
randx is licensed under the MIT license.