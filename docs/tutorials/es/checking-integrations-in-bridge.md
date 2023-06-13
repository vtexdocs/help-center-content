---
title: Comprobar status de integración en el panel del Integrations
id: tutorials_422
status: PUBLISHED
createdAt: 2017-04-27T22:05:50.596Z
updatedAt: 2020-02-19T20:51:05.382Z
publishedAt: 2020-02-19T20:51:05.382Z
firstPublishedAt: 2017-04-27T23:03:24.679Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: como-verificar-la-integracion-en-bridge
legacySlug: como-verificar-la-integracion-en-bridge
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

__Integraciones__ es el módulo responsable de la gestión de todos los marketplaces utilizados por su tienda. En este módulo se debe realizar el registro de toda nueva integración con marketplaces.

En el Integraciones, es posible acompañar la integración con los diversos marketplaces activos, verificando la integración de __pedido__, __producto__, __rastreo__, __precio__ y __inventario__. Además, e sposible ver el status de la integración de cada ítem y realizar el __reprocesamiento__ de ese status, si es necesario.

## Navegación del Integraciones

En el Integraciones, usted puede consultar las cinco pestañas de integración enumeradas a continuación:

1. [Pedidos](#pedidos)
2. [Productos](#productos)
3. [Rastreo](#rastreo)
4. [Precio](#precio)
5. [Inventario](#inventario)

En todas las pantallas hay un __filtro__, una __caja de búsqueda__ y un botón de __Expandir Todos__, que muestra los detalles de cada línea.

También es posible exportar un informe con la información de Integraciones haciendo clic en el botón __Exportar a excel__. Usted puede utilizar el filtro para exportar solamente la información deseada.

## Pedidos

En la opción __Pedidos__, el Integraciones muestra el registro de pedidos realizados en los marketplaces en los que está integrada su tienda. Tenemos cuatro columnas que informan:

- __Código__ del pedido.
- __Afiliado__ donde se realizó el pedido.
- __Status__ del pedido, que puede ser *proceso con éxito* o *proceso con error*.
- __Data de procesamiento__, que indica la última vez que se procesó el pedido.

Usted puede ver más detalles haciendo clic en la información del pedido.

En caso de error, se mostrará un registro detallado de las causas del pedido no integrado. Para solucionar estos errores, puede hacer clic en el botón __?__. Usted será enviado a [nuestro artículo](/es/faq/errores-en-bridge-como-solucionar) con orientaciones para la resolución del error. Después de hacer las correcciones, debe hacer clic en el botón __Acciones__ y elegir la opción __Reprocesar__.


## Productos

En la opción __Productos__, el Integraciones muestra el registro de productos que se han enviado a los marketplaces en los que está integrada su tienda. Tenemos cuatro columnas que informan:

- __Código__ de SKU.
- __Afiliado__ para el que se envió el SKU.
- __Status__ del envío de SKU, que puede ser *proceso con éxito* o *proceso con error*.
- __Data de procesamiento__, que indica la última vez que se procesó un envío de SKU.

Es posible ver más detalles haciendo clic en la información de SKU.

En caso de error, se mostrará un registro detallado de las causas del producto no enviado al afiliado. Después de hacer las correcciones, usted debe hacer clic en el botón __Acciones__ y elegir la opción __Reprocesar SKU__.

## Rastreo

En la opción __Rastreo__, el Integraciones muestra el registro del envío de los pedidos realizados en los marketplaces en los que está integrada su tienda. Tenemos cuatro columnas que informan:

- __Código__ del pedido.
- __Afiliado__ donde se realizó el pedido.
- __Status__ del rastreo, que puede ser *proceso con éxito* o *proceso con error*.
- __Data de procesamiento__, que indica la última vez que se procesó el rastreo.

Usted puede ver más detalles haciendo clic en la información de rastreo.

En caso de error, se mostrará un registro detallado sobre el envío del pedido. Después de hacer las correcciones, usted debe hacer clic en el botón __Acciones__ y elegir la opción __Reprocesar__.

## Precio

En la opción __Precio__, el Integraciones muestra el registro de precios de productos que se han enviado a los marketplaces en los que está integrada su tienda. Tenemos cuatro columnas que informan:

- __Código__ de SKU.
- __Afiliado__ para el que se envió el precio del SKU.
- __Status__ del envío del precio del SKU, que puede ser *proceso con éxito* o *proceso con error*.
- __Data de procesamiento__, que indica la última vez que se procesó el envío de precio de SKU.

Usted puede ver más detalles haciendo clic en la información de envío de precios.

En caso de error, se mostrará un registro detallado sobre el envío del precio. Después de hacer las correcciones, usted debe hacer clic en el botón __Acciones__ y elegir la opción __Reprocesar__.

## Inventario

En la opción __Inventario__, el Integraciones muestra el registro del inventario de productos que se envió a los marketplaces en los que está integrada su tienda. Tenemos cuatro columnas que informan:

- __Código__ de SKU.
- __Afiliado__ para el que se envió el inventário.
- __Status__ del envío del inventario, que puede ser *proceso con éxito* o *proceso con error*.
- __Data de procesamiento__, que indica la última vez que se procesó el envío de inventario de SKU.

Es posible ver más detalles haciendo clic en la información de envío del inventario.

En caso de error, se mostrará un registro detallado sobre el envío del inventario. Después de hacer las correcciones, usted debe hacer clic en el botón __Acciones__ y elegir la opción __Reprocesar__.

## Artículos relacionados

- [Cómo funciona la regla de disponibilidad mínima](/es/tutorial/como-funciona-la-regla-de-disponibilidad-minima)
- [¿Por qué el pedido de marketplace no integró?](/es/faq/por-que-el-pedido-del-marketplace-no-integro)
