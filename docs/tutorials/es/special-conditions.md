---
title: Configurar condiciones especiales de pago
id: tutorials_456
status: PUBLISHED
createdAt: 2017-04-27T22:03:58.783Z
updatedAt: 2023-02-24T20:54:02.331Z
publishedAt: 2023-02-24T20:54:02.331Z
firstPublishedAt: 2017-04-27T23:03:26.753Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: condiciones-especiales
legacySlug: condiciones-especiales
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Las condiciones especiales forman parte de la configuración de las condiciones de pagos, las cuales permiten que el tendero aumente el nivel de personalización de la condición de pago, de forma que pueden crear tantas reglas cuántas necesarias. Dependiendo de la forma de pago que desea aceptar, es posible usar las siguientes condiciones especiales:

Para identificar las condiciones especiales aplicables a cada método de pago, en VTEX Admin, acceda a __Pago > Configuraçión > Condiciones de Pago__, seleccione el método de pago deseado y verifique las opciones como se muestra en la siguiente ilustración.

![condiciones especiales de pago](//images.ctfassets.net/alneenqid6w5/1DllASa2BBHO7VjL1krOqD/1f9aaa7975a61f40c575db834c163a6b/Condiciones_especiales_de_pago.png)

<div class = "alert alert-info">
  <p>Las condiciones especiales de las reglas de pago se aplican solo al número de cuotas. El método de pago sigue siendo el mismo.</p>
</div>

## Condición Comercial

Posibilita definir una regla de pago para cada agrupación de SKUs, pero para que funcione correctamente, es necesario en primero que cree condiciones comerciales distintas del estándar del sistema y, que los SKUs que deberán obedecer a esa regla estén debidamente asociadas a la condición comercial.

Para saber cómo catastrar una nueva condición comercial y asociarla a un SKU, lea el documento [Registrar condición comercial](https://help.vtex.com/es/tutorial/registrar-condicion-comercial--tutorials_445).

## Cómo configurar la condición comercial en la condición de pago

![condicao-comercial es](//images.ctfassets.net/alneenqid6w5/4Cgc0FUB6oumYi88MOgsYY/359a21a1aa8610eded88339b0ea45f62/condicion-comercial.png)

1. Dentro de la condición de pago, haga clic en `Añadir condición especial`.
3. A continuación, haga clic en `Condición Comercial`.
4. Seleccione la condición deseada en el listado.
5. Rellene el arrastre de acuerdo con el escenario que desea.
6. Guarde las alteraciones.

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

Si la intención es, dependiendo de cuando el SKU A represente el carrito, que se aplique o no los intereses, entonces se necesitará configurar el arrastre.

## Comprendiendo el Arrastre

El arrastre es una forma de definir cómo se aplicará la condición de pago en un carrito, con SKUs de distintas condiciones comerciales. Eso es posible a través del porcentual catastrado en el campo “Cuando el porcentual de SKUs de esa condición es mayor que:”.

La plataforma usa ese valor para validar con el cálculo que determina el porcentual relativo de cada SKU con relación al carrito, que es evaluado a partir de la cantidad y del precio de los SKUs que están asociados a esa condición comercial.

Caso el arrastre no sea configurado, la condición de pago siempre será aplicada cuando por lo menos un SKU asociado a la condición comercial esté presente en el carrito.

#### Ejemplo práctico

Imagine que usted necesite ofrecer un pago en cuotas de 24x sin intereses sólo para las televisiones de su tienda, desde que representen por lo menos el 70% del carrito. Pero, para cualquier otro escenario, sería presentado solamente el pago en cuotas de 10x sin intereses.

Considerando que ya se haya catastrado la condición comercial y asociado a los respectivos SKUs en el módulo de Catalog y, configurada en la condición de pago con el arrastre del 70% en el módulo _Pagos_. Y que ya hubiese configurado aún otra condición de pago con 10 cuotas sin intereses sin el arrastre catastrado, averigüe los escenarios de carritos abajo:

**Carrito 1**
1 televisión en el valor de R$ 8.000.
2 videojuegos en el valor de R$ 1.000 cada.
En ese caso el valor total del carrito sería de R$ 10.000, con la televisión representando el 80%. Entonces, sería presentada la condición de pago de 24x sin intereses, una vez que se atingió lo mínimo del 70% establecido en la condición comercial.

**Carrito 2**
2 televisiones en el valor de R$ 3.000 cada.
1 computadora en el valor de R$ 4.000.
En ese caso el valor total del carrito sería de R$ 10.000, con las televisiones representando el 60% (2x R$ 3.000). Así, sería presentada al cliente la condición de pago de 10x sin intereses.

Por supuesto, además de esos escenarios, sería posible hacer muchos otros de acuerdo con la necesidad de la tienda y la forma como las condiciones de pago se configuren en conjunto con las condiciones comerciales.

## Política Comercial

Permite poner a disposición una condición de pago para una política comercial específica o tantas cuántas necesite configurar. Recordando que, si ese campo no es configurado, se presentará la condición para todas las políticas comerciales de la tienda.

Cómo configurar la política comercial en la condición de pago

![politica-comercial es](//images.ctfassets.net/alneenqid6w5/kfa8VsYOR26c2kkuumcCY/5a94b3b98926e993bd9914eb39deb0d6/venta-politica.png)

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

![banco-emissor es](//images.ctfassets.net/alneenqid6w5/2mgaZy8JoY0O06UIGAsAoy/4000a63524a0ce2e2f86bdb3b0902511/banco-emisor.png)

### Ejemplos

#### Banco Emisor

El Banco do Brasil ofrece condiciones especiales de pago para todos los clientes que utilizan  su tarjeta, Ourocard, tanto en la función de débito como en la función de crédito.

Para ofrecer esta condición especial en su tienda, bastaría seleccionar “Brasil” en el campo __Cuando el país sea__ y “Banco do Brasil” en el campo __Cuando el banco emisor sea__.

#### Card Level

Digamos que el banco Bradesco tenga un club de ventajas exclusivo para los clientes que tengan tarjeta de nivel "Standard". Uno de los beneficios podría ser la posibilidad de pagar en cuotas cualquier compra en hasta 12 veces, en vez de apenas 11 veces, opción ofrecida para los demás card levels.

En este caso, la configuración tiene una etapa más que el ejemplo anterior: el usuario debe seleccionar las opciones “Brasil” y “Santander” en los campos __Cuando el País sea__ y __Cuando el Banco Emisor sea__, respectivamente. Y, luego, debe elegir la opción __Standard__ en el campo __Card level__.

#### Co-brand

Digamos que desea ofrecer una condición especial de pago para clientes que paguen con la tarjeta de su tienda.

En este caso, debe seleccionar el banco emisor responsable de esta tarjeta seguido del nombre de su tienda en el campo __Co-brand__.

<div class="alert alert-warning">
Tenga en cuenta que, de manera predeterminada, la información sobre si una tarjeta tiene o no una marca compartida <strong>no</strong> se agrega a la base de datos VTEX. Por lo tanto, si su tienda desea segmentar una condición de pago de acuerdo con las tarjetas, debe enviar un ticket con la lista de tarjetas de marca compartida al equipo de soporte de VTEX.
</div>

## Período

Permite configurar una validez en la condición de pago, para que deje de ser aplicada en su tienda cuando expire la fecha.

Cómo configurar el período en la condición de pago

![periodo es](//images.ctfassets.net/alneenqid6w5/6NORGuNOZUegEc0sm6YOQC/788aedda7526d5b7395aa504a15a5b48/periodo-es.png)

1. Dentro de la condición de pago, haga clic en `Añadir condición especial`.
3. A continuación, haga clic en `Período`.
4. Haga clic en el campo __De__ y seleccione la fecha a partir del calendario que aparece.
5. En el campo al lado, digite el horario en que la condición pasará a valer (se grabará en el sistema siguiendo el estándar UTC).
6. Haga clic en el campo __Hasta__ y seleccione la fecha a partir del calendario que aparece.
7. En el campo al lado, digite el horario en que la condición dejará de ser aplicada (se grabará en el sistema siguiendo el estándar UTC).
8. Guarde las alteraciones.

#### Ejemplo práctico

Imagine que su tienda normalmente ofrece un pago en cuotas en hasta 6x sin intereses, pero usted desea aprovechar las ventas del final de año para ofrecer un pago en cuotas en hasta 12x sin intereses. En ese caso, bastaría seguir los pasos arriba y catastrar el período para la condición de pago, dejar de ser aplicada el 01 de janeiro del año siguiente, por ejemplo.

<div class="alert alert-warning">
Las condiciones de pago poseen un caché de hasta 10 minutos en el Smart Checkout. Luego, cualquier cambio en las Condiciones de Pago del modulo <strong>Pagos</strong> puede llevar hasta 10 minutos para entrar en producción en el Smart Checkout.
</div>

