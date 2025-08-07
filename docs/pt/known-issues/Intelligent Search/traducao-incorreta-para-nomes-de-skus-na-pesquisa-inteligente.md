---
title: "Tradução incorreta para nomes de SKUs na Pesquisa Inteligente"
id: kEYzSu1houF947XOrxrfI
status: PUBLISHED
createdAt: 2025-02-14T20:16:55.293Z
updatedAt: 2025-04-25T18:52:02.780Z
publishedAt: 2025-04-25T18:52:02.780Z
firstPublishedAt: 2025-02-14T20:16:56.181Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: traducao-incorreta-para-nomes-de-skus-na-pesquisa-inteligente
locale: pt
kiStatus: Fixed
internalReference: 1180016
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em produtos com várias SKUs, a tradução dos nomes das SKUs é feita erroneamente em cima da primeira SKU.

## Simulação


Considerando que um produto tenha seus quatro SKUs nomeados respectivamente como "P/M/G/GG" em `pt-BR` como seu idioma principal. Embora uma tradução para o `en-US` deva gerar os nomes como "S/M/L/XL", na verdade eles serão traduzidos como "S/S/S/S"

## Workaround


N/A




