---
title: 'O conector antifraude ClearSale está enviando os itens errados do carrinho nos casos em que dois ou mais itens têm o mesmo nome.'
id: 1OSID8MeL6DxaM3urR7CHj
status: PUBLISHED
createdAt: 2023-04-28T12:21:24.524Z
updatedAt: 2023-05-08T18:23:47.413Z
publishedAt: 2023-05-08T18:23:47.413Z
firstPublishedAt: 2023-04-28T12:21:25.305Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-conector-antifraude-clearsale-esta-enviando-os-itens-errados-do-carrinho-nos-casos-em-que-dois-ou-mais-itens-tem-o-mesmo-nome
locale: pt
kiStatus: Backlog
internalReference: 799396
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O conector antifraude do ClearSale usa o nome do item como uma condição ao percorrer o mini carrinho enviado pelo checkout. Nos casos em que dois ou mais itens compartilham o mesmo nome, mesmo que tenham SKUs diferentes, apenas um desses itens é enviado ao sistema antifraude. O valor da transação para os itens restantes é enviado como frete.

## Simulação


Faça um pedido com 2 itens no carrinho, sendo que eles compartilham o mesmo nome.



## Workaround


N/A





