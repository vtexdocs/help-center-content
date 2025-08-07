---
title: "MELI Map envía incorrectamente la especificación del producto como variación"
id: 6b49pUUxL3B3RtUWofLjL8
status: PUBLISHED
createdAt: 2023-06-27T11:20:49.475Z
updatedAt: 2023-06-27T11:20:50.484Z
publishedAt: 2023-06-27T11:20:50.484Z
firstPublishedAt: 2023-06-27T11:20:50.484Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-map-envia-incorrectamente-la-especificacion-del-producto-como-variacion
locale: es
kiStatus: Backlog
internalReference: 851021
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos un problema en la función MELI Mapper, que decidimos enviar un SKU como variación basado en los atributos de categoría de MELI, y no basado en lo que el vendedor ha mapeado en VTEX, lo que significa que una especificación de producto mapeada en VTEX puede ser enviada como variación a MELI.



## Simulación



Dentro de la función de mapeo, siempre que el vendedor mapee un atributo que acepte variación en MELI, será enviado como variación, incluso si el vendedor mapeó dentro de la especificación del producto.



## Workaround


n/a




