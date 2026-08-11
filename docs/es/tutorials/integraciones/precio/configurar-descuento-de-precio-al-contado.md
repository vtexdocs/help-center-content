---
title: 'Configurar descuento de precio al contado'
id: 7Lfcj9Wb5dpYfA2gKkACIt
status: PUBLISHED
createdAt: 2020-12-18T19:16:46.225Z
updatedAt: 2026-08-11T00:00:00.000Z
publishedAt: 2024-11-01T13:37:19.588Z
firstPublishedAt: 2021-05-04T20:05:58.585Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-a-pay-in-full-discount
legacySlug: configurar-descuento-de-precio-al-contado
locale: es
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
---

Una de las estrategias para atraer clientes más usadas en ecommerce es aplicar un descuento en el **precio al contado** de medios de pago específicos. Este precio promocional normalmente se muestra al cliente solo en la etapa de pago del checkout después de seleccionar el medio de pago.

La principal ventaja de esta estrategia es que el precio al contado se calcula automáticamente, evitando inconsistencias en canales de venta (como Google Shopping) que comparan el precio enviado por la integración con el precio mostrado en la página de producto.

Este tutorial explica cómo configurar un descuento de precio al contado en VTEX, desde la definición del descuento y del medio de pago hasta la configuración del frontend de la tienda para mostrar el valor correctamente en la página del producto.

## Antes de comenzar

Antes de configurar la visualización del precio al contado, crea o valida la promoción del descuento en el Admin VTEX. En la promoción defines:
- El medio de pago que recibirá el descuento.
- El porcentaje o valor del beneficio.
- Los canales de venta.
- El alcance de los productos elegibles, como SKUs, colecciones u otros criterios de la promoción.

Consulta más información en [Crear promociones](https://help.vtex.com/es/docs/tutorials/crear-promociones).

## Instrucciones

### 1 - Define el medio de pago utilizado en el cálculo del precio al contado

Utiliza el endpoint de configuración del `orderForm` para llenar la propiedad `paymentSystemToCheckFirstInstallment` con el ID del medio de pago deseado.

Puedes obtener el ID en el Admin VTEX, en **Configuración de la tienda > Pagos > Configuración > Condiciones de pago**.

![id-pagamentos](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/preço/id-pagamentos.png)

Después de actualizar la configuración, [simula un carrito](https://developers.vtex.com/docs/guides/simulate-a-shopping-cart) para verificar si el descuento se aplicó a la opción de pago al contado en `paymentData.installmentOptions`.

Consulta más información en [Set a discount using the Checkout API](https://developers.vtex.com/docs/guides/set-a-discount-using-the-checkout-api).

>ℹ️ Checkout API no crea reglas de descuento permanentes. Esas reglas deben definirse mediante promociones. Consulta más información en [Antes de comenzar](#antes-de-comenzar). Tampoco muestra el precio al contado en la página del producto. Eso se hace en el [siguiente paso](#2-configura-la-visualizacion-del-precio-al-contado-en-la-pagina-del-producto). Su función es solo indicar el medio de pago que debe considerarse y validar el resultado mediante simulaciones.

### 2 - Configura la visualización del precio al contado en la página del producto

Después de definir el medio de pago en el checkout, configura la tienda para mostrar el valor calculado del precio al contado en la página del producto.

#### Store Framework

En tiendas desarrolladas con Store Framework, esta funcionalidad está disponible de forma nativa a través del componente `vtex.product-price` en el bloque `product-spot-price`.

Para más información, consulta la documentación del componente [Product Price](https://developers.vtex.com/docs/apps/vtex.product-price).

## Portal CMS (Legado)

En las tiendas CMS Portal (Legado) es necesario indicar en la plantilla de la página de producto el medio de pago que debe considerarse al momento de mostrar el precio al contado. Sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout**, o escribe **Layout** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la carpeta **CMS** y luego en **HTML Templates**.
3. Haz clic en la plantilla de tu página de producto en la lista de plantillas.
4. En la propiedad `skuPrice`, agrega la variable `paymentSystemId` con el ID del medio de pago deseado.

   ![Screenshot 2020-12-18 Criar preço à vista](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/precio/configurar-descuento-de-precio-al-contado_1.png)

5. Haz clic en **Save Template** en el campo superior para guardar.

Con esta configuración la página del producto mostrará el valor al contado calculado para el medio de pago seleccionado.
