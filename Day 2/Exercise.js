// pake loop menampilkan angka dari 10 ke 1
for(let i=1; i <=10 ; i++){
    console.log(i)
}

for(let i=10; i>=1 ; i--){
    console.log(i)
}

// Buatlah program untuk menampilkan setiap character yang ada di dalam variable
// Menggunakan console.log
// Ex. Input = 'Pwdk'
//      Output = P
//               W
//               D
//               K

const input = 'Pwdk' // cara yang kurang efektif pake index manual
console.log(input[0])
console.log(input[1])
console.log(input[2])

const input1 ='pwdk' // efektif tapi while nya belum efektif, jika data berubah tidak adaptasi
for(let i=0; i<=3 ; i++){
    console.log(input1[i])
}

const input2 ='pwdkabcde' // lebih efektif karena input.lenght mengikuti jumlah kata
for (let i=0 ; i< input2.length; i++){
    console.log(input2[i])
}

// Buatlah program untuk menampilkan setiap angka pada sebuah data bertipe data number
// Ex. Input : 62857853331
//      Output : 6
//               2
//               3
//               dst...

const input4 = 62857853331
for (let i=0; i< input4.lenght; i++){
    console.log(input4[i])
} // SALAH, number belum jadi string

let number = 62456736
number = number.toString()
console.log(number[0]) // cara manual
for (let i=0; i< number.length; i++){
    console.log(number[i])
}
