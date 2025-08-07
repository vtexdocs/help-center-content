---
title: "Fullcleanup pode gerar um tempo limite"
id: 673OJraCsU37dMnWSVbg7z
status: PUBLISHED
createdAt: 2025-05-16T17:06:43.674Z
updatedAt: 2025-05-23T18:21:36.385Z
publishedAt: 2025-05-23T18:21:36.385Z
firstPublishedAt: 2025-05-16T17:06:44.231Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: fullcleanup-pode-gerar-um-tempo-limite
locale: pt
kiStatus: Backlog
internalReference: 1228132
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Na interface `/admin/Site/fullcleanup.aspx `, o uso desse procedimento para contas com vários produtos, marcas ou categorias gera um tempo limite, o que geralmente gera um erro 500 e nenhum resultado ao executar a operação.

Esse é o mesmo problema (origem) de vários outros timeouts no catálogo.

## Simulação


1) Crie mais de ~5 mil produtos em uma loja. (essa é apenas uma estimativa aproximada, pode acontecer com mais ou menos produtos do que isso)

2) Tente executar o procedimento de exclusão de produtos e SKUs na interface do FullCleanUp: `.myvtex.com/admin/site/fullcleanup.aspx`

Uma resposta 500 será retornada juntamente com um erro de tempo limit

## Workaround


- Peça à equipe de suporte para executar essa ação.





