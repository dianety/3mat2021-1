/*
    ESTRUTURA DE DADOS FILA
    - fila é uma lista linear de acesso restrito, que permite apenas as operações de
    inserção (enqueue) e retirada (dequeue),a primeira ocorrendo no final da estrutura
    e a outra no início da estrutura.
    - como consequência, a pilha funciona pelo princípio FIFO (First In, First Out - 
    primeiro a entrar, primeiro a sair).
    - a principal aplicação das filas são tarefas que processam itens em ordem de chegada.
*/

export class Queue {
    
    #data // declaração de atributo privado

    constructor(){
        this.#data = [] // vetor vazio
    }

    // inserção na fila (ocorre no final)
    enqueue(valor){
        this.#data.push(valor)
    }

    // remoção da fila (ocorre no início)
    dequeue(){
        return this.#data.shift()
    }

    print(){
        return JSON.stringify(this.#data)
    }

    peek(){ // espiadinha no início da fila (próximo a ser removido)
        return this.#data[0]
    }

    get empty(){
        return this.#data.length === 0
    }

}