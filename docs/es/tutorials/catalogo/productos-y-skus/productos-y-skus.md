---
title: 'Productos y SKUs'
id: 2ig7TmROlirWirZjFWZ3By
status: PUBLISHED
createdAt: 2022-11-30T17:55:25.970Z
updatedAt: 2025-06-12T15:40:53.270Z
publishedAt: 2025-06-12T15:40:53.270Z
firstPublishedAt: 2022-11-30T19:04:31.183Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: products-and-skus
legacySlug: productos-y-skus-beta
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

La página **Productos y SKUs** permite ver y gestionar toda la lista de productos registrados en la tienda, incluyendo la información de los SKU, fecha de actualización y status. Para acceder a la página, ve a **Catálogo > Productos y SKUs**. 

![products_and_skus_listing_page_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/productos-y-skus_1.png)

La página te permite realizar las siguientes acciones:

- [Crear producto](#crear-producto)
- [Buscar productos](#buscar-productos)
- [Filtrar productos](#filtrar-productos)
- [Monitorear disponibilidad de los productos](#monitorear-disponibilidad-de-los-productos)
- [Ver la lista de SKUs](#ver-la-lista-de-skus)
- [Editar productos](#editar-productos)
- [Acceder al menú de acciones](#acceder-al-menu-de-acciones)
- [Ver detalles de indexación](#ver-detalles-de-indexacion)

En la lista de productos, puedes ver la siguiente información:

| **Columna** | **Descripción** |
|----|----|
| **Nombre** | Nombre que identifica el producto, definido al crearlo. Debajo del nombre, la página muestra el ID del producto, es decir, el código identificador único del producto.Junto al nombre, cada fila muestra una flecha <i class="fas fa-chevron-right"></i> para [ver la lista de SKUs](#ver-la-lista-de-skus) asociada al producto, un icono que representa la [disponibilidad del producto](#monitorear-disponibilidad-de-los-productos) y la imagen registrada para el producto.|
| **Última actualización** | Fecha de [indexación](/es/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) más reciente del producto. Para ver los detalles de este proceso, consulta la sección [Ver detalles de indexación](#ver-detalles-de-indexacion). |

## Crear producto

Al hacer clic en el botón `Agregar producto`, se abrirá la página de [agregar producto](/es/tutorial/agregar-o-editar-productos--29IkdEu6GofCFlltsZh2H8) en el catálogo. Para más información sobre cómo llenar los campos, consulta el artículo [Llenar campos de registro de producto](/es/tutorial/campos-de-cadastro-de-produto).

## Buscar productos

Para encontrar un producto específico, puedes ingresar uno de los siguientes datos en la barra de búsqueda:

* ID del producto
* ID del SKU
* EAN del SKU
* Nombre del producto
* Nombre del SKU
* Código de referencia del producto
* Código de referencia del SKU

Después de escribir la información en la barra de búsqueda, la barra se expande y muestra los criterios existentes. La búsqueda se realiza inmediatamente al hacer clic en la opción deseada y devuelve los resultados. Para limpiar la búsqueda, haz clic en el ícono X en la barra de búsqueda.

> ℹ️ El orden de las búsquedas sigue la fecha de actualización: mientras más reciente sea la actualización de un producto o SKU, mayor será su prioridad en los resultados.

## Filtrar productos

Puedes filtrar la lista de productos por los criterios que se listan a continuación, seleccionando los filtros y haciendo clic en `Aplicar`. Para cancelar la selección, haz clic en el filtro seleccionado y luego en `Limpiar`.

* [Status](#filtrar-por-status)
* [Marca](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh)
* [Categoría](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Seller](/es/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w)
* [Kit](/es/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28)
* [Visibilidad de la tienda](/es/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke?&utm_source=autocomplete)
* [Política comercial](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)
* Fecha de creación

> ℹ️ Una forma rápida de buscar productos creados recientemente es utilizar el filtro `Fecha de creación`. Puedes escoger entre las opciones de productos creados `Hoy` o `Últimos 7 días`.

### Filtrar por status

La siguiente tabla describe el significado de las opciones del filtro `Status`:

| **Tipo de status** | **Descripción** |
| :---: | :--- |
| Activo | El producto se considera activo cuando el retailer activa la configuración del status en el producto para demostrar que desea venderlo.Para poder venderlo, el producto debe estar activo. Sin embargo, la activación no garantiza su disponibilidad, ya que un producto disponible debe cumplir con otros factores, como precio, stock, entre otros. Consulta más información en [¿Por qué el producto no aparece en el sitio web?](/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). |
| Inactivo | El producto se considera inactivo cuando el retailer desactiva la configuración de status para indicar que no desea venderlo en ese momento.Todo producto inactivo se clasifica como no disponible para la venta. |

## Monitorear disponibilidad de los productos

En la página **Productos y SKUs** cada producto tiene un ícono de color que indica la disponibilidad para la venta. Al pasar el mouse sobre el ícono, se muestra cierta información que se detalla a continuación:

| **Color del ícono** | **Nombre** | **Significado** |
| :---: | :---: | :--- |
| Verde | `Disponible para la venta` | El producto tiene status activo y está disponible para la venta en la tienda; además tiene por lo menos una [política comercial](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) asociada. |
| Naranja | `Producto no disponible` | El producto no está disponible para la venta a pesar de tener status activo. Es decir, el retailer configuró el status para indicar que desea venderlo, pero por el momento no está disponible.La indisponibilidad del producto puede deberse a diferentes motivos, como precio, stock, logística, entre otros. Para más información, consulta el artículo [¿Por qué el producto no aparece en el sitio web?](/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). |
| Blanco | `Inactivo en el catálogo` | El producto está deshabilitado y tiene status inactivo.Los retailers desactivan un producto cuando no desean venderlo y en estos casos el seguimiento de la disponibilidad no se aplica. |

Los íconos de disponibilidad del producto se aplican de la misma manera a los SKUs, según se describe en la sección a seguir.

## Ver la lista de SKUs

Al hacer clic en la flecha <i class="fas fa-chevron-right"></i> en la fila de un producto de la lista, la plataforma muestra una lista con todos los SKUs registrados para ese producto, según se ilustra a continuación:

![products_and_skus_sku_icons_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/productos-y-skus_2.gif)

En la lista de SKU, se puede ver la siguiente información:

* **Ícono de color:** status actual de la disponibilidad para la venta del SKU. Los íconos de los SKUs tienen el mismo significado que los de los productos, según se describe en [Monitorear disponibilidad de los productos](#monitorear-disponibilidad-de-los-productos).
* **Imagen:** imagen principal asociada al SKU.
* **ID:** código numérico identificador único del SKU.
* **Nombre:** nombre del SKU.

Al pasar el mouse sobre la fila de un SKU, se muestran íconos que te permiten realizar varias acciones:

*  <i class="fas fa-cube" aria-hidden="true"></i> **Editar stock:** dirige a la pantalla de gestión de stock en el Admin VTEX para editar la cantidad del SKU disponible para la venta en stock. Consulta el artículo [Gestión del stock](/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) para más información.
* <i class="fas fa-dollar-sign" aria-hidden="true"></i> **Editar precios:** dirige a la **Lista de precios** en el Admin VTEX para editar los precios registrados para el SKU.
* <i class="fas fa-info-circle" aria-hidden="true"></i> **Información:** abre una ventana modal para consultar la información de precio, stock y política comercial del SKU.
* <i class="far fa-clone" aria-hidden="true"></i> __Copiar código del SKU:__ copia el ID del SKU al portapapeles.
* <i class="far fa-eye"></i> __Activar__ / <i class="far fa-eye-slash"></i> __Desativar:__ abre una ventana que permite activar o desactivar el SKU en la tienda.

## Editar productos

Para editar información de registro de un producto, puedes hacer clic en cualquier parte de la fila del producto. De esta manera, accederás a la página de [agregar producto](/es/tutorial/agregar-o-editar-productos--29IkdEu6GofCFlltsZh2H8) y podrás editar la información deseada.

También puedes editar el producto a través del [menú de acciones](#acceder-al-menu-de-acciones) > `Editar producto`.

## Acceder al menú de acciones

Al hacer clic en el icono de menú <i class="fas fa-ellipsis-v"></i> de un producto, puedes realizar las siguientes acciones:

* **Editar producto:** dirige a la pantalla de [agregar producto](/es/tutorial/agregar-o-editar-productos--29IkdEu6GofCFlltsZh2H8) para modificar la información.
* **Ver lista de SKUs:** dirige a la pantalla de la lista de SKU.
* **Editar categoría similar:** dirige a la pantalla de registro de categoría similar, que permite asociar una categoría al producto. Para más información, consulta el artículo [Configurar categoría similar](/es/tutorial/configurando-categoria-similar--tutorials_204).
* **Editar precios:** dirige a la **Lista de precios** en el Admin VTEX para editar los precios registrados para el producto y sus SKU.
* **Editar stock:** dirige a la pantalla de gestión de stock en el Admin VTEX para editar la cantidad de cada SKU del producto disponible para la venta en stock. Consulta el artículo [Gestión del stock](/es/tutorial/gerenciar-itens-em-estoque--tutorials_139) para más información.
* **Ver en la tienda:** dirige a la página de detalles del producto (PDP) en el [storefront](/es/tutorial/visao-geral-storefront--7cRrL2xtY7HDqiyep1PxIS) de la tienda.
* **Ver detalles de indexación:** abre una ventana modal con los detalles de la indexación del producto y los SKU. Consulta la sección [Ver detalles de indexación](#ver-detalles-de-indexacion) para más información.

## Ver detalles de indexación

La página **Productos y SKUs** te permite ver los logs (registros técnicos) de la indexación de productos y SKUs haciendo clic en la fila del producto deseado y luego seleccionando `Ver detalles de la indexación` en el [menú de acciones](#acceder-al-menu-de-acciones) <i class="fas fa-ellipsis-v" aria-hidden="true"></i>. Se mostrará la ventana **Log de indexación** según se ilustra a continuación:

![products_and_skus_indexing_modal_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/productos-y-skus_3.png)

En la parte superior derecha de la ventana, puedes copiar el contenido al portapapeles haciendo clic en <i class="far fa-clone" aria-hidden="true"></i> `Copiar`. Para cerrar la ventana, haz clic en el ícono <i class="far fa-times-circle" aria-hidden="true"></i> o fuera de la ventana.

## Más información

* [Agregar o editar productos](/es/tutorial/agregar-o-editar-productos--29IkdEu6GofCFlltsZh2H8)
* [Agregar o editar SKUs](/es/tutorial/agregar-o-editar-skus--4ryZ6J45kwn3jDiQBxGiiN)
* [Llenar campos de registro de producto](/es/tutorial/campos-de-cadastro-de-produto)
* [¿Por qué el producto no aparece en el sitio web?](/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382)
* [¿Qué ajustes de logística impactan la disponibilidad del producto en el carrito?](/es/tutorial/quais-configuracoes-logisticas-impactam-na-disponibilidade-do-produto-no-carrinho--NAyBFToRdvlDyOzeeAeNw)

