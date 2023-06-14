---
title: A opção de coleta não retorna a opção selecionada se a troca entre a entrega e a coleta
id: 12AvDe4dD8IQ2WaDKTSeXx
status: PUBLISHED
createdAt: 2022-09-21T21:06:28.853Z
updatedAt: 2023-03-27T12:38:32.193Z
publishedAt: 2023-03-27T12:38:32.193Z
firstPublishedAt: 2022-09-21T21:06:29.670Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-opcao-de-coleta-nao-retorna-a-opcao-selecionada-se-a-troca-entre-a-entrega-e-a-coleta
kiStatus: Backlog
internalReference: 588394
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o comprador seleciona uma loja para retirada, muda para entrega e acrescenta um novo endereço não disponível para entrega quando devolve para retirada, outra loja retorna selecionada. Se alternarmos entre entrega e coleta, às vezes a loja selecionada aparece inicialmente intercalada com outra loja.


##

## Simulação



- Adicione um item ao carrinho que tenha apenas estoque de coleta da loja;
- Na opção de retirada, procure um endereço e selecione qualquer loja;
- Mude para entrega e mude o endereço;
- Retornar para a retirada.


##

## Workaround


N/A



