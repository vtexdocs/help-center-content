---
title: 'El selector de método de entrega desaparece en el flujo específico cuando sólo hay entrega programada'
id: 7I24nVw5W7YUuoTvgH8W5k
status: PUBLISHED
createdAt: 2022-08-12T18:07:34.922Z
updatedAt: 2022-11-25T21:49:41.399Z
publishedAt: 2022-11-25T21:49:41.399Z
firstPublishedAt: 2022-08-12T18:07:35.420Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-selector-de-metodo-de-entrega-desaparece-en-el-flujo-especifico-cuando-solo-hay-entrega-programada
locale: es
kiStatus: Fixed
internalReference: 296786
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El selector de fecha/hora para la entrega programada desaparece cuando el usuario cambia de "recoger" a "recibir", este comportamiento ocurre independientemente del uso de la función Lean Shipping.

Aparentemente el factor común es que las únicas opciones de "recibir" están programadas, y las de "retirar" no están programadas, por lo que este problema puede no ocurrir en otros escenarios.



## Simulación


1- Disponer de un artículo cuya entrega se pueda realizar de forma programada y que además tenga la opción de recogida en tienda.
2- Insertar este artículo en la cesta
3- Avanzar al paso de entrega
4- Inserte un código postal que tenga disponibilidad de entrega.
5- En el área de envío, elige la opción de "eliminar" en el toogle
6- Ahora elige la opción "entrega" en el toogle;
7- En este punto la UI ya no mostrará el botón "elegir fecha y hora de entrega".



## Workaround


N/A

