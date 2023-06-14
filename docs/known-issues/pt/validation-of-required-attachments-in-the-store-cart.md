---
title: 'Validação de anexos obrigatórios no carrinho da loja'
id: 5im16SzH3qkyeGCUW4UC2M
status: PUBLISHED
createdAt: 2018-10-10T17:35:48.675Z
updatedAt: 2022-12-22T20:43:13.901Z
publishedAt: 2022-12-22T20:43:13.901Z
firstPublishedAt: 2018-10-10T18:11:01.257Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: validacao-de-anexos-obrigatorios-no-carrinho-da-loja
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A validação de anexos obrigatórios é feita somente no momento da criação do pedido, no último botão de "finalizar compra". Essa obrigatoriedade de campos não é expressada no carrinho (`/checkout/#/cart`), aonde os campos são exibidos para preenchimento.

Isso é visível somente em anexos que não possuem valores pré-definidos, então são campos de preenchimento manual. No caso dos anexos com valores pré-definidos, uma lista de seleção é exibida, já com algum deles pré-selecionado.

Idealmente a obrigatoriedade dos campos deve ser expressada junto do mesmo para que o cliente dê atenção a isso antes de tentar fechar o pedido, evitando a mensagem de erro tardia.

## Simulação

1. Criar um SKU com anexo obrigatório
2. Adicionar este SKU no carrinho
3. Seguir os passos da compra sem preencher os campos de anexo
4. Observar mensagem de erro ao tentar concluir o pedido

## Workaround

É possível fazer uma validação customizada destes campos com o uso de Javascript na página do carrinho - caso o campo obrigatório não esteja preenchido basta o bloqueio do botão de continuar o pedido.

