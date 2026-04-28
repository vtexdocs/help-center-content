---
title: '​​Insertar un proxy inverso delante de los servicios de VTEX'
id: 4PFWsfRAKviNVPf1bYdiir
status: PUBLISHED
createdAt: 2019-09-20T14:11:30.301Z
updatedAt: 2025-05-30T13:53:21.221Z
publishedAt: 2025-05-30T13:53:21.221Z
firstPublishedAt: 2019-09-23T12:22:50.056Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: insert-reverse-proxy-in-front-of-vtex-services
legacySlug: por-que-no-recomendamos-insertar-un-proxy-inverso-en-los-servicios-vtex
locale: es
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

> ❗  Esta guía explica una práctica **no recomendada** para la mayoría de las tiendas y solo se aplica en excepciones extremas.   Implementar un proxy inverso significa sustituir todos los servicios perimetrales (CDN) gestionados y optimizados por VTEX. Esto significa que la tienda será responsable por mantener efectivamente el sitio web, incluyendo configuración, monitoreo y gestión de aspectos como el paso de encabezados, cookies y la caché. VTEX no ofrece soporte o documentación para esas configuraciones específicas y no se hace responsable por los problemas que puedan surgir.   VTEX no se hace responsable por problemas en ese sistema, ya sea en una CDN propia, un servicio de WAF u otro recurso que esté delante de nuestros servidores. No tenemos visibilidad de la operación y, por lo tanto, la solución **no** entra en nuestros acuerdos de SLA. 

Para apuntar tu propia CDN a la CDN de VTEX, debes insertar un proxy inverso delante de los servicios de VTEX. El flujo de tráfico seguirá el orden a continuación:

1. Tienda: punto de origen del tráfico.  
2. Proxy inverso: el intermediario configurado.  
3. CDN de VTEX: la CDN predeterminada de VTEX.  
4. VTEX: los servidores finales de VTEX.

Sigue las guías que se describen a continuación para implementar un proxy inverso:

*	[Crear registro TXT](#crear-registro-txt)  
*	[Enrutar tráfico](#enrutar-trafico)  
*	[Certificado SSL](#responsabilidades-de-los-certificados-ssl)

## Crear registro TXT

Para garantizar que tu dominio esté correctamente dirigido a la CDN de VTEX, crea un registro TXT en formato `_{hostname}` con el valor `{hostname}.cdn.vtex.com` en la zona de DNS de tu dominio.

Sustituye `{hostname}` con la combinación de [subdominio, dominio y dominio de nivel superior](/es/docs/tutorials/configurar-dominio-de-la-tienda) de tu tienda. Por ejemplo: `www.mitienda.com`. Asegúrate de incluir `_` antes del host.  

Formato:

```
Nombre: _{hostname}
Tipo: TXT
Valor: {hostname}.cdn.vtex.com
```

Ejemplo:

```
Nombre: _www.mitienda.com
Tipo: TXT
Valor: www.mitienda.com.cdn.vtex.com
```

### Crear registro CNAME

Crea un registro CNAME para dirigir el tráfico de la CDN o WAF a nuestros servidores con el valor correspondiente del CNAME del dominio.  

Sustituye `{hostname}` con la combinación de subdominio, dominio y dominio de nivel superior de tu tienda. Por ejemplo: `www.mitienda.com`.  

Formato:

```
Nombre: {hostname}
Tipo: CNAME
Destino: {hostname}.cdn.vtex.com
```

Ejemplo:

```
Nombre: www.mitienda.com
Tipo: CNAME
Destino: www.mitienda.com.cdn.vtex.com
```

## Enrutar tráfico

En el archivo de configuración del proxy inverso, configura el enrutamiento de tráfico a VTEX. Asegúrate de que el encabezado `Host` contenga el dominio original. Sigue el formato a continuación en los requests HTTP del proxy inverso a VTEX:

```curl
curl http://{hostname}.cdn.vtex.com/ \-H 'Host: {hostname}'
```

Ejemplo:

```curl
curl http://www.mitienda.com.cdn.vtex.com/ \-H 'Host: www.mitienda.com'
```

La forma de configurar el enrutamiento de tráfico y escribir el request HTTP puede variar dependiendo de la solución de software del proxy inverso.  

## Responsabilidades de los certificados SSL

Las responsabilidades de los certificados SSL se organizan de la siguiente manera cuando hay proxies inversos:  

* La CDN externa (proxy inverso) gestiona el certificado SSL en la comunicación entre el cliente y la propia red.  
* VTEX gestiona el certificado SSL en la comunicación entre el proxy inverso (CDN externa) y los servidores VTEX.

Para permitir generar certificados SSL, asegúrate de que todo el tráfico HTTP a `/.well-known/acme-challenge/*` llegue a VTEX sin cambios, tales como redirecciones internas de HTTP a HTTPS o bloqueos de tráfico.

Algunos proxies inversos capturan esta ruta, lo que impide que VTEX pueda emitir o renovar el certificado SSL.

> ⚠️ VTEX admite la navegación solo si: <ul> <li>El registro TXT está configurado correctamente.</li> <li>Es posible emitir y renovar certificados SSL para el host.</li> </ul> Si no se cumplen ambas condiciones, la navegación no funcionará y el sitio web se queda sin conexión.
