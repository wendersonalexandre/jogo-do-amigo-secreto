//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let entradaInput = document.getElementById('amigo');
let listaDeAmigos = document.getElementById('listaAmigos')
let listaDosParticipantes = [];

function adicionarAmigo(){

    if(entradaInput.value === ""  ){
        alert('Por favor, insira um nome válido.');
        return;
    }
    listaDosParticipantes.push(entradaInput.value);
    listaDeAmigos.innerHTML = '';

    for(let i = 0; i < listaDosParticipantes.length; i++){
        let novoItem = document.createElement('li');
        novoItem.textContent = listaDosParticipantes[i];
        listaDeAmigos.appendChild(novoItem);
    }
    entradaInput.value = "";
}

function sortearAmigo() {
    if (listaDosParticipantes.length === 0) {
        alert("A lista de participantes está vazia!");
        return;
    }

    let pessoaSorteada = Math.floor(Math.random() * listaDosParticipantes.length);
    let nomeSorteado = listaDosParticipantes[pessoaSorteada];

    let elementoResultado = document.getElementById("resultado"); 
    elementoResultado.innerText = `Amigo sorteado: ${nomeSorteado}`; 
}



