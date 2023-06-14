---
title: Actualización automática del rastreo de entregas vía Correios
id: 7hKUU5Qp4AyCW2QaMQC0S6
status: PUBLISHED
createdAt: 2017-08-16T22:07:06.254Z
updatedAt: 2022-12-22T14:52:07.213Z
publishedAt: 2022-12-22T14:52:07.213Z
firstPublishedAt: 2017-08-16T23:00:56.342Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slug: actualizacion-automatica-del-rastreo-de-entregas-via-correios
kiStatus: Backlog
internalReference: 
---

## Sumario

El OMS posee un recurso que acompaña automáticamente las entregas de Correos (entre otras transportadoras), de modo que registre esas modificaciones en el pedido, notifique al cliente por email en cuanto a las últimas modificaciones, y finalmente, marque el paquete como entregado – información también retransmitida a los marketplaces.

Modificaciones recientes de Correos hicieron que nuestra integración dejara de funcionar, siendo necesario reescribir el servicio responsable de esa tarea.

## Simulación

Basta tener un código de rastreo válido en cualquier pedido. Los días siguientes, según haya actualización en ese código de rastreo, debería haber el envío de emails, que notablemente no ocurrirá.

## Workaround

Es posible enviar actualizaciones de rastreo vía API, manteniendo el comportamiento de envío de e-mails. Lo mismo para la confirmación de entrega, que también puede hacerse por la interfaz del OMS.

![2017-08-16 195850](//images.contentful.com/alneenqid6w5/1IPsGBnkKYggY8m6smeqOA/a2a95afc6fb34e7bfe89c1cab2fdb612/2017-08-16_195850.jpg)

La confirmación de entrega hecha vía OMS también se retransmite a los marketplaces.

Otra opción es utilizar soluciones desarrolladas por parceros para el seguimiento de las entregas de Correios, como el [rastreo de XP Agência](https://rastreio.xpagencia.com.br/).

