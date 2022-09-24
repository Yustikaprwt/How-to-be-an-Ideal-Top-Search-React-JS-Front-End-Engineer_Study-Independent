Resume materi React Form

Adapun 3 poin utama dari materi React Form antara lain adalah sebagai berikut:
1. Pengertian Form, penggunaan Form, macam-macam Form
- Form atau dapat disebut juga formulir, merupakan suatu dokumen atau informasi yang terstruktur. Atau dapat diartikan juga Form merupakan informasi yang memiliki bagian-bagiannya masing-masing. Dalam website, form merupakan salah satu hal yang krusial, karena digunakan untuk menghandle inputan dari user.
- Dalam penggunaannya sendiri, form seringkali digunakan pada saat ingin melakukan registrasi akun, login akun, serta memberikan feedback seperti kuesioner.
- Macam-macam form antara lain adalah sebagai berikut
Elemen<input>, yang biasanya digunakan pada inputan yang tidak terlalu panjang (Contoh: Nama).
Elemen<textarea>, yang biasanya digunakan pada inputan yang cukup panjang (Contoh: Deskripsi, feedback, komentar).
Elemen<select>, yang biasanya digunakan pada inputan yang telah ditentukan valuenya.
Radiobutton, biasanya digunakan untuk memilih 1 pilihan inputan yang telah ditentukan valuenya.
Checkbox, biasanya digunakan untuk memilih beberapa pilihan yang telah ditentukan.
Dan adapun beberapa tipe elemen inputan lainnya, yaitu text(default), button, color, date, email, file, image, number, password, dan masih banyak lagi.

2. Controlled Component dan Uncontrolled Component
- Secara definisi controlled component merupakan komponen yang dapat digabungkan dengan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React, sehingga komponen React yang melakukan render pada sebuah form tersebut dapat mengontrol apa yang terjadi pada form tersebut pada inputan user selanjutnya. Atau singkatnya adalah elemen inputan dari user yang nilainya dapat dikontrol oleh React.
- Sedangkan uncontrolled component merupakan kebalikan dari controlled component, yang dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menuliskan uncontrolled component dapat menggunakan ref untuk mendapatkan nilai form dari DOM.
- Pada controlled component terdapat tag Textarea (sebagai definisi teks di dalamnya sebagai elemen child), tag Select (untuk membuat sebuah daftar drop-down), dan Handle Banyak Input (digunakan untuk memberikan penanganan yang banyak pada elemen, dapat menambahkan atribut pada setiap elemen).
- Pada uncontrolled component terdapat nilai default (digunakan untuk menangani pembaruan pada nilai yang dilakukan secara uncontrolled pada React) dan tag file input (digunakan untuk memungkinkan pengguna dalam memilih satu atau beberapa file dari media penyimpanan untuk diunggah ke server atau manipulasi melalui API).
- Dengan menggunaan uncontrolled component, kita harus mengambil nilai dari field saat dibutuhkan, dan dapat terjadi pada saat formulir di submit. Sedangkan dengan menggunakan controlled component, dapat menerima nilai saat ini sebagai prop serta callback untuk mengubah nilai tersebut.

3. Validasi pada Form
- Validasi pada form sangat diperlukan, karena untuk mencari inputan data yang benar dan sesuai format yang telah ditetapkan. Selain itu juga digunakan untuk melindungi akun user, dan melindungi sistem atau aplikasi itu sendiri pula.
- Terdapat beberapa tipe validasi data formulir, antara lain adalah
1. Client-side Validation -> Validasi yang dilakukan dari sisi klien (browser). Validasi ini dilakukan agar inputan user sesuai dengan kebutuhan form, sebelum dikirimkan ke server. Pada client-side sendiri terbagai menjadi 2 bagian yaitu Built-in form validation (menggunakan fitur validasi langsung dari HTML5). Yang kedua adalah menggunakan JavaScript (dapat dikostumisasi).
2. Server-side validation -> Validasi yang dilakukan dari sisi server. Server bertugas untuk memvalidasi data kembali, sebelum disimpan pada database, dan jika terdapat kesalahan maka response akan dikirim kembali pada client berupa koreksi atas kesalahan yang dibuat user.
- Pada Bult-in form validation terdapat:
1. required = digunakan untuk menentukan field form perlu diisi sebelum di kirimkan.
2. minlength dan maxlength = digunakan untuk menentukan jumlah karakter minimal dan maksimal yang dapat diinput oleh user.
3. min dan max = digunakan untuk menentukan nilai minimum dan maksimum dari angka yang diinput oleh user.
4. type = digunakan untuk menentukan apakah data berupa angka, email, atau tipe lainnya.
5. pattern = digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang dapat dimasukkan.
