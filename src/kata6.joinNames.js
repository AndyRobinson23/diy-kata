const joinNames = namesObj => {
    return namesObj.reduce(function (prev, current, index, array) {
        if (index === 0) {
            return current.name;
        }
        else if (index === array.length - 1) {
            return prev + ' & ' + current.name;
        }
        else {
            return prev + ', ' + current.name;
        }
    }, '');
};

module.exports = joinNames;
