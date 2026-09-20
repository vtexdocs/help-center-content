---
title: 'Redirección de otras direcciones'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2026-06-13T00:00:00.000Z
publishedAt: 2026-06-13T00:00:00.000Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slugEN: redirect-from-other-addresses
legacySlug: 
locale: es
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

Una tienda online debe tener una única dirección principal que [apunte a los servidores de VTEX](/es/docs/tracks/antes-del-go-live) antes del lanzamiento oficial de la tienda. Consulta [Configuración del dominio de tu tienda](/es/docs/tutorials/configurar-dominio-de-la-tienda) para ver las reglas que debe cumplir la dirección y cómo registrarla.

Para posibilitar el acceso a la tienda desde otras direcciones y versiones sin subdominio, es necesario configurar la redirección de estas direcciones a la dirección principal de la tienda registrada en **Configuración de la cuenta > Cuenta > Tiendas** en el Admin VTEX. Observa los ejemplos a continuación:

| Dirección                  | Tipo              |
| -------------------------- | ----------------- |
| `www.mitienda.com`         | Dominio principal |
| `www.direccionantigua.com` | Redirección       |
| `mitienda.com`             | Redirección       |

## Configurar redirecciones

Existen diversas formas de configurar las redirecciones, y una de las más conocidas es mediante el uso de `[htaccess](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess)` en el servidor. Además, puedes utilizar una redirección DNS, proporcionada por varios servicios, incluidos proveedores de dominios como [domain.com](https://www.domain.com/).

Consulta a continuación los pasos para configurar redirecciones a la dirección principal de tu tienda utilizando la herramienta [Redirect-301](https://www.redirect-301.com/), por su facilidad de uso.

> ⚠️ [Redirect-301](https://www.redirect-301.com/) no es un servicio de VTEX y funciona mediante un modelo de suscripción. Aunque hay otras soluciones similares en el mercado, VTEX no recomienda ninguna herramienta en particular. VTEX no se hace responsable por posibles problemas derivados del uso de servicios externos de redirección.

### Redirección de direcciones sin subdominio (como www)

Para acceder a tu tienda desde una dirección sin subdominios, como `www`, debes crear una redirección a la dirección principal de tu tienda. Por ejemplo, para poder acceder a `https://www.misitioweb.com` desde la dirección sin subdominio `https://misitioweb.com`, sigue los pasos que se indican a continuación:

1. Accede al sitio web de [Redirect-301](https://www.redirect-301.com/) y contrata una suscripción. Tras confirmar la suscripción, recibirás un email con un enlace para acceder al panel de administración en [redirect-301.com/admin](https://www.redirect-301.com/admin).
2. Inicia sesión en el [panel de administración](https://www.redirect-301.com/admin) y haz clic en **Agregar redirección**. Ingresa el dominio de origen (p. ej., `misitioweb.com`) y la URL de destino (p. ej., `https://www.misitioweb.com/`).
3. En tu proveedor de DNS, crea un registro de tipo A para la raíz del dominio, generalmente representada por `.`, `@` o simplemente `misitioweb.com`, apuntando a `18.215.89.131` (IP de Redirect-301).

   |                               |         |                   |
   | ----------------------------- | ------- | ----------------- |
   | Host Record: <dejar-vacío\>   | Type: A | To: 18.215.89.131 |

Una vez que el DNS se propague, Redirect-301 provisiona automáticamente un certificado SSL para tu dominio y la redirección se activa.

Consulta más información sobre escenarios como este en [Mejores prácticas para acceder a la tienda sin www](/es/docs/tutorials/mejores-practicas-para-acceder-a-tienda-sin-www).

Dependiendo del proveedor de DNS, la propagación de la redirección puede tardar unos minutos en completarse.

### Redirección de una dirección a otra

Por ejemplo, para redireccionar de `www.dominioantiguo.com` a `www.nuevodominio.com`:

1. Inicia sesión en el [panel de administración de Redirect-301](https://www.redirect-301.com/admin) y haz clic en **Agregar redirección**. Ingresa `www.dominioantiguo.com` como dominio de origen y `https://www.nuevodominio.com/` como URL de destino.
2. En tu proveedor de DNS, crea una entrada `www` en el dominio `dominioantiguo.com` de tipo A apuntando a `18.215.89.131` (IP de Redirect-301).

Para redireccionar de `tienda.unadireccion.com` a `www.sitioweb.com`:

1. En el [panel de administración de Redirect-301](https://www.redirect-301.com/admin), agrega `tienda.unadireccion.com` como dominio de origen con `https://www.sitioweb.com/` como URL de destino.
2. En tu proveedor de DNS, crea una entrada `tienda` en el dominio `algunadireccion.com` de tipo A apuntando a `18.215.89.131` (IP de Redirect-301).

### Redirección de acceso con HTTPS

VTEX redirige automáticamente las direcciones `http://` a `https://`. Aun así, puede ser necesario redirigir una dirección `https://` (como una versión de la dirección sin subdominio o con otro dominio) a una dirección con `https://`.

Cuando se accede a una página con HTTPS, el servidor asociado a esa dirección debe tener instalado un certificado SSL. La ausencia de este certificado hace que el navegador interprete la conexión como no segura, lo que provoca el bloqueo de la solicitud. Esto impide el acceso a la página deseada y, en consecuencia, imposibilita la redirección a otra dirección.

En [Redirect-301](https://www.redirect-301.com/), se provisiona automáticamente un certificado SSL para cada dominio en cuanto el DNS apunta al servicio. De esta manera, redirige normalmente los accesos originados en HTTP y HTTPS, garantizando conexiones seguras cuando sea aplicable.
