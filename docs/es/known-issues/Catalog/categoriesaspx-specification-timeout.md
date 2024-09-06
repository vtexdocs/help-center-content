---
title: 'Timeout de la especificación Categories.aspx'
id: 2HNWe5x0VvSe49G88X2y4Y
status: PUBLISHED
createdAt: 2022-02-25T12:33:15.024Z
updatedAt: 2022-11-25T21:46:43.258Z
publishedAt: 2022-11-25T21:46:43.258Z
firstPublishedAt: 2022-02-25T12:33:15.356Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: timeout-de-la-especificacion-categoriesaspx
locale: es
kiStatus: Backlog
internalReference: 433664
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


No hay límite en el registro de los campos de especificación, lo que puede generar tiempos de espera en el administrador del catálogo.


## Simulación



- Registrar una gran cantidad de campos (por ejemplo, más de 1000) en una sola especificación.
- Abrir el administrador de esta especificación o intentar modificar un producto que contenga esta especificación
- Recibir una respuesta de solicitud 404 o 504








## Workaround


Prevenir: No registrar demasiados valores en una misma especificación.
Solucionar: Desactivar la especificación y registrar los valores en varias especificaciones, preferiblemente distribuidas en diferentes categorías
Consejo: No concatene especificaciones, especialmente en la categoría raíz

