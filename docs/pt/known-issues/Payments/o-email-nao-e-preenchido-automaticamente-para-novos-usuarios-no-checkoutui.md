---
title: 'O e-mail não é preenchido automaticamente para novos usuários no checkout-ui'
id: 6XBghXwc93RBF53dCHr35y
status: DRAFT
createdAt: 2023-08-25T15:29:58.242Z
updatedAt: 2023-08-25T16:47:25.505Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: email-not-autofilling-for-new-users-on-checkoutui
locale: pt
kiStatus: Backlog
internalReference: 887949
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um novo usuário insere um novo e-mail na etapa de e-mail e prossegue para a próxima página, no componente de dados do cliente, o e-mail não é preenchido automaticamente.
Isso ocorre porque não há nenhum usuário registrado com esse e-mail. Como resultado, o `orderForm` carregado também contém um campo de e-mail vazio, fazendo com que ele permaneça em branco e exigindo que o cliente insira novamente seu e-mail.

## Simulação



1. Navegue até a página de checkout onde os clientes inserem seus e-mails.
2. Coloque um e-mail nunca usado antes na loja.
3. Vá para o componente de perfil do cliente.
4. A caixa de e-mail estará vazia e você terá que digitá-la novamente.

##

## Workaround


N/A





