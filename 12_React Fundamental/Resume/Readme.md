Resume materi React Fundamental

Adapun 3 poin utama dari pembelajaran materi React Fundamental antara lain adalah sebagai berikut:

1. Pengertian dari JSX, mengapa disarankan menggunakan JSX, Spesifikasi jenis element React, dan atribut pada JSX

- JSX merupakan singkatan dari Javascript Syntax Extension atau Javascript XML, JXS merupakan ekstensi dari Javascript. Sintaks dari JSX sendiri mirip seperti HTML, sehingga lebih gampang disusun elemennya pada komponen React. JSX menghasilkan sebuah react element. Dan JSX memudahkan kita dalam menulis sebuah aplikasi react.
- Mengapa disarankan menggunakan JSX adalah karena JSX dibuat berdasarkan fakta bahwa logika rendering sangat bersangkutan dengan logika dari User Interface sendiri.
- Spesifikasi jenis element React sendiri terbagi menjadi 2, yaitu penggunaan huruf kapital (Uppercase) pada awal penulisan untuk komponen React dan penggunaan huruf kecil (Lowercase) pada awal penulisan untuk komponen bawaan.
- Dalam menentukan atribut pada JSX sendiri dapat menggunakan tanda kutip ("") untuk menentukan string literal, dan kurung kurawal {} untuk menyematkan ekspresi Javascript dan menggunakan penulisan camelCase dalam membuat penamaan React DOM.

2. Komponen pada React, fungsi dan class pada komponen, komposisi komponen dan props, komposisi pada komponen

- Komponen pada React sendiri merupakan bagian kode yang dapat digunakan kembali untuk menentukan tampilan, behavior, dan state sebagai User Interface. Komponen mempermudah kita dalam memecah User Interface menjadi bagian tersendiri. Untuk membagai UI menjadi beberapa komponen, dapat melakukan pemecahan komponen-komponen dengan menggunakan kotak-kotak untuk setiap komponen dan sub komponennya. 
- Untuk membuat class sendiri dapat menggunakan function ataupun menggunakan extends.
- Props sendiri merupakan singkatan dari properties, yang dimana pada props ini kita dapat memberikan data pada komponen tersebut. Komponen yang berperan sebagai parent dapat menurunkan informasi pada komponen childrennya dengan menggunakan props. Dengan menggunakan props dapat membuat komponen menjadi lebih dinamis, 
- Komposisi pada komponen sendiri terbagi menjadi 2, yaitu kontaimen dan spesialisasi. Yang dimaksud dengan kontaimen adalah komponen tidak serta merta mengetahui bahwa komponen children mereka ketika mereka didefinisikan, sedangkan yang dimaksud dengan spesialisasi merupakan komponen yang lebih spesifik dalam melakukan render dari sebuah komponen yang lebih umum.

3. Lifecycle pada method, tipe-tipe Render, struktur direktori, dan styling pada CSS

- Lifecycle yang paling umum digunakan ada 4, antara lain yaitu render(), componentDidMount(), componentDidUpdate(), componentWillUnmount(). render() merupakan fungsi yang paling sering digunakan, render juga merupakan required pada class component, dan merupakan pure function. componentDidMount() dipanggil ketika komponen telah di render untuk pertama kali, dan merupakan tempat yang tepat untuk melakukan pemanggilan API. componenDidUpdate() dipanggil ketika terjadi update, yaitu perubahan dari props ataupun statenya, dan componentWillUnmout() dipanggil ketika komponen akan dihapuskan atau dihancurkan, dan cocok digunakan untuk clean up actions.
- Render sendiri terbagi menjadi 3, yaitu render bersyarat, render list, dan key. Render bersyarat pada React, digunakan untuk melakukan render hanya pada beberapa bagian saja. Yang dimana terbagi menjadi if, inline if dengan operator &&, inline if-else dengan ternary conditional operator, dan mencegah komponen untuk rendering. Render list pada React, digunakan untuk membangun kumpulan dari beberapa elemen dan menyertakannya pada JSX menggunakan tanda kurung kurawal{} Dan key pada React, digunakan untuk membantuk React dalam mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.
- Struktur direktori pada React terbagi menjadi 2, yatu berdasarkan fitur atau rute dan berdasarkan jenis file.
- Dalam melakukan styling pada CSS dapat menggunakan classes dan CSS, atribut style, dan modul CSS.