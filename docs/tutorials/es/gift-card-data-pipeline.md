---
title: 'Tarjeta de regalo Data Pipeline'
id: 4XAnyc4scy3OG6RdnD7OEf
status: PUBLISHED
createdAt: 2024-09-02T18:39:23.356Z
updatedAt: 2024-09-02T19:22:21.354Z
publishedAt: 2024-09-02T19:22:21.354Z
firstPublishedAt: 2024-09-02T19:20:54.808Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: tarjeta-de-regalo-data-pipeline
locale: es
legacySlug: tarjeta-de-regalo-data-pipeline
subcategory: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de las `tarjetas de regalo` incluye información histórica sobre tarjetas de regalo creadas o modificadas. Este conjunto de datos proporciona solo información de las tarjetas creadas nativamente en VTEX, usando la [API de Giftcard](https://developers.vtex.com/docs/api-reference/giftcard-api).

<div class="alert alert-warning"> 
Las tarjetas de regalo creadas a través de aplicaciones personalizadas o externas no aparecerán en este modelo de datos. 
</div>

En este artículo puedes consultar la siguiente información:

- [Características de los datos](#caracteristicas-de-los-datos)
- [Tabla gift_cards_events_raw](#tabla-gift-cards-events-raw)
- [Análisis con datos de tarjetas de regalo](#analisis-con-datos-de-tarjetas-de-regalo)
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)

#### Características de los datos

| **Característica** | **Descripción** |
|:---:|:---:|
| Origen del dato | Obtenido a partir de la información del [Audit](https://help.vtex.com/pt/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA). |
| Disponibilidad | Admin VTEX. |
| Historial | Los datos se mantienen durante dos años, a partir de 2024 para los clientes que ya utilizan la plataforma VTEX. |
| Menor intervalo de actualización posible | 1 hora. |

#### Tabla `gift_cards_events_raw`

Consulta a continuación los campos que componen la tabla.

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|---|---|---|
| account_name | character varying(255) | Nombre de la cuenta relacionada con la operación del tarjeta de regalo. |
| event_date | timestamp with time zone | Fecha y hora de la operación. |
| operation | character varying(200) | Tipo de operación. |
| subject_id | character varying(200) | Subtipo de operación. |
| author_id | character varying(1000) | Autor de la operacion. |
| giftcardid | character varying(5000) | ID de la tarjeta de regalo utilizada en la operación. Disponible solo para las operaciones `CREATE_GIFT_CARD` o `EDIT_GIFT_CARD`. |
| giftcardvalue | character varying(5000) | Valor de la tarjeta de regalo utilizada en la operación. Disponible solo para las operaciones `CREATE_GIFT_CARD` o `EDIT_GIFT_CARD`. |
| edit_initial_value | character varying(5000) | Valor inicial de la tarjeta de regalo, antes de la operación de edición. Disponible solo para la operación `EDIT_GIFT_CARD`. |
| edit_final_value | character varying(5000)	 | Valor final de la tarjeta de regalo, después de la operación de edición. Disponible solo para la operación `EDIT_GIFT_CARD`. |
| batch_id | character varying(100) | Identificador utilizado cuando los datos se cargan en la tabla para el control de calidad de la ingesta de datos. |

#### Análisis con tarjetas de regalo
Los datos de tarjetas de regalo pueden utilizarse en los siguientes análisis:

- **Lista de tarjetas de regalo creadas:** revise la lista actual de tarjetas creadas.  
- **Auditoría de la Información de tarjetas de regalo:** examine las actividades relacionadas con sus tarjetas de regalo, incluyendo la identificación de quién creó una tarjeta específica y el historial de ediciones de una tarjeta.  

#### Correlaciones con otros datos
El conjunto de datos de tarjetas de regalo se correlaciona con lo siguiente conjunto del ecosistema de datos de VTEX:

- **Tarjetas de regalo más usadas:** combinando este modelo de datos con los datos de [pedidos](https://help.vtex.com/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz), es posible entender cómo se están utilizando las tarjetas y monitorear su uso.  
- **Impacto en las ventas:** de manera similar, al combinar con datos de [pedidos](https://help.vtex.com/pt/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz), es posible evaluar cómo las tarjetas de regalo influyen en las ventas.  

