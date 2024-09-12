---
title: 'Divergência de preços em integração com marketplace'
id: 2oKzaHhwrSeW282EOciSE2
status: PUBLISHED
createdAt: 2018-12-07T16:20:45.819Z
updatedAt: 2022-12-22T15:17:30.632Z
publishedAt: 2022-12-22T15:17:30.632Z
firstPublishedAt: 2018-12-07T17:31:14.631Z
contentType: knownIssue
productTeam: Channels
author: TnXcuQydAAOuwWACo864E
tag: Pricing & Promotions
slug: divergencia-de-precos-em-integracao-com-marketplace
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

O lojista consegue criar a politica comercial e agendar o preço fixo com sucesso. 

Algumas vezes o marketplace não é notificado da expiração do preço fixo causando uma divergência.  Não ha um padrão que define quais produtos sofreraõ com a divergência de preços

Marketplaces impactados:
- Amazon
- CNova
- Mercado Livre
- Walmart

## Simulação

Essa known issue ocorre normalmente com accounts que possuem integração com marketplaces. Não é necessario nenhuma configuração especial para causar esse bug.

## Workaround

Abrir um ticket e solicitar uma carga de preço manual (forçar a atualização).  Isso resolve a issue temporariamente.

