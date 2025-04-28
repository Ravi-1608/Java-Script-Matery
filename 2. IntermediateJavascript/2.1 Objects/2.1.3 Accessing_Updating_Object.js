`

    Accessing & Updating Properties : 

        1. Dot Notation : ( Most Common ) 

            Dot Notation is the most common method used to access and update objects.

            2.  It is used when the property name is valid identifier. It means it does not contains space , special character and start with a number.

            3.  Dot notation is clean , readable and ideal when key is know and fixed. If we need dynamic or complex property names , then we will use bracket notation.

            4.  Exampele : `

                const user = {
                    name : 'Ravi',
                    age : 28
                }

                console.log(user.name)                      // Dot notation is used to access object name property

                user.age = 30;                              // Dot notation is used to update object age property.
`
        2.  Bracket Notation : 

            1.  Bracket Notation is a second way to used acess and update objects.

            2.  It used square bracket [] and allow the property name to be passed as a string or variale.

            3.  It is used when the propert name is store in a variable.

            4.  when property name has space, special character,or start with number ( i.e. not a valid identifier )

            5.  when we are working with dynamic keys such as API responses or loops.`


                const User1 = {

                    'first name' : "Ravi",
                    age : 25
                }

                let key = 'age';

                console.log(User1[key])                         //  Square brackets are used to access user age.

                User1[key] = 28;                                // square brackets are used to update user age.

`       3.  Deleting Property :

            1.  In javascript we can property of object using delete operator.

            2. It removes the property and value from the object entirly.`

                const User5 = {
                    name : "RAVI",
                    age : 22
                }


                console.log(User5.age);                         // output : 22

                delete User5[age];

                console.log(User5.age);                         // output : undefined

            









            
                
                
                
                
                
                
                
             

            