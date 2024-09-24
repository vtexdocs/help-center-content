---
title: 'Borrar carpeta del CMS'
id: 6rlNmChZmgy22mium8WYaC
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.331Z
updatedAt: 2023-03-29T14:11:50.929Z
publishedAt: 2023-03-29T14:11:50.929Z
firstPublishedAt: 2019-01-24T22:04:21.998Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: deleting-a-folder-from-cms
locale: es
legacySlug: borrar-carpeta-del-cms
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Para borrar una carpeta de CMS, siga los pasos abajo:
1. En el Admin VTEX, accede a **Storefront > Layout > CMS**.
2. Haga clic en la carpeta CMS y luego en __Sites and Channels__.
3. Haga clic en el web site que contiene la carpeta que desea borrar y luego en la carpeta raíz (/).
4. En la línea de la carpeta que desea borrar, haga clic en __delete__.

![erroDeletarPasta2](//images.contentful.com/alneenqid6w5/5LV3bGobResaCycAs4e4oS/0644cad6454dd3d6c0beb1eb8afc1da8/erroDeletarPasta2.png)

>❗ Algunas carpetas son obligatorias. Su tienda no funcionará correctamente sin ellas. Otras son importantes, así que no es una buena idea borrarlas.
>
> 
>
> Para entender mejor este asunto, lea el artículo [Estructura de carpetas de CMS](http://help.vtex.com/es/tutorial/estructura-de-carpetas-de-cms).

Si una carpeta contiene otras carpetas, antes de borrarla es necesario borrar todas las carpetas internas. En caso contrario, el sistema devuelve el error "Object reference not set to an instance of an object", como en la siguiente imagen.

![erroDeletarPasta](//images.contentful.com/alneenqid6w5/6g2MBbZJUQUQM2YQQ88MQE/9159df93c82fc1e89199aaf1922a5044/erroDeletarPasta.png)

Por ejemplo, si desea borrar la carpeta A, y dentro de ella quedan las carpetas A1 y A2, primero borre las carpetas A1 y A2, y luego borre la carpeta A.
