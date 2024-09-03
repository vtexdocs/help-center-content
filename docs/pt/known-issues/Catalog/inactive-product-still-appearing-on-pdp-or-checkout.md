---
title: 'Produto inativo ainda aparecendo no PDP ou checkout'
id: 567gsup9oQGoMmj5utCra9
status: PUBLISHED
createdAt: 2022-03-14T19:50:43.917Z
updatedAt: 2022-11-25T21:46:31.635Z
publishedAt: 2022-11-25T21:46:31.635Z
firstPublishedAt: 2022-03-14T19:50:44.487Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: produto-inativo-ainda-aparecendo-no-pdp-ou-checkout
locale: pt
kiStatus: Backlog
internalReference: 542264
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ativar somente o produto por API faz com que o produto permaneça ativo para o PDP e checkout



## Simulação



- Dado um produto ativo, enviar via API a bandeira `isActive `as **false***
- Veja que no catálogo admin o produto está escrito como inativo
- Abra o índice de informações do produto.
- Veja que o produto ainda está disponível para PDP e checkout.



## Workaround


Desativar todos os SKUs de produtos.

