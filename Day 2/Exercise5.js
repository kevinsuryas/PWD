// Find Sum 1 to N SUM TOTAL N
const n = 10 // disebut perimeter
let total = 0 // 0 supaya hasil dari loop for di tampung disitu
for(let i=1; i <= n; i++){ //i mulai dari satu, i kurang dari n, setiap dihitung +1 karena i++
    total +=i
}
console.log(`Hasil Sum Total adalah ${total}`)

// Factorial Number
const num = 4
let totalFact = 1
for(let i=num ; i > 0 ; i-- ){
    totalFact *=i
} console.log(`Hasil Factorialnya adalah ${totalFact}` )

// Fibonacci
const nFibo = 5
let firstFibo = 0
let secondFibo = 1

for(let i = 2; i<= nFibo; i++){
    let nextFibo = firstFibo + secondFibo
    firstFibo = secondFibo
    secondFibo = nextFibo
}
console.log(secondFibo)