---
title: 'Substituição do termo “captura” por “liquidação” na documentação de Pagamentos'
id: 5tHBUvz9YtE030Hp81LVXS
status: PUBLISHED
createdAt: 2022-06-30T20:10:32.273Z
updatedAt: 2022-07-19T19:15:52.201Z
publishedAt: 2022-07-19T19:15:52.201Z
contentType: updates
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2022-06-30-replacing-the-term-capture-for-settlement-in-the-payments-documentation
locale: pt
legacySlug: substituicao-do-termo-captura-por-liquidacao-na-documentacao-de-pagamentos
announcementImageID: 'undefined'
announcementSynopsisPT: 'O termo "captura" foi substituído por "liquidação" em toda a documentação no contexto de Pagamentos'
---

O termo “captura” (e suas variantes como: “capturar”, “capturado”) foi substituído por “liquidação” (e equivalentes como: “liquidar”, “liquidado”) por toda a documentação dentro do contexto de Pagamentos para melhor adequarmos o texto com o comportamento da plataforma.

## Por que realizamos esta mudança?

O termo “captura” é utilizado no mercado para se referir ao momento em que é feita a captura de pagamento com cartão, como cobrança na fatura do cartão de crédito. Em um pagamento com cartão, primeiro ocorre a autorização do pagamento, onde os fundos são reservados, e depois ocorre a captura desses fundos reservados, ou seja, a transferência dos valores.

O procedimento de liquidação pelo lado da VTEX (endpoint [Settle Payment](https://developers.vtex.com/vtex-rest-api/reference/settlepayment)) não faz a captura de fato, ou seja, não movimenta os valores do pagamento, mas verifica se a movimentação já foi feita pelo provedor de pagamentos.

Em outros meios de pagamento, como Pix ou boleto bancário, este passo de movimentação dos valores ocorre na plataforma sem que haja um procedimento de captura, já que não há uma reserva dos valores durante o passo de autorização. Então utilizamos o termo “liquidação” tanto para englobar todos esses diferentes cenários, como também para dizer que a nossa plataforma apenas verifica se o procedimento foi realizado.

Esta substituição reflete as alterações já feitas no Developer Portal. Para mais detalhes, veja o nosso [release note](https://developers.vtex.com/vtex-developer-docs/changelog/replace-capture-term-for-settlement-in-the-payment-provider-protocol) sobre a atualização.

## O que precisa ser feito?

Não há nada que precise ser feito. A mudança ocorre apenas na documentação. Nada foi alterado no funcionamento da plataforma e pode ser utilizada normalmente.

Mais informações sobre o funcionamento da liquidação no contexto de Pagamentos podem ser encontradas no artigo [Fluxo da transação no Pagamentos](/pt/docs/tutorials/fluxo-da-transacao-no-pagamentos).
