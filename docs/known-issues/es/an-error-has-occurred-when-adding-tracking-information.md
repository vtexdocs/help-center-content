---
title: '"Se ha producido un error al añadir información de seguimiento'
id: 1gmlrPh9P1KbNI5NNXuImO
status: PUBLISHED
createdAt: 2023-02-08T18:38:55.699Z
updatedAt: 2023-02-08T18:42:05.822Z
publishedAt: 2023-02-08T18:42:05.822Z
firstPublishedAt: 2023-02-08T18:38:56.178Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: se-ha-producido-un-error-al-anadir-informacion-de-seguimiento
locale: es
kiStatus: Backlog
internalReference: 409225
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

Al introducir la información de seguimiento cuando el número de factura contiene espacios, se produce el siguiente error (ya sea a través de la interfaz de usuario o de la API) "`An error has occurred`".

## Simulación


Para simular o realizar el análisis de este escenario, basta con:

1. Inserte una factura (a través de la API) en un pedido con espacios en el número de factura (asegúrese de que la factura no contiene ninguna información de seguimiento);
2. Añada información de seguimiento a través de la interfaz de usuario o la API:
3. Observe que recibe un código de error 500 junto con el mensaje "`An error has occurred`".


## Workaround


Para los pedidos que ya están facturados con el espacio, y el seguimiento se informa más tarde, por desgracia no hay manera de introducir los datos de seguimiento. Sin embargo, para evitar este tipo de problemas, lo ideal es no enviar espacio en la factura, o informar a los datos de seguimiento al insertar la factura.

