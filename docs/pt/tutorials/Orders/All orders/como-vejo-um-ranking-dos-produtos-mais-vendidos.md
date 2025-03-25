---
title: 'Como vejo um ranking dos produtos mais vendidos?'
id: 64LG0uAOysee0YceiSiO66
status: PUBLISHED
createdAt: 2019-01-24T20:45:40.694Z
updatedAt: 2023-03-30T17:21:26.307Z
publishedAt: 2023-03-30T17:21:26.307Z
firstPublishedAt: 2019-01-24T22:09:25.396Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: how-to-rank-the-best-selling-items
locale: pt
legacySlug: como-vejo-um-ranking-dos-produtos-mais-vendidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>⚠️ O módulo **Pedidos** não tem o objetivo de servir como ferramenta de BI (Business Inteligence). Normalmente, é no ERP que a loja tem acesso aos relatórios de vendas.

Embora o objetivo principal do módulo **Pedidos** seja gerenciar o fluxo de pedidos, é possível manipular os dados da [planilha de pedidos](https://help.vtex.com/tutorial/planilha-de-pedidos) para extrair informações que podem ser úteis ao seu negócio.

Para obter uma lista de SKUs vendidos em determinado período por ordem de mais vendidos, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Utilizando os [filtros](https://help.vtex.com/pt/tutorial/filtrar-todos-pedidos--tutorials_192), escolha o período de pedidos que deseja considerar.
3. Clique no botão `Exportar` para realizar a [exportação de pedidos](https://help.vtex.com/pt/tutorial/exportacao-de-pedidos-gerenciamento-de-pedidos--tutorials_6417).
4. Abra o seu email e faça o download do link em até 72h, que é o prazo de validade do link. 

Cada linha do arquivo corresponde a um SKU comprado em determinado pedido. Na coluna `Quantity_SKU`, você tem a quantidade do SKU para aquele pedido. E na coluna `ID_SKU`, você tem o ID do SKU.

Você pode usar o Excel para contar quantas vezes cada SKU aparece (`ID_SKU`), levando em conta ainda os casos em que a quantidade do SKU para o mesmo pedido é maior que 1.

Por exemplo: no caso abaixo, o SKU de ID 009 aparece duas vezes, em ambas com quantidade 1. Portanto, a quantidade total para ele é 2. O SKU de ID 034 aparece apenas uma vez, mas com quantidade 2, então a quantidade total dele também é 2. Os demais SKUs (001 e 050) aparecem apenas uma vez, com quantidade 1. Então a quantidade total de cada um deles é 1.

| Quantity_SKU | ID_SKU |
| ---------- | ---------- |
| 1       | 001       |
| 1       | 009       |
| 2       | 034       |
| 1       | 050       |
| 1       | 009       |
