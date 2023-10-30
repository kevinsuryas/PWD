// Funtion
// Tempat untuk menyimpan baris code

// Funtion Declaration
/*
    function functionName (){
        Block of code
    }
*/
// 1. Build
function showConsole(){
    console.log('Hellow World')
}
// 2. Call
showConsole()

// Hoisting (keluar di exam) -- > Call baru build function, penjumlahan () diatas function
function Penjumlahan(){
    console.log(1+1)
}
Penjumlahan ()

// Selama function di luar variable bisa dipanggil kapan saja

// Funtion Expression : Function yang dimasukan kedalam variable
const Pengurangan = function(){ // funtion -> Anpnympus Function
    console.log('Function Expression')
}
Pengurangan()

// - Arrow Function
const Perkalian = () => { // () => -> Anonymous Function
    const num1 = 5
    const num2 = 10

    console.log(num1 * num2)
}
Perkalian()

// Function with Parameter
const Pembagian = (num1, num2) => { // 10 -> num1, 5 -> num2
    console.log(num1 / num2) // 10 / 5 = 2
}
Pembagian (10, 5) // 10 & 5 disebut argument

function Perkaliann (num1, num2) {
    console.log(num1 * num2)
}
Perkaliann(3, 3)

// Function with Return
const Penjumlahan1 = (num1, num2) => {
    return num1 + num2
}

console.log(Penjumlahan1(3, 3 +3))
console.log(Penjumlahan1(3, 5))

// Function with Rest Parameter
const showNumber = (a, b, c, ...manyMore) => { // ... titik harus 3 value manyMore bebas
    console.log(manyMore)
}
showNumber (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// Function with Default Parameter
const welcomingName = (name = 'User') => {
    console.log(`Welcome, ${name}!`)
}
welcomingName('Raihan')
welcomingName('Aboy')

// Recursive Function (tambahan jarang dipakai)
const countDown = (num) =>{
    console.log (num)
    num --

    if(num > 0 ){
        return countDown(num)
    }
    return num
}

console.log(countDown(5))


// Closure Function
const greeting =() => {
    const name= 'Defryan'

    const showGreeting = () => {
        console.log(`Welcome, ${name}`)
    }
}