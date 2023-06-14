---
title: Configurar descuento de precio al contado
id: 7Lfcj9Wb5dpYfA2gKkACIt
status: PUBLISHED
createdAt: 2020-12-18T19:16:46.225Z
updatedAt: 2023-03-31T21:35:57.904Z
publishedAt: 2023-03-31T21:35:57.904Z
firstPublishedAt: 2021-05-04T20:05:58.585Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: configurar-descuento-de-precio-al-contado
legacySlug: configurar-descuento-de-precio-al-contado
subcategory: 3pGCbMh80UueoeSqoAgSuS
---

Una de las estrategias de atracción de clientes más utilizadas en el comercio electrónico es aplicar a medios de pago específicos un descuento en el __precio al contado__. Este precio promocional generalmente es visible para el usuario solo en la etapa de pago del checkout, después de la selección de la forma de pago. 

La mayor ventaja de esta estrategia es que el precio al contado se calcula automáticamente, evitando inconsistencias en los canales de venta - como Google Shopping - que comparan el precio enviado por la integración con el precio que se muestra en la página de producto

Para utilizar esta estrategia en la plataforma VTEX, además de indicar el descuento de precio al contado, se debe seleccionar el medio de pago en el que se aplicará el descuento. Por lo tanto, es necesario:

1. Utilizar Checkout API para determinar el descuento de precio al contado y vincularlo a un medio de pago (vea el tutorial [Set a discount using the Checkout API](https://developers.vtex.com/vtex-rest-api/docs/set-a-discount-using-the-checkout-api)).
2. Configurar el layout del CMS para que el descuento sea visible en el medio de pago seleccionado en la página de producto (vea a continuación).  

## CMS

Después de determinar el descuento en Checkout, se debe vincular el SKU al medio de pago para que el descuento de precio al contado sea visible en la página de producto. Realice los siguientes pasos. 

1. En el Admin VTEX, accede a *Storefront > Layout*, o escribe *Layout* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la carpeta __CMS__ y, luego, en la carpeta __HTML Templates__.
3. Haga clic en el template de su página de producto en la lista de templates.
4. En la propiedad `skuPrice`, añada la variable `paymentSystemId` con el ID del medio de pago deseado. 

![Screenshot 2020-12-18 Crear precio al contado](https://images.ctfassets.net/alneenqid6w5/4X9sxu1jruXPgpJc5AthbD/ce74271f2f7ca41fa3f762b12a226bcb/Screenshot_2020-12-18_Criar_pre__o____vista.png)

6. Luego, haga clic en __Save Template__ en el campo superior, para guardar la alteración.

Después de realizar esa configuración, el descuento de precio al contado estará activo. 

## VTEX IO Store Framework
Para las tiendas desarrolladas con VTEX IO, esa funcionalidad está disponible de forma nativa mediante el componente `vtex.product-price` en el bloque `product-spot-price`. Para configurarla, acceda a nuestra [documentación de producto](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-price#configuration). 

## Artículos relacionados

[Configurar descuento de precio al contado para Google Shopping](https://help.vtex.com/es/tutorial/configurar-descuento-de-precio-al-contado-para-google-shopping--40K3R5d4NogMvCzIWdWt3e#)

