---
title: "OrderForm não pode ser recuperado após a modificação dos anexos do item no catálogo"
id: 5T3UBM0eCUVlKZ7ThQwFZU
status: PUBLISHED
createdAt: 2022-09-28T14:04:26.176Z
updatedAt: 2022-11-25T21:49:45.319Z
publishedAt: 2022-11-25T21:49:45.319Z
firstPublishedAt: 2022-09-28T14:04:26.777Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-nao-pode-ser-recuperado-apos-a-modificacao-dos-anexos-do-item-no-catalogo
locale: pt
kiStatus: Backlog
internalReference: 320044
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Após alterar (atualizar ou apagar) alguns itens anexos no catálogo de produtos, se você já tiver algum carrinho/forma de pedido que se refere a itens com anexo específico, o orderForm não pode mais ser carregado.

A página do carrinho/checkout apresentará um "erro de comunicação com o vendedor" - porque os anexos do item vêm do serviço de atendimento dentro da tubulação do checkout. Em Splunk, os logs de erro (que podem ser filtrados por sua operaçãoId) detalharão a mensagem de exceção "_alguns anexos de itens não estão disponíveis_".



## Simulação


- para ter um item com campos anexos
- inserir este item em um carrinho e preencher os campos do anexo
- alterar/remover alguns desses campos no catálogo de produtos
- voltar ao carrinho (espere algum cache nas informações do catálogo para ver as mudanças)
- o carrinho não irá carregar e gerar o erro mencionado



## Workaround


N/A

