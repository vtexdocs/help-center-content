---
title: 'Função ObterTotalDePontos não funciona dentro do Campo Automatico'
id: 1iHy0tOPoUEIyGsYoq2Sqm
status: PUBLISHED
createdAt: 2018-12-10T18:08:19.476Z
updatedAt: 2022-12-22T20:43:26.978Z
publishedAt: 2022-12-22T20:43:26.978Z
firstPublishedAt: 2018-12-10T18:37:48.745Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: funcao-obtertotaldepontos-nao-funciona-dentro-do-campo-automatico
kiStatus: Backlog
internalReference: 
---

## Sumário

A função ObterTotalDePontos utilizada em Campos Automaticos / Campos Calculados não funciona como esperado

## Simulação

1.  Acesse o MasterData e crie um Campo Automático
2.  Experimente criar uma função simples que utilize ObterTotalDePontos. Ex:

    if ( ObterTotalDePontos(campoScore) > 0 ) { 
    return 1; 
    } else { 
    return 0; 
    }
    
3. Erro: The name 'campoScore' does not exist in the current context

## Workaround

Dependendo do caso um workaround pode ser resolvido usando triggers, e desenvolvendo um middleware externo que trabalhe em conjunto com a trigger.

