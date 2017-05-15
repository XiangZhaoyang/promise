var PromiseN = (function() {
    var pending = 0,
        fulfilled = 1,
        rejected = 2;
    var status = pending;
    var val;

    var resolve = function(value) {
        status = fulfilled;
        val = value;
        // console.log(status, '  ', val);
    };
    var reject = function() {};

    function PromiseN(callback) {
        callback(resolve, reject);
    }

    PromiseN.resolve = function(value) {};
    PromiseN.reject = function() {};
    PromiseN.all = function() {};
    PromiseN.race = function() {};

    PromiseN.prototype.then = function(onFulfilled, onRejected) {
        // if(status === fulfilled) {
        //     onFulfilled(value);
        // } else if (status === rejected) {
        //     onRejected();
        // }
        // console.log(status);
        var timer = setInterval(function() {
            if(status === fulfilled) {
                onFulfilled(val);
                // console.log(val, ' ', status);
                clearInterval(timer);
            } else if (status === rejected) {
                onRejected();
            }
        }, 20);
    };

    PromiseN.prototype.catch = function() {};

    return PromiseN;
})();



// var myFirstPromise = new Promise(function(resolve, reject){
//     //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
//     //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
//     setTimeout(function(){
//         resolve("成功!"); //代码正常执行！
//         console.log('12345');
//     }, 250);
// });
// console.log('hello,world');
// myFirstPromise.then(function(successMessage){
//     //successMessage的值是上面调用resolve(...)方法传入的值.
//     //successMessage参数不一定非要是字符串类型，这里只是举个例子
//     console.log("Yay! " + successMessage);
// }).then(function(a) {
//     console.log('hello');
// });

var a,b;
// setTimeout(function() {
//     b = 2;
// }, 1000);
// a = b+1;
// console.log(a);
promise = new PromiseN(function(resolve, reject) {
    setTimeout(function() {
        b = 2;
        resolve(7);
        console.log('b', b);
    }, 3000);
});
promise.then(function(value) {
    a = b+1;
    console.log('a:', a, '   ', 'b:', b, 'value', value);
});

//事件对象
var EventMy = (function() {

    //任务队列
    var eventA = [];

    var EventMy = function() {};

    EventMy.prototype.on = function(type, handle) {
        if (!eventA[type]) {
            eventA[type] = [];
        }
        if ((typeof handle) == 'function') {
            eventA[type].push(handle);
        }
    };

    EventMy.prototype.trigger = function(type){
        if (eventA[type]) {
            eventA[type].forEach(function(item, idnex) {
                item();
            });
        }
    };

    return EventMy;
})();

var myEvent = new EventMy();

myEvent.on('show', function() {
    console.log('hello, world!');
});

myEvent.on('show', function() {
    console.log('heihei');
});

myEvent.trigger('show');