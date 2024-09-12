---
title: 'Planilha de imagens não exportadas quando a conta tem muitos skus'
id: 61QPFKVJfCSIMyX1iLuJbQ
status: PUBLISHED
createdAt: 2022-08-02T19:05:25.641Z
updatedAt: 2022-11-25T21:44:08.083Z
publishedAt: 2022-11-25T21:44:08.083Z
firstPublishedAt: 2022-08-02T19:05:26.808Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: planilha-de-imagens-nao-exportadas-quando-a-conta-tem-muitos-skus
locale: pt
kiStatus: Backlog
internalReference: 623183
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Apesar da mensagem de sucesso na planilha de administração das imagens sendo processada e que em breve será enviada para o e-mail, o relatório nunca chega de fato.
Este comportamento acontece devido a um timeout, dependendo se a quantidade de skus sendo exportada excede o limite sugerido de 10k.



## Simulação



1. Tente exportar um relatório de planilha de imagens com mais de 10.000 skus;
2. Verifique se a mensagem no administrador é bem sucedida;
3. 3. Verifique se o e-mail realmente chega.



## Workaround


Use as APIs para obter as informações necessárias:
https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file
https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-variations

