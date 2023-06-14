---
title: O PayPalPlus não respeita o valor mínimo da parcela
id: 1IGzNPtXaaUsPkaq0qRgfK
status: PUBLISHED
createdAt: 2022-03-26T23:00:59.044Z
updatedAt: 2022-11-25T22:06:43.067Z
publishedAt: 2022-11-25T22:06:43.067Z
firstPublishedAt: 2022-03-26T23:00:59.445Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-paypalplus-nao-respeita-o-valor-minimo-da-parcela
kiStatus: Backlog
internalReference: 370271
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Mesmo com o valor mínimo da parcela configurado no prazo de pagamento PayPalPlus, exibimos parcelas no checkout que não respeitam esta configuração



## Simulação



1. Configurar o PayPalPlus como nova afiliação de gateway
2. Configurar a condição de pagamento PayPalPlus para processar com a afiliação PayPalPlus gateway e estabelecer o valor mínimo da parcela
3. Vá até a caixa e compre um item aleatório
4. Na opção de parcelas de pagamento haverá opções que não obedecem ao valor da parcela mínima



## Workaround


N/A

