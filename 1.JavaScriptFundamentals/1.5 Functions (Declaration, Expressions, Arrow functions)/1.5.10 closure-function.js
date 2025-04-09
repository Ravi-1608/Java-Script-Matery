/* 

    Closure Function : 

        1.  A closure is created when function is defined in another function and retain access to out function variable, even after the outer function has finished executing.

        2.  closure allow us to maintain state, create private variables & implement function factorise.

        3.  A closure is a combination of function & its lexical enviroment - it means that an innner function remembers the variable from its outer function, even after the outer function is returned,

        4.  I have used closures for things like cpunters, creating private states & debouncing input search in react.

        5.  Every function is js creates a closure.

        6.  closures are usefull but can cause memory leak if not managed well.

        7.  Example :                                   */

            function outer (){
                let counter = 0;

                return function inner(){
                    counter++
                    console.log(counter)
                }
            }

            outer()