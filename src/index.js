module.exports = function getZerosCount(number, base) {
  // your implementation
  let dividers = factorizator(base);
    let powsOfDev = dividers.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});

    for (let divider in powsOfDev) {
        powsOfDev[divider] = {
            divider: +divider,
            pow: powsOfDev[divider],
            summ: 0,
        }
    }

    for (let value in powsOfDev) {
        for (let i = powsOfDev[value].divider; number / i >= 1; i = i * powsOfDev[value].divider) {
            powsOfDev[value].summ += Math.floor(number / i);
        }
    }

    let zeros = [];
    for (let value in powsOfDev) {
        zeros.push(Math.floor(powsOfDev[value].summ / powsOfDev[value].pow));
    }
    return Math.min(...zeros);

};

function factorizator(num) {
    let result = [];
    for (let m = 2; m <= Math.sqrt(num); m++) {
        for (; num % m == 0; num = num / m) {
            result.push(m)
        }

    }
    if (num != 1) {
        result.push(num);
    }
    return result;
}