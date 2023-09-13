function hitungLuasPersegi() {
   const sisiInput = document.getElementById("sisi");
   const hasilLuasElemen = document.getElementById("hasilLuas");
 
   
   const sisi = parseFloat(sisiInput.value);
 
   
   if (!isNaN(sisi)) {
     
     const luasPersegi = sisi * sisi;
     const teksHasil = `L = S x S <br>L = ${sisi} x ${sisi} <br>L = ${luasPersegi}`;
 
     
     hasilLuasElemen.innerHTML = teksHasil;
   } else {
     
     hasilLuasElemen.textContent = "Masukkan panjang sisi yang valid.";
   }
 }

 function hitungKelilingPersegi() {
   const sisiKeliling = document.getElementById("sisikeliling");
   const hasilKeliling = document.getElementById("hasilKeliling");
 
   
   const sisiK = parseFloat(sisiKeliling.value);
 
   
   if (!isNaN(sisiK)) {
     
     const kelilingPersegi = 4 * sisiK;
     const teksHasil2 = `L = 4 x S <br>L = 4 x ${sisiK} <br>L = ${kelilingPersegi}`;
 
     
     hasilKeliling.innerHTML = teksHasil2;
   } else {
     
      hasilKeliling.textContent = "Masukkan panjang sisi yang valid.";
   }
 }