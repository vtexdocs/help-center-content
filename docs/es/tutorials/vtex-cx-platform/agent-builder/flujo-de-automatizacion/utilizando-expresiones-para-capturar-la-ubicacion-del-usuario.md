---
title: "Utilizando expresiones para capturar la ubicación del usuario"
id: 1wxT0lnOUwxD5I8jtP3G9H
status: PUBLISHED
createdAt: 2025-09-17T14:05:39.961Z
updatedAt: 2025-10-03T14:20:03.721Z
publishedAt: 2025-10-03T14:20:03.721Z
firstPublishedAt: 2025-10-03T14:20:03.721Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-expressions-to-capture-the-users-location
legacySlug: utilizando-expresiones-para-capturar-la-ubicacion-del-usuario
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

En este artículo, veremos un ejemplo práctico de cómo el uso de expresiones y variables puede ser útil para tu chatbot. Nos enfocaremos en un ejemplo simple pero muy útil para todos: Capturar la ubicación del usuario a través de la conversación, y luego poder utilizar esos datos.

## Primer paso: identificar el canal

La forma de capturar la ubicación varía según el canal que estés utilizando en la plataforma.

## Canal web

Para capturar la ubicación de un usuario a través del canal web, solo necesitas crear una carta de acción "Send Message" con una "Quick Reply" con el prefijo "[Loc]". Una vez que el usuario presione ese botón, podremos captar la ubicación a través del navegador. Después, simplemente guarda el resultado en la carta de decisión "Esperar por respuesta".

El mensaje recibido por el canal web siempre comenzará con: "Mi ubicación es:", seguido de la latitud y longitud del usuario en el formato `[latitud, longitud]`. Para eliminar estos prefijos, solo necesitas utilizar la expresión `@(replace)` y luego separar los valores de latitud y longitud en diferentes variables, utilizando la expresión `@(split)` para separarlos usando la coma (",") que los separa como parámetro.

## Canal Telegram

Para enviar la ubicación por Telegram, el usuario debe hacer clic en el botón 📎, seleccionar "Ubicación" y luego "Enviar mi ubicación actual".

Después de esto, solo necesitas crear una carta de decisión "Esperar por respuesta" y guardar el valor. Telegram envía la ubicación en el formato "latitud, longitud", por lo que no es necesario utilizar `@(replace)` para eliminar textos, solo separarla utilizando **split** como en el canal web.

## Canal WhatsApp

Para enviar la ubicación por WhatsApp, el usuario debe hacer clic en el botón 📎 o en el ➕, seleccionar "Ubicación" y luego "Ubicación fija".

A diferencia de otros canales, la ubicación en WhatsApp no se envía como texto, sino como un archivo adjunto. Por lo tanto, necesitamos acceder a ella utilizando la variable: `@input.attachments.0`

Esta variable contiene la ubicación en el formato "geo: latitud, longitud", por lo que debemos utilizar la expresión `@(replace)` para eliminar "geo:" y luego usar `@(split)` para separar la latitud y la longitud, como en los otros canales.

De esta manera, podemos crear un flujo con soporte para capturar la ubicación del usuario en tres canales diferentes, utilizando las expresiones y variables disponibles en la plataforma.
