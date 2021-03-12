const humanCatDogYears = number => {
    let humanCatDogYearsArr = []
    return humanCatDogYearsArr = [
        number,
        (number - 1 ? 16 : 11) + 4 * number,
        (number - 1 ? 14 : 10) + 5 * number,
    ];
};

module.exports = humanCatDogYears;
