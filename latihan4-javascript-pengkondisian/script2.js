var angka = prompt('Masukan Angka : ');

// if (angka == 1) {
//     alert('anda memasukan angka 1');
// }else if(angka == 2){
//     alert('anda memasukan angka 2');
// }else if(angka == 3 ){
//     alert('anda memasukan angka 3');
// }else{
//     alert('angka yang anda memasukan salah!!!');
// }

switch (angka) {
    case '1':
        alert('anda memasukan angka 1');
        break;
    case '2':
        alert('anda memasukan angka 2');
        break;
    case '3':
        alert('anda memasukan angka 3');
        break
    default:
        alert('anda memasukan angka 1');
        break;
}