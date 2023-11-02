export const separadorMiles = (number) => {  

  // Convertimos el número a una cadena de texto
  const numberString = number.toString();
  
  // Dividimos la cadena en partes utilizando el punto decimal (si lo hay)
  const parts = numberString.split('.');
  
  // Tomamos la parte entera y le agregamos puntos como separadores de miles
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  // Si hay una parte decimal, la volvemos a agregar
  const result = parts.length > 1 ? integerPart + '.' + parts[1] : integerPart;
  
  return result;
}