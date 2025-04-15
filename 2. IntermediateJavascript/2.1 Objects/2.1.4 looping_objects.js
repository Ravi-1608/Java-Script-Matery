`
    Looping through Objects :

        1.  for ... in loop : 

            1.  the for...in loop in javascript is used to iterate over the enumurable (properties that can be iterated ) properties of an object

            2.  It allows you to loop through each property name in an object one by one.

            3.  example :`

                const user = {
                    name :"Ravi",
                    age : 25,
                    role : "developer"
                }

                for (let key in user){
                    console.log(keys)
                }

`           4.  Important Note :

                    for...in also iterate over inherited properties from the prototype chain. To avoid unexpected behaviour , its best practice to check using ${ hasOwnProperty }:`

                    const user1 = {
                        role : "developer"
                    }

                    const ravi = Object.create(user1);

                    ravi.name = "Ravi";
                    ravi.age = 25

                    console.log(ravi)                           // output :  { name : "Ravi" , age : 25 }

                    for (key in ravi){
                        console.log(key)                        // output : name age role                   -- unexpected role property is printed which is inherited to avoide this use below
                    }

                    for (key in ravi){
                        if (ravi.hasOwnProperty(key)){              // hasOwnProperty will ensure that inherited property will not be iterated
                            console.log(key)                    
                        }
                    }










