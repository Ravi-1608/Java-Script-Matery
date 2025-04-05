/*

    Anonymous Function : 

        1. In javascript , anonymous function is a function without a name.

        2. It is mainly used when we dont need to reused this function elsewhere.

        3.  they are commonly used in callbacks, event listners or IIFE 

        4.  unlike name function ( function expression ),  anonymous function cant be called by name.

        5.  In ES6, arrow function are often used in place of anonymous function for cleaner syntax.

        6.  Basc Syntax :                                       */

            (function(){
                console.log("I'm Anonymous")
            })();                                                       // anonymous function used with IIFE

//      7.  use case :

            setTimeout (function(){
                console.log("executed after 1 second")
            },1000)