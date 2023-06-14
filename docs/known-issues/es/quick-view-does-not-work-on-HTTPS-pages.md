---
title: 'Quick view no funciona en páginas HTTPS'
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
slug: quick-view-no-funciona-en-páginas-HTTPS
kiStatus: Fixed
internalReference: 
---

## Sumario

El viewpart `$product.QuickView` para templates de estante renderiza en el HTML un link para abrir el iframe del quickview.

```<a class="thickbox" alt="Nome do produto" href="http://loja.vtexcommercestable.com.br/quick-view/?idproduto=3672&amp;KeepThis=true&amp;TB_iframe=true">Espiar</a>```

En páginas HTTPS, el protocolo del link de destino permanece HTTP, generando un iframe no HTTPS. Por encuadrarse en mixed-content, la acción se bloquea y el iframe no se carga.


## Simulación

Basta un estante con función de quickview en una página HTTPS.


## Workaround

El único workaround  se encuentra en la necesidad de personalización del front-end, donde se puede hacer un simple Javascript que edite el link ("href") de todos los elementos quickview, de modo que la URL pase a ser HTTPS y el iframe sea cargado en el protocolo esperado.


