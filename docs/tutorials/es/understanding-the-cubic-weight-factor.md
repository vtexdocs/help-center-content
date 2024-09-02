---
title: 'Calcular el factor volumétrico de peso'
id: tutorials_128
status: PUBLISHED
createdAt: 2017-04-27T22:17:52.970Z
updatedAt: 2023-12-19T17:17:26.713Z
publishedAt: 2023-12-19T17:17:26.713Z
firstPublishedAt: 2017-04-27T23:00:44.419Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-se-calcula-el-peso-cubico
locale: es
legacySlug: como-se-calcula-el-peso-cubico
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

El factor de peso volumétrico servirá para calcular un nuevo peso del paquete. Este nuevo peso tomará en consideración además del peso de los productos, su volumen. Esto es necesario para que el precio a ser cobrado por el flete tenga una relación justa entre peso y volumen ocupados.

## Cubicación

El cubicación es la relación existente entre el volumen y el peso de la mercancía, que es medido a través de un cálculo matemático donde se verificará cuánto la carga va a corresponder en peso en función del volumen que ella ocupe en el vehículo de transporte.

La función de la cubicación en el transporte es evitar que se ocupe todo el espacio físico del vehículo sin utilizar toda su capacidad en peso o viceversa. De esta forma, el concepto de cubicación está ligado a la capacidad de llenar la carga de un vehículo utilizando todo su volumen disponible para carga y capacidad de peso o tonelaje.

- __Peso mínimo:__ es el indicado en la balanza.
- __Peso volumétrico:__ es la forma de cálculo que determina el espacio efectivamente ocupado por el paquete en el vehículo de transporte.

## Factor volumétrico

Es el coeficiente resultante de la relación entre peso y volumen más adecuada y comercialmente justa al cubaje de aeronaves, según lo recomendado por la IATA (entidad internacional que congrega a las compañías aéreas).

## Cálculo

El cálculo del peso volumétrico se realiza efectuando la multiplicación de la Longitud x Anchura X Altura y división por el factor volumétrico proporcionado por la trasportadora.

>⚠️ Al calcular el factor de peso volumétrico, la plataforma VTEX no utiliza unidades de medida y los números generados son absolutos. Por lo tanto, los números y medidas que tengas en cuenta serán los del resultado final. Vale la pena señalar que la unidad de medida utilizada en su cálculo debe ser la misma utilizada por la transportadora.

Vea el ejemplo siguiente:

![example_cubic_weight_es](https://images.contentful.com/alneenqid6w5/3KZDUQlPBYEY8mSwqQgW6k/15cef41598f4fc1359f482cddbcca756/pesocubado.jpg)

- __Dimensiones del paquete:__ `50cm x 60cm x 15cm`
- __Peso mínimo del paquete:__ `9kg`
- __Factor volumétrico:__ `6.000`
- __Peso volumétrico:__ `50cm * 60cm * 15cm / 6.000 = 7,5kg`

Al comparar el peso mínimo con el peso volumétrico del paquete, el transportista hará el cobro por el peso mínimo, pues es mayor que el peso cubierto.

Sin embargo, el cálculo anterior es sólo ilustrativo. En el transportista, el valor registrado como factor volumétrico será multiplicado al producto de `Longitud x Anchura x Altura`. Es decir, el cálculo a realizar será `Longitud x Anchura x Altura x Factor volumétrico`

O sea, si el valor ofrecido por su compañía es `6.000`, es necesario realizar el cálculo donde este valor dividirá 1.000: Ejemplo: `1000g/6000 cm³ = 0,167`.

Ese es el valor que usted debe llenar en el campo Factor de peso volumétrico en su [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140).

![cubic_weight_ES](https://images.ctfassets.net/alneenqid6w5/44WaAckgByWYgyYGXtEoOj/034836d577be3c7f920c2b195b255adb/cubic_weight_ES.png)

Por lo tanto, el cálculo final sería:

- __Dimensiones del paquete:__ `50cm x 60cm x 15cm`
- __Peso mínimo del paquete:__ `9kg`
- __Peso volumétrico:__ `50cm x 60cm x 15cm x 0,167 = 7.515kg`
