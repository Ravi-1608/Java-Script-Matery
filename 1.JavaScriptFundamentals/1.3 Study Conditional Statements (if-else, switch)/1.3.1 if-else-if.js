/*

````````````````` If Else If ```````` DEEP DIVE `````````````````````


    1. Ways to write if else

        1.1. if statement
        1.2. if else 
        1.3. if else if 
*/



//          1.1. if statement         


                if (true ){
                    console.log("this is a if statement")
                }
                
/*              1.1.1 Short Hand If Else

                    1.1.1.1 you can write is as to avaoide un-neccesary braces              */


                        if (true) console.log("this is a if statement")

//          1.2. if else statement        


                if (false) {
                    console.log ("true statement");
                }else{
                    console.log("false statement");
                }

/*              1.2.1 Short Hand If Else      

                    1.2.1.1 you can write is as to avaoide un-neccesary braces                                  */

                        if (false) console.log ("true statement")
                        else console.log ("false statement")
            
            
//          1.3. if else if statement       
                
                if (false) {
                    console.log("if statement")
                }else if(false){
                    console.log("multiple else if statement")
                }else {
                    console.log("else statement")
                }
/*              
                1.3.1 Short Hand If Else
                    1.3.1.1 you can write is as to avaoide un-neccesary braces */

                        if (false) console.log("if statement")
                        else if (false) console.log("multiple else if statement")
                        else console.log("else statement")

/*
    2. Truthy & Falsy Values in if-else

        2.1. Java-script treats some values as falsy. i.e they evaluate as a false in an if condition.

        2.2. Everything else are truthy.


            2.1.1 Falsy values in javasript   //////////////////

                1.  false                   boolean false

                2.  0                       number zero

                3.  ""                      Empty String

                4.  null                    Null value

                5.  undefined               Undefined Value 

                6.  Nan                     Not a Number


            2.2 Below statement wont execute due to falsy values in condition

*/              if (false) console.log('falsy!');                    // won't execute
                if (0) console.log("number Zero")                     // wont execute 
                if ("") console.log("Empty String")                  // wont execute
                if (null) console.log("Null value")                   // wont execute
                if (undefined) console.log("Undefined Value")        // wont execute
                if (NaN) console.log("Not a number")                // wont execute 


/* 
    3. Short Circuiting Using && and || Instead of if - else

        3.1 && executes the second statement only if the first is truthy

        3.2 || returns the first truthy value

*/  
//          3.1.1   Example 

                let user = "ravi";

                    user && console.log(`hello, ${user}`)               //  output : hello ravi             Executes only if user is truthy


//          3.2.1   Example 

                let Name = "";

                    console.log(Name || 'Ravi')                         // output : Ravi                    Name has empty string so becomes falsy  

    
/*    
    4.  TIPS        
    

        4.1. In if condition Avoide unexpected falsy value .
        4.2. use if else for range check or comparison like ( < , > , && etc......)
        4.3. Good for complex codition 
        4.4. performance is efficient while using for comparison

*/