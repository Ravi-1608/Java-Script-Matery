//  1.3.5: Create a program that checks if a number is positive, negative, or zero.


        let num = 0;

        if (num < 0)console.log('Negative Number')
        else if (num > 0) console.log('positive number')
        else console.log ('zero')



// write a program to display a day of a week by user input

    let input = "SUNDAY"
    let str = input.toLocaleLowerCase();

    console.log(str)

    switch(str){
        case 'monday' : 
            console.log("first Day")
            break;
        case 'tuesday' :
            console.log('second day');
            break;
        case 'wednesday' :
            console.log('third Day');
            break;
        case 'thursday' :
            console.log('fourth day');
            break;
        case 'friday' :
            console.log('fifth day');
            break;
        case 'saturday':
            console.log('sixth day')
            break
        default :
            console.log('holiday')
    }