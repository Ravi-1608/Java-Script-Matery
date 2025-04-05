/*

    Function Declaration : 

        1.  A function declaration is one of the way to define function in a javascript.

        2.  It started with function keyword, followed by function name , then parameters in parenthesis and block of code inside curly braces.

        3.  function declaration are hoiseted, meaning they are moved to the top of there scope during the compile phase, so you can call them before the line where they are defined.

        4.  function declaration are usefull when we need the function to be hoisted and accessible anywhere in the code.

        5.  Example :                                      

            5.1 function Declaration                             */

                function greet(name){
                    console.log("Hello, "+ name)
                }

//          5.2 Function Declaration with hoisting

                sayhello("ravi")                                // output : Hello ravi              function is hoisted & accessible

                function sayhello(name){
                    console.log("Hello, "+ name)
                }

            
                                
