/*

    Functions in Jacascript :

        1.  Function is a reusable block of code to perform a specific task.

        2. Syntax : 

            function functionname(parameters){

                code 

                return;
            };
        3. Example :                                                            */

            function addition(a,b){
                let sum = a + b;

                return sum;                             // function always return something                                     

            }
            let sum = addition(1,2)                     // calling a function
            console.log(sum)                           // output : 3        
            
/*      4. Types of Function ;

            1.  Function Declaration

            2.  Function Expression

            3.  Arrow Function

            4.  Anonymous Function

            5.  Imidiate Invoaked Function Expression (IIFE)
            
            6.  Callback function

            7.  Higher order function

            8.  recursion function

            9.  closure function                                                                                                     */

/*      5. Parameter VS Arguments

            5.1 Parameters : 

                When a function is execute that time at staring the is a round bracket with some values , that values are called as parameters.

                Types :

                    5.1.1   Default Parameters:

                        1. Default parameter in javascript allows us to assign default values to function parameter.

                        2. if no arguments is passed at the time of function call then default values are used 
                    
                        */

                        function greet(name1 = "Guest"){                     // name1 is a default parameter

                            console.log('hello' , name1)
                        }
                    
                        greet()                         // output : hello Guest
                        greet('Ravi')                   // output : hello Ravi


/*                  5.1.2   Rest Parameter : 

                        1.  Rest parameter allows a funtion to accept undefinite number of arguments as an array.

                        2.  it uses ... syntax 

                        3.  it helps when we dont know how many numbers of arguments  will be passed to the function.

                        4.  only one rest parameter is is allowed per function
                        
                        5. always passed rest parameter after the name parameters.

                        4. exampl :                                                                                     */


                            function print(a , b , ...num){                     // ...num is rest parameter & is always write at last

                                console.log(a)
                                console.log(b)
                                console.log(num)

                            }

                            print(1,2,3,5,4,6,7)            //  output : 1 2 [3,5,4,6,7]
              
/*                         
            5.2 Arguments :

                1.  In javascript , an argument is a actula value that we passed to a function when calling it. 

                2.  these values are assigned to functions parameter, this parameters are like place holders in the function declration

                3.  a function can take multiple arguments

                4.  javasript functions are flexible - if we pass fewer arument (like we have 5 parameter in function but we only pass 3 arguments) then missing parameters are undefined

                5. if we passed more argumnets ( like if we have 2 parameters in function and we passed 4 arguments  ) then remaining arguments are ignored,

                6. if we dont want to ignore remaining arguments we can collect them in rest parameter as an array

                            function example1 ( a,b,c,d,e){

                            console.log(a,b,c,d,e)
                            
                            }

                            exmple1(1,5,6)                              // output : 1 5 6 undefined undefined 



                            funtion example2(a,b,c){
                                console.log(a,b,c)                     // output : 2 3 5 
                            }

                            example2(2,3,5,6,4)                       6 & 4 are ignore
                            
                            
                            function example3(a,b,c,...num){            // rest parameter is used
                                console.log(a,b,c,num)                 
                            }

                            example3(4,5,6,9,6,7,8)                    // output : 4 5 6 [9, 6 , 7 , 8]                     


            5.3 Example :                                                           */

                function sum (a, b){                    // a & b are parameters

                    return a+b;

                }

                sum(5,10)                               // 5 & 10 are arguments

/*      6.  Return Statement :

            1.  In javascript return statement is used inside a function to stop its execution and send a value back to where the fucntion is called.

            2.  the code after the return keyword will not execute further. 

            3. it ends the function execution

            4. if no return is used , then the function return undefined by default.

*/














