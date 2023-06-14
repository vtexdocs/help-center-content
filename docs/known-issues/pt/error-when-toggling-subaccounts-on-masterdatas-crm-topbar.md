---
title: 'Mudança de subaccount na topbar nao funciona no Masterdata'
id: nvnf7smhUW2uy0saI6I2w
status: PUBLISHED
createdAt: 2018-12-05T22:53:38.886Z
updatedAt: 2022-12-22T20:45:47.761Z
publishedAt: 2022-12-22T20:45:47.761Z
firstPublishedAt: 2018-12-05T23:03:43.875Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: mudanca-de-subaccount-na-topbar-nao-funciona-no-masterdata
kiStatus: Backlog
internalReference: 
---

## Sumário

Esse erro é extremamente infrequente e de baixo impacto.  Afeta uma pequena parcela de clientes que ao trocarem de uma subaccount para outra é levado para o site da loja ao inves do CRM correto.


## Simulação

1.  Acesse https://{{account}}.vtexcrm.com.br
2.  Selecione uma subaccount diferente na topbar

## Workaround

Manualmente mude a url para a account desejada.
Não esqueça de colocar `https://` no inicio da URL

