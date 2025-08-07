---
title: "O leitor de código de barras do aplicativo de vendas aceita apenas EAN-13"
id: 5fVgFNzYDoROFbVUyqEvcC
status: PUBLISHED
createdAt: 2025-04-15T14:42:10.413Z
updatedAt: 2025-04-15T14:42:33.580Z
publishedAt: 2025-04-15T14:42:33.580Z
firstPublishedAt: 2025-04-15T14:42:10.904Z
contentType: knownIssue
productTeam: Physical Stores
author: 2mXZkbi0oi061KicTExNjo
tag: Physical Stores
slugEN: o-leitor-de-codigo-de-barras-do-aplicativo-de-vendas-aceita-apenas-ean13
locale: pt
kiStatus: Backlog
internalReference: 1211334
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O leitor de código de barras no aplicativo de vendas aceita apenas EAN-13.

Se um produto tiver registrado um UPC-A (12 dígitos), o leitor de código de barras adicionará um 0 ao código de barras, resultando em uma busca vazia.

## Simulação



- Acesse o aplicativo nativo Sales App;
- Use o leitor de código de barras e leia um UPC-12;
- Um zero à esquerda é adicionado e uma busca vazia é exibida

## Workaround


Adicione um zero à esquerda ao código de barras no registro da SKU.




