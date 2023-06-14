---
title: Guía de integración para Marketplace no alojada en la plataforma VTEX
id: SMBUYFVEfZr0m0ttOULxj
status: PUBLISHED
createdAt: 2019-09-16T12:59:18.174Z
updatedAt: 2022-10-30T20:49:19.369Z
publishedAt: 2022-10-30T20:49:19.369Z
firstPublishedAt: 2019-10-14T19:49:14.349Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: guia-de-integracion-para-marketplaces-marketplace-non-vtex
legacySlug: guia-de-integracion-para-marketplaces-marketplace-non-vtex
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

<div class="alert alert-warning">
Consulte la versión actualizada de esta <a href="https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide">guía de integración con marketplaces</a> en nuestro Developer Portal.
</div>

Este documento ayuda en la integración de un Marketplace no hospedado en la plataforma VTEX con un Seller hospedado en la plataforma VTEX. 

Las acciones necesarias para realizar esta integración, del lado del Marketplace, se pueden dividir en dos bloques:

- **A)** Acciones referentes a la actualización de __catálogo__ (cambio de catálogo, alteración de precio o alteración en el inventario de un SKU).  

- **B)** Acciones referentes al envío y procesamiento de __pedidos__ (simulación de carrito, envío de pedidos, autorización de despacho, recepción de factura, rastreo de transportadora y cancelación).  

En este artículo, obtendrá una visión general del proceso de integración de ambos bloques, además de tener acceso a los enlaces con el procedimiento específico de cada acción.

> **Algunos conceptos**

**Seller**: Dueño del producto, responsable del fullfilment; es decir, de cumplir con la entrega del SKU.<br/> 
**Marketplace/Afiliado** - Dueño de la vitrina (donde el cliente final ve el producto), responsable de exponer y realizar la venta del SKU.<br/> 

**SKU** - Ítem para ser intercambiado y vendido entre Marketplace y Seller.<br/> 

**Política Comercial** - Surtido de productos, precios y configuraciones de logística que determina las características de un canal de venta.<br/> 

**Endpoint** - Punto de acceso de un servicio en Internet, servicio listo para recibir un request y devolver una respuesta.<br/> 

**MarketplaceServicesEndpoint** - Punto de acceso donde el Seller VTEX entrega al Marketplace informaciones sobre el pedido, como la factura y el código de rastreo del pedido.<br/> 

## A) Flujo referente a la actualización de Catálogo 

- Dentro de la tienda hospedada en VTEX (*Seller*), se registrará un *afiliado* (es decir, el **Marketplace**), que es el interesado en recibir el catálogo y las actualizaciones en los SKUs.  

- El **Marketplace** debe implementar un endpoint donde recibirá notificaciones sobre cualquier alteración de precio, inventario o catálogo del seller.  

- En el *Seller* VTEX, cada vez que un SKU comercializado por el **Marketplace** sufre una alteración de precio, inventario o en el catálogo, se llamará el endpoint de notificación del afiliado.  

- Cuando el **Marketplace** es notificado por el *Seller* de que un SKU sufrió esa alteración, el **Marketplace** debe verificar si actualmente comercializa aquel SKU.  

> En caso afirmativo: el **Marketplace** utiliza la API del Catálogo para obtener en el Seller los datos del SKU y guarda esos datos.

> En caso negativo: el **Marketplace** utiliza la API del Catálogo para obtener en el Seller los datos del SKU y decidir si los incluye o no en la tienda.  

### API REST - Acciones Referentes a la Actualización de Catálogo

1) Marketplace recibe notificación de alteración de precio, inventario o catálogo.  

2) Marketplace busca datos de SKU en el Seller a través de la API del catálogo.  

3) Marketplace busca precio, inventario y datos de flete del SKU a través de la API de Fullfillment.  

<div class = "alert alert-info">
Más información en la documentación para desarrolladores <a href="https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide">External Marketplace</a>.
</div>

## B) Flujo Referente al Envío y Procesamiento de Pedidos

El flujo de integraciones referente al envío y procesamiento de pedidos se puede dividir en tres momentos, cada uno con acciones específicas:

### Simulación de carrito

- El producto se coloca en el carrito del **Marketplace** u ocurre la edición de productos en el carrito.  

- **Marketplace** necesita hacer una consulta de simulación de carrito en el *Seller* para verificar el precio e inventario.  

> OBS: Cuando el cliente cierra el pedido y va para el pago, se debe realizar otra simulación de carrito.  

### Envío de Pedidos y Despacho

- El pedido se cierra en el **Marketplace**.  
- El **Marketplace** ingresa el pedido en el endpoint del  *Seller*.  
- El pago del pedido se concluye en el **Marketplace**.  
- El **Marketplace** llama al endpoint del *Seller* para autorizar el despacho del pedido.  

### Implementación de Marketplace Services Endpoint Actions

- El *Seller* llama al *Marketplace Services Endpoint* para realizar tres posibles acciones finales:

- Informar factura.  
- Informar código de rastreo de la transportadora.  
- Enviar solicitud de cancelación.  

### API REST: Acciones Referentes al Envío de Procesamiento de Pedidos

1) Simulación de carrito.  

2) Ingresar pedido en el Seller.  

3) Autorizar despacho de pedido en el Seller.  

4) Informar factura.  

5) Informar rastreo  de la transportadora.  

6) Enviar solicitud de cancelación.  

[Acceda al procedimiento completo aquí](https://help.vtex.com/es/tutorial/integracao-entre-marketplace-nao-vtex-e-seller-vtex-acoes-referentes-ao--5AiW7dZ4nGMDI9TAg43zmf).
