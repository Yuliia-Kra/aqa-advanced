const car1 = {
    brand: "KIA",
    model: "Sorento",
    year: 2024
}
const car2 = {
    brand: "Skoda",
    model: "Kodiaq",
    owner: 2023
}
const car3 = { ...car1, ...car2}
console.log(car3)