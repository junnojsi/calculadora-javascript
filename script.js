class Calculadora {
    constructor(elemOpAnterior, elemOpAtual) {
        this.elemOpAnterior = elemOpAnterior;
        this.elemOpAtual = elemOpAtual;
        this.limparVisor();
    }

    limparVisor() {
        this.operadorAtual = '';
        this.operadorAnterior = '';
        this.operacao = undefined;
    }

    apagar() {
        this.operadorAtual = this.operadorAtual.toString().slice(0, -1);
    }

    acrescentarNumero(numero) {
        if (numero === '.' && this.operadorAtual.includes('.')) return;
        this.operadorAtual = this.operadorAtual.toString() + numero.toString();
    }

    selecionarOperacao(operacao) {
        if (this.operadorAtual === '')   return;
        if (this.operadorAnterior !== '') {
            this.computar();
        };        
        this.operacao = operacao;
        this.operadorAnterior = this.operadorAtual;
        this.operadorAtual = '';

    }

    computar() {
        let computacao;
        const anterior = parseFloat(this.operadorAnterior);
        const atual = parseFloat(this.operadorAtual);
        if (isNaN(anterior) || isNaN(atual)) return;
        switch(this.operacao) {
            case '+':
                computacao = anterior + atual;
                break;
            case '-':
                computacao = anterior - atual;
                break;
            case '*':
                computacao = anterior * atual;
                break;
            case '÷':
                computacao = anterior / atual;
                break;
            default:
                return;
        }
        this.operadorAtual = computacao;
        this.operacao = undefined;
        this.operadorAnterior = '';    
    }

    obterNumeroVisor(numero) {
        const numeroString = numero.toString();
        const digitosInteger = parseFloat(numeroString.split('.')[0]);
        const digitosDecimal = numeroString.split('.')[1];
        let visorInteger;
        if (isNaN(digitosInteger)) {
            visorInteger = '';
        } else {
            visorInteger = digitosInteger.toLocaleString('en', {maximumFractionDigits: 0});
        };
        if (digitosDecimal != null) {
            return `${visorInteger}.${digitosDecimal}`;
        } else {
            return visorInteger; 
        }
    }

    atualizarVisor() {
        this.elemOpAtual.innerText = this.obterNumeroVisor(this.operadorAtual);
        if (this.operacao != null) {
            this.elemOpAnterior.innerText = `${this.operadorAnterior} ${this.operacao}`;
        } else {
            this.elemOpAnterior.innerText = '';
        };
    }
}

const botoesNumeros = document.querySelectorAll('[data-numero');
const botoesOperacoes = document.querySelectorAll('[data-operacao');
const botaoIgual = document.querySelector('[data-igual]');
const botaoApagar = document.querySelector('[data-apagar');
const botaoLimparVisor = document.querySelector('[data-limpar-visor');
const elemOpAnterior = document.querySelector('[data-operando-anterior');
const elemOpAtual = document.querySelector('[data-operando-atual');

const calculadora = new Calculadora(elemOpAnterior, elemOpAtual);

botoesNumeros.forEach(botao => {
    botao.addEventListener('click', () => {
        calculadora.acrescentarNumero(botao.innerText);
        calculadora.atualizarVisor();
    });
});

botoesOperacoes.forEach(botao => {
    botao.addEventListener('click', () => {
        calculadora.selecionarOperacao(botao.innerText);
        calculadora.atualizarVisor();
    });
});

botaoIgual.addEventListener('click', botao => {
    calculadora.computar();
    calculadora.atualizarVisor();
});

botaoLimparVisor.addEventListener('click', botao => {
    calculadora.limparVisor();
    calculadora.atualizarVisor();
});

botaoApagar.addEventListener('click', botao => {
    calculadora.apagar();
    calculadora.atualizarVisor();
});