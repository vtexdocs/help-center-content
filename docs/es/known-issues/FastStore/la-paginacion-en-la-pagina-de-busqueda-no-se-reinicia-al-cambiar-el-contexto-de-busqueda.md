---
title: 'La paginación en la página de búsqueda no se reinicia al cambiar el contexto de búsqueda'
id: 2lNL95NDZvO8NqxhJDrA6G
status: PUBLISHED
createdAt: 2023-07-06T19:54:29.289Z
updatedAt: 2023-07-06T19:58:59.059Z
publishedAt: 2023-07-06T19:58:59.059Z
firstPublishedAt: 2023-07-06T19:54:29.968Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: pagination-on-searchpage-doesnt-reset-when-changing-search-context
locale: es
kiStatus: Scheduled
internalReference: 857392
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Mientras navegamos por una determinada página de un PLP, realizamos una búsqueda para mostrar más resultados, y cambiamos el contexto para navegar por un departamento diferente, el parámetro de paginación se mantendrá y el resultado de la búsqueda comenzará en la nueva categoría en la misma página en la que estábamos anteriormente.


##

## Simulación



Siguiendo los pasos:


- Vaya a: https://starter.vtex.app/computer---software
- Haga clic en Cargar más productos (el parámetro de página en su URL va a cambiar)
- Haga clic en un departamento diferente (por ejemplo Tecnología)
- Compruebe que la página de tecnología se iniciará con la paginación que estaba anteriormente



## Workaround


No hay ninguna solución disponible.





