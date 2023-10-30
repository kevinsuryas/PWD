// Luas Persegi Panjang
let panjang = '5'
let lebar = '3'
let luasPersegipanjang = panjang*lebar
console.log(luasPersegipanjang)

// Keliling Persegi Panjang
let lenght = '5'
let width = '3'
let kelilingPersegipanjang = (lenght*2) + (2*width)
console.log(kelilingPersegipanjang) 

//Diameter, Keliling, dan Luas Lingkaran
let radius = '5'
let pi = '3.14'
let diameter = 2*radius
console.log(diameter)
let keliling = pi*diameter
console.log (keliling)
let luas = pi*radius*radius
console.log (luas)

//Mencari sudut segitiga
let angleA = 80
let angleB = 65
let angleC = 180-(angleA + angleB)
console.log (angleC)

//Selisih antara hari
const d = new Date()
let time = d.getTime()

const firstDate = new Date('2022-01-20')
const secondDate = new Date('2022-01-22')
const firstMS = firstDate.getTime()
const secondMS = secondDate.getTime()
console.log(firstMS)
console.log(secondMS)

const differentDate = (secondMS-firstMS)
console.log(differentDate/1000/60/60/24)
console.log(differentDate)

//Cara pak Defryan



//NOMOR 6 convert days to Years, Months, Days
const totalDays = 400
const year = Math.floor(totalDays/365) // dibulatkan kebawah supaya sisanya untuk bulan dan hari
let daysLeft = 400 % 365 // 35 hari
const month = Math.floor(daysLeft / 30) // 1month
daysLeft = daysLeft % 30 // 35 Days % 30 days = 5 days

console.log(`${year} year, ${month} Month, ${daysLeft} Days`)

// Modulus
console.log(5%4) //1
console.log(6%4) //2
console.log(50%3) // 3x.... = 50 --> 3x16 =48 ---> Sisa Bagi =50-48 = 2
console.log(21%7) // 0


