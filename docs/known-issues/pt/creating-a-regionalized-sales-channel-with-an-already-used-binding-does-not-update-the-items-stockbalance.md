---
title: 'A criação de um canal de vendas regionalizado com uma ligação já usada não atualiza o saldo de estoque do item'
id: 7CqZPslfGY8mTmBLuWe5SQ
status: PUBLISHED
createdAt: 2024-03-22T19:39:26.469Z
updatedAt: 2024-07-01T18:49:34.061Z
publishedAt: 2024-07-01T18:49:34.061Z
firstPublishedAt: 2024-03-22T19:39:27.432Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-criacao-de-um-canal-de-vendas-regionalizado-com-uma-ligacao-ja-usada-nao-atualiza-o-saldo-de-estoque-do-item
locale: pt
kiStatus: No Fix
internalReference: 1005112
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para contas regionalizadas, o sistema de índice filtra, pelos canais de vendas regionalizados, o saldo de estoque que deve aparecer, para não mostrar vínculos de vendas que não são regionalizados.

Se um novo canal precisar ser regionalizado em uma vinculação que já esteja em produção, a indexação não será acionada. Causando alguma inconsistência na disponibilidade dos produtos.

## Simulação



1. Crie um canal de vendas regionalizado em uma ligação de produção;
2. Verifique se os estoques e a disponibilidade são consistentes com todos os produtos

## Workaround


Force uma reindexação com stockSimulation. Atualize o estoque, por exemplo.





