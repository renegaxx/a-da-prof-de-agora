class Calculadora {
    constructor() {
         // inicializando o visor com o valor 0
        this.valor = '0'
    }

      //metodo para adicionar um número ao visor
    adicionarNumero(numero) {
         // se o valor atual for igual a 0, substitui pelo numero
        if(this.valor === '0') {
            this.valor = numero
             } else{
             // senao, adiciona o número ao final do valor atual (ex:15)
        this.valor += numero
    }
    this.atualizarVisor();
    }

  // metodo para adicionar uma operação ao visor
    adicionarOperacao(operacao) {
         // se o último caractere do valor for uma operação, substitui pela nova operação
        if (this.valor.slice(-1) === '+'||
        this.valor.slice(-1) === '-' ||
        this.valor.slice(-1) === '*' ||
        this.valor.slice(-1) === '/') {
            this.valor = this.valor.slice(0, -1) + operacao
        } else{
            // senao adiciona a operação no final
            this.valor += operacao 
        }
        this.atualizarVisor()
    }

    resultado(){
        try{
          //usa a função eval para calcular o resultado da expressão no visor
          this.valor = eval(this.valor).toString()
        } catch(e) {
            // se houver um erro na expressao, exibe a mensagem erro 
            this.valor = 'Erro'
        }
        this.atualizarVisor()
    }

    limpar() {
        this.valor = 0
        this.atualizarVisor()
    }

    atualizarVisor(){
        document.getElementById('visor').value = this.valor
    }
}

let calculadora = new Calculadora()