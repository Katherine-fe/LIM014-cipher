
  const cipher = {
    encode: function(offSet,toEncode){
      let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];// arreglo de letras
      let finCifrado  = "";
       
    
      for (let i=0; i<toEncode.length; i++)//for para definir los parámetros
      {
        let textoIngresado  = toEncode[i];  //asignamos un variable al texto ingresado
        let validarTextoIngresado  = letras.includes(textoIngresado)//validando que el texto ingresado este en el arreglo
     
        if (validarTextoIngresado  == true){
          let posicionAscci  = (textoIngresado.charCodeAt(0)-65+offSet)%26+65;
          let ascciAletra  = String.fromCharCode(posicionAscci);  /* pasamos la posición ascii (número) a la letra correspondiente */
          
          finCifrado  += ascciAletra ;
        } 
        else {
           finCifrado  += textoIngresado;  /* Si se agrega otro tipo de caracter que no sea letra, no se convierte, solo se añade */
        }      
      }
      return finCifrado ;   
    }, 

    
  decode: (offSet,toDecode) => {
    let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];// arreglo de letras
    let finCifrado  = "";
     
  
    for (let i=0; i<toDecode.length; i++)//for para definir los parámetros
    {
      let textoIngresado  = toDecode[i];  //asignamos un variable al texto ingresado
      let validarTextoIngresado  = letras.includes(textoIngresado)//validando que el texto ingresado este en el arreglo
   
      if (validarTextoIngresado  == true){
        let posicionAscci  = (textoIngresado.charCodeAt(0)+65-offSet)%26+65;
        let ascciAletra  = String.fromCharCode(posicionAscci);  /* pasamos la posición ascii (número) a la letra correspondiente */
        
        finCifrado  += ascciAletra ;
      } 
      else {
         finCifrado  += textoIngresado;  /* Si se agrega otro tipo de caracter que no sea letra, no se convierte, solo se añade */
      }      
    }
    return finCifrado ;   
  }, 
}
  export default cipher;