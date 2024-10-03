---
title: "A conta principal está sendo selecionada como 'Merchant.Name' no ambiente da sub-conta"
id: 51coXFBM2wtrJukH3oRESy
status: PUBLISHED
createdAt: 2023-03-29T20:54:19.877Z
updatedAt: 2023-03-29T20:54:20.327Z
publishedAt: 2023-03-29T20:54:20.327Z
firstPublishedAt: 2023-03-29T20:54:20.327Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: main-account-is-being-selected-as-merchantname-in-the-subaccount-environment
locale: pt
kiStatus: Backlog
internalReference: 780767
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando uma subconta está processando transações, o órgão solicitante está enviando o imóvel "nome do comerciante" com o nome da conta principal. Em alguns casos, devido a este comportamento, o conector não pode autorizar as transações do lado deles, causando a perda das ordens.


##

## Simulação


Em um ambiente onde a conta principal/subconta é configurada, tente terminar uma transação na loja da sub-conta.


##

## Workaround


N/A

