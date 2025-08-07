---
title: "A AdyenV1 não envia corretamente o paymentMethod.type para a Amex ao usar o Apple Pay."
id: UCCG0Lwe3U6dO7MHwFebO
status: PUBLISHED
createdAt: 2023-10-17T14:58:27.621Z
updatedAt: 2023-10-17T14:58:28.348Z
publishedAt: 2023-10-17T14:58:28.348Z
firstPublishedAt: 2023-10-17T14:58:28.348Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: a-adyenv1-nao-envia-corretamente-o-paymentmethodtype-para-a-amex-ao-usar-o-apple-pay
locale: pt
kiStatus: Backlog
internalReference: 920563
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Embora o Apple Pay permita que o usuário faça um pedido usando um cartão Amex, nosso conector legado AdyenV1 não é compatível com essa marca.

Nos registros de interação, nota-se que o campo` paymentMethod.type` é preenchido com "scheme", o que resulta em um erro da Adyen.

## Simulação


Tentativa de fazer um pedido usando o Apple Pay com um cartão Amex. A transação será negada



## Workaround


N/A.





