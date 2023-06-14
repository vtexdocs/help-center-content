---
title: 'Pedidos com changes podem não enviar email transacional de Pedido Faturado'
id: 1tyY0JutqQyJB18U9WTRXX
status: PUBLISHED
createdAt: 2019-02-17T20:45:54.094Z
updatedAt: 2022-12-22T15:19:12.863Z
publishedAt: 2022-12-22T15:19:12.863Z
firstPublishedAt: 2019-02-17T20:49:23.497Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: Pricing & Promotions
slug: pedidos-com-changes-podem-nao-enviar-email-transacional-de-pedido-faturado
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando um pedido passa por changes (alteração em pedido já finalizado - [https://help.vtex.com/pt/tutorial/change-mudanca-em-pedidos]) o email de Pedido Faturado pode não ser enviado. 

O agrupamento que é feito para a emissão da fatura não respeita as changes, gerando o cenário com comportamento reportado na Known issue. Levando a possibilidade do email de Pedido Faturado não ser enviado com sucesso.

Lembrando que o cenário não ocorre com todos os pedidos que passam por change, mas quando passa por mais de uma change ou quando o agrupamento realizado pelo sistema para a emissão da fatura não conseguir considerar as changes de maneira correta pode ocorrer o não envio do email transacional. 


## Simulação

 - Realizar um pedido
 - Realizar changes nesse mesmo pedido com acréscimo de valor (aumentando o valor) e desconto (change para menos)
 - Verificar o não envio do email transacional de pedido faturado

## Workaround

No momento não há workaround.

