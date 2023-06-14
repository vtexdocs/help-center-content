---
title: 'Trigger no funciona'
id: 4dX1C5BVnkobCV7VrwRiD4
status: PUBLISHED
createdAt: 2019-04-01T22:06:02.199Z
updatedAt: 2019-12-31T15:18:25.369Z
publishedAt: 2019-12-31T15:18:25.369Z
firstPublishedAt: 2019-04-01T22:09:33.094Z
contentType: knownIssue
productTeam: Master Data
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: Master Data
slug: trigger-no-funciona
kiStatus: Fixed
internalReference: 
---

## Sumario

Algunos campos de configuración de trigger pueden afectar negativamente su experiencia con los Triggers V1 del MasterData.

Estos campos se pueden encontrar en la pestaña `Ações em caso de positivo` y __deben permanecer vacíos__:

- Correo electrónico para notificación de errores 
- Destinatario del correo electrónico en el modo de prueba
- Correo electrónico de origen 
- Nombre de visualización del correo electrónico de origen


También se recomienda no utilizar la pestaña `Ações em caso de positivo` y Status: `Teste`.

## Simulación

Este error se puede simular llenando los siguientes campos:

- Correo electrónico para notificación de errores 
- Destinatario del correo electrónico en el modo de prueba
- Correo electrónico de origen 
- Nombre de visualización del correo electrónico de origen

## Workaround

Como se mencionó anteriormente, deje los siguientes campos vacíos:

- Correo electrónico para notificación de errores 
- Destinatario del correo electrónico en el modo de prueba
- Correo electrónico de origen 
- Nombre de visualización del correo electrónico de origen

