---
title: 'Exigir autenticación en páginas de la tienda'
id: 3iPNIUgcr60Es24Y4YIwms
status: DRAFT
createdAt: 2018-01-22T22:30:59.147Z
updatedAt: 2021-05-27T18:30:38.021Z
publishedAt: 
firstPublishedAt: 2018-01-23T13:07:24.636Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: exigir-autenticacion-en-paginas-de-la-tienda
locale: es
legacySlug: exigir-autenticacion-en-paginas-de-la-tienda
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Es posible que, para ciertas páginas de la tienda, los usuarios tengan que autenticarse a través del VTEX ID, es decir, pueden requerir que inicien sesión en la página.

Algunas páginas vienen con esta configuración de forma predeterminada. Por ejemplo, las páginas `/Account` y `/Account/Orders`.

![authenticationRequired](https://images.contentful.com/alneenqid6w5/60cIIkiKDSEs2ocmqescgM/3f5a0c46d61c1002c22bc7b5469db7eb/authenticationRequired.png)

Pero usted puede tanto quitar el requisito de autenticación para estas páginas como insertarlo en otras páginas.

Para ello, siga los pasos abajo:
1. Acceda al módulo __CMS__.
2. Haga clic en la carpeta correspondiente a la página deseada.
3. Haga clic en el botón __Edit __.![editFolder](https://images.contentful.com/alneenqid6w5/2DSRmQFQxeAYcoiWCAaU62/bc08bd32b394545d8af716338d55a0be/editFolder.png)
4. Marque o desmarque la flag __Authentication Required__.![authenticationRequiredFlag](https://images.contentful.com/alneenqid6w5/3iK3iGguAUg84KuAsC4MYW/1dcdae221b886b4a4d1cdc4eb87af9a4/authenticationRequiredFlag.png)
5. Haga clic en __Save Folder__.

Tenga en cuenta que cada vez que la flag __Authentication Required__ está marcada en una carpeta, la dirección URL de esta página se montará con la ruta `_secure`. Ex: `http://{AccountName}.vtexcommercestable.com.br/_secure/account/`

### Autenticación y cache

Por encima de la flag Authentication Required, queda la información del tipo de cache de la página (__Cache Type__).

Estas dos configuraciones (autenticación y cache) están estrechamente relacionadas, porque las páginas que necesitan autenticación no pueden tener cache. Esto es necesario porque, en caso de que haya cache en una página de login, los datos de autenticación de un usuario podrían guardarse en la cache y aparecer para otro usuario.

Por lo tanto, cuando marca la flag de autenticación requerida, usted ve que el Cache Type cambia automáticamente a `No Cache`.

Por otro lado, si desactiva la flag de autenticación requerida, el Cache Type cambia a `Local and Remote`, como en el caso de la imagen anterior.

### Protección de información sensible

Tenga en cuenta las páginas con información sensible. Normalmente, deben requerir autenticación.

Es el caso, por ejemplo, de la página de pedidos del cliente `/Account/Orders`, que, por defecto, ya viene con la flag Authentication Required marcada cuando la tienda recibe su ambiente.

Si esta página no está marcada con la flag de autenticación requerida, puede ocurrir que, debido a la cache, la información personal de un cliente se muestra a otros clientes.
