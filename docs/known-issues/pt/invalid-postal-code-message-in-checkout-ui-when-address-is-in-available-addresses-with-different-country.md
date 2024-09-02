---
title: 'Mensagem "Código postal inválido" na interface do usuário do checkout quando o endereço está em endereços disponíveis com país diferente'
id: 4VggIx4xWPNW6OBIrQ0js4
status: PUBLISHED
createdAt: 2024-06-21T17:08:59.860Z
updatedAt: 2024-06-21T17:09:00.771Z
publishedAt: 2024-06-21T17:09:00.771Z
firstPublishedAt: 2024-06-21T17:09:00.771Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: mensagem-codigo-postal-invalido-na-interface-do-usuario-do-checkout-quando-o-endereco-esta-em-enderecos-disponiveis-com-pais-diferente
locale: pt
kiStatus: Backlog
internalReference: 1053959
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A interface do usuário do checkout usa o país registrado em seu estado para validar a entrada do código postal.

Quando os endereços são registrados em endereços disponíveis, mas o formulário de pedido é alterado para outro canal de vendas, e esse canal de vendas tem um país diferente para envio, a mensagem "Código postal inválido" é exibida logo abaixo da entrada do código postal, não sendo possível prosseguir com a compra.

## Simulação



- Monte um carrinho e adicione um endereço;
- Altere o canal de vendas, onde ele é enviado para um país diferente;
- Tente adicionar o novo código postal; é exibida a mensagem "Código postal inválido".



## Workaround


N/A




