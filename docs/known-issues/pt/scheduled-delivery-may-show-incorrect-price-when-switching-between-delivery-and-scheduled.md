---
title: 'A entrega programada pode apresentar um preço incorreto ao alternar entre a entrega e a programada'
id: 1Jue9hi3G4ryML88dqWz4E
status: PUBLISHED
createdAt: 2023-03-13T20:40:19.424Z
updatedAt: 2023-03-13T20:40:20.098Z
publishedAt: 2023-03-13T20:40:20.098Z
firstPublishedAt: 2023-03-13T20:40:20.098Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-entrega-programada-pode-apresentar-um-preco-incorreto-ao-alternar-entre-a-entrega-e-a-programada
locale: pt
kiStatus: Backlog
internalReference: 770250
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando é configurada uma promoção de valor máximo de remessa, se você começar a mudar entre entrega padrão e entrega programada várias vezes, pode haver um preço de entrega programada diferente na IU


##

## Simulação



- Criar uma promoção de valor máximo de remessa;
- Montar um carrinho que tenha entrega padrão e programada;
- Selecione a entrega padrão;
- Selecione a entrega programada;
- Continue alternando, e em algum momento, o preço da entrega programada pode ser diferente do API


##

## Workaround


N/A



