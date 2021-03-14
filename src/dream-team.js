const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    /* throw new CustomError('Not implemented');
    remove line with error and write your code here*/

    let arr = [];
    let members2 = [];
    let members3 = [];
    if (!members || arguments.length === 0) {
        return false;
    }
    for (let i = 0; i < members.length; i++) {
        if (members[i] != null) {
            members2.push(members[i].trim().toUpperCase())
        }
    }
    members2.sort();

    for (let i = 0; i < members2.length; i++) {
        if (typeof members2[i] === 'string') {
            members3.push(members2[i])
        }

    }
    for (let i = 0; i < members2.length; i++) {
        arr.push(members3[i][0])
    }

    return arr.join('');
}