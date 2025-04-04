// Variables are Containers for Storing DATA

// JS variable can be declare in 4 Way

//  1. Automatically
//  2. Var
//  3. let
//  4. const

// NOTE : It is consider good pragramming practice to always decleare variables before use.

 
// 1. var
    // a. it has a function scope. ( it means it is acceessible throut the function where it is declare)
    // b. it can be reasigned
    // c. it can be redeclare
    // d. it is hoisted & initialised with undefined ( you can use it before declaration but you will get the valuse as undefined)

            console.log(a) // undefined
            var a = 10;

    // e. if var declares in globally ,it becomes a property of window

            var x = 10 ;
            console.log(window.x)  // output : 10


    
// 2. let 
    // a. it has a block scope. ( it means it is accesible only inside curly braces {} where it is declre )
    // b. it can be reassigned
    // c. it can not be re-declared
    // d. it is hoisted but BUT NOT initialised ( using them before initialized gives refrence error)

            console.log(r) // refrence error : can not access a before initialization
            let r = 10;

    // e. if let declares globally , it do not attach with window
            let z = 10 
            console.log(window.z)   // output : undefined

// 3. const 
    // a. it has block scope
    // b. it can not be reassigned (immutable) ( except object & array, if it is object or array thenits properties can be modified )
    // c. it can not be redeclare
    // d. it is hoisted BUT NOT initialised ( using them before initialised gives refrence error )

    const obj = {name :"Ravi"}
    obj.name = "Mane"       // allowed

    const arr = [1,2,3,4]
    arr.push(4);            // allowed

    obj = {}            // TypeError : Assignment to constant variable 

    // e. if const declare globally , it do not attach to window

            const y = 10;
            console.log(window.y)       // output : undefined

    // f. const with mutable data structure

        const obj = { name : "ravi"};
        obj.name = "mane";              // Allowed (modifying the Property)

        obj = {name : "mane"}           // Not Allowed ( reassigning is not allowed )

    // to make object and array immitable use freeze property

        Object.freeze(obj)              // this will not allowed modification
    


    



// TDZ - Temporal Dead Zone
    // 1. let & const are hoisted but can not be initialized 
    // The time between start of execution & when the variable is declare is called temporal dead zone.
    // If you trying to access variables in dead zone causes (results) refrence error.

    console.log(a) // RefrenceError : Cannot Access 'a' before initialization
    let a = 10;

    // Key Takeaway : Avoide using let & Const before initialization

