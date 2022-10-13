Resume Materi Pembelajaran Deployment

Adapun 3 poin utama dari pembelajaran materi Deployment, antara lain adalah sebagai berikut:
1. Build Pada React App
- Dalam mengembangkan aplikasi React, Build sangat disarankan, karena dapat membuat performa aplikasi dapat menjadi lebih cepat dan ringan, tidak seperti sebelum di Build yaitu lebih lambat. Dalam men-deploy suatu aplikasi pun harus menggunakan versi produksi.
- Untuk melakukan Build menggunakan Create React App, dapat menggunakan syntax "npm run build", dengan menggunakan syntax tersebut dapat membuat versi produksi untuk aplikasi yang kita memiliki ke dalam folder yang nantinya akan dibuat secara otomatis yaitu folder build. 
- Untuk menjalankan aplikasi secara optimal pada lokal komputer kita, dapat menggunakan serve. Yang pertama menginstall serve terlebih dahulu dengan syntax "npm install -g serve", kemudian untuk menjalankan serve di lokal dapat menggunakan syntax "serve -s build".

2. Deployment menggunakan Surge
- Deployment merupakan suatu kegiatan yang bertujuan untuk menyebarkan atau mengekspos aplikasi yang telah kita buat, agar dapat diakses secara publik atau dapat disebut juga hosting. Dalam mendeploy suatu aplikasi, dapat menggunakan beberapa layanan penerbit website statik secara gratis yang di sediakan untuk Front-End Developers, yang paling populer di antaranya adalah Surge dan Netlify.

<img width="554" alt="surge" src="https://user-images.githubusercontent.com/83440868/195560735-e4a3a246-a5fe-4807-a583-721887eeb702.png">

- Surge adalah layanan penerbit website statik yang menerima file HTML, CSS, dan JS. Surge merupakan aplikasi hosting yang mudah digunakan, untuk mendeploy aplikasi yang dimiliki menggunakan Surge dapat dengan langkah-langkah sebagai berikut, yaitu:
1. Install Node versi paling terbaru pada sistem operasi yang dimiliki
2. Install Surge pada terminal dari aplikasi yang kita miliki menggunakan syntax "npm install --global surge".
3. Kemudian deploy menggunakan Surge dengan menuliskan syntax "surge"
4. Setelah itu tunggu waktu proses deploy hingga selesai, dan aplikasi yang kita miliki dapat diakses secara umum.

3. Deployment menggunakan Netlify
- Netlify merupakan platform penyedia layanan build tools sekaligus Continous Deployment, atau platform untuk hosting aplikasi yang kita miliki secara gratis selain Surge. Netlify telah terintegrasi dengan Git Host yang populer seperti Github, Gitlab, dan Bitbucket. 
- Untuk mendeploy aplikasi yang dimiliki menggunakan Netlify dapat dengan langkah-langkah sebagai berikut, yaitu:
1. Buat akun Netlify melalui webiste Netlify.
2. Kemudian install Netlify CLI pada terminal dari aplikasi yang kita miliki dengan menggunakan syntax "npm install netlify-cli -g".
3. Setelah itu secara otomatis kita akan diarahkan pada website Netlify di Broswers untuk melakukan verifikasi akun.
4. Pilih "Create & configure a new site", dan untuk team pilihlah team yang telah tersedia.
5. Pilih lokasi atau path dari file aplikasi yang akan kita deploy, kemudian tunggu prosesnya hingga selesai, dan setelah itu aplikasi yang kita miliki dapat diakses secara publik.

