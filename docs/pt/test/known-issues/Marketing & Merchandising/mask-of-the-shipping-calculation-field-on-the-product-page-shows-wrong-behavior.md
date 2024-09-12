---
title: 'Máscara do campo cálculo de frete na página do produto com comportamento inadequado'
id: 3e3i6QgalWSKyIw6KsYwGa
status: PUBLISHED
createdAt: 2017-08-11T17:33:43.752Z
updatedAt: 2022-12-22T20:46:02.879Z
publishedAt: 2022-12-22T20:46:02.879Z
firstPublishedAt: 2017-08-11T19:54:51.166Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: mascara-do-campo-calculo-de-frete-na-pagina-do-produto-com-comportamento-inadequado
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O campo renderizado pelo controle `<vtex.cmc:shippingValue/>` na página de produto exibe máscara com comportamento inadequado.
Este cenário ocorre apenas no mobile com sistema operacional android e navegador chrome.

## Simulação

1. Acesse a página do produto por um dispositivo mobile com sistema operacional __android__ e pelo navegador __chrome__;
2. Insira números no campo __cálculo de frete__;
3. Alguns números podem aparecer repetidos no campo.


## Workaround

Inserir um código javascript na página que sobrescreve a máscara nativa.

