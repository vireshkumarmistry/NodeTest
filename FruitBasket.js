'use strict';

const _ = require('lodash');
const Fruit = require('./Fruit');

/*
 * Class Name:- FruitBasket
 * Description:- Responsible to handle the FruitBasket by it's instance
 */
class FruitBasket {
  /*
   * Data members:-
   * {string} id:- Store fruitbasket id data
   * {number} maxWeight:- Store fruitbasket maxWeight detail
   * {Array} content:- Store fruitbasket content data(Array of fruits)
   */
  constructor (id, maxWeight, content) {
    this.id = id;
    this.max_weight = maxWeight;
    this.contents = content;
  }

  /*
   * Method Name:- getBasketSummary
   * Description:- Return the basket details
   */
  getBasketSummary() {
    let totalWeight = 0;
    let fruitCounts = [];
    this.contents.forEach((item) => {
      let fruit = new Fruit(item.type, item.color, item.weight);
      totalWeight += fruit.getFruitWeight();
      let fruitType = fruit.getFruitType();
      let fruitCountObj = _.find(fruitCounts, {type: fruitType});
      if (_.isEmpty(fruitCountObj)) {
        fruitCounts.push({
          type: fruitType,
          count: 1
        });
      } else {
        fruitCountObj.count++;
      }
    });
    return {
      id: this.id,
      total_fruits: this.contents.length,
      total_weight: totalWeight,
      fruit_counts: fruitCounts
    }
  }
}

module.exports = FruitBasket;
