---
title: 'Cómo funciona la competencia de promociones'
id: tutorials_2270
status: PUBLISHED
createdAt: 2017-04-27T21:55:27.997Z
updatedAt: 2023-05-19T21:54:05.177Z
publishedAt: 2023-05-19T21:54:05.177Z
firstPublishedAt: 2017-04-27T23:03:50.791Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: entendiendo-la-competencia-de-las-promociones-2
locale: es
legacySlug: entendiendo-la-competencia-de-las-promociones-2
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

El módulo Promociones sigue una lógica para definir qué promoción se aplicará a una compra determinada, al igual que [Checkout](https://help.vtex.com/es/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) selecciona qué seller realizará el fullfilment del pedido. Esta lógica se denomina competencia de promociones.

Estos son los escenarios donde ocurre la competencia de promociones:

- Promociones con el mismo tipo de descuento
- Aplicación de más de una promoción en el mismo ítem
- Promociones no [configuradas](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricciones-y-limitaciones-de-uso) para permitir que las promociones se acumulen.

Para entender cómo funciona la selección de la promoción que se aplicará, explicamos a continuación algunos conceptos del módulo Promociones.

- [Efectos de las promociones](#efectos-de-las-promociones)
- [Ordenación de aplicación de las promociones](#ordenacion-de-aplicacion-de-las-promociones)
- [Acumulación de promociones](#acumulacion-de-promociones)
- [Estrategia de competencia entre las promociones](#estrategia-de-competencia-entre-las-promociones)

## Efectos de las promociones

Los efectos de las promociones están relacionados con el beneficio que cada promoción ofrece. Existen cuatro tipos:

- **Descuento sobre el precio:** son promociones que aplican un descuento porcentual o nominal sobre el valor del producto. Aquí se incluyen algunos descuentos del tipo [promoción regular](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI), [descuento progresivo](https://help.vtex.com/es/tutorial/desconto-progressivo--tutorials_324) y cualquier otra mecánica que incida en el precio de un ítem.
- **Descuento en el envío:** son las [promociones con descuento de envío](https://help.vtex.com/es/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW).
- **Regalos:** son promociones que otorgan un regalo al cliente.
- **Fórmula:** son las promociones con tipo de descuento nominal basado en [fórmula](https://help.vtex.com/es/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV), que es una de las opciones dentro de la promoción regular.

## Ordenación de aplicación de las promociones

La ordenación es el proceso que define en qué orden se aplicarán las promociones. Esto es importante para entender cuál será el precio final de los ítems agregados al carrito. La ordenación se basa en dos criterios:

- [Ordenación por tipo de promoción y descuento](#ordenacion-por-tipo-de-promocion-y-descuento)
- [Ordenación por valor](#ordenacion-por-valor)

### Ordenación por tipo de promoción y descuento

Las promociones aplicadas en el carrito respetan el siguiente orden:

1. Porcentual
2. Descuento Nominal (Monto especifico)
3. Precio máximo
4. Compre Junto (no es una promoción regular)
5. Envío porcentual
6. Envío nominal
7. Regalos
8. Fórmula

### Ordenación por valor

Las promociones aplicadas al carrito que sean del mismo tipo se comparan por su valor de descuento. A este respecto, el módulo Promociones intenta siempre aplicar la promoción más ventajosa para el comprador.

En las promociones del tipo regalo, el orden viene dado por la promoción que ofrezca el mayor número de regalos.

Ejemplo:

- Promoción 1: 30% de descuento sobre el valor del producto.
- Promoción 2: 50% de descuento

Se dará prioridad a aquella promoción que otorgue el mayor descuento, es decir, el carrito aplicará la **Promoción 2** y a continuación la **Promoción 1**. 

La **Promoción 1** se aplicará sobre el ítem con el valor previamente descontado por la **Promoción 2**.

## Acumulación de promociones

Cuando las promociones se [configuran](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricciones-y-limitaciones-de-uso) marcando la casilla Aplicar con otras promociones, estas, sean del tipo que sean, siempre se aplicarán al carrito mientras se cumplan las condiciones establecidas. 

Además, todas ellas inciden sobre el valor que ya se descontó al aplicarse la promoción que ganó la competencia de las no acumulativas. El orden de las promociones seleccionadas seguirá la ordenación por tipo y valor, tal y como se describe en el punto 1. 

Por lo tanto, la secuencia de aplicación es:

![promocao3 ES](https://images.ctfassets.net/alneenqid6w5/1CAcjiuVQECwqcoA288Aey/251351f394db394a008ccdd699e47c6f/promocao3_ES.png)

<div class="alert alert-warning">
Los pedidos de origen <a href="https://help.vtex.com/es/tutorial/configurar-promocao-para-marketplace--tutorials_406">Marketplace</a> ((proporcionados por la tienda) y Fulfillment (entregados por la tienda) no permiten la acumulación de promociones, ya que el uso de las mismas en marketplaces VTEX o externos se limita a algunos tipos específicos.</div> 

## Estrategia de competencia entre promociones

Después de entender cómo se ordenan y acumulan las promociones, vamos a explicar cómo funciona la competencia de promociones no acumulativas.

La selección de cada promoción considera únicamente promociones del mismo tipo de descuento (como se describe en [Efectos de promociones](#efectos-de-promociones)) y que puedan aplicarse, al menos, a un producto en común.

Las promociones del mismo o distinto tipo que aplican a productos diferentes no compiten entre sí, es decir, serían automáticamente acumulativas.

Consulta a continuación las dos estrategias de competencia de promociones: 

- [Competencia por escenario](#competencia-por-escenario)
- [Competencia por ítem](#competencia-por-item)

<div class="alert alert-info">
De manera predeterminada, todas las cuentas siguen la estrategia de competencia por escenario. Si el modelo de competencia por ítem se adapta mejor a las necesidades de tu negocio, <a href="https://help.vtex.com/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM">abre un ticket</a> con nuestro equipo de soporte y solicita el cambio.</div>

### Competencia por escenario

La competencia por escenario sigue la lógica de agrupar aquellas promociones que no compiten con los mismos productos. Entonces, dentro de cada grupo creado, se realiza una comparación para determinar si es el grupo, o bien alguna promoción individual, la que ofrece mayores ventajas al cliente. 

La que conceda el mejor descuento se aplicará al carrito. Fíjate en los ejemplos siguientes:

#### Ejemplo 1

Pedro va a comprar una camiseta de 10 USD + 4 USD de envío. En este pedido pueden aplicarse cinco promociones, todas ellas previamente [configuradas](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricciones-y-limitaciones-de-uso) con la casilla `Aplicar con otras promociones desmarcada`, para no acumular promociones, excepto la primera:

| Promociones acumulativas | Promociones no acumulativas |
| ----------- | ----------- |
| 10 % de descuento | Precio de envío: máximo 12 USD |
| X | 80 % de descuento en el envío |
| X | Descuento nominal de 50 USD |
| X | Regalo al comprar la camiseta |

El carrito mostrará que el precio final de la camiseta es de 4.50 USD y el de envío 0.80 USD. El sistema de promociones aplica la lógica de competencia entre promociones:

- Camiseta de **10 USD**.
   - Recibe descuento nominal de *5 USD*. Nuevo valor: **5 USD**.

- Precio de envío: **4 USD**.
   - Se aplica un descuento del *80%*. Nuevo valor: **0.80 USD**.
   - Se aplica un precio de envío máximo de **12 USD**, pero no es válido porque el valor ya es inferior.

A continuación, se aplican las promociones acumulativas:

- Camiseta de ~~10 USD~~ quedaria en **5 USD**.
   - Recibe un **10%** de descuento porcentual. Nuevo valor: **4.50 USD**.

Así, el importe final de la compra de Pedro, quedaría:

- Camiseta por **4.50 USD**
- Envío por **0.80 USD**
- Regalo al comprar la camiseta

#### Ejemplo 2

Carla creó un carrito con 1 camiseta y 1 par de zapatos. Estos ítems forman parte de colecciones:

| Colección | Ítems | Valores |
| ----------- | ----------- |  ----------- |
| 1 | Camiseta | 10 USD |
| 1 | Calzado | 50 USD |
| 2 | Camiseta | 10 USD |

- Promotions:
   1. **10%** de descuento en la primera colección. Configurado para no acumular en el campo `Aplicar con otras promociones`.
   2. **25%** de descuento en la segunda colección. Configurado para no acumular en el campo `Aplicar con otras promociones`.
   3. **5%** de descuento en el producto. Configurado para acumular en el campo `Aplicar con otras promociones`. Incluye todos los productos del carrito.

Como las dos primeras promociones se aplican al producto camiseta y no están marcadas para aplicarse con otras promociones, entran en competencia. 

Cuando compiten, el módulo Promociones elegirá la promoción que proporcione el mejor descuento para el cliente. A continuación, se presenta un ejemplo de competencia por escenario.

##### Escenario 1: aplicación de la promoción 1 del 10 % de descuento

| Ítems | Promociones aplicadas | Valores |
| ----------- | ----------- |  ----------- |
| Camiseta | Promoción 1 y Promoción 3 | 8.55 USD |
| Calzado | Promoción 1 y Promoción 3 | 42.75 USD |

La camiseta tendría un precio de **8.55 USD**, aplicando el descuento de la *promoción del 10%* y *descuento del 5%* sobre el valor del producto. El calzado tendría un precio de: **42.75 USD** al aplicarse  la *promoción 1 del 10%* más el *descuento del 5%* sobre el producto.

El valor total del pedido quedaría en **51.30 USD**.

| Ítems | Promociones aplicadas | Valores |
| ----------- | ----------- |  ----------- |
| Camiseta | Promoción 2 y Promoción 3 | 7.12 USD |
| Calzado | Promoción 2 y Promoción 3 | 47.50 USD |

La camiseta tendría un precio de **7.12 USD**, aplicando el descuento de la *promoción 2 del 25%* más el *descuento del 5%* sobre el valor del producto. El calzado tendría un precio de **47.50 USD**, aplicando solamente el **5% de descuento** sobre el producto, ya que no forma parte de la colección de la promoción 2.

En este escenario, el valor total del pedido quedaría en **54.62 USD**.

En resumen, como en el escenario 1 el valor final del pedido es más barato para el cliente de la tienda, se ajusta a la premisa de ofrecer el mejor descuento posible. Por lo tanto, VTEX opta por aplicar la promoción 1 del 10 % para ambos ítems. Esto se debe a que las promociones 1 y 2 no han podido aplicarse por no estar marcada la casilla Aplicar con otras promociones.

### Competencia por ítem

El módulo Promociones también puede considerar el mayor descuento para el cliente en cada ítem del carrito. Para ello, el sistema tiene en cuenta las promociones aplicables a un ítem y selecciona la mejor, en lugar de considerar una combinación de promociones a nivel del carrito.

En la competencia por ítem, lo que ocurriría siguiendo los datos del ejemplo anterior sería:

| Colección | Ítems | Valores |
| ----------- | ----------- |  ----------- |
| 1 | Camiseta | 10 USD |
| 1 | Calzado | 50 USD |

- Promotions:
   1. **10%** de descuento en la primera colección. Configurado para no acumular en el campo `Aplicar con otras promociones`.
   2. **25%** de descuento en la segunda colección. Configurado para no acumular en el campo `Aplicar con otras promociones`.
   3. **5%** de descuento en el producto. Configurado para acumular en el campo `Aplicar con otras promociones`. Incluye todos los productos del carrito.

Aplicando la promoción, los valores serían:

| Ítems | Promociones aplicadas | Valores |
| ----------- | ----------- |  ----------- |
| Camiseta | Promoción 2 | 7.50 USD |
| Calzado | Promoción 1 | 45.00 USD |

La camiseta tendría un precio de **7.50 USD** con el *descuento de la promoción 2, del 25%*. El calzado tendría un precio de **45.00 USD** con el descuento de la *promoción 1, del 10%*.

En este escenario, el valor total del pedido quedaría en **52.50 USD**.

Esta opción ofrecería un descuento menor al cliente que la selección realizada por [competencia por escenario](#competencia-por-escenario). Por lo tanto, esta configuración depende del objetivo de negocios definido por la tienda. 

En caso de que el modelo de competencia por ítem se adapte mejor a las necesidades de tu negocio, [abre un ticket](https://help.vtex.com/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) con nuestro equipo de soporte y solicita el cambio.
