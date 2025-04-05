/* 

    Function Expression : 

        1.  In javascript , When a function is assigned to a variable it becomes a function expression.

        2.  unlike function declaration, it does not hoisted means you can not access this function before it defines.

        3. It can be a named function or anonymous function.

        4. It is commanly used in a situaltion where function is used as values , such as call backs or higher order function.

        5. Example ; 

            1. Anonymous function as a function expression :                                     */

                const greet = function (name){
                    console.log("Example of anonymous function as a function expression")
                    console.log("Hello, "+ name)                                                // output : Hello, Ravi
                }
                greet("Ravi")

//          2. Named function ( function declaration ) as a function expression : 

                const add = function sum(a,b){
                    return a+b;
                }

                console.log(add(2,3))                                   // output : 5