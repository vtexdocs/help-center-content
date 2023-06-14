---
title: 'Cómo funciona el control de nombre de producto'
id: 4uYwXjOzH2OsK8SMWuWuCg
status: DRAFT
createdAt: 2019-01-24T20:45:37.973Z
updatedAt: 2022-09-08T16:44:09.262Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:14:36.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: como-funciona-el-control-de-nombre-de-producto
legacySlug: como-funciona-el-control-de-nombre-de-producto
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

El control `<vtex.cmc:productName/>` renderiza el nombre del producto según se ha registrado en el catálogo.

Por lo tanto, funciona __apenas en las páginas de producto__.

<div class="alert alert-info">
El nombre que ese control renderiza es el del <b>producto</b>, no del SKU.
</div>

Este es un ejemplo del código HTML renderizado por el control Product Name.

```html
<div class="fn productName  Oculos-de-natacao-Speedo-Glypse ">Óculos de natação Speedo Glypse</div>
<input id="___rc-p-id" type="hidden" value="2">
<input id="___rc-p-dv-id" type="hidden" value="39,1">
<input id="___rc-p-sku-ids" type="hidden" value="2">
<input id="___rc-p-kit-ids" type="hidden" value="">
```

Vea que el nombre del producto aparece dentro de una tag `<div>`, que recibe la clase `productName`.

Usted no tiene que preocuparse por las cuatro tags `<input>` también renderizadas por el control. Ellas tienen función interna a la plataforma.
