---
title: "O evento view_cart é acionado mais de uma vez na Faststore"
id: 1skLOmvLxQJpAbTP47PWRT
status: PUBLISHED
createdAt: 2025-01-15T11:32:23.367Z
updatedAt: 2025-04-09T18:54:31.159Z
publishedAt: 2025-04-09T18:54:31.159Z
firstPublishedAt: 2025-01-15T11:32:24.391Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: o-evento-viewcart-e-acionado-mais-de-uma-vez-na-faststore
locale: pt
kiStatus: Fixed
internalReference: 1163447
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando você abre o minicarro na Faststore, o evento view_cart é acionado mais de uma vez.

O problema provavelmente está relacionado a esta linha de código.

## Simulação



- Use o parâmetro `gtm_debug=true`
- Tente abrir o minicarro
- Veja o evento view_cart sendo acionado mais de uma vez no dataLayer

Você pode testá-lo em nossa loja padrão https://starter.vtex.app

## Workaround


N/A





