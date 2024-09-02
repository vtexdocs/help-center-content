---
title: 'Carrinho criado a partir de uma opção "pedir novamente" em Meus pedidos, o e-mail do cliente não está sendo colocado como esperado no formulário de pedido'
id: 6dDhkaIhquOqaDuNkVZuln
status: PUBLISHED
createdAt: 2023-12-04T22:41:21.385Z
updatedAt: 2023-12-04T22:41:22.139Z
publishedAt: 2023-12-04T22:41:22.139Z
firstPublishedAt: 2023-12-04T22:41:22.139Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: carrinho-criado-a-partir-de-uma-opcao-pedir-novamente-em-meus-pedidos-o-email-do-cliente-nao-esta-sendo-colocado-como-esperado-no-formulario-de-pedido
locale: pt
kiStatus: Backlog
internalReference: 947563
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Na seção **My Orders** (Meus pedidos) em **My Account** (Minha conta), há a opção de configurar um carrinho com base em um pedido que o cliente fez anteriormente.

Nesse caso, o problema é que, em um **fluxo de televendas**, ao **pessoar o cliente e tentar montar um carrinho com base em um pedido anterior**, ao clicar em **My Orders (List)** na opção "**Order again**", o e-mail do agente de televendas é colocado nos dados do perfil do cliente do formulário de pedido, e não do cliente, como esperado.

Vale a pena mencionar que esse comportamento só acontece quando se clica no botão "pedir novamente" na lista de pedidos Meus pedidos.

## Simulação



1. Faça login com um usuário de televendas
2. Fazer-se passar por um cliente
3. Vá para a seção My Orders (Meus pedidos) em My Account (Minha conta)
4. Na lista de pedidos, clique em "order again" em qualquer um deles.
5. Valide as informações do cliente no formulário de pedido (clientProfileData.email

## Workaround



Para fazer pedidos com base em um pedido antigo, é recomendável inserir os detalhes do pedido primeiro e, em seguida, clicar na opção "order again" (fazer novo pedido).





