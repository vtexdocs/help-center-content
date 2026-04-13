---
title: 'Delivery Promise: preguntas frecuentes'
id: 2frHHK5uPsQrLK5XbYHALN
status: PUBLISHED
createdAt: 2025-08-07T14:54:46.418Z
updatedAt: 2025-08-07T15:03:08.816Z
publishedAt: 2025-08-07T15:03:08.816Z
firstPublishedAt: 2025-08-07T15:03:08.816Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: delivery-promise-faq
legacySlug: delivery-promise-faq
locale: es
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

Consulta a continuación algunas preguntas frecuentes relacionadas con **[Delivery Promise (beta)](/es/docs/tutorials/delivery-promise-beta)**:

## 1. ¿Cuáles son los requisitos para que el producto se muestre en la vitrina?

Los siguientes ajustes del producto deben estar correctamente configurados:

* Registro del producto y SKU en el catálogo.
* Registro de precio.
* [Estrategia de envío](/es/docs/tutorials/estrategia-de-envio) que viabiliza el envío del pedido a la dirección proporcionada por el cliente.
* Cantidad de producto en [stock](/es/docs/tutorials/gestionar-items-en-inventario) disponible para venta, o stock ilimitado configurado u opción activa para mostrar el producto cuando no hay stock.
* Plantillas de [CMS](/es/docs/tracks/o-que-e-o-cms) del frontend de la tienda configuradas.

> ℹ️ Para más información, consulta el artículo [¿Por qué el producto no aparece en el sitio web?](/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web).

## 2. ¿Delivery Promise (beta) garantiza que todos mis productos se mostrarán en la vitrina?

Cuando se configuran correctamente los ajustes necesarios para que el producto se muestre en la vitrina, **Delivery Promise (beta)** muestra todo el surtido de tus productos y de los productos de tus sellers en la vitrina de la tienda. Si un producto no está disponible debido a configuraciones incorrectas o a la falta de stock, no se mostrará en la vitrina, incluso con la nueva funcionalidad. Para más información, consulta el artículo [¿Por qué el producto no aparece en el sitio?](/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web).

## 3. ¿Cómo puedo garantizar que el stock del producto se muestre en la vitrina?

Hay tres formas:

* Mantener el [stock](/es/docs/tutorials/gestionar-items-en-inventario) del producto con el recuento de almacén para ventas (recordando que los ítems [reservados](/es/docs/tutorials/como-se-maneja-la-reserva) no están disponibles para la venta).
* Activar la configuración de [stock ilimitado](/es/docs/tutorials/gestionar-items-en-inventario) para el producto.
* Configurar el producto para que se muestre en la vitrina incluso cuando esté sin stock. Para configurarlo, accede a **Catálogo > Productos y SKUs** en el Admin VTEX y, en la página de configuración del producto, en la pestaña Producto, **activa** el botón de alternancia `Mostrar cuando no hay stock`.

## 4. ¿Necesito solicitar la ubicación del cliente para utilizar Delivery Promise (beta)?

El funcionamiento de **Delivery Promise (beta)** solo es posible cuando el cliente facilita su dirección o cuando VTEX infiere su configuración regional. Esta inferencia puede realizarse de las siguientes maneras:

* La dirección del cliente se captura automáticamente cuando este acepta el plugin del navegador para compartir su ubicación.
* El cliente proporciona la dirección en el componente de código postal de Delivery Promise.

En todas las opciones anteriores, el cliente tiene la posibilidad de proporcionar su dirección o una dirección diferente en cualquier momento.

## 5. En el contexto de Delivery Promise (beta), ¿qué ocurre si el cliente no desea compartir su ubicación y VTEX no puede inferir su dirección?

Como retailer puedes utilizar una de las siguientes estrategias:

* Definir [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura), para que los productos de estos sellers se muestren a los clientes que no proporcionan ubicación.
* Definir un código postal o [geocoordenadas](/es/docs/tutorials/gestionar-geolocalizacion) predeterminadas para clientes que no informan ubicación. Recomendamos que esté cerca de un [almacén](/es/docs/tutorials/almacen) con gran stock de productos o de la región con mayor volumen de ventas.

## 6. ¿Dónde debo configurar las tiendas que atienden determinados códigos postales?

Incluso si utilizas **Delivery Promise (Beta)**, debes realizar esta configuración en las [plantillas de envío](/es/docs/tutorials/plantilla-de-flete) de las [políticas de envío](/es/docs/tutorials/politica-de-envio) de los sellers.

## 7. ¿Qué ocurre si utilizo la funcionalidad Región?

**Delivery Promise (beta)** sustituye todas las funcionalidades existentes en [Region V1](es/docs/tutorials/configurar-la-regionalizacion-del-seller) y V2, además de añadir mejoras en el desempeño, experiencia de compra y nuevas funcionalidades. Como **Delivery Promise** está en fase beta, la regionalización de sellers la continúan usando normalmente clientes que no participan en esta fase.

## 8. ¿Delivery Promise (beta) permite mostrar filtros y tags de envío gratis?

La fase beta actual no incluye componentes de tipo envío gratis. Por ahora, ofrecemos opciones de filtros y otros componentes en el storefront por plazo de envío, tipo de envío (recogida o envío) y punto de recogida.

## 9. ¿Puedo optar por no usar Delivery Promise (beta)?

La decisión de utilizar o no **Delivery Promise (beta)** es tuya. Si no deseas solicitar la ubicación del comprador, puedes seguir utilizando la solución actual de navegación de clientes sin ubicación definida, con la opción de asociar [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura). Sin embargo, la mejor experiencia de compra para el cliente con la vitrina de la tienda se logra con **Delivery Promise (beta)**, que es la recomendación de VTEX.

## 10. ¿Los filtros de Delivery Promise (beta) se aplican a sellers externos?

La experiencia de filtros (por código postal, método de envío, plazo, punto de recogida) y de otros componentes se aplica a productos de sellers VTEX, del [Seller Portal](https://help.vtex.com/es/docs/tutorials/seller-portal-primeros-pasos-para-el-marketplace) y externos.
