---
title: 'CategoriaComissãoPercentagem sobre o API do Vendedor permitindo qualquer valor'
id: 2qFGcRO2H1JxHsYERf6X2s
status: PUBLISHED
createdAt: 2022-03-16T16:16:40.281Z
updatedAt: 2022-11-25T22:10:19.469Z
publishedAt: 2022-11-25T22:10:19.469Z
firstPublishedAt: 2022-03-16T16:16:40.836Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: categoriacomissaopercentagem-sobre-o-api-do-vendedor-permitindo-qualquer-valor
locale: pt
kiStatus: Backlog
internalReference: 382680
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No PUT Seller API, a categoria de propriedadeCommissionPercentage aceita qualquer tipo de entrada, por exemplo, entradas de texto. Isto pode até quebrar o processo de indexação para produtos que possuem SKUs nos quais este vendedor está incluído.



## Simulação


- No caminho `/api/catalog_system/pvt/seller/{{id}}`, tente atualizar o valor da propriedade CategoryComissionPercentage para qualquer coisa que não seja um ponto flutuante, por exemplo, qualquer tipo de texto;
- Verifique se as SKUs que este vendedor está incluído não serão mais indexadas.



## Workaround


Não use outros tipos de valor em vez de ponto flutuante

