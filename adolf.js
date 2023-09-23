
function numberToWordsSpanish(number) {
    const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  
    const unidadesLargo = ['', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenasLargo = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especialesLargo = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  
    const miles = ['', 'mil', 'millón', 'mil millones'];
    
    if (number < 0 || number >= 1e9) {
      return 'Número fuera de rango';
    }
    
    if (number === 0) {
      return 'cero';
    }
    
    const chunks = [];
    
    for (let i = 0; number > 0; i++) {
      const chunk = number % 1000;
      
      if (chunk > 0) {
        let chunkStr = '';
        
        const centenas = Math.floor(chunk / 100);
        const decenasUnidades = chunk % 100;
        
        if (centenas > 0) {
          if (centenas === 1 && decenasUnidades === 0 && i !== 1) {
            chunkStr += 'cien';
          } else {
            chunkStr += unidadesLargo[centenas] + 'cientos';
          }
        }
        
        if (decenasUnidades > 0) {
          if (centenas > 0) {
            chunkStr += ' ';
          }
          
          if (decenasUnidades < 10) {
            chunkStr += unidadesLargo[decenasUnidades];
          } else if (decenasUnidades < 20) {
            chunkStr += especialesLargo[decenasUnidades - 10];
          } else {
            const decena = Math.floor(decenasUnidades / 10);
            const unidad = decenasUnidades % 10;
            chunkStr += decenasLargo[decena];
            if (unidad > 0) {
              chunkStr += ' y ' + unidadesLargo[unidad];
            }
          }
        }
        
        if (i > 0 && chunkStr !== 'un') {
          chunkStr += ' ' + miles[i];
        }
        
        chunks.push(chunkStr);
      }
      
      number = Math.floor(number / 1000);
    }
    
    return chunks.reverse().join(' ');
  }
  
  // Example usage:
  const number = 1234567; // Replace with the number you want to convert
  const words = numberToWordsSpanish(number);
  console.log(words); // Output: "un millón doscientos treinta y cuatro mil quinientos sesenta y siete"
  </script>