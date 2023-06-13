---
title: Calcular el factor cúbico de peso
id: tutorials_128
status: PUBLISHED
createdAt: 2017-04-27T22:17:52.970Z
updatedAt: 2022-11-08T19:15:57.550Z
publishedAt: 2022-11-08T19:15:57.550Z
firstPublishedAt: 2017-04-27T23:00:44.419Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-se-calcula-el-peso-cubico
legacySlug: como-se-calcula-el-peso-cubico
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

El factor cúbico servirá para calcular un nuevo peso del paquete. Este nuevo peso tomará en consideración además del peso de los productos, su volumen. Esto es necesario para que el precio a ser cobrado por el flete tenga una relación justa entre peso y volumen ocupados.

## Cubicación

El cubicación es la relación existente entre el volumen y el peso de la mercancía, que es medido a través de un cálculo matemático donde se verificará cuánto la carga va a corresponder en peso en función del volumen que ella ocupe en el vehículo de transporte.

La función de la cubicación en el transporte es evitar que se ocupe todo el espacio físico del vehículo sin utilizar toda su capacidad en peso o viceversa. De esta forma, el concepto de cubicación está ligado a la capacidad de llenar la carga de un vehículo utilizando todo su volumen disponible para carga y capacidad de peso o tonelaje.

- __Peso real:__ es el indicado en la balanza.
- __Peso Cúbico:__ es la forma de cálculo que determina el espacio efectivamente ocupado por el paquete en el vehículo de transporte.

## Factor Cúbico

Es el coeficiente resultante de la relación entre peso y volumen más adecuada y comercialmente justa al cubaje de aeronaves, según lo recomendado por la IATA (entidad internacional que congrega a las compañías aéreas).

## Cálculo

El cálculo del peso cúbico se realiza efectuando la multiplicación de la Longitud x Anchura X Altura y división por el factor cúbico proporcionado por la trasportadora.

Vea el ejemplo siguiente:

![](//images.contentful.com/alneenqid6w5/3KZDUQlPBYEY8mSwqQgW6k/15cef41598f4fc1359f482cddbcca756/pesocubado.jpg)

- __Dimensiones del paquete:__ `50cm x 60cm x 15cm`
- __Peso real del paquete:__ `9kg`
- __Factor cúbico:__ `6.000`
- __Peso cúbico:__ `50cm * 60cm * 15cm / 6.000 = 7,5kg`

Al comparar el peso real con el peso cúbico del paquete, el transportista hará el cobro por el peso real, pues es mayor que el peso cubierto.

Sin embargo, el cálculo anterior es sólo ilustrativo. En el transportista, el valor registrado como factor cúbico será multiplicado al producto de `Longitud x Anchura x Altura`. Es decir, el cálculo a realizar será `Longitud x Anchura x Altura x Factor Cúbico`

O sea, si el valor ofrecido por su compañía es `6.000`, es necesario realizar el cálculo donde este valor dividirá 1.000: Ejemplo: `1.000 / 6.000 = 0,167`.

Al realizar el registro de su transportista, ese es el valor que usted debe llenar en el campo __Factor Cúbico de Peso__:

![peso cubico es](//images.contentful.com/alneenqid6w5/4Z0zLrnCHuKSKyoE8wGgMa/6239feb2d9610b12d19747732fae508e/peso_cubico_es.png)

Por lo tanto, el cálculo final sería:

- __Dimensiones del paquete:__ `50cm x 60cm x 15cm`
- __Peso real del paquete:__ `9kg`
- __Peso cúbico:__ `50cm x 60cm x 15cm x 0,167 = 7.515kg`

<div class="alert alert-info">
  <p>Compruebe con su transportista si la unidad de medida está en gramos, que es la unidad utilizada en VTEX.</p>
</div>
