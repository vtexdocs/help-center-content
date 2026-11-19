---
title: 'Gestionar encabezados HTTP'
id: 2cCTvwQR3Z4ENVKMJU6NK3
status: PUBLISHED
createdAt: 2024-06-07T17:58:18.041Z
updatedAt: 2026-10-21T17:00:00.000Z
publishedAt: 2024-06-07T18:40:52.927Z
firstPublishedAt: 2024-06-07T18:40:52.927Z
contentType: tutorial
productTeam: Reliability
author: YRJ73j8mt38D5TUleocQB
slugEN: managing-http-headers
legacySlug: gestionar-encabezados-http
locale: es
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

El Protocolo de Transferencia de Hipertexto (HTTP) es un protocolo de comunicación básico usado para transferir datos en la World Wide Web (WWW). Opera con un modelo cliente-servidor, donde los clientes, como los navegadores, solicitan recursos como páginas web a los servidores web. Las solicitudes se intercambian en formato de mensaje siguiendo un conjunto de reglas y estándares definidos por el protocolo.

Los encabezados desempeñan un papel fundamental en la comunicación HTTP, proporcionando información adicional sobre la operación en curso. Hay dos tipos principales de encabezados:

- **Encabezados de solicitud:** enviados por el cliente al servidor. Contienen información sobre la solicitud realizada, como el tipo de método HTTP utilizado, el tipo de contenido aceptado, cookies, entre otros.
- **Encabezados de respuesta:** enviados por el servidor al cliente. Proporcionan información sobre la respuesta enviada, como el status de la respuesta, el tipo de contenido devuelto, cookies, entre otros.

> ℹ️ Para más información consulta la guía [HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) de MDN y la documentación relacionada.

Esta guía explica cómo gestionar los encabezados de respuesta de seguridad en tu tienda desarrollada con Store Framework.

## Encabezados de respuesta de seguridad

En las tiendas de Store Framework puedes agregar o cambiar el valor de un encabezado de respuesta de seguridad directamente en el Admin VTEX. Los encabezados que admiten edición son:

- [**X-Frame-Options**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-Frame-Options): permite controlar la incorporación de unos sitios web en otros mediante el uso de frames. Este encabezado es una medida de seguridad para proteger a los usuarios contra ataques de [clickjacking](https://developer.mozilla.org/es/docs/Web/Security/Attacks#click-jacking), que ocurren cuando un atacante engaña al usuario para que haga clic en algún elemento de una página web sin que se dé cuenta.
- [**X-Content-Type-Options**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-Content-Type-Options): protege contra vulnerabilidades de [MIME](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types), que ocurren cuando un sitio web permite que los usuarios carguen contenido.
- [**Content-Security-Policy (CSP)**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Content-Security-Policy): permite controlar los recursos que el usuario puede cargar en una cierta página, lo que evita ataques de [cross-site scripting](https://developer.mozilla.org/es/docs/Glossary/Cross-site_scripting).
- [**Strict-Transport-Security (HSTS)**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Strict-Transport-Security): informa a los navegadores que solo se puede acceder al sitio web a través de HTTPS.
- [**X-XSS-Protection**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-XSS-Protection): informa a los navegadores cómo reaccionar ante ataques de cross-site scripting (XSS), activando el filtro integrado para bloquear la ejecución de scripts maliciosos en el navegador del usuario.
- [**Referrer-Policy**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Referrer-Policy): determina la información de la página de origen que se comparte con la página de destino en solicitudes HTTP. Esto es fundamental para proteger la privacidad del usuario y la seguridad del sitio web.

## Encabezados personalizados

Puedes configurar encabezados personalizados, es decir, valores no predeterminados y específicos para los requisitos o funcionalidades de la tienda. Puedes agregar más de un encabezado personalizado a tu cuenta.

> ℹ️ Eres responsable de la información de los encabezados personalizados. Consulta la documentación de MDN sobre [encabezados](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Headers).

Para configurar un encabezado personalizado sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Tienda**.
2. Haz clic en la pestaña **Avanzado**.
3. Navega hasta la sección **Encabezados personalizados**.
4. Haz clic en `Agregar`.
5. Completa los campos **ID del encabezado**, **Clave del encabezado** y **Valor del encabezado** siguiendo los estándares HTTP.
6. Haz clic en `Aplicar`.

> ℹ️ La actualización puede tardar hasta un día en reflejarse en la tienda debido a la caché.

Para más detalles consulta la guía para desarrolladores [Adding custom headers to your Store Framework store](https://developers.vtex.com/docs/guides/vtex-io-documentation-adding-custom-headers-to-your-store-framework-store).

A continuación se muestra un ejemplo de encabezado personalizado:

```json
"customHeader": {
   "key": "Strict-Transport-Security",
   "value": "max-age=31536000; includeSubdomains; preload"
 }
```

El valor `max-age=31536000; includeSubdomains` en un encabezado Strict-Transport-Security (HSTS) representa la duración máxima, en segundos, durante la cual el navegador debe aplicar la política HSTS a un dominio específico y sus subdominios.

La directriz `preload` indica que el dominio debe incluirse en la lista de precarga de HSTS, lo que garantiza que los navegadores compatibles solo se conecten vía HTTPS, incluso en la solicitud inicial.
