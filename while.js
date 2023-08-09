var estudiantes = ["Maria","Thomas","puki","Cabeza",];
function saludarEstudiante(estudiante){
console.log(`Hola putos ${estudiante}`);
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);

}