// Javascript has two categories in Data Types : 

// 1. Primitive Data Types 
// 2. Reference (Non-Primitive) Data Types


// ** Primitive Data Types ( Stored By Value ) **

    // 1. They are Immutable 
    // 2. They are Store by Value 
    // 3. They are store in a stack 

        // 1. Number
        // 2. String 
        // 3. Boolean 
        // 4. Undefined 
        // 5. Null 
        // 6. BigIn 
        // 7. Symbol 

//  ** Refrence Data Type ** 

    // 1. They are mutable
    // 2. They are store by refrence 
    // 3. refrences are store in stack and date is store in Heap Memory. 

        // 1. Object 
        // 2. Array 
        // 3. Function 
        // 4. Date 
        // 5. Map
        // 6. Set



// -------------------------********------------------------------------

// ** Primitive Data Types ( Stored By Value ) **
        // 1. Number
                        // JS has only one type of number : Integers & Decimals are both number 
                        let a = 10;
        // 2. String 
                        let str1 = 'Ravi';
                        let str2 = "Mane";
                        let str3 = "I am from ${Pune}";  // Template Literals
        // 3. Boolean 
                        // logical values True & Flase
                        // Used in conditions
                        let isAdult =  age > 18;

        // 4. Undefined 
                        // when variable is declare but not assigned (By default it is undefinded)
        // 5. Null 
                        // When variable is declre but want to intensionally empty they null is used
                        // type of null is Object ( it a bug in javascript )
        // 6. BigIn 
                        // Used for veru large number
                        // used n at the end of number

        // 7. Symbol 
                        // A unique identifier that prevents property name conflicts.


//  *** Refrence Data Types ***

        // object : 
            // object are key value pair, where key are string and values are any data type.
            // object are mutable so modifiying one reference can affect all.
                let obj1 = {name : "ravi"}
                let obj2 = arr1;

                obj2.name = "mane";
                console.log(obj1);          // output : {name : "mane"}
                console.log(obj2);          // output : {name : "mane"}

        
        // array : 
            // array are special objects that are store in ordered list
            // Arrays are mutable so modifying one refrence can affect all
                let arr1 = [1,2,3]
                let arr2 = arr1;

                arr2.push(4);
                console.log(arr1);          // output : [1,2,3,4]
                console.log(arr2);          // output : [1,2,3,4]

            // to copy an array withous refrence we use spread operator

                let arr3 = [1,2,3]
                let arr4 = [...arr1];

                arr4.push(4);
                console.log(arr3);          // output : [1,2,3]
                console.log(arr4);          // output : [1,2,3,4]
            
        // Function : 

            // functions are first class objects 
            // they are stored in a variable
            // Passed as a argument
            // functions are also object meaning they have properties.

        // Date :

            // js provides build in Date object to handle dates & Time.

                let today = new Date();

                console.log(today.toDateString)         //output : Mon Apr 01 2025
                console.log(today.getFullYear)          // output: 2025

        // Map : 

            // It store key value paires
            // It allows any data type as a key. (unlike array only allow string as a key )

                let data = new Map([
                    ['1' , "ravi"],
                    ['age', 25],
                    ['lastname', 'mane']
                ])

                console.log(data.get(1));           // output : ravi
                console.log(data.get(age));         // output : 25

        // Set : 
                
            // A set stores only unique value 

                let Data = new set ([1,2,2,3,5,5,6,7,7,8])

                console.log(Data);          // output : {1,2,3,5,6,7,8}


                // ---------------------------------------------*******----------------------------------------------



// ********Type Checking & Conversion *****


    // Checking types : ( type of )
            
                let A = 10;
                let B = "ravi";
                let C = true;
                let D = undefined;
                let E = null;
                let F = {};
                let G = function(){};
                let H = Symbol();
                let I = [];

                console.log(typeof(A))          // output : Number
                console.log(typeof(B))          // output ; String
                console.log(typeof(C))          // output : boolean
                console.log(typeof(D))          // output : undefined
                console.log(typeof(E))          // output : object           Javascript Bug
                console.log(typeof(F))          // output : object
                console.log(typeof(G))          // output : function
                console.log(typeof(H))          // output : Symbol
                console.log(typeof(I))          // output : object
                console.log(Array.isArray(I))   // output : True

    // Type Conversion 

                // Number to String : 

                    let num = 10 ;

                    console.log(typeof(num));           // output : number

                    let Num = String(num);
                    
                    console.log(Num);               // output : String

                // String to Number

                    // Using Number() 

                        // Converts Valid numeric String Into Numbers 
                        // If the String Contains Non numeric charaters , it returns Nan


                            console.log(Number("43"))           // output : 43          converted to number
                            console.log(Number('43.5'))         // output : 43.5        Works for decimal
                            console.log(Number('   10  '))      // output : 10          Ignores a number
                            console.log(Number(''))             // output : 0           Empty String Converts to Zero
                            console.log(Number('Hello'))        // output : NaN         Not A Number
                            console.log(Number('100px'))        // output : NaN         Contains Letter

                    // Using ParseInt() 
                        // Converts a string into an integer
                        // Stops at the first non numeric character
                        // Best when you want whole number only

                            console.log(parseInt('43'))         // output : 43          
                            console.log(parseInt('3.44'))       // output : 3               Ignores Decimal Part
                            console.log(parseInt('100px'))      // output : 100             stop at px 
                            console.log(parseInt('   100xyz'))  // output : 100             Ignores Leading space  
                            console.log(parseInt('xyz100'))     // output : NaN             No leading numbers 

                    // Using parseFloat()
                        // Converts a String into an integer
                        // Stops at the first non numeric character
                        // best when dealing with decimal number

                            console.log(parseFloat('10'))           // output : 10
                            console.log(parseFloat('13.54'))        // output : 13.54       keeps decimal value
                            console.log(parseFloat('12.54xy'))      // output : 12.54       keeps decimal and leading number
                            console.log(parseFloat('   14.85xyz'))  // output : 14.85       ignore leading space and keeps leading number
                            console.log(parseFloat('xyz123'))       // output : NaN         No lading Number



                    // Using Unary + operator() 
                        // A short trick to convert strings to number 
                        // Best for Quick conversion 

                            console.log(+'10')              // output : 10       
                            console.log(+'15.25')           // output : 15.25
                            console.log(+'   20')           // output : 20          Ignores Spaces
                            console.log(+'')                // output : 0           pty String converts Zero
                            console.log(+'hello')           // output : NaN         No Numbers
                            console.log(+'  20xyz')         // output : NaN         Charaters are include


                    // Using Math.floor() 
                        // Used to convers string to numbers for round up
                        // Best when you need rounding

                            console.log(Math.floor('3.56'));        // output : 4           Round up the value

                    // Using Math.ceil()
                        // used to converts string to number for round Down
                        // Best when you need rounding
                            console.log(Math.ceil('5.6'));      // output : 5       round down the value

                    // Using Math.round()
                        // Used to cinvert string to number for nearest 
                        // best wehn you need rounding
                            console.log(Math.round('4.6'));         // output : 5       round up to nearest value
                            console.log(Math.round('7.2'));         // output : 7       round down to nearest Value

                    // Using JSON.parse()
                        // works only for valis JSON Numbers
                        // Best for parsing numbers from JSON Data

                        console.log(JSON.parse("42"));          // output : 42
                        console.log(JSON.parse("3.14"));        // output : 3.14
                        console.log(JSON.parse("true"));        // output : Error (Not a Number ) 
                        console.log(JSON.parse('"100"'));       // output : Error ( String Inside JSON ) 
                        



                


