Resume materi Event Handling

Adapun 3 poin utama dalam pembelajaran materi Event Handling, antara lain adalah sebagai berikut:
1. State
State sendiri merupakan data yang private pada sebuah component, yang dimana data ini hanya tersedia untuk component tersebut dan tidak dapat diakses dari component lain. State juga merupakan sebuah data pada React yang akan di render ketika data tersebut mengalami perubahan. State digunakan di dalam class dan bersifat asynchronous. State memiliki kemiripan dengan props, tetapi state sendiri dapat mengalami perubahan sedangkan props hanya dapat dibaca dan tidak dapat mengalami perubahan data.

2. Stateful component dan Stateless component
Stateful component sendiri memiliki sebuah state, dimana component ini dibuat dengan class. Sedangkan stateless component tidak memiliki sebuah state, tetapi hanya prop. Dan pada stateless component umunya dibuat menggunakan function, bukan menggunakan class, karena kode yang dimiliki lebih ringkas. Terdapat beberapa perbedaan antara stateful component dan stateless component, antara lain sebagai berikut:

- Stateless component -> Tidak memahami aplikasi.
Statefull component -> Memahami aplikasi.

- Stateless component -> Tidak mengambil data melalui data fetching.
Statefull component -> Mengambil data melalui data fetching.

- Stateless component -> Tujuan utamanya adalah visualisasi.
Statefull component -> Tujuan utamanya adalah interaksi antara user dengan visualisasi, atau menggunakan logika.

- Stateless component -> Dapat digunakan kembali datanya, karena lebih terfokuskan dengan desain.
Statefull component -> Tidak dapat digunakan kembali datanya, karena menggunakan logika.

3. Handling Events
Event pada React sendiri merupakan kejadian yang terjadi pada halaman website, yang dimana kejadian yang dimaksud adalah aktivitas atau task-task yang diproses pada halaman website, contohnya adalah menekan tombol pada website atau menekan fitur-fitur yang terdapat pada website. Dan yang dimaksudkan dengan handling events merupakan sebuah metode yang dilakukan untuk menangani kejadian pada halaman website yang dilakukan user pada suatu komponen di halaman website tersebut. Terdapat beberapa contoh list event, antara lain yaitu Clipboard Events, Form Events, Mouse Events, dan Generic Events.
- Clipboard Events, event yang terjadi ketika terdapat perubahan pada clipboard, termasuk dengan objek-objek yang terdapat pada clipboard tersebut.
- Form Events, event yang terdapat pada form events dapat berupa submit pada form, atau perubahan data pada form, digunakan untuk memvalidasi form sebelum dikirimkan pada server.
- Mouse Events, event yang terjadi dalam bentuk interaksi dengan mouse, berupa trigger click atau hover. Seperti onClick atau onDoubleClick.
- Generic Events, event yang terjadi pada pemrosesan data seperti proses membaca yaitu onLoad atau kegagalan yaitu onError.