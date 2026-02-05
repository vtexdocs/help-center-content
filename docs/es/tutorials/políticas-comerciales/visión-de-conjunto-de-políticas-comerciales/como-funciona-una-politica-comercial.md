---
title: 'Como funciona una Política Comercial'
id: 6Xef8PZiFm40kg2STrMkMV
status: PUBLISHED
createdAt: 2021-05-25T20:05:42.155Z
updatedAt: 2025-04-09T12:57:02.151Z
publishedAt: 2025-04-09T12:57:02.151Z
firstPublishedAt: 2021-05-25T20:17:12.408Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-trade-policies-work
legacySlug: como-funciona-una-politica-comercial
locale: es
subcategoryId: 6J3wx7KM4oysymsWuUACyY
---

En VTEX, las políticas comerciales agrupan la configuración del catálogo, los precios, las promociones, la logística, la segmentación de clientes y los pagos para diferentes estrategias de venta. Es necesario [crear una nueva política comercial](/es/docs/tutorials/crear-una-politica-comercial) cada vez que una de estas configuraciones difiera entre los canales de venta en los que opera tu tienda. El tiempo de respuesta (SLA) para la creación de una política comercial es de tres días hábiles (72 horas).

Las políticas comerciales permiten diferenciar las condiciones de venta para las tiendas que operan como [marketplaces](/es/docs/tutorials/configurar-politica-comercial-para-marketplace) o sellers, tiendas con ecommerce propio, tiendas físicas o tiendas B2B, por ejemplo. 

Las políticas comerciales adaptan la navegación del sitio web de una tienda al tipo de usuario que accede a ella y segmenta las condiciones de venta para cada público. Por lo tanto, aunque diferentes canales de venta puedan compartir la misma política comercial, nunca habrá más de una política comercial operando al mismo tiempo en un canal de venta.

Vea cómo se relacionan las diferentes configuraciones de VTEX con las políticas comerciales:

- [Catálogo](#catalogo)    
- [Precios](#precios)    
- [Promociones](#promociones)    
- [Estrategia de envío](#estrategia-de-envio)    
- [Pagos](#pagos)    
- [Master data](#master-data)  
- [Gestión de la cuenta](#gestion-de-la-cuenta)  

Para [contratar políticas comerciales adicionales](/es/docs/tutorials/contratacion-de-politicas-comerciales-adicionales), póngase en contacto con nuestro equipo de Growth Operations en Soporte, seleccionando la opción **Comercial** y el tipo de solicitud `Creación de Política Comercial`.

La contratación de políticas comerciales adicionales para integración con un [conector certificado](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-certificado-partner) u otras tiendas VTEX está exenta de la cuota mensual.

> ⚠️ Si se aplica la misma política comercial a un conector certificado y a un conector asociado, no hay exención de tarifas.

## Catálogo
Al [registrar productos](/es/tutorial/cadastrando-produtos--tutorials_2567) en el catálogo, puede restringir su disponibilidad para determinadas políticas comerciales. De este modo, el catálogo se segmenta en función de las diferentes estrategias de negocio. Las estrategias pueden incluir la segmentación de productos por región, para un marketplace o para tipos específicos de clientes, como los empleados. Vea más información sobre la configuración del [catálogo](/es/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ).

## Precios
Puede establecer diferentes precios para el mismo SKU desde la política comercial. Esta aplicación de la política comercial no equivale a crear una promoción, ya que depende de la estrategia de precios de su empresa. Puede utilizarla para diferenciar los precios entre clientes B2C y B2B, o entre tiendas físicas y ventas en un marketplace. Puede aplicar [reglas de precios](/es/docs/tutorials/configurar-regla-de-precio-para-politica-comercial) y [precios fijos](/es/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) para diferenciar los precios y los markups entre productos, categorías o marcas específicas. Para más información sobre la configuración de [precios](/es/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP).

## Promociones
Puede restringir la disponibilidad de las promociones a determinadas políticas comerciales. Cuando crea una promoción exclusiva para la venta por aplicación, para la tienda física o para los marketplaces seleccionados, la política comercial es la que determina [qué productos se incluirán en la promoción](/es/tutorial/promocao-regular--tutorials_327?&utm_source=autocomplete#politica-comercial). Vea más información sobre la creación de [promociones](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/4W2AA8MWwIy80z5UCYw0f9). 

## Estrategia de envío
Puede definir [rutas logísticas](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/1xo0jmMDcnAUU5ZOavdQ7M) específicas para cada canal de venta y vincularlas a diferentes políticas comerciales. Los [muelles](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj) y los [stocks](/es/tutorial/gerenciar-estoque) establecen la conexión entre una ruta logística y la política comercial en la que se aplicará. Es a través de esta conexión que las diferentes funcionalidades del módulo de «Inventario y entrega» identifican a qué productos corresponden. Además, la zona horaria es una configuración importante de la política comercial, ya que afecta directamente el proceso de despacho de pedidos. Vea más información sobre cómo configurar su [estrategia de envío](/es/docs/tutorials/estrategia-de-envio). 

## Pagos
Cuando crea una condición de pago, puede restringir su disponibilidad en determinadas políticas comerciales mediante [condiciones especiales](/es/docs/tutorials/condiciones-especiales). Esto le permite determinar una condición de pago específica para los colaboradores, restringir el método de pago a determinados sellers o poner a disposición de los  adquirentes de su tienda medios de pago específicos.

Al crear diferentes condiciones de pago para el mismo producto, competirán entre sí y el sistema de checkout seleccionará la mejor opción para el público en cuestión. Si no establece ninguna restricción, la política comercial se aplicará a todos los canales de venta. Vea más información sobre la configuración de [pagos](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG). 

## Master data
Puede limitar el acceso a la tienda a públicos específicos, como en un sitio B2B que solo permite la navegación de empresas registradas o cuando el sitio tiene un entorno para clientes exclusivos. Puede crear esta configuración a través de un [clúster de clientes en el Master Data](/es/tutorial/como-criar-um-cluster-de-clientes) y la política de comercial que la tienda utiliza. Vea más información sobre la configuración del [Master Data](/es/docs/tutorials/master-data). 

## Gestión de la cuenta

> ⚠️ Para los clientes que tienen muchas subcuentas o con operaciones en tiendas físicas que permiten la recogida en la tienda o con el envío desde la tienda, la creación de múltiples políticas comerciales no es la mejor solución. Sugerimos abrir nuevos [nombres de tienda](/es/tutorial/o-que-e-store-name) para cada una de las tiendas que operan dentro de una [cuenta](/es/tutorial/o-que-e-account-name).

Demasiadas políticas comerciales en un entorno VTEX hace que el proceso de indexación de los productos en la vitrina y la simulación del envío en el checkout sean más lentos, lo que puede afectar la conversión de los pedidos. Al segmentar el catálogo con múltiples políticas comerciales en lugar de crear nombres de tiendas con su propio stock, la tienda también puede perder oportunidades de venta y mejores condiciones de entrega al restringir la oferta de productos. Vea más información sobre [cómo crear un nombre de tienda](/es/tutorial/como-criar-um-store-name).

## Más información

- [Políticas comerciales para marketplaces](/es/docs/tutorials/configurar-politica-comercial-para-marketplace)  
- [Crear una política comercial](/es/docs/tutorials/crear-una-politica-comercial)

