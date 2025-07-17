---
title: 'Mejora del algoritmo de selección de Sellers White Label'
id: 2BI2ZElxvLvsfZsly9lLsx
status: PUBLISHED
createdAt: 2021-03-04T00:33:02.559Z
updatedAt: 2021-03-12T00:14:09.119Z
publishedAt: 2021-03-12T00:14:09.119Z
contentType: updates
productTeam: Shopping
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: 2021-03-04-improvement-of-the-seller-white-label-selection-algorithm
locale: es
legacySlug: mejora-del-algoritmo-de-seleccion-de-sellers-white-label
announcementImageID: ''
announcementSynopsisES: '  Entienda cómo funciona la lógica de la elección de sellers para entrega o recogida.'
---

Cuando una tienda tiene múltiples sellers para ampliar su oferta de productos y capacidad logística, puede haber numerosas combinaciones de precio y plazo de entrega disponibles para un mismo SKU. Para garantizar que se muestren las mejores alternativas al comprador, codificamos diversos filtros y reglas de negocio en el [algoritmo de selección de sellers](/es/tutorial/algoritmo-de-selecao-de-white-label-sellers--3MemNQ4pKkWCpMdzI27AHa?&utm_source=autocomplete) del checkout.

El algoritmo de selección de sellers fue modificado con el objetivo de adecuar las opciones de entrega y recogida para el cliente priorizando una mayor cobertura de ítems del carrito. Esto significa que, incluso antes de aplicar los criterios de valor y plazo de entrega, o la distancia para la recogida, el algoritmo buscará garantizar que todos los ítems del carrito están en stock.

Además, el algoritmo minimiza la cantidad de sellers elegidos para realizar la entrega del pedido, con el fin de optimizar los costos de entrega de los pedidos.

## ¿Qué cambió?

Actualizamos el algoritmo de selección de sellers para asegurar la mayor cobertura posible de los ítems del carrito en las opciones de entrega y recogida. El algoritmo ahora garantiza que, en los pedidos que requieren hasta 6 sellers para realizar la entrega, ningún producto quede indisponible en el checkout. 

Además, para elegir los sellers que ofrecen la opción de recogida, el algoritmo siempre priorizará la distancia de la ubicación de referencia sobre los criterios de precio y plazo para la recogida.

<div class="alert alert-warning">
Atención: La actualización del algoritmo se aplica a Sellers White Label, e incluye a <a href="https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa">Cuentas Franquicia</a>. El algoritmo de selección de seller es aplicado cuando el cliente consulta las opciones de entrega. Esto significa que se aplica a la previsión de entrega en el carrito o en la etapa de entrega y recogida del checkout.
</div>

## ¿Por qué realizamos este cambio?
El objetivo de esta mejora es ayudar a reducir la tasa de abandono de carritos por los compradores en las tiendas de los clientes VTEX. Esto impacta directamente en la tasa de conversión.

Con el cambio en el algoritmo, la lógica de selección de los sellers se vuelve más inteligente, mostrando opciones de entrega y recogida más adecuadas a los compradores.

Principales beneficios:
- Mayor disponibilidad de ítems en el carrito de compras.  
- Mejores opciones de entrega y recogida, considerando rapidez y economía.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. La actualización del algoritmo se producirá automáticamente en todas las tiendas.

