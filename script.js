function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));


let v1 = Number(prompt('Insira o primeiro valor: '));
let v2 = Number(prompt('Insira o segundo valor: '));
let resultado;

function soma() {
    resultado = v1 + v2;
    alert(`${v1} + ${v2} = ${resultado}`);
    novaOperacao();
}
function subtracao() {
    resultado = v1 - v2;
    alert(`${v1} - ${v2} = ${resultado}`);
    novaOperacao();
}
function multiplicacao() {
    resultado = v1 * v2;
    alert(`${v1} * ${v2} = ${resultado}`);
    novaOperacao();
}
function divisaoReal() {
    resultado = v1 / v2;
    alert(`${v1} / ${v2} = ${resultado}`);
    novaOperacao();
}
function divisaoInteira() {
    resultado = v1 % v2;
    alert(`O resto da divisão entre ${v1} e ${v2} é igual a ${resultado}`);
    novaOperacao();
}
function potenciacao() {
    resultado = v1 ** v2;
    alert(`${v1} elevado a ${v2}ª é igual a ${resultado}`);
    novaOperacao();
}
function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    if (opcao == 1) {
        calculadora();
    } else id (opcao == 2); {
        alert('Até mais!');
    }
    
}

    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    }
}

calculadora();

