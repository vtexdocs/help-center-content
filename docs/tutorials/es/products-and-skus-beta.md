---
title: 'Productos y SKUs (Beta)'
id: 2ig7TmROlirWirZjFWZ3By
status: PUBLISHED
createdAt: 2022-11-30T17:55:25.970Z
updatedAt: 2023-07-11T15:12:54.179Z
publishedAt: 2023-07-11T15:12:54.179Z
firstPublishedAt: 2022-11-30T19:04:31.183Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: productos-y-skus-beta
locale: es
legacySlug: productos-y-skus-beta
subcategory: 6XPsLadoT3moZ7eTduCg3c
---

>ℹ️ Esta funcionalidad se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarla. Si tienes alguna duda, ponte en contacto con [nuestro Soporte](https://support.vtex.com/hc/pt-br/requests).

La página **Productos y SKUs** permite ver y gestionar toda la lista de productos registrados en la tienda, incluyendo la información de los SKU, fecha de actualización y status. Para acceder a la página, ve a **Catálogo > Productos y SKUs**. 

![products-skus-es](https://images.ctfassets.net/alneenqid6w5/3Euar7pKsXKgqIfz1MwOOa/1d07f47ff5411ae7b264cd9c74fbb21a/products-skus-es.png)

>ℹ️ Esta página solo está disponible para las tiendas que operan con el [nuevo Admin VTEX](https://help.vtex.com/es/announcements/bem-vindo-ao-novo-admin-vtex--5tLPBodp6Xu03vYdyBTGTa). Para acceder a esta página y formar parte de una nueva experiencia, únete al [programa Beta](https://content.vtex.com/participe-do-programa-beta-es/?utm_source=landing_page&utm_medium=help_center&utm_campaign=new_admin_beta) del nuevo Admin VTEX.

La página te permite realizar las siguientes acciones:

- [Crear producto](#crear-producto)
- [Buscar productos](#buscar-productos)
- [Filtrar productos](#filtrar-productos)
- [Monitorear el status de los productos](#monitorear-el-status-de-los-productos)
- [Ver la lista de SKUs](#ver-la-lista-de-skus)
- [Editar productos](#editar-productos)
- [Acceder al menú de acciones](#acceder-al-menu-de-acciones)
- [Ver detalles de indexación](#ver-detalles-de-indexacion)

En la lista de productos, puedes ver la siguiente información:

| **Columna** | **Descripción** |
|----|----|
| **Nombre** | Nombre que identifica el producto, definido al crearlo. Debajo del nombre, la página muestra el ID, es decir, el código identificador del producto. <br/><br/> Junto al nombre, cada fila muestra una flecha <i class="fas fa-chevron-right"></i> para [ver la lista de SKUs](#ver-la-lista-de-skus) asociada al producto, un icono que representa [el status del producto](#monitorear-el-status-de-los-productos) y la imagen registrada para el producto. |
| **Última actualización** | Fecha de [indexación](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) más reciente del producto. Para ver los detalles de este proceso, consulta la sección [Ver detalles de indexación](#ver-detalles-de-indexacion). |

## Crear producto

Al hacer clic en el botón `Agregar producto`, se abrirá la página de registro de un nuevo producto en el catálogo. Accede al artículo  [Llenar campos de registro de producto](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-produto) para ver cómo realizar este procedimiento.

## Buscar productos

Para encontrar un producto específico, puedes ingresar uno de los siguientes datos en la barra de búsqueda:

* ID del producto
* ID de SKU
* EAN
* Nombre del producto
* Nombre del SKU
* Código de referencia del producto
* Código de referencia del SKU

A continuación, haga clic en los criterios que desea utilizar para la búsqueda, como se ilustra en la imagen siguiente:

![products-skus-search-es](https://images.ctfassets.net/alneenqid6w5/3XkJPsJihm6flcVxPksPPO/e533bd234ce131fe2b6eb8f6705f77ba/search-es.gif)

La lista de productos mostrados se actualizará en función de su búsqueda. 

Para borrar la búsqueda, haz clic en el icono <i class="far fa-times-circle"></i> de la barra de búsqueda.

## Filtrar productos

Puedes filtrar la lista de productos según tus necesidades. Puedes utilizar los siguientes filtros:

* [Status](#monitorear-el-status-de-los-productos)
* [Marca](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh)
* [Categoría](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Seller](https://help.vtex.com/es/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w)
* [Kit](https://help.vtex.com/es/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28)
* [Visibilidad de la tienda](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke?&utm_source=autocomplete)
* [Política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)

Selecciona los filtros deseados y haz clic en `Aplicar` para filtrar los productos. Para cancelar la selección, haz clic en `Limpiar`.

>⚠️ No es posible filtrar productos por [seller](https://help.vtex.com/es/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) o fecha de preventa en esta versión del Catálogo.

## Monitorear el status de los productos

La última columna de la lista de productos muestra el status actual del producto, que puede ser:

| **Status** | **Descripción** |
|----|----|
| **Publicado** | Indica que el producto está activo y disponible para compra en la tienda en por lo menos una[ política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV).|
| **Pendiente** | Indica que falta información en el registro del producto, ya sea de precio o de logística, para que pueda estar disponible en la tienda. <br/><br/> Para entender qué información puede dejar la publicación del producto pendiente, consulta el artículo [¿Por qué el producto no aparece en el sitio web?](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). |
| **Inactivo** | Indica que el producto está desactivado y, por lo tanto, no está disponible para la venta. |

Para ver el status de los SKU de un producto, consulta la sección [Ver la lista de SKUs](#ver-la-lista-de-skus).

## Ver la lista de SKUs

Al hacer clic en la flecha <i class="fas fa-chevron-right"></i> en la fila de un producto de la lista, la plataforma muestra una lista con todos los SKU registrados para ese producto.

![sku-actions-es](https://images.ctfassets.net/alneenqid6w5/wv1FevJRrT0GwvKvvNb2W/5e99e7874f909914f6c489f40f336152/sku-actions-es.gif)

En la lista de SKU, se puede ver la siguiente información:

* **Status:** estado actual del SKU, representado por el icono de color en la fila del SKU. Los status posibles son los mismos que los relacionados con el producto:
    * **Publicado:** indica que el SKU está activo.
    * **Pendiente:** indica que falta información de registro del SKU, ya sea de precio o logística, para que pueda estar disponible en la tienda. Para entender qué información puede dejar la publicación del SKU pendiente, consulta el artículo [¿Por qué el producto no aparece en el sitio web?](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).
    * **Inactivo:** indica que el SKU está desactivado, por lo que no es visible en la tienda.
* **Imagen:** imagen principal asociada al SKU.
* **ID:** código identificador único del SKU.
* **Nombre:** nombre del SKU.
* <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class=" admin-ui-c-dnTJPl"><rect width="16rem" height="16rem" fill="none"></rect><path d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></path><polyline points="222.897 74.626 128.949 128 33.108 74.617" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></polyline><line x1="128.94915" y1="127.99996" x2="128.01036" y2="234.82127" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line></svg> &nbsp; <strong>Editar stock:</strong> dirige a la pantalla de gestión de stock en el Admin VTEX para editar la cantidad del SKU disponible para la venta en stock. Consulta el artículo [Gestión del stock](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) para más información.
* <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class=" admin-ui-c-dnTJPl"><rect width="16rem" height="16rem" fill="none"></rect><line x1="128" y1="72" x2="128" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line><line x1="128" y1="168" x2="128" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></circle><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></path></svg> &nbsp;<strong>Editar precios:</strong> dirige a la **Lista de precios** en el Admin VTEX para editar los precios registrados para el SKU.
* <i class="far fa-clone"></i> __Copiar código del SKU:__ copia el ID del SKU al portapapeles.
* <i class="far fa-eye"></i> __Activar__ / <i class="far fa-eye-slash"></i> __Desativar:__ activa o desactiva el SKU en la tienda.

## Editar productos

Para editar información de registro de un producto, puedes hacer clic en cualquier parte de la fila del producto. De esta manera, accederás a la página de registro del producto y podrás editar la información deseada.

También puedes editar el producto a través del [menú de acciones](#acceder-al-menu-de-acciones) > `Editar producto`.

## Acceder al menú de acciones

Al hacer clic en el icono de menú <i class="fas fa-ellipsis-v"></i> de un producto, puedes realizar las siguientes acciones:

* **Editar producto:** dirige a la pantalla de registro de producto para modificar la información.
* **Ver lista de SKUs:** dirige a la pantalla de la lista de SKU.
* **Editar categoría similar:** dirige a la pantalla de registro de categoría similar, que permite asociar una categoría al producto. Para más información, consulta el artículo [Configurar categoría similar](https://help.vtex.com/es/tutorial/configurando-categoria-similar--tutorials_204).
* **Editar precios:** dirige a la **Lista de precios** en el Admin VTEX para editar los precios registrados para el producto y sus SKU.
* **Editar stock:** dirige a la pantalla de gestión de stock en el Admin VTEX para editar la cantidad de cada SKU del producto disponible para la venta en stock. Consulta el artículo [Gestión del stock](https://help.vtex.com/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) para más información.
* **Ver en la tienda:** dirige a la página de detalles del producto en el storefront.
* **Ver detalles de indexación:** abre una ventana modal con los detalles de la indexación del producto y los SKU. Consulta la sección [Ver detalles de indexación](#ver-detalles-de-indexacion) para más información.

## Ver detalles de indexación

Al hacer clic en el menú  de la fila de un producto y seleccionar **Ver detalles de indexación**, aparecerá una ventana modal con dos pestañas que muestran los detalles de la [indexación](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) del producto y los SKU:

* [Precio y stock](#precio-y-stock)
* [Log de indexación](#log-de-indexacion)

### Precio y stock

Esta pestaña de la ventana modal muestra la lista de SKU asociados al producto y sus detalles de indexación.

![catalog-price-inventory-es](https://images.ctfassets.net/alneenqid6w5/4JWODR51ILI7KhEnzVC2t2/5c7748263994690cfb4ab39922ca19a9/preco-inventario-es.PNG)

Al hacer clic en la flecha `>` en la fila de cada SKU, puedes ver una tabla con la siguiente información:

| **Columna** | **Descripción** |
|---|---|
| **Seller** | Nombre del seller que puede vender el SKU. |
| **Política comercial** | Número y nombre de la política comercial correspondiente. |
| **Precio** | Precio del SKU en la política comercial. |
| **Stock** | Cantidad del SKU disponible para la venta en stock. |

### Log de indexación

Esta pestaña de la ventana modal muestra el log, es decir, el registro técnico que detalla la indexación referente al producto y los SKU relacionados.

![indexed-log-es](https://images.ctfassets.net/alneenqid6w5/4pPJmvun6SB9jTFqSR7XSX/f1925d2f1b8ed02bae5b34254e8f7a39/log-indexacao-es.PNG)

## Más información

* [Llenar campos de registro de producto](https://help.vtex.com/es/tutorial/campos-de-cadastro-de-produto)

