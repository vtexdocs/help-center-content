---
title: "Quick view não funciona em páginas HTTPS"
id: cXoMffma6AMOKgcimgmYO
status: PUBLISHED
createdAt: 2017-08-02T17:25:52.444Z
updatedAt: 2019-12-31T15:17:51.857Z
publishedAt: 2019-12-31T15:17:51.857Z
firstPublishedAt: 2017-08-02T18:35:12.834Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slugEN: quick-view-nao-funciona-em-paginas-https
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

A viewpart `$product.QuickView` para templates de prateleira renderiza no HTML um link para abrir o iframe do quickview.

```<a class="thickbox" alt="Nome do produto" href="http://loja.vtexcommercestable.com.br/quick-view/?idproduto=3672&amp;KeepThis=true&amp;TB_iframe=true">Espiar</a>```

Em páginas HTTPS, o protocolo do link de destino permanece HTTP, gerando um iframe não HTTPS. Por se enquadrar em mixed-content, a ação é bloqueada e o iframe não carrega.

## Simulação

Basta uma prateleira com função de quickview em uma página HTTPS.

## Workaround

O único workaround esbarra na necessidade de customização do front-end, aonde pode ser feito um Javascript simples que edite o link ("href") de todos os elementos de quickview, de modo que a URL passe a ser HTTPS e o iframe seja carregado no protocolo esperado.

