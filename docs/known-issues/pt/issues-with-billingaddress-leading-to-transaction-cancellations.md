---
title: 'Problemas com BillingAddress que levam ao cancelamento de transações'
id: 14RT6S4Hm7H30L0FBzdDRY
status: PUBLISHED
createdAt: 2024-05-06T16:34:12.989Z
updatedAt: 2024-05-06T16:34:14.299Z
publishedAt: 2024-05-06T16:34:14.299Z
firstPublishedAt: 2024-05-06T16:34:14.299Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: problemas-com-billingaddress-que-levam-ao-cancelamento-de-transacoes
locale: pt
kiStatus: Backlog
internalReference: 1027901
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



As transações estão sendo canceladas durante a análise antifraude devido à falta de informações essenciais no `billingAddress`.

O `billingAddress` é enviado durante o processo de pagamento e pode ser uma cópia do `shippingAddress` se o usuário optar por não diferenciá-los (marcando `isBillingAddressDifferent` como `false`) durante o checkout. Como alternativa, pode ser um novo endereço fornecido pelo usuário se a opção `isBillingAddressDifferent` for marcada como `true`. Esse endereço é usado na solicitação de autorização antifraude e a ausência de informações obrigatórias pode levar ao cancelamento de transações.

Observamos que esse comportamento ocorre com pagamentos feitos com novos cartões, que não foram salvos anteriormente na loja, e quando o usuário opta por não diferenciar os endereços (`isBillingAddressDifferent`: `false`). É importante ressaltar que o `shippingAaddress` contém todos os campos obrigatórios preenchidos corretamente, enquanto o `billingAddress`, que deveria ser uma cópia do `shippingAddress`, permanece incompleto.

## Simulação


Não foi possível replicar esse problema



## Workaround


N/A





