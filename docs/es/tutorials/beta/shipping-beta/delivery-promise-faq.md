---
title: 'Delivery Promise: FAQ'
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

Estas son algunas preguntas frecuentes relacionadas con **[Delivery Promise (Beta)](https://help.vtex.com/es/tutorial/delivery-promise-beta--p9EJH9GgxL0JceA6dBswd)**:

[1. ¿Cuáles son los requisitos para que el producto se muestre en la vitrina?](#1-cuales-son-los-requisitos-para-que-el-producto-se-muestre-en-la-vitrina)

[2. ¿Delivery Promise (Beta) garantiza que todos mis productos se mostrarán en la vitrina?](#2-delivery-promise-beta-garantiza-que-todos-mis-productos-se-mostraran-en-la-vitrina)

[3. ¿Cómo puedo garantizar que el stock del producto se muestre en la vitrina?](#3-como-puedo-garantizar-que-el-stock-del-producto-se-muestre-en-la-vitrina)

[4. ¿Necesito solicitar la ubicación del cliente para utilizar Delivery Promise (Beta)?](#4-necesito-solicitar-la-ubicacion-del-cliente-para-utilizar-delivery-promise-beta)

[5. En el contexto de Delivery Promise (Beta), ¿qué ocurre si el cliente no desea compartir su ubicación y VTEX no puede deducir su dirección?](#5-en-el-contexto-de-delivery-promise-beta-que-ocurre-si-el-cliente-no-desea-compartir-su-ubicacion-y-vtex-no-puede-deducir-su-direccion)

[6. ¿Dónde debo configurar las tiendas que atienden determinados códigos postales?](#6-donde-debo-configurar-las-tiendas-que-atienden-determinados-codigos-postales)

[7. ¿Qué ocurre si utilizo la funcionalidad Región?](#7-que-ocurre-si-utilizo-la-funcionalidad-region)

[8. ¿Delivery Promise (Beta) permite mostrar filtros y tags de envío gratis?](#8-delivery-promise-beta-permite-mostrar-filtros-y-tags-de-envio-gratis)

[9. ¿Puedo optar por no usar Delivery Promise (Beta)?](#9-puedo-optar-por-no-usar-delivery-promise-beta)

### 1. ¿Cuáles son los requisitos para que el producto se muestre en la vitrina?

El retailer debe verificar que los siguientes aspectos del producto estén correctamente configurados:

* Registro del producto y SKU en el catálogo.
* Registro de precio.
* [Estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) que permite enviar el pedido a la dirección facilitada por el cliente.
* Recuento del [stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) del producto para ventas, o stock ilimitado configurado o posibilidad de activar la opción para mostrar el producto cuando esté agotado.
* Plantillas de [CMS](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) configuradas para el frontend de la tienda.

> ℹ️ Para más información, consulta [¿Por qué el producto no se muestra en el sitio web?](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### 2. ¿Delivery Promise (Beta) garantiza que todos mis productos se mostrarán en la vitrina?

Cuando se configuran correctamente los ajustes necesarios para que el producto se muestre en la vitrina, **Delivery Promise (Beta)** muestra todo el surtido de tus productos y de los productos de tus sellers en la vitrina de la tienda. Si un producto no está disponible debido a configuraciones incorrectas o a la falta de stock, no se mostrará en la vitrina, incluso con la nueva funcionalidad. Para saber más, consulta [¿Por qué el producto no se muestra en el sitio web?](https://help.vtex.com/es/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### 3. ¿Cómo puedo garantizar que el stock del producto se muestre en la vitrina?

Hay tres formas:

* Mantener el [stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) del producto con recuento de stock para ventas (los [ítems reservados](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92) no están disponibles para la venta).
* Activar la opción [stock ilimitado](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) para el producto.
* Configurar el producto para que se muestre en la vitrina aunque esté agotado. Para hacerlo, ve a **Catálogo > Todos los productos** en el Admin VTEX y, en la página de configuración del producto, en la pestaña Producto, marca la opción **Sí** en el campo `Mostrar cuando no tenga stock`.

### 4. ¿Necesito solicitar la ubicación del cliente para utilizar Delivery Promise (Beta)?

El funcionamiento de **Delivery Promise (Beta)** solo es posible cuando el cliente facilita su ubicación o cuando VTEX la infiere. Esta inferencia puede realizarse de las siguientes maneras:

* La dirección del cliente se captura automáticamente cuando este acepta el plugin del navegador para compartir su ubicación.
* Si el navegador no dispone del mencionado plugin o el cliente no desea compartir su ubicación, la dirección se deducirá a partir de la dirección IP del dispositivo del cliente.

En todas las opciones anteriores, el cliente tiene la posibilidad de facilitar su dirección o una dirección diferente en cualquier momento.

### 5. En el contexto de Delivery Promise (Beta), ¿qué ocurre si el cliente no desea compartir su ubicación y VTEX no puede deducir su dirección?

En este caso, el retailer puede utilizar una de las siguientes estrategias:

* Definir [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI), lo que permite mostrar los productos de estos sellers a clientes que no proporcionen su ubicación.
* Definir un código postal o [geolocalización](https://help.vtex.com/es/tutorial/gerenciar-geolocalizacao--tutorials_138) predeterminada para los clientes que no informen su ubicación. Sugerimos que esté cerca de un [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) con una gran cantidad de productos o de una región con mayor volumen de ventas.

### 6. ¿Dónde debo configurar las tiendas que atienden determinados códigos postales?

Incluso si utilizas **Delivery Promise (Beta)**, esta configuración se realiza en las [plantillas de envío](https://help.vtex.com/es/tutorial/planilha-de-frete--tutorials_127) de las [políticas de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) de los sellers.

### 7. ¿Qué ocurre si utilizo la funcionalidad Región?

**Delivery Promise (Beta)** sustituye todas las funcionalidades existentes en [Región V1](https://help.vtex.com/es/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) y V2, además de añadir mejoras en el desempeño, la experiencia de compra y nuevas funcionalidades. Como la solución aún está en fase de desarrollo, la regionalización de sellers sigue siendo utilizada normalmente por los clientes que no participan en **Delivery Promise (Beta)**.

### 8. ¿Delivery Promise (Beta) permite mostrar filtros y tags de envío gratis?

En la fase beta actual, no habrá filtros de envío gratis. Por el momento, vamos a ofrecer opciones de filtros y tags por tipo de envío (recogida o envío), y por punto de recogida. La vitrina mostrará productos de sellers que estén disponibles para la venta.

### 9. ¿Puedo optar por no usar Delivery Promise (Beta)?

La decisión de utilizar o no **Delivery Promise (Beta)** es tuya. Si no deseas solicitar la ubicación del comprador, puedes seguir utilizando la solución actual de navegación de clientes sin ubicación definida, y asociar [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI) si así lo deseas. Sin embargo, la mejor experiencia de compra del cliente con la vitrina de la tienda se logra con **Delivery Promise (Beta)**, que es la recomendación de VTEX.

