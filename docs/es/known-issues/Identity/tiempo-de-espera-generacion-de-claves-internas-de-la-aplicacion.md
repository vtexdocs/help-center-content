---
title: 'Tiempo de espera Generación de claves internas de la aplicación'
id: 11U62yvD8i6Mp79rUC38FU
status: PUBLISHED
createdAt: 2024-05-08T11:28:41.002Z
updatedAt: 2024-05-09T12:04:05.533Z
publishedAt: 2024-05-09T12:04:05.533Z
firstPublishedAt: 2024-05-08T11:28:41.857Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: timeout-generating-internal-application-keys
locale: es
kiStatus: Fixed
internalReference: 1029425
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Actualmente tenemos un problema que puede afectar a algunos clientes al generar claves de Aplicaciones.


##

## Simulación



Cuando el cliente utiliza su propio SMTP para la plantilla del Gestor de Licencias en el centro de mensajes, la interfaz de usuario de la Clave de Aplicación intentará utilizar su SMTP para enviar el correo electrónico, pero si tenemos un tiempo de espera mientras se envía el correo electrónico, la Clave de Aplicación no se generará también.



## Workaround



El cliente puede cambiar el SMTP del Gestor de Licencias en el centro de mensajes, para configurar el SMTP de VTEX en lugar de su propio SMTP, evitando el timeout. O puede intentar resolver el problema con su propio SMTP.





