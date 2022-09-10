function mengecekBilanganPrima (num) {
    var hasil = (num + ' merupakan bilangan prima')
    for(var i = num-1; i>1; i--) {
      if (num%i === 0) {
        hasil = (num + ' bukan merupakan bilangan prima')
      } 
    }
    return hasil
  }
  
console.log(mengecekBilanganPrima(3));
console.log(mengecekBilanganPrima(7));
console.log(mengecekBilanganPrima(10)); 
 