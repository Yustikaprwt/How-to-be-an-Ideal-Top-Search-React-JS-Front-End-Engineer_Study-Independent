Resume Materi Pembelajaran Testing pada React

![testing-react-components](https://user-images.githubusercontent.com/83440868/195255276-cc91ec89-6465-46da-a5ce-6659af4527a2.png)

Adapun 3 poin utama yang didapatkan dari pembelajaran materi Testing, antara lain sebagai berikut:

1. Definisi Testing, Testing pada React, dan Tools dalam melakukan testing
- Testing merupakan proses verifikasi untuk membuktikan bahwa test assertion atau pengujian yang dilakukan sesuai target atau dapat disebut ekspresi Boolean yang mengembalikan nilai true kecuali ada bug pada program, yang dimana bertujuan untuk memastikan bahwa kode program yang dimiliki benar selama program dijalankan. 
- Adapun beberapa manfaat dari menggunakan Testing, antara lain adalah sebagai berikut:
1. Jika ingin melakukan pembaruan atau perbaikan kode program, bagian yang ingin diperbaiki atau diperbarui dapat ditemukan dengan mudah.
2. Dapat mengurangi bug pada aplikasi yang dimiliki, walaupun tidak 100% menjamin bebas dari bug, tetapi dapat mencegah beberapa hal yang dapat berpotensi menyebabkan bug.
- Secara umum, testing pada React terbagi menjadi ke dalam dua kategori, yaitu Rendering component trees dan menjalankan aplikasi lengkap atau dapat disebut juga "end-to-end".
- Tools dalam melakukan testing yang disarankan yaitu ada dua, yaitu Jest dan React Testing Library. Jest merupakan framework untuk melakukan pengujian open-source yang dibangun di dalam Javascript. Jest sendiri memberikan sebuah kecepatan iterasi yang cukup bagus, karena dikombinasikan dengan fitur-fitur powerful seperti mocking modules dan timers, sehingga dapat dikontrol pada saat dijalankan. Sedangkan React Testing Library (RTL) merupakan helpers yang memungkinkan untuk mengetes komponen pada React tanpa bergantung pada detail implementasinya. Dengan menggunakan RTL, membuat refactoring menjadi lebih mudah dan dapat menerapkan best practices untuk aksebilitas. Jika telah menginstall React dengan menggunakan create-react-app, maka Jest dan React Testing Library (RTL) secara default telah terinstall. Tetapi jika menggunakan custom React setup, perlu menginstallnya secara mandiri.

2. Rendering Komponen dan Kategori pada Testing
- Render atau rendering RTL berfungsi untuk merender seluruh file JSX apa pun yang dibutuhkan. Setelah itu, kita dapat mengakses komponen React yang ingin kita test. Dan untuk memastikan apakah file JSX tersebut telah terender atau belum, dapat menggunakan fungsi debug RTL.
- Dalam memilih elemen yang akan digunakan untuk assertions atau untuk interaksi kepada pengguna. React Testing Library (RTL) memberikan beberapa fungsi yang dapat digunakan, beberapa contohnya yaitu seperti:
1. getByText: Digunakan untuk memilih teks dari elemen yang telah dipilih.
2. getByTestId: Digunakan untuk memilih berdasarkan id yang kita buat pada komponen yang akan kita test.
3. getByRole: Digunakan untuk membantu untuk memilih berdasarkan role pada komponen menggunakan HTML tag seperti button, input, dan lain-lain.
- Beberapa kategori testing yang dapat digunakan:
1. LabelText: getByLabelText: <label for="search"/>
2. PlaceholderText: getByPlaceholderText: <input placeholder="Search"/>
3. AltText: getByAltText: <img alt="profile"/>
4. DisplayValue: getByDisplayValue: <input value="JavaScript"/>

3. Testing pada Custom Hook
- Untuk melakukan test pada custom hook, dapat menggunakan React Hooks Testing Library, dengan melakukan install terlebih dahulu menggunakan syntax npm install -D @testing-library/react-hooks