---
title: 'Introducción a expresiones y variables'
id: 4MDzN6Z7Sau2Xt1eyyQ4Ik
status: PUBLISHED
createdAt: 2025-09-16T16:14:16.027Z
updatedAt: 2025-10-03T14:20:04.285Z
publishedAt: 2025-10-03T14:20:04.285Z
firstPublishedAt: 2025-10-03T14:20:04.285Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: expressions-and-variables-introduction
legacySlug: introduccion-a-expresiones-y-variables
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

La creación de un flujo se realiza con el objetivo de conectar un conjunto de acciones por completo para obtener algún resultado.

Las variables sirven precisamente para almacenar los valores y resultados de esas etapas, con el fin de persistir los datos. Por ejemplo, la opción ""Wait for Response"" (Esperar Respuesta) a continuación generará una variable de flujo denominada ""name"" como respuesta del contacto. Además, la variable se utilizará para guardar los datos en el campo de contacto ""Name"".

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/introduccion-a-expresiones-y-variables_1.png)

Las variables comienzan con el símbolo @. Sin embargo, también puedes avanzar a expresiones de uso más complejo utilizando @(. Las expresiones se modelan dentro de sintaxis específicas y su objetivo es procesar datos para manipular las variables guardadas por la plataforma.

Al usar variables de flujo, también es posible especificar subtemas que desees. Observa el siguiente ejemplo:
`@results.gender.category` devuelve la categoría en la que se ubicó la respuesta de los contactos;
`@results.gender.value` devuelve la respuesta completa dada por el usuario.

Todas las variables y expresiones muestran su verdadero valor cuando el contacto está activo en el flujo. Si escribes una variable o expresión de manera incorrecta, el mensaje no será sustituido y la fórmula incorrecta se mostrará al usuario.

#### Otras variables
Además de la expresión @results, también existen otras expresiones que utilizamos con frecuencia, como:

##### `@contact`
Esta expresión se usa para recuperar valores guardados en campos de contacto estándar en la Plataforma Weni y se actualizan a través de la tarjeta ""Update Contact"" (Actualizar el Contacto). Ejemplos:
`@contact.name`: Nombre del contacto
`@contact.first_name`: Primer nombre del contacto

##### `@fields`
Esta expresión se utiliza para recuperar valores guardados en campos de contacto que no son estándar en la Plataforma Weni, a través de la tarjeta ""Update Contact"" (Actualizar el Contacto). Los campos de contacto se usan mucho para almacenar información general sobre el contacto, ya que esta información puede recuperarse en cualquier flujo usando la expresión `@fields`. Por ejemplo:
`@fields.idade`: Edad del contacto
`@fields.email`: Correo electrónico del contacto, si se guarda en un campo de contacto en lugar de URN

##### `@urns`
Esta expresión se utiliza para recuperar el identificador del canal principal del contacto en la Plataforma Weni (si el proyecto no es anónimo), por ejemplo:
`@urns.whatsapp`: Número de Whatsapp
`@urns.mailto`: Correo electrónico del contacto

##### `@webhook`
Esta expresión se utiliza para recuperar valores devueltos por la última llamada webhook realizada en el flujo, por ejemplo:

`@webhook.results.cliente`: Nombre del cliente devuelto por la API, en caso de que retorne solo un objeto
`@webhook.results.0.cliente`: Nombre del cliente devuelto por la API. Si retorna en un array, es necesario especificar la posición del array que deseas en la expresión, usando 0, 1, 2 y así sucesivamente.

Para entender más sobre expresiones, mira nuestro [Weni Responde sobre este tema](https://comunidade.weni.ai/t/expressoes-e-variaveis/248).
