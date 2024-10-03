---
title: 'Error al intentar exportar una gran cantidad de vales'
id: 1IGraA4i3GkEMow4iaO6MI
status: PUBLISHED
createdAt: 2017-04-03T19:51:03.949Z
updatedAt: 2022-12-22T20:45:07.101Z
publishedAt: 2022-12-22T20:45:07.101Z
firstPublishedAt: 2017-04-03T20:08:14.092Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: error-when-trying-to-export-a-large-number-of-vouchers
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La exportación de vale (/admin/Site/Vale.aspx) hoy no utiliza el procesamiento asincrónico (con el envío del archivo por e-mail) y esto termina haciendo que las grandes exportaciones devuelven error al usuario.

## Simulación

1. En el admin, acceder al módulo Catalog.
2. Navegar por el Menú Control de Campañas > Vales;.
3. Exportar una gran cantidad de vales (más de 1000, aproximadamente).


## Workaround

- __Opción 1__: En el mismo listado, aplicar filtros (por fecha/estatus), reduciendo la cantidad de registros.
- __Opción__: Rescatar los vales a través de API.

