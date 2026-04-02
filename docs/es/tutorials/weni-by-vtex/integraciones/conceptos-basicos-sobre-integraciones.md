---
title: "Conceptos básicos sobre integraciones"
id: 5x9gjiQTdD6lrQLJziRozj
status: PUBLISHED
createdAt: 2025-09-15T15:52:46.844Z
updatedAt: 2025-10-03T14:20:32.177Z
publishedAt: 2025-10-03T14:20:32.177Z
firstPublishedAt: 2025-10-03T14:20:32.177Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: the-basics-of-integrations
legacySlug: conceptos-basicos-sobre-integraciones
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

## Integración a través de API

La integración implica la acción de **buscar, modificar o enviar información a un servicio**. Las integraciones se dividen en dos:

- **Nativa:** La plataforma Weni puede integrarse con APIs que tienen formato REST/Json mediante una tarjeta Webhook o a través de una aplicación preexistente en el menú de Integraciones.
- **No nativa:** Realizamos integraciones no nativas para APIs que no son REST/Json. Sin embargo, en este caso, debemos analizar el esfuerzo y el alcance de la solicitud, ya que utilizamos servicios externos para consumir y modelar la API, por ejemplo, [Back4app](https://www.back4app.com/#) y [Pipedream](https://pipedream.com/).

## ¿Qué es una API?

Es una forma de comunicación entre sistemas, en la que uno de ellos proporciona información y servicios que pueden ser utilizados por el otro (Plataforma Weni). Normalmente, una API tiene:

- URL
- Documentación que explica cómo puede ser utilizada
- Endpoints/recursos disponibles
- Formas de autenticación para usar la API, si es necesario.

## ¿Qué es un webhook?

Un Webhook es una tecnología utilizada para permitir la comunicación entre dos aplicaciones en tiempo real. En la Plataforma Weni, podemos buscar e incluso actualizar información en otros sistemas a través de la tarjeta de **Llamar Webhook**. Esto significa que, para consumir una API, utilizarás una tarjeta Webhook:

Para enviar información a un sistema utilizando una API, debes usar el cuerpo de la solicitud (body) o enviarla directamente en la URL (query). La documentación de la API indicará cómo debe hacerse.

En esta imagen podemos ver la documentación de la API de Weni:

En esta imagen podemos ver cómo sería el cuerpo de la solicitud:

> **Tip:** La carta Llamar Webhook permite el uso de variables, como @results, @contact y @fields. [Obtén más información sobre variables aquí.](https://help.vtex.com/es/docs/tutorials/introduccion-a-expresiones-y-variables)

## ¿Cómo saber si la API puede integrarse nativamente?

La documentación de la API actúa como un manual que nos ayuda a comprender cómo integrarla. En ella se indicará si las solicitudes están en la arquitectura nativa de la plataforma Weni: REST/Json.

> **Nota:** Si la arquitectura de tu API no es REST/Json, aún es posible realizar la integración, pero será necesario modelar esa API.

## ¿Cómo visualizar la llamada a la API en la plataforma Weni?

Para ver el retorno de la API, accede al registro de Webhooks en el Módulo Flujos:

¿Tienes más preguntas sobre API? ¡Comparte en nuestra [comunidad](https://comunidade.weni.ai/)! 😉 Contamos con un equipo de expertos para responder tus dudas.
