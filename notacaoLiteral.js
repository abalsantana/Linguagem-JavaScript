const A = 1
const B = 1
const C = 1

const obj1 = {A, B, C}

console.log(obj1)

obj1.A = 2
console.log(obj1)

//versão atiga do javascript
const nomeAtrib = 'nota'
const valorAtrib = 7.89
const obj2 = {}
obj2[nomeAtrib] = valorAtrib
console.log(obj2)

//versao ecma script 2015/2016
const obj3 = {[nomeAtrib]: valorAtrib}
console.log(obj3)

//versão atiga do javascript function expression
const obj4 = {
    funcao1: function(){
        //...
    },
    //versao ecma script 2015/2016
    funcao2(){
        //...
    }
}
console.log(obj3)




