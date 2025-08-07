---
title: "A ordenação de campos de produtos e SKUs não é salva"
id: ki4RwH9MHeuYEUmyoiYSG
status: PUBLISHED
createdAt: 2018-08-17T02:22:22.240Z
updatedAt: 2023-02-14T16:25:30.307Z
publishedAt: 2023-02-14T16:25:30.307Z
firstPublishedAt: 2018-08-17T02:35:25.696Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
tag: Catalog
slugEN: a-ordenacao-de-campos-de-produtos-e-skus-nao-e-salva
locale: pt
kiStatus: Backlog
internalReference: 525127
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Quando você muda o pedido de produtos ou campos de SKUs em uma categoria diferente da principal, após clicar no botão de ordenação as mudanças não são salvas e os campos alterados não aparecem após a página ser recarregada.

## Simulação


1. A partir do menu lateral, clique em Catálogo.
2. Clique em Categorias.
3. Clique em uma categoria que tenha campos de produtos registrados que não tenham sido herdados de outra categoria.
4. Ações de acesso > Campo (Produto) ou Campo (SKU).
5. Na caixa que contém o número do pedido, altere a ordem de algumas categorias.
6. Clique em Ordenar.


## Workaround


Atualmente, a única solução é realizar a ordenação dos campos através de uma personalização em Javascript no front-end.

