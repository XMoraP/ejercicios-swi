let estudiante = {
    nombre: '',
    edad: '',
    materias: []
}

function agregarMateria(materia){
    estudiante.materias.push(materia);
};

function mostrarInformacion(){
    console.log(estudiante.nombre);
    console.log(estudiante.edad);
    let i = 0;
    estudiante.materias.forEach(function(materia, i, materias){
        console.log(materias[i]);
        i++
    });
}
let miEstudiante = estudiante

miEstudiante.nombre = 'Alexander';
miEstudiante.edad = 22;
let materia1 = 'Matematicas';
let materia2 = 'Lenguaje';
let materia3 = 'Historia';
agregarMateria(materia1);
agregarMateria(materia2);
agregarMateria(materia3);
mostrarInformacion();