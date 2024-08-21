---
title: 'Pré-visualização de embarque exibindo erroneamente a data em que está programada a entrega'
id: 6pbufuWTFkL4NK3xLIxj1z
status: PUBLISHED
createdAt: 2023-01-31T19:36:58.137Z
updatedAt: 2024-07-01T18:48:44.228Z
publishedAt: 2024-07-01T18:48:44.228Z
firstPublishedAt: 2023-01-31T19:36:58.933Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: previsualizacao-de-embarque-exibindo-erroneamente-a-data-em-que-esta-programada-a-entrega
locale: pt
kiStatus: No Fix
internalReference: 743774
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O Checkout UI converte a hora usando o fuso horário do computador exibindo a data de entrega de forma incorreta na visualização da remessa (carrinho) quando os itens são entregues programados.


##

## Simulação



- Configurar uma janela de entrega programada para começar em 0h
- Configurar um fuso horário que subtrai do UTC+00:00 no computador
- Você verá que a data mostrada é a véspera


##

## Workaround


Configurar janelas de entrega programada durante o dia, como horário comercial, uma vez que é o horário mais comum para entregas




