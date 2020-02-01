// GAME TEBAK ANGKA
alert('tebak angka dari 1-10 \nKamu punya 3 kesempatan')


//menentukan angka dengan random
var computer = Math.random();
var angka;
if (computer < 0.1) {
    angka=1;
}else if (computer>=0.1 && computer < 0.2){
    angka=2;
}else if (computer>=0.2 && computer < 0.3){
    angka=3;
}else if (computer>=0.3 && computer < 0.4){
    angka=4;
}else if (computer>=0.4 && computer < 0.5){
    angka=5;
}else if (computer>=0.5 && computer < 0.6){
    angka=6;
}else if (computer>=0.6 && computer < 0.7){
    angka=7;
}else if (computer>=0.7 && computer < 0.8){
    angka=8;
}else if (computer>=0.8 && computer < 0.9){
    angka=9;
}else if (computer>=0.9 && computer < 1){
    angka=10;
}

var kesempatan = 3;
while (kesempatan >= 1) {
    //menerima inputan
    var tebakan = prompt('masukan angka tebakan : ')
    kesempatan--
    if (tebakan == angka) {
        alert('anda Benar!!!\nangka yang di cari adalah = '+angka);
        break;
    }else if (tebakan < angka) {
        alert('terlalu RENDAH!!!\nayo masih ada '+kesempatan+'kesempatan')
    }else if (kesempatan == 1){
        alert('anda gagal!!!\nangka yang di cari adalah :'+angka);
    }else {
        alert('terlalu TINGGI!!!\nayo masih ada '+kesempatan+'kesempatan')
    }
       
}
alert('terima kasih');