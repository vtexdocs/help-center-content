---
title: 'Insertar un proxy inverso delante de los servicios de VTEX'
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

> ❗ Esta guía aborda una práctica **no recomendada** para la mayoría de las tiendas y que solo debe aplicarse en casos excepcionales. Implementar un proxy inverso significa sustituir todos los servicios perimetrales (CDN) gestionados y optimizados por VTEX. Esto significa que la tienda será responsable por mantener efectivamente el sitio web, incluyendo configuración, monitoreo y gestión de aspectos como el paso de encabezados, cookies y la caché. VTEX no ofrece soporte o documentación para esas configuraciones específicas y no se hace responsable por los problemas que puedan surgir. VTEX no se hace responsable por problemas en ese sistema, ya sea en una CDN propia, un servicio de WAF u otro recurso que esté delante de nuestros servidores. No tenemos visibilidad de la operación y, por lo tanto, la solución **no** entra en nuestros acuerdos de SLA.

> ❗ Esta configuración **no es compatible con Amazon CloudFront**. A partir de enero de 2025, las tiendas que usan CloudFront como CDN no pueden utilizar un proxy inverso delante de los servicios de VTEX. Intentar esta configuración con CloudFront puede causar fallos de navegación e indisponibilidad del sitio.

Para apuntar tu propia CDN a la CDN de VTEX, debes insertar un proxy inverso delante de los servicios de VTEX. El flujo de tráfico seguirá el orden a continuación:

1. Tienda: punto de origen del tráfico.
2. Proxy inverso: el intermediario configurado.
3. CDN de VTEX: la CDN predeterminada de VTEX.
4. VTEX: los servidores finales de VTEX.

Sigue las guías que se describen a continuación para implementar un proxy inverso:

- [Registro TXT](#registro-txt)
- [Enrutamiento de tráfico](#enrutamiento-de-trafico)
- [Responsabilidades de los certificados SSL](#responsabilidades-de-los-certificados-ssl)

## Registro TXT

Para garantizar que tu dominio esté correctamente dirigido a la CDN VTEX, crea un registro TXT en formato `_{hostname}` con el valor `{hostname}.cdn.vtex.com` en la zona de DNS de tu dominio.

Sustituye `{hostname}` con la combinación de [subdominio, dominio y dominio de nivel superior](/es/docs/tutorials/configurar-dominio-de-la-tienda) de tu tienda. Por ejemplo: `www.mitienda.com`. Asegúrate de incluir el `_` antes del host.

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

## Enrutamiento de tráfico

En el archivo de configuración del proxy inverso, configura el enrutamiento de tráfico a VTEX. Asegúrate de que el encabezado `Host` contenga el dominio original. Sigue el formato a continuación en las solicitudes HTTP del proxy inverso a VTEX:

```curl
curl http://{hostname}.cdn.vtex.com/ -H 'Host: {hostname}'
```

Ejemplo:

```curl
curl http://www.mitienda.com.cdn.vtex.com/ -H 'Host: www.mitienda.com'
```

La forma de configurar el enrutamiento de tráfico y escribir la solicitud HTTP puede variar dependiendo de la solución de software del proxy inverso.

## Responsabilidades de los certificados SSL

Las responsabilidades de los certificados SSL se organizan de la siguiente manera cuando hay proxies inversos:

- La CDN externa (proxy inverso) gestiona el certificado SSL en la comunicación entre el cliente y el proxy inverso.
- VTEX gestiona el certificado SSL en la comunicación entre el proxy inverso (CDN externa) y los servidores VTEX.

Para usar el certificado SSL automático de VTEX (Let's Encrypt), debes asegurarte de que el proxy no bloquee la validación ACME y que el DNS esté configurado correctamente. Asegúrate de que todo el tráfico HTTP a `/.well-known/acme-challenge/*` llegue a VTEX sin cambios, es decir, sin redirecciones internas (HTTP → HTTPS), bloqueos de tráfico o modificaciones.

Algunos proxies inversos pueden interceptar esta ruta, impidiendo que VTEX emita o renueve el certificado SSL.

### Requisitos para la validación del certificado

- Enruta `/.well-known/acme-challenge/*` directamente al origen VTEX `{hostname}.cdn.vtex.com` (ejemplo: `www.mitienda.com.cdn.vtex.com`), preservando el encabezado `Host` original (ejemplo: `Host: www.mitienda.com`).
- No apliques barreras (CAPTCHA, redirecciones de inicio de sesión, páginas de error o HTML personalizado) a esta ruta.
- No almacenes esta ruta en la caché.

### Opciones de certificado

Si prefieres no depender de la validación automática de Let's Encrypt, hay dos opciones:

#### Continuar con el certificado automático de VTEX (Let's Encrypt)

- Requiere configuración estable del proxy, como se describió anteriormente.
- Ventaja: la emisión y renovación son completamente automáticas, siempre que el DNS y las rutas ACME sean correctas.

#### Migrar a un certificado personalizado (VTEX Shield)

- El retailer emite el certificado con su CA preferida (por ejemplo, DigiCert, GlobalSign) y lo carga utilizando la funcionalidad de [Certificados SSL personalizados](https://help.vtex.com/es/docs/tutorials/certificados-ssl-personalizados) disponible en [VTEX Shield](https://help.vtex.com/es/docs/tutorials/vtex-shield).
- En este modelo no hay flujo ACME/Let's Encrypt dentro de VTEX, por lo que el proxy no interfiere en la generación del certificado. Solamente es necesario garantizar su renovación y volver a cargarlo cuando corresponda.

> ⚠️ VTEX solo habilita la navegación si: <ul><li>Hay un registro TXT configurado correctamente.</li><li>Es posible emitir y renovar certificados SSL para el host.</li></ul> Si no se cumplen ambas condiciones, la navegación no funcionará y el sitio web quedará offline.