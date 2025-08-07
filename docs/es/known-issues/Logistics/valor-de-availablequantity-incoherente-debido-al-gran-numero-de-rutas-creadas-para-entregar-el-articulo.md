---
title: "Valor de AvailableQuantity incoherente debido al gran número de rutas creadas para entregar el artículo."
id: 4kKVjSNsIEU8ZVGcpwvzQw
status: PUBLISHED
createdAt: 2024-05-16T12:14:20.776Z
updatedAt: 2024-05-16T12:15:36.200Z
publishedAt: 2024-05-16T12:15:36.200Z
firstPublishedAt: 2024-05-16T12:14:21.778Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: valor-de-availablequantity-incoherente-debido-al-gran-numero-de-rutas-creadas-para-entregar-el-articulo
locale: es
kiStatus: Backlog
internalReference: 1034211
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Durante el pipeline de indexación de un artículo, se realiza una simulación sin uso de código postal para validar la disponibilidad, esta simulación, cuando llega al sistema logístico, realiza una validación combinando todos los muelles, almacenes y políticas de envío disponibles para un canal de venta, la respuesta a este cálculo determina la disponibilidad del artículo, sin embargo esta respuesta tiene un límite de lectura de 10.000 rutas, por lo que cuando un cálculo da como resultado más de 10.000, el resto de rutas no se tienen en cuenta, lo que puede provocar que el sistema devuelva una respuesta inconsistente.


##

## Simulación


No existe una forma sencilla de simular un escenario de este tipo, ya que es necesario disponer de numerosas configuraciones logísticas.



## Workaround


Eliminar las configuraciones no utilizadas del canal de ventas (Muelles, Almacenes y Políticas de envío), reduciendo así el número de rutas creadas por el sistema durante el cálculo, situando el número de rutas por debajo del límite recomendado por el sistema (10.000).





