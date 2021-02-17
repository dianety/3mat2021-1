// criação de um objeto vazio
let vazio1 = {} // forma "moderna"
let vazio2 = new Object() // forma "tradicional"

// criação de objetos já com dados
let pessoa = {
    // objetos organizam-se em pares de propriedade: valor
    nome: 'Orkutilson da Silva',
    dataNasc: '2009-01-29',
    sexo: 'M',
    ocupacao: 'estudante',
    // nomes de propriedade podem ter espaço e/ou acentos mas, nesse caso, precisam vir entre aspas
    'cidade de origem': 'Franca/SP'
}

// acessando a propriedade de um objeto
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// quando o nome da propriedade tem espaços ou acento, não é possível acessá-la pela sintaxe de ponto. deve-se usar a sintaxe dos colchetes.
console.log(pessoa['cidade de origem'])

// a sintaxe dos colchetes SEMPRE funciona
console.log(pessoa.dataNasc) // sintaxe do ponto
console.log(pessoa['dataNasc']) // sintaxe dos colchetes

// a sintaxe dos colchetes é importante também quando o nome da propriedade está armazenada em uma variável
let prop = 'nome'
console.log(pessoa[prop])
prop = 'sexo'
console.log(pessoa[prop])
prop = 'cidade de origem'
console.log(pessoa[prop])

// formas de exibição de um objeto inteiro no console
console.log(pessoa)
console.table(pessoa)

let veiculo = {} // o objeto inicia-se vazio
// foi criada a propriedade marca e colocado o valor "Volkswagen" dentro dela
veiculo.marca = 'Vokswagen'
veiculo.modelo = 'Variant'
veiculo.ano = 1974
// propriedade com acento -> sintaxe dos colchetes
veiculo['combustível'] = 'gasolina'
veiculo.cor = 'azul'

console.log(veiculo)
console.table(veiculo)

// listando todas as proriedades de um objeto
console.log('--------------------------------')

// for..in -> lista todas as propriedades de um objeto
// variáveis:
// prop -> a variável que irá conter o nome de cada uma das propriedades
// do objeto (pode ser qualquer nome válido de variável)
// pessoa -> o objeto do qual queremos listar as propriedades
for(let prop in pessoa){
    console.log(prop)
}

console.log('--------------------------------')

for(let x in veiculo){
    console.log(x)
}

console.log('--------------------------------')

// listando propriedades e valores do objeto veículo com for..in
for(let atrib in veiculo){
    console.log(atrib + ' -> ' + veiculo[atrib])
}

// objeto veiculo antes da exclusão da propriedade
console.table(veiculo)

// apagando uma propriedade de um objeto: delete
delete veiculo.ano

// objeto veiculo depois da exclusão da propriedade
console.table(veiculo)


