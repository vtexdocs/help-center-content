---
title: Redirección de otras direcciones
id: 3Xi2AeLUx2QpJQu8DTX8KQ
status: PUBLISHED
createdAt: 2022-09-19T21:21:24.455Z
updatedAt: 2022-11-14T19:37:01.861Z
publishedAt: 2022-11-14T19:37:01.861Z
firstPublishedAt: 2022-09-19T21:40:22.913Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: redireccion-de-otras-direcciones
legacySlug: 
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

Su tienda virtual debe tener una única dirección principal, que irá [apuntar a los servidores de VTEX](https://help.vtex.com/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex--tutorials_4280). Si quieres usar otros dominios, deben apuntar a esta única dirección principal.

Ejemplo:

- `www.mitienda.com` - Dominio principal.
- `www.algunadireccionantigua.com` - Redirección.

Esta redirección se puede realizar de muchas formas. El uso de `htaccess` en el servidor es una de las más conocidas, pero es muy técnica y depende de otros factores.

También se puede utilizar la redirección de DNS, según provista por diferentes servicios, incluso proveedores de dominio, como [registro.br](https://registro.br/).

Para realizar una redirección de DNS de forma sencilla, a continuación están las instrucciones para la redirección con el servicio [redirect.center](http://redirect.center/).

<div class="alert alert-warning">
Cabe resaltar que Redirect Center no es un servicio de VTEX y no funciona con HTTPS. Hay otros servicios similares, pero VTEX no recomienda ninguno en específico. VTEX no se hace responsable por problemas causados por servicios externos de redirección.
</div>

Este artículo contiene instrucciones redirigir otros dominios a la dirección principal de tu tienda. Consulta este otro artículo para saber cómo [configurar el acceso sin www](https://help.vtex.com/es/tutorial/configurando-acesso-sem-www--tutorials_4278).

## Redireccionar una dirección a cualquiera otra 

En los casos en que desee redireccionar de una dirección a otra, siempre que no sea la raíz del dominio, bastará una entrada CNAME en la dirección antigua (origen del acceso) con el estándar `{dirección-nueva}.opts-uri.direcionar.com.br`.

Por ejemplo, de "www.dominioantiguo.com" a "www.nuevodominio.com.br":
- crear entrada `www` en el dominio `dominioantiguo.com` con el CNAME `www.nuevodominio.com.opts-uri.direcionar.com.br`.

De "tienda.algunadireccion.com.br" a "www.sitio.com":
- crear entrada `tienda` en el dominio `algunadireccion.com.br` con el CNAME `www.sitio.com.opts-uri.direcionar.com.br`

## Redirección de accesos con HTTPS

Al acceder a cualquier página con HTTPS, es necesario que el servidor que responde por la dirección tenga instalado un certificado SSL. De lo contrario, el request será bloqueado por el navegador, y no habrá redirección.

En direcionar.com.br, presentado anteriormente, no se puede instalar un certificado SSL para cada dominio apuntado a este. Por lo tanto, __este no redirecciona los accesos originados en HTTPS__.

Y entonces, ¿cuál es la solución?

Para atender a este escenario es necesario recurrir a un método clásico:

1. Si el dominio de origen es algo como "sitio.com", sin `www`, o incluso otro subdominio, usted necesita apuntarlo a un __servidor de gestión de la propia tienda__.
2. Este servidor, a su vez, debe tener un __certificado SSL instalado para el dominio de origen__, permitiendo así HTTPS.
3. Por último, es necesario tener una __regla de redirección__, que varía según cada tipo de servidor utilizado (Apache, ASP, nginx). Para configurar esta regla, usted debe saber qué tipo de servidor se utiliza y aplicar la configuración correspondiente.
