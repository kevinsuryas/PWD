// Array
// Tipe data yang dapat menampung tipe data lainnya

// [...,...,...]
// [index ke-0, index ke-1, indexke-2, dst]

const student1 = 'Raihan'
const student2= 'Feri'
const student3= 'Aboy'
const students= ['Raihan', 'Feri', 'Aboy']
const data = ['Abc', 123, true, false, null, undefined] // bisa selain string

// Create Read Update Delelte (CRUD)
// Create
const campusPwd = ['BSD','JKT', 'BDG']

//Read
campusPwd // ['BSD','JKT', 'BDG']
campusPwd[0] // 'BSD'

//Update
let name ='Ryan'
name = 'Defryan'
// valuenya pertama berubah

const studentsName = ['Kiki', 'Bulan', 'Rahma']
studentsName[0] = 'Aboy'
console.log(studentsName)
studentsName[2] = 'Abed' 
studentsName[3] = 'Defryan' // menambah value baru

// Delete
delete studentsName[0] // menjadi empty items
console.log(studentsName)

//Method
// - Push : Menambahkan data di index paling akhir
const arrNumbers = [1,2,3]
arrNumbers.push(4,5,'abc')
console.log(arrNumbers)

// - Unshift : Menambahkan data di index paling awal
const alphabets = ['a','b','c']
alphabets.unshift('d','e')
console.log(alphabets)

// - Pop : Menghapus data di index paling akhir
const campusPwdNew = ['BSD', 'JKT']
campusPwdNew.pop()
console.log(campusPwdNew)

// - Shift Menghapus data di index paling awal
const arrRandom = [1, true, 'Abc']
arrRandom.shift()
console.log(arrRandom)

// - Splice: Bisa digunakan untuk menghapus atau menambah
// variableName.splice(index, howManyItemsToDelete, items)

// Menghapus using Splice
const programming = ['JS','PHP','Python']
programming.splice(0,2) // dimulai dihapus dari index ke 0 ke kanan
console.log(programming)

// Menambah using splice
const dataRandom = [1, true, 'A']
dataRandom.splice(1, 2, 'B', 'D') // index 1 dihapus 2 data ke kanan termasuk index 1 ditambah value baru
console.log(dataRandom)

const classPWD = ['JCWD', 'JCDM','JCDS']
// classPwd.splice(3,0, 'JCVD)
classPWD.splice (2,2)
console.log(classPWD)

// Add Data Manual vs Splice
// Data Manual
const arrNumberss = [1,2,3]
arrNumberss[5] = 10
console.log(arrNumberss) // index 3,4 menjadi <2 empty items>

//Splice
const arrNumbersss = [1,2,3]
arrNumbersss.splice(5, 0, 'BCD') // BCD masuk index ke 5
console.log(arrNumbersss)
