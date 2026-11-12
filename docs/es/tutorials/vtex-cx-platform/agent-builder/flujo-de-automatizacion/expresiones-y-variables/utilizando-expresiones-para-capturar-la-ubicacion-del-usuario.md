---
title: "Utilizando expresiones para capturar la ubicación del usuario"
id: 1wxT0lnOUwxD5I8jtP3G9H
status: PUBLISHED
createdAt: 2025-09-17T14:05:39.961Z
updatedAt: 2026-11-12T12:20:00.000Z
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

Este artículo muestra cómo capturar la ubicación del usuario en la conversación con expresiones y variables, para usar esos datos después en el flujo.

## Identificar el canal

La forma de capturar la ubicación varía según el canal que estés utilizando en la plataforma.

## Canal web

Para capturar la ubicación de un usuario a través del canal web, crea una carta de acción "Send Message" con una "Quick Reply" con el prefijo "[Loc]". Una vez que el usuario presione ese botón, podremos captar la ubicación a través del navegador. Después, guarda el resultado en la carta de decisión "Esperar por respuesta".

El mensaje recibido por el canal web siempre comenzará con: "Mi ubicación es:", seguido de la latitud y longitud del usuario en el formato `[latitud, longitud]`. Para eliminar estos prefijos, utiliza la expresión `@(replace)` y luego separar los valores de latitud y longitud en diferentes variables, utilizando la expresión `@(split)` para separarlos usando la coma (",") que los separa como parámetro.

## Canal Telegram

Para enviar la ubicación por Telegram, el usuario debe hacer clic en el botón de adjunto, seleccionar `Ubicación` y luego "Enviar mi ubicación actual".

Después de esto, crea una carta de decisión "Esperar por respuesta" y guarda el valor. Telegram envía la ubicación en el formato "latitud, longitud", sin necesidad de usar `@(replace)` para quitar textos. Sepárala con **split**, como en el canal web.

## Canal WhatsApp

Para enviar la ubicación por WhatsApp, el usuario debe hacer clic en el botón de adjunto o en el botón de agregar, seleccionar `Ubicación` y luego "Ubicación fija".

A diferencia de otros canales, la ubicación en WhatsApp no se envía como texto, sino como un archivo adjunto. Por lo tanto, necesitamos acceder a ella utilizando la variable: `@input.attachments.0`

Esta variable contiene la ubicación en el formato "geo: latitud, longitud", por lo que debemos utilizar la expresión `@(replace)` para eliminar "geo:" y luego usar `@(split)` para separar la latitud y la longitud, como en los otros canales.

De esta manera, podemos crear un flujo con soporte para capturar la ubicación del usuario en tres canales diferentes, utilizando las expresiones y variables disponibles en la plataforma.
