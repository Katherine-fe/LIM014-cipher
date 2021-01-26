import cipher from './cipher.js';

console.log(cipher);

document.getElementById("cifrarBtn").addEventListener("click", () => {
  let toEncode = document.getElementById("textArea1").value.toUpperCase(); //toUpperCase valor en mayuscula
  let offSet = parseInt(document.getElementById("inputOffSet").value); // Math.abs devuelve un valor absulto 
  let result = cipher.encode(offSet,toEncode);
  if ( typeof (toEncode) !== 'string' || isNaN(offSet) || toEncode == "" ) {  
  
    alert("El texto solo debe contener 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' o verifique algun campo vacio");
  }
  else{
    document.getElementById("textArea2").innerHTML = result;
  }
  
});

 document.getElementById("descifrarBtn").addEventListener("click", () => {
  let toDecode = document.getElementById("textArea1").value.toUpperCase();
  let offSet = parseInt(document.getElementById("inputOffSet").value); // Math.abs devuelve un valor absulto 
  let result = cipher.decode(offSet,toDecode);
  if (typeof (toDecode) !== 'string' || isNaN(offSet) || toDecode == "" ) {  
  
    alert("El texto solo debe contener 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' o verifique algun campo vacio");
  }
  else{
    document.getElementById("textArea2").innerHTML = result;
  }
});

document.getElementById("resetbtn").addEventListener("click", () => {
 location.reload(true);
});

