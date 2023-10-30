// MUTABLE VS IMMUTABLE

// MUTABLE : Non-Primitive
// Variable yang valuenya bisa dirubah
let arr = [1, 2, 3] // [index-0, index-1, idex-2, dst]
let newArr = arr // newArr = [1, 2, 3]
newArr[1] ='A'
console.log(arr)
console.log(newArr)

// Spread Operator ...
// Tidak menguubah value aslinya
let students = ['Kiki', 'Aboy', 'Immanuel']
let newStudents = [...students]
newStudents[0] = 'Defryan'
console.log(students)
console.log(newStudents)

// IMMUTABLE : Primitive
// Variable yang valuneya tidak bisa dirubah
let name='Raihan'
let newName = name // newName = 'Raihan'
newName ='Kiki' //newName='Raihan' --> newName = 'Kiki'
console.log(name)
console.log(newName)
