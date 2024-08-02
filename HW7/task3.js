function divide(numerator, denominator) {
    if (denominator === 0 ) {
        throw new Error("You can not divide on 0");
    } else if(!Number.isInteger(numerator) || !Number.isInteger(denominator)){
        throw new Error("Your number isn't integer")
    }
    return numerator / denominator 
}

try{ 
    console.log(`Result is: ${divide(0,"test")}`)
}
catch(error){
    console.error(error.message)
}
finally{
    console.log("Work is completed")
}