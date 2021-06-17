const plano = require('./planos.json')
const preco = require('./precos.json')



Object.entries(plano).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
});
