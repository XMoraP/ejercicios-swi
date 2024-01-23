// Crear una promesa
const miPromesa = new Promise((resolve, reject) => {
    // Simular una operación asíncrona
    setTimeout(() => {
      const exito = true; // Cambiar a false para simular un fallo
      if (exito) {
        resolve("¡La operación fue exitosa!"); // La promesa se cumple
      } else {
        reject("Hubo un error."); // La promesa se rechaza
      }
    }, 2000); // Simulamos una operación que tarda 2 segundos
  });
  
  // Usar la promesa
  miPromesa
    .then((resultado) => {
      console.log("Éxito:", resultado);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  