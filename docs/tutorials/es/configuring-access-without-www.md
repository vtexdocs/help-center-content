---
title: 'Configurar acceso sin www'
id: tutorials_4278
status: PUBLISHED
createdAt: 2017-04-27T21:51:11.002Z
updatedAt: 2022-11-14T19:34:05.685Z
publishedAt: 2022-11-14T19:34:05.685Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configurando-acceso-sin-www
locale: es
legacySlug: configurando-acceso-sin-www
subcategory: 2Za4fjGfxYOo6oqykukgyy
---

Su tienda virtual debe tener una única dirección principal, que irá [apuntar a los servidores de VTEX](https://help.vtex.com/es/tutorial/configurando-el-apuntamiento-del-dns-para-vtex--tutorials_4280). Cualquier dirección adicional, sea su versión sin `www` (raíz del dominio) u otros dominios, deben apuntar a esta única dirección principal.

Ejemplo:

- `www.mitienda.com` - Dominio principal.
- `mitienda.com` - Redirección.
- `www.algunadireccionantigua.com` - Redirección.
- `algunadireccionantigua.com` - Redirección.
- `tienda.algunadireccionantigua.com` - Redirección.

El dominio principal de tu tienda debe contener un subdominio, que puede ser o no `www`. Por ejemplo:

- `www.mitienda.com` - Dominio principal válido.
- `tienda.mimarca.com` - Dominio principal válido.
- `mitienda.com` - No puede ser su dominio principal ya que no contiene un subdominio, pero puede ser redireccionado.

<div class = "alert alert-info">
  Obtenga más información sobre como <a href="https://help.vtex.com/es/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450">configurar el dominio principal de su tienda</a>.
</div>

Esta redirección se puede realizar de muchas formas. El uso de `htaccess` en el servidor es una de las más conocidas, pero es muy técnica y depende de otros factores.

También se puede utilizar la redirección de DNS, según provista por diferentes servicios, incluso proveedores de dominio, como [registro.br](https://registro.br/).

Para realizar una redirección de DNS de forma sencilla, a continuación están las instrucciones para la redirección con el servicio [redirect.center](http://redirect.center/).

<div class="alert alert-warning">
Cabe resaltar que Redirect Center no es un servicio de VTEX y no funciona con HTTPS. Hay otros servicios similares, pero VTEX no recomienda ninguno en específico. VTEX no se hace responsable por problemas causados por servicios externos de redirección.
</div>

Consulta este otro artículo para saber cómo [configurar redirección de otras direcciones](https://help.vtex.com/es/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ).

## Redireccionando dominio sin www

Ejemplo: de `misitio.com` a `www.misitio.com`

- Cree un registro de tipo A para la raíz del dominio (puede ser representada por `.`, `@` o apenas `misitio.com`) apuntando a `52.8.174.221` (IP de [__Direcionar__](http://direcionar.com.br/));
- Cree un registro del tipo CNAME de `redirect` (o "redirect.misitio.com") apuntando a `www.misitio.com.direcionar.com.br`.
