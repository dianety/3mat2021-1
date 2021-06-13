// aula 24 (não gravada) - deque via objeto (assisti no noturno)

export class Deque {

    #data // armazenamento
    #head // início do deque
    #tail // final do deque

    constructor(){
        this.#data = {}
        this.#head = 0
        this.#tail = -1
        //console.log(this.#data, this.#head, this.#tail)
    }

    insertFront(valor){
        this.#head--
        this.#data[this.#head] = valor
        //console.log(this.#data, this.#head, this.#tail)
    }

    insertBack(valor){
        this.#tail++
        this.#data[this.#tail] = valor
        //console.log(this.#data, this.#head, this.#tail)
    }

    get empty(){
        return this.#tail - this.#head + 1 === 0
    }

    removeFront(){
        if (this.empty){
            return undefined
        }
        let temp = this.#data[this.#head]
        delete this.#data[this.#head]
        this.#head++
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    removeBack(){
        if (this.empty){
            return undefined
        }
        let temp = this.#data[this.#tail] // o delete apenas remove sem retornar o valor retirado, por isso o temp
        delete this.#data[this.#tail]
        this.#tail--
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    peekFront(){
        return this.#data[this.#head]
    }

    peekBack(){
        return this.#data[this.#tail]
    }

    print(){
        return JSON.stringify(this.#data)
    }
}

/*
let deque = new Deque()
deque.insertBack('Cascão')
deque.insertBack('Cebolinha')
deque.insertBack('Magali')
deque.insertFront('Mônica')
deque.insertFront('Chico Bento')

let atendido = deque.removeFront()
console.log({atendido})

let primeiro = deque.peekFront()
console.log({primeiro})

deque.insertBack('Franjinha')
*/