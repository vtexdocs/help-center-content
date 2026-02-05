---
title: 'Indexación optimizada: más eficiencia para las operaciones omnichannel'
id: 5P6ydhXrf3HKVAISNSJSo5
status: PUBLISHED
createdAt: 2023-05-10T13:42:29.935Z
updatedAt: 2023-05-25T15:28:11.643Z
publishedAt: 2023-05-25T15:28:11.643Z
contentType: updates
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2023-05-10-optimized-indexing-increased-efficiency-for-omnichannel-operations
locale: es
legacySlug: indexacion-optimizada-mas-eficiencia-para-las-operaciones-omnichannel
announcementImageID: 'undefined'
announcementSynopsisES: 'La indexación optimizada permite operaciones omnichannel complejas, con costos y tiempo de procesamiento reducidos.'
---


La [indexación](/es/docs/tutorials/entendiendo-el-funcionamento-de-la-indexacion) es el proceso que se produce automáticamente cada vez que se crea o actualiza un producto en una tienda VTEX. Esto garantiza que los productos que se muestran a los clientes de la tienda estén siempre actualizados con la última versión.

Con el objetivo de mejorar este flujo, hemos rediseñado la indexación para procesar solo lo necesario, lo que reduce significativamente el tiempo de procesamiento y los costos involucrados. Esto permite a las tiendas VTEX crear escenarios[omnichannel](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) complejos con mayor confiabilidad y competitividad.

## ¿Qué cambió?

Antes, la indexación llevaba mucho tiempo, era costosa y más inestable, lo que podía hacer que los productos obsoletos o indisponibles se mostraran a los clientes de la tienda hasta que se completara el proceso. Para que este flujo sea más eficiente y evitar problemas en la experiencia de compra, hemos optimizado la indexación para que se procese solamente la información necesaria.

Aplicamos dos cambios principales para lograr este resultado:

| **Antes** | **Después** |
|---|---|
| **Indexación generalizada:** la actualización de cualquier dato en el registro del producto o SKU, en el precio o en el stock, requería el reprocesamiento de toda la información. | **Indexación granular:** empezamos a diferenciar los cambios realizados en los precios, en el stock y en el Catálogo para procesar solo lo que se ha modificado, en lugar de procesar la información de todos los módulos en cualquier escenario. También hemos perfeccionado los cambios que activan la indexación, evitando activaciones innecesarias. |
| **Indexación global:** para que la versión más actualizada de un ítem estuviera disponible en la tienda y en los resultados de búsqueda, era necesario volver a procesar la información de todos los SKU del producto, de todos sus sellers y de todas las políticas comerciales relacionadas. | **Indexación por seller:** ahora procesamos solo el SKU en el seller que tuvo algún cambio en lugar de reprocesar todos los SKU en todos sus sellers. |

Considera el siguiente ejemplo: un seller cambió el precio de un SKU que venden otros 99 sellers en un marketplace con 10 políticas comerciales. El producto asociado a este SKU tiene 4 SKU más, además del que se ha modificado. Así es como se vería el flujo interno de indexación en este caso:

- **Antes:** el proceso de indexación requería reprocesar los precios, el stock y la información de catálogo de todos los SKU del producto relacionado (5) en cada política comercial (10) y en cada seller (100). Es decir, parte del procesamiento del producto se repetía 550 veces debido a un cambio puntual.
- **Después:** la indexación optimizada permite reprocesar solo el cambio de precio en cada política comercial, considerando únicamente el SKU que se modificó. De esta forma, el cambio se procesa una vez en cada política comercial (10) por parte del marketplace o una vez en el seller que realizó el cambio.

Durante el mes de mayo, aplicaremos la indexación optimizada a todas las cuentas. 

Además, ya hemos realizado otro ajuste en todas las tiendas, incluidas las que utilizan la indexación anterior: hemos eliminado el estado **Indexación pendiente** de la página **Catálogo > Productos y SKUs** en el Admin VTEX, manteniendo la fecha de la última indexación y el botón `Ver en el sitio web` para que sea posible acceder al producto incluso mientras se actualiza alguna información. 

En las tiendas que ya utilizan [el nuevo diseño de la página Productos y SKUs (beta)](/es/docs/tutorials/productos-y-skus), este status no existe, ya que el producto sigue **Publicado** incluso después de los cambios.

## ¿Por qué realizamos este cambio?

El objetivo de la nueva arquitectura de indexación es aumentar la conversión y evitar que los ítems no estén disponibles indebidamente. Con el cambio, ofrecemos una solución más eficaz y coherente que se traduce en mejores experiencias para los clientes de tu tienda.

Esta mejora permite a las tiendas VTEX construir y ampliar operaciones omnichannel complejas a escala, incluyendo modelos de [franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia), [marketplaces](/es/docs/tutorials/estrategias-de-marketplace-en-vtex) con un gran número de sellers y experiencias regionalizadas.

## ¿Qué se necesita hacer?

La indexación optimizada se implementará automáticamente en todas las tiendas VTEX durante el mes de mayo. Ya se eliminó el status **Indexación pendiente** en la página **Catálogo > Productos y SKUs** en el Admin VTEX de todas las cuentas.

