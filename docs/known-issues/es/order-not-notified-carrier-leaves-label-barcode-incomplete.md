---
title: 'El pedido no notificado al transportista deja incompleto el código de barras de la etiqueta'
id: 2QjxFv2Ul2wKCdnYtrlF0T
status: PUBLISHED
createdAt: 2023-08-01T16:55:39.774Z
updatedAt: 2023-09-18T22:52:54.573Z
publishedAt: 2023-09-18T22:52:54.573Z
firstPublishedAt: 2023-08-01T16:55:40.545Z
contentType: knownIssue
productTeam: VTEX Shipping Network (VTEX Log)
author: 2mXZkbi0oi061KicTExNjo
tag: VTEX Shipping Network (VTEX Log)
slug: el-pedido-no-notificado-al-transportista-deja-incompleto-el-codigo-de-barras-de-la-etiqueta
locale: es
kiStatus: Backlog
internalReference: 872530
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los clientes que utilizan transportistas asociados a la Red de Envíos, al solicitar la emisión de etiquetas en Listo para enviar, pueden obtener el archivo con el código de barras incompleto, lo que puede impedir que se envíe el paquete.


##

## Simulación


No se ha podido reproducir, sólo verificar comprobando las etiquetas enviadas por los clientes con el código de barras incompleto y confirmando vía API que el paquete no ha sido notificado.



## Workaround


Notificando de nuevo el pedido manualmente, se asegura que se notifica al transportista y el código de barras está completo y se puede utilizar la etiqueta.





