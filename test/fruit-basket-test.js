const chai = require('chai');
const assert = chai.assert;

const FruitBasket = require('../FruitBasket');
describe('FruitBasket test scenarios', () => {
    const basketData = {
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "max_weight": 8,
        "contents": [{
            "type": "apple",
            "color": "green",
            "weight": 1.5
        }, {
            "type": "apple",
            "color": "red",
            "weight": 1
        }, {
            "type": "pear",
            "color": "green",
            "weight": 2.5
        }]
    };
    const expectedData = {
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "total_fruits": 3,
        "total_weight": 5,
        "fruit_counts": [{
            "type": "apple",
            "count": 2
        }, {
            "type": "pear",
            "count": 1
        }]
    };
    describe('getBasketSummary: returns summary of a fruit basket', () => {
        it('Success scenario', (done) => {
            const fruitBasket = new FruitBasket(basketData.id, basketData.max_weight, basketData.contents);
            const summary = fruitBasket.getBasketSummary();
            assert.deepEqual(summary, expectedData, 'Expected data was not returned');
            done();
        });
    });
});
