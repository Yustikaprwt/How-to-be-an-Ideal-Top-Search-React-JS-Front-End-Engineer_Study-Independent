Resume materi Global State Management & Data Fetching

Adapun 3 poin utama yang didapatkan dari pembelajaran materi Global State Management & Data Fetching, antara lain adalah sebagai berikut:

1. Definisi Global State Management dan Redux Library pada React

![redux-logo-landscape](https://user-images.githubusercontent.com/83440868/194691516-694b15e9-cae2-4ac4-aaba-f7d0dbecebf4.png)

- Global State Management merupakan data yang dikelola oleh beberapa komponen. Global State Management digunakan ketika kita ingin memperbarui data pada program yang sedang kita jalankan, atau pada beberapa komponen saja. Dalam penggunaan React sendiri, penggunaan Global State Management sangat disarankan, salah satu state management library yang seringkali digunakan oleh programmer adalah Redux.Mengapa menggunakan Redux? karena dalam membuat program kita pasti memiliki beberapa halaman yang sama dan sinkron satu sama lain, yang dimana jika terjadi perubahan state pada halaman satu, maka halaman lainnya juga berubah. Oleh karena itu dengan menggunakan satu sumber data yang dimana data pada sumber tersebut dapat diambil dan nilainya akan selalu sama, maka kita dapat menggunakan Library Redux. Pada React sendiri terdapat beberapa libraries serta tools yang sering digunakan, antara lain adalah React-Redux, Redux Toolkit, dan Redux DevTools Extension. Pada React, ketika ingin memakai dan mengubah state dapat menggunakan Hooks dan Connect. Dalam penggunaan Redux sebenarnya tidak diwajibkan untuk setiap program yang kita buat, namun dengan menggunakan Redux dapat mempermudah kita dalam mengatur state global jika membuat aplikasi yang kompleks dan besar.

- Waktu yang tepat untuk menggunakan Redux antara lain adalah sebagai berikut:
1. Ketika terdapat banyak state yang perlu digunakan pada beberapa tempat.
2. Ketika state pada app sering berubah.
3. Ketika logika yang digunakan untuk mengubah state kompleks.
4. Ketika terdapat ukuran codebase yang sedang hingga besar, dan pengerjaannya dilakukan oleh beberapa orang.
5. Ketika perubahan dari state sendiri perlu diketahui setiap waktunya.

- Terdapat beberapa komponen utama pada Redux, antara lain yaitu:
1. Actions, yang digunakan untuk memberikan informasi dari aplikasi ke store. Selain itu pada actions terdapat fungsi penghubung antara fungsi action dan fungsi yang terdapat pada reducers, sehingga dalam penggunaannya nanti kita tidak secara langsung menggunakan fungsi yang terdapat pada reducer, tetapi melalui fungsi penghubung tersebut.
2. Reducer, merupakan fungsi Javascript secara pure yang diambil state aplikasi saat itu dan aksi dari suatu objek yang nantinya akan mengembalikan state pada aplikasi terbaru. Pada reducers berisi mengenai state global yang nantinya dapat digunakan di halaman manapun yang membutuhkan data tersebut.
3. Store, merupakan tempat dimana state global disimpan.

2. Persisted State dan Postman API, serta komponen-komponen pada Postman API

![postman-inc-logo-vector](https://user-images.githubusercontent.com/83440868/194691644-0dc8ff52-5ac4-4621-b294-e08559166799.png)

- Persisted State atau dapat juga disebut menyimpan state ke dalam storage. Mengapa kita perlu menggunakan persisted state, karena sering kali ketika program kita di reload atau di muat ulang, maka data-data yang telah kita inputkan di awal akan kembali di reset, yaitu kembali pada initial valuenya di awal. Dan fungsi dari persisted ini adalah agar data-data yang diinput tadi dapat tersimpan tiap perubahannya secara otomatis pada storage. Pada React sendiri, library yang dapat digunakan pada persisted state ini adalah redux-persist.

- Langkah-langkah menyimpan state pada storage menggunakan redux-persist antara lain adalah sebagai berikut:
1. Install redux-persist pada React
2. Kemudian buatlah file bernama store yang nantinya pada file ini kita dapat melakukan import object yang dibutuhkan redux persist.
3. Import juga reducer yang telah kita buat sebelumnya.
4. Konfigurasikan objek untuk redux-persistnya yang berisikan parameter, pada umumnya parameter default yang terdapat adalah key dan storage.
5. Kemudian buat persisted.
6. Passingg persisted reducer dari rootReducer untuk membuat createStore  dan tambahkan juga middlewarenya jika digunakan.
7. Persist storenya dengan menggunakan argumen store yang telah dibuat sebelumnya.
8. Dan yang terakhir, kita tinggal memasang argumennya pada program kita dengan menggunakan export.
9. Dalam component, pasang PersistGate, kemudian pasang props. Untuk menentukan komponen apa yang ingin kita render.

- Postman API, merupakan platform yang digunakan developers untuk mendesain, mengembangkan, dan melakukan test serta iterasi pada API. Postman merupakan API yang mudah digunakan untuk berkolaborasi dan melakukan sinkronisasi dengan pengguna yang lain. Selain itu tampilan dari Postman juga sangat simpel, dan tidak sulit untuk digunakan. Dalam melakukan kolaborasi sendiri, postman hanya memberikan batas hingga 3 pengguna dan unlimited collection.

- Beberapa component yang terdapat pada Postman antara lain adalah sebagai berikut:
1. Workspace: Digunakan sebagai direktori working.
2. Collection: Grup untuk melakukan request.
3. APIs: Jarak untuk menulis OpenAPI spec 3.0
4. Environtment: Sebagai grup dari variabel untuk menambahkan data pada collection.
5. Mock Server: Untuk membuat dummy data (data yang dibuat menyerupai data asli, tapi dengan isian yang dibuat-buat).
5. Monitor: Menjalankan collection secara berkala untuk melakukan pengecekan performa dan respons.
6. Flow: Membuat alur kerja dari API dengan melakukan koneksi dari request.
7. History: Menampilkan semua history.
8. Reques: Sebagai set dari endpoint.
9. Http method: Melakukan tindakan yang ingin di lakukan untuk menunjukan performa sumber daya yang diinginkan.
10. Button send: Untuk mengirimkan http request.
11. Params: Menulis query dalam bentuk string.
12. Auth: Melakukan autentikasi method.
13. Header: Melakukan request untuk menambahkan header yang telah di kustomisasi.
14. Body: Menambahkan payload untuk melakukan request.
15. Pre-req: Menjalankan kode sebelum melakukan request.
16. Test: Melakukan testing API.
17. Setting: Melakukan pengaturan untuk http request.

3. Hasura Resfull dan CRUD (Get, Post, Delete, Update)

![hasura_logo_primary_lightbg_(1)](https://user-images.githubusercontent.com/83440868/194691726-aa1f6341-a784-4f07-9264-d6414c79daf1.jpg)

- Hasura merupakan sebuah GraphQL Engine atau sebuah server GraphQL ultra yang menyediakan API GraphQL secara instan dan real time. Hasura dapat dikonfigurasi untuk bekerja dengan sistem otentikasi yang telah kita miliki, serta dapat mengontrol akses menggunakan aturan pada level field dengan variabel dinamis dari sistem otentikasi yang kita miliki.

- Cara menggunakan Hasura sendiri tidak begitu sulit, beberapa langkah yang perlu dilakukan antara lain adalah sebagai berikut:
1. Membuat akun untuk Hasura
2. Kemudian setelah itu dapat membuat project, dalam membuat project pilihlah opsi free project yaitu free tier pricing plan.
3. Setelah itu langsung membuat database, yang dimana database yang digunakan menggunakan Heroku. Kemudian database dapat diakses, dan selesai.

- REST API atau perintah yang sering digunakan dalam mengelola database adalah CRUD atau dapat disebut juga Create, Read, Update, dan Delete pada data yang dimiliki. Create sendiri berperan untuk membuat entri baru dalam sebuah tabel database. Selanjutnya Read, Read berperan untuk menampilkan data yang telah tersimpan pada sebuah database. Selanjutnya adalah Update, Update berperan untuk memperbarui entri data. Dan yang terakhir adalah Delete, Delete berperan untuk menghapus entri data yang sudah tidak dibutuhkan pada sebuah database.

