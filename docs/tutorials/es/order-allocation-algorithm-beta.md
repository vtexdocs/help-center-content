---
title: 'Order Allocation Algorithm (Beta)'
id: 1zLCAyEdnVe3EsE9Kz88xA
status: DRAFT
createdAt: 2022-07-12T23:39:25.008Z
updatedAt: 2023-08-14T17:29:11.705Z
publishedAt: 
firstPublishedAt: 2022-07-12T23:51:23.186Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slug: order-allocation-algorithm-beta
locale: es
legacySlug: order-allocation-algorithm-beta
subcategory: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con <a href= "https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.

**Order Allocation Algorithm** es el algoritmo de la plataforma VTEX que busca seleccionar el seller que enviará los pedidos al menor costo dado por las [plantillas de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127) de las [transportadoras](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) configuradas.

**Order Allocation Algorithm** funciona de distintas formas para los envíos de tipo recogida y entrega, según se muestra en la tabla a continuación:

| **Entrega** | **Recogida** |
| ---------- | ---------- |
| 1. Después que el consumidor informa su ubicación, en la fase del carrito, el algoritmo identifica la dirección. | 1. Igual. |
| 2. El algoritmo verifica qué zonas de envío cubren la dirección. | 2. Igual. |
| 3. El algoritmo identifica qué opciones de envío están asociadas a las [zonas de envío](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#zonas-de-envio). | 3. Igual. |
| 4. El algoritmo busca los cálculos de entrega (SLA) de cada una de las [opciones de envío](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#opciones-de-envio). | 4. Igual. |
| 5. Para cada cálculo de entrega, el algoritmo busca calcular cuál es la combinación de [puntos de fulfillment](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#puntos-de-fulfillment) y [políticas de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) que cubre los ítems del carrito al menor costo posible. El costo se calcula a partir de la [plantilla de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127). | 5. Para cada cálculo de envío, el algoritmo ordena los [puntos de fulfillment](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#puntos-de-fulfillment) que tienen ítems del carrito en stock según la distancia entre el [punto de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) y la ubicación del consumidor de menor a mayor distancia. Si hay puntos de recogida con la misma distancia, el desempate se decide por el costo de la [plantilla de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127). |
| 6. Para cada opción de envío aplicable, el algoritmo calcula la tarifa que se mostrará al consumidor en el checkout según la regla de precios configurada en la opción de envío. | 6. El algoritmo calcula la tarifa que se mostrará al consumidor en el checkout según la regla de precios configurada en la opción de envío. |
| 7. En la fase de checkout, se muestran al consumidor las opciones de envío seleccionadas junto con la previsión de costo y plazo de envío. | 7. En la fase de checkout, se muestran al consumidor todos los puntos de recogida que cubren los ítems del carrito. |

>ℹ️ El criterio de prioridad del [algoritmo actual](https://help.vtex.com/es/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) es buscar la menor división de paquetes del pedido. **Order Allocation Algorithm** tiene como criterio principal buscar el menor costo de envío para el administrador de la tienda.

Las próximas secciones presentan los detalles del funcionamiento del algoritmo y se dividen en:

- [Zonas de envío](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#zonas-de-envio)
- [Opciones de envío](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#opciones-de-envio)
- [Puntos de fulfillment](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#puntos-de-fulfillment)

## Zonas de envío

La zona de envío es una delimitación geográfica que establece la región en la que son válidas determinadas opciones de envío. Una opción de envío siempre tiene las mismas condiciones, aunque se aplique a zonas de envío diferentes. A continuación, se muestra un ejemplo de cómo las opciones de envío se relacionan con las zonas de envío:

> Ejemplo: hay dos opciones de envío para la zona de envío A, una se llama _Express_, con entrega en 2 días laborales, y otra llamada _Normal_, con entrega en 5 días laborales. Las opciones de envío para la zona de envío B son _Súper Express_, con entrega en 1 día laboral, y _Normal_, con entrega en 5 días laborales.

Desde el momento en que el consumidor informa su ubicación en el carrito, el **Order Allocation Algorithm** identifica qué zonas de envío cubren esa ubicación y qué [opciones de envío](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#opciones-de-envio) configuradas por el administrador de la tienda son válidas para la región.

## Opciones de envío

La configuración de una forma de envío válida para una zona de envío se llama [opción de envío](https://help.vtex.com/es/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL). A través del módulo **Opciones de envío**, el administrador de la tienda dispone de un mismo entorno para crear y gestionar las opciones de envío. Al configurar una opción de envío, el administrador de la tienda determina:

- El nombre de la opción de envío que aparece en el checkout para el consumidor.
- El tipo de envío, si es envío (entrega) o recogida.
- El plazo de envío.
- Las zonas de envío para las que la opción de envío es válida.
- La tarifa de envío que se cobrará al consumidor.

Después de que el **Order Allocation Algorithm** identifica las opciones de envío válidas para la ubicación del consumidor, el algoritmo calcula las combinaciones de [puntos de fulfillment](https://help.vtex.com/es/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA#puntos-de-fulfillment) de la tienda que cubren el carrito dentro del plazo previsto.

## Puntos de fulfillment

Un punto de fulfillment es un espacio físico con productos que pueden ser enviados para cumplir el pedido del consumidor. Las tiendas y los centros de distribución son algunos ejemplos.

La red logística de la tienda permite que un pedido sea atendido por múltiples combinaciones de puntos de fulfillment. El **Order Allocation Algorithm** busca las combinaciones que ofrecen el menor costo para el administrador de la tienda.

Al analizar las combinaciones de puntos de fulfillment, el algoritmo toma en cuenta:

- El local de donde se enviará el ítem del pedido.
- La [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) utilizada.

A través de la política de envío, el **Order Allocation Algorithm** simula las combinaciones de puntos de fulfillment buscando las que cumplen con el pedido al menor costo para el administrador de la tienda. El proceso se realiza mediante consultas a la [plantilla de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127) y análisis de costo de las [transportadoras](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).

>ℹ️ En el [algoritmo actual](https://help.vtex.com/es/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa), muchas veces el administrador de la tienda configura la [plantilla de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127) con los valores que desea presentar al consumidor en el checkout y no con el costo real de las transportadoras. Con el **Order Allocation Algorithm**, el administrador de la tienda no tiene que tener en cuenta cómo el costo de la plantilla de envío se refleja en la experiencia de compra del consumidor, ya que ahora esto lo determina la configuración de las [opciones de envío](https://help.vtex.com/es/tutorial/shipping-options-beta--7gsdck3519Z3VPqzwFFHJL). Además, el **Order Allocation Algorithm** es más preciso al tomar como referencia los costos reales de las transportadoras.

Después de analizar las posibles simulaciones, el **Order Allocation Algorithm** determina un resultado de combinaciones de puntos de fulfillment para cada opción de envío. En el checkout, se muestran al consumidor todas las opciones de envío que tienen por lo menos una combinación válida de puntos de fulfillment que cumplen con el pedido.
