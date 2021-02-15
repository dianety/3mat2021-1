let frutas = ['laranja', 'maçã', 'banana', 'pera', 'uva', 'mamão']

// Exibir o vetor
console.log(frutas)

// Tirar o último elemento do vetor
let ultimaFruta = frutas.pop()

console.log(frutas)
console.log(ultimaFruta)

// Tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Removendo de posições intermediárias
// splice()
// 1º parâmetro: posição que será removida (lembre-se que a contagem começa em zero)
// 2º parâmetro: quantidade de elementos que serão removidos
let terceiraFruta = frutas.splice(2, 1) // Fruta na posição 2

console.log(frutas)
console.log(terceiraFruta) // splice() sempre retorna um vetor

// Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

// Inserir um elemento no início do vetor
frutas.unshift('amora')

console.log(frutas)

// Inserindo em posição intermediária
// splice() para inserção
// 1º parâmetro: a posição onde ocorrerá a inserção
// 2º parâmetro: quantos elementos serão excluídos (0)
// Parâmetros seguintes: elementos a serem inseridos

// Inserindo na 4ª posição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)

// Inserindo duas frutas na 3ª posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

// Substituindo 6ª fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)

/**************************************************
 * PERCURSOS DE VETOR
 */

 // 1 - Percurso via for tradicional
 for (let i=0; i< frutas.length; i++){
     console.log(i,frutas[i])
 }

 // 2 - Percurso via for tradicional, em ordem inversa
 for (let i = frutas.length - 1; i>=0;  i--){
     console.log(i,frutas[i])
 }

 // 3 - Percurso usando for..of
 // percorre totalmente um vetor, sem necessidade de manter uma variável contadora
 // variáveis:
 // fruta -> nome da variável que receberá cada elemento (pode ser qualquer nome válido de variável)
 // frutas -> nome do vetor que está sendo percorrido
 for (let fruta of frutas){
     console.log(fruta)
 }
console.log('--------------------')

 // 4 - Percurso utilizando forEach()
 // forEach() recebe como argumento uma função cujo argumento é cada um dos elementos do vetor percorrido
 // o nome do parâmetro da função passada pode ser qualquer nome válido de identificador
 frutas.forEach(function(Elemento){
     console.log(Elemento)
 })

 console.log('--------------------')

 // forEach() utilizando arrow function como parâmetro
 frutas.forEach(elemento => console.log(elemento))