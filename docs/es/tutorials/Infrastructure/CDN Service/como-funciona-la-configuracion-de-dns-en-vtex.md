---
title: 'Cómo funciona la configuración de DNS en VTEX'
id: 2P5k3oMYOj7TgSK4Mrxmgy
status: PUBLISHED
createdAt: 2024-01-23T16:53:52.076Z
updatedAt: 2024-01-23T17:00:29.714Z
publishedAt: 2024-01-23T17:00:29.714Z
firstPublishedAt: 2024-01-23T16:58:57.454Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-dns-configuration-works-on-vtex
locale: es
legacySlug: como-funciona-la-configuracion-de-dns-en-vtex
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

La configuración del DNS es un paso esencial para realizar el go live de tu tienda. En VTEX, la tienda requiere una configuración específica del sistema de DNS (Domain Name System) para funcionar correctamente. El DNS es el sistema que traduce los nombre de dominio (como `mitienda.com`) a direcciones IP de servidores que almacenan los archivos necesarios para mostrar una página web.

Para configurar el DNS, debes crear un [CNAME](https://www.cloudflare.com/es-es/learning/dns/dns-records/dns-cname-record/) para el dominio principal de la tienda y dirigirlo a `{dominioPrincipal}.cdn.vtex.com`. Por ejemplo, para la tienda `www.mitienda.com` debes crear un CNAME que apunte a `www.mitienda.com.cdn.vtex.com`.

Las redirecciones funcionan en etapas:

1. El CNAME creado por tu equipo dirige el tráfico de la tienda a una ubicación específica en la infraestructura VTEX.

   `www.mitienda.com` 🠖 `CNAME `🠖 `www.mitienda.com.cdn.vtex.com`
2. Internamente, VTEX configura un segundo CNAME que dirige al servicio de Azion o CloudFront.

   `www.mitienda.com.cdn.vtex.com` 🠖 `CNAME` 🠖 `uug412qft7.map.azionedge.net`
3. Por último, una redirección de tipo A dirige la ruta de servicio Azion/CloudFront a una dirección IP específica.

   `uug412qft7.map.azionedge.net` 🠖 `A` (tipo de registro que contiene una dirección IP) 🠖 `185.76.11.52`

Esta configuración garantiza que la dirección IP resuelta sea dinámica y que pueda cambiar en cualquier momento. Esto se debe a que la dirección IP se adapta para coincidir con el servidor de CDN (Content Delivery Network) más cercano a la ubicación del visitante. La adaptación mejora el rendimiento del sitio web, ya que los archivos se entregan al visitante desde los servidores más cercanos geográficamente.

Para más información sobre la configuración de DNS en VTEX, consulta[ Go live](https://help.vtex.com/es/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj).
