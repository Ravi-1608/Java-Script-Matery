/* 

-----------------------     Arithmetic Operators       ------------------------------------------

    1. It used for Mathematical Calculation.

    2. Operators 

        1. Addition         (+)     : used for addition of two numbers
        2. Substraction     ( - )   : Used for Substraction of two numbers.
        3. Multiplication   ( * )   : Used for MUltiplication of two Numbers.
        4. Division         ( / )   : Used for division of two numbers.
        5. Modulus          ( % )   : Used for to get remainder of two number when divided
        6. Expontiation    ( ** )  : Used to get Power of any number


*/

// TIP :  you can find squre root using Expontiation .

        let a = 25;

        let b = a**0.5  
                                    
        console,log(b)                  // output : b = 5;

// Implicit Type coercion in Js (Wierd Conversion)

        console.log(1 + '2')            // output : 12                   ( Number + String => String )
        console.log('1' + 1 )           // output : 21                   ( String + Number => String )
        console.log(1 + '5' + 1)        // output : 151                  ( Number + String + Number => All Converted to string )
        console.log('5'- 1 )            // output : 4                    ( String - Number => Number )
        console.log('5'*'6')            // output : 30                   ( String * String => Number )
        console.log(true + true )       // output : 2                    ( true -> 1 , So 1 + 1 )
        console.log(false + 1 )         // output : 1                    ( False -> 0, So 0 + 1 )
        console.log('a' - 'ravi' )      // output : NaN                  ( Invalid Number Substraction ) 
        console.log('r' + 'avi' )       // output : ravi                 ( when two string are add they get addes it is called as string concatination )


