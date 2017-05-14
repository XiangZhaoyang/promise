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
    console.log('c:',c, '    ', 'a:', a, '    ','b:', b);
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

var getA1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        a = 1;
        console.log('a: ', a);
        resolve(a);
    }, 10);
});

getA1.then(function(value) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            b = 2;
            console.log('b: ', b);
            resolve(b);
        }, 20);
    });
})
.then(function(value) {
    getC();
});

// var getToC = function() {
//     getA();
//     setTimeout(function(){
//         getB();
//         setTimeout(getC, 0);
//     }, 0);
// };
// getToC();


var m,n;
var f1 = function() {
    for (var i = 0; i < 10000*10; i++) {
        var n = 1000000*i;
    }
    m = n;
};
var f2 = function() {
    n = m + 1;
    console.log(n);
};
// f1();
// f2();

// //回调
// var f = function(callback) {
//     setTimeout(function() {
//         f1();
//         callback();
//     } ,0);
// };
// f(f2);

//事件

var EventMitter = (function() {
    var el = document.getElementById('b1');
    var ev;
    var etype;
    function EventMitter(type) {
        etype = type;
        ev = new Event(type);
    }

    EventMitter.prototype.on = function(fuc) {
        el.addEventListener(etype, fuc);
    };

    EventMitter.prototype.trigger = function(callback) {
        el.dispatchEvent(ev)
        callback();
    };

    return EventMitter;
})();


var f = new EventMitter('cop');
f.on(f1);
f.trigger(f2);
console.log('hello');