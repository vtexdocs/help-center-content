---
title: 'No todos los skus se devuelven en la hoja de especificaciones del producto/sku'
id: 3fo3A4mQ1YjyJH7yWETk8J
status: PUBLISHED
createdAt: 2022-08-31T20:34:22.708Z
updatedAt: 2022-11-25T21:43:32.209Z
publishedAt: 2022-11-25T21:43:32.209Z
firstPublishedAt: 2022-08-31T20:34:23.219Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: no-todos-los-skus-se-devuelven-en-la-hoja-de-especificaciones-del-productosku
locale: es
kiStatus: Fixed
internalReference: 649316
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Este comportamiento ocurre cuando una categoría tiene muchas especificaciones y muchos skus. De esta manera, al exportar la hoja de cálculo eventualmente se va a alcanzar el límite de Excel (alrededor de 65k).

Cuando esto sucede, la hoja de cálculo no devolverá un error, sólo cortará los skus que superen este límite.

El resultado es que no todos los skus serán devueltos en este escenario.



## Simulación



1. Exportar una hoja de cálculo de especificaciones de producto/sku;
2. Verifique que está en el límite de Excel;
3. Verificar si la categoría tiene un gran número de especificaciones y skus en ella;
4. Comprobar que faltan algunos skus en la hoja de cálculo.



## Workaround



Una solución sería comprobar si las especificaciones deben existir en un nivel superior de la categoría o sólo en un nivel inferior. De esta forma se devolverían menos skus y especificaciones y el límite sería más difícil de alcanzar.

