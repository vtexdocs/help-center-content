---
title: 'Stock Data Pipeline '
id: 2IvKMZV9SNrE6ipBRQr8h2
status: PUBLISHED
createdAt: 2024-02-02T17:41:24.979Z
updatedAt: 2025-04-15T14:02:23.916Z
publishedAt: 2025-04-15T14:02:23.916Z
firstPublishedAt: 2024-05-27T19:26:59.588Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: inventory-data-pipeline-beta
legacySlug: inventario
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos compuesto por la tabla `item_inventory` proporciona información sobre la disponibilidad de ítems en stock. Detalla la cantidad total y disponible de ítems, las reservas activas, la posibilidad de stock ilimitado, además de incluir identificaciones de SKU y stock. La tabla también registra actualizaciones con marcas de tiempo e ID de control.  

En esta sección puedes consultar la siguiente información:

- [Características de los datos de stock](#características-de-los-datos-de-stock)
- [Tabla item_inventory](#tabla-item_inventory)
- [Análisis con item_inventory](#analisis-con-inventory)
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)

## Características de los datos

| **Característica** | **Descripción** |
|:---:|:---:|
| **Origen** | Alimentado por información del  módulo de logística. |
| **Disponibilidad** | Admin VTEX. |
| **Historial** | Ponemos a disposición datos históricos desde junio de 2022. Para los clientes que ya utilizan la plataforma VTEX, los datos se conservan durante dos años a partir de 2024. |
| **Intervalo mínimo de actualización** | Una hora. |

## Tabla item_inventory

Estos son los campos que componen la tabla:  

| **Nombre de la Columna**| **Tipo de Columna** | **Descripción de la Columna** |
|------|--------|---------|
|parent_account_name | character varying(200) | Nombre de la cuenta principal asociada con la entidad fundamental a la que pertenece el stock.|
| main_account| character varying(200) | Nombre de la cuenta principal del comerciante en el Gestor de Licencias.|
| account_name | character varying(200)| Nombre de la cuenta a la que pertenece el stock.|
| quantity | bigint | La cantidad total de artículos disponibles en el stock. |
| reserved_quantity| bigint| Número de reservas activas para un artículo. |
| is_unlimited_quantity  | boolean| Indica si el artículo puede tener stock infinito (True) o no (False). |
| batch_id  | character(13) | Identifica el último lote de ingesta que actualizó esta fila. |
| warehouse_id | character varying(400)| ID del almacén donde se encuentra el stock. |
| item_id| character varying(300)| Identifica el artículo cuyo stock está siendo cuantificado. |
| last_update| timestamp without time zone | La última vez que se actualizó el stock de este artículo específico. |
| warehouse_status | varchar(8) | Muestra el estado actual del almacén donde se guarda este inventario. Los valores aceptados son: activo, inactivo o eliminado. |

## Análisis con inventory

A continuación se indican algunos de los análisis posibles con la tabla de stock:

- **Análisis de niveles de stock:** evalúa si el stock cubre la demanda e identifica ítems en riesgo de agotarse.  
- **Tendencias de reserva de stock:** analiza la cantidad de ítems reservados a lo largo del tiempo para identificar patrones y ajustar las estrategias de gestión de stock.  
- **Análisis de la distribución del stock por cuenta:** optimiza la gestión de stock en varias cuentas para entender cómo se distribuye.  

## Correlaciones con otros datos  

Los datos de stock se correlacionan con los conjuntos de pedidos y productos, y proporcionan análisis más completos para compras, ventas y marketing. Consulta a continuación algunos ejemplos:  

- **Interacción con datos de pedidos:** el análisis conjunto con los datos de pedidos ofrece insights sobre la eficiencia en atender las demandas de los clientes y ayuda a predecir las necesidades de reposición.  
- **Relación con SKU:** la integración con los datos de SKU ayuda a gestionar el stock en función de la popularidad y disponibilidad de los productos.  
- **Datos de compras y proveedores:** la coordinación con los datos de compras permite mantener un equilibrio ideal en el stock, evitando los excesos de stock o la escasez.  
- **Análisis de ventas y marketing:** la comprensión del stock impacta directamente las estrategias de marketing y ventas, alineando promociones y campañas con la disponibilidad de productos.  

### Descubra otros conjuntos de datos

- [Navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Precios](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)
- [Promociones](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Tarjeta de regalo](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Registro del Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
