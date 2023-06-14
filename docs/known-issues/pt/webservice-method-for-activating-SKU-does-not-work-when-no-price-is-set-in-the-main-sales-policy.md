---
title: 'Método WebService de ativar SKU não funciona quando não há preço na política comercial principal'
id: 5a4XUoUvpm2KmWw66Um0mu
status: PUBLISHED
createdAt: 2017-07-09T22:52:26.629Z
updatedAt: 2019-12-31T15:17:42.750Z
publishedAt: 2019-12-31T15:17:42.750Z
firstPublishedAt: 2017-09-12T21:19:31.214Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
tag: Web Service
slug: metodo-webservice-stockkeepingunitactive-nao-funciona-quando-um-sku-nao
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

Ao utilizar o método WebService *StockKeepingUnitActive* em um SKU que não possui preço cadastrado para a Política Comercial Principal (1), o mesmo não funciona, pois o sistema valida se há ou não um preço cadastrado no SKU olhando apenas para a política 1.

## Simulação

Ter um SKU com preço apenas em outras políticas comerciais, sem ser a principal e tentar realizar um Request no método *StockKeepingUnitActive* referenciando o SKU em questão.

## Workaround

Ativar o SKU manualmente no admin ou massivamente via Planilha de Produtos/SKUs

