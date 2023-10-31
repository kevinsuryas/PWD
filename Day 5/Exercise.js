/* 
    Case. Buatlah program untuk merubah price number menjadi price IDR dari data berikuut
    [
        {name : 'Jeruk', price: 10000},
        {name: 'Anggur', price: 15000},
        {name: 'Semangka', price: 20000}
    ]
*/
const productArr= [ 
    {name : 'Jeruk', price: 10000},
    {name: 'Anggur', price: 15000},
    {name: 'Semangka', price: 20000}
] 


for(let item of productArr){
 item.price = `Rp.${item.price}.toLocaleString('id-ID')`
}
console.log(productArr)