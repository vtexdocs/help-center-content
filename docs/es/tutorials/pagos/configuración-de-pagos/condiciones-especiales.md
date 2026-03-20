---
title: 'Configurar condiciones especiales de pago'
id: tutorials_456
status: PUBLISHED
createdAt: 2017-04-27T22:03:58.783Z
updatedAt: 2023-07-27T16:59:12.708Z
publishedAt: 2023-07-27T16:59:12.708Z
firstPublishedAt: 2017-04-27T23:03:26.753Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: special-conditions
legacySlug: condiciones-especiales
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Las condiciones especiales forman parte de la configuración de las condiciones de pagos, las cuales permiten que el tendero aumente el nivel de personalización de la condición de pago, de forma que pueden crear tantas reglas cuántas necesarias. Dependiendo de la forma de pago que desea aceptar, es posible usar las siguientes condiciones especiales:

Para identificar las condiciones especiales aplicables a cada método de pago, en VTEX Admin, acceda a **Pago > Configuraçión > Condiciones de Pago**, seleccione el método de pago deseado y verifique las opciones como se muestra en la siguiente ilustración.

![condiciones especiales de pago](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/condiciones-especiales_1.png)

## Condición Comercial

Permite definir una regla de pago para cada grupo de SKUs, considerando el impacto de estos ítems en el valor total del carrito. Para que funcione correctamente, es necesario crear condiciones comerciales distintas de la predeterminada del sistema y asegurarse de que los SKUs estén correctamente asociados.

Conoce más sobre cómo registrar una nueva condición comercial y asociarla a un SKU en [Registrar condición comercial](/es/docs/tutorials/registrar-condicion-comercial).

## Cómo configurar la condición comercial en la condición de pago

![condicao-comercial es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/condiciones-especiales_2.png)

1. Dentro de la condición de pago, haga clic en `Añadir condición especial`.
2. A continuación, haga clic en `Condición Comercial`.
3. Seleccione la condición deseada en el listado.
4. Rellene el arrastre de acuerdo con el escenario que desea.
5. Guarde las alteraciones.

Es importante destacar que, si hubo dos condiciones de pagos para la misma forma de pago, donde la única diferencia entre ellas es la condición comercial y, en un carrito hubo dos SKUs distintos, cada uno asociado a una condición comercial distinta, prevalecerá el que ofrezca el menor precio final para el cliente.

#### Ejemplo práctico

- SKU A asociado a la condición comercial personalizada.
- SKU B asociado a la condición comercial estándar.
- Forma de pago 10x con intereses del 2,5% en todas las cuotas, configurado con la condición comercial personalizada.
- Forma de pago 10x sin intereses, configurado con la condición comercial estándar

**Carrito 1**
Solamente con SKU A, se presentará la posibilidad de pagar en hasta 10x con intereses del 2,5%.

**Carrito 2**
Solamente con SKU B, se presentará la posibilidad de pagar en hasta 10x sin intereses.

**Carrito 3**
Con los SKUs A y B, se presentará la posibilidad de pagar en hasta 10x sin intereses.

Si desea aplicar o no intereses según la representatividad del SKU A en el valor total del carrito, deberá configurar el arrastre.

## Comprendiendo el Arrastre

El arrastre es una forma de definir cómo se aplicará una condición de pago en un carrito con SKUs de diferentes condiciones comerciales. Esto se logra mediante el porcentaje configurado en el campo **Cuando el porcentaje de SKUs de esta condición sea mayor que:**.

La plataforma utiliza este valor para calcular cuánto representan los ítems asociados a la condición comercial dentro del valor total del carrito.

> ⚠️ El cálculo considera el valor total de los ítems (precio × cantidad) asociados a la condición comercial en relación con el valor total del carrito, y no solo la cantidad de SKUs.


Si el arrastre no está configurado, la condición de pago se aplicará siempre que al menos un SKU asociado a la condición comercial esté presente en el carrito.

#### Ejemplo práctico

Imagine que usted necesite ofrecer un pago en cuotas de 24x sin intereses sólo para las televisiones de su tienda, desde que representen por lo menos el 70% del carrito. Pero, para cualquier otro escenario, sería presentado solamente el pago en cuotas de 10x sin intereses.

Considerando que ya se haya catastrado la condición comercial y asociado a los respectivos SKUs en el módulo de Catalog y, configurada en la condición de pago con el arrastre del 70% en el módulo **Pagos**. Y que ya hubiese configurado aún otra condición de pago con 10 cuotas sin intereses sin el arrastre catastrado, averigüe los escenarios de carritos abajo:

**Carrito 1**
1 televisor con valor de R$ 8.000.
2 consolas de videojuegos con valor de R$ 1.000 cada una.

En este caso, el valor total del carrito es de R$ 10.000, donde el televisor representa el 80% del valor total del carrito. Por lo tanto, se mostrará la opción de 24 cuotas sin interés, ya que se alcanzó el mínimo del 70%.

**Carrito 2**
2 televisores con valor de R$ 3.000 cada uno.
1 computadora con valor de R$ 4.000.

En este caso, el valor total del carrito es de R$ 10.000, donde los televisores representan el 60% del valor total del carrito. Por lo tanto, el cliente verá la opción de 10 cuotas sin interés.

Es posible configurar muchos otros escenarios según las necesidades de la tienda y la forma en que se combinan las condiciones de pago con las condiciones comerciales.

## Política Comercial

Permite poner a disposición una condición de pago para una política comercial específica o tantas cuántas necesite configurar. Recordando que, si ese campo no es configurado, se presentará la condición para todas las políticas comerciales de la tienda.

Cómo configurar la política comercial en la condición de pago

![politica-comercial es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/condiciones-especiales_3.png)

1. Dentro de la condición de pago, haga clic en `Añadir condición especial`.
2. A continuación, haga clic en `Política Comercial (Canal de Ventas)`.
3. Seleccione las políticas deseadas.
4. Guarde las alteraciones.

#### Ejemplo práctico

Imagine que su tienda ofrece pago con hasta 10x sin intereses y 12x con intereses en la tarjeta de crédito Visa. Pero posee una política comercial para vender productos de la marca Samsung, con un hotsite propio en hasta 24x sin intereses. En ese caso, bastaría crear una nueva condición de pago con tarjeta de crédito Visa, con 24 cuotas sin catastro de intereses y añadir la política comercial definida para la venta de los productos de Samsung.

## Banco Emisor

Permite restringir una condición de pago, en caso de que la Tarjeta de Crédito y/o Débito haya sido emitida por un banco emisor específico, de acuerdo con el país.

Cómo configurar el banco emisor en la condición de pago:

1. En la configuración de una condición de pago, haga clic en `Agregar condición especial`.
2. Luego, haga clic en `Banco Emisor`.
3. Seleccione el País de origen del banco que emitió la tarjeta.
4. Seleccione el banco emisor.
5. Si desea segmentar por nivel de tarjeta, seleccione el Card level.
6. Si desea segmentar por co-brand, seleccione la opción deseada en Co-brand (esta casilla de selección solo aparecerá si su tienda ha informado a VTEX la lista de tarjetas con co-brand).
7. Guarde los cambios.

![banco-emissor es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/condiciones-especiales_4.png)

### Ejemplos

#### Banco Emisor

El Banco do Brasil ofrece condiciones especiales de pago para todos los clientes que utilizan  su tarjeta, Ourocard, tanto en la función de débito como en la función de crédito.

Para ofrecer esta condición especial en su tienda, bastaría seleccionar **Brasil** en el campo **Cuando el país sea** y **Banco do Brasil** en el campo **Cuando el banco emisor sea**.

#### Card Level

Digamos que el banco Bradesco tenga un club de ventajas exclusivo para los clientes que tengan tarjeta de nivel "Standard". Uno de los beneficios podría ser la posibilidad de pagar en cuotas cualquier compra en hasta 12 veces, en vez de apenas 11 veces, opción ofrecida para los demás card levels.

En este caso, la configuración tiene una etapa más que el ejemplo anterior: el usuario debe seleccionar las opciones **Brasil** y **Bradesco** en los campos **Cuando el País sea** y **Cuando el Banco Emisor sea**, respectivamente. Y, luego, debe elegir la opción **Standard** en el campo **Card level**.

#### Co-brand

Digamos que desea ofrecer una condición especial de pago para clientes que paguen con la tarjeta de su tienda.

En este caso, debe seleccionar el banco emisor responsable de esta tarjeta seguido del nombre de su tienda en el campo **Co-brand**.

> ⚠️ Tenga en cuenta que, de manera predeterminada, la información sobre si una tarjeta tiene o no una marca compartida no se agrega a la base de datos VTEX. Por lo tanto, si su tienda desea segmentar una condición de pago de acuerdo con las tarjetas, debe enviar un ticket con la lista de tarjetas de marca compartida al equipo de soporte de VTEX.

## Período

Permite configurar una validez en la condición de pago, para que deje de ser aplicada en su tienda cuando expire la fecha.

Cómo configurar el período en la condición de pago

![periodo es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/condiciones-especiales_5.png)

1. Dentro de la condición de pago, haga clic en `Añadir condición especial`.
2. A continuación, haga clic en `Período`.
3. Haga clic en el campo **De** y seleccione la fecha a partir del calendario que aparece.
4. En el campo al lado, digite el horario en que la condición pasará a valer (se grabará en el sistema siguiendo el estándar UTC).
5. Haga clic en el campo **Hasta** y seleccione la fecha a partir del calendario que aparece.
6. En el campo al lado, digite el horario en que la condición dejará de ser aplicada (se grabará en el sistema siguiendo el estándar UTC).
7. Guarde las alteraciones.

#### Ejemplo práctico

Imagine que su tienda normalmente ofrece un pago en cuotas en hasta 6x sin intereses, pero usted desea aprovechar las ventas del final de año para ofrecer un pago en cuotas en hasta 12x sin intereses. En ese caso, bastaría seguir los pasos arriba y catastrar el período para la condición de pago, dejar de ser aplicada el 01 de janeiro del año siguiente, por ejemplo.

> ⚠️ Las condiciones de pago poseen un caché de hasta 10 minutos en el Smart Checkout. Luego, cualquier cambio en las Condiciones de Pago del modulo **Pagos** puede llevar hasta 10 minutos para entrar en producción en el Smart Checkout.

