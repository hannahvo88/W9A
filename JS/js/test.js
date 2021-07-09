var age = [15, 16, 17, 18, 19, 20, 21];
var is_subcribed = [true, false, false, false, true, true, false];
for (var i=0; i < age.length; i++){
        console.log(age[i]);
        console.log(is_subcribed[i]);

        if (age[i] < 18 && is_subcribed[i] == true) {
            console.log ("The user is younger than 18 and is subscribed");
        }else if (age[i] >=18 && is_subcribed[i] == true){
            console.log ("The user is 18 or older and is subscribed");
        }else if (age[i] < 18 &&  is_subcribed[i] == false){
            console.log ("The user is younger than 18 and is not subscribed");
        }else {
            console.log ("The user is 18 or older and is not subscribed");
        }
    }
    
    


