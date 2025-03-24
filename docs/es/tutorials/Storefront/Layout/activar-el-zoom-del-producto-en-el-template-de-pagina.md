---
title: 'Activar el zoom del producto en el template de página'
id: 104Z7aky7IcYKYIgs4KUIg
status: PUBLISHED
createdAt: 2017-10-12T15:38:55.676Z
updatedAt: 2022-10-14T12:36:40.505Z
publishedAt: 2022-10-14T12:36:40.505Z
firstPublishedAt: 2017-10-12T15:46:34.188Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: activating-the-product-zoom-in-the-page-template
locale: es
legacySlug: activar-el-zoom-del-producto-en-el-template-de-pagina
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Una vez que tengas [configurado el CSS del zoom](https://developers.vtex.com/vtex-developer-docs/docs/setting-up-the-zoom), hay que insertar el control que activa el zoom en el template de la página de producto. El proceso para eso también ocurre dentro del _Gerenciador do Portal_, sólo que, ahora, localizando el template de página de producto que debe estar dentro de la carpeta _Portal > Templates de Página_. 

Una vez localizado el template, hay que colocar la referencia para el archivo .css que acabamos de subir. Para eso, debe incluir una tag como
`<link href="/arquivos/zoom.css" rel="stylesheet" type="text/css">`
dentro del head template, como lo haríamos con cualquier otro archivo css. 

Ahora sólo hay que insertar `zoom="on"` en la tag del producto. Como se ve abajo:
`<vtex.cmc:ProductImage zoom="on">`
