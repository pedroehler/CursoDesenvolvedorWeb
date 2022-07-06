// let resposta = confirm("Você confirma?");

// console.log("A resposta foi " + resposta);

let a = 0;
let b = 0;

function somar(a, b){
    return a + b;
}

// console.log(somar(2,5));

// ao clicar no botão executar
// document = documento html
// querySelectior() - método que busca uma classe pelo id (usando hashtag antes do nome)
// addEventListener() - método que adicionar um ouvindo de eventos, para o evento "click" nesse caso
// o parâmetro secundário (function...) é um callback, uma função passada como parâmetro
// para retornar o resultado do método, erros, mensagens, etc., nesse caso um alert()
document.querySelector("#calcular").addEventListener("click", function(){
    let a = document.querySelector("#valorA").value;
    let b = document.querySelector("#valorB").value;
    if(a.length > 0 && b.length > 0){
        let resultado = parseFloat(a) + parseFloat(b);
        alert("A soma de ambos os números é: " + resultado + ".");
    } else {
        alert("Por favor, preencha ambos os campos com números.");
    }
});