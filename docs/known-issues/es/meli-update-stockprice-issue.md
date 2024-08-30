---
title: 'Actualización de MELI Emisión de acciones/precios'
id: 7LQ81vG5nsbBn4Wj7Z9VJe
status: PUBLISHED
createdAt: 2023-12-12T10:22:28.961Z
updatedAt: 2024-01-10T17:51:59.853Z
publishedAt: 2024-01-10T17:51:59.853Z
firstPublishedAt: 2023-12-12T10:22:29.656Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: actualizacion-de-meli-emision-de-accionesprecios
locale: es
kiStatus: Fixed
internalReference: 939329
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente tenemos un escenario muy específico que afecta a pocos casos de SKUs que no pueden actualizar el stock en MELI.


##

## Simulación



Lo que ocurre es que en algunos casos el campo seller_custom_field que debería rellenarse con la SKU VTEX, en realidad está en blanco, por lo que la integración no es capaz de actualizar el stock de MELI en estos casos.



## Workaround


Rellenar la hoja de cálculo de migración con estos casos y enviar al equipo de producto para establecer nuestro SKU dentro de seller_custom_field.





