const cipher = {
  encode: (toEncode, offSet) => {
 
   
    let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // arreglo de letras
    let finCifrado = ""; /*Almacena el resultado*/
   
    for (let i = 0; i <= toEncode.length; i++) { //for para definir los parámetros
      let textoIngresado = toEncode[i];  //asignamos un variable al texto ingresado
      let validarTextoIngresado = letras.includes(textoIngresado.toUpperCase()) // variable para validar que el texto ingresado convertivo en mayuscalas se encuentre en el arreglo


      if (validarTextoIngresado == true){ 
        
        let convertirMayu = textoIngresado.toUpperCase();
        let posicionAscci = ((convertirMayu.charCodeAt(0)-65+offSet)%26)+65;   
        let ascciAletra = String.fromCharCode(posicionAscci);      /* pasamos la posición ascii (número) a la letra correspondiente */
        finCifrado += ascciAletra;
      } 
      else
      {
         finCifrado += textoIngresado;   /* Si se agrega otro tipo de caracter que no sea letra, no se convierte, solo se añade */
      }      
              }
        
     
        return finCifrado;
  },
    
  decode: (toDecode, offSet) => {
    let codAscii; /*Almacena el codigo Ascii despues de aplicar la formula*/
    let codDescifrado; /*Convierte el codigo Ascii al Alfabeto normal*/
    let finDescifrado = "";/*Almacena el resultado*/
  /*
    if (toDecode == "" || offSet == "") {
      alert("Ingresa el Texto a Cifrar o el desplazamiento");

    }*/
    
    for (let i = 0; i <= toDecode.length; i++) {
      let toAscii = toDecode.charCodeAt(i);
  
      if (toAscii >=65  && toAscii <= 90) {
        codAscii = (toAscii + 65 - offSet) % 26 + 65;    
        codDescifrado = String.fromCharCode(codAscii);
        finDescifrado += codDescifrado;
      } 
      else if(toAscii >=0  && toAscii <= 64){
        finDescifrado = "";
      /*  alert("El texto solo debe contener 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'");*/
      }
      else if(toAscii >=123  && toAscii <= 255){
        finDescifrado = "";
      /*  alert("El texto solo debe contener 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'");*/
      }
      
        }return finDescifrado
   }
  };

  export default cipher;