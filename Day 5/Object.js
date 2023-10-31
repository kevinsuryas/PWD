// OBJECT
// Key & Value -> Property
const user = {
    username : 'ryandefryan' // username disebut dengan key, 'ryandefryan' disebut dengan value
}
const student = new Object ()

const productNameArr = ['Anggur', 'Jeruk']
const productPriceArr = [10000, 15000]
const products1 = {
    name: 'Anggur',
    price: 10000
}
const products2 = {
    name: 'Jeruk',
    price : 15000
}

// CRUD (Create, Read, Update & Delete)
// Create
const campusPwd = {}
campusPwd.location = 'BSD'
campusPwd.building = 'GOP-09'
// console.log(campusPwd)

const programPwd = new Object() // {}
programPwd.name = 'Web Development'
programPwd.totalStudents = 9
// console.log(programPwd)

// Read
console.log(campusPwd.building)
console.log(programPwd.totalStudents)
console.log('>>>>')
console.log(campusPwd['location'])
console.log(campusPwd['building'])
// bisa dipanggil dengan .key atau pakai bracket []

// Update
const newData = {
    name: 'Defryan',
    hobby: 'Programming'
}
newData.hobby = 'Futsal'
console.log(newData)

// Delete
newData.hobby = ''
console.log(newData)
delete newData.hobby
console.log(newData)

// METHOD
// Function
const myObj = {
    greeting: () => {
        console.log('Welcome,2602!')
    }
} 
myObj.greeting()

// Accessing Key
const studentData = {
    name: 'Immanuel',
    address: 'BSD',
    program: 'WD'
}
console.log(Object.keys(studentData))

for(let key in studentData){
    console.log(key)
    console.log(studentData[key])
}

// DESTRUCTING ASIGNMENT
// Destruct dari property object menjadi variable
const data={
    name: 'Raihan',
    hobby: 'Study'
} 
const {name,hobby} = data
console.log(name)
console.log(hobby)

// SPREAD OPERATOR (...)
const studentProfile = {
    name: 'Immanuel',
    program: 'WD'
}

//const newStudentProfile = {...studentProfile, program: 'DM', year: 2023}
//console.log(newStudentProfile)

const newStudentProfile = {...studentProfile}
newStudentProfile.name = 'Abed'
newStudentProfile.program = 'DM'
console.log(studentProfile)
console.log(newStudentProfile)

let x = 5
let y = x
y = 10
console.log(y)
console.log(x)

// Array of Object
const productsArr = [
    { name: 'Jeruk', price: 10000}, // index ke 0
    { name: 'Anggur', price: 15000}, // index ke 1
    { name: 'Semangka', price: 20000} // index ke 2
]
console.log(productsArr[0]) // {name: 'Jeruk', price: 10000}
console.log(productsArr[0].name) // 'Jeruk

for(let item of productsArr){
    console.log(item.name)
    console.log(item.price)
}