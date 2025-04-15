`

    Object Destructuring : 

        1.  Object Destructuring is a clean and concise way to extrct multiple properties from object & assign them to a varible in one line.``

        2.  Example :` 

            const user = {
                name : "Ravi",
                age : 25,
                city : "pune"
            }

            const { name ,age } = user;                                 // Example of destruturing here name & age are extracted from user.

            console.log(name);                                          //  output : Ravi
            console.log(age)                                            // output : 25

`       2.  Why use it :

            1.  Cleaner Code

            2.  Avoids repeatative dot notation

            3.  Common in reac propos handeling & Node js API.

        3.  Renaming Variables :`

            const {name : UserName, age: UserAge } =user;

            console.log(UserName)                               // output : Ravi
            console.log(UserAge)                                // output : 25

`       4.  Setting Default Values : `

            const {country ="India "} = user;

            console.log(user)

`       5.  Destructuring with rest operator :`

            const user1 = {
                username : "Ravi",
                age : "25",
                city : "pune"
            }

            const { username , ...rest } = user1;

            console.log(username)
            console.log(rest)

`       6.  Using Function Parameter : `

            function greet({name,age}){                                         //  extracting properties using destructuring
                console.log("My name is "+ name + " & I am " + age + "old" )
            }

            greet({name : "ravi",Age : 25})                                         // passed an object as a argument



            


