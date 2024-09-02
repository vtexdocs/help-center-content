---
title: 'Falta de feedback ao selecionar itens de presente que não estão disponíveis'
id: 2brpWqVbJLVoFlztAQPy3n
status: PUBLISHED
createdAt: 2022-09-30T16:40:09.600Z
updatedAt: 2022-11-25T21:49:21.033Z
publishedAt: 2022-11-25T21:49:21.033Z
firstPublishedAt: 2022-09-30T16:40:10.418Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: falta-de-feedback-ao-selecionar-itens-de-presente-que-nao-estao-disponiveis
locale: pt
kiStatus: Fixed
internalReference: 648767
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A seleção de um item de presente no carrinho que não tenha estoque não dará nenhum retorno. Após selecionar o presente, o pedido de API será feito, mas quando ele responde, a seleção do presente é simplesmente removida.



## Simulação


- para registrar um novo item ou para atualizá-lo para ficar sem estoque
- para criar uma promoção de presentes oferecendo este item
- para criar um carrinho onde o item será oferecido
- tente selecionar o presente; a seleção será removida sem nenhum feedback



## Workaround


Assegurar que os itens de presente tenham alta disponibilidade ou estoque infinito, e evitar oferecer itens que possam ficar indisponíveis como presentes.

