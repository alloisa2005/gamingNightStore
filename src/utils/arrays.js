export const arrayAzar = (arr, cantidad) => {
  if (cantidad <= 0) {
    // Si la cantidad es menor o igual a cero, retorna un array vacío.
    return [];
  }

  // Si la cantidad es mayor que la longitud del array, simplemente devuelve el array original.
  if (cantidad >= arr.length) {
    return arr;
  }

  const elementosAlAzar = [];

  while (elementosAlAzar.length < cantidad) {
    const indiceAlAzar = Math.floor(Math.random() * arr.length);
    const elementoSeleccionado = arr.splice(indiceAlAzar, 1)[0]; // Elimina y obtiene el elemento al azar.
    elementosAlAzar.push(elementoSeleccionado);
  }

  return elementosAlAzar;
}

export const nuevoArray = (arr, cantidad) => {
  if (cantidad <= 0 || cantidad >= arr.length) {
    // Si la cantidad es menor o igual a cero, retorna un array vacío.
    return arr;
  }

  const nuevoArray = [];

  while (nuevoArray.length < cantidad) {
    const indiceAlAzar = Math.floor(Math.random() * arr.length);
    const elementoSeleccionado = arr[indiceAlAzar]; // Elimina y obtiene el elemento al azar.
    nuevoArray.push(elementoSeleccionado);
  }  
  return nuevoArray;
}

export const arrayAleatorioNoRepetido = (arr, numero) => {  

  if (numero > arr.length) {
    numero = arr.length;
  }

  const newArray = [];
  const tempArray = arr.slice(); // Copiar el array original

  for (let i = 0; i < numero; i++) {
    if (tempArray.length === 0) {
      break; // Todos los elementos únicos se han agotado
    }

    const randomIndex = Math.floor(Math.random() * tempArray.length);
    const randomElement = tempArray.splice(randomIndex, 1)[0];
    newArray.push(randomElement);
  }

  return newArray;
}