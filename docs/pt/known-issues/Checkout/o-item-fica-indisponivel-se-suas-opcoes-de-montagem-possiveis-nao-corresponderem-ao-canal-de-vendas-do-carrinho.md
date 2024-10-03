---
title: 'O item fica indisponível se suas opções de montagem possíveis não corresponderem ao canal de vendas do carrinho'
id: 36TbVrK9qcFFNUaIdN7JTH
status: PUBLISHED
createdAt: 2024-08-20T12:43:01.364Z
updatedAt: 2024-08-26T13:50:42.246Z
publishedAt: 2024-08-26T13:50:42.246Z
firstPublishedAt: 2024-08-20T12:43:02.653Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: item-becomes-unavailable-if-its-possible-assembly-options-dont-match-the-cart-sales-channel
locale: pt
kiStatus: Fixed
internalReference: 1083848
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Se um item tiver qualquer opção de montagem possível que não esteja disponível para o canal de vendas usado no carrinho, o item se tornará indisponível.
Isso acontece mesmo que a opção de montagem em si não seja necessária e não tenha sido adicionada ao carrinho.

## Simulação



1. Crie uma SKU principal e uma SKU secundária que funcione como uma opção de montagem.
2. Defina a opção de montagem como opcional (quantidade mínima de zero, quantidade selecionada padrão de zero).
3. Defina o canal de vendas da SKU principal como um canal que não esteja disponível para a SKU secundária.
4. Tente adicionar a SKU principal a um carrinho usando esse canal de vendas

## Workaround


Se possível, certifique-se de que as SKUs de opções de montagem correspondam a todos os canais de vendas usados por seus itens principais.




