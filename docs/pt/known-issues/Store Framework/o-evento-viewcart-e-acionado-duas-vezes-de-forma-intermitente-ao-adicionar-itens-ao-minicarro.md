---
title: "O evento view_cart é acionado duas vezes de forma intermitente ao adicionar itens ao minicarro"
id: 9BbaWu6SOLZ4C82Enaogz
status: PUBLISHED
createdAt: 2025-07-24T18:28:11.071Z
updatedAt: 2025-07-24T18:28:11.632Z
publishedAt: 2025-07-24T18:28:11.632Z
firstPublishedAt: 2025-07-24T18:28:11.632Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-evento-viewcart-e-acionado-duas-vezes-de-forma-intermitente-ao-adicionar-itens-ao-minicarro
locale: pt
kiStatus: Backlog
internalReference: 1265581
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao adicionar itens ao carrinho, o evento analítico `view_cart` é acionado duas vezes de forma intermitente. Esse comportamento inesperado leva a entradas de eventos duplicadas, o que pode causar imprecisões na análise de dados e nos relatórios.

## Simulação



1. Adicione um produto ao minicarro;
2. Verifique seu dataLayer, às vezes você verá dois eventos de `view_cart` após o `add_to_cart

## Workaround


N/A





