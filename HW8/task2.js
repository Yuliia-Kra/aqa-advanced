const numbers = [1, 2, 3, 4, 5]
const newMassive = []
for(let i = 0; i<numbers.length; i++){
    newMassive.push(i*numbers[i])
}
console.log(newMassive)