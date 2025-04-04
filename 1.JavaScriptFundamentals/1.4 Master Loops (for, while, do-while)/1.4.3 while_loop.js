/*

    While Loop : 

        While loop is used when we need condition based iteration 
        
        Best Use Case : When we don't know the number of iteration in advance.

            1.  Basic Syntax :  

                while ( condition ){
                    code to execute
                }                                                                            */

                    let i = 0;

                    while(i<5){
                        console.log(i)
                        i++;
                    }

                    // output : 0 1 2 3 4
            
//          2. Continue keyword in while 

                    let j = 0;

                    while(j<5){
                        if (j===3)continue;
                        console.log(j)
                    }

                    // output : 0 1 2 4
                    
//          3. infinite loop in while 

                    while(true){
                        console.log("infinite Loop")
                        break;                              // remove this line to make infinite loop
                    }

