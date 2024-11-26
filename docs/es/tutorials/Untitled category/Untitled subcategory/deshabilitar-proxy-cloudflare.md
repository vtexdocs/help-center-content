---
title: 'Cómo deshabilitar el proxy de Cloudflare'
id: 75QqsXAqR7NdkRc1GZPiXb
status: PUBLISHED
createdAt: 2021-11-19T18:31:43.174Z
updatedAt: 2022-01-11T16:58:58.183Z
publishedAt: 2022-01-11T16:58:58.183Z
firstPublishedAt: 2021-11-22T15:19:34.246Z
contentType: tutorial
productTeam: Reliability
author: 4SqDPmUJIIz2KMMKgiyqKl
slugEN: disable-cloudflare-proxy
locale: es
legacySlug: deshabilitar-proxy-cloudflare
subcategoryId: unknown-subcategory
---

Cuando se utiliza el servicio Cloudfare, su proxy está activado como estándar. Este proxy puede interferir con nuestro servicio de borde (CDN), que ya se encarga de entregar el sitio web de tu tienda de forma optimizada. La interferencia se produce porque el proxy de Cloudflare hace que el dominio apunte a Cloudflare en lugar de a VTEX. Esto impide la renovación de los certificados, ya que este proceso requiere que el dominio apunte necesariamente a VTEX. 

Como consecuencia, el sitio web puede quedar fuera de línea. Si el dominio está expirado desde hace más de 10 días, se elimina automáticamente de VTEX porque se considera que la tienda ya no está en VTEX.

Para desactivar el proxy de CloudFlare (y, en consecuencia, deshabilite los servicios CDN y WAF de CloudFlare), entra en tu cuenta de Cloudflare y haz clic en el botón **DNS**. En el __*panel DNS management*__, haz clic en el ícono de la nube naranja debajo de __*Proxy status*__ para cada entrada de DNS que debe apuntar a VTEX. 

![Configuración de proxy de Cloudflare](https://images.ctfassets.net/alneenqid6w5/1pEYEd1KWlH0P97Pgwyb7n/7b76e3396ed5b27b0c14ae76bb77b76a/DNS_Management.png)

Observa que si el proxy está activado, el ícono será de color naranja con el texto __*Proxied*__. De lo contrario, el ícono se mostrará en gris con el texto __*DNS Only*__.

>ℹ️ Si deseas utilizar el CDN y el WAF de Cloudflare, puedes insertar un proxy inverso frente a los servicios de VTEX. Ten en cuenta que esta configuración no se recomienda, ya que VTEX ya ofrece servicios de CDN y WAF en su propio servicio de borde. Las fallas de CDN externos no implican fallas en los sistemas de VTEX. No tenemos ninguna responsabilidad sobre los CDN de terceros.

