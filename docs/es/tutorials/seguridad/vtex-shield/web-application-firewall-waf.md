---
title: 'Web Application Firewall (WAF)'
id: 6BZYLlU03ws72iqIFF6jdn
status: PUBLISHED
createdAt: 2024-04-25T00:17:16.172Z
updatedAt: 2024-10-18T17:04:59.360Z
publishedAt: 2024-10-18T17:04:59.360Z
firstPublishedAt: 2024-04-25T01:16:27.468Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: web-application-firewall-waf
legacySlug: web-application-firewall-waf
locale: es
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ Esta funcionalidad es parte de [VTEX Shield](/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh).  Si ya es cliente de VTEX y desea adoptar VTEX Shield para su negocio, por favor, póngase en contacto con el [Soporte Comercial](/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Pueden aplicarse tarifas adicionales. Si aún no es cliente pero está interesado en esta solución, por favor, complete el [formulario de contacto](https://vtex.com/co-es/contacto/).

Web Application Firewall (WAF) es una capa de seguridad diseñada para proteger aplicaciones web mediante monitoreo y filtrado del tráfico de internet.

WAF se enfoca en las comunicaciones que se llevan a cabo a través de los protocolos HTTP (Hypertext Transfer Protocol) y HTTPS (HTTP Secure), analizando los datos de entrada y salida para detectar y bloquear posibles amenazas.

![waf-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/vtex-shield/web-application-firewall-waf_1.png)

WAF opera a partir de la configuración de [reglas de seguridad](#reglas-de-seguridad) definidas por el equipo de seguridad de VTEX basándose en el análisis de patrones de circulación de datos. Dichas reglas sirven para que WAF monitoree constantemente el tráfico web y cuando detecte una actividad potencialmente perjudicial, pueda bloquear el tráfico, impidiendo que los atacantes aprovechen las vulnerabilidades en la aplicación web.

## Reglas de seguridad

Las tiendas que utilizan VTEX Shield y deciden usar WAF cuentan con las siguientes reglas de seguridad contra amenazas en el sitio web:

| Amenaza | Regla de seguridad |
|---|---|
| Remote File Inclusions (RFI) | Detecta tentativas de incluir archivos, normalmente a través de scripts en el servidor web. |
| Directory Traversal | Comprueba y valida los nombres de archivo proporcionados por los usuarios, previniendo el acceso no autorizado a archivos y carpetas sensibles.   |
| Cross-Site Scripting (XSS) | Impide la inyección de scripts del lado del cliente en las páginas vistas por los visitantes.   |
| Carga de archivos | Detecta intentos de carga de archivos al servidor web.   |
| Trucos de evasión | Protege contra algunos trucos de codificación utilizados para intentar eludir los mecanismos de protección.   |
| Acceso no deseado | Detecta intentos de acceso a páginas administrativas o vulnerables, a bots y a herramientas de escaneo de seguridad.   |
| Ataques identificados | Previene varios tipos de ataques comunes y vulnerabilidades conocidas que deberían bloquearse.   |
| Filtro de IP | Consulta una lista de direcciones IP que tienen permiso o bloqueo de acceso.   |
| Bloqueo de la red Tor | Impide el acceso al sitio web utilizando el navegador Tor.   |

## Solicitar activación de WAF

Para solicitar la activación de WAF en tu tienda, ponte en contacto con el[ soporte VTEX](https://supporticket.vtex.com/support). Incluya la siguiente información en el ticket:

* URL que se añadirán a WAF.
* Nombre y datos de contacto de la persona que será el punto de contacto con el equipo de seguridad de VTEX durante el proceso de activación.
* Proveedor: para tener acceso a WAF, todo el tráfico de URL de la tienda debe pasar por el proveedor que VTEX utiliza actualmente. De no ser ese el caso, debes llevar a cabo un procedimiento con el equipo de tráfico de VTEX que puede durar entre una y dos semanas.

Después de la solicitud, el plazo de activación de WAF en las URL de la tienda es de cuatro semanas, además del plazo necesario para la migración al proveedor, de ser necesario.

## Más información

* [VTEX Shield](/es/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
