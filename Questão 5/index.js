function inverterString(str) {
    let resultado = ""; 
    for (let i = str.length - 1; i >= 0; i--) { 
      resultado += str[i]; 
    }
    return resultado;
  }
  
  let entrada = "Exemplo de String";
  console.log("String original:", entrada);
  console.log("String invertida:", inverterString(entrada));
  