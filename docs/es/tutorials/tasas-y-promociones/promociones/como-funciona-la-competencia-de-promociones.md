---
title: 'Cómo funciona la competencia de promociones'
id: tutorials_2270
status: PUBLISHED
createdAt: 2017-04-27T21:55:27.997Z
updatedAt: 2025-10-28T13:19:16.349Z
publishedAt: 2025-10-28T13:19:16.349Z
firstPublishedAt: 2017-04-27T23:03:50.791Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: how-promotion-competition-works
legacySlug: entendiendo-la-competencia-de-las-promociones-2
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

El módulo Promociones define la promoción que se aplicará a una compra de la misma manera que [Checkout](/es/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) selecciona el seller que realizará el fulfillment del pedido. Esta lógica se denomina competencia de promociones.

Las promociones compiten cuando:

- Las promociones aplicadas tienen el mismo tipo de descuento.  
- Más de una promoción se aplica al mismo ítem.  
- Las promociones no están [configuradas](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) para permitir que se acumulen.

Para entender cómo funciona la selección de promociones, a continuación se describen algunos conceptos de este módulo.

- [Clasificación de promociones](#clasificación-de-promociones)  
- [Orden de aplicación de promociones](#orden-de-aplicación-de-promociones)  
- [Acumulación de promociones](#acumulación-de-promociones)  
- [Estrategia de competencia de promociones](#estrategia-de-competencia-de-promociones)

## Efectos de las promociones

Los efectos de las promociones están relacionados con el beneficio que cada una ofrece. Hay cuatro tipos:

- **Descuento en el precio:** promociones que aplican un descuento porcentual o de valor fijo sobre el valor del producto. Esto incluye algunos descuentos de la promoción [Regular](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) y cualquier otra condición que afecte el precio de un ítem.  
- **Descuento en el envío**: [promociones que aplican descuento en el envío](/es/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW).  
- **Regalo**: promociones que otorgan un regalo al cliente.  
- **Fórmula**: promociones con tipo de descuento de valor fijo basado en [fórmula](/es/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV), una de las opciones de la promoción Regular.

## Orden de aplicación de promociones

El orden define la secuencia en que se aplican las promociones en el carrito y afecta el precio final de los ítems. Se toman en cuenta dos criterios:

- [Orden por tipo de promoción, descuento y cargo](#orden-por-tipo-de-promocón-descuento-y-cargo)  
- [Orden por valor](#orden-por-valor)

### Orden por tipo de promoción, descuento y cargo

En el carrito las promociones siguen un orden predefinido para garantizar que siempre se calculen los descuentos y cargos de la misma manera. La secuencia de aplicación afecta directamente el valor final de los ítems y la forma en que se aplican los beneficios.

La siguiente tabla describe cómo funciona el orden por tipo de efecto, incluyendo cargos, y describe cada etapa y los tipos de promoción correspondientes.

| Orden | Tipo de efecto | Descripción | Tipo |
| ----- | ----- | ----- | ----- |
| 1 | Precio | Descuento progresivo aplicado con base en la cantidad de ítems adquiridos | Descuento progresivo |
| 2 | Precio | Descuento porcentual aplicado al valor total del pedido | Promoción Regular |
| 3 | Precio | Descuento porcentual aplicado solo a los ítems correspondientes a la promoción | Promoción Regular |
| 4 | Precio | Valor fijo descontado del valor total del pedido | Promoción Regular |
| 5 | Precio | Valor fijo descontado directamente del precio del ítem | Promoción Regular |
| 6 | Precio | Descuento aplicado por comprar productos en conjunto  | Comprar juntos |
| 7 | Precio | Limita el precio máximo por ítem en el pedido | Promoción Regular |
| 8 | Envío | Descuento porcentual aplicado al valor del envío | Promoción Regular |
| 9 | Envío | Valor fijo descontado del valor del envío | Promoción Regular |
| 10 | Envío | Costo máximo de envío | Promoción Regular |
| 11 | Regalo | Se otorga un ítem de regalo como descuento | Promoción Regular |
| 12 | Fórmula | Descuento calculado mediante una expresión o fórmula personalizada | Promoción Regular |
| 13 | Cargo | Cargo calculado con base en una fórmula personalizada | Cargo |
| 14 | Cargo | Cargo calculado como porcentaje sobre el valor total del pedido | Cargo |
| 15 | Cargo | Cargo calculado como valor fijo sobre el valor del pedido | Cargo |
| 16 | Cargo | Cargo porcentual calculado sobre el valor del envío | Cargo |
| 17 | Recompensa | Valor fijo de cashback otorgado como recompensa | Promoción Regular |
| 18 | Recompensa | Porcentaje de cashback otorgado como recompensa | Promoción Regular |

### Orden por valor

Se compara el valor de descuento de las promociones que sean del mismo tipo. El módulo Promociones siempre selecciona la promoción que ofrezca el mayor descuento al comprador.

En las promociones de tipo regalo, el orden que se sigue es el que ofrece mayor número de regalos.

Ejemplo:

- Promoción A: 30% de descuento sobre el valor del producto.  
- Promoción B: 50% de descuento.

Se prioriza la promoción que otorgue el mayor descuento, es decir, el carrito aplicará la **Promoción B** primero y luego la **Promoción A**.

La **Promoción A** se aplicará al valor del ítem ya descontado por la **Promoción B**.

## Acumulación de promociones

Cuando se [configura](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricoes-e-limitacoes-de-uso) la acumulación, las promociones se aplican siempre que se cumplan sus condiciones

y modifican el valor que refleja el descuento de la promoción seleccionada por la competencia de promociones no acumulables. La secuencia de aplicación sigue el orden por tipo y valor descrito.

Se aplica de la siguiente manera:

![promoção es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-funciona-la-competencia-de-promociones_1.png)

> ⚠️ Los pedidos de origen [marketplace](/es/tutorial/configurar-promocao-para-marketplace--tutorials_406) y fulfillment no reconocen la acumulación de promociones, ya que el uso de promociones en marketplaces VTEX o externos está restringido a ciertos tipos específicos.

## Estrategia de competencia de promociones

Después de repasar el orden y acumulación de promociones, a continuación se describe cómo funciona la competencia entre promociones no acumulativas.

La selección de cada promoción considera únicamente promociones del mismo tipo de descuento (como se describe en [Efectos de promociones](#efectos-de-promociones) y que puedan aplicarse, al menos, a un producto en común.

Las promociones de diferentes tipos o de tipos iguales que se apliquen a productos diferentes no compiten entre sí, ya que se acumulan automáticamente.

Hay dos estrategias de competencia:

- [Competencia por escenario](#competencia-por-scenario)  
- [Competencia por ítem](#competencia-por-item)

> De manera predeterminada, todas las cuentas siguen la estrategia de competencia por escenario. Si la estrategia de competencia por ítem se adapta mejor a tus necesidades de negocio, [abre un ticket con nuestro equipo de Soporte](/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) para solicitar el cambio.

### Competencia por escenario

Esta estrategia agrupa las promociones que no compiten por los mismos productos. Después, el sistema compara cada grupo o promoción individual y aplica al carrito la opción que ofrezca el mayor descuento.

#### Ejemplo 1

Pedro creó un carrito con 1 escritorio de 100 USD \+ 30 USD de envío:

| Ítems | Cantidad | Valores |
| :---- | :---- | :---- |
| Escritorio | 1 | 100 USD |
| Envío | 1 | 30 USD |

Las promociones disponibles son:

| Promoción | Descuentos | Acumulación |
| :---- | :---- | :---- |
| A  | 10% de descuento aplicado en todos los productos | Acumulativa para todos los productos |
| B  | Envío máximo de 20 USD | No acumulativa |
| C  | 80% de descuento en el envío | No acumulativa |
| D  | Descuento de valor fijo de 50 USD | No acumulativa |
| E  | Regalo al comprar el escritorio | No acumulativa |

Después de aplicar las promociones disponibles:

| Ítems | Cantidad | Valores |
| :---- | :---- | :---- |
| Escritorio | 1 | 45 USD |
| Envío | 1 | 6 USD |

El valor total del pedido sería **51 USD**.

**Análisis detallado de los cálculos:**

- Escritorio (precio original: 100 USD)  
  - Aplicación de la promoción no acumulativa (Promoción D):  
    - Descuento de la Promoción D: 50 USD.  
    - Precio después de la Promoción D: 100 USD \- 50 USD \= 50 USD.  
  - Aplicación de la promoción acumulativa (Promoción A):  
    - Precio después de la Promoción D: 50 USD  
    - Descuento de la Promoción A (10%): 50 USD \* (1 \- 0.10) \= 50 USD \* 0.90 \= 45 USD.

- Envío (precio original: 30 USD)  
  - Aplicación de la promoción no acumulativa (Promoción C):  
    - Descuento de la Promoción C (80%): 30 USD \* (80/100) \= 30 USD \* 0.80 \= 24 USD.  
    - Precio después de la Promoción C: 30 USD \- 24 USD \= 6 USD.  
    - Descuento de la Promoción B: se evalúa la promoción "Envío máximo de 20 USD", ya que el costo del envío (6 USD) es inferior a 20 USD y esta promoción no ofrece beneficio adicional sobre el descuento del 80% ya calculado.  
    - Precio final del envío \= 6 USD.

- Regalo  
  - Aplicación de la promoción no acumulativa (Promoción E):  
    - Regalo otorgado al comprar el escritorio

- Total del pedido  
  - Precio final del escritorio: 45 USD  
  - Precio final del envío \= 6 USD  
  - Beneficio adicional: regalo al comprar el escritorio.  
  - Valor total del pedido: 45 USD \+ 6 USD \= 51 USD

#### Ejemplo 2

Carla creó un carrito con 1 escritorio y 1 computadora:

| Ítems | Cantidad | Valores |
| :---- | :---- | :---- |
| Escritorio | 1 | 100 USD |
| Computadora | 1 | 500 USD |

Los productos forman parte de colecciones:

| Ítems | Colecciones |
| :---- | :---- |
| Escritorio | Colección 1 y Colección 2 |
| Computadora | Colección 1 |

Las promociones disponibles son:

| Promoción | Descuentos | Reglas | Acumulación |
| :---- | :---- | :---- | :---- |
| A  | 10 % | Aplicado en productos de la Colección 1 | No acumulativa |
| B  | 25% | Aplicado en productos de la Colección 2 | No acumulativa |
| C  | 5 % | Aplicado a todos los productos | Acumulativa para todos los productos |

Las promociones A y B compiten entre sí, ya que afectan el mismo producto (escritorio). Cuando hay competencia, el módulo Promociones selecciona la promoción que otorgue el mejor descuento para el cliente. A continuación, se presenta un ejemplo de competencia para este escenario.

##### Escenario 1: descuento de 10% de la Promoción A

En este escenario, el escritorio y la computadora (ambos de la colección 1\) recibirán el descuento de 10% de la promoción A, seguido del descuento de 5% de la Promoción C.

| Ítems | Promociones aplicadas | Valores |
| :---- | :---- | :---- |
| Escritorio | Promoción A y Promoción C | 85.50 USD |
| Computadora | Promoción A y Promoción C | 427.50 USD |

En este escenario, el valor total del pedido sería **513.00 USD**.

**Análisis detallado de los cálculos:**

- Escritorio (precio original: 100 USD)  
  - Aplicación de la promoción no acumulativa (Promoción A):  
    - Descuento de la promoción A (10%): 100 USD \* (10/100) \= 100 USD \* 0.10 \= 10 USD.  
    - Precio después de la Promoción A \= 100 USD \- 10 USD \= 90 USD.  
  - Aplicación de la promoción acumulativa (Promoción C):  
    - Precio después de la Promoción A: 90 USD.  
    - Descuento de la Promoción C (5%): 90 USD \* (1 \- 0.05) \= 90 USD \* 0.95 \= 85.50 USD.

- Computadora (precio original: 500 USD)  
  - Aplicación de la promoción no acumulativa (Promoción A):  
    - Descuento de la Promoción A (10%): 500 USD \* (10/100) \= 500 USD \* 0.10 \= 50 USD.  
    - Precio después de la Promoción A \= 500 USD \- 50 USD \= 450 USD.  
  - Aplicación de la promoción acumulativa (Promoción C):  
    - Precio después de la Promoción A: 450 USD.  
    - Descuento de la Promoción C (5%): 450 USD \* (1 \- 0.05) \= 450 USD \* 0.95 \= 427.50 USD.

- Total del pedido en el escenario 1  
  - Precio final del escritorio: 85.50 USD  
  - Precio final de la computadora: 427.50 USD  
  - Valor total del pedido: 85.50 USD \+ 427.50 USD \= 513.00 USD

##### Escenario 2: descuento de 25% de la Promoción B

En este escenario, el escritorio (único ítem de la Colección 2\) recibirá el descuento de 25% de la Promoción B, seguido del descuento de 5% de la promoción C. Ya que la computadora no pertenece a la Colección 2, solo recibe el descuento de 5% de la Promoción C.

| Ítems | Promociones aplicadas | Valores |
| :---- | :---- | :---- |
| Escritorio | Promoción B y Promoción C | 71.25 USD |
| Computadora | Promoción C | 475.00 USD |

En este escenario, el valor total del pedido sería **546.25 USD**.

**Análisis detallado de los cálculos:**

- Escritorio (precio original: 100 USD)  
  - Aplicación de la promoción no acumulativa (Promoción B):  
    - Descuento de la Promoción B (25%): 100 USD \* (25/100) \= 100 USD \* 0.25 \= 25 USD.  
    - Precio después de la Promoción B \= 100 USD \- 25 USD \= 75 USD.  
  - Aplicación de la promoción acumulativa (Promoción C):  
    - Precio después de la Promoción B: 75 USD.  
    - Descuento de la Promoción C (5%): 75 USD \* (1 \- 0.05) \= 75 USD \* 0.95 \= 71.25 USD.

- Computadora (precio original: 500 USD)  
  - Aplicación de la promoción no acumulativa:  
    - La promoción B no es aplicable, ya que la computadora no pertenece a la Colección 2\.  
  - Aplicación de la promoción acumulativa (Promoción C):  
    - Precio antes de la promoción C (no afectado por la promoción B): 500 USD.  
    - Descuento de la Promoción C (5%): 500 USD \* (1 \- 0.05) \= 500 USD \* 0.95 \= 427.50 USD.

- Total del pedido en el escenario 2  
  - Precio final del escritorio: 71.25 USD  
  - Precio final de la computadora: 475.00 USD  
  - Valor total del pedido: 71.25 USD \+ 475.00 USD \= 546.25 USD

VTEX aplica la estrategia que ofrece el mayor descuento. Como en el escenario 1 el valor final del pedido es el menor para el cliente, se seleccionará esa estrategia.

### Competencia por ítem

El módulo Promociones puede configurarse para aplicar el mayor descuento en cada ítem individual del carrito, en lugar de combinar promociones a nivel del carrito. La tienda define esta configuración basándose en la estrategia de negocio. Si deseas usar este modelo y aún no está activado, [abre un ticket](/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM) con el equipo de Soporte para solicitar el cambio.

La competencia por ítem funciona de la siguiente manera:

| Ítems | Cantidad | Valores |
| :---- | :---- | :---- |
| Escritorio | 1 | 100 USD |
| Computadora | 1 | 500 USD |

Los productos forman parte de colecciones:

| Ítems | Colecciones |
| :---- | :---- |
| Escritorio | Colección 1 y Colección 2 |
| Computadora | Colección 1 |

Las promociones disponibles son:

| Promoción | Descuentos | Reglas | Acumulación |
| :---- | :---- | :---- | :---- |
| A | 10% | Aplicado en productos de la Colección 1 | No acumulativa |
| B | 25% | Aplicado en productos de la Colección 2 | No acumulativa |
| C | 5% | Aplicado a todos los productos | Acumulativa para todos los productos |

Aplicación de la competencia por ítem:

| Ítems | Promoción aplicada | Valores |
| :---- | :---- | :---- |
| Escritorio | Promoción B y Promoción C | 71.25 USD |
| Computadora | Promoción A y Promoción C | 427.50 USD |

El valor final del pedido en este escenario sería **498.75 USD**.

**Análisis detallado de los cálculos:**

- Escritorio (precio original: 100 USD)  

  - Selección de la promoción no acumulativa:  
    - Promoción A (10% en la Colección 1): descuento de 10 USD (precio 90 USD).  
    - Promoción B (25% en la Colección 2): descuento de 25 USD (precio 75 USD).  
    - La Promoción B es la mejor para el escritorio. Precio después de la Promoción B \= 75 USD.  
  - Aplicación de la promoción acumulativa (Promoción C):  
    - Precio después de la Promoción B: 75 USD.  
    - Descuento de la Promoción C (5%): 75 USD \* (1 \- 0.05) \= 75 USD \* 0.95 \= 71.25 USD.

- Computadora (precio original: 500 USD)  

  - Selección de la promoción no acumulativa:  
    - Promoción A (10% en la Colección 1): descuento de 50 USD (precio 450 USD).  
    - Promoción B (25% en la Colección 2): no aplicable.  
    - La promoción A es la única, y por lo tanto, la mejor promoción no acumulativa para la computadora. Precio después de la Promoción A \= 450 USD.  
  - Aplicación de la promoción acumulativa (Promoción C):  
    - Precio después de la Promoción A: 450 USD.  
    - Descuento de la Promoción C (5%): 450 USD \* (1 \- 0.05) \= 450 USD \* 0.95 \= 427.50 USD.

- Total del pedido en la estrategia de competencia por ítem  

  - Precio final del escritorio: 71.25 USD  
  - Precio final de la computadora: 427.50 USD  
  - Valor total del pedido: 71.25 USD \+ 427.50 USD \= 498.75 USD

