---
title: 'Cambiar las páginas del sitio para el protocolo HTTPS'
id: frequentlyAskedQuestions_4378
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.790Z
updatedAt: 2023-03-29T14:56:42.675Z
publishedAt: 2023-03-29T14:56:42.675Z
firstPublishedAt: 2019-01-24T22:13:56.601Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: como-usar-el-protocolo-https-en-la-tienda
locale: es
legacySlug: como-usar-el-protocolo-https-en-la-tienda
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Para cambiar la configuración de protocolo HTTP o HTTPS en las páginas de su tienda, basta seguir los pasos abajo según el tipo de la página deseada.

## Layout

El módulo Layout abarca home, catálogo (búsqueda, categorías y productos), landing pages y otras páginas personalizadas.

Es posible cambiar el protocolo en todas las carpetas de una sola vez con el uso de nuestra API, documentada [en esta colección de Postman](https://developers.vtex.com/reference/change-uri-schema).

>⚠️ **Atención:** evite tener el protocolo HTTPS activado sólo en algunas páginas. Al acceder a una página HTTPS, luego ir a una página HTTP de la misma tienda, el navegador intentará leer sus recursos forzosamente en HTTPS, y esto puede generar problemas.
>
> Lo adecuado es activar el HTTPS en todo el sitio de una sola vez.
>
> Lo mismo vale para los sitios de desktop y mobile (website secundario), donde es necesario tratar el HTTPS de ambos al mismo tiempo.

1. En el Admin VTEX, accede a **Storefront > ** y abra la carpeta **CMS**;
2. Acceda a **Sites and channels**;
3. Acceda el website deseado;
4. Abra la carpeta raíz del website;
![cms_instrução ES](https://images.ctfassets.net/alneenqid6w5/Eh2zwnOd0GqY0oGCw4Y6Y/b89d5aa3092d8d964469668cda783d9a/CMS_instru____o_-_ES.png)
5. La pantalla que se abre muestra todas las carpetas que están en el primer nivel del sitio. Para cada carpeta pertinente, haga clic en **Edit** - para la home, considera el botón superior;
![cms_edit ES](https://images.ctfassets.net/alneenqid6w5/5w8bfK8O3egookYkO80uum/af60a80fbf62a154124b05496c1773cf/edit_CMS_ES.png)
6. En el cuadro de selección **Protocol**, seleccione la opción **HTTPS**;
![cms-protocol-https ES](https://images.ctfassets.net/alneenqid6w5/6iKmkVgCKkeEu6uqygUs4s/778574a06a8ec5bb2d8fdfe871af0763/cms_protocol_HTTPS_ES.png)
7. Haga clic en **Save Folder**.

Atención a las carpetas que tienen subcarpetas, como Departamento, Categoria, Produto y otras carpetas, incluyendo también las creadas para la personalización de la tienda. 

En el siguiente ejemplo, la carpeta **@Orders@**, contenida en **Account**, que también debe ser editada: 
![cms_subcategoria_edit ES](https://images.ctfassets.net/alneenqid6w5/DugouRmlRQKqAI66eCYww/5bdea3c5bf8305e1693433b1adc14747/subcategoria_edit_ES.png)

Después del cache de hasta 10 minutos los cambios estarán en vigor.
