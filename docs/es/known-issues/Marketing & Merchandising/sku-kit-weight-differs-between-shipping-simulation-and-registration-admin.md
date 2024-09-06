---
title: 'Peso de SKU KIT divergente entre simulación de flete y registro (admin)'
id: 4YAWHxWpPOAoyi0O8MuEeC
status: PUBLISHED
createdAt: 2017-09-29T12:52:49.738Z
updatedAt: 2022-12-22T20:45:55.001Z
publishedAt: 2022-12-22T20:45:55.001Z
firstPublishedAt: 2017-09-29T13:16:34.258Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: peso-de-sku-kit-divergente-entre-simulacion-de-flete-y-registro-admin
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Un SKU KIT debe tener como peso la suma de los pesos de sus componentes. Cuando un Kit está siendo armado, el sistema debería incrementar el peso de cada componente al peso de Kit; sin embargo, esto apenas está sucediendo cuando el Kit (Padre) se edita y actualiza. El principal impacto es en la simulación de coste de envío, ya que la mayoría de las veces el kit tiene un peso mucho mayor al real.

![simulacion de entrega](https://images.contentful.com/alneenqid6w5/3nD8BM0a7ecKKoWEUewoQa/d6ecf51e491b6a54fdc4dc6f3240a75a/simulacao.png)

## Simulación

Para simular, basta crear un SKU KIT manualmente por el admin. Este artículo describe cada paso del registro del Kit: [Registrando Kit](http://help.vtex.com/pt/tutorial/--tutorials_215)

## Workaround

Para contornear este comportamiento, siempre que observe esta divergencia, acceda al SKU KIT (Padre) por el admin y haga clic en el botón de guardar (haciendo o no cambios). El mismo proceso se puede hacer mediante una planilla. Después de eso, espere algunos instantes para la finalización de la indexación.


