---
title: 'Promoción regular con descuento nominal basado en la fórmula'
id: 2Pwrq6THyGViNedQG381jV
status: PUBLISHED
createdAt: 2022-04-18T16:51:30.736Z
updatedAt: 2022-04-18T23:30:41.740Z
publishedAt: 2022-04-18T23:30:41.740Z
firstPublishedAt: 2022-04-18T20:27:39.893Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: promocion-regular-con-descuento-nominal-basado-en-la-formula
locale: es
legacySlug: promocion-regular-con-descuento-nominal-basado-en-la-formula
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Al crear una [promoción regular](https://help.vtex.com/es/tutorial/registro-promocion-regular--tutorials_327) en **Promociones** > **Promociones** > <code>Nueva Promoción</code> > <code>Promoción Regular</code>, una de las opciones disponibles al momento de elegir el tipo y el valor del descuento es el __Descuento nominal basado en la fórmula__.

Al seleccionar este tipo de descuento, deberás crear una fórmula para definir cuál será el cálculo del descuento que se aplicará. En este artículo, explicaremos cómo crear una fórmula que cumpla con los objetivos de tu promoción.

![tipo-descuento-formula](https://images.ctfassets.net/alneenqid6w5/5NTM35GkPQtUzA6CKDco9q/cb74d4e22b46f159aee6f51a09fe4646/desc-es.PNG)

En general, la fórmula para calcular el descuento nominal de la promoción sigue la misma lógica que las [fórmulas de Microsoft Excel](https://support.microsoft.com/pt-br/office/f%C3%B3rmulas-e-fun%C3%A7%C3%B5es-294d9486-b332-48ed-b489-abe7d0f9eda9), es decir que puedes usar [variables](#variables) (`total`, ` freight` y `quantity`), hacer [operaciones](#operaciones) (suma, resta, multiplicación y división) y aplicar [funciones](#funciones) (`min` y `max`).

## Variables

Para escribir la fórmula de tu promoción, puedes usar las variables que se describen a continuación.

| **Variable** | **Descripción** |
|---|---|
| `total` | Suma de los precios de los productos seleccionados. |
| `freight` | Valor del envío. El envío que se use en la fórmula será el de menor valor disponible para el pedido, independientemente de la elección del cliente. |
| `quantity` | Cantidad total de ítems en el carrito. |

## Operaciones

Para realizar operaciones matemáticas, usa los signos convencionales en tu fórmula:

| **Operación** | **Signo** |
|:---:|:---:|
| Suma | `+` |
| Resta | `-` |
| Multiplicación | `*` |
| División | `/` |

Puedes hacer una multiplicación para calcular el porcentaje de descuento deseado usando las [variables](#variables) que quieras. Por ejemplo: para aplicar un descuento del 50% sobre el valor total de los productos seleccionados, la fórmula sería `total * 0.5`.

Para priorizar un cálculo antes que otro, escribe entre paréntesis el cálculo que se debe realizar primero`()`. Por ejemplo: si una tienda quiere aplicar un descuento del 40% sobre el valor total más el envío, la fórmula debe ser `(total + freight) * 0.4`.

>ℹ️ Usa siempre el punto (`.`) como separador decimal.

## Funciones

Si quieres, puedes usar la función `min` para [limitar el valor del descuento](#limitar-el-valor-del-descuento) o la función `max` para [priorizar el mayor descuento posible](#priorizar-el-mayor-descuento-posible). Sigue leyendo para obtener más detalles sobre estas posibilidades.

>ℹ️ Al usar las funciones, debes incluir un espacio entre la función y los paréntesis de apertura. Por ejemplo: `min (total * 0.2,  10)`.

### Limitar el valor del descuento

Si quieres limitar el valor máximo del descuento, puedes usar la función `min`, que arroja el valor más bajo de un conjunto de valores como resultado.

Imagina el siguiente escenario: una tienda quiere aplicar un descuento del 20% sobre el valor total del carrito, limitado a $ 10.

En este caso, la fórmula debe indicar que si el `total * 0.2` es mayor que `10`, el descuento aplicado será solo de `10`. Para lograrlo, puedes escribir la fórmula con la función `min`, tal como se muestra a continuación:

```
min (total * 0.2, 10)
```

De esta manera, la promoción aplicará el valor de descuento más bajo en cada caso y comparará el cálculo del 20% del total con el valor límite de $ 10. En los escenarios que se muestran a continuación, podrás ver la aplicación práctica de esta promoción.

#### Escenario 1

Un cliente agregó al carrito un ítem cuyo precio es $ 45. Al calcular el 20% del total del precio, el resultado es 9, ya que `total * 0.2 = 9.` Como 9 está por debajo del valor límite de descuento, el descuento que se aplicará será de $ 9.

![scenario1-es](https://images.ctfassets.net/alneenqid6w5/22tobaXfukykfntCXBpISS/d85aee72b0ba9e25aa9174d1adfa8bd6/scenario1-es.png)

#### Escenario 2

Otro cliente agregó al carrito un ítem cuyo precio es de $ 2600. Al calcular el 20% de ese valor, el resultado es 520, ya que `total * 0.2 = 520.` Como este valor está por encima del límite ($ 10), el descuento aplicado será de $ 10.

![scenario2-es](https://images.ctfassets.net/alneenqid6w5/6M3rMa2VKBXNtDV44J3x5w/281dfb618c4116d64023a38182f775ae/scenario2-es.png)

#### Escenario 3

Un tercer cliente agregó dos ítems al carrito: un ítem tiene un precio de $ 100, y el otro, $ 2600. La suma de estos valores da como resultado $ 2700, por lo tanto, `total = 2700`. Al calcular el 20% del valor total, obtenemos un resultado de 540, ya que `total * 0.2 =  540`. Como este valor está por encima del límite ($ 10), el descuento total aplicado será de $ 10.

![scenario3-es](https://images.ctfassets.net/alneenqid6w5/2lYHI6Iw0pZ8sOyN282TDr/bc0bd5ef72252b31779b9b6df92fbdf4/scenario3-es.png)

El descuento total de $ 10 se distribuye proporcionalmente entre los ítems, teniendo en cuenta el precio y la cantidad de cada uno. Esta distribución la realiza la plataforma de manera automática, siguiendo la lógica que se explica a continuación:

Primero, el valor total del descuento ($ 10) se divide por el valor total de los ítems ($ 2700), de la siguiente forma: `10 / 2700 = 0,0037037`.

Luego, si multiplicamos 0.0037037 por el valor del primer ítem ($ 100), obtenemos el siguiente resultado: `0,0037037 * 100 = 0,37037037`. Entonces, el monto descontado del precio del primer ítem se redondeará en $ 0.37. El precio final será $ 99.63.

Si multiplicamos 0.0037037 por el valor del segundo ítem, obtenemos el siguiente resultado: `0,0037037 * 2600 = 9,62962962963`. Entonces, el monto descontado del precio del segundo ítem se redondeará en $ 9.63. El precio final será $ 2590.37.

### Priorizar el mayor descuento posible

Para priorizar el mayor descuento posible, puedes usar la función `max`, que arroja el valor más alto de un conjunto de valores como resultado.

Imagina que una tienda quiere hacer una promoción que aplique un descuento del 10% sobre el valor total del pedido más el envío, con un descuento mínimo de $ 5.

La fórmula debe estipular que si (`total + freight) * 0.1` es menor que `5`, el descuento aplicado será de `5`. Por ende, se debe estructurar de este modo:

```
max ((total + freight) * 0.1, 5)
```

De esta manera, la promoción aplicará el valor de descuento más alto en cada caso y comparará el valor mínimo de $ 5 con el cálculo del 10% del total más el envío.
