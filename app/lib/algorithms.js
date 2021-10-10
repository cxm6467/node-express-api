function arrays(algo, arr) {
    var result = {};
    
    result.algorithm = algo;
    result.result = arr;

    return result;
}

function strings(algo, str) {
    var result = {};
    
    result.algorithm = algo;
    result.result = str;

    return result;
}

module.exports = {
    arrays: arrays,
    strings: strings
};