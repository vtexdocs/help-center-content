---
title: 'Indexaciones incorrectas/faltantes para cuentas en las que el nombre de cuenta es diferente del registrado en el fulfillmentEndpoint.'
id: 3TPRChOVHGpOYVeVo4zGOK
status: PUBLISHED
createdAt: 2024-06-14T16:45:39.257Z
updatedAt: 2024-07-09T16:49:07.942Z
publishedAt: 2024-07-09T16:49:07.942Z
firstPublishedAt: 2024-06-14T16:45:40.852Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: indexaciones-incorrectasfaltantes-para-cuentas-en-las-que-el-nombre-de-cuenta-es-diferente-del-registrado-en-el-fulfillmentendpoint
locale: es
kiStatus: Backlog
internalReference: 1050023
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, una cuenta de franquicia puede tener su registro fulFillmentEndpoint diferente de su nombre de cuenta "oficial", lo cual es una práctica común para arquitecturas específicas de vendedor<>marketplace que necesitan múltiples precios y/o stock para distintos canales de venta utilizando la característica de franquicia con múltiples vendedores para la misma franquicia.

Aunque esta característica funciona en términos de mostrar el contenido necesario para los compradores, cuando los datos relevantes para las ventas, como el precio/existencias, se actualizan para el vendedor principal de una franquicia determinada, las otras cuentas asociadas no se indexan correctamente junto a él, generando una disponibilidad y visualización de precios incoherentes entre los canales de venta de una tienda.



## Simulación



- Para una tienda que tiene múltiples vendedores y 1+ cuentas de franquicia, configurar 2+ vendedores apuntando, en el fulfillmentendpoint, hacia la misma cuenta de franquicia en sus ajustes de vendedor.
- Intente actualizar los datos de precio/stock de cualquier artículo de la cuenta de franquicia.
- Compruebe los datos actualizados en los otros vendedores asociados que utilizan la cuenta de franquicia en sus puntos finales FFM, estarán desactualizados.



## Workaround


Utilice la función salesChannelMapping para implementar esta arquitectura en su lugar





