---
title: 'Modelos de campaña y roles en VTEX Ads'
createdAt: 2026-10-09T00:00:00.000Z
updatedAt: 2026-10-09T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-campaign-models-and-roles
locale: es
---

Las campañas de **[VTEX Ads](/es/docs/tracks/retail-media)** se diferencian no solo por el tipo de anuncio, como **productos patrocinados**, **banners** y **marcas patrocinadas**, sino también por quién participa en ellas. El tipo de anuncio define el formato que se muestra al usuario y se describe en el artículo [Retail Media](/es/docs/tracks/retail-media). El modelo de campaña define la relación entre las partes involucradas: quién crea y financia la campaña, de quién es el inventario que muestra el anuncio, quién aprueba las creatividades, quién recibe el tráfico y quién sigue qué métricas.

Este artículo presenta los tres modelos de campaña de **VTEX Ads** (campaña 1:1, campaña Network y campaña offsite), define los roles específicos de cada modelo y reúne, en una matriz, lo que hace cada parte en cada uno de ellos.

## Roles base

Los roles de anunciante, publicador y agencia de marketing son comunes a todas las campañas de **VTEX Ads** y se describen en [Roles en retail media](/es/docs/tracks/roles-en-retail-media). En cualquier modelo de campaña, la agencia de marketing actúa en nombre del anunciante o del publicador y no tiene un rol propio.

Los modelos Network y offsite añaden roles que no existen en la campaña 1:1:

- **Red:** cuenta de publicador de **VTEX Ads** que reúne varios publicadores. Una campaña publicada en una red es una campaña Network.
- **Sub-publisher:** publicador que forma parte de una red. En una campaña Network, el anuncio se muestra en las tiendas de los sub-publishers.
- **Publicador de medios:** parte que muestra el anuncio de una campaña offsite fuera de la tienda que recibe el tráfico. También se denomina Publisher Offsite. En **VTEX Ads**, este lado de la campaña aparece para el cliente como **Offsite VTEX Ads**.
- **Retailer de destino:** tienda que recibe el tráfico de una campaña offsite y donde ocurre la compra. Es una cuenta de publicador de **VTEX Ads** que aceptó participar en campañas offsite en la página **Retail de destino**. Consulta [Retail de destino](/es/docs/tutorials/retail-de-destino).

## Campaña 1:1

La campaña 1:1 reúne un anunciante y un publicador. El anunciante crea la campaña en su propia cuenta, financia la publicación y define la URL de destino de los anuncios. El publicador aprueba las creatividades y muestra los anuncios en su propio inventario, como el sitio web, la app o la tienda física.

Como el anuncio se muestra en la tienda del publicador, es esa tienda la que recibe el tráfico y registra la conversión. Cada parte sigue su lado de los resultados: el anunciante ve el rendimiento y el costo de la campaña, y el publicador ve los ingresos generados por los anuncios mostrados en su tienda. Consulta [Métricas y atribución de VTEX Ads](/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads).

## Campaña Network

La campaña Network reúne un anunciante, una red y los sub-publishers que forman parte de ella. El anunciante crea la campaña en su propia cuenta y financia la publicación, como en la campaña 1:1. La diferencia está del lado del publicador: en lugar de un único inventario, el anuncio puede mostrarse en las tiendas de varios sub-publishers.

De forma predeterminada, la campaña Network se publica en toda la red. La red puede habilitar la selección de sub-publishers específicos. En ese caso, el anunciante selecciona los sub-publishers al crear la campaña, y el anuncio se muestra solo en las tiendas seleccionadas.

La red aprueba las creatividades de la campaña Network. Después de la aprobación, los anuncios se muestran en las tiendas de los sub-publishers incluidos en la campaña, y cada una de esas tiendas recibe el tráfico y registra las conversiones de los anuncios mostrados en ella.

## Campaña offsite

La campaña offsite reúne un anunciante, un publicador de medios y un retailer de destino. El anuncio se muestra fuera de la tienda que recibe el tráfico, en el canal del publicador de medios, y el clic lleva al usuario hasta el retailer de destino, donde ocurre la compra.

En este modelo, el anunciante crea la campaña en la cuenta del anunciante, define el publicador de medios y el retailer de destino y aprueba la campaña. Actualmente, este proceso se realiza con ayuda del equipo de **VTEX Ads**.

Cada parte sigue una porción distinta de los resultados. El anunciante ve las métricas de entrega y de conversión agregadas por campaña, sin detalle de qué publicador de medios mostró el anuncio. El retailer de destino ve qué anunciantes envían tráfico a la tienda y cuántas campañas activas tiene cada uno, sin métricas de rendimiento. Para entender el recorrido desde el clic hasta el pedido atribuido y lo que cada parte debe garantizar, consulta [Campañas offsite en VTEX Ads](/es/docs/tutorials/campanas-offsite-en-vtex-ads).

## Matriz de roles por modelo de campaña

La siguiente tabla resume quién es responsable de cada etapa en cada modelo de campaña:

| Responsabilidad | Campaña 1:1 | Campaña Network | Campaña offsite |
| --- | --- | --- | --- |
| Crear la campaña | Anunciante | Anunciante | Equipo de **VTEX Ads**, en la cuenta del anunciante |
| Financiar la campaña | Anunciante | Anunciante | Anunciante |
| Definir dónde se muestran los medios | Publicador, en su propio inventario | Red, en toda la red de forma predeterminada. Cuando la red habilita la selección de sub-publishers, el anunciante selecciona sub-publishers específicos. | Equipo de **VTEX Ads**, al definir el publicador de medios de la campaña |
| Aprobar creatividades | Publicador | Red | Equipo de **VTEX Ads** |
| Definir la URL de destino | Anunciante | Anunciante | Equipo de **VTEX Ads**, al definir el retailer de destino de la campaña |
| Recibir el tráfico | Tienda del publicador | Tienda del sub-publisher en la que se mostró el anuncio | Retailer de destino |
| Registrar la conversión | Tienda del publicador | Tienda del sub-publisher en la que se mostró el anuncio | Retailer de destino, mediante el script web o el SDK móvil instalado |
| Seguir las métricas | Anunciante y publicador, cada uno con la visión de su lado | Anunciante y red, cada uno con la visión de su lado | Anunciante, con métricas agregadas por campaña. Retailer de destino, con la lista de anunciantes y de campañas activas |

## Saber más

- [Campañas offsite en VTEX Ads](/es/docs/tutorials/campanas-offsite-en-vtex-ads)
- [Retail de destino](/es/docs/tutorials/retail-de-destino)
- [Roles en retail media](/es/docs/tracks/roles-en-retail-media)
- [Glosario de Retail Media](/es/docs/tracks/glosario-de-retail-media)
- [Métricas y atribución de VTEX Ads](/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads)
- [Retail Media](/es/docs/tracks/retail-media)
