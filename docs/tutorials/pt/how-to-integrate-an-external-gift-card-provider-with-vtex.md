---
title: 'Como integrar um provedor de Gift Card externo à VTEX'
id: tutorials_450
status: PUBLISHED
createdAt: 2017-04-27T22:05:26.566Z
updatedAt: 2024-06-04T18:55:35.271Z
publishedAt: 2024-06-04T18:55:35.271Z
firstPublishedAt: 2017-04-27T23:03:24.938Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-integrar-um-provedor-de-gift-card-externo-a-vtex
locale: pt
legacySlug: integrando-com-gift-card
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, uma das opções de uso do gift card é ser utilizado como um programa de créditos. 

Nesse contexto, existem alguns casos de clientes que já trabalham com um provedor próprio. Esse sistema gerencia sua relação de créditos ou pontos sob uma base de clientes participantes de um sistema de fidelidade, por exemplo.

Caso o cliente deseje integrar um solução externa de gift card ao sistema da VTEX, é necessário utilizar o [Giftcard Provider Protocol](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol).

## Desenvolvimento do provedor

Por meio do [Giftcard Provider Protocol](https://developers.vtex.com/docs/api-reference/giftcard-provider-protocol), o provedor externo de gift card deve desenvolver um [middleware](https://pt.wikipedia.org/wiki/Middleware) para transmitir as informações entre o seu sistema e a VTEX.

Para mais informações sobre o sistema de gift card na VTEX, acesse [Giftcard Hub](https://developers.vtex.com/docs/api-reference/giftcard-hub-api).

## Envio de informações dos endpoints
Após a conclusão do middleware, o provedor deve abrir um [ticket](https://help.vtex.com/pt/support) na VTEX informando os endpoints a serem utilizados para que os clientes realizem transações de pagamento utilizando o seu sistema de gift card.

