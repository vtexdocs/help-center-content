---
title: 'Formato de dirección incorrecto en las direcciones de facturación de "Mis tarjetas".'
id: 25QxVtMOazrxugHZqFrhSG
status: PUBLISHED
createdAt: 2023-04-17T17:40:24.795Z
updatedAt: 2023-04-17T17:40:25.411Z
publishedAt: 2023-04-17T17:40:25.411Z
firstPublishedAt: 2023-04-17T17:40:25.411Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: formato-de-direccion-incorrecto-en-las-direcciones-de-facturacion-de-mis-tarjetas
locale: es
kiStatus: Backlog
internalReference: 791779
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al añadir una nueva dirección de facturación en vtex.my-cards, se muestra un formato de dirección incorrecto. Esto ocurre cuando el usuario está intentando añadir una nueva tarjeta de crédito, y ocurre sólo cuando la nueva dirección que el usuario está intentando escribir es de un país diferente. Lo que ocurre, por ejemplo, es que el usuario elige una nueva dirección de EE.UU., mientras que las demás son de Canadá, todas las direcciones de Canadá se formatearán como una dirección de EE.UU..


##

## Simulación


1. Pulsa en "Añadir una nueva tarjeta" en la página de tarjetas de crédito
2. Elija una dirección guardada diferente en la sección "Dirección de facturación de la tarjeta"
3. Cuando elegimos una dirección canadiense toda la dirección aparece como Canadá aunque sea una dirección de EEUU
4. 4. Si elige una dirección de EE.UU., la dirección aparecerá como EE.UU. aunque sea una dirección canadiense.



## Workaround


N/A





