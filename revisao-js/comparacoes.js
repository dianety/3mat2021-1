let a = 10, b = 15, c = 10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log('----------------------------')

// strings
a = 'Maria'
b = 'Dinah'
c = 'Maria'
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log('----------------------------')

// booleans
a = true
b = false
c = true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log('----------------------------')

// vetores
a = [1,2,3,4,5]
b = [10,20,30,40,50]
c = [1,2,3,4,5]
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log('----------------------------')

// na comparação de vetores, os resultados para maior e menor
// não são consistentes.
// CONCLUSÃO: vetores não são diretamente compraráveis entre si
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)
console.log('----------------------------')

// objetos
a = {marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}
b = {marca: 'Fiat', modelo: '147', ano: 1980}
c = {marca: 'Volkswagen', modelo: 'Fusca', ano: 1976}
console.log('----------------------------')

// objetos também apresentam inconsistência quando comparados diretamente

// CONCLUSÃO GERAL:
// tipos de dados que são comparáveis em JS: number, string, boolean