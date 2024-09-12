---
title: 'A integração do MercadoPagoV1 e V2 não funciona com a funcionalidade de salvar cartão'
id: 2V8kdA60OTl7VQoUUNgBci
status: PUBLISHED
createdAt: 2022-05-03T15:45:09.856Z
updatedAt: 2024-01-09T13:23:20.203Z
publishedAt: 2024-01-09T13:23:20.203Z
firstPublishedAt: 2022-05-03T15:45:10.554Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-integracao-do-mercadopagov1-e-v2-nao-funciona-com-a-funcionalidade-de-salvar-cartao
locale: pt
kiStatus: Backlog
internalReference: 283727
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A integração do MercadoPagoV1 e do MercadoPagoV2 não funciona corretamente com a funcionalidade de salvar cartão na seção "Minha conta" para países que não permitem transações com decimais.

Esse problema ocorre porque o recurso "Meus cartões" gera uma nova transação com um valor de US$ 1,5. No entanto, alguns países não permitem transações com esses valores decimais, o que resulta na rejeição de qualquer tentativa de aprovação dessas transações.

## Simulação



1. Acesse o VTEX **Admin.**
2. Configure o adquirente MercadoPagoV1 ou MercadoPagoV2.
3. Configure um método de pagamento com cartão de crédito - como Mastercard, Visa, American Express, etc. - a ser processado pelo adquirente.
4. Vá para a página inicial de sua loja.
5. Faça login inserindo seu endereço de e-mail e senha.
6. Clique em **My account**.
7. Vá para a seção **Cartões de crédito**.
8. Clique em **Add new card**.
9. Preencha todos os campos e clique em **Salvar novo cartão**.
10. Esse processo retornará _ocorreu um erro ao tentar registrar o cartão_



## Workaround


N/A

