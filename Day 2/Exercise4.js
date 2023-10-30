/* Buatlah program untuk menentukan jumlahh bilangan ganjil dan bilangan genap
Ex. const stringNum = '33124'
Output: total Even = 2, Total Odd = 3
Ex. const stringNum= '11'
Output: Total Even = 0, total odd = 2
*/

const stringNumber = '33124'
let totalEven = 0
let totalOdd = 0

for(let i=0; i< stringNumber.length; i++){
    if(stringNumber[i] % 2 ===0){
        totalEven++
    }else if(stringNumber[i] %2 ===1){
        totalOdd++
    }

}
if (totalEven || totalOdd >0){
    console.log(`Total Even = ${totalEven}, Total Odd = ${totalOdd}`)
// $(totalEven) untuk memanggil nilai genapnya ada berapa, datanya di tampung di totalEven=0
// jiks tidsk dipanggil hanya akan menjawab bahwa dia adalah genap tanpa jumlahnya
// || fungsinya adalah mempersingkat, bisa saja dibuat terpisah dibaca atau
}

