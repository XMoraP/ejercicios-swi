 
function analizarCalificaciones(lista = []){
    let sumP = 0;
    let sumA = 0; 
    let sumR = 0; 
    let sumS = 0;
    lista.forEach(function(x, index){
        sumP = sumP + lista[index]; 
    });
    promedio = sumP / lista.length;
    let i = 0;
    while( i <= lista.length){
        if(lista[i] >= 7) sumA++;
        if(lista[i] >= 5 && lista[i] < 7) sumR++;
        if(lista[i] < 5) sumS++; 
        i++;
    };
    console.log(`Promedio: ${promedio} \nAprobados: ${sumA} \nRegulares: ${sumR} \nSuspensos: ${sumS}`);
    return true;
};
let calificaciones = [8, 6, 7, 4, 9, 5, 7];

let resultado = analizarCalificaciones(calificaciones);

console.log(resultado);
