// Study Case
// Di sebuah supermarket, terdapat beberapa kategori produk. Mulai dari buah, elektronik dan pakaian
// Setiap Kategori produk memiliki entitas yang ebrbeda2 seperti produk name, stock, dll
// 1. Jabarkan apa saja entitas yang dimiiki untuk masing2 kayegori produk
// 2. Buatkan class untuk mencetak entitas tersebut

// Buah : Anggur dan apel
// Elektronik : Handphone dan Laptop
// Pakaian : Baju dan Celana

class Buah{
    name = ''
    satuan = ''
    berat = ''

    constructor(name, satuan, berat){
        this.name = name,
        this.satuan = satuan,
        this.berat = berat
    }
}

const buah1 = new Buah('Apel', 'Gram', 100)
const buah2 = new Buah('Jeruk', 'Gram', 250)
console.log(buah1)
console.log(buah2)

class Elektronik {
    nama = ''
    merk = ''
    harga = ''

    constructor(nama, merk, harga){
        this.nama = nama,
        this.merk = merk,
        this.harga = harga
    }
} 

const elektronik1= new Elektronik ('Laptop', 'Lenovo', 15000000)
const elektronik2= new Elektronik ('Handhpone', 'Iphone', 2000000)
console.log(elektronik1)
console.log(elektronik2)

class Pakaian {
    nama = ''
    warna = ''
    jenis = ''


constructor(nama, warna, jenis){
    this.nama = nama,
    this.warna = warna,
    this.jenis = jenis
}
}

const pakaian1 = new Pakaian ('Baju', 'Hijau', 'Katun')
const pakaian2 = new Pakaian ('Celana', 'Merah', 'Jeans')
console.log(pakaian1)
console.log(pakaian2)