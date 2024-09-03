---
title: 'Alterar o nome das formas de pagamento no checkout'
id: frequentlyAskedQuestions_428
status: ARCHIVED
createdAt: 2019-01-24T20:45:53.538Z
updatedAt: 2022-07-25T14:02:54.304Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:10:28.227Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slug: como-alterar-o-nome-das-formas-de-pagamento-no-checkout
locale: pt
legacySlug: como-alterar-o-nome-das-formas-de-pagamento-no-checkout
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Todas as formas de alteração de nome ou descrição das formas de pagamento são feitas pelo CSS de sua loja inserido no checkout.
A customização de seu CSS é de responsabilidade da agência que a loja contratou para tal fim.
Porém, existem algumas maneiras simples de alteração descritas abaixo.

- **Para alterar o nome da forma de pagamento**: pode ser feita com a técnica de [image-replacement](http://css-tricks.com/css-image-replacement/);
- **Para alterar a descrição da forma de pagamento**: insira em seu CSS:
 
`.bankInvoicePaymentGroup .payment-description { font-size: 0; }.bankInvoicePaymentGroup .payment-description:after { font-size: 13px; content: "{Texto aqui}" }`

- **Para alterar o nome da etapa de entrega**: inserir em seu CSS:

`.shipping-data .accordion-toggle span { font-size: 0: }.shipping-data .accordion-toggle span:after { content: "{Texto aqui}"; }`
