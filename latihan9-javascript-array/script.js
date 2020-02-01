// Memanipulasi Array

//1. Menambah isi Array
// var arr = []

// arr[0] = 'irfan' 
// arr[1] = 'nur'
// arr[2] = 'ahman'

// console.log(arr)


//2. Menghapus isi Array

// var arr = ['sandika', 'galih','Nova']

// arr[2] = undefined

// console.log(arr)

//3. Menampilkan Isi Array
// var arr = ['sandika', 'galih','Nova']

// for (var a = 0; a < arr.length; a++) {
//     console.log('mahasiswa ke- '+ (a+1) +' : '+arr[a])
// }

// Method pada Array
// 1. Join
var arr = ['sandika', 'galih','Nova']
// console.log(arr.join(' '))

// // 2. push & pop

arr.push('irfan', 'nur')

// console.log(arr.join(' '))
// arr.pop()
// arr.pop()

// console.log(arr.join(' '))

// // 3. unshift & shift
// arr.unshift('adi')

// console.log(arr.join(' '))
// arr.shift()

// console.log(arr.join(' '))

// // 4. splice
// // splice(indexAwal, mauDihapusBerapa, elemenbaru1, elemenBaru2, ....)

// arr.splice(1,0,'Doddy','fitria')
// console.log(arr.join(' '))

// // 5. slice
// // slice(awal,akhir)

// var arr2= arr.slice(1,4)
// console.log(arr2.join(' '))

// // 6. foreach
var angka = [1,2,3,4,5,6,7,8]
// var nama = ['irfan', 'bony','awal']
// angka.forEach(function(e){
//     console.log(e)
// })

// nama.forEach(function(e,i){
//     console.log('Mahasiswa ke - '+ (i+1)+' Adalah = '+e)
// })

// // 7. map
// var angka2 = angka.map(function(e){
//     return e * 2
// })

// console.log(angka2.join(" "))

// // 8. sort
// angka.push(10,20)
// angka.sort(function(a,b){
//     return a-b
// })
// console.log(angka.join(' , '))

// // 9. filter & find

angka2 = angka.find(function(e){
    return e == 5
})

console.log(angka2)