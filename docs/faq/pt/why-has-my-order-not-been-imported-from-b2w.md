---
title: Por que meu pedido não foi importado da B2W?
id: frequentlyAskedQuestions_6657
status: DRAFT
createdAt: 2017-04-27T22:22:21.393Z
updatedAt: 2020-01-09T15:46:16.442Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:46.453Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_35
slug: por-que-meu-pedido-nao-foi-importado-da-b2w
legacySlug: por-que-meu-pedido-nao-foi-importado-da-b2w
---

A integração com a B2W funciona da seguinte forma:

A SkyHub disponibiliza uma fila com os pedidos feitos na B2W, e a VTEX consome esses pedidos. Entre essas duas operações, há um intervalo de tempo natural, assim como há um intervalo entre o momento em que os pedidos na sua loja são gerados pelo Checkout e consumidos pelo OMS.

Em geral, um pedido feito na B2W precisa ser indexado na SkyHub, e em seguida inserido na fila. Esse processo costuma levar **até 1 hora**. Como a VTEX consome constantemente essa fila, não há acúmulo de pedidos. Na medida em que entram, já são distribuídos para cada loja.

Mas o que fazer se já se passou um longo período de tempo e você não encontra o pedido na VTEX, mesmo procurando via API? Neste caso, o melhor caminho é entrar em contato com a SkyHub e pedir a ela que verifique se o pedido foi incluído na fila.
