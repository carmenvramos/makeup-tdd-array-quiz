const assert = require('assert');
const { arrays } = require('../lib/arrays');

describe('Dont Ask Why', () => {
    it('Takes array of words & returns a new array with words with y or Y removed', () => {
        const array = ['sky', 'hot', 'Yeti', 'green'];
        const newArray = dontaskwhy(array));
        assert.equal(newArray, ['Is it hot?', 'Is it green?']);
    
});