// EVEN or ODD
const input = 20
if (input %2==0){
    console.log(`${input} is Even`) // 20 is ODD
}else{
    console.log(input + 'is Odd') // tanpa $)string) versi normalnya
}

// IS PRIME
// bilangan yang habis dibagi 1 dan dirinya sendiri

const number = 3
let isPrime = true
for (let i=2; i<number; i++){
    if(number % i ===0){
        isPrime=false
    }
}

if(number===1){
    console.log('Not Prime')
}else if (isPrime === true){
    console.log('isPrime')
}else{
    console.log('Not Prime')
}
