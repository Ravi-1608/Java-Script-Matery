/*

````````````````````   Nullish Coalescing  ```````````````````````

        Returns right hand value only if left hand value is null or undefined


*/

            let a = null;

            let username = a ?? 'ravi';

            console.log(username);                          // output : ravi


////////////////////////////////////////////        TIP        /////////////////////////////////////////

//            1. Use ?? when you want to avoide null and undefined but allowed 0 & "" (empty string)



                console.log(null ?? "ravi")                     // output : ravi
                console.log(undefined ?? "ravi")                // output : ravi
                
                console.log(0 ?? "ravi")                        // output : 0                    nullish only works with null and undefined
                console.log(0 || "ravi")                        // output : ravi                 0 is falsy so OR operator checks second value