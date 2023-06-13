---
title: A condição de pagamento em uma única parcela não aparece no checkout
id: 3L7GJTRaWWA9Wjw2zkQqtS
status: PUBLISHED
createdAt: 2022-06-29T11:57:22.859Z
updatedAt: 2023-01-04T13:54:59.054Z
publishedAt: 2023-01-04T13:54:59.054Z
firstPublishedAt: 2022-06-29T11:57:23.251Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-condicao-de-pagamento-em-uma-unica-parcela-nao-aparece-no-checkout
kiStatus: Backlog
internalReference: 605568
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao registrar uma condição de pagamento em que há apenas uma parcela, esta informação não aparece no checkout.



## Simulação



- Criar uma condição de pagamento em uma única parcela.
- As informações são carregadas corretamente nos dados de pagamento.
- Verifique se a opção no dropdown das parcelas não aparece no cardUI do checkout. Apenas "Total - $ xx.xx".
- Mesmo com as informações na UI de apenas Total, quando a compra é fechada ela é feita com as parcelas registradas na condição comercial.



## Workaround


Não há solução.

