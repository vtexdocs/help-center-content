---
title: 'Os preços dos serviços não são atualizados quando adicionados aos itens'
id: 5hJ7TbHzX4zFbdNWqPnMRQ
status: PUBLISHED
createdAt: 2023-05-09T14:27:37.283Z
updatedAt: 2023-06-23T18:37:32.624Z
publishedAt: 2023-06-23T18:37:32.624Z
firstPublishedAt: 2023-05-09T14:27:37.766Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: services-prices-are-not-updated-when-added-to-items
locale: pt
kiStatus: Backlog
internalReference: 822107
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os preços dos serviços não são atualizados se tiverem sido adicionados a um item antes da alteração do preço do serviço no administrador. Isso fará com que o pedido seja criado com um preço desatualizado.

## Simulação



- Criar um serviço;
- Adicionar um item com serviço ao carrinho;
- Alterar o preço do serviço;
- Verificar o carrinho montado anteriormente; o serviço não é atualizado

## Workaround


Remova e adicione o serviço novamente.




