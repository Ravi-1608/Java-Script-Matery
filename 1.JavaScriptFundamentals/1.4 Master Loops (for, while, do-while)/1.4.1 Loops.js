/*

    1. LOOPS 

        1.1 Types of Javascript Loops : 

            1.  for : When the number of iteration is known
            
            2.  while : When the number of iteration is unknown ( runs until a condition is met )

            3.  do - while : similar to while , but runs at least once.

            4.  for ... in : Loop through object property

            5.  for .... of : Loops through iterable values ( array, string , map, sets )                                                          

        1.2 Loop Control Statement 

            1. break :

                break keyword are used in loops to end the loop at particulr condition.

            2. continue : 

                continue keyword used in loops to jump into next iteration by skipping current iteration ata certain condition.

            3. label with break :

                when there are nested loops and if we use break keyword inside nested loop then only inner loop will breat at certain condition. but

                if we want to break outer loop using break keyword inside the inner loop then we have to give label to this loop and then end the loop using break keyword.

                    outerloop : for(let i=0; i<5;i++){                                                    label is created to loop 
                            for (let j=0;j<5;j++){
                                console.log(i*j);
                                if j === 3 break outerloop;                                                 label is used to break the outer loop                                                                                      
                            }

                            console.log(i)
                    }
        
        
        
        
        
        
        1.3 Loop Performace Consideration

            1. for loop is faster than for...in & for...of when iterating over arrays

            2. while loop can be efficient when breaking out early.                                                                        

        1.3   Best Practice for large arrays                                                                    */

                // dont use 

                            for (let i = 0; i<arr.length; i++){'...'}       

                                // accesing arr.length is time consuming so define it earlier for performance optimization
                    
                // Use this 

                            let len = arr.length;

                            for (let i=0; i<len;i++){'...'}

                            

      


        
