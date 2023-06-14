---
title: Por que foi solicitado que meu cliente fizesse login ao tentar finalizar sua compra?
id: frequentlyAskedQuestions_2705
status: PUBLISHED
createdAt: 2017-04-27T22:25:14.581Z
updatedAt: 2022-05-13T16:37:34.897Z
publishedAt: 2022-05-13T16:37:34.897Z
firstPublishedAt: 2017-04-27T23:02:37.271Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: authors_3
slug: por-que-foi-solicitado-login-no-checkout-finalizacao-de-compra
legacySlug: por-que-foi-solicitado-login-no-checkout-finalizacao-de-compra
---

Existe uma regra de segurança no Checkout que está relacionada à facilidade de compra do SmartCheckout.

Como o SmartCheckout permite fechar uma compra apenas com o e-mail e com o CVV do cartão, caso o cliente já tenha finalizado compra anteriormente, limitamos a quantidade de tentativas de finalização de compra sem sucesso a 3. Depois dessas 3 tentativas, pedimos o login do cliente.

![LoginPT](//images.ctfassets.net/alneenqid6w5/6M66QYzmnYoaAieMEkgeQU/ad36bed2e62bedaa2fb6ca5e9efe67c0/LoginPT.png)

Ou seja, caso o cliente finalize a compra apenas com o e-mail e o CVV do cartão de crédito e a autorização da operadora não ocorra em até 3 vezes seguidas, é mostrada a tela de login para que o cliente continue tentando comprar. Essa contagem volta ao início quando o cliente fizer o login e finalizar sua compra com sucesso.

<div class="alert alert-warning">
A solicitação de uma nova autenticação ao cliente está únicamente relacionada ao limite estabelecido de 3 tentativas de compra sem sucesso com o mesmo cartão. Isso quer dizer que, <strong>independentemente do intervalo de tempo entre cada tentativa, a autenticação será solicitada quando o cliente tentar pela terceira vez finalizar uma compra sem sucesso.</strong>
</div>

Essa medida visa à segurança dos dados dos clientes contra ataques e tentativas de fraudes.

Para saber mais sobre proteção de dados, acesse [Segurança do SmartCheckout](https://help.vtex.com/pt/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).
