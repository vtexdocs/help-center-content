---
title: "O e-mail não é preenchido automaticamente para novos usuários no checkout-ui"
id: 2twqCnmbnrXwP04HOwaty2
status: PUBLISHED
createdAt: 2023-08-25T15:27:48.210Z
updatedAt: 2023-08-29T19:17:38.521Z
publishedAt: 2023-08-29T19:17:38.521Z
firstPublishedAt: 2023-08-25T15:27:49.283Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: o-email-nao-e-preenchido-automaticamente-para-novos-usuarios-no-checkoutui
locale: pt
kiStatus: Backlog
internalReference: 887949
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um novo usuário insere um novo e-mail na etapa de e-mail e prossegue para a próxima página, no componente de dados do cliente, o e-mail não é preenchido automaticamente.
Isso ocorre porque não há nenhum usuário registrado com esse e-mail. Como resultado, o `orderForm` carregado também contém um campo de e-mail vazio, fazendo com que ele permaneça em branco e exigindo que o cliente insira seu e-mail novamente.

## Simulação



1. Navegue até a página de checkout onde os clientes inserem seus e-mails.
2. Coloque um e-mail nunca usado antes na loja.
3. Vá para o componente de perfil do cliente.
4. A caixa de e-mail ficará vazia e você terá que digitá-la novamente.

##

## Workaround


N/A





