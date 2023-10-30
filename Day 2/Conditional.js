// CONDITIONAL STATEMENT
// PENGKONDISIAN

// if
/*
    If(condition) { // Apabila condition terpenuhi, maka akan menjalankan block of code yang ada di dalam

    }
*/
const pointStudent = 80
if(pointStudent >70){ //80 >70? true
    console.log('Student Lulus!')
}

if('abc' == 'Abc'){ //false, karena salah jadi string 'Sama' tidak keluar
    console.log('Sama!')
}

// If - Else --> Else sebagai default output apabila kondisi diatas tidak terpenuhi
if (50<80){
    console.log('Running')
}else{
    console.log('Error')
}

// If - Else If - Else
const nilaiSiswa1 = 75
if(nilaiSiswa1 > 90){ //false
    console.log('Lulus Baik')
} else if(nilaiSiswa1 >74){ //true
    console.log('Lulus Bagus')
}else if (nilaiSiswa1 >70){
    console.log('Lulus')
}else {
    console.log('Tidak Lulus')
}

const nilaiSiswa = 90
if(nilaiSiswa >90){ //false
    console.log('Lulus Baik')
}else if(nilaiSiswa >70) { //true
    console.log('Lulus')
}else{
    console.log('Tidak Lulus')
}

// Ternary Operator
/*
    condition? Block of code if condition === true : block of code if condition === false
    */
// Ex. Saya ingin memvalidasi panjang input dari form user
// jumlah karakter >19 ---> Register Failed
// jumlah karakter <20 ---> Register Success
const formUser = 'defryan@gmail.com'

if(formUser.lenght > 19){
    console.log('Register Failed')
}else{
    console.log('Register Success')
}

formUser.lenght > 19? console.log('Register Failed') : console.log('Register Success') // Ternary Operator
// biasa ditulis dalam satu baris

const point = 70
point >90?
console.log('Nilai Anda Baik!') :
point >70?
console.log('Nilai Anda Cukup') : console.log('Nilai Anda Kurang')
// pertama else, ke 2 if, ke 3 else anggap saja begitu
