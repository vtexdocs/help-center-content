---
title: 'Integrar con Google Shopping'
id: tutorials_7034
status: DRAFT
createdAt: 2017-04-27T21:48:21.080Z
updatedAt: 2021-04-15T21:41:15.677Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:42.177Z
contentType: tutorial
productTeam: Channels
author: authors_41
slug: nueva-integracion-nativa-con-google-shopping-por-api
legacySlug: nueva-integracion-nativa-con-google-shopping-por-api
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

La nueva integración de Google Shopping deja de utilizar XML para permitir la integración por API y el acompañamiento en tiempo real por la sección de __Integraciones__.

El XML no se ha descontinuado; todavía es posible utilizarlo, pero la API trabaja con recursos modernos, mucho más rápidos y confiables.

Para habilitar esta nueva integración con Google Shopping, es necesario tener una cuenta en Google Merchant Center vinculada a Google Adwords, donde se necesita una campaña de tipo shopping para que los productos activos de Merchant Center estén disponibles y aparezcan en los resultados de búsqueda de Google.

Para más información sobre las campañas y anuncios de Shopping, acceda a [este artículo de Google](https://support.google.com/google-ads/answer/2454022?co=ADWORDS.IsAWNCustomer%3Dfalse&hl=es)

Para habilitar la nueva integración con Google Shopping, es necesario:

## Cómo configurar

1. En el menú Admin, haga clic en __Integraciones__.
2. Haga clic en __Configuraciones__.
3. En la opción de Google Shopping, haga click en **Integrar**. 

En este formulario de configuración, es necesario completar el código de su Merchant Center y un email e um e-mail para la creación del afiliado Google Shopping en el Gestión de Pedidos. También es posible habilitar/deshabilitar la integración al clickear en los botones **Ativada**/**Desativada**.

En VTEX Integraciones se cuenta con la posibilidad de enviar el precio promocional o dejar desactivada esta opción. Por default, ésta flag viene activada.

Y el ID de la cuenta del merchant si es multi-client (ese campo debe ser rellenado con el ID de la sub-cuenta relacionada con el merchant).

OBS.: Si la tienda nota que los productos están divergiendo de precio o que usa un schema de datos de actualización automática y no quisiera desactivarlo (Desea trabajar con las dos opciones, integración + actualización automática en Google Shopping), se podrá mientras que el precio promocional estuviese contenido dentro la tag de los updates automáticas pueden mientras el precio promocional esté contenido dentro de la etiqueta de las actualizaciones automáticas. Y si no quieres puedes ir en Integraciones y desactivar.

## Autorizar acceso a VTEX

El siguiente paso es autorizar a VTEX para tener acceso a su Merchant Center y enviar sus productos. Antes de todo, haga login en Google Merchant Center con el usuario master\* allí existente.

\*Para saber cuál es el e-mail master de Google Shopping, tenga en cuenta que es el único que permite administrar usuarios.

Para eso haga click en **Autorización** y luego en el botón **Deseo Autenticarme**. Será redireccionado a una página de Google para conceder el acceso a VTEX para que utilicemos las APIs de Merchant Center. Finalmente clickee en **Permitir**

Aparecerá una notificación en la pantalla dijendo que "el acceso se ha concedido con éxito"

## Consideraciones

#### Productos enviados
En la integración actual, **todos** los productos disponibles en la política comercial serán enviados a Google Shopping, no habiendo posibilidad de filtrar por colección en este momento. Este es un recurso futuro, que está en nuestro backlog.

#### Precio enviado
Se envía el precio establecido en la política comercial vinculada con Google Shopping. Si hay un precio de oferta (de/por), se enviará el precio "por". Si hay una promoción de descuento para pago al contado (promoción condicionada a la forma de pago con **"boleto"**), este beneficio se aplicará al valor del producto antes de su envío.

#### Precio cuando hay varios sellers
En el caso de marketplace, siempre enviamos la mejor oferta entre los sellers disponibles.

#### Resolución de imagen
Se enviará la mayor resolución disponible para el producto, conforme archivo que fue cargado en el registro.

#### EAN / GTIN
Se trata el GTIN. Si el producto tiene EAN, lo enviamos, y si el EAN no es válido, el error se mostrará en el Integraciones como "EAN invalido = GoogleShopping bad request".

#### Tamaño de la descripción
Respetamos el límite de descripción de producto de Google Shopping, enviando el máximo de 5 mil caracteres.

#### Otras integraciones
No se deben utilizar dos integraciones con Google Shopping activas al mismo tiempo. Optando por utilizar nuestra integración por API, solamente esta debe estar activa, deshabilitando el XML, por ejemplo.

#### URL del sitio
En el console de Google Merchant usted debe rellenar la URL exacta del sitio, prestando atención a la existencia de WWW o no, y al uso de HTTP o HTTPS. Los links se construyen a partir de estos datos, y si la información es incorrecta, los redireccionamientos no serán contabilizados correctamente por Google Analytics.

#### Expiración de productos
Google hace con que los productos enviados expiren automáticamente después de 30 días si no se actualizan (esto incluye cualquier cambio en el producto, ya sea de precio, inventario, o especificación).

#### Tamaño del título
El límite es de 150 caracteres, pero los anuncios de Google solo muestran 70 caracteres de todos modos ([entienda más aquí](https://support.google.com/merchants/answer/6098378?hl=es)). La integración envía hasta 150 caracteres que se compone de Título del Producto + Título de SKU.

<div class="alert alert-warning">
<strong>Atención:</strong> La integración por XML no fue discontinuada, pero si la integración es hecha por XML y por el módulo de Integraciones (API) los productos aparecerán duplicados.
</div>

