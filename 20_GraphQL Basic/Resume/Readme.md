Resume materi dari pembelajaran GraphQL Basic

Adapun 3 poin utama dari resume materi GraphQL Basic, antara lain adalah sebagai berikut:
1. Pengertian dari GraphQL, dan server penyedia GraphQL
- GraphQL merupakan sebuah bahasa query yang digunakan pada suatu API. API sendiri merupakan singkatan dari Application Programming Interface yang dimana merupakan sebuah protokol atau teknologi yang digunakan untuk menangani sebuah perangkat lunak untuk berinteraksi satu sama lain. Sehingga, dapat disimpulkan bahwa dengan menggunakan GraphQL dapat memanggil sebuah API secara lebih fleksibel dan efisien, karena GraphQL meminimilisir jumlah data yang dibutuhkan untuk di transfer melalui jaringan. Selain itu dengan menggunakan GraphQL, kita dapat mengatur data apa saja yang dibutuhkan pada suatu query.
- Terdapat 3 fitur utama pada GraphQL client, antara lain adalah Query, Mutation, dan Subscription. Query digunakan untuk mendapatkan data secara spesifik, Mutation digunakan untuk memasukkan data baru, melakukan pembaruan data, dan menghapus data. Subscription digunakan untuk melakukan pembaruan secara realtime, atau waktu yang sebenarnya. 
- Query terbagi menjadi 4, yaitu Basics, Multiple related data sources, multiple unrelated data sources, fragments.
- Hasura, hasura merupakan server penyedia GraphQL yang menyediakan API GraphQL secara instaan dan real time diatas Postgres, dengan menggunakan pemicu webhook pada event database. Adapun fitur-fitur yang tersedia pada Hasura adalah dapat membuat query bawaan, data yang diambil realtime, dapat menggabungkan skema jarak jauh, dapat memicu webhooks, dapat bekerja dengan basis data yang telah ada sebelumnya, dapat mengontrol akses yang sangat terukur, dapat memberikan performa tinggi dan rekam jejak yang kecil, interface untuk admin dan terdapat proses migrasi. 
- Untuk membuat sebuah database dengan menggunakan Hasura dapat melakukan setup menggunakan Heroku, dengan melakukan login terlebih dahulu, kemudian dapat membuat project baru, dan membuat database.

2. Apollo Client dan Query
- Apollo Client adalah sebuah library Javascript untuk mempermudah Frontend dalam menggunakan GraphQL, karena pada Apollo Client terdapat fitur-fitur yang sering dibutuhkan oleh Frontend. Selain itu, dengan menggunakan GraphQL memungkinkan dalam mengelola data lokal dan jarak jauk. Library inti dari Apollo Client sendiri juga menyediakan integrasi bawaan dengan React. Untuk menginstall libraru dari Apollo Client menggunakan syntax "npm add graphql @apollo/client".
- Untuk mengimport query ke dalam Apollo Client dapat menyalin syntax dari console yang terdapat pada hasura. Kemudian ambil initial data dari query yang terdapat pada server. 

3. Mutation, dan Subsciption
- Langkah awal untuk melakukan setup mutation menggunakan Apollo Client dapat mengimport useMutation hooks dari library Apollo Client. 
- Langkah awal untuk melakukan setup Subscription adalah mengimport Apollo Client terlebih dahulu pada project yang dimiliki, kemudian install dan import seluruh module yang dibutuhkan dengan syntax "npm add @apollo/client subscriptions-transport-ws.
- Untuk memasukan link url dari API yang ingin dipanggil, dapat membuat const terlebih dahulu kemudian memasukan uri yaitu urlnya dan masukan headers dari API tersebut yaitu key dan value yang terdapat pada API tersebut. 