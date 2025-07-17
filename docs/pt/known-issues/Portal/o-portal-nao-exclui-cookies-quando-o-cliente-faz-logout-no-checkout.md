---
title: "O portal não exclui cookies quando o cliente faz logout no checkout"
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2025-05-16T20:07:25.310Z
publishedAt: 2025-05-16T20:07:25.310Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: o-portal-nao-exclui-cookies-quando-o-cliente-faz-logout-no-checkout
locale: pt
kiStatus: No Fix
internalReference: 417322
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


No checkout de uma loja, temos uma opção para fazer logout.

Infelizmente, a solicitação feita ao aplicativo do portal não exclui os cookies do usuário, que permanecem no OrderForm com o e-mail do cliente, de modo que o cliente não pode fazer logout usando essa opção. Esse comportamento ocorre em lojas com uma solução de vitrine diferente de "Legacy CMS Portal".

## Simulação


1. Acesse o site da loja (`www.store.com`) e faça login em My Account usando e-mail e código;
2. Depois de fazer login, crie um carrinho e vá para o checkout;
3. Conclua a etapa Profile (Perfil) e vá para Shipping (Remessa) e, em seguida, tente fazer logout no link "It's not me, end session" (Não sou eu, encerre a sessão).

O checkout executa a solicitação normalmente, fazendo a solicitação junto com o `orderFormId`

No entanto, o aplicativo do portal não exclui o cookie desse usuário e, portanto, retorna o mesmo usuário. O e-mail é mantido no formulário de pedido e, consequentemente, ele não é desconectado

## Workaround


Abra um ticket com a VTEX solicitando a ativação do logout com o ID da VTEX.




