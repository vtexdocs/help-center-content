---
title: 'Itens em benefícios não gerados em promoções com coleções associadas'
id: 9HrnxMcq7VWFQOPhg9ywd
status: PUBLISHED
createdAt: 2024-02-21T15:09:01.111Z
updatedAt: 2024-02-21T15:09:01.913Z
publishedAt: 2024-02-21T15:09:01.913Z
firstPublishedAt: 2024-02-21T15:09:01.913Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: itens-em-beneficios-nao-gerados-em-promocoes-com-colecoes-associadas
locale: pt
kiStatus: Backlog
internalReference: 985850
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Ao fazer uma promoção com produtos/skus associados por meio de uma coleção, o productContext não está preparado para criar a matriz de itens dentro dos benefícios associados aos produtos da coleção

## Simulação




- Criar uma promoção
- Associar os produtos para essa promoção por meio de uma coleção
- Abra um dos produtos que deve ter uma promoção
- Abra o console do seu navegador
- Verifique se há productContextProvider em sua extensão React Dev Tools
- Abra benefits.items, ele estará vazio ou com o sku com o mesmo id da coleçã

## Workaround



A única maneira possível de preencher o benefits.items é preencher todos os skus associados à promoção em vez de um cluster/coleção





