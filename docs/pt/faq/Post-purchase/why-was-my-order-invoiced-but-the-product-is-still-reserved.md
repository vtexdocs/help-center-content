---
title: 'Por que meu pedido foi faturado e o produto continua reservado?'
id: frequentlyAskedQuestions_160
status: PUBLISHED
createdAt: 2017-04-27T22:39:43.965Z
updatedAt: 2019-12-31T14:25:30.934Z
publishedAt: 2019-12-31T14:25:30.934Z
firstPublishedAt: 2017-04-27T23:01:43.472Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: por-que-meu-pedido-foi-faturado-e-o-produto-continua-reservado
locale: pt
legacySlug: por-que-meu-pedido-foi-faturado-e-o-produto-continua-reservado
---

Para que um produto já vendido em um pedido não seja disponibilizado para outro cliente, existe a reserva dos produtos comprados. 

Essas reservas respeitam três etapas, porém com dois status. E o que causa muita confusão na maioria dos lojistas, é o porquê essa reserva continuar ativa se o pedido já foi faturado. 

[Entenda como funciona a reserva](/pt/tutorial/como-a-reserva-funciona/).

Porém, um item reservado não sai de reservado automaticamente nunca. 

Para isso, é necessário uma notificação do ERP ou uma alteração manual no estoque do item. E a reserva só pode receber a baixa no estoque a partir do status `Preparando Entrega` do pedido. 

Antes disso, a reserva continuará ativa e o item decrescido será outro, [causando um cenário incorreto](/pt/faq/por-que-meu-estoque-esta-negativo/).

Ou seja, quando o pedido passar para o status `Preparando Entrega` é preciso que haja uma notificação no estoque para que esse item saia de reservado e seja retirado do estoque. 

Para isso, basta atualizar o campo __Quantidade__ com o número de itens disponíveis em seu estoque, ignorando o item relacionado à compra.
