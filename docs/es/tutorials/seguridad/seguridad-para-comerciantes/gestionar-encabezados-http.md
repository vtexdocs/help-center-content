---
title: 'Gestionar encabezados HTTP'
id: 2cCTvwQR3Z4ENVKMJU6NK3
status: PUBLISHED
createdAt: 2024-06-07T17:58:18.041Z
updatedAt: 2024-06-07T18:40:52.927Z
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

El protocolo de comunicación HTTP (Hypertext Transfer Protocol) es fundamental en la transmisión de datos a través de la World Wide Web. Opera con un modelo cliente-servidor en el que clientes como navegadores solicitan recursos como páginas de los servidores web. Las solicitudes se realizan mediante requests que se intercambian en formato de mensaje siguiendo un conjunto de reglas y normas definidas por el protocolo.

Los encabezados son clave en la comunicación HTTP, ya que proporcionan información adicional sobre la transacción en curso. Hay dos tipos principales de encabezados:

- __Encabezados de request:__ enviados por el cliente al servidor. Contienen información sobre el request realizado, tal como tipo de método HTTP utilizado, tipo de contenido aceptado, cookies, entre otros.
- __Encabezados de respuesta:__ enviados por el servidor al cliente. Proporcionan información sobre la respuesta enviada, tal como status de la respuesta, tipo de contenido devuelto, cookies, entre otros.

> ℹ️ Para más información, consulta la guía de [MDN HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) y la documentación relacionada.

En esta guía, aprenderás a gestionar los encabezados de respuestas de seguridad.

## Encabezados de respuestas de seguridad

Si necesitas cambiar el valor de un encabezado de respuesta de seguridad en una tienda Store Framework, abre un ticket con el [soporte VTEX](https://help.vtex.com/es/support).

A continuación se indican los encabezados que admiten modificación:

- [**X-Frame-Options**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-Frame-Options): permite controlar la incorporación de unos sitios web en otros mediante el uso de frames. Este encabezado es una medida de seguridad para proteger a los usuarios contra ataques de [clickjacking](https://developer.mozilla.org/es/docs/Web/Security/Types_of_attacks), que ocurren cuando un atacante engaña al usuario para que haga clic en algún elemento de una página web sin su consentimiento.
- [**X-Content-Type-Options**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-Content-Type-Options): protege contra vulnerabilidades de [MIME](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types), que ocurren cuando un sitio web permite que los usuarios carguen contenido.
- [**Content-Security-Policy (CSP)**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Content-Security-Policy): permite controlar los recursos que el agente de usuario puede cargar a una cierta página, lo que ayuda contra ataques de [cross-site scripting](https://developer.mozilla.org/es/docs/Glossary/Cross-site_scripting).
- [**Strict-Transport-Security (HSTS)**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Strict-Transport-Security): les indica a los navegadores que solo se puede acceder al sitio web a través de HTTPS.
- [**X-XSS-Protection**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/X-XSS-Protection): indica a los navegadores cómo reaccionar ante ataques de cross-site scripting (XSS), activando el filtro integrado para bloquear la ejecución de scripts maliciosos en el navegador del usuario.
- [**Referrer-Policy**](https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Referrer-Policy): determina la información de origen de la página que se comparte con la página de destino en requests de HTTP. Es esencial para proteger la privacidad de los usuarios y la seguridad del sitio web.

## Encabezados personalizados

Puedes configurar un encabezado personalizado, es decir, un valor que no está estandarizado y que es una adaptación a los requisitos o funcionalidades particulares de las necesidades de la tienda.

> ⚠️ Solo se puede agregar un encabezado personalizado por cuenta.

Si necesitas configurar un encabezado personalizado, abre un ticket con el soporte VTEX y proporciona las claves y valores. Esta información es tu responsabilidad. Puedes utilizar la documentación de [MDN HTTP headers](https://developer.mozilla.org/es/docs/Web/HTTP/Headers) como guía.

A continuación se presenta un ejemplo de encabezado personalizado:

```json
"customHeader": {
   "key": "Strict-Transport-Security",
   "value": "max-age=31536000; includeSubdomains; preload"
 }
```

El valor `max-age=31536000; includeSubdomains` en el contexto del encabezado Strict-Transport-Security (HSTS) representa la duración máxima, en segundos, que el navegador debe exigir la aplicación de la política HSTS en un dominio dado y sus subdominios.

La directriz `preload` indica que se debe incluir el dominio en la lista de carga previa de HSTS para garantizar que los navegadores compatibles solo se conectarán a través de HTTPS, incluso para el request inicial.
