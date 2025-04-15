/*

    Creating Objects : 

        1. Object Literal Syntax  : Most common use
        
            The simplest way to create a object .

            const user = {
                'name' : "Ravi",
                'age' : 25,
                'city' : Pune
                }

            When to use : 

                When you know the structure and value upfront.(like config objects, user details )

        2.  Using ES6 Classes :                                         
        
                When to use :   
                
                    Used heavily in a frameworks like React.                                                */

                        class User {
                        constructor(name, age) {
                            (this.name = name), (this.age = age);
                        }

                        greet() {
                            console.log(`Hi,I'm ${this.name}`);
                        }
                        }

                        const user1 = new User("Ravi", 25);

                        user1.greet(); // output : HI, I'm Ravi

/*      3.  Factory Funtion :

                A function that return a new object ,

                It is useful when you want object creation logic without dealing with this, new or class inheritance.               */

                    function createUser(name, age) {
                    return {
                        name,
                        age,
                        greet() {
                        console.log(`Hi I'm, ${name}`);
                        },
                    };
                    }

                    const user2 = createUser("Ravi", 25);

                    user2.greet(); // output : Hi I'm Ravi

/*      4.  Using Object.create() method:

                1.  Object.create() is a method of creating new object & sets a prototype of that new object to the object we passed as a argumetn.

                2.  I have used Object.create() in such a cases where i want to create a object with share behaviour ( object has similar properties ) but without using classes or constructor.
      
                3.  Object.create() allow me to set exact prototype i want for new object rather then relying on constructor function or clases.

                4.  This gives me precise control over inheritance and object behaviour, which is powerfull when i want to build reusable logic without over complicating the structure.                            */

                    const vehicle = {
                    wheels: 4,
                    info() {
                        console.log("Vehicles are best transportation");
                    },
                    };

                    const car = Object.create(vehicle);

/*      5.  Using Constrctor Function :

                    1.  In javascript , constructor function is traditional way to create multiple similar object before es6 were introduce classes.

                    2. It is similar to regular function, but when invoked using new key word , it creates new object & binds this (pointed toward new object ) to that object, and return it.

                    3.  Example :                                                   */

                    function User(name,age){
                        this.name = name,
                        this.age = age
                    }

                    const obj1 = new User("Ravi", 25);

                    console.log(obj1.name)

/*      6.  Using new Object() Constructor :    

                    1.  In javascript , new Object() is one of the built in way to create an object using a constructor.

                    2.  It created an empty object with the default Object.prototype

                    3.  After that we can add property dynamically.   
                    
                    4.  Not recomended to use it                                                        */

                        const User =   new Object();

                        User.name = "Ravi"

/*      7.  Dynamic or computed Property Name :

                    1.  In javascript computed or dynamic property allow us to create a object key based on variables or expression, insteed of hardcoding them.

                    2.  This is specially usefull when the property name is not known until runtime, 

                    3.  for example dealing with user inputs

                    4.  we use square bracket within the object literals to define computed keys.                           */


                    const key = "email"

                    const user = {

                        name : "ravi",
                        age : 26,
                        [key] : "ravi@lk.com"
                    }

                    console.log(user.email)

/*      8.  Spread or clone or merge object : 

                    1.  In javascript the spread operator (...) is very concise and modern way to clone or merge object. 

                    2.  To clone an object simple spread it into new one.                                                       */

                        const originalObj = {name : "Ravi", age : 25};

                        const newObj = {...originalObj}                 // This creates a shollow copy of the object, which is useful when i need to avoide mutating original data.

//                  3.  How to mer two objects :

                        const mergeObj = {...originalObj, ...newObj}

                        // if there are overlapping key, the later object newObj will overide the values from the earlier one .



                    
                    