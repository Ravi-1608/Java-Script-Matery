/*

    for...in Loop : 

        Best Use Case : Iterating over object properties . 

            1.  Syntax :                                                              */
            
                const obj = { name : "ravi", age : "25"};

                for ( let key in obj ){                      // we can access only keys of objects
                    console.log(key);
                }

                // output : name age


//          2.  Use for...in only for objects

//          3. Dont use for...in for arrays as it loops only keys, not the values

//          4. Bad example : not recomded to use for array beacuse it only provide index of array not the value, but in for...of loop you can get directly the value


                const arr = ['a', 'b','c']

                for (let index in arr){

                    console.log(arr[index])                     
                }


