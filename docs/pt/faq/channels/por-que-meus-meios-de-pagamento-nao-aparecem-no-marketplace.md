---
title: 'Por que meus meios de pagamento não aparecem no marketplace?'
id: frequentlyAskedQuestions_689
status: PUBLISHED
createdAt: 2017-04-27T22:29:46.341Z
updatedAt: 2019-12-31T14:24:09.191Z
publishedAt: 2019-12-31T14:24:09.191Z
firstPublishedAt: 2017-04-27T23:02:27.518Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-dont-my-payment-methods-appear-on-the-marketplace
locale: pt
legacySlug: por-que-meus-meios-de-pagamento-nao-aparecem-no-marketplace
---

Para a maioria das integrações com marketplace (e todas as configuradas pelo Bridge) o marketplace não usa as formas de pagamento do seller. Com isso, o marketplace processa o pagamento pelas formas de pagamento que possui e depois repassa o valor combinado para o seller.

Ou seja, o pagamento é realizado no marketplace pelas formas de pagamento do marketplace. Logo, as formas de pagamento do seller não irão aparecer nem terão nenhum impacto no processo de compra do marketplace.

No pedido do seller, o Admin VTEX pode mostrar o meio real usado no marketplace, por exemplo, __Cartão de crédito__ e __Mastercard__. Isso não significa que o pagamento foi processado pelos meios do seller.

Para identificar que o marketplace assumiu o pagamento, confira o __ID da transação__: o valor `PAYMENT-FROM-AFFILIATE`.

> ℹ️ Os dados em `paymentData` servem para emitir a nota fiscal. Eles não disparam autorização, captura, estorno ou liquidação no Gateway do seller. Saiba mais em [Pagamentos em marketplaces VTEX](/pt/docs/tutorials/pagamentos-em-marketplaces-vtex).

Em algumas integrações mais antigas, o OMS ainda exibe o texto *Assumed value by affiliate* no nome do meio, como no exemplo abaixo.

![exemplopagamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/channels/por-que-meus-meios-de-pagamento-nao-aparecem-no-marketplace_1.png)
