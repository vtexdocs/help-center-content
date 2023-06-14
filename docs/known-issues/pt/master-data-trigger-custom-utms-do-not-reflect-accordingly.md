---
title: 'Master Data não reflete devidamente as UTMs customizadas do trigger'
id: 5IUv6xx8MpUBMxJaUDUzN7
status: PUBLISHED
createdAt: 2019-06-10T22:34:10.000Z
updatedAt: 2022-12-22T20:45:28.543Z
publishedAt: 2022-12-22T20:45:28.543Z
firstPublishedAt: 2019-06-10T22:37:05.187Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: master-data-nao-reflete-devidamente-as-utms-customizadas-do-trigger
kiStatus: Backlog
internalReference: 
---

## Sumário

Durante o processo de criação do trigger de e-mail, o usuário pode configurar uma UTM customizada. Em vez disso, o Master Data sempre usará VTEXCEM como UTM, ao contrário do que foi definido pelo usuário final.

## Simulação

1. Criar um trigger
2. Configurar UTM para CEM
3. Abandonar um carrinho
4. Note que o e-mail usa UTM VTEXCEM em vez de CEM

## Workaround

Não há workaround para esse cenário.

