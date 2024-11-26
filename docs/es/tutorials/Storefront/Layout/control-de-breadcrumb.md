---
title: 'Control de breadcrumb'
id: 3qQS5O9XpusAC6oUqSIQMM
status: PUBLISHED
createdAt: 2018-02-07T11:57:17.362Z
updatedAt: 2020-01-08T20:23:45.528Z
publishedAt: 2020-01-08T20:23:45.528Z
firstPublishedAt: 2018-02-07T12:28:18.865Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: breadcrumb-control
locale: es
legacySlug: control-de-breadcrumb
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Breadbrumbs mejoran la experiencia de navegación en la tienda por llevar a los usuarios a explorar su jerarquía de páginas.

En VTEX, el control `<vtex.cmc:breadCrumb/>` es responsable de renderizar breadcrumbs como el del ejemplo abajo.

![breadcrumb1](https://images.contentful.com/alneenqid6w5/4UnYdunXh6MI28k8sS0w8Y/9883ba3a0d5f9f5826313832f9c5a2d0/breadcrumb1.png)

Si, como en este ejemplo, el usuario accede directamente a la página de un producto de la categoría *Camisetas*, el breadcrumb exhibido en la página del producto le dará la información de que el usuario se encuentra en esa categoría (*Camisetas*), que a su vez está por debajo del departamento *Moda masculina*.

Este control sólo funciona en los siguientes tipos de página:
- Producto
- Departamento
- Categoría
- Búsqueda

A continuación se muestra un ejemplo del código HTML renderizado por el control de breadcrumb:

```html
<div id="box-bread-brumb" class="hidden-xs"><div class="bread-crumb" xmlns:v="http://rdf.data-vocabulary.org/#">
<ul>
<li typeof="v:Breadcrumb"><a href="http://lojadobreno.vtexcommercestable.com.br/" rel="v:url" property="v:title">lojadobreno</a></li>
<li class="last" typeof="v:Breadcrumb"><a href="http://lojadobreno.vtexcommercestable.com.br/livros" rel="v:url" property="v:title">Livros</a></li></ul>
</div>
</div>
```

El código anterior renderiza el siguiente breadcrumb en el sitio:

![breadcrumb2](//images.contentful.com/alneenqid6w5/1PxrLYlhNaaUYYoi6oOCe6/06d276039e7e73a39fa15061befffd38/breadcrumb2.png)
