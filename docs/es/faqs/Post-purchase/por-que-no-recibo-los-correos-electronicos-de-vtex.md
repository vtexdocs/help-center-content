---
title: '¿Por qué no recibo los correos electrónicos de VTEX?'
id: 18LsIyIBLuEmSOos4KUaI0
status: PUBLISHED
createdAt: 2018-01-22T21:49:50.299Z
updatedAt: 2023-03-20T20:09:32.556Z
publishedAt: 2023-03-20T20:09:32.556Z
firstPublishedAt: 2018-01-22T22:47:09.416Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_59
slugEN: why-dont-i-receive-vtex-emails
locale: es
legacySlug: por-que-no-recibo-los-correos-electronicos-de-vtex
---

VTEX envía emails a los usuarios de tu tienda en determinados escenarios, como para confirmar la exportación de datos, para enviar informes de error de importación de plantillas, o para enviar el token de autenticación de un usuario.

Si no recibes los emails de VTEX, compruebas las posibles causas:

1. Verifica que el remitente funcione. Si usas un remitente personalizado, realiza la prueba de envío en su Admin VTEX, accedendo a **Configuración de la tienda > Plantillas de email > Remitentes**. El módulo intentará enviar un email usando los datos configurados y mostrará el resultado de la prueba en la pantalla.

2. Si usas un servidor [servidor SMTP](https://help.vtex.com/es/tutorial/customizing-the-vtex-smtp--tutorials_2733) propio, te recomendamos que cambies y uses el servidor estándar de VTEX.

3. Verifica tu configuración [configuración de SPF](https://help.vtex.com/es/tutorial/configuracao-de-spf) y tu carpeta de correo no deseado. Los emails pueden estar llegando a esta carpeta debido a la regla de tu servidor de email.

4. Verifica que el campo de la dirección de email esté correctamente completado, en las configuraciónes de pago. En el Admin VTEX, accede a **Configuración de la Tienda > Pago > Configuración** y haga click en la ventana **Notificaciones**. Si el campo está vacío, los emails no se enviarán.

5. Verifica si el email ingresó en la lista de eliminación de AWS.

## Lista de eliminación de AWS

Amazon SES mantiene una lista de eliminación de direcciones de email de destinatarios que recientemente generaron un aviso de rebote (bounce) para cualquier cliente de Amazon SES. Esta es una operación automática de la que se encarga Amazon y no significa que el email permanecerá en una lista negra. 

Este rebote puede ocurrir cuando otros usuarios emplean al proveedor que envió el email de forma maliciosa. [Aquí](https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list.html) puedes ver la información recopilada por AWS con respecto a esta lista.

Si ya realizaste todos los intentos mencionados y no hay obtenido el resultado deseado, es probable que tu email esté en la lista de eliminación de AWS. En ese caso, [contacte nuestro soporte](https://support.vtex.com/hc/es-419/requests) para solicitar que se quite el email de esa lista.
