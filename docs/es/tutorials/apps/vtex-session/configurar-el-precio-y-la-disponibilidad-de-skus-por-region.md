---
title: 'Configurar el precio y la disponibilidad de SKUs por Region'
id: 12ne58BmvYsYuGsimmugoc
status: PUBLISHED
createdAt: 2018-09-10T15:30:53.237Z
updatedAt: 2023-04-27T23:49:56.658Z
publishedAt: 2023-04-27T23:49:56.658Z
firstPublishedAt: 2018-09-10T22:03:44.263Z
contentType: tutorial
productTeam: Identity
author: authors_59
slugEN: setting-up-price-and-availability-of-skus-by-region
legacySlug:  configurar-el-precio-y-la-disponibilidad-de-skus-por-region
locale: es
subcategoryId: dajK0sARX2c0MISKKoGoc
---

La función __Región__ permite que los artículos de una tienda (SKU) se muestren según la región de ubicación del cliente. Esto ocurre al registrar diferentes precios y disponibilidad según las regiones atendidas por los __Sellers White Label__.

Para regionalizar los precios y la disponibilidad de SKU, debe:

1. Configure la función Región, conforme descrito en la guía [Enable the Region for SKUs](https://developers.vtex.com/docs/guides/enable-the-region-for-skus).
2. [Sellers White Label](/es/faq/que-son-cuenta-franquicia-y-seller-white-label) realicen entregas de pedidos hechos en su tienda para determinados rangos de Códigos Postales.
3. La sesión del usuario navegando por la tienda contiene información sobre su código postal y país de origen.

> ℹ️ Para utilizar esta función, la tienda debe tener el sistema ([VTEX Session](/es/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ#)). VTEX Session es nativo de todas las tiendas y usted puede confirmar su instalación por la presencia de las cookies <code>vtex_session<code> y <code>vtex_segment<code> al navegar por la tienda.

> ⚠️ Para [Multilevel Omnichannel Inventory](/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4#), un marketplace (nivel 1) no puede configurar la exhibición de los precios y la disponibilidad de los productos para los sellers white label (nivel 3) con la funcionalidad de regionalización.

> ℹ️ La funcionalidad **Region** funciona tanto para las tiendas CMS Portal (Legado) como para las tiendas desarrolladas con [VTEX IO](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC), pero la funcionalidad [VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) solo es válida para las tiendas VTEX IO. Como resultado, las tiendas con CMS Portal (Legado) tienen una limitación en la indexación de datos regionalizados y no es posible ordenar correctamente los sellers que atienden la ventana de un RegionId en función de la disponibilidad de ítems.

## Configurar la entrega en la Cuenta Franquicia/Seller White Label

El precio y la disponibilidad de los SKU en cada región se mostrarán en la tienda principal de acuerdo con su configuración de entrega (se indican los rangos de códigos postales). La información de los códigos postales se registra con los transportistas de la [Cuenta de Franquicia](/es/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl#) que actúan como la Seller White Label de la tienda.

Para configurar la entrega, siga los pasos a continuación:

1. Ingrese al Admin de la Cuenta Franquicia que actúa como Seller White Label de su tienda. 
2. En __Envío__, haga click en __Estrategia de envío__.
3. En __Políticas de envío__, haga clic en el botón `Crear Política de Envío` para registrar una [transportadora](/es/tutorial/gerenciar-transportadora). Los Códigos Postales atendidos por esta transportadora se llevarán en consideración para exhibir el precio y la disponibilidad por región en la tienda principal 
5. Registre un [muelle](/es/tutorial/how-to-register-a-dock#).
6. Registre un [inventario](/es/tutorial/gerenciar-estoque--tutorials_137#).
7. [Agregue stock a los SKUs](/es/tutorial/managing-stock-items) que se entregarán por la ruta configurada.

> ℹ️ Para que un SKU aparezca como disponible para la venta, es necesario que tenga stock y precio asociados a este.
