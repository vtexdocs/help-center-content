---
title: 'Os usuários registrados (não conectados) não conseguem concluir o checkout ao mudar de entrega para retirada na página de checkout'
id: hmQ2riW1Ptjxyhk6gcWxN
status: PUBLISHED
createdAt: 2023-07-28T19:49:16.993Z
updatedAt: 2024-04-17T15:46:57.958Z
publishedAt: 2024-04-17T15:46:57.958Z
firstPublishedAt: 2023-07-28T19:49:17.732Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: os-usuarios-registrados-nao-conectados-nao-conseguem-concluir-o-checkout-ao-mudar-de-entrega-para-retirada-na-pagina-de-checkout
locale: pt
kiStatus: Fixed
internalReference: 870845
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um usuário registrado (não conectado) inicia o checkout com Entrega como opção de envio e, posteriormente, muda para retirada, ao tentar concluir o checkout, a mensagem de erro "O campo Número no anexo de envio é inválido" será exibida e não permitirá a realização do pedido.

## Simulação



1. Vá para o checkout e adicione um novo item
2. Insira um código postal para calcular o frete e mantenha **Delivery** selecionado
3. Prossiga para a finalização da compra e, quando solicitado a inserir um e-mail, use o de um usuário registrado
4. O checkout mostrará uma mensagem pop-up informando que seus dados pessoais foram recuperados de compras anteriores
5. Mude de Delivery para Pick-Up e tente concluir o pedido (a mensagem de erro será exibida

## Workaround


N/A




