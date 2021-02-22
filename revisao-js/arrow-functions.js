// a rigor, a função abaixo não seria necessária, pois, usando
// recursos nativos do JS, poderíamos escrever x ** 2 ou Math.pow(x,2)

// características dessa função
// 1 - tem apenas um parâmetro
// 2 - seu corpo tem apenas uma linha, retornando valor
function quadrado(x){
    return x * x
}
console.log(quadrado(9))

// o formato de função acima é perfeito para conversão em arrow function,
// que é um modo "abreviado" de escrever uma função em JS

// 1 - os parênteses em torno do parâmetro foram omitidos
// 2 - a palavra "function", que vinha ANTES do parâmetro, foi substituída pelo símbolo "=>" DEPOIS do parâmetro
// 3 - as chaves foram omitidas
// 4 - a palavra "return" foi omitida
// 5 - uma arrow function é uma função anônima, ou seja, não tem lugar para colocar o nome da função;
// portanto, caso se deseje chamá-la posteriormente, é necessário atribuí-la a uma variável.
const quadrado2 = x => x * x
console.log(quadrado2(9))

// arrow function equivalente (função com mais de um parâmetro)
// quando temos mais de um parâmetro, os parênteses retornam
function potencia(b, e){ // b = base, e = exponencial
    return b ** e
}
console.log(potencia(2,10))

const potencia2 = (b,e) => b**e
console.log(potencia2(2,10))

// função sem parâmetros, que retorna um número aleatório entre 1 e 60
function megasena(){
    // math.random() -> retorna um número aleatório entre 0 (inclusive) e 1 (exclusive)
    // * 60 - > ajusta faixa de valores entre 0 e 59
    // +1 - > ajusta a faixa de valores para entre 1 e 60
    // math.ceil() -> retira as casas decimais de um número, deixando apenas a parte inteira
    return Math.ceil(Math.random() * 60 + 1)
}
console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

// os parênteses vazios (obrigatórios) marcam o lugar dos parâmetros
let megasena2 = () => Math.ceil(Math.random() * 60 + 1)
console.log(megasena2(),megasena2(),megasena2(),megasena2(),megasena2(),megasena2())

// função com mais de uma linha no corpo
function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n
    return soma
}
console.log(somaVet([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// com mais de uma linha de corpo, as chaves voltam e não é mais
// possível omitir a palavra-chave "return" caso a função retorne valor
const somaVet2 = vet => {
    let soma = 0
    for(let n of vet) soma += n
    return soma
}
console.log(somaVet2([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// CONCLUSÃO: arrow functions são ideais para casos em que o corpo da função possui apenas uma linha, embora arrow functions
// com múltiplas linhas não sejam incomuns