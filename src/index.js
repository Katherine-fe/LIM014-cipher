import cipher from './cipher.js';

console.log(cipher);


document.getElementById("cifrarBtn").addEventListener("click", () => {
  const toEncode = document.getElementById("textArea1").value.toUpperCase();
  const offSet = parseInt(document.getElementById("inputOffSet").value); // Math.abs devuelve un valor absulto 
  let result = cipher.encode(toEncode, offSet)
  document.getElementById("textArea2").innerHTML = result;
});

document.getElementById("descifrarBtn").addEventListener("click", () => {
  const toDecode = document.getElementById("textArea1").value.toUpperCase();
  const offSet = parseInt(document.getElementById("inputOffSet").value); // Math.abs devuelve un valor absulto 
  let result = cipher.decode(toDecode, offSet)
  document.getElementById("textArea2").innerHTML = result;
});

document.getElementById("resetbtn").addEventListener("click", () => {
 location.reload(true);
});


