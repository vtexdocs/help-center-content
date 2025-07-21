---
title: 'Callback URL signature: bloqueio em autorizações de pagamento assíncrono sem o uso de token de autenticação'
id: 3at5YtI2L6QqBym6Af56tV
status: PUBLISHED
createdAt: 2024-05-03T18:12:04.996Z
updatedAt: 2024-05-03T18:33:19.277Z
publishedAt: 2024-05-03T18:33:19.277Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-05-03-callback-url-signature-authentication-token
locale: pt
legacySlug: callback-url-signature-token-de-autenticacao
announcementImageID: ''
announcementSynopsisPT: 'Token de autenticação para autorizações de pagamento assíncrono'
---

Visando aprimorar as operações de pagamento realizadas na plataforma, a VTEX está implementando a utilização do token de autenticação `X-VTEX-signature`.  Este token deve ser utilizado por provedores e parceiros de pagamento no momento de retornar o status de uma transação de pagamento assíncrona via [callback URL](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#callback-url).  

A partir do dia 27 de maio de 2024, o gateway da VTEX encaminhará em cada transação de pagamento a informação da callback URL e o respectivo token de autenticação.

Exemplo de callback URL contendo o token de autenticação:

`https://gatewayqa.vtexpayments.com.br/api/pvt/payment-provider/transactions/8FB0F111111122222333344449984ACB/payments/A2A9A25B11111111222222333327883C/callback?accountName=teampaymentsintegrations&X-VTEX-signature=R123456789aBcDeFGHij1234567890tk`

## O que precisa ser feito?

A partir do dia 26 de junho de 2024, todos os provedores e parceiros de pagamento deverão informar o status de uma transação de pagamento assíncrona somente via callback URL e token de autenticação.

Após esta data, informações encaminhadas apenas para a callback URL (sem o token de autenticação), serão bloqueadas e as respectivas transações de pagamento, canceladas.

Para mais informações sobre a callback URL, acesse [Payment Provider Protocol](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#callback-url) e [Create Payment endpoint](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).
