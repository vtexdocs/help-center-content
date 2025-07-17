---
title: "Solicitação de pré-análise enviada várias vezes"
id: 6DQ6ABdCrvgHVl9GN3NYtC
status: PUBLISHED
createdAt: 2025-07-08T17:20:15.445Z
updatedAt: 2025-07-08T17:20:16.293Z
publishedAt: 2025-07-08T17:20:16.293Z
firstPublishedAt: 2025-07-08T17:20:16.293Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: solicitacao-de-preanalise-enviada-varias-vezes
locale: pt
kiStatus: Backlog
internalReference: 1256754
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O gateway de pagamento da VTEX envia a mesma solicitação de pré-análise para o provedor antifraude uma segunda vez, mesmo quando a primeira chamada foi bem-sucedida.

Não se espera que o gateway envie várias solicitações de pré-análise, pois isso pode fazer com que o processo de análise de fraude demore mais do que o necessário. No entanto, de acordo com nosso protocolo, o provedor antifraude deve estar preparado para lidar com várias solicitações.

A solicitação duplicada pode ser vista nos registros de interações:
`Conta do proprietário do provedor é solicitação HTTP POST para /pre-analysis`

## Simulação


Não é possível simular



## Workaround


N/A





