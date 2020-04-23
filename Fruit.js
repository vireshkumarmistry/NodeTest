'use strict';

/*
 * Class Name:- Fruit
 * Description:- Responsible to handle the Fruit by it's instance
 */
class Fruit {
    /*
     * Data members:-
     * {string} type:- Store fruit type data
     * {string} color:- Store fruit color detail
     * {number} weight:- Store fruit weight data
     */
    constructor(type, color, weight) {
        this.type = type;
        this.color = color;
        this.weight = weight;
    }

    /*
     * Method Name:- getFruitType
     * Description:- Return the fruit type
     */    getFruitType () {
        return this.type;
    }

    /*
     * Method Name:- getFruitWeight
     * Description:- Return the fruit weight
     */
    getFruitWeight () {
        return this.weight;
    }
}

module.exports = Fruit;

