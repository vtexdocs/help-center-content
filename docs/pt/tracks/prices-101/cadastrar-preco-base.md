---
title: 'Cadastrar preço base'
id: P99EjtrlRHk92Q8qDPq29
status: PUBLISHED
createdAt: 2019-07-04T13:52:47.694Z
updatedAt: 2024-11-27T11:36:41.541Z
publishedAt: 2024-11-27T11:36:41.541Z
firstPublishedAt: 2019-07-17T19:41:10.765Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: cadastrar-preco-base
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

Há três formas de cadastrar um preço base:

- pelo Admin
- [por planilha](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/5lV5s54lQ69zPXxngbpI5D) 
- por API REST

Siga o passo a passo abaixo para cadastrar os preços base de seus SKUs: 

## Admin 

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Cada caixa contém um produto com seus respectivos SKUs. Clique na primeira coluna da linha do SKU desejado. Uma *barra lateral* será aberta.
3. Preencha os campos descritos abaixo.
- **Preço de custo:** preencha com o custo do SKU.
- **Markup:** preencha com a margem de lucro a ser obtida com a venda do SKU.
4. Clique na própria *barra lateral* para salvar o preço.
5. O **Preço base** será calculado em função dos dados fornecidos nos passos anteriores.

Caso você deseje, é possível cadastrar um **preço de lista** associado ao preço base do SKU. Para isso, siga os passos abaixo:

1.  Na *barra lateral* onde é feito o cadastro do preço base, clique em **+ Preço de lista**.
2. No campo **Preço de lista**, preencha com o valor desejado para o SKU.
3. Clique na própria *barra lateral* para salvar o preço de lista.

## API REST

<div class="alert alert-warning">
As autenticações para as chamadas de API REST do módulo de Preços devem ser feitas via AppKey e AppToken. Para entender mais, acesse nosso artigo sobre <a href="https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication">como gerar um Appkey e um AppToken para autenticar suas integrações.</a>
</div>

Para cadastrar o **preço base** de um SKU, você precisa enviar um __PUT__ para o seguinte endpoint:

`https://api.vtex.com/{{account}}/pricing/prices/{{itemId}}`

Você também pode cadastrar um **preço de lista** associado ao preço base do SKU. No entanto, este campo **não é obrigatório**.

- O objeto do request tem as seguintes propriedades:

| __Propriedades__ | __Tipos__ | __Descrição__ |
|------------------|-----------|-------------|
| costPrice | integer | Preço de Custo do SKU |
| markup| integer | Markup do SKU |
| basePrice | integer | Preço Base do SKU |
| listPrice | integer | Preço de lista do SKU |

- O objeto de response tem as seguintes propriedades: 

| __Propriedades__ | __Tipos__ | __Descrição__ |
|------------------|-----------|-------------|
| itemId| string| ID do SKU |
| costPrice | integer | Preço de Custo do SKU |
| basePrice | integer | Preço Base do SKU |
| listPrice | integer | Preço de Lista do SKU |
| markup | integer | Markup do SKU |
| fixedPrices | array | Preço Fixo  |
| tradePolicyId | integer | ID da Politica Comercial |
| value | integer | Valor do Preço Fixo |
| listPrice | integer | Preço de Lista |
| minQuantity | integer | Quantidade mínima de itens |
| dateRange | string | Variação de data do preço fixo |

- Abaixo, temos um exemplo de Header e **três exemplos possíveis de Body** a serem passados no request

### Headers 

| Header| Value |
|------------------|-----------|
| Accept | application/vnd.vtex.pricing.v3+json |
| Content-Type | application/json |
| X-VTEX-API-AppKey | {{X-VTEX-API-AppKey}} |
| X-VTEX-API-AppToken | {{X-VTEX-API-AppToken}} |

### Body - Exemplo 1

```json
{
    "costPrice": null,
    "markup": 100,
    "basePrice": 300
}
```

`costPrice * (1 + markup%) = basePrice`

Neste exemplo, como `markup = 100` e `basePrice = 300`, o `costPrice` será calculado pelo sistema com valor de `150`. 

### Body - Exemplo 2

```json
{
    "costPrice": 150,
    "markup": null,
    "basePrice": 300,
    "listPrice": 500
}
```

`costPrice * (1 + markup%) = basePrice`

Neste exemplo, como `costPrice = 150` e `basePrice = 300`, o `markup` será calculado pelo sistema com o valor de `100`.

Também incluímos um preço de lista de valor `500`.

### Body - Exemplo 3

```json
{
    "costPrice": 150,
    "markup": 100,
    "basePrice": null,
}
```

`costPrice * (1 + markup%) = basePrice`

Neste exemplo, como `costPrice = 150` e `markup = 100`, o `basePrice` será calculado pelo sistema com o valor de `300`.
