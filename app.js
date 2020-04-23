'use strict';

const fs = require('fs');
const FruitBasket = require('./FruitBasket');

/*
 * Method Name:- _readJsonFile
 * Description:- Reads input json file
 */
function _readJsonFile(callback) {
    fs.readFile('input.json', (err, data) => {
        if (err) {
            return callback(new Error('There was an error while reading the json file'));
        }
        return callback(null, JSON.parse(data));
    });
}

/*
 * Method Name:- _writeJsonFile
 * Description:- Writes into output json file
 */
function _writeJsonFile(data, callback) {
    fs.writeFile('output.json', data, (err) => {
        if (err) {
            return callback(new Error('There was an error while writing the json file'));
        }
        return callback();
    });
}

/*
 * Method Name:- _prepareAndWriteFruitBasketSummary
 * Description:- Prepares fruit basket summary and writes into output json file
 */
function _prepareAndWriteFruitBasketSummary(callback) {
    let output = [];
    _readJsonFile((err, data) => {
        if (err) {
            return callback(err);
        }
        if (!data) {
            return callback(new Error('There was no record found'));
        }
        data.forEach((item) => {
            let fruitBasket = new FruitBasket(item.id, item.max_weight, item.contents);
            let summary = fruitBasket.getBasketSummary();
            output.push(summary);
        });

        _writeJsonFile(JSON.stringify(output), (err, data) => {
            if (err) {
                return callback(err);
            }
            return  callback();
        });
    });
}

_prepareAndWriteFruitBasketSummary((err) => {
    if (err) {
        console.log('error', err);
        process.exit(1);
    }
    console.log('success');
    process.exit(0);
});
