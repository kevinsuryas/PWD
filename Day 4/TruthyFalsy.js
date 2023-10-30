// TRUTHY FALSY Javascript : Nilai non-boolean yang dikonversikan menjadi nilai boolean

// Falsy : 0. '', null, underfined, NaN
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

// TRUHTY
console.log(Boolean(1))
console.log(Boolean('a)'))

// Case. Validasi inputan dari uer, apabila kosong maka munculkan pesan error,
//  apabila inputan ada maka munculkan pesan success
const input = 'a'
if(input === ''){
    console.log('Error')
}else{
    console.log('Success')
}

if(input){ // Apabila inputannya ada, maka dia akan success
    console.log('Success')
}else{
    console.log('Error')
}

// Case. Buatlah validasi input dengan ketentuan:
//      -Apabila jumlah karakter >10, maka tampilkan pesan error
//      -Apabila jumlah  karakter <= 10, maka tampilkan pesan success