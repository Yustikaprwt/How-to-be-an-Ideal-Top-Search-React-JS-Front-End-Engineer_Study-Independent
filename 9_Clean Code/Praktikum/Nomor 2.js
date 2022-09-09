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
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}