Resume materi Clean Code

Adapun 3 poin utama yang didapatkan dari pembelajaran materi Clean Code antara lain adalah:
1. Pengertian Clean Code, dan mengapa disarankan untuk menggunakan clean code
Clean code merupakan sebuah istilah sintak atau kode yang ditulis secara rapi, terstruktur dengan jelas, dan tertata dengan baik agar mudah dibaca, mudah dipahami, dan mudah dimodifikasi oleh programmer. Tujuannya clean code adalah agar sintak atau kode tersebut dapat dibaca, dan dipahami oleh setiap orang, baik IT maupun Non IT. Karena kode yang ditulis dengan benar adalah kode yang dapat dibaca dan dipahami oleh setiap orang. Hal tersebut juga berguna agar kode tersebut dapat di modifikasi oleh programmer lain, begitu pun juga dengan yang menulis kode tersebut.

2. Karakteristik dari clean code, dan prinsip-prinsip dari clean code
Adapun beberapa karakteristik dari clean code antara lain adalah:
- Penamaan mudah dipahami, ketika menuliskan sebuah kode gunakaan penamaan yang mudah dipahami, jangan gunakan penamaan yang terlalu disingkat-singkat. Contohnya ketika menuliskan sebuah variabel tanggal, bulan, dan tahun, jangan tuliskan dengan penulisan sebagai berikut (yyyymmmmdd).
- Mudah dieja dan dicari, karena jika kita memberikan nama yang sulit untuk dipahami pada saat nanti terjadi error akan sulit untuk mengingat nama variabelnya, maka berikanlah nama variabel yang saling berhubungan.
- Singkat, tapi mendeskripsikan konteks dari kode tersebut.
- Konsisten, tuliskan kode dengan tipe penulisan yang konsisten, jangan ada yang menuliskan penemaannya dengan format uppercase, tetapi ada juga penulisan dengan format lowercase. Jika menuliskan constanta menggunakan uppercase atau lowercase, maka terapkan pada semua penulisan kode sekaligus, dan membiasakan dalam penulisan class selalu diawali dengan uppercase.
- Hindari penambahan konteks yang tidak perlu, yaitu mengulang ngulang konteks yang tidak terlalu penting.
- Jangan menambahkan komentar terlalu banyak, tidak perlu memberikan komentar di setiap linenya, jika dari kodenya sudah dapat dibaca dengan jelas.
- Jangan menuliskan function dulu lalu memberikan komentar, tetapi memberikan komentar dulu lalu menuliskan function.
- Ketika menginputkan sebuah argumen tidak boleh terbalik.
- Gunakan konvensi, meniru atau menggunakan style guide.
- Formatting, gunakan format penulisan kode yang disarankan.

Dan adapun prinsip dari clean code antara lain adalah sebagai berikut:
- KISS (Keep It So Simple)
Hindari membuat 1 fungsi yang dapat melakukan beberapa tugas langsung sekaligus, karena nanti ketika ada perubahan tugas pada fungsi tersebut, akan sulit untuk dimodifikasi. Selain itu fungsi atau class harus simple, jangan gunakan terlalu banyak argumen pada suatu fungsi, dan harus diperhatikan untuk mencapai kondisi yang seimbang.
- DRY (Don't Repeat Yourself)
Hindari terlalu sering melakukan duplikasi atau copy paste pada kode yang akan dituliskan.

3. Refactoring
Refactoring merupakan proses restrukturisasi kode yang dibuat dengan cara mengubah struktur internal tanpa mengubah perilaku eksternalnya. Refactoring adalah mengubah code tapi tidak mengubah returnnya.

Teknik refactoring:
1. Membuat sebuah abstraksi
2. Memecah kode dengan fungsi atau class baru
3. Perbaiki penamaan dan lokasi kode
4. Deteksi kode yang memiliki duplikasi
