var a =5;
let b = "kampus merdeka";
let nama = "Budi";
let nama1 = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");   
}

a = b;
nama = b;

console.log("array = " + nama1);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan('nama', 'a', 'b', 'asal');