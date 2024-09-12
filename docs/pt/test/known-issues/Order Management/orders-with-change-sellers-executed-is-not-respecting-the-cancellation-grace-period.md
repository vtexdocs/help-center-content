---
title: 'Pedidos com vendedores de mudança executados não estão respeitando o período de carência de cancelamento'
id: 25diaeQxIpSJIfCQxFizIV
status: PUBLISHED
createdAt: 2022-09-13T03:17:08.065Z
updatedAt: 2022-11-25T22:01:31.130Z
publishedAt: 2022-11-25T22:01:31.130Z
firstPublishedAt: 2022-09-13T03:17:08.627Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedidos-com-vendedores-de-mudanca-executados-nao-estao-respeitando-o-periodo-de-carencia-de-cancelamento
locale: pt
kiStatus: Backlog
internalReference: 656815
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Pedidos com vendedor de mudança, tem o pedido de respeitabilidade no primeiro vendedor cancelado e um novo pedido no segundo vendedor será criado. Se mesmo o novo pedido estiver fora do período de carência de Cancelamento, o usuário ainda poderá cancelar o pedido.

O sistema atualmente não tem controle após o primeiro cancelamento porque o pedido do Marketplace já tem uma confirmação de cancelamento (no caso do primeiro pedido de venda), e não controla mais este período de carência.



## Simulação


Criar um pedido e executar uma função Change Seller, após a criação do segundo pedido aguardar para finalizar o período de carência de cancelamento, e executar um pedido de cancelamento como usuário final. O pedido será cancelado no momento.

Nas interações de pedidos, você verá o usuário na mensagem de cancelamento de pedido.



## Workaround


Não há solução para este caso.

