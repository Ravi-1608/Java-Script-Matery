/* 

    Callback Function :

        1.  A call back is a function that passed as an argument to anothor function, and it gets call later , usually after some task is done.

            1.  Reading a file

            2.  waiting for a timer

            3.  Handeling an event

            4.  making API calls

            5.  Middleware in express.

        2.  Call backs are mainly used for asynchronous operations in javascript, for example in node js, functions like fs.radFile use callbacks to handle a result after a file is read.

        3.  Sometime if we use many nested call backs , the code becomes hard to read & we call that callback hell.

        4.  Thats why is modern js, we often prefer using promisess & async/await for better readability, but understanding call back is still very imporatnt.            
        
        5.  Example .                                                                                                   */

            setTimeout(() => {
                console.log("This runs after one second")
            }, 1000);

            // This is a callback function passed to Setimeout 

/*      6. Call Back function can be name or anonymous

            1. Named Function :                                                             */

                function greet(name){
                    console.log("Hello "+ name)
                }


                function welcomeuser(username,callback){
                    callback(username);
                }

                welcomeuser("ravi", greet);                     // function is pass as an argument which call as callback function.

//          2.  Anonymous Function : 

                function greetings(username,callback){
                    callback(username)
                };

                greetings("ravi",(username)=>{                      // functions pass as an argument which call after some condition it becomes call back function
                    console.log("hello "+ username)
                });
