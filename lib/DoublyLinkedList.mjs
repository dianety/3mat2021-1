/*
    ESTRUTURA DE DADOS LISTA DUPLAMENTE ENCADEADA

    - A lista duplamente encadeada é uma estrutura de dados formada por unidades
    de informação chamadas nodos ou nós.

    - Cada nodo da lista encadeada tem três partes: uma, que armazena a
    informação; outra, que guarda o endereço do nodo anterior; a terceira,
    que guarda o endereço do nodo seguinte

    - A qualquer momento, temos um conhecimento apenas limitado de onde
    se encontram todos os nodos da lista. Sabemos apenas onde está o
    primeiro e o último nodo da sequência. Os nodos intermediários precisam
    ser encontrados partindo-se do primeiro ou do último nodo e percorrendo
    a sequência

*/

class Node {
    constructor(valor){
        this.data = valor
        this.prev = null // nodo anterior
        this.next = null // nodo posterior
    }
}

export class DoublyLinkedList {
    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get empty(){
        return this.#count === 0
    }

    get count(){
        return this.#count
    }

    #findNode(pos){
        let node = null

        // determinando se o percurso será feito a partir do início (#head) ou do final (#tail)
        if(pos / this.#count < 0.5){ // nodo na primeira metade da estrutura
            node = this.#head
            for(let i = 0; i < pos; i++){
                node = node.next
            }
        }
        else { // nodo na segunda metade da estrutura
            node = this.#tail
            for (let i = this.#count - 1; i > pos; i--){
                node = node.prev
            }
        }
        return node
    }

    insertHead(valor){
        this.insert(0, valor)
    }

    insertTail(valor){
        this.insert(this.#count, valor)
    }

    insert(pos, valor){

        // A posição não pode ser negativa
        if(pos < 0) {
            return // sai sem fazer nada
        }

        const node = new Node(valor)

        // 1° caso: lista vazia
        if(this.empty){
            this.#head = node
            this.#tail = node
        }
        // 2° caso: inserção no início
        else if (pos === 0){
            node.next = this.#head
            this.#head.prev = node
            this.#head = node
        }
        // 3° caso: inserção no final
        else if (pos >= this.#count){
            node.prev = this.#tail
            this.#tail.next = node
            this.#tail = node
        }
        // 4° caso: inserção em posição intermediária
        else {
            let nodePos = this.#findNode(pos)
            let nodeBefore = nodePos.prev

            // o sucesso do novo nodo passa a ser o nodo da posição
            node.next = nodePos
            // o sucesso do nodo anterior passa a ser o novo nodo
            nodeBefore.next = node
            // o antecessor do novo nodo passa a ser o nodo anterior
            node.prev = nodeBefore
            // o antecessor do nodo da posição
            nodePos.prev = node

        }
        this.#count++
    }

    print(){
        let output = '('
        let node = this.#head
        for (let i=0; i < this.#count; i++){
            output += `[${i}]` + JSON.stringify(node.data)
            if (node.next){
                output += ' <-> '
            }
            node = node.next
        }
        return output + `) count: ${this.#count}`
    }

    peek(pos){
        // lista vazia ou posição fora dos limites
        if (this.empty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }
        const node = this.#findNode(pos)
        return node.data
    }

    printReverse(){
        let output = '('
        let node = this.#tail
        for (let i=this.#count - 1; i >= 0; i--){
            output += `[${i}]` + JSON.stringify(node.data)
            if (node.prev){
                output += ' <-> '
            }
            node = node.prev
        }
        return output + `) count: ${this.#count}`
    }
}

const lista = new DoublyLinkedList()
console.log(lista.print())

lista.insert(0, 45)
console.log(lista.print())

lista.insert(1, 19)
console.log(lista.print())

lista.insert(0, 26)
console.log(lista.print())

lista.insert(1, 30) // deu problema
console.log(lista.print())

lista.insert(2, 51)
console.log(lista.print())

lista.insert(3, 9)
console.log(lista.print())

lista.insert(2, 66)
console.log(lista.print())
console.log(lista.printReverse())

lista.insertHead(74)
console.log(lista.print())

lista.insertTail(83)
console.log(lista.print())

let peek0 = lista.peek(0)
let peek5 = lista.peek(5)
let peek8 = lista.peek(8)
let peek9 = lista.peek(9)
console.log({peek0, peek5, peek8, peek9})