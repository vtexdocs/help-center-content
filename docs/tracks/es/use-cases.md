---
title: 'Casos prácticos'
id: 5k74U1EJm6FzirFczMYHBk
status: PUBLISHED
createdAt: 2020-11-18T13:40:47.138Z
updatedAt: 2020-11-18T17:37:59.283Z
publishedAt: 2020-11-18T17:37:59.283Z
firstPublishedAt: 2020-11-18T17:37:59.283Z
contentType: trackArticle
productTeam: Financial
slug: casos-practicos
trackId: 1LqUFHQZ3ZQyV5TmugbGNm
trackSlugES: condiciones-de-pago-clusterizadas
---

Aquí daremos algunos ejemplos prácticos de cómo funcionan las condiciones de clusterización.

## Condición de pago exclusiva

El administrador de la tienda puede aplicar la condición del pago para solamente un consumidor de su base.

Para esto, se puede crear una clusterización a partir de una propiedad que es única para cada consumidor.

Por ejemplo, existen dos tipos de campos nativos en el Master Data para el caso de Brasil: "CPF" y "CNPJ" (documentos de identificación fiscal para persona física y jurídica, respectivamente).

Al crear una única condición "CPF es 00991929303”, la regla de plazo y pago en cuotas se aplicará solamente para el consumidor cuyo valor “00991929303” se encuentre registrado en el banco de datos. 

Esto sucede porque ningún otro consumidor de la base tendrá una propiedad CPF con un valor igual a “0099192930”. 

En este caso, no importa si la norma se aplica a "todas las condiciones" o a "cualquiera de las condiciones". Como solo habrá una clusterización configurada, la condición se aplicará independientemente del comando elegido.

## Campos personalizados

El administrador de la tienda no necesita usar solo los campos nativos del Master Data. Él mismo puede crear las propiedades más adecuadas a las estrategias de negocio que quiera desarrollar. 

Pensemos en la perspectiva de Customer Credit, en el que el administrador de una tienda concede crédito a sus clientes. Cada compra efectuada con ese crédito genera un título que se debe pagar.

No importa cuán confiables sean los clientes, los imprevistos ocurren y estos valores no siempre se pagan hasta su fecha de vencimiento.

El administrador de la tienda puede segmentar a los clientes de acuerdo con el momento en que pagan el título. En ese caso, se crearía la propiedad “Pago”, que se rellenaría con los valores:

- “adelantado”
- “enFecha” 
- “atrasado”

De esta forma, se podría aplicar una condición de pago solamente a los clientes que correspondan a los valores "adelantado" y "enfecha".

Sería suficiente crear dos condiciones, "Pago + es + adelantado", "Pago es en fecha", y determinar que la regla de plazo y pago en cuotas será válida para cualquiera de las opciones.
