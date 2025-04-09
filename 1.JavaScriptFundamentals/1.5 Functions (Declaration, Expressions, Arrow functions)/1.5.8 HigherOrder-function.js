/*

    Higher Order Function :

        1. In javascript, HOF (Higher Order functions) is a function that take a other function as an argument or return a function or doing both.

        2. This is possible beacause in javascript , functions are first class citizens - meaning they are trated like any other value which can be assined, passed & return.

        3.  Functions like map() , filter(), reduce() are higher-order functions becasue they accept call backs.

        4.  Common Example :

            1. Functions takes another function : (call back)               */

                function greet(username, callback) {
                callback(username);
                }

                greet("ravi", (name) => console.log("hello " + name));

//          2.  Function return another function :

                function addition(a) {
                return (b) => {
                    let rem = a % b;

                    if (rem === 0) {
                    console.log(b + " is divisible by " + a);
                    return rem;
                    }
                    console.log(b + " is not divisible by " + a);
                    return rem;
                };
                }

                const result = addition(5);

                result(5);

//          3.  Both take & return a function :

                function fn1(add){
                    return (x,y)=>{
                        return add(x,y)
                    }
                }

                const add = (a,b)=>a+b;

                const res = fn1(add)
                console.log(res(5.6))

//          4.  Real word usage

//              1.  Array Methods

                    const numbers = [ 1,2,5,6,8,9 ]

                    const square = numbers.map(n=>n*n);                 // output : [ 1 4 25 36 64 91 ]

                    const evens = numbers.filter(n=>n%2);               //  output : [ 2 6 8 ]

                    const sum = numbers.reduce((acc,cur)=>acc+cur,0)    //  output : 15
