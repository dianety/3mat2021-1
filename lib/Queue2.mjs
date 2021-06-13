export class Queue{

    #data
    #head
    #tail

    constructor(){
        this.#data = {} // objeto vazio
        this.#head = 0 // início da fila
        this.#tail = -1 // final da fila
        //console.log(this.#data, this.#head, this.#tail)
    }

    enqueue(valor){
        this.#tail++
        this.#data[this.#tail] = valor
        //console.log(this.#data, this.#head, this.#tail)
    }

    dequeue(){
        if (this.empty){
            return undefined
        }
        let temp = this.#data[this.#head]
        delete this.#data[this.#head]
        this.#head++
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    print(){
        return JSON.stringify(this.#data)
    }

    get empty(){
        return this.#tail - this.#head + 1 === 0
    }

    peek(){
        return this.#data[this.#head]
    }
}

/*
let fila = new Queue()

fila.enqueue('Josefa')
fila.enqueue('Zeferino')
fila.enqueue('Laurentino')
fila.enqueue('Frederica')

let atendido = fila.dequeue()
console.log({atendido})

fila.enqueue('Adamastor')

fila.dequeue()
fila.dequeue()
fila.dequeue()
fila.dequeue()
*/
