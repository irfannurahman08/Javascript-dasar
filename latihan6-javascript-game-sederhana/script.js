//GAME SUWIT JAWA DENGAN JAVASCRIPT
var tanya= true;
while (tanya) {
    // menangkap pilihan player
    var pilihan = prompt('pilih : gajah, semut, orang');
    // menangkap bilangan computer

    // membangkitkan bilangan rendom
    var computer = Math.random();
    if(computer < 0.34){
        computer='gajah';
    }else if(computer >= 0.34 && computer <= 0.67){
        computer='orang';
    }else{
        computer='semut';
    }
    //menentukan rules
    var hasil ='';
    if(pilihan == computer){
        hasil = 'SERI!';
    }else if(pilihan == 'gajah'){
        // if(computer == 'orang'){
        //     hasil = 'MENANG!';
        // }else {
        //     hasil = 'KALAH!';
        // }
        hasil = (computer == 'orang') ? 'MENANG!' : 'KALAH';
    }else if(pilihan == 'orang'){
        hasil = (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
    }else if(pilihan == 'semut'){
        hasil = (computer == 'orang') ? 'KALAH!' : 'MENANG!';
    }else{
        hasil = 'Memasukan pilihan yang salah';
    }

    //tampilkan hasilnya
    alert('kamu memiliah : '+ pilihan +' dan Komputer memiliah : '+ computer +'\nMaka Hasilnya : Kamu '+hasil)
    tanya = confirm('Apakah Ingin Mengulang Lagi...???')
}

alert('Terima Kasih sudah bermain');
