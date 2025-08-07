---
title: 'Bloqueo de Precio – Definición de Concepto'
id: 7JZhLmI3mjBVu0RMOueoy3
status: PUBLISHED
createdAt: 2019-07-04T13:54:19.429Z
updatedAt: 2020-02-13T15:45:22.885Z
publishedAt: 2020-02-13T15:45:22.885Z
firstPublishedAt: 2019-07-17T19:47:20.847Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: trava-de-preco-definicao-de-conceito
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precios-101
---

## Definición 

El cambio de precios de los SKUs de su tienda es una acción delicada y puede causar impactos indeseables si no se realiza con cuidado. Puede haber situaciones en las que, debido a algún error de registro, se venda un SKU a un precio mucho más bajo que el deseado.

Para aumentar la seguridad de esta operación, es posible configurar las **variaciones máximas y mínimas** del precio de un ítem. Esta funcionalidad garantiza que los precios de los SKUs no se alteren a valores indeseados.

Si intenta alterar el precio del SKU por encima o por debajo del porcentaje de variación configurado, se devolverá el siguiente mensaje en la UI:

`Price cannot be increased more than {{upperLimit}}% at a time, from {{currentValue}} to {{newValue}} ({{variation}}% increase)`  

o

`Price cannot be decreased more than {{lowerLimit}}% at a time, from {{currentValue}} to {{newValue}} ({{variation}}% decrease)`

## Ejemplos

Consideremos que configuró un bloqueo de precio con **Límite superior** del 50% y **Límite inferior** del 10%. Esto significa que, si aumenta un precio por encima del 50% o disminuye un precio con una variación por encima del 10%, se activará el bloqueo del precio.

De esta manera, vamos a utilizar como ejemplo un SKU que tenga un precio de € 100.00. 

Si intenta alterar el precio a € 160.00, **se activará el bloqueo**, ya que la variación del precio fue del 60% y el **bloqueo de límite superior** prevé una variación máxima del 50%. Con esto, el precio se mantendrá en € 100.00.

Si altera el precio a € 20.00, **el bloqueo se activará**, ya que la variación del precio fue del 80% y el **bloqueo de límite inferior** prevé una variación máxima del 10%. Con esto, el precio se mantendrá en € 100.00.
