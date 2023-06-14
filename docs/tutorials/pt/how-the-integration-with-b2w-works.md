---
title: 'Como funciona a integração com a B2W'
id: 7tF0PBIC5OgCuKqWKAa8Ge
status: DRAFT
createdAt: 2017-08-17T19:04:27.137Z
updatedAt: 2022-02-04T17:43:21.426Z
publishedAt: 
firstPublishedAt: 2017-08-17T19:22:10.702Z
contentType: tutorial
productTeam: Channels
author: authors_35
slug: como-funciona-a-integracao-com-a-b2w
legacySlug: como-funciona-a-integracao-com-a-b2w
subcategory: 5m1qqfnmfYKsO0KiOQC8Ky
---

A integração com a B2W funciona da seguinte forma:

A SkyHub disponibiliza uma fila com os pedidos feitos na B2W e a VTEX consome esses pedidos. Entre essas duas operações, há um intervalo de tempo natural, assim como há um intervalo entre o momento em que os pedidos na sua loja são gerados pelo Checkout e consumidos pelo Gerenciamento de pedidos.

Em geral, um pedido feito na B2W precisa ser indexado na SkyHub e, em seguida, inserido na fila. Esse processo costuma levar **até 1 hora**. Como a VTEX consome constantemente essa fila, não há acúmulo de pedidos. Na medida em que entram, os pedidos já são distribuídos para cada loja.
