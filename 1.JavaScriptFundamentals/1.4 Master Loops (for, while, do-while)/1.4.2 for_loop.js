/*

    1.  for Loop : 

        1.1 Basic Syntax : 

            for (initialization; condition; increment/decrement ){ 

                code to execute 
            
            };                                                                              */

                for (let i = 0 ; i < 5; i++ ){

                    console.log(i);
                }

                // output : 1, 2, 3, 4, 5                                                     
/*
        1.2.  Continue keyword : 
                
                Continue keyword is used in for loop to skip that iteration and jump to next iteration when continue key word hits :        */

                for (let i=0; i<5; i++ ){
                    if (i ===2 )continue

                    console.log(i);
                }

                // output : 0 1 3 4
        
/*      1.3. break Keyword 

            Break Keyword is used in for loop to break or end the loop at certain condition             */

                for (let i=0; i<5; i++){
                    if (i===4)break;

                    console.log(i);
                }

                // output : 0 1 2 3

/*
        1.4 Looping reverse                                                                 */

                for (let i = 5; i>0; i--){

                    console.log(i)

                }
            
                // output : 5 4 3 2 1 

//      1.5 Loop without initialzation  ( Using External Variable )

                let i = 0;

                for (;i<5; i++){

                    console.log(i)

                }
                
                // output : 0 1 2 3 4 

//        1.6 Infinite Loop ( Be Carefull )

                for (; ; ){
                    console.log("Do not remove below break keyword, infinite loop will start")

                    break;                  // remove this line for infinite loop 
                }


