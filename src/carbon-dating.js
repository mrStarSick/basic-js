const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    /* throw new CustomError('Not implemented');
      remove line with error and write your code here*/
    if (typeof sampleActivity !== "string" || isNaN(sampleActivity) || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15 || !sampleActivity.trim()) {
        return false;
    }

    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
};