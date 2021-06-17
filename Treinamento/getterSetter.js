///Encapsulamento

const sequencia = {
    _valor: 1, //convenção
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
//se eu tentar colocar um valor menor que 1000, ele vai ignorar
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900


console.log(sequencia.valor, sequencia.valor)