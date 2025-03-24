---
title: 'Estructura de carpetas del CMS'
id: 2RdMaJSv4AK4EyscmQuocu
status: PUBLISHED
createdAt: 2018-01-25T14:18:15.356Z
updatedAt: 2021-10-21T20:42:31.566Z
publishedAt: 2021-10-21T20:42:31.566Z
firstPublishedAt: 2018-01-25T14:56:56.161Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: cms-folder-structure
locale: es
legacySlug: estructura-de-carpetas-del-cms
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Algunas carpetas del CMS son __obligatorias__. Si su tienda no tiene esas carpetas - __con los nombres exactamente iguales__ a los que indicamos en este artículo - usted tendrá problemas de navegación e indexación.

Otras carpetas son __indicadas__, por ser útiles a la mayoría de las tiendas.

En este artículo hablaremos sobre todas estas carpetas.

## Carpetas obligatorias

Estas son las carpetas que toda tienda necesita tener en el CMS para garantizar el correcto funcionamiento de la navegación y de la indexación:

- Busca
- Categoria
- Departamento
- Login
- Produto

A continuación, vea estas carpetas básicas en el CMS:

![pastasObrigatorias](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Layout/estructura-de-carpetas-del-cms_1.png)

Estas carpetas vienen de forma predeterminada en el ambiente de todas las tiendas VTEX.

>❗ Los nombres de las carpetas obligatorias no deben modificarse. Esto puede comprometer el funcionamiento normal de la tienda e impedir que se realicen las compras.

Como las carpetas se refieren a páginas dinámicas, sus nombres no aparecen en la navegación del cliente. Es decir, el hecho de que la edición de los nombres sea vetada no afecta el texto final de sus URLs ni, por lo tanto, la internacionalización de su sitio web.

Los nombres de los layouts se pueden editar sin ningún problema.

## Carpetas importantes

Algunas carpetas del CMS no son obligatorias, pero son útiles. Por eso, indicamos que no las excluye.

Estas son:
- `/account`: cuenta del cliente.
- `/account/orders`: pedidos del cliente.

Para estas dos carpetas, lo que importa es el control o placeholder que lee su contenido. Sus nombres se pueden editar libremente.

>⚠️ >
> Como son carpetas privadas, `/account` y `/account/orders` **deben requerir autenticación**. Ver [en este artículo](http://help.vtex.com/es/tutorial/exigir-autenticacion-en-paginas-de-la-tienda) cómo asegurarse de que están configuradas para solicitar autenticación del usuario.

## Carpetas útiles

Hay dos carpetas que, aunque no son tan importantes como las anteriores, suelen ser útiles para gran parte de las tiendas. Estas son:

- `/sistema/buscavazia`: carpeta donde el usuario es dirigido si la búsqueda no encuentra resultados.
- `/sistema/{codigoHTTP}`: carpeta que renderiza páginas de errores de acuerdo con los códigos de status HTTP, tales como `404` (página no encontrada), `401` (no autorizado) y `500` (error de servidor).
- `/sistema/marcas`: carpeta que contiene layouts de páginas de marca, que pueden ser personalizadas con un layout exclusivo. Si no hay layout específico para marcas, estas páginas se renderizarán de la misma manera que la carpeta de búsqueda. Para entender cómo funcionan las páginas de marca, consulte el artículo [sobre la búsqueda de VTEX](https://help.vtex.com/es/tutorial/como-funciona-a-busca-da-vtex).
