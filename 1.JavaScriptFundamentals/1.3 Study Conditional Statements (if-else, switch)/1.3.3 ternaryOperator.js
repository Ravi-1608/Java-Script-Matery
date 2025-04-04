/*

    1. Ternary Operator : 

        1.1 syntax : 

            condition ? true statment : false statement ;
        
            Shortest syntax than if else and switch 

        1.2 Use : 

            Best for short & Single line function.

            Best for single condition.
        
            Can be messy if to many nested conditons

        1.3 Basic Example :                                         */

            const age = 20;

            (age <= 18 ) ? console.log("Minor") : console.log("Adult");


            // Equivalent to 

            let Age = 20;

            if(age <= 18){
                console.log("Minor")
            }else {
                console.log("Adult")
            }

/*      
        1.4 Nested Ternary Operator                                                             */

            let score = 50;
            let grade = "";

            (score >= 90 ) ? grade = "A" : 
            (score >= 80 ) ? grade = "B" :
            (score >= 70 ) ? grade = "c" : grade = "D";

            console.log(grade)
            

            // Equivalent to 

            let score1 = 90;

            if (score1 >= 90){
                grade = "A";
            }else if (score1 >=80 ){
                grade = "B"
            }else if (score1 >= 70){
                grade = "C"
            }else {
                grade = "D"
            }

            console.log(grade)
