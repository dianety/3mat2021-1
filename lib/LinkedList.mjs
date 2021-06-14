/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - a lista encadeada é uma estrutura de dados formada por unidades
    de informação chamadas nodos ou nós.
    - cada nodo da lista encadeada tem duas partes: uma, que armazena a informação
    e outra que guarda o endereço do próximo nodo da sequência
    - a qualquer momento, temos um conhecimento apenas limitado de onde se encontram
    todos os nodos da lista. Sabemos apenas onde está o primeiro e o último nodo da
    sequência. os nodos intermediários precisam ser encontrados partindo-se do primeiro
    e percorrendo a sequência
*/

class Node { // classe auxiliar, sem membros privados
    constructor(valor){
        this.data = valor // armazenamento de valor
        this.next = null // ponteiro para o próximo nodo
    }   
}

export class LinkedList{

    #head // nodo inicial da lista
    #tail // nodo final da lista
    #count // quantidade de nodos na lista

    constructor(){
        this.#head = null // é null e não zero pq agora são nodos, não posições numeradas
        this.#tail = null // é null e não zero pq agora são nodos, não posições numeradas
        this.#count = 0
        //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    get empty(){
        return this.#count === 0
    }

    // inserção no final da lista
    insertTail(valor){
        this.insert(this.#count, valor)
    }

    // inserção no início da lista
    insertHead(valor){
        this.insert(0,valor)
    }


    // inserção em uma posição arbitrária
    insert(pos, valor) { // pos - posição

        // pos não pode ser negativo
        if (pos < 0) {
            return // sai sem fazer nada
        }
        
        // cria no nodo para abrigar o valor e o endereço do próximo nodo
        // let inserted = new Node(valor) // inserção feita no noturno
        const node = new Node(valor)

        // 1° caso: inserção em lista vazia
        if(this.empty){
            this.#head = node
            this.#tail = node
        }
        // inserção no início
        else if (pos === 0){
            node.next = this.#head
            this.#head = node
        }
        // se pos for maior ou igual ao número de elementos da lista, inserimos no final
        // exemplo: se o count tem 3 nodos e precisa criar mais um, não importa se a próxima posição é 4 ou 100, ela precisa ser criada pq o nodo ainda não existe
        else if (pos >= this.#count) {
            this.#tail.next = node
            this.#tail = node
        } else { // caso genérico onde vai ser necessário buscar a posição onde o nodo vai ser inserido

            // em uma inserção posicional, é necessário, primeiramente,
            // encontrar o nodo da posição ANTERIOR à posição de inserção
            let prev = this.#head // nodo anterior à posição de inserção
            for (let i = 0; i < pos - 1; i++){
                prev = prev.next // percurso da lista até a posição desejada
            }
            let next = prev.next

            // o novo nodo passa a ser o next do nodo anterior (prev)
            prev.next = node

            // o próximo do novo nodo deve ser o next
            node.next = next
        }
        this.#count++
        
        //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    remove(pos){

        if(pos < 0 || pos >= this.#count){
            return undefined // retorna nada
        }
        let removed

        if (pos === 0) { // remoção do início da lista
            removed = this.#head
            this.#head = removed.next
        }
        else { // remoção do fim da lista
            let prev = this.#head
            for (let i = 0; i < pos - 1; i++){
                prev = prev.next
            }
            removed = prev.next
            let next = removed.next
            prev.next = next

            // remoção do último elemento
            if (pos === this.#count - 1) {
                this.#tail = prev
            }
        }
        this.#count--

        return removed.data

    }

    print(){
        let output = '('
        let node = this.#head
        for (let i=0; i < this.#count; i++){
            output += `[${i}]` + JSON.stringify(node.data)
            if (node.next){
                output += ' -> '
            }
            node = node.next
        }
        return output + ')'
    }
}

let lista = new LinkedList()
console.log(lista.print())

lista.insertTail(45) //1
console.log(lista.print())

lista.insertTail(22) //2
console.log(lista.print())

lista.insertTail(87) //3
console.log(lista.print())

lista.insertHead(33) //0
console.log(lista.print())

// inserindo na posição 2 (entre 45 e 22)
lista.insert(2, 10)
console.log(lista.print())

lista.insert(0, 51)
console.log(lista.print())

lista.insert(6, 4)
console.log(lista.print())

lista.insert(10, 73)
console.log(lista.print())

let removed = lista.remove(0)
console.log({removed})
console.log(lista.print())

removed = lista.remove(3)
console.log({removed})
console.log(lista.print())
