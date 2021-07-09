var age = 21;
var is_subcribed = true;
is_subcribed = false;

if (age < 18 && !is_subcribed) {
    console.log ("The user is younger than 18 and is not subscribed");
}else if (age >=18 && !is_subcribed){
    console.log ("The user is older than 18 and is not subscribed");
}else if (age < 18 && is_subcribed){
    console.log ("The user is younger than 18 and is subscribed");
}else{
    console.log ("The user is older than 18 and is subscribed");
}