/*

    ``````````````````      Delete Operator         ```````````````````````````````````

        1. It is used to delete Object properties

        2. Delete remove object properties not variables.

        3. Delete does not works on variable declare with var, let & const

*/


//  Delete works on objects

        const user = { name : "ravi", age : 26 }

        delete user.age;

        console.log(user)                       // output : {name : "ravi"}

//  Delete doesnt affect on variables declare with let , Const or var ( if variable declare with var in global scope .... for more check next point)

        let num = 10

        delete num 

        console.log(num)                        // output : 10                      No error occurs but delete fails silently when used incorrectly

//  Delete works with var if declare in global scope 

        var a = 25;

        console.log(window.a)                   // output : 25

        console.log ( delete a);                // output : true                    varible declare with var at global scope is become property of window , and delete works with it             

        console.log(window.a)                   // output : undefined
