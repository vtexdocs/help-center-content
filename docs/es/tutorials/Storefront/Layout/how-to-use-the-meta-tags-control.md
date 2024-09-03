---
title: 'Cómo utilizar el control de meta tags'
id: 2OPiSPubgcEqIikAWsCouk
status: PUBLISHED
createdAt: 2019-01-24T20:45:38.270Z
updatedAt: 2023-10-17T14:24:54.898Z
publishedAt: 2023-10-17T14:24:54.898Z
firstPublishedAt: 2019-01-24T22:06:45.424Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: como-utilizar-el-control-de-meta-tags
locale: es
legacySlug: como-utilizar-el-control-de-meta-tags
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

El control `<vtex:metaTags/>` inserta en el código las meta tags que corresponden a la página.

Generalmente, este se añade justo después de la apertura del elemento `<head>`.

Esas meta tags utilizan información registrada en diferentes partes de la plataforma. Son importantes principalmente por dos razones:
- SEO. Es decir, intervienen en la facilidad de encontrar sus páginas a través de los motores de búsqueda.
- La forma en que los navegadores interpretan su sitio web.

Dos de las tags más importantes son `title` (que, por definición, no es exactamente una meta tag, pero es de extrema importancia) y `meta name="description"`.

La primera indica el título de la página (que aparece en la pestaña de la página del navegador) y la segunda indica la descripción (que aparece, por ejemplo, en los resultados de búsqueda de Google).

Para las páginas de __producto__, __categoría__ y __marca__, tanto el título como la descripción se definen en sus páginas de registro. Por ejemplo, al crear una nueva marca, usted debe registrar un título y una descripción para esta.

Cuando la página de esa marca se cargue, contendrá esa información en las tags `title` y `meta name="description"`, siempre que el control `<vtex:metaTags/>` esté presente en el template de la página.

Para la __página inicial__ y la __página de búsqueda__, la tag `meta name="description"` es poblada con la información contenida en la sección de SEO del sitio web. Para ver esta sección, acceda al  __Configuraciónes de la tienda__>__Storefront__>__Configuración__>__General__ y luego en la opción __SEO__.

También es posible configurar la tag `title` de la __página inicial__ a través del Admin. Para eso, acceda al  __Configuraciónes de la tienda__>__Storefront__>__Configuración__>__General__ y complete el campo __Título de la página inicial (Tag title)__.

A continuación puede observar un ejemplo de meta tags insertadas por el control `<vtex:metaTags/>` para la página de la categoría "Escalada" de la tienda que tiene el account name "lojadobreno".

```html
<meta name="language" content="pt-BR">
<meta name="country" content="BRA">
<meta name="currency" content="R$">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="description" content="Equipamento para a prática de escalada em rocha, indoor e no gelo.">
<meta name="Abstract" content="Escalada">
<meta name="author" content="lojadobreno">
<meta name="copyright" content="lojadobreno">
<meta name="vtex-version" content="1.4.904.1590">
<meta http-equiv="pragma" content="no-cache">
<meta name="robots" content="noindex,nofollow">
<title>Escalada</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="http://lojadobreno.vtexcommercestable.com.br/escalada">
```

>ℹ️ Si usted no desea usar la tag canonical (&lt;link rel="canonical"&gt;), puede inhabilitarla a través de un [control específico para eso](https://developers.vtex.com/docs/guides/control-to-disable-the-canonical-tag).
