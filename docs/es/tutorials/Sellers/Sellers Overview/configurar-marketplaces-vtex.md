---
title: 'Configurar marketplaces VTEX'
id: 7splyp5MqIyt2Iyz5jsNzb
status: PUBLISHED
createdAt: 2022-01-26T21:27:16.808Z
updatedAt: 2024-05-23T15:18:17.648Z
publishedAt: 2024-05-23T15:18:17.648Z
firstPublishedAt: 2022-01-26T23:06:58.565Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: configuring-vtex-marketplace
locale: es
legacySlug: configuraciones-para-marketplace-vtex
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

La arquitectura de una tienda VTEX permite anunciar y vender productos en otras tiendas, que pueden ser VTEX o no. Cuando una tienda VTEX comienza a vender productos de otros sellers en su entorno, se convierte en un marketplace VTEX. Un marketplace es un tipo de comercio colaborativo, un modelo que ofrece ventajas y beneficios para las partes implicadas. Para más información sobre partners y oportunidades de crecimiento en el ecosistema VTEX, consulta el artículo [Estrategias de marketplace en VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402). 

Para operar como un _marketplace_, es necesario configurar los siguientes pasos en la plataforma VTEX:

1. [Definir una política comercial](#definir-una-politica-comercial)  
2. [Integrar un _seller_](#integrar-un-seller)    
3. [Mapear la arquitectura del Catálogo](#mapear-la-arquitectura-del-catalogo)
4. [Configurar la selección de _sellers_ en el _checkout_](#configurar-la-seleccion-de-sellers-en-el-checkout)  
5. [Configurar _storefront_](#configurar-storefront)  
6. [Configurar pagos](#configurar-pagos)  

## Definir una política comercial

La [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) determina el surtido de productos, los precios, los pagos, las promociones, la segmentación de clientes y la estrategia de envío de tu tienda VTEX en un canal de ventas. Es necesario [crear una nueva política comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) cuando una de estas configuraciones es diferente para los _sellers_ que actúan en tu vitrina. 

Si quieres que se aplique la misma configuración a tus canales de venta, no es necesario crear una nueva política comercial, ya que se puede utilizar la misma política comercial para diferentes canales de venta.

Si deseas crear más políticas comerciales, puedes [contratar políticas comerciales adicionales](https://help.vtex.com/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X). La contratación de políticas comerciales adicionales para integrar tiendas VTEX con conectores nativos, conectores certificados u otras tiendas VTEX es gratuita.

## Integrar un seller

Los _sellers_ son las tiendas que tienen los productos y son responsables del _fulfillment_ de los pedidos realizados en un _marketplace_. Para actuar como un _marketplace_ en VTEX, debes agregar los _sellers_ que deseas. Hay dos formas de integrar a un _seller_:

- **_Seller_ VTEX:** tienda hospedada en la plataforma VTEX.  
- **_Seller_ externo:** tienda hospedada en otra plataforma de _ecommerce_, o que aún no está hospedada en ninguna plataforma.  

Para agregar _sellers_ a tu _marketplace_ por el Admin VTEX, sigue las instrucciones en [Agregar seller](https://help.vtex.com/es/tutorial/adding-a-seller--tutorials_392/). También puedes realizar este proceso a través de la integración de la API. Para ello, siga las instrucciones en [External seller integration guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide). Si el _seller_ que deseas agregar aún no tiene una cuenta VTEX o no está hospedado en ninguna plataforma, te sugerimos que lo agregues a través del [Seller Portal](#seller-portal)

### Seller Portal

El [Seller Portal](https://help.vtex.com/es/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) es una edición de la plataforma VTEX destinada a que los _sellers_ se conecten y vendan sus productos en los _marketplaces_. Los _marketplaces_ hospedados en VTEX pueden invitar a los _sellers_ que ya tienen una cuenta VTEX a conectarse a través del Seller Portal. También es posible invitar a los _sellers_ hospedados en otras plataformas o a los que aún no están hospedados en ninguna plataforma a crear una cuenta en el Seller Portal de forma rápida y sin complicaciones.

Para entrar en el Seller Portal, el _marketplace_ debe solicitar esta funcionalidad poniéndose en contacto con el CSM de su cuenta VTEX.

Para agregar sellers a una cuenta del Seller Portal, sigue las instrucciones en [Invitar a sellers](https://help.vtex.com/es/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A).

## Mapear la arquitectura del Catálogo

El [catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR) de los _sellers_ que venden productos en tu _marketplace_ tiene una estructura diferente a la tuya, ya sean _sellers_ VTEX o externos. Hay dos momentos en los que es necesario compatibilizar los catálogos: 

- Cuando el _seller_ envía sus productos por primera vez a un _marketplace_ VTEX.  
- Cuando hay productos de los _sellers_ con información no mapeada.  

Esto permite introducir los productos enviados por un _seller_ con la información equivalente en el catálogo del _marketplace_ VTEX. 

Para realizar este paso, sigue las instrucciones en [Mapeo de categorías, marcas y especificaciones para marketplace](https://help.vtex.com/es/tutorial/mapeando-categorias-e-marcas-para-marketplace/). 

## Configurar la selección de sellers en el storefront y en el checkout

Se pueden mostrar diferentes _sellers_ durante la experiencia de compra en tu _marketplace_, según la configuración de algunas funcionalidades. Los _sellers_ que se muestran en el carrito y en el _storefront_ varían según la [visibilidad](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label) definida para cada uno y de la [ubicación](https://help.vtex.com/es/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc) del consumidor. El [algoritmo de selección de sellers](https://help.vtex.com/es/tutorial/white-label-sellers-selection-algorithm--3MemNQ4pKkWCpMdzI27AHa), por otro lado, define qué _sellers_ se muestran en el _checkout_ como opciones de _fulfillment_.

### Visibilidad

Puedes definir si la tienda del _seller_ será visible en la experiencia de compra en tu _marketplace_ para que los consumidores puedan identificar la información sobre el _seller_ del que están comprando. Los _sellers_ pueden configurarse como:

- **_Seller_ identificable:** el _seller_ es visible en el _storefront_ de tu _marketplace,_ y es elegido por el consumidor durante la experiencia de compra en _buy box_.  
- **_Seller_ no identificable (_white label_):** los _[sellers white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label)_ son cuentas franquicia en VTEX, ocultas en la experiencia de compra, y seleccionadas automáticamente por el sistema del _checkout_ para el _fulfillment_.  

Para agregar un _seller_ no identificable (_seller white label_), es necesario tener este modelo previsto en el contrato con VTEX. Una vez acordado un contrato con el representante de ventas de VTEX responsable de tu _marketplace_, envía una solicitud para agregar una cuenta franquicia siguiendo las instrucciones presentes en el siguiente artículo: [Solicitar la creación de una cuenta franquicia](https://help.vtex.com/es/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl#solicitar-criacao-de-conta-franquia). Todas las cuentas franquicia se crean como un _seller white label_, y no es posible cambiar el tipo de _seller_ después de su creación. Obtén más información en [Agregar sellers](https://help.vtex.com/es/tutorial/adding-a-seller--tutorials_392).

### Ubicación

La ubicación del consumidor cuando accede a tu _marketplace_ afecta a su experiencia de compra. El surtido de precios y productos que se muestran en el _storefront_ depende de los _sellers_ disponibles para esa región. 

Un _marketplace_ puede obtener la información de ubicación del usuario en el _storefront_ y durante el _checkout_ mediante la captura de coordenadas o utilizando un código postal proporcionado por el propio cliente, por ejemplo. Para ello, es necesario utilizar la funcionalidad _Region_ de [VTEX Session](https://help.vtex.com/es/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ), el sistema de gestión de sesiones de tu _ecommerce_. La funcionalidad _Region_ permite a una tienda mostrar diferentes precios y disponibilidades según las regiones a las que sirve. Para configurar los _sellers_ por ubicación en _Region_, sigue las instrucciones en [Precios y disponibilidad de los SKU en Region](https://help.vtex.com/es/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc).

Incluso cuando VTEX Session no tiene acceso a la ubicación del consumidor, sigue siendo necesario orientar un surtido de productos de los _sellers_ en la experiencia de compra. En este caso, el algoritmo de selección de _sellers_ indica [sellers de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI) que pueden entregar pedidos en todas las regiones atendidas por tu _marketplace_.

>ℹ️ La funcionalidad Region solo está adaptada a las tiendas que utilizan VTEX IO, y no es válida para el Portal CMS Legado.

## Configurar storefront

Debes configurar tu tienda para utilizar la información de los _sellers_ durante la experiencia de compra. Esto se puede hacer a través del Portal CMS Legado y en las tiendas que utilizan [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs).

Para las tiendas que todavía utilizan el Portal CMS Legado, configura los siguientes [controles](https://help.vtex.com/es/tutorial/lista-de-controles-para-templates--tutorials_563) en las plantillas de tu _ecommerce_:

<table>
  <tr>
   <td><strong>Control</strong>
   </td>
   <td><strong>Descripción</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:sellerDescription />
   </td>
   <td><strong>SellerDescription:</strong> nombre e imagen registrados para el <em>seller</em> del producto en cuestión.
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:SellerOptions />
   </td>
   <td><strong>SellerOptions:</strong> muestra los <em>sellers</em> que entregan el producto, el precio del producto vendido por cada <em>seller</em> y el pago en cuotas (límite de hasta 3 precios diferentes).
   </td>
  </tr>
  <tr>
   <td>&lt;vtex.cmc:sellerInfo />
   </td>
   <td><strong>SellerInfo:</strong> muestra la información registrada para el <em>seller</em>. Debe utilizarse en la página de detalles del <em>seller</em>, en la carpeta seller-info.
   </td>
  </tr>
</table>

Para las tiendas que utilizan [VTEX IO](https://vtex.com/us-en/store-framework/), comprueba la aplicación [Seller Selector](https://github.com/vtex-apps/seller-selector), que se utiliza para indicar el número de _sellers_ que tiene tu _marketplace_ para cada producto. De este modo, los compradores pueden comparar los precios de cada _seller_ y añadir el producto deseado a su carrito. 

Las tiendas que utilizan [VTEX IO](https://vtex.com/us-en/store-framework/) pueden crear un [anexo](https://help.vtex.com/es/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm) para activar la función de [Assembly Options](https://help.vtex.com/es/tutorial/assembly-options-en--5x5FhNr4f5RUGDEGWzV1nH). Esta funcionalidad es apropiada para los _sellers_ que gestionan escenarios complejos, como la personalización de productos, en los que hay diferentes combinaciones de productos, cantidades, ítems adicionales, costos y _stock_. Si la Assembly Option está instalada en la cuenta del _seller_, se mostrará en el _checkout_. Para que aparezca en la página del producto, debe añadirse a la cuenta del _marketplace_.

## Configurar pagos

Existen diferentes escenarios relacionados con los pagos en los marketplaces VTEX, cada uno con su propia configuración. Obtén más información sobre las opciones para Split de pagos y la configuración necesaria para que el _seller_ o el _marketplace_ procese los pagos en [Pagos en los marketplaces VTEX](https://help.vtex.com/es/tutorial/pagamentos-em-marketplaces-vtex--2kYOfWCZYweJkYl18bw9yD). 

_____________

Ahora que has configurado la plataforma VTEX para convertirla en un marketplace, debes realizar las [Acciones para la operación de marketplaces VTEX](https://help.vtex.com/es/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev).

## Sepa más

- [Aprobar anuncios recibidos](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus/)
- [Información compartida entre el marketplace y el seller en VTEX](https://help.vtex.com/es/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3)
