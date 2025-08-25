---
title: 'Borrar una categoría'
id: tutorials_276
status: PUBLISHED
createdAt: 2017-04-27T22:10:36.202Z
updatedAt: 2023-03-29T18:10:52.580Z
publishedAt: 2023-03-29T18:10:52.580Z
firstPublishedAt: 2017-04-27T23:03:13.181Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: deleting-a-category
legacySlug: borrar-una-categoria
locale: es
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

Por motivos relacionados con la seguridad de datos, en la plataforma VTEX, no es posible eliminar individualmente una categoría después de su creación.

## Inactivar una categoría

Para que una categoría no les aparezca a los clientes de la tienda, puede inactivarla en su tienda. De esa forma, solo aparecerá listada en el Admin. Siga los pasos a continuación para realizar esta configuración:

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Categorías__.
3. Haga clic en la categoría que desea inactivar.
4. Haga clic en el botón `Acciones`.
5. Haga clic en `Editar`.
6. Desmarque el campo __Activo | Categoría está activa en la tienda__, según se muestra en esta imagen: ![img inativarcategoria ES](//images.ctfassets.net/alneenqid6w5/6SzDebwe2AzOlz9PjlaHNP/32994a6c1018db2d24e5acca0e2dcce0/img_inativarcategoria_ES.png)
7. Haga clic en `Guardar`.

## Eliminar todas las categorías

Otra opción es [limpiar el catálogo](https://help.vtex.com/es/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802) y eliminar todas las «Categorías», «Marcas» y «Especificaciones» al mismo tiempo. Para eso, es necesario «Eliminar los productos y SKUs» antes. Siga los pasos a continuación:

1. Introduzca la siguiente URL en su navegador: `{accountName}.myvtex.com/admin/Site/fullcleanup.aspx`
2. Haga clic en `Eliminar los productos y SKUs`. Atención: al eliminar estos elementos, sus «Productos» y «SKUs», así como sus ítems relacionados, serán borrados de forma definitiva de su tienda.
3. Después, haga clic en `Eliminar Categorías y Marcas`. Atención: al eliminar estos elementos, «Categorías», «Marcas» y «Especificaciones», así como sus ítems relacionados, serán borrados de forma definitiva de su tienda.

> ⚠️ Por razones de seguridad, solo el [usuario Titular](https://help.vtex.com/es/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) de la cuenta tiene acceso a la limpieza de la base. Si otro usuario intenta acceder a esta página, todos los botones estarán inactivos.

### Artículos relacionados
- [Registrar categoría](/es/tutorial/cadastrando-categoria)
- [Registrar un producto](/es/tutorial/registrando-producto)
- [Registrar un SKU](/es/tutorial/registrando-sku)
