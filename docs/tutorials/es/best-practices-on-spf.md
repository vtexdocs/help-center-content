---
title: 'Buenas prácticas de SPF (Sender Policy Framework)'
id: 42t0lkl2VyC6Yewc4wA6wI
status: PUBLISHED
createdAt: 2017-08-09T16:58:00.716Z
updatedAt: 2024-02-22T18:11:49.023Z
publishedAt: 2024-02-22T18:11:49.023Z
firstPublishedAt: 2017-08-10T00:04:19.239Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configurar-spf
locale: es
legacySlug: configurar-spf
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

[SPF](http://www.open-spf.org/Introduction/) (Sender Policy Framework) es un sistema que evita que los servidores no autorizados envíen emails en nombre de un dominio. Este sistema verifica si el servidor cumple con las políticas determinadas por el administrador del dominio. Esta configuración es esencial para evitar problemas de entregabilidad de los emails transaccionales.

Si está intentando mejorar la entregabilidad de emails transaccionales de su tienda, también considere realizar la [configuración de DKIM](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails).

## Entendiendo la sintaxis 

Para conocer más detalles de la sintaxis, recomendamos [esta documentación](http://www.open-spf.org/SPF_Record_Syntax/). 

En el gestor de DNS, el SPF será una entrada TXT en la raíz del dominio (ej.: sitio.com), con el siguiente formato:

`site.com. IN TXT “v=spf1 a mx ip4:192.0.2.32/27 include:provedor.com ~all”`

Podemos dividir la anterior política en las siguientes secciones:

- `v=spf1`: prefijo obligatorio.
- `a mx ip4: 192.0.2.32/27 include:proveedor.com`: remitentes permitidos.
- `~all`: condición de inclusión o exclusión de remitentes fuera de los declarados anteriormente.

En el elemento de remitentes permitidos, las reglas mencionadas implican que un servidor puede enviar mensajes en nombre del dominio en cuestión (site.com) cuando:

- `a`: su dirección IP se encuentra en la entrada tipo A del dominio (site.com).
- `mx`: es designado como MX del dominio;
- `ip4`: pertenece al bloque de direcciones IP 192.0.2.32/27.
- `include`: satisface las reglas de SPF presentes en el dominio referenciado (provedor.com).

La condición de inclusión o exclusión puede presentar los siguientes valores:

- `+all`: se permitirá cualquier remitente fuera de los declarados.
- `-all`: se rechazará cualquier remitente fuera de los declarados.
- `~all`: se necesitará otra etapa de verificación para rechazar a los remitentes no autorizados. (Recomendado)
- `?all`: se omitirá la verificación de los remitentes no autorizados.  

Recomendamos utilizar `~all`, que tiene un mejor índice de entregabilidad. Si hay un remitente no autorizado, esta opción no detiene el envío del correo, sino que informa de que la validación SPF ha fallado.

## SPF en el contexto VTEX

VTEX usa el SPF `include:amazonses.com`. Es el servicio de envío de emails transaccionales de Amazon, utilizado en el remitente predeterminado (tipo VTEX) del Message Center.

Consulte nuestro artículo de [configuración del SPF](https://developers.vtex.com/vtex-rest-api/docs/setting-up-the-spf) para obtener más detalles.

