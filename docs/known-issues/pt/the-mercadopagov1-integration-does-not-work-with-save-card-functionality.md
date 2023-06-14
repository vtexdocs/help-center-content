---
title: 'A integração MercadoPagoV1 não funciona com a funcionalidade salvar cartão'
id: 2V8kdA60OTl7VQoUUNgBci
status: PUBLISHED
createdAt: 2022-05-03T15:45:09.856Z
updatedAt: 2022-11-25T22:06:14.442Z
publishedAt: 2022-11-25T22:06:14.442Z
firstPublishedAt: 2022-05-03T15:45:10.554Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-integracao-mercadopagov1-nao-funciona-com-a-funcionalidade-salvar-cartao
kiStatus: No Fix
internalReference: 283727
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A integração MercadoPagoV1 não funciona com a funcionalidade salvar cartão na seção Minha conta.

Este erro ocorre porque Meus Cartões esperam uma resposta síncrona dos compradores de cartões de crédito e o MercadoPagoV1 não retorna uma resposta imediata.



## Simulação



1. Ir para a VTEX **Admin.**
2. Configure o comprador MercadoPagoV1.
3. Configurar um método de pagamento com cartão de crédito - como Mastercard, Visa, American Express, etc. - a ser processado pelo adquirente.
4. Ir para a home page de sua loja.
5. Faça o login digitando seu endereço de e-mail e senha.
6. Clique em **Minha conta***.
7. Vá para a seção **Cartões de crédito***.
8. Clique em **Adicionar novo cartão**.
9. Preencha todos os campos e clique em **Salvar novo cartão***.
10. Este processo retornará _um erro ocorrido durante a tentativa de registrar o cartão_.



## Workaround


N/A

