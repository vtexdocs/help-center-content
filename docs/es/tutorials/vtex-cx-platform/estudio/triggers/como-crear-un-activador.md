---
title: "Crear un trigger"
id: 4bo1N0wsONdFMVDMlIPU9T
status: PUBLISHED
createdAt: 2025-09-12T17:40:04.331Z
updatedAt: 2025-10-03T14:20:34.064Z
publishedAt: 2025-10-03T14:20:34.064Z
firstPublishedAt: 2025-10-03T14:20:34.064Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-a-trigger
legacySlug: como-crear-un-activador
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

En este punto, tu chatbot está conectado a algún canal, pero para iniciar un flujo automáticamente cuando el usuario interactúe con el chatbot, debes configurar un trigger.

## Crear un trigger estándar

En esta sección, crearemos un trigger estándar que se puede configurar tanto en **Contactos** como en el flujo:

1. Haz clic en `Crear Trigger`. Se abrirá una nueva ventana.
2. Haz clic en **Cree una palabra clave que inicia un flujo**.
3. En el campo **Palabra clave**, definirás la palabra que funcionará como trigger:
    - En este primer momento, evita nombres comunes como "ayuda", "hola" y "buenas tardes". Usa "teste123" o "ayuda123". De esta forma, si el usuario utiliza un nombre común en un mensaje, el flujo con este trigger no se activará.
4. Elige el momento del disparo:
    - Cuando el mensaje comienza con la palabra clave: el flujo elegido se activará.
    - Si la frase escrita por el usuario comienza con la palabra clave: el flujo elegido se activará.
    - Si el mensaje contiene solo la palabra clave: el flujo elegido ejecutará una acción si el usuario escribe **solo** el único conjunto de palabras clave registrado.
5. En **Flujo** se define el flujo que se iniciará.
6. En **Grupos a incluir**, incluye las reglas de este trigger para un grupo de contactos específico.
7. En **Grupos a excluir**, excluye las reglas de este trigger para un grupo de contactos específico.
8. Haz clic en la casilla `Crear Trigger`.

> Si tu Agent Builder está activo, los triggers no funcionarán, porque la activación de los flujos la realiza el agente inteligente y no los triggers.

## Crear triggers en un flujo de automatización

1. Haz clic en **Flujo de automatización**.
2. Selecciona el flujo y, después, haz clic en el menú de tres líneas.
3. Haz clic en `Editar`.
4. En **Palabras clave de los triggers globales**, escribe el trigger deseado y haz clic en `Guardar cambios`.
