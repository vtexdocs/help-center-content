---
title: 'Configurar dominio de la tienda'
id: tutorials_2450
status: PUBLISHED
createdAt: 2017-04-27T21:55:00.603Z
updatedAt: 2025-03-20T21:58:47.611Z
publishedAt: 2025-03-20T21:58:47.611Z
firstPublishedAt: 2017-04-27T23:03:51.625Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-the-store-domain
legacySlug: configuracion-de-dominios-del-license-manager
locale: es
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

La configuración relacionada con el dominio es necesaria para que una dirección web se dirija correctamente a una tienda VTEX. En esta guía explicamos lo siguiente:

* [Estructura de la dirección de la tienda](#estructure-de-la-direccion-de-la-tienda)
* [Reglas para el host principal](#reglas-para-el-host-principal)
* [Cómo registrar un nuevo host](#registrar-nuevo-host)
* [Cómo cambiar el host de una tienda activa](#cambiar-host)

## Estructura de la dirección de la tienda

 La dirección de la tienda se compone de los elementos ilustrados a continuación:

![url-diagram-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/account-management/accounts/configurar-dominio-de-la-tienda_1.png)

| Elemento | Descripción | Ejemplo |
|---|---|---|
| Protocolo | Protocolo de comunicación utilizado en internet. | `https://` |
| Subdominio | Prefijo añadido al nombre de dominio. | `www` |
| Dominio | Nombre único que sirve para ubicar e identificar tu tienda en la web. | `mystore` |
| Dominio de nivel superior (TLD) | Sufijo después del punto final de un nombre de dominio. | `com` |
| Nombre de dominio / Dominio puro / Dominio raíz | Dominio + dominio de nivel superior. | `mystore.com` |
| Host | Subdominio + dominio + dominio de nivel superior. | `www.mystore.com` |

Una vez definido el dominio de tu tienda, debes configurar el host principal en el Admin VTEX para establecer la comunicación entre la dirección y el contenido de la tienda.

## Reglas para el host principal

Antes de continuar con la configuración de las direcciones de tu tienda, toma en cuenta las siguientes prácticas para garantizar una implementación exitosa:

* **Proveedor de CDN:** VTEX utiliza **Cloudfront** como proveedor de CDN para las tiendas. Es importante que el dominio de tu tienda no esté registrado en este servicio al momento de realizar el apuntamiento. De lo contrario, se producirá un fallo en el aprovisionamiento de CDN para tu tienda y, en consecuencia, en el go-live. Por lo tanto, si tienes el dominio de la tienda registrado en la plataforma **Cloudfront**, remueve el registro antes de apuntar el DNS a VTEX.
* **Dirección principal:** La tienda debe tener un único host principal, que apuntará a los servidores de VTEX. Este host **debe contener un subdominio**, que puede ser `www` u otros.
* **Direcciones adicionales:** cualquier dirección adicional, ya sea con un dominio diferente o una versión sin subdominios, se debe redirigir al único host principal, según se describe en Redirecciones.

### Ejemplos de host

Consulta los siguientes ejemplos y observa los que se pueden utilizar como host principal:

| Ejemplo de host | Puede utilizarse como host: sí (✔️) o no (❌) | Explicación |
|---|---|---|
| `www.mitienda.com` | ✔️ | Contiene el subdominio `www`. |
| `mitienda.com` | ❌ | No contiene subdominio. Para configurar el acceso a través de esta dirección, hay que configurar un host con un subdominio de tipo `www.mitienda.com` y, luego, crear una redirección. Consulta Configurar acceso sin www para más detalles. |
| `tienda.mimarca.com` | ✔️ | Contiene el subdominio tienda. |
| `www.tienda.mimarca.com` | ✔️ | Contiene dos subdominios: `www` y `tienda`. |

### Redirecciones

Para garantizar el acceso a tu tienda a través de diferentes URL, tales como `www.mitienda.com` y `mitienda.com` debes configurar un único host principal y redirigir las direcciones adicionales a la dirección principal. Para más información sobre redirecciones, consulta:

* [Redirección de otras direcciones](https://help.vtex.com/es/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ)
* [Mejores prácticas para acceder a tienda sin www](https://help.vtex.com/es/tutorial/configurando-acesso-sem-www--tutorials_4278)

Ten en cuenta que lo recomendado es implementar un único host en tu tienda.

## Registrar nuevo host

Para registrar un nuevo host, el mismo debe cumplir con las prácticas descritas en la sección [Reglas para el host principal](#reglas-para-el-host-principal). Sigue las instrucciones a continuación:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil que tiene la inicial de tu email.
2. Haz clic en **Configuración de la cuenta**.
3. Haz clic en **Cuenta**.
4. Haz clic en la pestaña **Tiendas**.
5. Haz clic en el botón de acciones correspondiente a la tienda en que deseas registrar el host y luego en `Acciones`.
6. Ingresa el host en el campo **Hosts**. Por ejemplo, `www.mitienda.com`.
7. Haz clic en el botón `Agregar`.
8. Haz clic en el botón `Guardar`.

Después de estos pasos, puedes [configurar el apuntamiento de DNS a VTEX](https://help.vtex.com/es/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

> ⚠️ Para las tiendas[ FastStore](https://www.faststore.dev/), también es necesario configurar una dirección con el subdominio `secure`. Para más información, consulta la guía [Configuring external DNS for a custom domain](https://www.faststore.dev/docs/go-live/2-configuring-external-dns).

> ❗ Si tu operación tiene más de una cuenta VTEX o [subcuentas](https://help.vtex.com/es/tutorial/crear-subconta-multitienda-multidominio--tutorials_510), no cambies el host de una cuenta a otra. Esto causará fallas en varias partes de tu tienda.

## Cambiar host

La plataforma VTEX admite cambios de host sin efectos adversos. Si necesitas cambiar el host de la tienda, sigue los pasos en [Cambiar el dominio de la tienda](https://help.vtex.com/es/tutorial/cambiar-el-dominio-de-la-tienda--frequentlyAskedQuestions_626/).
