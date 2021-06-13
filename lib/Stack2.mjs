export class Stack {
    
    #data // declaração de atributo privado
    #tail // cauda (topo) da pilha

    constructor() {
        
        this.#data = {} // objeto vazio
        this.#tail = -1
        //console.log(this.#data)
    }

    push(valor){
        this.#tail++ // incrementando o topo
        this.#data[this.#tail] = valor
        //console.log(this.#data)
    }

    pop(){
        // se a pilha estiver vazia, retorna undefined para evitar que o valor de #tail fique abaixo de -1
        if (this.empty){
            return undefined
        }
        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail] // destrói a posição do objeto
        this.#tail--
        //console.log(this.#data)
        return temp
    }

    print(){
        return JSON.stringify(this.#data)
    }

    get empty(){
        // estará vazia se o tail ainda for -1
        return this.#tail < 0
    }

    peek(){
        return this.#data[this.#tail]
    }
}

/*
let pilha = new Stack()
pilha.push('prato azul')
pilha.push('prato verde')
pilha.push('prato vermelho')
pilha.push('prato branco')

let prato = pilha.pop()
console.log(prato)
pilha.push('prato amarelo')
*/
