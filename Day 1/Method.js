// METHOD
// Shortcut Untuk memanipulasi data

// 1. String Built-in Method
// .lenght -> Untuk menghitung jumlah karakter
const paragraph = 'Abcdefghijklmnopq'
console.log(paragraph.length)

// .slice -> Untuk memotong
const text = 'Hello, World!'
console.log(text.slice(2,5))

// .substring -> Apabila parameter index pertamanya > dari parameter index kedua, maka
// akan dilakukan switch
const nama = '123456789' 
console.log(nama.substring(5,2)) // Dimulai index ke-2, sampai index ke-5 (index ke-5 tidak termasuk)

// .toUpperCase & .toLowerCase
const fullname='Defryan'
console.log(fullname.toUpperCase())
console.log(fullname.toLowerCase())

// 2. Number Build-in Method
// .toString -> Mengkonversi dari number menjadi string 

const phoneNumber =6285668594765
console.log(phoneNumber.toString().slice(0,5))

// -Math Round -> Pembulatan sesuai aturan matematika
console.log(Math.round(1.4))
console.log(Math.round(1.5))
// Match Ceil -> Pembulatan keatas
console.log(Math.ceil(1.2))
// Match Floor -> Pembulatan kebawah
console.log(Math.floor(1.9))



