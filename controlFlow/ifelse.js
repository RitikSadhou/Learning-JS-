const score =100;
// Note :-  "==" is cheaked only value equal or not BUT "===" stictly equal opreator cheak value and also type of value 
if(score===100){
    console.log("WIN");
}
else{
    console.log("Lose");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}