---
title: 'Redirección de otras direcciones'
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2025-03-25T12:35:48.215Z
publishedAt: 2025-03-25T12:35:48.215Z
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

| Dirección                 | Tipo              |
| -------------------------- | ----------------- |
| `www.mitienda.com`         | Dominio principal |
| `www.direccionantigua.com` | Redirección       |
| `mitienda.com`             | Redirección       |

## Configurar redirecciones

Existen diversas formas de configurar las redirecciones, y una de las más conocidas es mediante el uso de `[htaccess](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Apache_Configuration_htaccess)` en el servidor. Además, puedes utilizar una redirección DNS, proporcionada por varios servicios, incluidos proveedores de dominios como [domain.com](https://www.domain.com/).

Consulta a continuación los pasos para configurar redirecciones a la dirección principal de tu tienda utilizando la herramienta [Redirect-301](https://www.redirect-301.com/en/), por su facilidad de uso.

> ⚠️ [Redirect-301](https://www.redirect-301.com/en/) no es un servicio de VTEX y funciona mediante un modelo de suscripción. Aunque hay otras soluciones similares en el mercado, VTEX no recomienda ninguna herramienta en particular. VTEX no se hace responsable por posibles problemas derivados del uso de servicios externos de redirección.

### Redirección de direcciones sin subdominio (como www)

Para acceder a tu tienda desde una dirección sin subdominios, como `www`, debes crear una redirección a la dirección principal de tu tienda. Por ejemplo, para poder acceder a `http://www.misitioweb.com` desde la dirección sin subdominio `http://misitioweb.com`, debes crear una redirección en tu proveedor de DNS siguiendo las instrucciones que se indican a continuación:

1. Accede al sitio web de [Redirect-301](https://www.redirect-301.com/en/) y contrata una suscripción. Tras confirmar la suscripción, recibirás un token en la dirección de email registrada. Este token se utilizará en la configuración de tu dominio.
2. Crea un registro DNS de tipo A para la raíz del dominio, generalmente representada por `.`, `@` o simplemente `misitioweb.com`, apuntando a `18.215.89.131` (IP de [Redirect-301](https://www.redirect-301.com/en/)).

   |                                                                       |                         |                                                                                   |
   | --------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------- |
   | Host Record: <dejar-vacío\> | Type: A | To: 18.215.89.131 |
3. Crea un registro de tipo TXT `redirect-301` (o `redirect-301.misitioweb.com`), con el siguiente valor: `token=TU_TOKEN;to=https://www.misitioweb.com/`

|                                           |                           |                                                                                                                                            |
| ----------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Host Record: redirect-301 | Type: TXT | Value: token=TU_TOKEN;to=https://www.misitioweb.com/, |

Consulta más información sobre escenarios como este en [Mejores prácticas para acceder a la tienda sin www](/es/docs/tutorials/mejores-practicas-para-acceder-a-tienda-sin-www).

Dependiendo del proveedor de DNS, la propagación de la redirección puede tardar unos minutos en completarse.

### Redirección de una dirección a otra

Por ejemplo, para redireccionar de `www.dominioantiguo.com` a `www.nuevodominio.com`:

- Crea una entrada `www` en el dominio `dominioantiguo.com` de tipo A apuntando a `18.215.89.131` (IP de [Redirect-301](https://www.redirect-301.com/en/)).
- Crea un registro de tipo TXT `redirect-301.www` (o `redirect-301.www.tudominioantiguo.com`), con el siguiente valor: `token=TU_TOKEN;to=https://www.nuevodominio.com/`

Para redireccionar de `tienda.unadireccion.com` a `www.sitioweb.com`:

- Crea una entrada `tienda` en el dominio `algunadireccion.com` de tipo A apuntando a `18.215.89.131` (IP de [Redirect-301](https://www.redirect-301.com/en/)).
- Crea un registro de tipo TXT `redirect-301.tienda` (o `redirect-301.tienda.algunadireccion.com`), con el siguiente valor: `token=TU_TOKEN;to=https://www.sitioweb.com/`

### Redirección de acceso con HTTPS

VTEX redirige automáticamente las direcciones `http://` a `https://`. Aun así, puede ser necesario redirigir una dirección `https://` (como una versión de la dirección sin subdominio o con otro dominio) a una dirección con `https://`.

Cuando se accede a una página con HTTPS, el servidor asociado a esa dirección debe tener instalado un certificado SSL. La ausencia de este certificado hace que el navegador interprete la conexión como no segura, lo que provoca el bloqueo de la solicitud. Esto impide el acceso a la página deseada y, en consecuencia, imposibilita la redirección a otra dirección.

En [Redirect-301](https://www.redirect-301.com/en/) se instala un certificado SSL para cada dominio apuntado. De esta manera, redirige normalmente los accesos originados en HTTP y HTTPS, garantizando conexiones seguras cuando sea aplicable.