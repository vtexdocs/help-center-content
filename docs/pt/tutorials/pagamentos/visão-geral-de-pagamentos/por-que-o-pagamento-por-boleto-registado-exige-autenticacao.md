---
title: 'Por que o pagamento por boleto registrado exige autenticação?'
id: 5gpsx6cUXKGG4asA6aiCki
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.913Z
updatedAt: 2019-12-31T15:20:11.716Z
publishedAt: 2019-12-31T15:20:11.716Z
firstPublishedAt: 2019-01-24T22:01:07.101Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: why-does-payment-with-registered-bank-slip-require-authentication
legacySlug: por-que-o-pagamento-por-boleto-registado-exige-autenticacao
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

O boleto registrado é uma forma de pagamento que contém dados sensíveis do cliente que está realizando a compra.

Quando um cliente preenche seus dados para fechar um pedido, as informações de __Primeiro Nome__, __Último Nome__, __CPF__ etc. são utilizadas para a geração do boleto registrado.

Estas informações ficam salvas no perfil do cliente e são exibidas no boleto registrado. Desta maneira, a autenticação funciona como uma medida de segurança para que fraudadores não consigam acessar essas informações.

Por conta disso, o login é solicitado tanto no momento da __escolha do boleto registrado como meio de pagamento__ quanto para __baixar o boleto na página de fechamento de compra (order placed)__.

> ℹ️ A autenticação é exigida mesmo na primeira compra. Estamos trabalhando para que a autenticação seja exigida somente em casos de recompra, aonde o usuário está com os dados mascarados (pois ainda não passou pelo processo de identificação).
