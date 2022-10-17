Resume materi pembelajaran materi Relational Database

Adapun 3 poin utama dari pembelajaran Relational Database antara lain adalah sebagai berikut:
1. Definisi Database dan Database Relasional
- Database atau basis data merupakan sebuah kumpulan data atau informasi yang tersimpan secara terstruktur berdasarkan ketentuan tertentu yang saling berkaitan.
- Database relasional adalah kumpulan item data dengan hubungan yang telah ditentukan sebelumnya. Berbagai item ini disusun menjadi satu set tabel dengan kolom dan baris. Tabel digunakan untuk menyimpan informasi tentang objek yang akan direpresentasikan dalam database. Tiap kolom pada tabel memuat jenis data tertentu dan bidang menyimpan nilai aktual atribut. Baris pada tabel merepresentasikan kumpulan nilai terkait dari satu objek atau entitas. Tiap baris pada tabel dapat ditandai dengan pengidentifikasi unik yang disebut kunci utama, dan baris di antara beberapa tabel dapat dibuat saling terkait menggunakan kunci asing. Data ini dapat diakses dengan berbagai cara tanpa menyusun ulang tabel basis data itu sendiri.

2. Relasi atau hubungan pada Database
- Relasi pada database sendiri terbagi menjadi 3, yaitu One to One, One to Many, dan Many to Many. Yang dimana konsep dari ketiga relasi tersebut adalah sebagai berikut:
1. One to One Relationship = Merupakan penghubung antar masing-masing informasi pada dua tabel yang berbeda, dan setiap tabel hanya menampilkan satu data saja. Atau dapat didefinisikan sebagai setiap baris data pada tabel pertama dihubungkan hanya ke satu baris data pada tabel ke dua. Hubungan antara file pertama dan file kedua adalah satu berbanding satu.
Contohnya: Pada penggunaan akun sosial media, setiap user hanya dapat menggunakan 1 foto profil saja.

2. One to Many Relationship = Merupakan penghubung antar masing-masing informasi pada dua tabel yang berbeda, dan setiap tabel dapat menampilkan lebih dari satu data. Atau dapat didefinisikan sebagai suatu relasi yang berbentuk satu baris data di sebuah tabel dapat berhubungan dengan satu atau lebih baris data di tabel lain.
Contohnya: Pada penggunaan akun sosial media Instagram, setiap user dapat memiliki banyak postingan.

3. Many to Many Relationship = Merupakan penghubung ketika satu atau lebih data dalam satu tabel dapat memiliki hubungan dengan satu atau lebih item pada tabel lain.
Contohnya: Pada penggunaan akun sosial media Instagram, setiap user dapat memiliki lebih dari satu followers, dan satu user dapat di follow oleh beberapa user.

3. Jenis-jenis perintah SQL, Tipe data pada MySQL, dan statement operation pada Database
- Jenis-jenis perintah SQL terbagi menjadi 3, yaitu Data Definition Language (DDL), Data Manipulation Language (DML), dan Data Control Language (DCL). Yang dimana ketiga perintah tersebut memiliki konsep sebagai berikut:
1. Data Definition Language (DDL), adalah bahasa pemrograman dalam suatu komputer yang digunakan untuk membuat ataupun memodifikasi struktur dari suatu objek dalam database yang berbentuk skema.
2. Data Manipulation Language (DML), adalah bahasa pemrograman yang merupakan perintah untuk membantu user dalam memanipulasi data dalam database. Manipulasi yang dilakukan seperti memasukkan data ke dalam tabel database, mengambil data pada database, kemudian menghapus data dari tabel database, dan memodifikasi data pada database.
3. Data Control Language (DCL), adalah bahasa pemrograman yang merupakan perintah untuk melakukan pengontrolan data dan server database.

- Data-data MySQL terbagi menjadi 3, yaitu Num, Huruf, dan Date. Num atau biasa disebut numerik merupakan tipe data yang digunakan untuk menyimpan data berupa angka. Kemudian huruf merupakan tipe data yang digunakan untuk menyimpan data berupa text atau huruf. Dan Date merupakan tipe data yang digunakan untuk menyimpan data tanggal dan waktu.

- Statement operation pada database antara lain adalah Insert, Select, Update, dan Delete. Dengan definisi sebagai berikut:
1. Insert: Untuk memasukan data baru pada suatu tabel database.
2. Update: Untuk melakukan pembaruan pada data yang telah ada sebelumnya pada tabel database.
3. Select: Untuk menampilkan, mengambil maupun memilah data dari database atau data dari satu tabel serta beberapa tabel dalam relasi
4. Delete: Untuk menghapus data yang terdapat pada tabel database.