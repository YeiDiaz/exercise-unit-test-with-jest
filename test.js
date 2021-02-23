// one euro is:


test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One dollar should be 127.9 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yens = fromDollarToYen(3.5)

    // is 1 dolar son 127.9 yenes, entonces 3.5 dolar deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yens);
})

test("One yen should be 0.8 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(3.5)

    // is 1 yen son 0.8 pound, entonces 3.5 yenes deberian ser = (3.5 * 0.8)
    const expected = 3.5 * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
})
