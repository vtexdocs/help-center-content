---
title: 'A condição de pagamento em uma única parcela não aparece no checkout.'
id: 3L7GJTRaWWA9Wjw2zkQqtS
status: PUBLISHED
createdAt: 2022-06-29T11:57:22.859Z
updatedAt: 2024-04-26T15:49:53.973Z
publishedAt: 2024-04-26T15:49:53.973Z
firstPublishedAt: 2022-06-29T11:57:23.251Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-condicao-de-pagamento-em-uma-unica-parcela-nao-aparece-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 605568
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao configurar uma única condição de pagamento com apenas uma opção de parcelamento ou várias condições de pagamento em que apenas uma opção de parcelamento está disponível para um carrinho específico, essa opção de parcelamento não é exibida no checkout. Embora seja exibida corretamente em `paymentData`, ela não é visível para o usuário. Em vez disso, apenas a opção de pagar o valor total é exibida. Entretanto, quando a transação é concluída, o pagamento é processado com a opção de parcelamento correta.

## Simulação



- Configure uma condição de pagamento de parcela única.
- Vá para a página de checkout comprando qualquer item aleatório.
- Navegue até a guia Rede no devtools e verifique se a opção de parcelamento está carregada corretamente na resposta `paymentData`.
- Verifique o menu suspenso de opções de parcelamento na página de checkout. Observe que a opção de parcelamento configurada está ausente; em vez disso, o valor total é exibido.
- Apesar desse problema, ao concluir a compra, a transação reflete corretamente a opção de parcelamento escolhida

## Workaround


N/A

Atenciosamente,
Gisely Lacerda
Engenheira de suporte ao produto, equipe de jornada do comprador

