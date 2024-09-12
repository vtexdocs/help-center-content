---
title: 'O e-mail do operador do call center é enviado para o orderForm ao adicionar itens ao carrinho no front-end do Store Framework'
id: 3KwP4q7VZsu6e3c1DwWY5t
status: PUBLISHED
createdAt: 2024-07-16T20:06:11.748Z
updatedAt: 2024-07-16T20:06:12.844Z
publishedAt: 2024-07-16T20:06:12.844Z
firstPublishedAt: 2024-07-16T20:06:12.844Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-email-do-operador-do-call-center-e-enviado-para-o-orderform-ao-adicionar-itens-ao-carrinho-no-frontend-do-store-framework
locale: pt
kiStatus: Backlog
internalReference: 1066571
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao usar os componentes do Store Framework para adicionar itens a um carrinho enquanto estiver conectado como um operador de call center e não estiver se passando por um cliente, o e-mail do operador é preenchido no anexo clientProfileData do formulário de pedido.

## Simulação



1. Acesse uma loja criada no Store Framework.
2. Autentique-se como um operador de call center.
3. Sem se passar por nenhum cliente, adicione um item ao carrinho com um componente como o botão add-to-cart.
4. Verifique se o carrinho agora contém o endereço de e-mail do operador da central de atendimento

## Workaround


N/A





