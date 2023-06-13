---
title: La interfaz de usuario muestra un error al exportar archivos de catálogo si el remitente de la plantilla de correo electrónico tiene su propio SMTP.
id: 6MCsAvrOHbLTYjuxRHDsuU
status: PUBLISHED
createdAt: 2023-03-15T19:04:48.152Z
updatedAt: 2023-03-15T19:04:59.595Z
publishedAt: 2023-03-15T19:04:59.595Z
firstPublishedAt: 2023-03-15T19:04:48.719Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-interfaz-de-usuario-muestra-un-error-al-exportar-archivos-de-catalogo-si-el-remitente-de-la-plantilla-de-correo-electronico-tiene-su-propio-smtp
kiStatus: Backlog
internalReference: 771942
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al exportar datos de catálogo utilizando el módulo "Importar y Exportar", la interfaz de usuario mostrará el siguiente mensaje: "Se ha producido un problema inesperado: Se ha producido un error: Error al enviar correo electrónico para la cuenta (accountname)" indicando que hubo un error al enviar el archivo al correo electrónico del usuario. Sin embargo, el correo electrónico se envía correctamente junto con el documento de exportación.

Este comportamiento sólo se produce cuando el remitente registrado en el módulo "Plantillas de correo electrónico" tiene su propia configuración SMTP.


##

## Simulación



1-Registre un remitente válido con su propio proveedor en las configuraciones del Centro de Mensajes.
2-Configure este remitente en la plantilla "Exportar" del Centro de Mensajes.
3-Intente exportar cualquier dato del catálogo desde el módulo "Importar y Exportar".
4-Observe si aparece el mensaje "Se ha producido un problema inesperado: Se ha producido un error: Error al enviar correo electrónico para la cuenta (accountname)".
5-Al acceder a su buzón de correo verá que el fichero ha llegado correctamente.



## Workaround



Utilice el remitente VTEX en lugar de utilizar un SMTP propio.





