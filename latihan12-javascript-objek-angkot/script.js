// membuat Object Angkot

function angkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek
    this.penumpang = penumpang
    this.kas = kas

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }

    this.penumpangTurun = function(namaPenumpang,bayar){
        if (this.penumpang.length === 0){
            alert('Angkot masih kosong')
            return false
        }

        for( var i = 0;i< this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined
                this.kas += bayar
                return this.penumpang
            }else if(i == this.penumpang.length - 1){
                alert('nama tidak ada pak')
                return false
            }
        }
    }
}


var angkot1 = new angkot('irfan Nurahman', ['Cicahem','Cibiru'],[],0)

var angkot2 = new angkot("Tom Cruise",['Antapani','Ciroyom'],[],0)

