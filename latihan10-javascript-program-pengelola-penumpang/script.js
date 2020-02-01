var penumpang = []

var tambahpenumpang  = function(namaPenumpang, penumpang){
    //jika angkot kosong
    if(penumpang.length == 0){
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang)
        // kembalikan isi array dan keluar dari function
        return penumpang
    }else{
        //telusuri seluruh kursi dari awal
        for(var i = 0 ;i<penumpang.length; i++){
            //jika ada kursi yg kosong
            if(penumpang[i] == undefined){
                //tambahkan penumpang di awal kursi tersebut
                penumpang[i] = namaPenumpang
                // kembalikan isi array dan keluar dari function
                return penumpang
            }else if(penumpang[i] === namaPenumpang){
                console.log(namaPenumpang+'nama penumpang sudah ada')
                return penumpang
            }
            else if(i == penumpang.length - 1) {
                penumpang.push(namaPenumpang)
                return penumpang
            }
        }
    }

}

var turunPenumpang = function(namaPenumpang,penumpang){
    if(penumpang.length == 0){
        console.log('angkot kosong pak')
    }else{
        for(var i = 0 ; i < penumpang.length; i++){
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined
                return penumpang
            }else if(i == penumpang.length - 1){
                alert('nama tidak ada')
                return penumpang
            }
        }
    }
    return penumpang
}