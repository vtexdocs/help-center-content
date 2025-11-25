---
title: 'Registrar el código de barras de los SKUs para VTEX Sales App'
id: 4eooWH0d8Aiwzparyi4Hg
status: PUBLISHED
createdAt: 2020-06-28T19:59:59.437Z
updatedAt: 2025-11-19T15:50:45.045Z
publishedAt: 2023-05-31T15:50:45.045Z
firstPublishedAt: 2020-06-28T20:04:59.879Z
contentType: trackArticle
productTeam: Shopping
slugEN: register-the-barcode-of-the-skus-for-vtex-sales-app
locale: es
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 7
---

Para usar el **VTEX Sales App**, los productos de la tienda física deben estar agregados en el catálogo de su cuenta en VTEX. Es allí donde insertamos todos los productos y definimos sus características.

> ⚠️ Los vendedores solo tendrán acceso a los productos a través de **VTEX Sales App** una vez que los productos estén agregados en el catálogo de su tienda.

Entre la información ingresada en el registro de un producto en el Catálogo, se encuentra el **EAN**, que corresponde al código de barras del SKU. Es el que le permite al vendedor agregar fácilmente el producto al carrito del **VTEX Sales App**, a través de la máquina lectora. El app también permite ingresar el código de barras en el campo de búsqueda.

El catálogo del **VTEX Sales App** generalmente se hereda del catálogo del ecommerce. Así es como se configurará su **VTEX Sales App** después de la [Configuración básica](https://help.vtex.com/es/docs/tracks/vtex-sales-app-configuracion-basica). En este escenario, los productos ya estarán registrados. Usted solo necesita asegurarse de que los códigos de barras estén correctamente agregados al campo **EAN** de cada SKU.

## Agregue el EAN de sus SKUs

Para registrar el **EAN** del SKU, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs**, o escribe **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la fila del producto deseado.
3. Haz clic en la pestaña `SKUs`.
4. En el campo **EAN**, complete el valor del código de barras.
5. Haz clic en `Guardar`.

>ℹ️ La información de **EAN** puede tardar hasta 10 minutos en actualizarse. A continuación, será posible agregar el SKU al carrito del **VTEX Sales App** a través de la máquina lectora de códigos de barras.

Alternativamente, el campo **EAN**, así como otros campos del SKU, se pueden completar a través de [planilla](https://help.vtex.com/es/docs/tutorials/rellenar-campos-de-la-planilla-de-importacion) o su ERP. Sepa más en [Integraciones de backend](https://help.vtex.com/es/docs/tracks/integraciones-de-backend).
