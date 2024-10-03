---
title: 'Como adicionar e manipular informações customizadas no pedido'
id: 7tDi1jQQ51ufARcRm8NUnC
status: ARCHIVED
createdAt: 2020-05-29T12:05:23.571Z
updatedAt: 2022-07-25T18:20:29.230Z
publishedAt: 
firstPublishedAt: 2020-05-29T12:20:21.210Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: how-to-add-customized-information-to-the-order-and-manipulate-it
locale: pt
legacySlug: como-adicionar-e-manipular-informacoes-customizadas-no-pedido
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Quando o cliente final entra no processo de checkout em uma loja VTEX, criamos o objeto `orderForm`, que contém uma série de informações sobre o pedido.

Em operações B2B, no entanto - em que o contexto da venda é mais complexo -, frequentemente a loja precisa que esse objeto contenha informações extras, tais como tipo de pedido e purchase order number.

Para isso, você deve usar o campo `customData` do `orderForm`. O objetivo desse campo é justamente ser populado com informações customizadas necessárias à operação específica da loja.

Para trabalhar com esse campo, você deve usar a API do Checkout da VTEX. Três passos são necessários:

1. Criar apps e fields por meio do request de configuração.
2. Usar a API para gravar/atualizar/consultar os dados (via `orderForm` e `placeOrder`).
3. Encontrar os dados desejados no pedido criado.


## 1. Criar apps e fields por meio do request de configuração

Antes de popular o campo `customData`, você precisa usar a chamada [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) para criar uma app. Essa app vai conter os campos customizados que depois serão populados durante o checkout.

>⚠️ A chamada Update orderForm configuration define configurações que se aplicam a todos os orderForms gerados na sua conta. Ou seja, a partir do momento em que você adicionar uma app por meio dela, todos os pedidos da loja conterão os campos extras definidos nessa app. Para criar uma app e seus campos, essa chamada só precisa acontecer uma vez.

Vamos ver um exemplo de objeto `app` enviado no body do request Update orderForm configuration:

```json
"apps": [
        {
            "fields": [
                "order-type",
                "po-number"
            ],
            "id": "cart-b2b-context"
        }
]
```

Com esse objeto no body, o request criará uma app cujo ID será `cart-b2b-context` e que conterá dois campos: `order-type` e `po-number`.

Se a chamada tiver sucesso (resposta `200 OK`), o orderForm dos pedidos da sua loja agora contêm esses dois novos campos.


## 2. Usar a API para gravar/atualizar/consultar os dados

Agora que os campos estão criados, precisamos salvar os dados nesses campos. Isso pode ser feito com uma só chamada: [Set multiple custom field values](https://developers.vtex.com/reference/custom-data#setmultiplecustomfieldvalues).

Por meio desa chamada, você informa o ID da app que deseja alterar (na URL), assim como os nomes dos campos e os valores que deseja salvar em cada um desses campos (no body).

Usando ainda nosso exemplo anterior, poderíamos fazer o seguinte request:

URL:
`https://{accountName}.myvtex.com.br/api/checkout/pub/orderForm/{orderFormId}/customData/cart-b2b-context`

Body:
```json
{
  “order-type”: “abc”,
  "Po-number": “9870234”
}
```

Nessa chamada de exemplo, estamos populando os novos campos extras do orderForm identificado na URL pelo `{orderFormId}`.


## 3. Encontrar os dados desejados no pedido criado

Finalmente, é necessário implementar o acesso aos dados salvos nos campos extras do orderForm. Para isso, basta usar a API de [Get Order](https://developers.vtex.com/reference/orders#getorder), passando na URL o ID do pedido.

Os campos e seus respectivos valores estarão dentro do objeto `customData`.
