---
title: O fluxo de login do checkout permite alterar o e-mail, mas não há suporte para o fluxo
id: 2wP6MBxvyd3kFDmlgYx4Tk
createdAt: 2023-05-03T18:09:50.683Z
updatedAt: 2023-05-08T18:31:29.802Z
publishedAt: 2023-05-08T18:31:29.802Z
firstPublishedAt: 2023-05-03T18:09:51.237Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-fluxo-de-login-do-checkout-permite-alterar-o-email-mas-nao-ha-suporte-para-o-fluxo
status: Backlog
internalReference: 258447
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao finalizar a compra com um e-mail informado e dados mascarados, será necessário fazer login se o comprador quiser alterar alguma informação. Na caixa de login que será aberta, o e-mail já estará preenchido com o contexto do carrinho, mas a interface permite que o e-mail "sugerido" seja modificado.

O e-mail sugerido não deve ser alterado. Se o cliente inserir outro e-mail, o fluxo de login não funcionará - na solicitação da API, haverá um erro silencioso e a interface do usuário ficará presa em um estado de "carregamento".

## Simulação



- No checkout, informe um e-mail com um perfil completo para que os dados sejam autocompletados e mascarados;
- Tente alterar alguma informação, como o endereço (será necessário fazer login);
- Na caixa de login, o e-mail do carrinho já estará preenchido;
- Altere o e-mail na caixa de login;
- Tente seguir em frente; isso não será possível

## Workaround


A loja pode tornar esse campo somente leitura para o fluxo de login no checkout.



