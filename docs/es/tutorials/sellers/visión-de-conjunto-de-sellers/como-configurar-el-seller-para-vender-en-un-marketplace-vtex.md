---
title: 'Cómo configurar el seller para vender en un marketplace VTEX'
id: 6g045OkRSjNpqhkExbQRlP
status: PUBLISHED
createdAt: 2022-05-11T16:49:11.747Z
updatedAt: 2023-04-17T21:46:38.715Z
publishedAt: 2023-04-17T21:46:38.715Z
firstPublishedAt: 2022-05-11T18:35:14.080Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: configuring-a-seller-on-vtex-marketplace
legacySlug: como-configurar-el-seller-para-vender-en-un-marketplace-vtex
locale: es
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

Dada su arquitectura, las tiendas VTEX pueden actuar indistintamente como _marketplaces_ o _sellers_. El _marketplace_ es el entorno en el que se vende el producto, y el _seller_ es el dueño del producto y el responsable del envío del pedido.

Este artículo explica cómo configurar tu tienda para convertirse en un _seller_ VTEX y comenzar a vender en un _marketplace_ VTEX. Para ello, debes hacer lo siguiente:

- [Definir la política comercial](#definir-la-politica-comercial)
- [Crear el ID del afiliado](#crear-el-id-del-afiliado)
- [Reindexar la base](#reindexar-la-base)

Para saber qué datos deben intercambiar los _sellers_ y los _marketplaces_, consulta el artículo [Información compartida](/es/docs/tutorials/informacion-compartida-entre-el-marketplace-y-el-seller-en-vtex) entre el _marketplace_ y el _seller en VTEX. Si tu tienda quiere operar como _marketplace_, consulta el artículo [Configurar marketplaces VTEX](/es/docs/tutorials/configurar-marketplaces-vtex).

> ℹ️ Para comenzar a vender tus productos en *marketplaces* o para encontrar nuevos *partners* comerciales que vendan en tu *marketplace*, usa [Marketplaces e integraciones](/es/docs/tutorials/marketplaces-e-integraciones), la funcionalidad que facilita la identificación y el contacto entre los *marketplaces* y *sellers* en el ecosistema VTEX.

## Definir la política comercial

En VTEX, la [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial) agrupa configuraciones de catálogo, precios, promociones, logística, segmentación de clientes y pagos en un canal de venta. El _seller_ puede integrarse al _marketplace_ utilizando la política comercial predefinida de su tienda o también puede definir configuraciones específicas para la integración mediante la configuración de una [política comercial para el marketplace](/es/tutorial/configurando-a-politica-comercial-para-marketplace/).

> ℹ️ Se puede usar una misma política comercial para integrarla con varios *marketplaces*. La [contratación de una política comercial adicional](/es/docs/tutorials/contratacion-de-politicas-comerciales-adicionales) para integrarse con un [conector nativo](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#integrado-con-un-conector-nativo-vtex), un conector certificado (partner) u otras tiendas VTEX es gratuita.

No es necesario crear una política comercial específica para un _marketplace_ solo para configurar promociones, ya que se pueden segmentar las promociones por [afiliado](/es/docs/tutorials/que-es-afiliado). Obtén más información en [Configurar promoción para marketplace](/es/docs/tutorials/configurar-promocion-para-marketplace).

El surtido de productos enviados al _marketplace_ se debe gestionar a través de la política comercial. No recomendamos que se gestione a través de [colecciones](/es/docs/tutorials/creando-colecciones-de-productos) porque esto lo hace más complejo y difícil de operar.

## Crear el ID del afiliado

En VTEX, el [afiliado](/es/docs/tutorials/que-es-afiliado) es el código que el _seller_ VTEX crea para identificar al _marketplace_ en el que venderá sus productos. Cada _marketplace_ debe corresponder a un único afiliado. Será a través del afiliado que el _marketplace_ recibirá notificaciones sobre pedidos, cambios en la información de un SKU y modificaciones de precios y _stock_, por ejemplo.

> ℹ️ La integración con [conectores nativos](/es/docs/tutorials/estrategias-de-marketplace-en-vtex#integrado-con-un-conector-nativo-vtex) crea el código del afiliado automáticamente. No obstante, para que el *seller* VTEX se integre con un *marketplace* VTEX o un *marketplace* externo, el *seller* debe crear el ID de afiliado de forma manual.

El _seller_ debe seguir los pasos que se indican en el artículo [Configurar afiliado](/es/docs/tutorials/como-configurar-afiliado) y, una vez que haya creado el código identificador, se lo debe informar al _marketplace_. Luego de esto, el _marketplace_ VTEX [agregará al seller](/es/docs/tutorials/agregar-seller) y lo asociará a una política comercial.

## Reindexar la base

Una vez que el _seller_ y el _marketplace_ están integrados, el envío de productos al _marketplace_ no es automático sino que será necesario que el _seller_ [reindexe la base](/es/tutorial/entendendo-o-funcionamento-da-indexacao). Este proceso prepara los datos de los SKU y de los productos y envía al _marketplace_ la información general sobre el catálogo, los precios y el _stock_. 

> ℹ️ Solo el [usuario titular (owner)](/es/docs/tracks/que-es-el-usuario-master) tiene permiso para reindexar la base de una tienda VTEX. Durante el periodo de reindexación, que es variable, los productos ingresan en una fila para que se actualicen los datos, pero siguen disponibles para la venta en el sitio web de la tienda.

Para reindexar la base, copia en tu navegador la dirección a continuación y reemplaza «{nomedaloja}» con el nombre de tu tienda:

`{nomedaloja}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`

Al acceder a la dirección, haz clic en el botón «Reindexar base». Puedes seguir el proceso desde el Admin VTEX, en **Catálogo > Informes**.

### Verificar indexación

Es posible verificar si un SKU específico se indexó correctamente a la política comercial de la integración. Para hacerlo, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKU**.
3. Haz clic en la <i class="fas fa-angle-down"></i> flecha hacia abajo, al lado del botón **MODIFICAR**.
4. Selecciona la opción `Indexed info`.
5. Verifica si el número de la política comercial que se usó en la integración con el _marketplace_ aparece en la información del SKU.

## Acciones del marketplace

Después que el _seller_ envía sus productos, el _marketplace_ debe [mapear las categorías, marcas y especificaciones](/es/docs/tutorials/mapeo-de-categorias-y-marcas-para-marketplace) de los productos del _seller_ de manera tal que se genere una correspondencia entre su propia estructura de catálogo y el catálogo del _seller_.

Tras el mapeo, el _marketplace_ debe [catalogar los SKU](/es/tutorial/sugerindo-e-aprovando-skus/) del _seller_. Esta es la última etapa para que los productos del _seller_ queden a disposición de los consumidores en el _marketplace_.

## Sepa más

- [Estrategias de marketplace en VTEX](/es/docs/tutorials/estrategias-de-marketplace-en-vtex)
- [Elegir entre cuenta estándar, cuenta franquicia o Seller Portal](/es/docs/tutorials/elegir-entre-cuenta-estandar-cuenta-franquicia-o-seller-portal)
- [Información compartida entre el marketplace y el seller en VTEX](/es/docs/tutorials/informacion-compartida-entre-el-marketplace-y-el-seller-en-vtex)
- [Configurar marketplaces VTEX](/es/docs/tutorials/configurar-marketplaces-vtex)
