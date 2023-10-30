/* Carilah angka bernilai genap yang ada di dalam string
Ex. const stringNumber = '35912'
Output = 'There is even number'

Ex. const stringNumber = '25917'
Output = 'There is No Even Number'
*/



//check if the number is even
const stringNumber = '35912'

let isEven = 0

for(let i=0; i< stringNumber.length; i++){
    if(stringNumber[i] % 2 ===0){
        isEven++
    }
}

if (isEven >0){
    console.log('There is Even Number')
}else{
    console.log('There is No Even Number')
} 


