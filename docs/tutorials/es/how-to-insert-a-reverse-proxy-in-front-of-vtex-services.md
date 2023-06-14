---
title: 'Cómo insertar un proxy inverso frente a los servicios VTEX'
id: 4PFWsfRAKviNVPf1bYdiir
status: PUBLISHED
createdAt: 2019-09-20T14:11:30.301Z
updatedAt: 2020-08-20T21:15:13.613Z
publishedAt: 2020-08-20T21:15:13.613Z
firstPublishedAt: 2019-09-23T12:22:50.056Z
contentType: tutorial
productTeam: Reliability
author: authors_24
slug: cómo-insertar-un-proxy-inverso-frente-a-los-servicios-vtex
legacySlug: ¿por-qué-no-recomendamos-insertar-un-proxy-inverso-en-los-servicios-vtex?
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

<div class="alert alert-danger">
<strong>Atención:</strong> las explicaciones de este artículo están destinadas a abordar casos de extrema excepción. No recomendamos que ninguna tienda use proxy inverso. Cuando se usa un proxy inverso, todo servicio perimetral (CDN) gestionado y optimizados por VTEX se dejará de lado, de modo que el trabajo de la tienda es quién será responsable de proveer de forma efectiva el sitio web, siendo responsable de realizar sus configuraciones, acompañamiento y gestión de particularidades como reenvío de encabezados, cookies y gestión de caché. No proporcionamos documentación de estas particularidades.
  <br>
VTEX no se responsabiliza por problemas en ese sistema, ya sea un CDN propio, servicio de WAF u otro recurso que se encuentre al frente de nuestros servidores. No tendremos visión de cualquier falla; por lo tanto, la solución <strong>no</strong> se encuadrará en nuestros acuerdos de SLA.
</div>

Si incluso después de leer la alerta anterior desea apuntar su propia CDN a la CDN de VTEX, será necesario insertar un proxy inverso frente a los servicios de VTEX. Para hacer esto, cree las entradas TXT que se indican a continuación. Servirán como entrada de verificación para informarnos que el host de hecho apunta a VTEX. Sin esto, VTEX no puede proveer navegación.

1. En la zona DNS de su dominio, cree una entrada de tipo TXT en `_ {hostname}` con el mismo valor que se usaría en CNAME.
2. Direccione el tráfico de CDN / WAF a nuestros servidores con el valor correspondiente al CNAME del dominio.

Por lo tanto, la configuración debería quedar así:

- `_{hostname} TXT {hostname}.cdn.vtex.com`
- Direccionar tráfico para `{hostname}.cdn.vtex.com`

Además, también será necesario que todo el tráfico de `/.well-known /acme-challenge/*` llegue a VTEX. Algunos proxys inversos capturan esta ruta y, con eso, no podemos emitir o renovar el certificado SSL.

<div class="alert alert-warning">
VTEX solo provee navegación si::<br>
- Podemos ver que el host apunta a VTEX (conforme nuestro CNAME).<br>
- Conseguimos emitir/renovar certificados SSL para el host.<br>
Si no se cumplen ambas condiciones, VTEX dejará de entregar el sitio web, pues se caracteriza por estar fuera del aire.
</div>


