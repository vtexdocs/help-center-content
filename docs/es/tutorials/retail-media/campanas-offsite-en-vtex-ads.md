---
title: 'Campañas offsite en VTEX Ads'
createdAt: 2026-10-09T00:00:00.000Z
updatedAt: 2026-10-09T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-ads-offsite-campaigns
locale: es
---

**[VTEX Ads](/es/docs/tracks/retail-media)** publica campañas dentro y fuera de los canales de retail. En una campaña onsite, el anuncio aparece en los canales de la propia tienda, como el sitio web, la app o la tienda física. En una campaña offsite, el anuncio aparece fuera de la tienda que recibe el tráfico, y el clic lleva al usuario hasta ella. Las definiciones generales de [medios onsite](/es/docs/tracks/glosario-de-retail-media) y [medios offsite](/es/docs/tracks/glosario-de-retail-media) están en el **Glosario de Retail Media**.

Este artículo explica qué distingue a una campaña offsite, quién participa en ella, el recorrido que sigue el usuario desde el clic en el anuncio hasta el pedido atribuido a la campaña y qué debe garantizar cada parte para que ese recorrido funcione. No describe cómo crear una campaña offsite, porque la crea el equipo de **VTEX Ads**, como se explica en [Cómo se crea la campaña](#como-se-crea-la-campana).

## Cómo funciona el recorrido

Una campaña offsite involucra, además del anunciante, a dos partes: el publicador de medios, que muestra el anuncio, y el retailer de destino, que recibe al usuario y donde ocurre la compra. Por eso, la atribución de la venta depende de que **VTEX Ads** registre la llegada del usuario al retailer de destino. El recorrido sigue estas etapas:

1. **Exhibición:** el anuncio se muestra fuera del retailer de destino, en el canal del publicador de medios.
2. **Clic:** el usuario hace clic en el anuncio. El enlace de destino lleva los parámetros de **VTEX Ads** que identifican la campaña y el clic.
3. **Llegada:** el usuario llega al retailer de destino, en el sitio web o en la app. El script web o el SDK móvil instalado por el retailer registra esa llegada y envía la señal a **VTEX Ads**.
4. **Asociación:** **VTEX Ads** asocia la llegada registrada con el clic en el anuncio.
5. **Atribución:** si el usuario realiza un pedido dentro de la ventana de atribución del formato, la conversión se atribuye a la campaña offsite.

> ℹ️ La ventana de atribución aplicada a la conversión es la del tipo de anuncio publicado, como en las demás campañas de **VTEX Ads**. Consulta [Métricas y atribución de VTEX Ads](/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads).

En los recorridos que terminan en la app del retailer de destino, no existe un clic dentro de la app. El enlace del anuncio abre la app con los parámetros de la campaña, y el SDK móvil registra esa apertura como el clic offsite. La compra realizada en la app completa la conversión.

## Quién participa

Una campaña offsite reúne tres partes, cada una con un rol distinto:

- **Anunciante:** marca o empresa que financia la campaña y cuyos productos se anuncian. El anunciante no crea ni aprueba la campaña offsite. Consulta [Cómo se crea la campaña](#como-se-crea-la-campana).
- **Publicador de medios:** parte que muestra el anuncio fuera del retailer de destino. También se denomina Publisher Offsite. Suele ser un canal de medios digitales tradicional, pero también puede ser un partner de otro tipo que muestre el anuncio. En **VTEX Ads**, este lado de la campaña aparece para el cliente como **Offsite VTEX Ads**.
- **Retailer de destino:** tienda que recibe el tráfico del anuncio y donde ocurre la compra. Es una cuenta de publicador de **VTEX Ads** que aceptó participar en campañas offsite en la página **Retail de destino** e instaló la captura de datos en las superficies que reciben el tráfico. Consulta [Retail de destino](/es/docs/tutorials/retail-de-destino).

> ℹ️ Para entender los roles de anunciante, publicador y agencia de marketing en retail media, consulta [Roles en retail media](/es/docs/tracks/roles-en-retail-media).

## Qué debe garantizar cada parte

La atribución de una venta a la campaña offsite solo ocurre cuando se cumplen todas las precondiciones siguientes. Cada una depende de una parte distinta:

| Precondición | Responsable | Saber más |
| --- | --- | --- |
| El anuncio se publica con los parámetros de **VTEX Ads** preservados, y el enlace de destino no se acorta ni se modifica. | Publicador de medios | - |
| La tienda está disponible como destino de campañas offsite, con el botón de alternancia `Disponible para nuevas campañas` activado en la página **Retail de destino**. | Retailer de destino | [Retail de destino](/es/docs/tutorials/retail-de-destino) |
| El script web está instalado en el storefront, el SDK móvil está instalado en la app, o ambos, y la página o la app de destino se carga para el usuario. | Equipo del retailer de destino | [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script) y [Installing Activity Flow in mobile apps](https://developers.vtex.com/docs/guides/installing-activity-flow-in-mobile-apps) |
| La campaña está configurada con el retailer de destino correcto. | Equipo de **VTEX Ads** | - |

> ⚠️ Participar como destino y tener la captura de datos en funcionamiento son estados independientes. Activar la participación en la página **Retail de destino** no instala ni valida la captura. Si el script web o el SDK móvil no está implementado, **VTEX Ads** no registra la llegada del usuario y la venta no se atribuye a la campaña.

## Cómo se crea la campaña

Actualmente, el equipo de **VTEX Ads** crea la campaña offsite en la cuenta del anunciante, define el publicador de medios y el retailer de destino, y aprueba la campaña. El anunciante no crea la campaña ni pasa por una etapa de aprobación, y el retailer de destino tampoco la aprueba. Para solicitar una campaña offsite, el anunciante se pone en contacto con el equipo de **VTEX Ads**.

## Dónde aparecen los resultados

Cada parte ve una porción distinta de los resultados de una campaña offsite:

- **Anunciante:** sigue las métricas de entrega y de conversión en el informe de campaña de **VTEX Ads**, agregadas por campaña. El informe no detalla qué publicador de medios publicó el anuncio.
- **Retailer de destino:** ve, en la página **Retail de destino**, qué anunciantes están enviando tráfico de campañas offsite a la tienda y cuántas campañas activas tiene cada uno. La página no muestra métricas de rendimiento de esas campañas.

## Saber más

- [Retail de destino](/es/docs/tutorials/retail-de-destino)
- [Modelos de campaña y roles en VTEX Ads](/es/docs/tutorials/modelos-de-campana-y-roles-en-vtex-ads)
- [Roles en retail media](/es/docs/tracks/roles-en-retail-media)
- [Métricas y atribución de VTEX Ads](/es/docs/tutorials/metricas-y-atribucion-de-vtex-ads)
- [Installing the offsite capture web script](https://developers.vtex.com/docs/guides/installing-the-offsite-capture-web-script)
- [Understanding ads events](https://developers.vtex.com/docs/guides/understanding-ads-events)
