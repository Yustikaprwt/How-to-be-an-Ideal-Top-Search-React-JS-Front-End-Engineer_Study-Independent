Resume pembelajaran materi GraphQL Mutation

Adapun 3 poin utama dari pembelajaran materi GraphQL Mutation adalah sebagai berikut:
1. GraphQL, dan fitur pada GraphQL Client
- GraphQL adalah bahasa query dan runtime dari sisi server untuk API yang memprioritaskan untuk memberikan klien data sesuai dengan apa yang mereka inginkan, atau dapat disimpulkan bahwa GraphQL merupakan bahasa untuk query database dari sisi klien. Dengan menggunakan GraphQL kita dapat menggunakan satu endpoint untuk setiap permintaan yang diperlukan.
- Dan adapun 3 fitur utama pada GraphQL Client, yaitu Query, Mutation, dan Subscription.

2. Hasura dan Heroku
- Hasura merupakan suatu platform layanan yang menyediakan GraphQL dan rest API, yang dikelola penuh di cloud Hasura atau dihosting sendiri.
- Heroku merupakan platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman, selain itu Heroku juga menyediakan database postgres secara gratis.
- Untuk membuat sebuah database dengan menggunakan Hasura dapat melakukan setup menggunakan Heroku, dengan melakukan login terlebih dahulu, kemudian dapat membuat project baru, dan membuat database.

3. Apollo Client, Mutation, dan refetchQueries
- Apollo Client adalah sebuah library Javascript untuk mempermudah Frontend dalam menggunakan GraphQL, karena pada Apollo Client terdapat fitur-fitur yang sering dibutuhkan oleh Frontend. Selain itu, dengan menggunakan GraphQL memungkinkan dalam mengelola data lokal dan jarak jauk. Library inti dari Apollo Client sendiri juga menyediakan integrasi bawaan dengan React. Untuk menginstall libraru dari Apollo Client menggunakan syntax "npm add graphql @apollo/client". Untuk mengimport query ke dalam Apollo Client dapat menyalin syntax dari console yang terdapat pada hasura. Kemudian ambil initial data dari query yang terdapat pada server.
- Pada Apollo Client terdapat sebuah hook useQuery dan uselazyQuery, yang dimana useLazyQuery merupakan hook sempurna untuk mengeksekusi quey sebagai respons terhadap peristiwa selain rendering komponen. Sedangkan useQuery, ketika dipanggil, ia tidak segera mengeksekusi query yang terkait, sebaliknya, yaitu mengembalikan fungsi query dalam tupel hasil yang dipanggil ketika ingin mengeksekusi query.
- Mutation pada GraphQL merupakan sebuah fungsionalitas yang digunakan untuk menambahkan atau menghapus data. Dalam menggunakan mutation kita harus membuat sebuah operasi yang tersedia di server GraphQL, kemudian menentukan data yang perlu dikembalikan oleh GraphQL.
- refetchQueries pada GraphQL merupakan sebuah Array (atau fungsi yang mengembalikan array) untuk menentukan query yang ingin dipanggil setelah melakukan proses mutasi atau perpindahan, atau dapat juga mengambil kembali query secara selektif di luar proses mutasi.