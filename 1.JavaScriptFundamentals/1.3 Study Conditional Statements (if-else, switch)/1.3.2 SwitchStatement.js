/*

    1.  Switch 

        1.1 Use :

            The switch statment is useful when dealing with multiple conditions instead of writing mutiple if-else-if.

        1.2 Thumb Rule : 
        
            Use switch for fixed values & if-else for comparision and complex conditions.

        1.3 Only compares equality (===)



        1.4 Benifit : 

            More readable while multiple conditions.

        1.5 Example                                                                                                         */

            const day = "monday";
            switch(day) {

                case "monday" : 
                    console.log("weeks working 1st day")
                    break;
                case "friday" : 
                    console.log('weeks working last day')
                    break;
                case "sunday" : 
                    console.log("Chill it sunday , enjoy your day")
                    break;
                default :
                    console.log("its regular day")
            }

/*          1.5.1   Use break to prevent fall-through

            1.5.2   Always use deafult case

        1.6 Handeling Multiple Cases together :                                                    

            1.6.1   group cases when multiple conditions have same output                */

                const day1 = "monday";

                switch(day1){
                    case 'monday' :
                    case ' tuesday' :
                        console.log('work from office')
                        break
                    case 'wednesday' :
                    case 'thurday' :
                    case 'friday' :
                        console.log('work from home')
                        break
                    default : 
                        console.log("holiday")
                }

                

