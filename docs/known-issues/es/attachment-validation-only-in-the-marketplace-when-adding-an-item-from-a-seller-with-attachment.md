---
title: 'Validación de adjuntos sólo en el mercado al añadir un artículo de un vendedor con adjunto.'
id: 638N4urP08NY7v8jdH7U5N
status: PUBLISHED
createdAt: 2023-12-22T18:18:59.194Z
updatedAt: 2023-12-22T18:18:59.909Z
publishedAt: 2023-12-22T18:18:59.909Z
firstPublishedAt: 2023-12-22T18:18:59.909Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: validacion-de-adjuntos-solo-en-el-mercado-al-anadir-un-articulo-de-un-vendedor-con-adjunto
locale: es
kiStatus: Backlog
internalReference: 957343
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Añadir un artículo de un vendedor con un archivo adjunto en la misma solicitud de API, la validación de archivos adjuntos se produce sólo en el mercado.

**Escenario 1:**
Si el marketplace tiene el mismo nombre de adjunto y las claves difieren de las del vendedor, se mostrará el mensaje de error "Item attachment has an invalid value for key", y el artículo no se añadirá al carrito.

**Escenario 2:**
Si el marketplace no tiene el mismo adjunto, se mostrará el mensaje de error "El nombre del adjunto no es válido", y el artículo no se añadirá al carrito.

Este comportamiento ocurre en ambas APIs para añadir artículos: Añadir artículos al carrito y Manejar artículos del carrito.


##

## Simulación



- Configurar el mismo adjunto en el marketplace y vendedor con diferentes claves de campo;
- Asociar con un artículo;
- Añadir el artículo a través de Añadir artículos del carrito o Manejar artículos del carrito, con archivos adjuntos.


- Configurar un anexo en el vendedor y asociarlo a un artículo;
- Añadir el artículo a través de Añadir artículos del carro o Gestionar artículos del carro, con archivos adjuntos.



## Workaround



- Añada el artículo primero y el adjunto después en solicitudes diferentes. Para enviar el adjunto, puede
  - enviar los archivos adjuntos a través de Manejar artículos del carrito;
  - enviar los archivos adjuntos a través de Añadir un archivo adjunto a un artículo, por ejemplo:

    curl --location 'https://{accountName}.{environment}.com.br/api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/attachments/{attachmentName}' \--header 'Content-Type: application/json' \--data '{"content": { "key": "value" }, "noSplitItem": true}'




