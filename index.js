const inputCaixa = document.getElementById('input-caixa');

const conteudo = document.getElementById('conteudo');

const btn = document.getElementById('btn');

btn.addEventListener('click', clicou);

function clicou(){
    if(inputCaixa.value === ''){
        alert('escreva algo')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputCaixa.value;
        conteudo.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputCaixa.value = "";
    salvarAlteracao()
}

conteudo.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checado');
        salvarAlteracao()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        salvarAlteracao()
    }
}, false);


function salvarAlteracao(){
    localStorage.setItem("data", conteudo.innerHTML);
}

function mostrarTarefas(){
    conteudo.innerHTML = localStorage.getItem("data")
}

mostrarTarefas();

