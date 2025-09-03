---
title: 'Cambio en el formato del campo Authorized Date de la plantilla de exportación de pedidos busca garantizar la calidad de nuestros datos'
id: 4bEpPLIkpG90dJ3QCIujx1
status: CHANGED
createdAt: 2019-05-23T13:42:37.232Z
updatedAt: 2020-11-27T19:40:28.883Z
publishedAt: 2019-12-31T15:13:08.423Z
contentType: updates
productTeam: Post-purchase
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: 2019-05-23-changes-in-format-for-the-orders-export-spreadsheet-authorized-date-field
locale: es
legacySlug: cambio-en-el-formato-del-campo-authorized-date-de-la-plantilla-de
announcementImageID: 'undefined'
announcementSynopsisES: 'Nuevo formato del campo Authorized Date garantiza un entendimiento más claro de la fecha en que el pedido fue autorizado'
---

A partir del 12 de junio de 2019, haremos un cambio en el formato del campo `Authorized Date`, que puede encontrarse en el [informe de pedidos](https://help.vtex.com/es/tutorial/exportando-pedidos-no-gerenciamento-de-pedidos--tutorials_6417) exportado desde el módulo de Gestión de Pedidos.

## Principales Ventajas 

El nuevo formato del campo `Authorized Date` garantiza un entendimiento más claro y fácil de la fecha en que el pedido fue autorizado. Además, sigue el estándar de las otras fechas que ya existen en este informe, haciendo más fácil e intuitiva la manipulación de los datos.

## ¿Qué necesita hacer?

Si utiliza alguna macro o automatización que tenga en cuenta el campo `Authorized Date`,  es necesario estar atento para recibir el campo en el formato `yyyy-MM-dd HH:mm:ss`, donde:

- `yyyy` es el año con 4 dígitos
- `MM` es el mes con dos dígitos
- `dd` es el día con dos dígitos 
- `HH` es la hora, en formato 24 horas, con dos dígitos
- `mm` son los minutos con dos dígitos
- `ss` son los segundos con dos dígitos
