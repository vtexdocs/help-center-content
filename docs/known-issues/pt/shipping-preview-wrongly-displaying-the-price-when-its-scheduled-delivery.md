---
title: 'Pré-visualização de embarque exibindo erroneamente o preço quando a entrega é programada'
id: 1348f4mDxoxAT7pTKBxm29
status: PUBLISHED
createdAt: 2023-01-31T19:16:25.118Z
updatedAt: 2023-02-01T20:32:44.535Z
publishedAt: 2023-02-01T20:32:44.535Z
firstPublishedAt: 2023-01-31T19:16:25.874Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: previsualizacao-de-embarque-exibindo-erroneamente-o-preco-quando-a-entrega-e-programada
locale: pt
kiStatus: Backlog
internalReference: 532487
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O preço de entrega exibido na visualização de remessa (carrinho) está incorreto quando os itens são entregues programados e todos esses itens saem no mesmo SLA. Mesmo com a API devolvendo o valor correto, a IU não reflete esta informação e exibe o valor incorreto.


##

## Simulação


Adicione dois ou mais itens no carrinho com entrega programada, a IU mostrará um valor diferente do que a devolução API


##

## Workaround


N/A




