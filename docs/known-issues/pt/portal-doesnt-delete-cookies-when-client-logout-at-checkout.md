---
title: 'O portal não exclui cookies quando o cliente faz logout no checkout'
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2024-04-26T18:05:09.421Z
publishedAt: 2024-04-26T18:05:09.421Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: o-portal-nao-exclui-cookies-quando-o-cliente-faz-logout-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 417322
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


No checkout de uma loja, temos uma opção para fazer logout.

Infelizmente, a solicitação feita ao aplicativo do portal não está excluindo os cookies do usuário, que permanecem no OrderForm com o ID de e-mail desse cliente, de modo que o cliente não pode fazer logout usando essa opção

## Simulação


1. Vá para `.myvtex.com` e faça login em My Account usando e-mail e código;

2. Depois de fazer login, crie um carrinho e vá para o checkout;

3. Conclua a etapa Profile (Perfil) e vá para Shipping (Remessa) e, em seguida, tente fazer logout no link "It's not me, end session" (Não sou eu, encerre a sessão).

O checkout executa a solicitação normalmente, fazendo a solicitação junto com o `orderFormId`

No entanto, o Portal Application não está excluindo o cookie desse usuário e, portanto, retornando o mesmo usuário, com isso o e-mail é mantido no orderForm e, consequentemente, ele não é desconectado

## Workaround


Use um JS personalizado para forçar o logout





