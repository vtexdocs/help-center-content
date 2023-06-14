---
title: 'Erro SWW no produto PDP'
id: 3DhuWocQwqiWxuAffdwYkg
status: PUBLISHED
createdAt: 2023-01-23T12:38:30.711Z
updatedAt: 2023-01-23T12:38:31.382Z
publishedAt: 2023-01-23T12:38:31.382Z
firstPublishedAt: 2023-01-23T12:38:31.382Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: erro-sww-no-produto-pdp
locale: pt
kiStatus: Backlog
internalReference: 738108
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em algumas ocasiões, ao abrir o produto PDP através da página de administração (ou do domínio final), aparece na tela um erro Something Went Wrong.


##

## Simulação


Este comportamento pode acontecer devido a movimentos anteriores da categoria na árvore de categorias, causando uma validação errada das especificações do produto/sku no sistema de catálogo.

A mensagem de erro real por trás do erro SWW (que pode ser verificado através de logs internos) é "Nome da variação do produto não encontrado".


##

## Workaround


A fim de corrigir este comportamento, a especificação que causa o erro não deve ter valor no produto.




