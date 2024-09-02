---
title: 'Redirección de otras direcciones'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2024-01-23T18:16:55.386Z
publishedAt: 2024-01-23T18:16:55.386Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slug: redireccion-de-otras-direcciones
locale: es
legacySlug: 
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

Una tienda online debe tener una única dirección principal, que [apuntará a los servidores de VTEX](https://help.vtex.com/es/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ) antes del lanzamiento oficial de la tienda. Consulta [Configuración del dominio de tu tienda](https://help.vtex.com/es/tutorial/configurar-dominio-de-la-tienda--tutorials_2450) para conocer las reglas que debe cumplir la dirección y obtener instrucciones sobre cómo registrarla.

Para posibilitar el acceso a la tienda desde otras direcciones y versiones sin subdominio, es necesario configurar la redirección de estas direcciones a la dirección principal de la tienda registrada en **Configuración de la cuenta > Cuenta > Tiendas** en el Admin VTEX. Observa los ejemplos a continuación:

| Dirección | Tipo |
|---|---|
| `www.mitienda.com` | Dominio principal |
| `www.direccionantigua.com` | Redirección |
| `mitienda.com` | Redirección |

## Configurar redirecciones

Existen diversas formas de configurar las redirecciones, y una de las más conocidas es mediante el uso de <code>[htaccess](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess)</code> en el servidor. Además, puedes utilizar una redirección DNS, proporcionada por varios servicios, incluidos proveedores de dominios como [domain.com](https://www.domain.com/).

Consulta a continuación instrucciones para configurar redirecciones a la dirección principal de tu tienda utilizando esta sencilla herramienta: [Redirect Center](http://redirect.center/).

<div class="alert alert-warning">
  <p><a href="http://redirect.center/">Redirect Center</a> no es un servicio de VTEX y no funciona con HTTPS. Existen otros servicios similares, y VTEX no recomienda ninguno en particular. VTEX no se hace responsable de los problemas causados por servicios externos de redirección.</p>
</div>

### Redirección de direcciones sin subdominio (como www)

Para acceder a tu tienda desde una dirección sin subdominios, como `www`, necesitas crear una redirección a la dirección principal de tu tienda. Por ejemplo, para poder acceder a `http://www.misitioweb.com` desde la dirección sin subdominio `http://misitioweb.com`, debes crear una redirección en tu proveedor de DNS siguiendo las instrucciones que se indican a continuación:

1. Crea un registro de tipo A para la raíz del dominio, generalmente representada por `. `, `@` o simplemente por `misitioweb.com`, apuntando a `54.84.55.102` (IP de [Redirect Center](http://redirect.center/)).

   |   |   |   |
   |---|---|---|
   | Host Record: <dejar-vacío\> | Type: A | To: 54.84.55.102 |

2. Crea un registro de tipo CNAME de `redirect` (o `redirect.misitioweb.com`), apuntando a `www.misitioweb.com.redirect.center.com`.

  |   |   |   |
  |---|---|---|
  | Host Record: redirect | Type: CNAME | To: www.misitioweb.com.redirect.center.com |

Consulta más información sobre escenarios como este en [Mejores prácticas para acceder a la tienda sin www](https://help.vtex.com/es/tutorial/mejores-practicas-para-acceder-a-tienda-sin-www--tutorials_4278).

Dependiendo del proveedor de DNS, la propagación de la redirección puede tardar unos minutos en completarse.

### Redirección de una dirección a otra

Para redirigir de una dirección a otra que no comparta la misma raíz del dominio, crea una entrada CNAME en la dirección antigua (origen del acceso), siguiendo el patrón `{nuevaDireccion}.opts-uri.redirect.center.com`.

Por ejemplo, para redireccionar de `www.dominioantiguo.com` a `www.nuevodominio.com`:

* Crea una entrada `www` en el dominio `dominioantiguo.com` con el CNAME `www.nuevodominio.com.opts-uri.redirect.center.com`.

Para redireccionar de `tienda.unadireccion.com` a `www.site.com`:

* Crea una entrada de `tienda` en el dominio `unadireccion.com` con el CNAME `www.site.com.opts-uri.redirect.center.com`.

### Redirección de acceso con HTTPS

VTEX redirige automáticamente las direcciones `http://` a `https://`. Aun así, puede ser necesario redirigir una dirección `https://` (como una versión de la dirección sin subdominio o con otro dominio) a una dirección con `https://`.

Cuando se accede a una página con HTTPS, es necesario que el servidor asociado a esa dirección tenga instalado un certificado SSL. La ausencia de este certificado hace que el navegador interprete la conexión como no segura, lo que provoca el bloqueo de la solicitud. Esto impide el acceso a la página deseada y, en consecuencia, imposibilita la redirección a otra dirección.

En [Redirect Center](http://redirect.center/) no es posible instalar un certificado SSL para cada dominio al que apuntas. Por lo tanto, no redirige los accesos provenientes de HTTPS.

Para superar esta limitación ten en cuenta los siguientes puntos:

1. En el caso de que el dominio de origen no cuente con un subdominio, como `site.com`, dirígelo hacia un servidor gestionado directamente por la tienda, ya sea un servidor físico o virtual administrado por el propio usuario o empresa. Este servidor debe tener un **certificado SSL instalado para el dominio de origen**, lo que permite el acceso seguro a través de HTTPS. Consulta [Certificado de seguridad (SSL)](https://help.vtex.com/es/tutorial/certificado-de-seguridad-ssl--tutorials_1308) para más información.
2. Define una **regla de redirección**. Si desas utilizar un servidor de gestión propia para redirigir el acceso con HTTPS, debes definir una regla de redirección en el servidor, que puede variar en función del tipo de servidor utilizado (Apache, ASP, nginx). Por lo tanto, para configurar esta regla, debes saber qué tipo de servidor se está utilizando y aplicar la configuración correspondiente.
