---
title: 'Taxa não considera desconto ao calcular valor aplicado por fórmula'
id: 58sEdphNQ4c4QEY8ewqYOq
status: PUBLISHED
createdAt: 2017-08-01T17:33:07.889Z
updatedAt: 2022-12-22T20:43:05.452Z
publishedAt: 2022-12-22T20:43:05.452Z
firstPublishedAt: 2017-08-15T18:56:51.500Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: taxa-nao-considera-desconto-ao-calcular-valor-aplicado-por-formula
kiStatus: Backlog
internalReference: 
---

## Sumario

El Pricing no está considerando una promoción con descuento cuando creamos una tasa utilizando fórmula que vea el valor total del pedido.

Por ejemplo:
Tasa configurada como ((total + envío) * 0.1)

|||
| - | - |
| Subtotal | 100,00 |
| Descuentos | 10.00 |
| Entrega | 20.00 |
| __Tasa__ | __12,00__ |
| Total | 122,00 |


Por ejemplo, debería ser:
Tasa configurada como ((total + envío) * 0.1)

Por ejemplo, debería ser:
Tasa configurada como ((total + envío) * 0.1)

|||
| - | - |
| Subtotal | 100,00 |
| Descuentos | 10.00 |
| Entrega | 20.00 |
| __Tasa__ | __11,00__ |
| Total | 121,00 |

En el ejemplo de cómo debería ser, se puede observar que se está calculando el valor total en la fórmula de la Tasa considerando el Descuento de 10 pesos.

## Simulación

Crear una promoción cualquiera y una tasa con fórmula ex: ((total + envío) * 0.1)
Simular en el carrito un producto que contenga esa promoción y esa tasa.
El valor del impuesto se calculará sobre la base del valor total, sin considerar el descuento de la promoción.

## Workaround

No hay Workaround.

