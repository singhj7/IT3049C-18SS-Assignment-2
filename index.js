// TODO: Get a reference to our form



// TODO: Get a reference to our input
function generateRandomNumber(){
    return Math.floor(Math.random() * 101);
}//Gen Rand Num

//TODO: Display intitial random number

const intitialNumber = generateRandomNumber();
const nextNumber = generateRandomNumber();

//document.getElementById("initialNumberHolder").innerHTML = `Starting number: ${ initialNumber }`;

//TODO: Add submit event listener

//TODO: Process input, generate new random number, compare

function process(){


    if (intitialNumber() > nextNumber()){
        
    }else if (intitialNumber() < nextNumber()){

    }else{

    }
}

//TODO: Provide user restart method

console.log(intitialNumber, nextNumber);