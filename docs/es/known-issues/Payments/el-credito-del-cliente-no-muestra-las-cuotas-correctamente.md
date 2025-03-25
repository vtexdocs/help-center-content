---
title: ' El crédito del cliente no muestra las cuotas correctamente'
id: 5qhiwp1EhfJepX6ZFqDsiG
status: PUBLISHED
createdAt: 2022-03-28T02:52:15.222Z
updatedAt: 2022-11-25T22:45:55.160Z
publishedAt: 2022-11-25T22:45:55.160Z
firstPublishedAt: 2022-03-28T02:52:15.598Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: customer-credit-doesnt-show-installments-correctly
locale: es
kiStatus: Backlog
internalReference: 501730
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

El crédito del cliente no muestra los diferentes valores entre reglas con el mismo número de cuotas y diferentes periodos. Para entender mejor este problema, debemos observar el comportamiento de la pasarela y del Crédito Cliente:

**Pasarela**
Cuando la pasarela tiene más de una regla con el mismo número de cuotas, muestra sólo la regla más ventajosa en términos de valor en la caja.
Ejemplo: La regla A** tiene 2 cuotas y 1% de interés y la regla B** tiene 2 cuotas y 2% de interés. La pasarela sólo envía a la caja la **regla A** porque la **regla B** ofrecería el mismo beneficio por un precio mayor.
Con este ejemplo entendemos que la pasarela envía sólo una opción de pago de 2x (una opción en 3x, otra en 4x...) entre todas las registradas.

**Crédito del cliente**
El crédito del cliente es el que crea las distintas opciones de pago según los periodos configurados.
Ejemplo: **regla C**-> 2x para pagar en 15 y 30 días y **regla D**-> 2x para pagar en 30 y 45 días y 2% de interés.
Sin embargo, el Crédito Cliente no trae los precios con interés porque el precio fue traído por la pasarela y la pasarela ignoró los valores con interés "desventajoso" previamente.
El resultado de estos dos comportamientos son varias reglas con cuotas iguales, periodos diferentes e importes iguales (se ignora el interés fijado en la regla).

Es importante decir que el comportamiento de la pasarela es esperado. Pero el Crédito Cliente debe ser resistente para introducir el interés incluso sabiendo que la pasarela ignoraría el interés de antemano.

## Simulación


1. Crear dos condiciones de pago del Crédito Cliente con el mismo número de cuotas y diferentes plazos.
2. A continuación, configure el interés para una de ellas.
3. Cree una cuenta de Crédito Cliente con crédito disponible.
4. Vaya a la caja y observe las dos opciones con el mismo valor, sin intereses.


## Workaround


N/A

