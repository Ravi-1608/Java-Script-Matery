/*

    IIFE : Immediately Invoked Function Expression

        1.  IIFE or Immediately Invoaked Function Expression in javascript is a function that execute immidiatel after it is define.

        2.  It is created by wrapping a function inside parentheses and then invoking it right away with another set of parenthesis.
        
        3.  The main reason for using IIFE is to create pricate scope.

        4.  Private scope means , Variables declare inside IIFE wont pollute global scope, this makes IIFE usefull for writing modular & isolated code. 

            Especially in frontend script and nodejs modules.

        5.  Before ES6 modules were introduce, IIFEs were a popular way to implement the module pattern - allowing us to expose only the neccesary parts of module while keeping internal details orivate.

        6.IIFEs are less common in modern JS due to ES6 import/Export ,but still valuable in certain cases,

            1.  Immidiately executing config/setup code. 
            
            2.  Isolating Logic in Script

            3.  When working in non module environment.

            
        7.  Syntax example :                                        */

            (function(){
                const secratekey = "anhshbdhb65465000";             // Secrate is not accessible outside. which helps the global scope clean.
                Console.log("IIFE is executed")
            })();
//      8.  Real World Example.   

            const AuthModule = (function(){

                let token = null;

                function login(user){
                    token = `${user}-authtoken`
                    console.log("Logged in with token")
                }

                function getToken(){
                    return token;
                }

                return {login, getToken}

            })();

            AuthModule.login("ravi");
            console.log(AuthModule.getToken());
            

            