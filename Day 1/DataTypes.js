// DATA TYPES / TIPE DATA 
// Primitive : String, Number, Null, Undefined, Boolean
// Non-Primitive : Arracy&Obejct

// - String -> Tipe data yang ditandai dengan '',"" or ``
const campusPwd1 = 'BSD'
console.log(typeof campusPwd1)
const campusPwd2 = "JKT"
const campuspwd3 = `BDG`
console.log(typeof campusPwd2)
console.log(typeof campuspwd3)

const number = `100`
console.log(typeof Number)

// String Literal -> Untuk mempermudah kita dalam menyisipkan Syntax JS di string
const name = 'Defryan'
const hobby = 'Belajar'
console.log('My name is ' + name + ', My hobby is '+ hobby)
console.log(`My name is ${name}, My hobby is ${hobby}`)
// khusus untuk penggunaan $ harus pake `(backtick)

// - Number
const point =100
const num = 0.1
console.log(typeof num)

//  - Booelan -> Tipe data yang hanya bernilai tru &false
const isGraduated = true 
const isMarrid = false
console.log(typeof isGraduated)
console.log(typeof isMarried)

// - Null
const angka = null
// menjadi object harunsya null, karena kesallah data dari javascript (sumber stackoverflow)

// - Undefined
let angka1
console.log(typeof angka)
console.log(typeof angka1)

//- Date
const now = new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getFullYear())

//- Get Time
const firstDate = new Date('2023-10-23')
const secondDate = new Date('2023-10-26')
const firstMS = firstDate.getTime()
