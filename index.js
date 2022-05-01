import randomstring from 'randomstring';

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
        return randomstring.generate({ length });
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

export default randx;
