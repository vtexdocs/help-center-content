---
title: 'Acciones para la operación de marketplaces VTEX'
id: 2SdIflvwywiOqCpczKCfev
status: PUBLISHED
createdAt: 2022-01-26T23:13:10.828Z
updatedAt: 2023-04-17T22:08:54.822Z
publishedAt: 2023-04-17T22:08:54.822Z
firstPublishedAt: 2022-01-26T23:23:49.548Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: acciones-para-la-operacion-de-marketplaces-vtex
locale: es
legacySlug: acciones-para-la-operacion-de-marketplaces-vtex
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

La arquitectura de VTEX permite que las tiendas alojadas en la plataforma puedan anunciar productos de otras tiendas, sean o no tiendas VTEX. Cuando una tienda VTEX comienza a vender productos de otros s_ellers_, se convierte en un _marketplace_ VTEX. Aprende más sobre las posibilidades de este modelo de negocio en [Estrategias de marketplace en VTEX.](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)

Después de [configurar tu entorno VTEX](https://help.vtex.com/es/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb) para que se convierta en un _marketplace_, deberás realizar las operaciones de rutina necesarias para el funcionamiento de un _marketplace_. Te sugerimos que incluyas en la rutina de tu equipo las siguientes herramientas, desarrolladas por VTEX. Para cada acción de tu operación, te indicaremos qué funcionalidades de VTEX deberás utilizar:

- [Ir a la búsqueda de sellers](#ir-a-la-busqueda-de-sellers)  
- [Analizar los resultados de los sellers](#analizar-los-resultados-de-los-sellers)  
- [Configurar la curación de anuncios](#configurar-la-curacion-de-anuncios)  
- [Catalogar anuncios](#catalogar-anuncios)  
- [Crear promociones](#crear-promociones)  
- [Gestionar tu storefront](#gestionar-tu-storefront)  
- [Gestionar pedidos](#gestionar-pedidos)  

## Ir a la búsqueda de sellers

Al planificar tu operación como _marketplace_ VTEX, incluye un periodo para identificar y reclutar una determinada cantidad de [_sellers_](https://help.vtex.com/es/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) que puedan cubrir la gama de productos deseada, la disponibilidad de _stock_ y el área de cobertura logística. Además, es importante evolucionar y ampliar continuamente tu cartera de _sellers_ para garantizar que haya siempre un flujo saludable de nuevos _sellers_ que complementen tu surtido de productos y servicios.

Si quieres encontrar nuevos _sellers_ para vender en tu _marketplace_, utiliza __Encontrar sellers__. Esta herramienta facilita la identificación y el contacto entre _marketplaces_ y _sellers_ que operan en el ecosistema VTEX. Para acceder a esta página, entra en tu Admin VTEX y dirígete a **Marketplace > Sellers > Encontrar sellers.**

Para agregar nuevos _sellers_ a tu _marketplace_ desde el Admin, sigue las instrucciones descritas en el artículo [Agregar seller](https://help.vtex.com/es/tutorial/configurando-seller/). También puedes realizar este proceso a través de la integración de API. Para ello, sigue las instrucciones de [External Seller Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide). 

## Analizar los resultados de los sellers 
La página de [Desempeño de ventas](https://help.vtex.com/es/tutorial/sales-performance--3DMube0sEsK9vPcRYGas72) en tu Admin VTEX es un panel diseñado para el comercio unificado, que ayuda a las tiendas a hacer crecer su negocio y a tomar decisiones más precisas. El panel facilita el proceso de "cultivo" de los _sellers_, es decir, permite a los _marketplaces_ analizar los datos de los pedidos de su tienda y de sus _sellers_ para monitorear la salud del negocio, comprender las razones de las variaciones en el volumen de ventas o en la tasa de conversión y encontrar oportunidades para mejorar los resultados de _sellers_ específicos. 

Para acceder a la página, entra en tu Admin VTEX y dirígete a **Dashboards** > **Desempeño de ventas**.

## Configurar la curación de anuncios

El [Seller Portal](https://help.vtex.com/es/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK) es una edición de la plataforma VTEX destinada a que los _sellers_ se conecten y vendan sus productos en los _marketplaces_. La funcionalidad de [Productos Compartidos](https://help.vtex.com/es/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) del Seller Portal permite que los _marketplaces_ exporten su propia arquitectura de catálogo para que los _sellers_ puedan enviar ofertas para los productos que ya están presentes en el _marketplace_.

Esta herramienta es una opción recomendada para los _marketplaces_ que deseen tener más control sobre la curación de los productos que ofrecen.

>ℹ️ Para activar el Seller Portal para sus sellers, el marketplace debe solicitar esta funcionalidad poniéndose en contacto con el CSM de su cuenta VTEX.

## Catalogar anuncios

Un producto de un_ seller_ que haya sido enviado al _marketplace_ con la información de precio y _stock_ configurada se convierte en un anuncio. Sin embargo, antes de que el anuncio esté disponible para la venta, el _marketplace_ debe revisarlo y aprobarlo siguiendo un proceso llamado catalogación de anuncios. La catalogación permite crear nuevos productos y asociar anuncios a SKU o productos ya existentes para ponerlos a la venta.

El proceso de catalogación se realiza en la página de [SKU recibidos](https://help.vtex.com/es/tutorial/sugerindo-e-aprovando-skus/) en el menú **MARKETPLACE > Sellers** de tu Admin VTEX o a través de llamadas a la API de [Match Received SKUs](https://developers.vtex.com/vtex-rest-api/reference/match). 

>ℹ️ Antes de aprobar un anuncio, es importante asegurarse de que la información de producto enviada por el seller coincida con tu estrategia comercial. A la hora de catalogar anuncios, ten en cuenta la calidad de la información enviada por el seller, como el precio, la descripción del producto y la imagen.

[VTEX Matcher](https://help.vtex.com/es/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) es la herramienta utilizada por los _marketplaces_ para evaluar los anuncios enviados por los _sellers_ y acelerar el proceso de catalogación. Es posible configurar VTEX Matcher para que funcione con reglas diferentes a la configuración _por defecto_ a través de la [API de Aprobación automática](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).

## Crear promociones

Los _marketplaces_ VTEX pueden crear una serie de reglas para las promociones y determinar, según el contexto de la compra, si se aplicará un descuento y cómo. Es posible crear promociones de envío gratuito, precio nominal y precio porcentual. Las promociones pueden crearse para productos, colecciones o categorías. Obtén más información en [Configurar promoción para marketplaces](https://help.vtex.com/es/tutorial/configurar-promocao-para-marketplace--tutorials_406).

## Gestionar tu storefront

La gestión de los contenidos que aparecen en tu _storefront_ te permite mantener una línea editorial cohesionada para tu _marketplace_. Te sugerimos que establezcas directrices claras sobre el tipo de contenidos que se aprueban y los que no forman parte de la estrategia de contenidos de tu _marketplace_. 

Puedes configurar el [CMS](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z) de tu _marketplace_ según el contenido que quieras promocionar para que la experiencia de compra en tu _marketplace_ refleje la identidad de tu marca. En el caso de tiendas alojadas en VTEX IO, puedes [personalizar CSS handles](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) para cambiar el aspecto del _storefront_ de tu _marketplace_.

## Gestionar pedidos
La gestión de pedidos del _marketplace_ está directamente relacionada con la satisfacción de los consumidores. Un factor clave para una evaluación positiva de tu _marketplace_ es la definición y el seguimiento del SLA (del inglés _Service Level Agreement_, Acuerdo de Nivel de Servicio en español) entre _sellers_ y _marketplaces_. El SLA es el acuerdo de servicio firmado entre el _seller_ y el _marketplace_ e incluye detalles sobre las políticas de entrega, el servicio de atención al cliente y los cambios y devoluciones, por ejemplo. 

En la plataforma VTEX, la sección de **Gestión de pedidos** permite que _sellers_ y _marketplaces_ sigan el [Flujo de pedidos](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8). Al consultar los pedidos, es posible diferenciar entre [pedidos del marketplace y pedidos de sellers](https://help.vtex.com/es/tutorial/o-que-sao-pedidos-com-origem-marketplace-e-origem-fulfillment--6eVYrmUAwMOeKICU2KuG06). 

Para los _[marketplaces que procesen pagos](https://help.vtex.com/es/tutorial/pagamentos-em-marketplaces-vtex--2kYOfWCZYweJkYl18bw9yD)_, es necesario seguir el [Flujo de transacciones en Pagos](https://help.vtex.com/es/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ). En cuanto a los _sellers_, son responsables del [fulfillment](https://help.vtex.com/es/tutorial/o-que-sao-pedidos-com-origem-marketplace-e-origem-fulfillment--6eVYrmUAwMOeKICU2KuG06) del pedido, por lo que deben [introducir la factura para facturarlo.](https://help.vtex.com/es/tutorial/como-inserir-a-nota-fiscal)

