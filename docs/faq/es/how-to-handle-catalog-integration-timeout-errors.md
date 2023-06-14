---
title: '¿Cómo manejar los errores Timeout de integración de catálogo?'
id: 41SucuGFjn1ndIN2iR1vvr
status: DRAFT
createdAt: 2019-03-20T21:50:15.029Z
updatedAt: 2022-08-24T18:35:53.247Z
publishedAt: 
firstPublishedAt: 2019-03-21T19:24:44.908Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 4iKDU1m0huXy1qFWff7vY5
slug: untitled-entry-2019-03-20-at-09-50-15
legacySlug: untitled-entry-2019-03-20-at-09-50-15
---

Es posible que, al registrar productos a través de [ERP (Enterprise Resource Planning)](https://help.vtex.com/es/tutorial/guia-de-integracao-de-erps-arquitetura-do-catalogo?locale=pt "ERP (Enterprise Resource Planning)") en el catálogo de una tienda, la integración no funcione en el primer intento. En lugar de esto, la [API (Application Programming Interface)](https://help.vtex.com/es/tutorial/introducao-as-apis-vtex--3SjAqQ0BeUqu2ge8AiIkmW "API (Application Programming Interface)")  responde con el error `Timeout`.

A veces, esta respuesta es una simple cuestión de sistema, por más que la integración haya sido configurada de forma correcta. En otros casos, el error se produce debido a algún problema de programación, de hecho.

Independiente del escenario, el `Timeout` es una forma de que el sistema indique al usuario que el comando tardó más tiempo del esperado para completar la acción requerida.

Por más que sea considerado un "error", recibir la respuesta `Timeout` está __previsto__ dentro del flujo de integración. Por causa de esto, la programación debe estar preparada para los reintentos. Si este fuera el caso, repita el proceso de registro del producto normalmente.

Si el problema persiste, consulte a nuestro equipo de soporte para evaluar la situación.

