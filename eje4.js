function obtenerNumeroAleatorio(){
    return Math.random() * 10;
};

const promesa = new Promise((resolve, reject) => {
    const numAl = obtenerNumeroAleatorio();
    if (numAl > 5) resolve(numAl);
    else reject('Ha habido un error');
})

promesa

.then((result) => {
    console.log("Exito: ", result)
})

.catch((error) => {
    console.log("Error: ", error)
})
