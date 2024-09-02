---
title: 'Nueva concatenación reduce errores en envíos de email'
id: 1MxYkGcD2I864SYI0iw8Uy
status: PUBLISHED
createdAt: 2018-08-13T18:26:18.982Z
updatedAt: 2019-12-31T15:13:43.972Z
publishedAt: 2019-12-31T15:13:43.972Z
contentType: updates
productTeam: Post-purchase
author: authors_24
slug: nueva-concatenacion-reduce-errores-en-envios-de-email
locale: es
legacySlug: nueva-concatenacion-reduce-errores-en-envios-de-email
announcementImageID: ''
announcementSynopsisES: 'Ahora usted puede usar punto y coma para separar direcciones de email, lo que reduce drásticamente el número de errores.'
---

A partir de ahora, su tiendna puede utilizar punto y coma (`;`) para concatenar direcciones de correo electrónico en el Message Center. Es decir, cuando necesite que un e-mail sea enviado a una serie de direcciones, usted puede acceder a la opción __Templates__ del centro de mensajes y, dentro del template deseado, separar los destinatarios por punto y coma.

Esta feature funciona en los campos de copia (`CC`) y copia oculta (`CCO`), así como la coma ya funcionaba anteriormente. Ahora las dos opciones de concatenación son válidas.

![Message Center bug fix - EN](//images.ctfassets.net/alneenqid6w5/4P6PvvTcgEASE8ooUakoSG/73b01a7f5ebdaaebc66aa805dbe61169/Message_Center_bug_fix_-_EN.png)

Este cambio simple en el módulo responsable del envío de e-mails transaccionales redujo drásticamente la tasa de errores en comunicaciones con clientes.

El gráfico siguiente muestra la tasa de errores de una tienda antes de implementado el soporte de concatenación con punto y coma. Más del 90% de los correos electrónicos fallaban todos los días.

![Message Center bug fix 2](//images.ctfassets.net/alneenqid6w5/2WTicguBZ6ucAO2a48QKum/fb0774ca2f6d2b746a702813c95126a2/Message_Center_bug_fix_2.png)

Después de implementada la mejora, los errores en el envío de e-mails transaccionales de la misma tienda fueron completamente eliminados, como muestra este otro gráfico:

![Message Center bug fix 3](//images.ctfassets.net/alneenqid6w5/1OmAZMSyp2cm8K4e6aKs8S/bf862028ae01ed3cb1b77cab375ebdf4/Message_Center_bug_fix_3.png)
