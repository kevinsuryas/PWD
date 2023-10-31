// Study Case
// Di sebuah supermarket, terdapat beberapa kategori produk. Mulai dari buah, elektronik dan pakaian
// Setiap Kategori produk memiliki entitas yang ebrbeda2 seperti produk name, stock, dll
// 1. Jabarkan apa saja entitas yang dimiiki untuk masing2 kayegori produk
// 2. Buatkan class untuk mencetak entitas tersebut

// Buah : name price stock unit expiredDate
// Elektronik : name price stock weight merk
// Pakaian : name price stock 

// INHERITANCE : pewarisan
class Product{
    constructor(name, price, stock){
        this.name = name,
        this.price = price,
        this.stock = stock
    }
}

class Buah extends Product { //menggunakan extend untuk memanggil key yang sama
    constructor(name, price, stock, unit, expiredDate){
    super(name, price, stock),
    this.unit = unit,
    this.expiredDate = expiredDate
    }
}
const buah1 = new Buah('Apel', 10000, 10, 1, '20 Des')
const buah2 = new Buah('Jeruk', 15000, 15, 1, '16 Oct')
console.log(buah1)
console.log(buah2)

class Elektornik extends Product{
    constructor(name, price, stock, weight, merk){
        super(name, price, stock)
        this.weight = weight,
        this.merk = merk
    }
}

class Pakaian extends Product{
    constructor(name, price, stock, color, piece){
        super(name, price, stock)
        this.color = color,
        this.piece = piecenode
    }
}