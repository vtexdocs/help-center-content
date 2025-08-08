---
title: '¿Por qué no recibo emails de VTEX?'
id: 4M2uVZdtrJzgyAySuZ4OLg
status: PUBLISHED
createdAt: 2024-05-28T17:21:01.400Z
updatedAt: 2024-11-08T18:46:08.368Z
publishedAt: 2024-11-08T18:46:08.368Z
firstPublishedAt: 2024-05-29T13:14:04.884Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-receive-emails-from-vtex
legacySlug: por-que-no-recibo-emails-de-vtex
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Central de mensajes
  - Plantillas de emails
  - Importación de plantillas
  - Token de autenticación
---

A través del [Centro de mensajes](https://help.vtex.com/es/tutorial/como-funciona-el-message-center--tutorials_84), VTEX ofrece a los retailers la opción de personalizar las plantillas para enviar emails a los usuarios. Estos emails pueden utilizarse para transmitir la siguiente información:
- Token de autenticación en la tienda
-	Notificaciones de creación y pago de pedidos
- Confirmación de exportación de datos
- Logs de errores de importación de plantillas

Si detectas que los emails de tu tienda no se están enviando de la manera adecuada, perjudicando la transmisión de información importante a tus clientes, aquí tienes algunas posibles soluciones para identificar el origen de este problema.

## Solución

Para corregir interrupciones en el envío de emails de VTEX, consulta las siguientes soluciones:

- [Verificar remitente](#verificar-remitente)
- [Configurar servidor de correo](#configurar-servidor-de-correo)
- [Configurar notificaciones de pedidos y pagos](#configurar-notificaciones-de-pedidos-y-pagos)
- [Remover email de la lista de supresión de AWS](#lista-de-supresion-de-aws)

### Verificar remitente

Si tu tienda posee un remitente personalizado, además del remitente predeterminado __VTEX-DEFAULT__, realiza una prueba de envío de mensajes siguiendo los pasos que se indican a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Plantillas de email > Remitentes__.
2. En la casilla con el nombre de tu remitente registrado, haz clic en __Test-again__. Al cabo de unos segundos se mostrará un mensaje de confirmación de email enviado.
3. Comprueba que se envió un email de VTEX a la dirección del usuario con sesión iniciada en el Admin.
4. Si no recibiste el email de VTEX, consulta la solución a continuación.

### Configurar servidor de correo

En VTEX puede utilizarse el servidor de correo nativo o [configurar un servidor SMTP externo](https://help.vtex.com/es/tutorial/personalizando-o-smtp-da-vtex--tutorials_2733). Si utilizas un servidor SMTP externo, comprueba los escenarios que se indican a continuación.

#### Configurar SMTP en el Admin VTEX

1. En el Admin VTEX, accede a __Configuración de la tienda > Plantillas de email > Remitentes__.
2. Haz clic en el nombre de tu remitente registrado.
3. En __EDIT_PROVIDER_SMTP_DATA__, verifica que todos los datos estén correctos.
4. Haz clic en `Save`.
5. En la tarjeta con el nombre de tu remitente registrado, haz clic en `Test-again`. Al cabo de unos segundos se mostrará un mensaje de confirmación de email enviado.
6. Comprueba que se envió un email de VTEX a la dirección del usuario con sesión iniciada en el Admin.

Después de la prueba, si el usuario que inició sesión en el Admin no recibió el email enviado por VTEX, te recomendamos que utilices el remitente de VTEX (__VTEX-DEFAULT__) como predeterminado y vuelvas a realizar la prueba nuevamente. Si tras repetir el procedimiento no recibiste el email de VTEX, consulta la solución a continuación.

#### Configurar SPF (Sender Policy Framework)

Comprueba que el servidor SMTP externo está correctamente configurado según el [sistema SPF](https://help.vtex.com/es/tutorial/configurar-spf--42t0lkl2VyC6Yewc4wA6wI), que se encarga de impedir que servidores no autorizados envíen emails en nombre de un dominio concreto. Si es necesario, puedes realizar la [configuración del SPF (Sender Policy Framework)](https://developers.vtex.com/docs/guides/setting-up-the-spf) y el [DKIM](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails) (DomainKeys Identified Mail) en el servidor.

<div class ="alert alert-warning">
Comprueba que los emails no estén en la carpeta de spam. A veces caen en esta carpeta debido a reglas internas de los servidores de correo.
</div>

### Configurar notificaciones de pedidos y pagos

VTEX envía emails a los usuarios cuando se crea un pedido o se efectúa un pago. Sigue los pasos que se indican a continuación para comprobar la configuración de las notificaciones de pagos:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__.
2. Haz clic en la pestaña __Notificaciones__.
3. Asegúrate de que tu email figura en el campo correspondiente a la opción __Mi email VTEX__. Si lo deseas, ingresa un email secundario en el campo __Otro email__ y realiza el envío del mensaje de prueba como se explica en la sección [Verificar remitente](#verificar-remitente).
4. Comprueba que se envió un email de VTEX a la dirección de email del usuario con sesión iniciada en el Admin.
5. Si no recibiste el email de VTEX, consulta la solución a continuación.

### Lista de supresión de AWS

Amazon (AWS) tiene una plataforma de email llamada Amazon Simple Email Service ([Amazon SES](https://aws.amazon.com/pt/ses/)). Entre las diversas características de este servicio, existe una lista de supresión de direcciones de email que contiene destinatarios que pueden haber mostrado algún tipo de comportamiento sospechoso que hayan afectado a un cliente de AWS.

En situaciones normales, una dirección de email puede ser incluida en la lista de supresión de AWS y ser removida transcurridas aproximadamente 12 horas. Durante este periodo, los emails enviados por VTEX no se recibirán en la dirección de email incluida en la lista.

<div class ="alert alert-warning">
La gestión de la lista de supresión es responsabilidad de AWS, y VTEX no tiene ninguna responsabilidad sobre el movimiento de direcciones dentro y fuera de la lista.
</div>

Si sospechas que tu dirección de email ha sido bloqueada por AWS, espera 12 horas e intenta volver a enviar un email a la dirección bloqueada.

También puedes comprobar si la dirección de email está registrada como copia en alguna de las plantillas de emails transaccionales de la tienda. Para comprobarlo, sigue los pasos que se indican a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Plantillas de email > Plantillas__.
2. Haz clic en la tarjeta de la plantilla deseada.
3. Comprueba que en los campos __CC:__ o __CCO:__ de la plantilla no figura ninguna dirección de email. En caso contrario, elimina la información y haz clic en `Save`.
4. Realiza este procedimiento con cada una de las plantillas de la tienda y haz una prueba de envío de email a la dirección deseada.

![copia_email_es](//images.ctfassets.net/alneenqid6w5/11EjQQnjcUHp2IHF87gNCy/a31ab802e560774fa1ef533d50dffd88/copia_email_es.png)
