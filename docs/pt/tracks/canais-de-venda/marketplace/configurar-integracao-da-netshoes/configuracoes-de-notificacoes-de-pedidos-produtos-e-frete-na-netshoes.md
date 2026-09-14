---
title: 'Configuração de Notificações de Pedidos, Produtos e Frete na Netshoes'
id: 4XEVWU4XIQimY4swYuaOoE
status: PUBLISHED
createdAt: 2018-09-24T20:45:52.055Z
updatedAt: 2021-03-16T16:43:05.592Z
publishedAt: 2021-03-16T16:43:05.592Z
firstPublishedAt: 2018-09-27T15:02:43.318Z
contentType: trackArticle
productTeam: Channels
slugEN: orders-products-and-freight-settings-in-netshoes
locale: pt
trackId: 5Ua87lhFg4m0kEcuyqmcCm
trackSlugEN: configurar-integracao-da-netshoes
order: 6
---

Cadastre as seguintes APIs para o pleno funcionamento da integração com a Netshoes. 

### API de Notificação de Produtos Aprovados

Para que a integração possa enviar preço e estoque de um produto aprovado pela Netshoes, é recomendável habilitar a API de Notificação Produto Aprovado no painel deles. Basta seguir os passos descritos nesta [documentação da Netshoes](https://developers.netshoes.com.br/api-portal/content/notificacao) e usar a URL abaixo (substituindo `{AccountName}` pelo nome do ambiente de sua loja):

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/product/approved/notification`


### API de Importação de Pedidos

Para ativar a importação de pedidos da Netshoes para a VTEX, é recomendável habilitar a API abaixo (substituindo `{AccountName}` pelo nome do ambiente de sua loja). Basta seguir os passos descritos nesta [documentação da Netshoes](https://developers.netshoes.com.br/api-portal/content/notificacao).

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/order/notification`


### API de Frete

A implementação dessa API permite que a Netshoes consulte, em tempo real, preço e prazo de um frete para seus produtos (de acordo com o CEP). Para isso, você deve ir ao painel da Netshoes e seguir os passos descritos nesta [documentação](https://developers.netshoes.com.br/api-portal/content/apidefrete). A URL abaixo (substituindo `{AccountName}` pelo nome do ambiente de sua loja) será cadastrada:

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/freight`

> ⚠️ **OBS:** se os Mapeamentos de Entrega não estiverem feitos, não haverá retorno de informações de entrega e frete para essa API. 

> ❗ **OBS 2:** para que a consulta da API seja feita com sucesso, o ID da transportadora e o ID da doca na VTEX deve ser um valor que contenha somente números.
