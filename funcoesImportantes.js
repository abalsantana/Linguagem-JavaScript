//Objeto literal
const pessoa = {
    nome: 'Rebeca',
    idade: 23,
    peso: 13
}

//pega as chaves
console.log(Object.keys(pessoa))

//pegando os valores apenas
console.log(Object.values(pessoa))

//retornando as chaves e os valores em forma de array
console.log(Object.entries(pessoa))

//imprime as chaves e os valores sem os colchetes, usando oeradores destructs
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

//imprime a mesma coisa da função acima
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

//Função que define algumas propriedades do objeto
Object.defineProperty(pessoa, 'datanascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})
pessoa.dataNascimento = '01/02/2010'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign - Concatena os atributos de um objeto com o atributo de outro objeto
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 10}//a: 10 sobreescreve o valor de a: 1 no o1
const o3 = {d: 4}

const obj = Object.assign(dest, o1, o2, o3)
console.log(obj)//{ a: 1, b: 2, c: 3, d: 4 }

//Object.freeze
Object.freeze(obj)
obj.d = 123456789

console.log(obj)//{ a: 1, b: 2, c: 3, d: 4 }

