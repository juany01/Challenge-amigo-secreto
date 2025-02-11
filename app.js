let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre===''){
        alert("por favor ingrese un nombre");
    } 
    else{
        amigos.push(nombre); 
        document.getElementById('amigo').value - '';
    }
}

