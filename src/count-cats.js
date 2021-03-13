const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    /*throw new CustomError('Not implemented');
    remove line with error and write your code here*/
    let cats = 0;
    let res = matrix.join().split(",");

    for (let i = 0; i < res.length; i++) {
        if (res[i] === '^^') {
            cats++
        }
    }
    return cats;
}