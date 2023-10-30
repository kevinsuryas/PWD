console.log("Hello, World!");

// Statement & Expression
// Statement --> Syntax yang tidak menghasikan apapun
// Expresion -> Syntax yang menghasikan sesuatu
console.log(2+2) // Statement & Expression
console.log(1+1) // Create Comment : CTRL+? or CTRL+/
/*
    This is
    JCWD2602
*/

// Variables
// Tempat untuk menyimpan data
// var variablename = value
console.log("Hello, JCWD")
console.log("Hello, JCWD")
console.log("Hello, JCWD")
console.log("Hello, JCWD")
console.log("Hello, JCWD")

var world ="Hello JCWD"
console.log(world)
console.log(world)
console.log(world)
console.log(world)
console.log(world)

// - Variable Rules:
// 1. Namignnya harus jelas
var streetName = 'soekarno'
// 2. First character must be alphabet or special character (_, $)
var studentName
// var 123studentName
// var #purwadikha
// dua var diatas error
// var _campus
var $program
// 3. Can't same with Javascript syntax
// var console.log
// var var
// 4. Use _ or camelCase (ex. studentName, student_name)
// var student name
// var student-name
var student_name
var studentNameJCWDProgram
// 5. Case sensitive (ex.studentName dengan StudentName)
var studentName ='Aboy'
var StudentName = 'Sipriadi'
console.log(studentName)

// Variable Declaration : Const & let
// var
// memungkinkan membuat variable dengan nama yang sama
var animal = 'Jerapah'
var animal = 'Gajah'
console.log(animal)
// valuenya masih bisa diubah
// akan mengikuti value terakhir, JS membaca code dr atas kebawah kiri ke kanan
var studentName = 'Raihan'
studentName= 'Bulan'
console.log(studentName)
// Tidak Memiliki aturan scope

//let
// Tidak diperbolehkan membuat variabale dengan nama yang sama
// untuk perhhitungan yang value banyak berubah
let campusPwd1 = 'BSD'
let campusPwd2 = 'JKT'
// Valuenya masih bisa diubah
let number = 10
number = 20
console.log(number)
// Memiliki aturan scope

// const (constanta)
// Tidak diperbolehkan membuat varibale dengan nama yang sama
// const point = 10
// const point = 20
// Valuenya tidak bisa diubah
const color = 'Red'
color = 'Blue'
// Memiiki aturan scope