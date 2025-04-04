/*

---------------  Logical Operator  -----------------------

    1. this operators are used with booleans

        Operator                Description                     Example                     Output

        &&                          And                         true && false               false
        ||                          OR                          true || false               true
        !                           Not                          !true                      false 

*/ 

// It is used for short circuit evaluation 

//          ( && ) AND : Stops & Returns first falsy value
//          ( || ) OR  : Stops & returns first truely value 


            console.log(0 && "hello")                       // output : 0                   since the first value is 0 & is it always false so stop at falsy 
            console.log('hi' && "hello")                    // output : hello               since the first value is true it will check second , here both are true thats why second value will be returns
            console.log('hi' || "hello")                    // output : hi                  since the first value is true , it does not check second value because it stops & return first truely value
            