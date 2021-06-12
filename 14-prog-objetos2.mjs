/*
    Uma classe (class) é uma estrutura que permite controlar a criação de objetos de acordo
    com seus requisitos de utilização.

    Uma classe pode ser comparada a uma forma de bolo. Se uma forma de bolo é redonda, com um
    furo no meio, não importa os ingredientes que serão utilizados na receita, o bolo (ou pudim, ou quindim)
    sairão no formato determinado pela forma.
    
*/

// por convenção, nomes de classe iniciam com letra maiúscula em JavaScript
class FormaGeometrica {

    // declaração de atributos privados
    #base
    #altura
    #tipo
    // quando uma função está dentro de uma classe, ela é denominada MÉTODO
    // constructor() é um método especial que é chamado toda vez que se tenta
    // criar um objeto a partir da classe. Nele, é possível fazer as validações que
    // permitirão ou não a existência de um objeto.
    // O processo de criação de um objeto pode ser abortado se o constructor() gerar
    // um erro do tipo Exception.

    constructor(base, altura, tipo){
        // base, altura e tipo são os PARÂMETROS do construtor
        
        // atribuindo valores iniciais a PROPRIEDADES. O setter de cada
        // uma delas será chamado, fazendo as validações
        this.base = base
        this.altura = altura
        this.tipo = tipo

        // se chegamos até aqui, as informações passadas estão corretas e podemos
        // continuar com a criação do objeto
        // A criação é concluída com o armazenamento dos parâmetros do construtor
        // dentro do próprio objeto, em variáveis especiais denominadas ATRIBUTOS.
        // Dentro do objeto, os atributos são referidos com o prefixo this para
        // diferenciá-los das variáveis comuns.

        // atribuindo cada parâmetro do construtor a um atributo do objeto

        // atributos PÚBLICOS: podem ser acessados e modificados fora da classe
        //this.base = base
        //this.altura = altura
        //this.tipo = tipo
    
        // tornando os atributos PRIVADOS: acessíveis apenas dentro da classe e inacessíveis
        // do lado de fora
        this.#base = base
        this.#altura = altura
        this.#tipo = tipo

        // impede a criação de novas propriedades públicas do lado de fora da classe
        Object.seal(this)
    }

    // getter: permite que o valor de um atributo PRIVADO seja acessado fora da classe, 
    // mas no modo somente leitura
    get base(){
        return this.#base
    }

    get altura(){
        return this.#altura
    }

    get tipo(){
        return this.#tipo
    }

    /*************************************************************************
     * Quando um atributo tem associado a ele um getter e/ou um setter,
     * passamos a denominá-lo PROPRIEDADE do objeto.
     */

    // setter: permite com que o valor do atributo seja alterado, opcionalmente
    // fazendo algum tipo de validação
    set base(valor){ // valor é o conteúdo que está TENTANDO entrar no atributo
        // base deve ser numérica e maior que zero
        if(isNaN(valor) || valor <= 0){
            throw new Error('A base deve ser numérica e maior que zero.')
        }
        this.#base = valor
    }

    set altura(valor){
        // altura deve ser numérica e maior que zero
        if (isNaN(valor) || valor <= 0){
            throw new Error('A altura deve ser numérica e maior que zero.')
        }

        this.#altura = valor
    }

    set tipo(valor){
        // tipo deve ser Q, T ou E
        // if(tipo !== 'Q' || tipo !== 'T' || tipo !== 'E')
        if (! ['Q', 'T', 'E'].includes(valor)){
            throw new Error('O tipo deve ser Q, T ou E.')
        }

        this.#tipo = valor
    }

    /***********************************/
    // Método
    calcularArea(){
        switch(this.forma){
            case 'Q':
                return this.base * this.altura
            case 'T':
                return (this.base * this.altura) / 2
            // case 'E'
            default:
                return (this.base/2) * (this.altura/2) * Math.PI
        }
    }

    /************************
    PROPRIEDADE CALCULADA: é uma propriedade somente-leitura (portanto, tem apenas o getter)
    cujo valor é calculado com base em outros atributos e propriedades. O cálculo acontece "ao vivo",
    ou seja, é efetuado no momento em que o getter é acionado.
    /************************ */

    get area(){
        switch(this.forma){
            case 'Q':
                return this.base * this.altura
            case 'T':
                return (this.base * this.altura) / 2
            // case 'E'
            default:
                return (this.base/2) * (this.altura/2) * Math.PI
        }
    }
}


let forma1, forma2, forma3

// criando objetos a partir da classe
try {
    forma1 = new FormaGeometrica(5.4, 7.7, 'T') // -> parâmetros do construtor
    console.log('forma1: ', forma1.base, forma1.altura, forma1.tipo)
}
catch(erro){
    console.log('ERRO: ' + erro.message)
}

// tratamento de exceção
try { // TENTA executar as instruções que estão dentro desse bloco
    // caso aconteça algum erro dentro deste bloco, ele será interrompido
    // e a exceção passará ao bloco catch
    forma2 = new FormaGeometrica(8, 3.5, 'J')
    console.log('forma1: ', forma2.base, forma2.altura, forma2.tipo)
}
// o bloco catch recebe o erro que aconteceu, e nos dá a oportunidade de
// tratá-lo sem abortar a execução do programa
catch(erro){
    console.log('Não foi possível criar o objeto. Motivo: ' + erro.message)
}

try {
    forma3 = new FormaGeometrica(4, 3, 'E') // -> parâmetros do construtor
    console.log('forma3: ', forma3.base, forma3.altura, forma3.tipo)
}
catch(erro){
    console.log('ERRO: ' + erro.message)
}

// tentando adicionar uma propriedade 'descricao' ao objeto. Não dá certo,
// pois o objeto foi selado no final do construtor, impedindo esse tipo de operação.
//forma1.base = 'batata'
//console.log(forma1)

// Lendo o atributo base da forma1 (será acionado o getter)
console.log('base da forma1: ', forma1.base)

// tentativa de alteração da propriedade base
forma1.base = 3.6
console.log('base da forma1: ', forma1.base)

// cálculo da área via método
console.log('Área da forma1: ', forma1.calcularArea())

// cálculo da área via propriedade (nesse caso, o cálculo da área não fica armazenado em lugar nenhum)
console.log('Área da forma1: ', forma1.area)

forma1.altura = 10
console.log('Área da forma1: ', forma1.area)
