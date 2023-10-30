// PALINDROME
// Susunan karakter kata yang dibalik akan membentuk kata aslinya

const kata = 'malam'
let kataBalik = ''

for(let i=kata.length-1; i >=0; i--){
    kataBalik += kata[i]
}

if(kata === kataBalik) console.log('Palindrome')
if(kata !== kataBalik) console.log('Not Palindrome')

// i=4; 4>=0? true ---> kataBalik += m
// i=3; 3>=0? true ---> kataBalik += a
// i=2; 2>=0? true ---> kataBalik += l
// .........................
// i=0; 0>=0? true ---> kataBalik += m