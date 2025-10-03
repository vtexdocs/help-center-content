---
title: 'Usando grupos para controlar la atención humana'
id: 64hOFPHnTxUcaMSnIRULrz
status: PUBLISHED
createdAt: 2025-09-12T16:48:55.585Z
updatedAt: 2025-10-03T14:21:49.503Z
publishedAt: 2025-10-03T14:21:49.503Z
firstPublishedAt: 2025-10-03T14:21:49.503Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-groups-to-organize-human-attendance
legacySlug: usando-grupos-para-controlar-la-atencion-humana
locale: es
subcategoryId: 6Jkw23mYV23p4V33O1Hjdh
---

El uso de grupos para controlar los contactos que están en atención humana es esencial.

ATENCIÓN: si los contactos no son añadidos a un grupo de control, el chatbot
entrará en conflicto e interrumpirá la atención humana, enviando los mensajes
estándar configurados en su entorno.

#### Añadiendo contactos al grupo de control

En este artículo nos referiremos al grupo de control como Atención Humana.

Debes añadir el contacto a este grupo en el flujo donde abres un ticket, como
se mostró anteriormente.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_1.png) 

Es importante mencionar que, si abres tickets en flujos diferentes, necesitas hacer esto en todos los flujos.

#### Ignorando participantes del grupo de control en disparadores

Solo añadir a este grupo no es suficiente, sino que es la base que necesitas
para saber cuáles contactos deben ser ignorados en los mensajes automáticos
mientras estén en atención.

Para ello, debes añadir este grupo a la lista de grupos ignorados para cada uno
de los disparadores configurados en tu proyecto, como se ejemplifica en la
imagen a continuación.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_2.png) 

Deverá selecionar o ativador que inicia com qualquer mensagem que o contato enviar e excluir o grupo de atendimento humano para evitar que essas pessoas falem com o bot quando estiver no atendimento humano.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_3.png) 

Con esto configurado, el chatbot no interrumpirá la atención humana y la funcionalidad funcionará como se espera.

#### Eliminando contactos del grupo de control

Es importante recordar eliminar el contacto de este grupo cuando la sesión de
atención humana haya finalizado. Para ello, existe un tipo de disparador
específico: 'Inicie un flujo después de cerrar un ticket'.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_4.png)![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_5.png) 

Este puede ser un flujo extremadamente simple, donde la única acción es eliminar el contacto del grupo de control Atención Humana:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_6.png)

### ¿Cómo enviar campos personalizados?

Los campos personalizados que se deben enviar deben ser definidos en el cuerpo
de la tarjeta de Ticket, en formato JSON, con cada campo como atributo de
\`custom\_fields\`, representado por su clave y valor.

Nota: el valor de cada campo puede o no estar entre """".

A continuación, observe un ejemplo que muestra la configuración de campos
personalizados, donde el campo \``origin`\` tiene su valor definido como el
\``result`\` origen, entre """" por ser del tipo string.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_7.png)![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-la-atencion-humana_8.png)
