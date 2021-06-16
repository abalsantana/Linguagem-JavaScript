const produto = new Object
produto.nome = 'cadeira'
produto['Marca do Produto'] = 'Genérica'
produto.preco = 345

console.log(produto)

delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 1000,
    proprietario: {
        nome: "Antonio",
        Idade: 44,
        endereco: {
            logradouro: 'Rua uruguai 440/611',
            Bairro: 'Tijuca',
            Cep: '20510-060'
        }
    },
    condutores: [
        {
            nome: 'Antonia',
            idade: 19
        },
        {
            nome: 'Maria',
            idade: 34
        }

    ],
    calculaValorSeguro: function(){
        //..
    }

}
console.log(carro)
var condutores = carro.condutores
console.log(condutores)
console.log(condutores[1])