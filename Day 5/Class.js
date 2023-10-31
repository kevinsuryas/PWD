// CLASS : Blueprint untuk mencetak object dengan nama property yang sama
// untuk object class dibiasakan pakai huruf besar
class Students{
    name = ''
    hobby = ''
    program = ''

    constructor(name, hobby, program){
        this.name = name,
        this.hobby = hobby,
        this.program = program
    }
}

const students1 = new Students('Defryan', 'Futsal', 'WD')
const students2 = new Students('Kevin', 'Olahraga', 'WD')
console.log(students1)
console.log(students2)
const studentsArr = [
    new Students ('Defryan', 'Futsal', 'WD'), // Array Object selalu pake koma (,)
    new Students ('Kevin', 'Olahraga', 'WD')
]
console.log(studentsArr)

// ENCAPSULATION : Proses pembukusan data ke dalam class
// Public Property
// Private Propterty
class Users{
    username = ''
    email = ''
    phoneNumber = ''
    #password = ''

    constructor(username, email, phoneNumber, password){
        this.username = username,
        this.email = email,
        this. phoneNumber = phoneNumber,
        this. #password = password
    }
}

const user1 = new Users('ryandefryan', 'ryan@gmail.com', '081333','ryan')
console.log(user1.password)
console.log(user1)