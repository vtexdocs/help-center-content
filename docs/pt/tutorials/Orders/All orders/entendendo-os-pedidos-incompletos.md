---
title: 'Como funcionam os pedidos incompletos'
id: tutorials_294
status: PUBLISHED
createdAt: 2017-04-27T22:09:39.566Z
updatedAt: 2023-03-29T23:26:00.473Z
publishedAt: 2023-03-29T23:26:00.473Z
firstPublishedAt: 2017-04-27T23:03:13.801Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-incomplete-orders
locale: pt
legacySlug: entendendo-os-pedidos-incompletos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Sempre que um pedido não estiver listado em [Todos os pedidos](https://help.vtex.com/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) sem nenhum filtro, ele pode estar como **incompleto**.

O estado de incompleto é quando o pedido não está com todas informações completas para ser finalizado na plataforma.

Além disso, todos os pedidos incompletos não têm Workflow e esse é um comportamento esperado pelo sistema.

Como um pedido incompleto foi interrompido, ativar um Workflow para uma situação inativa não seria funcional.

>❗ É recomendado que caso haja um Pedido Incompleto, o pedido seja refeito na loja. Pedidos incompletos são utilizados apenas para registro, e a plataforma não faz novas requisições para um pedido incompleto. Assim, se um pedido está incompleto e o cliente quer dar continuidade ao pedido, ele precisa criar um novo pedido com os mesmos itens.

Desse modo, processo segue como de costume.

## Motivos mais comuns

### Pedido negado na pré-autorização pela operadora de cartão de crédito

Após finalização da compra, realizamos o processamento em tempo real com a operadora de crédito. Se o pagamento for negado, retornamos a mensagem que o pagamento foi negado e solicitamos que seja escolhida uma nova forma de pagamento. Exemplo: Crédito insuficiente ou dados de cartão incorretos. Neste momento, registramos o pedido como incompleto. 

Se o cliente escolher uma nova forma de pagamento e a mesma for aprovada, um novo pedido será criado e registrado na página **Todos os pedidos**.

### Pagamento realizado em ambiente externo

Quando o pagamento está sendo realizado em um ambiente externo como Paypal, por exemplo, o pedido ficará como incompleto até que nosso módulo de pagamento receba um retorno de aprovado.

### Desistência pelo cliente

A desistência da finalização de compra pelo cliente após clicar no botão finalizar compra.

## Como identificar esses pedidos?

Nos [filtros](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192) da página **Todos os pedidos**, na aba **Status**, existe a opção **Status de conclusão**. Basta marcar a opção `Incompleto` para que todos os pedidos nessa situação sejam listados.

