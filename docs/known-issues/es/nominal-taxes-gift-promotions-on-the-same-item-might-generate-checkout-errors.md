---
title: 'Los impuestos nominales + las promociones de regalo en el mismo artículo pueden generar errores en el proceso de pago.'
id: 6zsBxIeKSPKX9yVRA5jcct
status: PUBLISHED
createdAt: 2024-08-29T14:57:35.310Z
updatedAt: 2024-08-29T14:57:36.770Z
publishedAt: 2024-08-29T14:57:36.770Z
firstPublishedAt: 2024-08-29T14:57:36.770Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: los-impuestos-nominales-las-promociones-de-regalo-en-el-mismo-articulo-pueden-generar-errores-en-el-proceso-de-pago
locale: es
kiStatus: Backlog
internalReference: 1089066
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, al configurar un impuesto nominal junto con promociones de regalo en el mismo artículo, el módulo de promociones, al comunicarse con la aplicación de pago, podría generar un redondeo diferente del valor del impuesto



## Simulación


La simulación de este tipo de problema es extremadamente específica y difícil de reproducir. Requiere un conjunto de promociones de regalo que se apliquen sobre el mismo artículo y un impuesto nominal.

Aunque sea difícil reproducir el comportamiento, los pasos a seguir serían los siguientes:

1 - Crear un impuesto nominal para un SKU específico, preferiblemente con un número impar (como 4.99), los números pares podrían no tener este problema.
2 - Crear una promoción de regalo para este SKU
3 - Añada un número par de SKU al carrito
4 - Intente cerrar el pedido, es posible que aparezca una pantalla de error y que el pedido no se cierre. Puede estar seguro de que este es el problema si, al cambiar la cantidad de artículos en el pedido, el problema desaparece.

Nota: esto ocurre para combinaciones muy específicas de (cantidad de artículos en la cesta) + (valores de impuestos) + (promociones de regalo).



## Workaround


O bien utilizar un impuesto porcentual en su lugar, otros tipos de promociones aparte de los regalos

O

Abre un ticket al equipo de VTEX y solicita una actualización del modo de redondeo promocional de tu tienda a "preciso". Esto, sin embargo, generará una posible división entre los artículos en el módulo de pago, lo que no cambia nada en términos del valor del pedido, pero podría no ser visualmente atractivo para el cliente.






