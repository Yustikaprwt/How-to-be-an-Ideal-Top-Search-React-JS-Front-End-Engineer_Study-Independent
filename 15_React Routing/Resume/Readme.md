Resume materi React Routing

Adapun 3 poin utama dari resume materi React Routing antara lain adalah sebagai berikut:
1. Routes, Keunggulan SPA dan MPA, Kekurangan SPA dan MPA, Library Router React,
- Router merupakan modul dalam React yang berperan untuk melakukan proses navigasi pada SPA (Single Page Application). Selain Single Page Application (SPA) terdapat juga Multi Page Application (MPA). Single Page Application sendiri merupakan wadah sebuah server untuk mengirimkan apa yang kita butuhkan dengan melakukan setiap klik, kemudian browser langsung merender informasi tersebut tanpa perlu memuat ulang halaman lagi. Atau dapat juga disebut implementasi dari web yang membuat hanya satu dokumen web, kemudian untuk memperbarui isi konten dari web tersebut menggunakan API JavaScript seperti XMLHttpRequest dan Fetch jika konten yang ditampilkan berbeda. Sedangkan Multi Page Application (MPA) merupakan tradisional web app, yang dimana merupakan jenis aplikasi website yang perlu memuat ulang seluruh halaman web setiap kali kita membuat pemintaan baru.
- Adapun beberapa keunggulan dari SPA, antara lain adalah berikut:
Waktu loading dari websitenya jauh lebih cepat, tidak terdapat query tambahan ke server, front end yang cepat dan responsif, dan dapat meningkatkan pengalaman pengguna (User Experience).
- Adapun beberapa keunggulan dari MPA, antara lain adalah berikut:
SEO website lebih mudah untuk dioptimasi, memudahkan untuk mengubah halaman tertentu untuk setiap konten atau kebutuhan yang berbeda, dan menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website.
- Adapun beberapa kekurangan dari SPA, antara lain adalah berikut:
Kurang bagus dalam hal Search Engine Optimization (SEO), yang dimana artinya adalah optimasi agar website tersebut berada pada posisi teratas pada pencarian Google. Kemudian berat pada saat dibuka pertama kali, kurang aman dibandingkan dengan website biasa, dan kurang dalam kompatibilitas browser .
- Adapun beberapa kekurangan dari MPA, antara lain adalah sebagai berikut:
Kecepatan download website pada MPA lebih lama dibandingkan SPA, perlu mengintegrasikan antara Front End dan Back End, dan lebih sering membutuhkan maintenance dan update.
- Library Routing yang sering digunakan pada React adalah React Routing. Pada library ini terdapat beberapa komponen yang sering digunakan yaitu BrowserRouter(Sebagai Router yang menggunakan API history untuk melakukan sinkron UI dengan url), Switch (Digunakan untuk membungkus kumpulan beberapa komponen Route), Route (Sebagai pengarah jalannya lalu lintas suatu aplikasi web), Link (Digunakan untuk berpindah antar halaman).

2. Menggunakan url params pada React, Perbedaan Link dan Redirect
- Url params atau dapat disebut juga parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis pada URL halaman. Implementasi dari url params adalah dapat mengakses params dari props komponen yang telah dibuat.
- Untuk mengakses params dapat menggunakan sintaks "this.props.match.params'
- Link dapat digunakan pada kondisi apapun, sedangkan redirect lebih sering digunakan pada halaman 404. 

3. Hook Router pada React
- 4 Hooks pada router antara lain adalah useHistory, useLocation, useParams, dan useRouteMatch.
- useHistory, berperan untuk memberikan akses ke instance riwayat yang dapat digunakan untuk bernavigasi. Contoh length, go, goBack, goForward, push, dan replace.
- useLocation, berperan untuk mengembalikan objek lokasi yang mewakili URL saat ini.
- useParams, berperan untuk mengembalikan objek yang berbentuk key value dari URL.
- useRouteMatch, berperan untuk mencocokkan URL saat ini.