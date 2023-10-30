// LOOPING -> Perulangan
// console.log('Hello, World')
// console.log('Hello, World')
// console.log('Hello, World')
// console.log('Hello, World')
// console.log('Hello, World')

// - While
/* 
    while(condition){
        block of code
    }
*/
let start = 1 // 1-->2 ; 2-->3 ; 3-->4
while(start <=3){ // 1<= 3? true 2<=3? true --> 3<= 3? truee --> 4<= 3? false
    console.log('Hello, World!') // 1x--> 2x--> 3x
    start ++
}

let initial =1
while(initial < 3){ // true --> false
    console.log('Hai!')
    initial += 10 //+= mempersingkat syntax, harusnya initial = initial+10, += syntax singkat
    // jika hanya initial +10 maka nilai initial tidak akan berubah dan terjadi infinity loop
}


// - Do - While
/* 
    do{
        block of code
    } while(condition)
*/
    let angka = 1 // 1->2; 2->3 ; 3->4
    do{
        console.log(angka) // 1x-> 2x -> 3x
        angka++
    }while(angka <=3)
    // hasil adalah 1, 2, dan 3 sesuai conditionnya

    let angka2 = 100
    do{
        console.log(angka2)
        angka2++
    }while(angka2 <10)
// while gak jalan karena condition error, tapi do tetap jalan karena uturan pengerjaan syntax dr atas

// - For Loop
/*
    for(start; condition; exitWay){
        Block of code
    }
*/
for(let i=1; i <= 3; i++){
    console.log(i)
} // sama seperti do while, hanya ini dipersingkat saja, urutannya tetap i=1 ke i <=3 ke consolelog, baru ke i++

