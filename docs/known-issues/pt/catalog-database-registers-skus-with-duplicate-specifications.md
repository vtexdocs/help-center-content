---
title: 'Base de dados do catálogo registra SKUs com especificações duplicadas'
id: zs3Gy1NQ9EYLpAlQ3aXXe
status: PUBLISHED
createdAt: 2022-03-04T18:24:48.159Z
updatedAt: 2022-11-25T21:45:32.139Z
publishedAt: 2022-11-25T21:45:32.139Z
firstPublishedAt: 2022-03-04T18:24:48.487Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: base-de-dados-do-catalogo-registra-skus-com-especificacoes-duplicadas
locale: pt
kiStatus: Backlog
internalReference: 536133
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em algumas situações aleatórias, o banco de dados do catálogo permite que os valores de uma especificação sejam duplicados na mesma SKU.

Isto faz com que o Portal não considere esta SKU como uma variação, causando comportamentos inesperados, tais como visões erradas no Portal, o controlador do Let Me Know não funcionando, ou SKUs não obedecendo à configuração de exibição da categoria.



## Simulação


Não é possível simular. A duplicação só é visível a partir do banco de dados (não visível a partir de API ou UI)



## Workaround


N/A

