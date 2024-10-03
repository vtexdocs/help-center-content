---
title: ' Mensagem de erro inesperado aparece ao selecionar PayPal Plus no checkout'
id: 5ZxTkuVCHrFXCnpf4Q5Nb7
status: PUBLISHED
createdAt: 2019-03-20T17:56:18.673Z
updatedAt: 2022-12-22T20:49:08.399Z
publishedAt: 2022-12-22T20:49:08.399Z
firstPublishedAt: 2019-03-20T18:01:36.821Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: unexpected-error-message-is-displayed-when-selecting-paypal-plus-at-checkout
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

No checkout, se o cliente seleciona o __PayPal Plus__ como condição de pagamento, a mensagem _erro inesperado_ pode ser exibida na tela. Esse é um evento raro e intermitente, mas ainda assim pode causar transtornos para seus clientes em um momento-chave da experiência de compra.

A ocorrência do erro está intimamente ligada aos mecanismos de segurança dos navegadores, que incluem políticas mais rigorosas em relação ao uso de cookies. Porque o [PayPal Plus (transparente)](/pt/tutorial/configurar-paypal-plus-paypal-transparente) faz chamadas na API do checkout (no momento em que é escolhido pelo usuário) que dependem do envio de cookies, o processo acaba bloqueado pelos navegadores. É isso que retorna a mesnagem de _erro inesperado_.

## Simulação

1. Nas configurações do seu navegador, desabilite a opção que permite o acesso de outros sites aos cookies.
2. Siga o fluxo normal de compra e, no checkout da sua loja, escolha realizar o pagamento com __PayPal Plus__.
3. Como o comportamemto é intermitente, você talvez tenha que repetir esses passos algumas vezes antes de conseguir visualizar a mensagem de erro.

## Workaround

Por enquanto, a única forma de resolver o problema é o próprio usuário editar as configurações do navegador que está usando. Ele deve habilitar a opção que permite outros sites acessarem os cookies da loja em que está realizando a compra.

Recomendamos que, caso algum cliente entre em contato com sua loja relatando esse tipo de comportamento, você indique a ele o ajuste das configurações de cookies do navegador.

