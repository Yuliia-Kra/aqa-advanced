const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sortedNum = []
for(let number of numbers){
    if(number % 2 == 0){
    sortedNum.push(number)
}}
console.log(sortedNum)