---
title: 'Registros del Bridge Data Pipeline'
id: 2RFVJZL19nsWBSB4IXA0Z
status: PUBLISHED
createdAt: 2024-09-13T16:45:05.348Z
updatedAt: 2025-03-07T11:30:01.974Z
publishedAt: 2025-03-07T11:30:01.974Z
firstPublishedAt: 2024-09-13T17:17:56.608Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: bridge-logs-data-pipeline
legacySlug: registros-del-bridge-data-pipeline
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos del `Bridge` incluye información histórica sobre los registros de Bridge. 

> ⚠️ Actualmente, el conjunto de datos solo proporciona la información de los registros de seguimiento y de pedidos cancelados.  

En esta sección encontrará la siguiente información:

- [Características de los datos del Bridge](#caracteristicas-de-los-datos)  
- [Tabla: order_status_change](#tabla-order-status-change)  
- [Análisis con datos del Bridge](#analisis-con-bridge)  
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)  

## Características de los datos

| **Característica** | **Descripción** |
|:---:|:---:|
| Fuente de datos | Obtenido a partir de la información en módulo Bridge. |
| Historial | Los datos se mantienen durante dos años, a partir de 2024 para los clientes que ya utilizan la plataforma VTEX. |
| Intervalo mínimo de actualización | Una hora. |

## Tabla: order_status_change

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|:---:|:---:|:---:|
| main_account | character varying(100) | La cuenta principal de VTEX asociada con esta cuenta. |
| account_name | character varying(100) | Nombre de la tienda o cuenta secundaria responsable del pedido. |
| marketplace | character varying(50) | El nombre del marketplace de donde se originó este pedido. |
| bridge_order_id | character varying(300) | Identificador del pedido enviado por el marketplace. |
| vtex_order_id | character varying(300) | El ID del pedido en el OMS de VTEX. Generalmente es el ID del pedido del marketplace con un prefijo de ID afiliado.  |
| marketplace_order_id | character varying(300) | El ID del pedido en el marketplace externo. |
| bridge_log_type | character varying(25) | Indica si la actualización proviene de un evento de pedido (entrada o aprobación de pedido) o de un evento de seguimiento (factura, estado de entrega).|
| bridge_log_status | character varying(25) |Indica el estado de la entrada de registro. Los estados posibles son, success, warning o error. |
| bridge_log_message | character varying(65535) | El mensaje visible para el comerciante en el bridge. |
| update_timestamp | timestamp without time zone | La hora en que la integración procesó la actualización. |
| batch_id | character(13) | El ID de cada lote de datos. Tenga en cuenta que esta tabla tiene actualizaciones en sus filas, lo que hace que su batch_id se actualice en el momento de la actualización. |

## Análisis con Bridge

Aquí hay algunos análisis que puedes realizar utilizando la tabla Bridge:

- **Análisis de Pedidos de Marketplace:** comprenda los registros asociados con sus pedidos de marketplaces externos.  
- **Perspectivas sobre los registros de marketplaces externos:** realiza análisis por lotes sobre mensajes de marketplaces externos relacionados con el seguimiento y cancelación de pedidos.  

## Correlaciones con otros datos

Los datos del Bridge están relacionados con los datos de pedidos, proporcionando un análisis completo de compras y ventas. Aquí hay un ejemplo:  

**Análisis integral de pedidos realizados a través de marketplaces externos:** integrar este modelo de datos con los datos de pedidos proporciona una visión completa de los pedidos vendidos a través de marketplace externo. Utiliza el order_id para unir ambas tablas.

### Descubra otros conjuntos de datos

- [Catálogo](/es/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventario](/es/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegación](/es/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)
- [Pagos](/es/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)
- [Pedidos](/es/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv)
- [Promociones](/es/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Tarjeta de regalo](/es/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)

