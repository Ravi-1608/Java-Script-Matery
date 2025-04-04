/*

Comparison Operator :

    1. It is used for comparison
    2. It return true or false value
    3. Types : 

        Operator            Description                     Example                 Output
        ==                  Equal to ( loose Check )     5 == '5'                   true
        ===                 Equal & Type Check           5 === '5'                  False
        !=                  Not Equal                    5 !== '5'                  False
        !=                  Not Equal & Type Check       5 !=== '5'                 True
        >                   Greate than                  5 > 3                      True   
        <                   Less Than                    5 < 3                      False
        >=                  Geater than or Equal         5 >= 5                     True
        <=                  less than or equal to        5 <= 3                     false
*/



//      Tips : Always Prefer === for strict type checking

//              1.  == vs === ( Strict vs Loose Equality )

//                      == ( Loose Equality ) : It allows type conversion 
//                      === ( Strict Equality ) : it does not allow type conversion

                            console.log( 5 == '5')                  //output : true                 type is converted automatically while comaring
                            console.log(5 === '5')                  //output : false                type is not converted automaticaaly while comparing

