---
title: O que fazer quando uma mensagem de erro inesperado aparece ao selecionar PayPal Plus no checkout
id: 2eyMuEf6wsWuOgrjo7tzQH
status: PUBLISHED
createdAt: 2019-03-18T14:01:50.694Z
updatedAt: 2019-12-31T14:24:40.864Z
publishedAt: 2019-12-31T14:24:40.864Z
firstPublishedAt: 2019-03-18T14:10:08.064Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slug: o-que-fazer-quando-uma-mensagem-de-erro-inesperado-aparece-no-checkout
legacySlug: o-que-fazer-quando-uma-mensagem-de-erro-inesperado-aparece-ao-selecionar
---

No checkout, se o cliente seleciona o __PayPal Plus__ como condição de pagamento, a mensagem _erro inesperado_ pode ser exibida na tela. Esse é um evento raro e intermitente, mas ainda assim pode causar transtornos para seus clientes em um momento-chave da experiência de compra.


## Por que isso acontece?
Os navegadores estão ganhando cada vez mais mecanismos de segurança para proteger as informações dos usuários. Isso inclui políticas mais rigorosas em relação ao uso de cookies. 

Algumas condições de pagamento, como o [PayPal Plus (transparente)](/pt/tutorial/configurar-paypal-plus-paypal-transparente), fazem chamadas na API do checkout que dependem do envio de cookies. Esse envio pode ser bloqueado pelas configurações de segurança dos navegadores, o que gera erros na interface.


## Como resolver
Por enquanto, a única forma de resolver o problema é o próprio usuário editar as configurações do navegador que está usando. Ele deve habilitar a opção que permite outros sites acessarem os cookies da loja em que está realizando a compra.

Recomendamos que, caso algum cliente entre em contato com sua loja relatando esse tipo de comportamento, você indique a ele o ajuste das configurações de cookies do navegador.
