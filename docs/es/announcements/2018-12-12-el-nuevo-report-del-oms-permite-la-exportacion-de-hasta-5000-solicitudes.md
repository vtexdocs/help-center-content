---
title: 'El nuevo informe del OMS permite la exportación de hasta 5000 solicitudes'
id: 3KLZdi2MjmUAAKeUWCIU0a
status: PUBLISHED
createdAt: 2018-12-12T17:26:42.584Z
updatedAt: 2020-05-12T15:27:46.656Z
publishedAt: 2020-05-12T15:27:46.656Z
contentType: updates
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: the-new-oms-report-allows-you-to-export-up-to-5000-orders
locale: es
legacySlug: el-nuevo-report-del-oms-permite-la-exportacion-de-hasta-5000-solicitudes
announcementImageID: ''
announcementSynopsisES: 'A partir del 13/12, usted podrá exportar hasta 5 mil pedidos de una sola vez en el módulo de Gestión de Pedidos.'
---

Lanzamos un nuevo informe del modulo de gerenciamiento de pedidos (antiguo OMS), mucho más consistente y con una performance mejorada. Esto permitió que nuestros desarrolladores trabajaran para resolver una demanda de muchos clientes: Entonces, __a partir del 13 de diciembre de 2018__, usted va a poder exportar hasta __5000 pedidos en una sola exportación__.


## Principales ventajas
Al mismo tiempo que atiende las necesidades de negocio de nuestros clientes, esta mudanza no impacta el rendimiento de la plataforma y mantiene la consistencia de los informes generados.

El limite anterior (de 3000 pedidos) garantizaba esa estabilidad y, con el nuevo informe, podemos aumentar este numero.


## Que ha cambiado
El comportamiento del modulo permanece igual desde el ultimo cambio: sí el filtro aplicado contempla mas de 5000 pedidos, __el botón queda indisponible y solo si visualiza cuando el limite sea respetado__.


## Cómo exportar más de 5.000 pedidos
Usted puede continuar exportando mas de 5000 pedidos usando las APIs de gerenciamiento de pedidos (antiguo OMS): [Get Order](https://developers.vtex.com/reference/orders#getorder) y [Get Feed Order Status](https://developers.vtex.com/reference/note).

>⚠️ **Por favor recuerde:** para que funcione, es necesario que usted **cree un range de fecha/hora que incluya no mas de 5000 pedidos**. Con el range definido y el limite respetado, usted va a poder usar la API cuantas veces considere necesario.
