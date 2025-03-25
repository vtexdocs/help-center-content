---
title: '[Mercado Livre] Remover a validação under_review em Atualizar SKU'
id: 1yeZeigiok3zaltkI7RTMW
status: PUBLISHED
createdAt: 2023-08-30T18:15:25.269Z
updatedAt: 2023-08-30T18:15:25.924Z
publishedAt: 2023-08-30T18:15:25.924Z
firstPublishedAt: 2023-08-30T18:15:25.924Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: mercado-livre-remove-underreview-validation-in-update-sku
locale: pt
kiStatus: Backlog
internalReference: 890658
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Remover a validação under_review no fluxo Update SKU porque quando o vendedor aplica as ações para corrigir os casos de moderação e estes estão relacionados com o catálogo, não estamos enviando essas alterações para o MELI e, finalmente, os anúncios MELI continuam sendo moderados.

## Simulação


O SKU foi moderado por estar na categoria errada, a correção já foi feita e agora ele tem o mapeamento correto no mapepr, mas ainda não está sendo exportado de acordo com a categoria do mapeador

## Workaround


N/A





