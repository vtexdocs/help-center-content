---
title: Identificar se UTMs de marketing estão sendo passadas para o checkout
id: 6kjHHfOWIgeI26qcQSU4Wg
status: DRAFT
createdAt: 2018-02-08T11:52:38.471Z
updatedAt: 2022-07-26T15:37:13.447Z
publishedAt: 
firstPublishedAt: 2018-02-08T18:18:09.369Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: identificar-se-utms-de-marketing-estao-sendo-passadas-para-o-checkout
legacySlug: identificar-se-utms-de-marketing-estao-sendo-passadas-para-o-checkout
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Quando o parâmetro `utm_source`, `utm_campaign` ou `utm_medium` é usado para carregar uma página da loja, o sistema cria um cookie chamado __IPS__, cujo valor é igual ao valor do parâmetro.

O orderForm dos pedidos fechados pelo usuário enquanto esse cookie não expirar receberá o cookie no header do request enviado ao checkout.

Ou seja, no momento em que o usuário clicar no botão de Comprar, o controle nativo do botão de comprar (`<vtex.cmc:BuyButton/>`) fará um POST passando o valor do parâmetro `utm_source` para o checkout. 

Com isso o checkout poderá montar o orderForm considerando o marketingData usado na compra.

### Simulação

Para se certificar de que o conteúdo do parâmetro `utm_source`, por exemplo, está sendo passado ao checkout, você pode seguir as etapas abaixo:
1. Acesse qualquer página da loja com a utm na querystring (ex: {AccountName}.com.br`?utm_source=facebook`)
2. Entre nos __developer tools__ (F12 no Chrome, se estiver no Windows, ou Cmd+Opt+I, no Mac), acesse a aba __Application__, abra os cookies do site da loja e procure o cookie __IPS__.![utmSource1](//images.contentful.com/alneenqid6w5/2tGleKs2b2Gge8oEoquSGm/17efaf14e42cd655b037c2bd009eb0d6/utmSource1.png)
3. Entre numa página de produto e insira um produto no carrinho.
4. Entre no carrinho.
5. Atualize a página e, na aba __Network__ do developer tools, monitore os requests.
6. Selecione o request __orderForm__.
7. No preview, abra o nó `marketingData`.
8. Confira o valor do campo `utmSource`.![utmSource2](//images.contentful.com/alneenqid6w5/3k5685cAUwy4uk4S2I6qGm/6595f50415b17965047c2023ffb46658/utmSource2.png)

No exemplo da imagem acima, note que o valor do parâmetro `utm_source` foi corretamente passado para o checkout, que inseriu esse parâmetro no orderForm, dentro do campo `utmSource`.

Mas se o campo `utmSource` do orderForm estiver vazio, é porque o valor não foi passado para o checkout.

Quando o valor não é passado para o checkout, quaisquer promoções atreladas à utm_source __não__ são aplicadas aos pedidos, e o módulo de gerenciamento de pedidos __não__ registra essas UTMs como parâmetros dos pedidos.

### Por que o valor não foi passado para o checkout?

Um dos motivos mais comuns de o contexto de marketing não ser passado para o checkout está na __customização da chamada de compra__.

Como dito anteriormente, o controle nativo do botão de compra (`<vtex.cmc:BuyButton/>`) faz um POST passando todos os dados necessários para o checkout, incluindo o valor dos parâmetros `utm_source`, `utm_campaign` e `utm_medium`.

Mas se, em vez de usar esse controle, sua loja customizou a chamada e, portanto, faz o POST do request de compra por conta própria, é preciso lembrar-se de __enviar nesse POST todos os dados que podem ser úteis para montar o orderForm__, incluindo o contexto de marketing. 

Esse valor pode ser passado como querystring ou no body do request, no campo `marketingData`. Para maiores informações, acesse [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/why-are-the-utms-not-being-applied-to-the-cart).
