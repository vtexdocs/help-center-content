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

A continuación, algunas preguntas frecuentes relacionadas con **[Delivery Promise](/es/docs/tutorials/delivery-promise)**:

## 1. ¿Cuáles son los requisitos para que el producto se muestre en la vitrina?

El retailer debe garantizar la configuración correcta de los siguientes aspectos del producto:

* Registro a nivel de producto y SKU en el catálogo.
* Registro de precio.
* [Estrategia de envío](/es/docs/tutorials/estrategia-de-envio) que hace posible el envío del pedido a la dirección proporcionada por el cliente.
* Recuento del producto en el [stock](/es/docs/tutorials/gestionar-items-en-inventario) disponible para la venta, stock ilimitado configurado u opción habilitada para mostrar el producto cuando está agotado.
* Plantillas de [CMS](/es/docs/tracks/o-que-e-o-cms) del frontend de la tienda configuradas.

> ℹ️ Para más información, consulta el artículo [¿Por qué el producto no aparece en el sitio web?](/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web).

## 2. ¿Delivery Promise garantiza que todos mis productos se mostrarán en la vitrina?

**Delivery Promise** muestra productos solo cuando todos los [requisitos de visualización](#1-cuales-son-los-requisitos-para-que-el-producto-se-muestre-en-la-vitrina) están configurados correctamente. Si un producto no está disponible por configuraciones incorrectas o por falta de stock de ese producto, no se mostrará en la vitrina, incluso con la nueva funcionalidad. Para saber más, consulta el artículo [¿Por qué el producto no aparece en el sitio web?](/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web).

## 3. Con relación al stock del producto, ¿cómo puedo garantizar que se mostrará en la vitrina?

Existen tres formas de hacerlo:

* Mantener el [stock](/es/docs/tutorials/gestionar-items-en-inventario) del producto con recuento de stock para la venta. Recuerda que los ítems [reservados](/es/docs/tutorials/como-se-maneja-la-reserva) no están disponibles para la venta.
* Habilitar la configuración de [stock ilimitado](/es/docs/tutorials/gestionar-items-en-inventario) para el producto.
* Configurar el producto para que aparezca en la vitrina incluso cuando esté agotado. Para eso, en el Admin VTEX accede a **Catálogo > Todos los productos** y, en la página de configuración del producto, en la pestaña Producto, marca la opción **Sí** en el campo `Mostrar cuando no hay stock`.

## 4. ¿Necesito solicitar la ubicación del cliente para utilizar Delivery Promise?

Sí. El funcionamiento de **Delivery Promise** solo es posible cuando el cliente informa su dirección o cuando VTEX infiere su ubicación. Esta inferencia puede hacerse de las siguientes formas:

* La dirección del cliente se captura automáticamente cuando acepta el plugin del navegador para compartir su ubicación.
* Si el navegador no tiene el plugin mencionado o el cliente se niega a compartir su ubicación, la inferencia de la dirección se hace a partir de la dirección IP del dispositivo del cliente.

En todas las opciones mencionadas, el cliente puede en cualquier momento proporcionar su dirección o una dirección diferente.

## 5. En el contexto de Delivery Promise, ¿qué ocurre si el cliente se niega a compartir su ubicación y VTEX no puede inferir su dirección?

En este caso, el retailer puede definir [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura), lo que permite que los productos de esos sellers se muestren a los clientes que no proporcionan ubicación.

## 6. ¿Dónde debo configurar qué tiendas atienden determinados códigos postales?

Esta configuración debe hacerse en las [plantillas de envío](/es/docs/tutorials/plantilla-de-flete) de las [políticas de envío](/es/docs/tutorials/politica-de-envio) de los sellers.

## 7. ¿Qué ocurre si utilizo la funcionalidad Region?

**Delivery Promise** sustituye todas las funcionalidades existentes en [Region V1](/es/docs/tutorials/configurar-la-regionalizacion-del-seller) y V2, además de añadir mejoras de desempeño, experiencia de compra y nuevas funcionalidades. La regionalización de sellers sigue disponible para las tiendas que no activaron **Delivery Promise**.

## 8. ¿Con Delivery Promise será posible mostrar filtros y tags de envío gratis?

No. **Delivery Promise** no ofrece filtros del tipo envío gratis. Los filtros disponibles incluyen: plazo de envío, tipo de envío (recogida o entrega) y punto de recogida.

## 9. ¿Puedo optar por no usar Delivery Promise?

Sí. El uso de la funcionalidad es opcional. Si no deseas solicitar la ubicación del cliente, puedes seguir usando la solución actual de navegación del cliente sin ubicación definida, y asociarla o no a [sellers de extensa cobertura](/es/docs/tutorials/seller-de-extensa-cobertura).

Sin embargo, VTEX recomienda usar **Delivery Promise** para ofrecer una mejor experiencia de compra en la búsqueda y en la navegación.

## 10. ¿Los filtros de Delivery Promise se aplican a sellers externos?

Sí. La experiencia de filtros (por código postal, forma de entrega, plazo y punto de recogida) y de otros componentes se aplica a productos de sellers VTEX, de sellers del [Seller Portal](https://help.vtex.com/es/docs/tutorials/seller-portal-primeros-pasos-para-el-marketplace) y de sellers externos.
