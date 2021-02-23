

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let fromEuroToDollar = function(dollars){
    return dollars * oneEuroIs.USD;
}
let fromDollarToYen = function(yens){
    return yens * oneEuroIs.JPY;
}
let fromYenToPound = function(pound){
    return pound * oneEuroIs.GBP;
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

