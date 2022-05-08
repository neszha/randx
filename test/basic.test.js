const randx = require('../index');

describe('Random Array (Basic Test)', () => {
    const data = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        randomKey: '',
    };

    test('Generate random key', () => {
        data.randomKey = randx.generateKey();
        expect(data.randomKey.length).toEqual(26);
    });

    test('Generate random key [length: 100]', () => {
        const charLength = 100;
        data.randomKey = randx.generateKey(charLength);
        expect(data.randomKey.length).toEqual(charLength);
    });

    test('Random array', () => {
        const list1 = randx.randomArray(data.list);
        const list2 = randx.randomArray(data.list);
        expect(list1).not.toEqual(list2);
    });

    test('Random array with random key and return same position', () => {
        const list1 = randx.randomArray(data.list, data.randomKey);
        const list2 = randx.randomArray(data.list, data.randomKey);
        expect(list1).toEqual(list2);
    });
});
