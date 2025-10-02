---
title: 'Nueva regla de desempate de pedidos en VTEX prioriza la menor distancia al comprador'
id: 5pSsuRw6WaoUfznwh0HWXe
status: PUBLISHED
createdAt: 2025-07-03T18:17:29.710Z
updatedAt: 2025-10-02T14:50:17.757Z
publishedAt: 2025-10-02T14:50:17.757Z
contentType: updates
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2025-07-03-new-vtex-order-tiebreaking-rule-shortest-distance
locale: es
legacySlug: nueva-regla-desempate-vtex-pedidos-menor-distancia
announcementImageID: 'undefined'
announcementSynopsisES: 'Nueva regla de desempate en VTEX da prioridad a sellers con entregas a menor distancia del comprador.'
---

Con el objetivo de mejorar la experiencia del comprador, hemos implementado una nueva regla para el último criterio de desempate en la [asignación de pedidos en VTEX](/es/tutorial/seleccion-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa). A partir del 7 de julio de 2025, en lugar de una elección aleatoria, el desempate se basará en la menor distancia entre el seller y el comprador.

## ¿Qué cambió?

El flujo actual de asignación de pedidos sigue los pasos que se indican a continuación:

1. Eliminación de sellers que no atienden la [región del pedido](/es/tutorial/configurar-la-regionalizacion-del-seller--32t6wLpQCEnumoh8TjT5fw) o no tienen suficiente stock para al menos un ítem del carrito.
2. Reducción del conjunto de sellers a un máximo de doce, considerando:
    * **Para la entrega**, el menor costo de envío y el plazo.
    * **Para la recogida**: el menor costo de envío, plazo y menor distancia entre el comprador y el punto de recogida .
    * Cantidad de stock como criterio de desempate.
3. Dentro de ese máximo de doce sellers previamente seleccionados, la priorización se lleva a cabo considerando:
    * Menor precio total de los ítems y mayor disponibilidad de productos en el carrito.
    * Menor costo total.
    * Menor plazo de entrega.
    * En caso de empate, se selecciona un seller aleatoriamente.

A partir del 7 de julio de 2025, en caso de empate en el último criterio, se priorizará al seller o conjunto de sellers con la menor distancia hasta el comprador, reemplazando la selección aleatoria.

## ¿Por qué realizamos este cambio?

Antes, el desempate aleatorio no siempre maximizaba la experiencia del comprador ni optimizaba los costos de los sellers. Con esta nueva regla basada en la distancia logramos los siguientes efectos:

* Reducción de hasta un 25 % en la distancia promedio recorrida para realizar entregas.
* Aumento de la eficiencia logística y asignación de hasta el 40 % de los pedidos a los sellers más cercanos al comprador.
* Fomento de una experiencia de compra más sustentable y económica para retailers y consumidores.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción para utilizar la nueva regla de asignación de pedidos. La actualización se implementará automáticamente en todas las tiendas VTEX. 

Si no deseas la implementación de la nueva regla, ponte en contacto con [nuestro Soporte](https://support.vtex.com/hc/es-419/requests).
