/*
    Arrow Function : 

        1.  Arrow function is a concise way to write a function expression, introduced in ES6.

        2.  Unlike Regular function, it dosent have its own this, argument & super , so its lexically binds this from its parent scope.

        3.  Its ideal for call back & functional programming.

        4.  Arrow functions are not suitable for constructors & methods needing thier own this.

        5.  Example : 

            Traditional VS Arrow function

                1.  Traditional Function :                              */

                    const add = function (a,b){
                        return a+b;
                    }

//              2. Arrow function : 

                    const sum = (a,b)=>  a+b;

/*      6. More Example : 

            1. NO parameter :                                                                                   */

                    const sayHi = ()=> console.log("Hi")
               
//          2.  One Parameter :

                const double = x => x *2 ;

//          3.  Multiple Statement :

                const divide = (a,b) => {
                    const result = a / b;
                    return result;
                }

//      7.  Arrow function do not have their own 'this' . They inherit this from parent context.

                function Timer(){
                    this.second = 0

                    setInterval(()=>{
                        this.second++;
                        console.log(this.second)
                    },1000);
                }

                new Timer();                    // this programs runs continous , so to stop you can use clear interval. after console.log






