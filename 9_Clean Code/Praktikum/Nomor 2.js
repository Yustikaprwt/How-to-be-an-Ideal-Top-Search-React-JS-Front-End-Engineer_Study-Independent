class kendaraan {
    var totalRoda =0;
    var kecepatanPerJam = 0;
}

class mobil extends kendaraan {
    void berjalan() {
        tambahKecepatan(10);
    }

    tambahKecepatan(var kecepatanBaru) {
        kecepatanPerJam = kecepatanPerJam + kecepatanBaru;
    }
}

void main() {
    mobilcepat = new mobil();
    for(let i = 0; i < 3; i++){
        document.write(mobilcepat.berjalan())
    }

    mobillamban = new mobil();
    mobillamban.berjalan();
}