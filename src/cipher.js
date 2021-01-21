const cipher = {
  encode: (toEncode, offSet) => {
    let codAscii; /*Almacena el codigo Ascii despues de aplicar la formula*/
    let codCifrado; /*Convierte el codigo Ascii al Alfabeto normal*/
    let finCifrado = ""; /*Almacena el resultado*/
  
    for (let i = 0; i <= toEncode.length; i++) { //bucle 
      let toAscii = toEncode.charCodeAt(i);
  
      if (toAscii >=65  && toAscii <= 90) {
        codAscii = (toAscii - 65 + offSet) % 26 + 65;
        codCifrado = String.fromCharCode(codAscii);
        finCifrado += codCifrado;
      }
  
     
     
      else if(toAscii >=1  && toAscii <= 64){
        finCifrado = "";
        
      }
      else if(toAscii >=123  && toAscii <= 255){
        finCifrado = "";

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