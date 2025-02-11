let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre===''){
        alert("por favor ingrese un nombre");
    } 
    else{
        amigos.push(nombre); 
        document.getElementById('amigo').value = '';
    }
    actualizar();
    console.log(amigos);
}

function actualizar(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML ='';
    console.log("actualizar")
    for(let i=0; i<amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

