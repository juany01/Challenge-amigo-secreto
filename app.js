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
}

function actuarlizar(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML ='';

    for(let i=0; i<amigos.length; i++){
        let li = document. createElement('li');
        li.textContet = amigos [i];
        lista.appendChild(li);
    }
}

