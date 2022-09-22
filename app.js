/*
Quando você deve usar o Filter:

    Resposta: Quando você precisa obeter um novo array, com a quantidade de itens menor
    que a do array original.

    [ 36, 99, 37, 63], [ 99, 63 ]
*/

const randomNumbers = [ 36, 99, 37, 63];
// o item que foi recebido no parametro, só vai ser adicionado no
// novo array quando o resultado da expressão for [true],
// se o item for [false] ele vai ser ignorado
const numberGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log(numberGreaterThan37);
// expected output: [ 15, 25, 5 ][ 99, 63 ]