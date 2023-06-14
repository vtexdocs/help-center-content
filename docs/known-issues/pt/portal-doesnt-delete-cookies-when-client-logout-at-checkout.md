---
title: O portal não exclui cookies quando o cliente faz o logout no checkout
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2022-11-25T22:10:31.240Z
publishedAt: 2022-11-25T22:10:31.240Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: o-portal-nao-exclui-cookies-quando-o-cliente-faz-o-logout-no-checkout
kiStatus: Backlog
internalReference: 417322
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Na caixa de uma loja, temos a opção de sair da loja.

Infelizmente, o pedido feito ao aplicativo do portal, não está excluindo os cookies do usuário, permanecendo no OrderForm com o e-mail de identificação deste cliente, de modo que o cliente não pode sair usando esta opção



## Simulação


1. Ir para `.myvtex.com' e fazer login a partir de Minha Conta utilizando e-mail e código;

2. Uma vez conectado, faça um carrinho e vá para o check-out;

3. Complete o passo Perfil e vá para Shipping, depois tente sair do link "It's not me, end session".

O Checkout executa o pedido normalmente, fazendo o pedido junto com o "OrderFormId".

Entretanto, o Portal Application não está apagando o cookie deste usuário e assim devolvendo o mesmo usuário, com isso o e-mail é mantido no OrderForm e conseqüentemente, não é desconectado.



## Workaround


Sair usando a página inicial.

