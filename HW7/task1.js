function handleNum(number, handleEvenCb, handleOddCb){
    
    if(number % 2 == 0 ){
        handleEvenCb(number)
    } else {
        handleOddCb(number)
    }
}
function handleEven(number){
        console.log(`${number} number is even`)
}
function handleOdd(number){
    console.log(`${number} number is odd`)
}
let num = 8
handleNum(num, handleEven, handleOdd)