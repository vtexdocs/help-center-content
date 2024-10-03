---
title: 'Cómo funciona el valor adicional en el flete'
id: tutorials_121
status: DRAFT
createdAt: 2017-04-27T22:18:41.679Z
updatedAt: 2021-08-25T13:18:16.442Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:43.430Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-additional-shipping-cost
locale: es
legacySlug: como-funciona-el-valor-adicional-en-el-flete
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

Existen tres formas de agregar un valor extra sobre el flete: valor adicional por precio, por peso o por porcentaje. Cada una es calculada y configurada de maneras diferentes en su Admin VTEX. Este artículo incluye:

- Qué es un valor adicional por precio.
- Cómo registrar un valor adicional por precio.
- Qué es un valor adicional por peso.
- Cómo registrar un valor adicional por peso.
- Qué es un valor adicional por porcentaje en el flete.
- Cómo registrar un valor adicional por porcentaje en el flete.

## Valor adicional por precio

El valor adicional por precio se calcula a partir del precio del producto. Se define un porcentaje que se aplicará al precio de este, y ese valor resultante se agrega al valor del flete inicialmente calculado.

![adicionalfrete1 ES](https://images.ctfassets.net/alneenqid6w5/7iLxQxdxAWMcm22yieiyc0/310afec9d0940032a726e33b47e490d4/adicionalfrete1_ES.png)

En el caso anterior, el valor de los productos totaliza $ 80,00 y el valor registrado como __Valor adicional__ es de 10%. Es así que, el valor calculado que se agrega al valor del flete es de $ 8,00. La suma del valor final del flete y el valor adicional es de $18,00.

## Cómo registrar un valor adicional por precio

El valor adicional por precio se configura a través de la plantilla de flete cuando se registra una política de envío. El campo en la plantilla es **PricePercent**.

Revise nuestra documentación sobre [cómo montar la plantilla de flete](https://help.vtex.com/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=es) para saber más.

## Valor adicional por peso

El valor adicional por peso se calcula con base en el peso del producto. Este campo se calcula a partir de la diferencia entre el peso del producto y el rango de peso que está registrado en la plantilla de flete.

El cálculo es el siguiente:

![adicionalfrete2 ES](//images.ctfassets.net/alneenqid6w5/2bPpmLHucko8eGOEMUKEsQ/52029655a5f69fd3f358f780a3f89cc3/adicionalfrete2_ES.png)

Es decir, en el ejemplo, la diferencia del valor mínimo del rango de peso registrado y el peso del producto es de 100 gramos. El valor registrado en el campo __Valor adicional por peso__ es de 0,1. Entonces, el valor que debe agregarse al cálculo es de 14,00. El valor final sería $ 24,00.

## Cómo registrar un valor adicional por peso

El valor adicional por peso se configura a través de la plantilla de flete cuando se registra una política de envío. El campo en la plantilla es **PriceByExtraWeight**.

Revise nuestra documentación sobre [cómo montar la plantilla de flete](https://help.vtex.com/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=es) para saber más.

## Valor adicional por porcentaje

Este valor adicional se calcula sobre el valor final del flete, y no sobre el valor del producto. El valor porcentual es lo último que se calcula en el flete.

![adicionalfrete3 ES](//images.ctfassets.net/alneenqid6w5/7oQJz0N7qMuqyCWWm02KS6/3d1fceaaae7a96a930b81fa304dcc128/adicionalfrete3_ES.png)

En ese caso, el valor ingresado en el campo __Valor adicional__ será el valor porcentual que debe sumarse al valor final calculado del flete. Por ejemplo: si el flete, con todos sus valores adicionales ya calculados totaliza $20,00 y el valor registrado en el campo Adicional en los Fletes es 10, significa que se añadirán $2,00 a los $20,00 del flete, totalizando $ 22,00 que se cobrarán al cliente por el flete. Esa es una manera simple de lograr un margen sobre los fletes de las compras.

1. Acceda a la sección de **Inventario y envío**.
2. Acceda a la pestaña **Configuración**.
3. En **Valor adicional en el flete**, rellene la casilla **Incluya un valor adicional de ___ % en todos los fletes**.

> Para porcentajes fraccionados, utilice puntos para separar los dígitos. El sistema no lee comas en este campo. Ejemplo: 1.67%

4. Haga clic en **Guardar**.


