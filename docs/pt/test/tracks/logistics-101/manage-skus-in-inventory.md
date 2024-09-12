---
title: 'Gerenciar SKUs em estoque'
id: 6q8viq5Rvdb9mPDKs8MWKO
status: ARCHIVED
createdAt: 2019-09-23T12:29:35.372Z
updatedAt: 2022-03-08T18:44:41.035Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:56:10.686Z
contentType: trackArticle
productTeam: Post-purchase
slug: gerenciar-skus-em-estoque
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

Agora que todos os componentes da rota logística foram cadastrados, você pode gerenciá-los de acordo com as especificidades de cada um.

Como mencionamos anteriormente, a primeira etapa da rota é o estoque.

Desse modo, é preciso incluir no sistema todos os SKUs que estarão disponíveis para serem entregues por uma transportadora. Isso vale para todos os estoques que estiverem relacionados a uma determinada rota logística, sem exceção.

O Admin conta com a ferramenta __Gerenciar Itens em Estoque__. Aqui você pode atualizar a quantidade de SKUs disponíveis em um determinado estoque sempre que for necessário.

Existem três formas diferentes de realizar essa operação:
- Pelo Admin
- Por planilha.
- Por API.

Veja a seguir.


## Admin

Você pode fazer a gestão das quantidades de SKUs em estoque por meio do próprio Admin da VTEX. É possível editar apenas um SKU ou vários de uma vez.

Confira o passo a passo:
1. Acesse o módulo __Estoque & Entrega__.
2. Clique em __Inventário__.
3. Busque por um produto ou filtre por uma quantidade máxima em estoque.
4. Escolha editar apenas um SKU clicando no link __Editar somente este__ ou edite vários SKUs ao mesmo tempo clicando no botão __Editar selecionados__.
5. Preencha o(s) campo(s) com a nova contagem de itens disponíveis no estoque.
6. Clique no botão __Salvar__.

## Planilha 

Para fazer uma edição em massa e atualizar o estoque de diversos SKUs, siga os passos do nosso artigo [Importar e exportar planilha de estoque](https://help.vtex.com/pt/tutorial/importando-e-exportando-planilha-de-estoque?locale=pt).

Mas atente-se antes para o preenchimento correto dessa planilha. Para isso, siga as orientações do nosso artigo [Como preencher a planilha de estoque](https://help.vtex.com/pt/tutorial/como-preencher-a-planilha-de-estoque--2EQ0XOe8aA0UyQso0k2kkA).

## API REST

>⚠️ As autenticações para as chamadas de API REST do módulo de Preços devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre [como gerar um Appkey e um AppToken para autenticar suas integrações](https://help.vtex.com/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes--43tQeyQJgAKGEuCqQKAOI2)

Para alterar a quantidade de um SKU em estoque por API, você precisa enviar um __PUT__ para o seguinte endpoint:

`https://logistics.{{environment}}.com.br/api/logistics/pvt/inventory/skus/{{skuId}}/warehouses/{{warehouseId}}?an={{accountName}}`

O objeto que deve ser enviado no body do request tem as seguintes propriedades:

| __Propriedade__ | __Tipo__ |__Descrição__|
|------------------|-----------|-------------|
| unlimitedQuantity | boolean | Define se esse SKU tem ou não estoque infinito  |
| dateUtcOnBalanceSystem | DateTimeOffset | Data/hora. Define o momento correspondente ao estoque informado. É útil por conta da liberação das reservas de pedidos em manuseio. Quando passado como `null`, esse valor será a data/hora do momento da requisição.   |
| quantity| integer | Nova quantidade do SKU a ser registrada no estoque |

Abaixo, temos um exemplo de Header e um exemplo possível de Body a serem passados no request.
 
### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/json |
| Content-Type | application/json; charset=utf-8 |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Exemplo 

```json
{
    "unlimitedQuantity": false,
    "dateUtcOnBalanceSystem": null,
    "quantity": 243
}
```
