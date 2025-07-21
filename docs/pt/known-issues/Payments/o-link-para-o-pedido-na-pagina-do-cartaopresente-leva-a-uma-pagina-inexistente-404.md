---
title: "O link para o pedido na página do cartão-presente leva a uma página inexistente (404)"
id: 7dvqilr4AjHhPeasWXFtW6
status: PUBLISHED
createdAt: 2025-03-19T12:42:28.749Z
updatedAt: 2025-03-19T12:42:29.713Z
publishedAt: 2025-03-19T12:42:29.713Z
firstPublishedAt: 2025-03-19T12:42:29.713Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-link-para-o-pedido-na-pagina-do-cartaopresente-leva-a-uma-pagina-inexistente-404
locale: pt
kiStatus: Backlog
internalReference: 1196298
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns extratos de cartão-presente, não é possível acessar o pedido diretamente. O problema é que o link está formatado como:
`https://.myvtex.com/admin/checkout#/orders/`

No entanto, o formato correto deve ser:
`https://.myvtex.com/admin/orders/`

## Simulação


Não é possível reproduzir

## Workaround


Colete o `orderId` desejado e use a rota correta: `https://.myvtex.com/admin/orders/`





