const carrinho =[
'{"nome": "Borracha", "preço": 3.45}',
'{"nome": "Caderno", "preço": 20.00}',
'{"nome": "Kit de lapis", "preço": 10.00}',
'{"nome": "Caneta", "preço": 1.50}',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.apenasPreco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)