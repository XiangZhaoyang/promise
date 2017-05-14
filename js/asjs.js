var a,
    b,
    c,
    d,
    e;

var getA = function() {
    setTimeout(function() {
        a = 1;
        console.log('a: ', a);
    }, 10);
};

var getB = function() {
    setTimeout(function() {
        b = 2;
        console.log('b: ', b);
    }, 20);
};

var getC = function() {
    // getA();
    // getB();
    c = a + b + 1;
    console.log('c: ',c);
};

// getC();

// var get = function(callback) {
//     setTimeout(callback, 0);
// };

// get(function() {
//     getA();
//     get(function() {
//         getB();
//         get(function() {
//             getC();
//         });
//     });
// });

var getToC = function() {
    ;
}; 