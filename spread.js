let keranjang = [];

function tambahkeranjang(namaproduk){
    keranjang= [...keranjang, namaproduk];
}

tambahkeranjang("Baju");
tambahkeranjang("Celana");

console.log(keranjang);