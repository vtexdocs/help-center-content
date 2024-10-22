---
title: 'Campo automático não calcula o campo corretamente quando programado para alterar registro na primeiro hora do dia '
id: 6DieNCI6paEUeg06cKsCYI
status: PUBLISHED
createdAt: 2018-12-17T18:37:45.246Z
updatedAt: 2022-12-22T20:45:49.754Z
publishedAt: 2022-12-22T20:45:49.754Z
firstPublishedAt: 2018-12-17T19:10:10.371Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: automatic-field-doesnt-calculate-the-field-correctly-when-set-to-calculate-during-the-first-hour-of-the-day
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O Campo automático (campo calculado) funciona corretamente quando  "Recalcular esse campo:" é setado para "somente quando inserir registro", mas para de funcionar quando é programado para recalcular "na primeira hora..." e suas variantes.![inline1511102536](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Master Data/campo-automatico-nao-calcula-o-campo-corretamente-quando-programado-para-alterar-registro-na-primeiro-hora-do-dia_1.png)

## Simulação

1. Acesse https://{{account}}.ds.vtexcrm.com.br
2. Clique na aba "Campos Automáticos"
3. Especifique o tipo do valor
4. Na area de Edição de fórmula, selecione a opção "Na primeira hora do dia"

## Workaround

Você pode programar um middleware usando o VTEX.IO para efetuar a logica do campo automatico e setar o valor do campo.

