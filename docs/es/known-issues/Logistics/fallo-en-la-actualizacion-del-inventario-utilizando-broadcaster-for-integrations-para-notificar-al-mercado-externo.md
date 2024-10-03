---
title: 'Fallo en la actualización del inventario utilizando Broadcaster for Integrations para notificar al mercado externo'
id: 25IVNGiJJYIl8Ppb3UuNqo
status: PUBLISHED
createdAt: 2022-03-24T19:30:24.948Z
updatedAt: 2022-11-25T21:59:06.502Z
publishedAt: 2022-11-25T21:59:06.502Z
firstPublishedAt: 2022-05-18T18:06:41.252Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: inventory-update-failure-using-broadcaster-for-integrations-to-notify-external-marketplace
locale: es
kiStatus: Fixed
internalReference: 549645
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Hay un flujo en el caso de las cuentas VTEX que utilizan Maketplaces externos y esa cuenta debe notificar a este Marketplace externo sobre la actualización del inventario de SKU. Y debido al caché o a la cola llena esa información sincrónica no avanza correctamente.
Hoy en día en el flujo de ItemAvailability, si hay un error para guardar en el elasticsearch, un trabajador lo guardará en su lugar. Si por alguna razón la cola está llena y un artículo tarda más tiempo en ser persistido en el elasticsearch, la información en la caché puede ser inconsistente.




## Simulación



No hay forma de simular el error, pero verá la actualización incorrecta en el lado de la integración con el valor anterior del inventario.




## Workaround



No hay ninguna solución disponible.

