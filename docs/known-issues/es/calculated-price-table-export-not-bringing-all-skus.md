---
title: La exportación de la tabla de precios calculados no trae todos los skus
id: 3pJcwSnZG1nO0YjIPCnfyV
status: PUBLISHED
createdAt: 2022-12-23T13:41:21.656Z
updatedAt: 2022-12-23T13:41:22.123Z
publishedAt: 2022-12-23T13:41:22.123Z
firstPublishedAt: 2022-12-23T13:41:22.123Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: la-exportacion-de-la-tabla-de-precios-calculados-no-trae-todos-los-skus
kiStatus: Backlog
internalReference: 722005
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al exportar la tabla de precios calculados en la interfaz de usuario del módulo de precios, a veces no se exportan todos los skus.

El tamaño de la hoja de cálculo puede cambiar si se exporta más de una vez, obteniendo menos resultados de los esperados.


##

## Simulación



Este escenario es difícil de reproducir porque no siempre ocurre.


1. Vaya a la interfaz de usuario del módulo de precios y asegúrese de que no está utilizando ningún filtro
2. Exporte la tabla de precios calculados más de una vez
3. Compruebe la cantidad de líneas de la hoja de cálculo.
4. Exporta de nuevo la Tabla de Precios Calculados y comprueba si el tamaño es el mismo que el anterior. A veces no será así.



## Workaround



Dado que este escenario no ocurre siempre, asegúrese de descargar más de una vez la hoja de cálculo para conocer el tamaño real de la Tabla de Precios Calculados. Puede utilizarla como referencia.

