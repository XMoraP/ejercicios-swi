let lista = [];

function callback(elemento){
    elemento = elemento * 2;
    return elemento;
};
function procesarLista(lista){
    let i = 0; 
    lista.forEach(function(elemento, i, lista){
        lista[i] = callback(lista[i]);
        i++;
    });
    return lista; 
};


listaPrueba = [1, 2, 3, 4, 5];

resultado = procesarLista(listaPrueba);

console.log(resultado);
