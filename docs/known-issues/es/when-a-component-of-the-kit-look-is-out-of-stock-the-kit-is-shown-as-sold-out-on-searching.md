---
title: 'Cuando un componente de kit look no tiene stock, el kit aparece agotado en la búsqueda'
id: 5PRtTKk1HyGkKciOussWEI
status: PUBLISHED
createdAt: 2017-03-29T23:44:56.615Z
updatedAt: 2022-12-22T20:43:08.857Z
publishedAt: 2022-12-22T20:43:08.857Z
firstPublishedAt: 2017-03-29T23:46:36.720Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: cuando-un-componente-de-kit-look-no-tiene-stock-el-kit-aparece-agotado-en-la-busqueda
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando un componente de un kit look se queda sin stock, todo el kit se exhibe como agotado en la búsqueda.

## Simulación

<!--- Conta original era automacaoqa, removemos por conta de EDU-2582 --->

Kit Look: `https://lojateste.vtexcommercebeta.com.br/admin/site/ProdutoForm.aspx?id=2000205`

Componente no disponible: `https://lojateste.vtexcommercebeta.com.br/admin/site/SkuForm.aspx?IdSku=2000362`

Exhibición correcta en la página de producto: `https://lojateste.vtexcommercebeta.com.br/admin/site/SkuForm.aspx?IdSku=2000362`

Exhibición incorrecta en la búsqueda: `https://lojateste.vtexcommercebeta.com.br/kits`

## Workaround

Solo utiliza el Kit Look si es posible asegurar que todos los componentes poseen stock.

