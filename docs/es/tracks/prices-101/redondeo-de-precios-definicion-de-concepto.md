---
title: 'Redondeo de Precios – Definición de Concepto'
id: 1tUIUvF6BUkDgMsknGaMkF
status: PUBLISHED
createdAt: 2019-07-04T13:53:48.537Z
updatedAt: 2024-08-27T17:14:21.711Z
publishedAt: 2024-08-27T17:14:21.711Z
firstPublishedAt: 2019-07-17T19:47:01.156Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: rounding-rules-concept-definition
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
---

## Definiciones 

El Redondeo de Precios es una estrategia de precificación basada en el __redondeo de precios__. Este método tiene como objetivo influenciar en la decisión de compra del consumidor al mostrar precios con un formato más amigable.

Un uso común de esta técnica se ve en los casos en que los productos se venden con *"descuentos de un centavo"*. En lugar de ofrecer un televisor por un valor de € 4000.00, una tienda muestra un precio de € 3999.99.

La idea es crear la impresión de que el producto se vende a un precio más asequible.

## Reglas del Redondeo de Precios

El redondeo de precios depende de tres condiciones para que se registre una nueva regla: 

- El intervalo de precios
- El número de dígitos que serán redondeados
- Los métodos de redondeo.

Las reglas de redondeo de precios son aplicables únicamente al valor inicial del producto antes de la aplicación de cualquier descuento o promoción (precio base). No se aplican a precios fijos y promociones. En estos casos, los valores se consideran finales y exactos, y se muestran a los clientes exactamente como fueron definidos, sin ningún ajuste adicional.

## Intervalo de precios

El __intervalo de precios__ es el criterio que determina qué SKUs serán elegibles para la regla de redondeo de precios. En esta condición, debe decidir qué rangos de precios se verán afectados por el redondeo.

## Número de dígitos

Debe definir cuántos dígitos se redondearán de acuerdo con el intervalo de precios establecido para una determinada regla.

Si el intervalo de precios es, por ejemplo, de € 100.00 hasta € 500.00, __el número máximo de dígitos que se pueden redondear es cuatro__, ya que el valor límite de € 500.00 tiene *cinco dígitos*. En este escenario, también puede elegir el redondeo para __tres, dos o apenas un dígito__.

El __número máximo__ de dígitos afectados por la regla de redondeo de precios es variable. Eso va a depender de la cantidad de dígitos del rango de precio que se estableció para la regla.

## Métodos de redondeo 

Para finalizar la configuración del redondeo de precios, debe escoger entre tres __métodos de redondeo__: la *Regla del Nueve*, la *Regla de los Nueves* y la *Regla del Cero*.  

Con el objetivo de simplificar la explicación, vamos a considerar que la regla de redondeo se aplicará a los __dos primeros dígitos__, *contados de derecha a  izquierda*:

- *Regla del Nueve*: el segundo dígito, de derecha a izquierda, será __sustituido por nueve__ y el primero será __sustituido por cero__. Vamos a utilizar como ejemplo un precio de *€ 100.00*. El sistema considerará los dos valores más cercanos a este precio que tengan *"90"* como los dos primeros dígitos, en este caso, *100.90* y *99.90*. Como la diferencia entre 100.00 y 99.90 es __menor__ que la diferencia entre 100.00 y 100.90, __el precio se redondeará a 99.90__.

- *Regla de los Nueves*: el segundo dígito, de derecha a izquierda, será __sustituido por nueve__ y el primero también será __sustituido por nueve__.  Vamos a utilizar como ejemplo un precio de *€ 100.00*. El sistema considerará los dos valores más cercanos a este precio que tengan *"99"* como los dos primeros dígitos, en este caso, *100.99* y *99.99*. Como la diferencia entre 100.00 y 99.99 es __menor__ que la diferencia entre 100.00 y 100.99, __el precio se redondeará a 99.99__.

- *Regla del Cero*: el segundo dígito, de derecha a izquierda, será __sustituido por cero__ y el primero también será __sustituido por cero__.  Vamos a utilizar como ejemplo un precio de *€ 100.25*. El sistema considerará los dos valores más cercanos a este precio que tengan *“00”* como los dos primeros dígitos, en este caso, *100.00* y *200.00*. Como la diferencia entre 100.25 y 100.00 es __menor__ que la diferencia entre 100.25 y 200.00, __ el precio se redondeará a 100.00__.

<div class=“alert alert-info”>
Si la diferencia del precio original para el valor superior y para el valor inferior es la misma, el <strong>redondeo se hará para arriba</strong>.
</div>

## Ejemplo

Digamos que un televisor nuevo en el mercado se vende por € 5000.00. Sin embargo, percibe que el volumen de ventas de esta mercancía no es el esperado.

Para revertir esta situación y atraer nuevos consumidores, es posible utilizar una estrategia de redondeo de precios. En este caso, una posible aplicación de la funcionalidad sería aplicar la __*Regla del Nueve*__  junto con el redondeo de __tres dígitos__.

Por lo tanto, el valor bajaría a € 4999.00, dando la impresión de que el producto tiene un precio más barato.
