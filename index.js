const randomString = () => {
    const numberRandom = Number(String(Math.random()).slice(2));
    return numberRandom.toString(36);
};

const randomUperCase = (string) => {
    const arrayString = string.split('');
    for (let i = 0; i < arrayString.length; i += 1) {
        if (Math.random() >= 0.5) {
            arrayString[i] = arrayString[i].toUpperCase();
        }
    }
    return arrayString.join('');
};

const randx = {
    list: [],
    randomKey: '',
    destKey: [],

    /**
     *
     * @param {Number} length
     * @returns String
     */
    generateKey(length = 26) {
        const randArray = [];
        const minRandomString = 10;
        for (let i = 0; i < Math.floor(length / minRandomString) + 1; i += 1) {
            const strRandom = randomString();
            const strUpercaseRandom = randomUperCase(strRandom);
            randArray.push(strUpercaseRandom);
        }
        const mergeString = randArray.join('');
        return mergeString.substring(0, length);
    },

    /**
     *
     * @param {Array} list
     * @param {String} key
     * @returns Array
     */
    randomArray(list, key = false) {
        this.list = [...list];
        this.randomKey = key;

        // Validate random key.
        if (this.randomKey === false) this.randomKey = this.generateKey();
        if (this.randomKey === '') return this.list;

        // Reverse random key.
        this.randomKey = this.randomKey.split('').reverse().join('');

        // Generate key.
        this.destKey = [];
        for (let i = 0; i < this.randomKey.length; i += 1) {
            const char = this.randomKey.charCodeAt(i);
            this.destKey.push(char % this.list.length);
        }
        const concatDestKey = () => {
            if (this.destKey.length < this.list.length) {
                const newDestKey = this.destKey.map((int) => ((int + this.destKey.length) % this.list.length));
                this.destKey = this.destKey.concat(newDestKey);
                return concatDestKey();
            }
            return true;
        };
        concatDestKey();

        // Exchange list.
        let indexOfList = 0;
        for (let i = 0; i < this.destKey.length; i += 1) {
            const exchange = [indexOfList, this.destKey[i]];
            const temp = this.list[exchange[1]];
            this.list[exchange[1]] = this.list[exchange[0]];
            this.list[exchange[0]] = temp;
            indexOfList += 1;
            if (!((i + 1) % this.list.length)) indexOfList = 0;
        }

        // Return result.
        return this.list;
    },
};

// Exports default.
module.exports = randx;
