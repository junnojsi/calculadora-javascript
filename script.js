class Calculadora {
    constructor(txtOpAnterior, txtOpAtual) {
        this.txtOpAnterior = txtOpAnterior;
        this.txtOpAtual = txtOpAtual;
        this.limparTudo();
    }

    limparTudo() {
        this.txtOpAtual = '';
        this.txtOpAnterior = '';
        this.operacao = undefined;
    }

    apagar() {

    }

    acrescentarNumero(numero) {

    }

    selecionarOperacao(operacao) {

    }

    computar() {

    }

    atualizarVisor() {

    }
}

const botoesNumeros = document.querySelectorAll('[data-numero');
const botoesOperacoes = document.querySelectorAll('[data-operacao');
const botaoIgual = document.querySelector('[data-igual]');
const botaoApagar = document.querySelector('[data-apagar');
const botaoLimparTudo = document.querySelector('[data-limpar-tudo');
const txtOpAnterior = document.querySelector('[data-operando-anterior');
const txtOpAtual = document.querySelector('[data-operando-atual');


