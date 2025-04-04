/*


````````````````````  Type Operator ``````````````````````````

        1.  This operator is used to check type varible.

        2. categories of type operator

            Operator                        Description                         Example                             Output 

            typeof                      Return type                         console.log(typeof('5'))                String
            instanceof                  Checks Instance                     arr instanceof Array                    true
            
*/


        console.log(typeof('5'))                    // output : String
        console.log(typeof(5))                      // output : Number
        

        let arr = [1,2,3]

        console.log(arr instanceof Array)           // output : true



/*             ````````````      type operator  vs  instanceof    ``````````````````````````                                                      */

//      typeof :  Returns string representing the type ('numbers', 'string' , 'object' etc...)

//      instanceof  :  check if an object belongs to a class or constructor function



/////////////////////////////             Tips              ///////////////////////////


//                        typeof null === "object"                                        js BUG 

//                        instanceof check prototype chain 
