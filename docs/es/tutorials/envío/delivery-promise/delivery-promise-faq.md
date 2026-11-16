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

Consulta a continuación algunas preguntas frecuentes relacionadas con **[Delivery Promise](https://help.vtex.com/es/docs/tutorials/delivery-promise)**:

## 1. ¿Cuáles son los requisitos para que el producto se muestre en la vitrina?

El retailer debe verificar que los siguientes aspectos del producto estén correctamente configurados:

- Registro del producto y SKU en el catálogo.
- Registro de precio.
- [Estrategia de envío](https://help.vtex.com/es/docs/tutorials/estrategia-de-envio) que hace posible el envío del pedido a la dirección proporcionada por el cliente.
- Recuento del producto en el [stock](https://help.vtex.com/es/docs/tutorials/gestionar-items-en-inventario) disponible para la venta, stock ilimitado configurado u opción activada para mostrar el producto cuando no hay stock.
- Plantillas de [CMS - Información general](https://help.vtex.com/es/docs/tracks/o-que-e-o-cms) del frontend de la tienda configuradas.

> ℹ️ Para más información, consulta el artículo [¿Por qué el producto no se muestra en el sitio web?](https://help.vtex.com/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web).

## 2. ¿Delivery Promise garantiza que todos mis productos se muestren en la vitrina?

**Delivery Promise** solo muestra productos cuando todos los [requisitos de visualización](#1-cuales-son-los-requisitos-para-que-el-producto-se-muestre-en-la-vitrina) están correctamente configurados. Si un producto no está disponible debido a configuraciones incorrectas o a la falta de stock, no se mostrará en la vitrina, incluso con la nueva funcionalidad. Para saber más, consulta el artículo [¿Por qué el producto no se muestra en el sitio web?](https://help.vtex.com/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web).

## 3. ¿Cómo puedo garantizar que el stock del producto se muestre en la vitrina?

Hay tres formas:

- Mantener el [stock](https://help.vtex.com/es/docs/tutorials/gestionar-items-en-inventario) del producto con recuento de stock para la venta. Recuerda que los ítems [reservados](https://help.vtex.com/es/docs/tutorials/como-se-maneja-la-reserva) no están disponibles para la venta.
- Activar la configuración de [stock ilimitado](https://help.vtex.com/es/docs/tutorials/gestionar-items-en-inventario) para el producto.
- Configurar el producto para que se muestre en la vitrina aunque no haya en stock. Para hacerlo, ve a **Catálogo > Productos y SKUs** en el Admin VTEX y, en la página de configuración del producto, en la pestaña Producto, marca la opción **Sí** en el campo `Mostrar cuando no hay stock`.

## 4. ¿Necesito solicitar la ubicación del cliente para utilizar Delivery Promise?

Sí. El funcionamiento de **Delivery Promise** solo es posible cuando el cliente facilita su ubicación o cuando VTEX la infiere. Esta inferencia puede realizarse de las siguientes maneras:

- La dirección del cliente se captura automáticamente cuando este acepta el plugin del navegador para compartir su ubicación.
- Si el navegador no dispone del mencionado plugin o el cliente no desea compartir su ubicación, la dirección se deducirá a partir de la dirección IP del dispositivo del cliente.

En todas las opciones anteriores, el cliente tiene la posibilidad de facilitar su dirección o una dirección diferente en cualquier momento.

## 5. En el contexto de Delivery Promise, ¿qué ocurre si el cliente no desea compartir su ubicación y VTEX no puede inferirla?

En este caso, el retailer puede definir [Seller de extensa cobertura](https://help.vtex.com/es/docs/tutorials/seller-de-extensa-cobertura), lo que permite que los productos de esos sellers se muestren a los clientes que no proporcionan ubicación.

## 6. ¿Dónde debo configurar las tiendas que atienden determinados códigos postales?

Esta configuración debe hacerse en las [plantillas de envío](https://help.vtex.com/es/docs/tutorials/plantilla-de-flete) de las [políticas de envío](https://help.vtex.com/es/docs/tutorials/politica-de-envio) de los sellers.

## 7. ¿Qué ocurre si utilizo la funcionalidad Región?

**Delivery Promise** sustituye todas las funcionalidades existentes en [Region V1](https://help.vtex.com/es/docs/tutorials/configurar-la-regionalizacion-del-seller) y V2, además de agregar mejoras de desempeño, experiencia de compra y nuevas funcionalidades. La regionalización de sellers sigue disponible para las tiendas que no activaron **Delivery Promise**.

## 8. ¿Delivery Promise permite mostrar filtros y tags de envío gratis?

No. **Delivery Promise** no ofrece filtros de envío gratis. Los filtros disponibles incluyen: meta de entrega, método de envío (recogida o entrega) y punto de recogida, entre otros posibles.

## 9. ¿Puedo optar por no usar Delivery Promise?

Sí. El uso de la funcionalidad es opcional. Si no deseas solicitar la ubicación del comprador, puedes seguir usando la solución actual de navegación del cliente sin ubicación definida, y asociarla o no a [sellers de extensa cobertura](https://help.vtex.com/es/docs/tutorials/seller-de-extensa-cobertura).

Sin embargo, VTEX recomienda usar **Delivery Promise** para ofrecer una mejor experiencia de compra en la búsqueda y la navegación.

## 10. ¿Los filtros de Delivery Promise se aplican a sellers externos?

Sí. La experiencia de filtros (por código postal, método de envío, meta de entrega y punto de recogida) y de otros componentes se aplica a productos de sellers VTEX, de sellers del [Seller Portal: Primeros pasos para el marketplace](https://help.vtex.com/es/docs/tutorials/seller-portal-primeros-pasos-para-el-marketplace) y de sellers externos.
