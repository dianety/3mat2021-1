/*
    ESTRUTURA DE DADOS DEQUE
    Deque = Double-Ended Queue (fila de duas portas)

    - fila é uma lista linear de acesso restrito, que permite apenas as operações de
    inserção e retirada EM QUALQUER UMA de suas pontas. Em outras palavras, a inserção pode
    acontecer tanto no início quanto no final, e a retirada também pode ser feita em ambas as extremidades.
    - como consequência, o deque não funciona pelo FIFO nem pelo LIFO.
    - a principal aplicação do deque é o gerenciamento d efilas com atendimento prioritário e desistências no final da fila
 
*/

export class Deque {

    #data

    constructor(){
        this.#data = [] // vetor vazio
    }

    insertFront(valor){
        this.#data.unshift(valor)
    }

    insertBack(valor){
        this.#data.push(valor)
    }

    removeFront(){
        return this.#data.shift()
    }

    removeBack(){
        return this.#data.pop()
    }

    peekFront(){
        return this.#data[0]
    }

    peekBack(){
        return this.#data[this.#data.length - 1]
    }

    print(){
        return JSON.stringify(this.#data)
    }

    get empty(){
        return this.#data.length === 0
    }
}