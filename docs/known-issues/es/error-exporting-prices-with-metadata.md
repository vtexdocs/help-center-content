---
title: 'Error al exportar precios con metadatos'
id: 7nYPmatUXq57ZUsKHvfYJo
status: PUBLISHED
createdAt: 2023-07-12T11:49:06.370Z
updatedAt: 2023-07-12T11:49:07.185Z
publishedAt: 2023-07-12T11:49:07.185Z
firstPublishedAt: 2023-07-12T11:49:07.185Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: error-al-exportar-precios-con-metadatos
locale: es
kiStatus: Backlog
internalReference: 860290
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En ocasiones, al intentar exportar los precios con la opción de metadatos activada y sin utilizar filtros, puede producirse un error. Comprobando el mensaje en devTools aparecerá algo similar a "Polly broken circuit on service...".

Este error se produce debido a un estrangulamiento en el módulo de catálogo al intentar recuperar los metadatos de muchos skus.


##

## Simulación



1. Exportar los precios con metadatos sin utilizar ningún filtro;
2. En ocasiones aparecerá un mensaje de error;
3. Compruebe en inspect devtools si el mensaje es similar al anterior.



## Workaround


Utiliza los filtros para reducir la cantidad de skus en la hoja de cálculo y el módulo de catálogo devolverá los datos sin problemas.





