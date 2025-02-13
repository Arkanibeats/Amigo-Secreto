// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    var inputAmigo = document.getElementById('amigo').value;
    //console.log(inputAmigo);
    if (inputAmigo === "") {
        alert("Debe Escribir un nombre");
    }else{
        amigos.push(inputAmigo);
        console.log(amigos);
    }
    actualizarLista();
    document.getElementById("amigo").value = "";
    
}


function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

