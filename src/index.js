import cipher from './cipher.js';

console.log(cipher);


document.getElementById("cifrarBtn").addEventListener("click", () => {
  const toEncode = document.getElementById("textArea1").value.toUpperCase();
  const offSet = parseInt(document.getElementById("inputOffSet").value); // Math.abs devuelve un valor absulto 
  let result = cipher.encode(toEncode, offSet)
  if (typeof (offSet) !== 'number' || typeof (toEncode) !== 'string' || isNaN(offSet) || toEncode == "" ) {  
  
    alert("El texto solo debe contener 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' o verifique algun campo vacio");
  }
  else if(result==""){
            alert("El texto solo debe contener 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'");

  }
  else{
    document.getElementById("textArea2").innerHTML = result;
  }

});

document.getElementById("descifrarBtn").addEventListener("click", () => {
  const toDecode = document.getElementById("textArea1").value.toUpperCase();
  const offSet = parseInt(document.getElementById("inputOffSet").value); // Math.abs devuelve un valor absulto 
  let result = cipher.decode(toDecode, offSet)
  if (typeof (offSet) !== 'number' || typeof (toDecode) !== 'string' || isNaN(offSet) || toDecode == "" ) {  
  
    alert("El texto solo debe contener 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' o verifique algun campo vacio");
  }
  else{
    document.getElementById("textArea2").innerHTML = result;
  }
});

document.getElementById("resetbtn").addEventListener("click", () => {
 location.reload(true);
});


