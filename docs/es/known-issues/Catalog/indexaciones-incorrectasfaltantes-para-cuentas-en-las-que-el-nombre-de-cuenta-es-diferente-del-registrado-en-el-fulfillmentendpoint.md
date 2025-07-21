---
title: "Indexaciones incorrectas/faltantes para cuentas en las que el nombre de cuenta es diferente del registrado en el fulfillmentEndpoint."
id: 3TPRChOVHGpOYVeVo4zGOK
status: PUBLISHED
createdAt: 2024-06-14T16:45:39.257Z
updatedAt: 2025-06-30T20:03:31.293Z
publishedAt: 2025-06-30T20:03:31.293Z
firstPublishedAt: 2024-06-14T16:45:40.852Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: indexaciones-incorrectasfaltantes-para-cuentas-en-las-que-el-nombre-de-cuenta-es-diferente-del-registrado-en-el-fulfillmentendpoint
locale: es
kiStatus: No Fix
internalReference: 1050023
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, una cuenta de franquicia puede tener su punto final fulFillment diferente de su nombre de cuenta "oficial", lo cual es una práctica común para arquitecturas específicas de vendedor<>marketplace que necesitan múltiples precios y/o existencias para distintas políticas comerciales utilizando la característica de franquicia con múltiples vendedores para la misma franquicia.

Aunque esta función funciona a la hora de mostrar el contenido necesario para los compradores, cuando se actualizan los datos relevantes para las ventas, como el precio o las existencias, para el vendedor principal de una franquicia determinada, las otras cuentas asociadas no se indexan correctamente junto a él, lo que genera una disponibilidad y una visualización de precios incoherentes entre los canales de venta de una tienda.



## Simulación



- Para una tienda que tiene múltiples vendedores y 1+ cuentas de franquicia, configurar 2+ vendedores apuntando, en el ndpoint fulfillmente, hacia la misma cuenta de franquicia en sus ajustes de vendedor.
- Intente actualizar los datos de precio/stock de cualquier artículo de la cuenta de franquicia.
- Compruebe los datos actualizados en los otros vendedores asociados que utilizan la cuenta de franquicia en sus puntos finales FFM, estarán desactualizados.



## Workaround


Utilice la función de mapeo de canal de ventas para implementar esta arquitectura en su lugar.




