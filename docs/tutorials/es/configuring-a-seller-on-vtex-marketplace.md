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
slug: como-configurar-el-seller-para-vender-en-un-marketplace-vtex
locale: es
legacySlug: como-configurar-el-seller-para-vender-en-un-marketplace-vtex
subcategory: 5tlIjp0ZkAU4EIk4OgyEmm
---

Dada su arquitectura, las tiendas VTEX pueden actuar indistintamente como _marketplaces_ o _sellers_. El _marketplace_ es el entorno en el que se vende el producto, y el _seller_ es el dueño del producto y el responsable del envío del pedido.

Este artículo explica cómo configurar tu tienda para convertirse en un _seller_ VTEX y comenzar a vender en un _marketplace_ VTEX. Para ello, debes hacer lo siguiente:

- [Definir la política comercial](#definir-la-politica-comercial)
- [Crear el ID del afiliado](#crear-el-id-del-afiliado)
- [Reindexar la base](#reindexar-la-base)

Para saber qué datos deben intercambiar los _sellers_ y los _marketplaces_, consulta el artículo [Información compartida](https://help.vtex.com/es/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3) entre el _marketplace_ y el _seller en VTEX. Si tu tienda quiere operar como _marketplace_, consulta el artículo [Configurar marketplaces VTEX](https://help.vtex.com/es/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb).

>ℹ️ Para comenzar a vender tus productos en <i>marketplaces</i> o para encontrar nuevos <i>partners</i> comerciales que vendan en tu <i>marketplace</i>, usa [Marketplaces e integraciones](https://help.vtex.com/es/tutorial/encontre-marketplaces-e-sellers-no-ecossistema-vtex--2bzC7tXlVgLEEjxo4ixcAM), la funcionalidad que facilita la identificación y el contacto entre los <i>marketplaces</i> y <i>sellers</i> en el ecosistema VTEX.

## Definir la política comercial

En VTEX, la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) agrupa configuraciones de catálogo, precios, promociones, logística, segmentación de clientes y pagos en un canal de venta. El _seller_ puede integrarse al _marketplace_ utilizando la política comercial predefinida de su tienda o también puede definir configuraciones específicas para la integración mediante la configuración de una [política comercial para el marketplace](https://help.vtex.com/es/tutorial/configurando-a-politica-comercial-para-marketplace/).

>ℹ️ Se puede usar una misma política comercial para integrarla con varios <i>marketplaces</i>. La [contratación de una política comercial adicional](https://help.vtex.com/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) para integrarse con un [conector nativo](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex), un conector certificado (partner) u otras tiendas VTEX es gratuita.

No es necesario crear una política comercial específica para un _marketplace_ solo para configurar promociones, ya que se pueden segmentar las promociones por [afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0). Obtén más información en [Configurar promoción para marketplace](https://help.vtex.com/es/tutorial/configurar-promocao-para-marketplace--tutorials_406).

El surtido de productos enviados al _marketplace_ se debe gestionar a través de la política comercial. No recomendamos que se gestione a través de [colecciones](https://help.vtex.com/es/tutorial/criando-colecao-de-produtos--tutorials_244) porque esto lo hace más complejo y difícil de operar.

## Crear el ID del afiliado

En VTEX, el [afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) es el código que el _seller_ VTEX crea para identificar al _marketplace_ en el que venderá sus productos. Cada _marketplace_ debe corresponder a un único afiliado. Será a través del afiliado que el _marketplace_ recibirá notificaciones sobre pedidos, cambios en la información de un SKU y modificaciones de precios y _stock_, por ejemplo.

>ℹ️ La integración con [conectores nativos](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex) crea el código del afiliado automáticamente. No obstante, para que el <i>seller</i> VTEX se integre con un <i>marketplace</i> VTEX o un <i>marketplace</i> externo, el <i>seller</i> debe crear el ID de afiliado de forma manual.

El _seller_ debe seguir los pasos que se indican en el artículo [Configurar afiliado](https://help.vtex.com/es/tutorial/como-configurar-afiliado--tutorials_187) y, una vez que haya creado el código identificador, se lo debe informar al _marketplace_. Luego de esto, el _marketplace_ VTEX [agregará al seller](https://help.vtex.com/es/tutorial/configuring-the-seller--tutorials_392) y lo asociará a una política comercial.

## Reindexar la base

Una vez que el _seller_ y el _marketplace_ están integrados, el envío de productos al _marketplace_ no es automático sino que será necesario que el _seller_ [reindexe la base](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-da-indexacao). Este proceso prepara los datos de los SKU y de los productos y envía al _marketplace_ la información general sobre el catálogo, los precios y el _stock_. 

>ℹ️ Solo el [usuario titular (owner)](https://help.vtex.com/es/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA) tiene permiso para reindexar la base de una tienda VTEX. Durante el periodo de reindexación, que es variable, los productos ingresan en una fila para que se actualicen los datos, pero siguen disponibles para la venta en el sitio web de la tienda.

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

Después que el _seller_ envía sus productos, el _marketplace_ debe [mapear las categorías, marcas y especificaciones](https://help.vtex.com/es/tutorial/mapeando-categorias-e-marcas-para-marketplace--tutorials_1521) de los productos del _seller_ de manera tal que se genere una correspondencia entre su propia estructura de catálogo y el catálogo del _seller_.

Tras el mapeo, el _marketplace_ debe [catalogar los SKU](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus/) del _seller_. Esta es la última etapa para que los productos del _seller_ queden a disposición de los consumidores en el _marketplace_.

## Sepa más

- [Estrategias de marketplace en VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
- [Elegir entre cuenta estándar, cuenta franquicia o Seller Portal](https://help.vtex.com/es/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78)
- [Información compartida entre el marketplace y el seller en VTEX](https://help.vtex.com/es/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3)
- [Configurar marketplaces VTEX](https://help.vtex.com/es/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
