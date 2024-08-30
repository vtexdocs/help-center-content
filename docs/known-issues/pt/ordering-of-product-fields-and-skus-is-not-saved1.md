---
title: 'A ordenação de campos de produtos e SKUs não é salva'
id: 5UsBchV9uWw0eWn6G1d7AN
status: DRAFT
createdAt: 2022-02-15T18:20:03.680Z
updatedAt: 2023-02-14T16:24:45.180Z
publishedAt: 
firstPublishedAt: 2022-02-15T18:20:04.148Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-ordenacao-de-campos-de-produtos-e-skus-nao-e-salva1
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


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

