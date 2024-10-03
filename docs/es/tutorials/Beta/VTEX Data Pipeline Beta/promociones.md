---
title: 'Promociones Data Pipeline '
id: 3WZ1syNucDFdvVhfKtA6Qd
status: PUBLISHED
createdAt: 2024-02-02T18:02:01.395Z
updatedAt: 2024-09-13T17:33:13.910Z
publishedAt: 2024-09-13T17:33:13.910Z
firstPublishedAt: 2024-05-27T19:26:59.739Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: promotions
locale: es
legacySlug: promociones
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de promociones está constituido por cuatro tablas: `promotion_archived`, `promotion_created`, `promotion_removed` y `promotion_unarchived`. Estas cuatro tablas abarcan todo el ciclo de vida de las campañas promocionales, desde su lanzamiento hasta su archivo, reactivación o remoción, proporcionando una visión integral de las estrategias promocionales de la tienda.

En esta sección puedes consultar la siguiente información:

- [Características de los datos](#características-de-los-datos)
- [Tabla promotion_archived](#tabla-promotion_archived)
- [Tabla promotion_created](#tabla-promotion_created)
- [Tabla promotion_removed](#tabla-promotion_removed)
- [Tabla promotion_unarchived](#tabla-promotion_unarchived)
- [Análisis con datos de promociones](#analisis-con-datos-de-promociones)
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)

## Características de los datos

|**Característica**|**Descripción**|
| - | - |
|**Origen**|Proceden del [módulo Promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) en el Admin VTEX.|
|**Disponibilidad**|Se puede acceder a los datos de promociones a través del Admin VTEX y también a través de las [API de Promotions](https://developers.vtex.com/docs/guides/promotions-overview).|
|**Historial**|Los datos se conservan durante dos años, a partir de 2024 para clientes que ya utilizan la plataforma VTEX.|
|**Intervalo mínimo de actualización**|Una hora.|

## Tabla promotion_archived

La tabla `promotion_archived` registra todas las promociones archivadas. Incluye detalles de las promociones removidas temporal o permanentemente del uso activo, lo que permite un historial y análisis de las campañas anteriores.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|:---:|:---:|:---:|
| **version** | character varying(16383) | Versión de los datos de la tabla, útil para control de versiones y compatibilidad. |
| **ingestion_time** | timestamp without time zone | Fecha y hora de inserción de los datos en la tabla. |
| **payload** | super | Conjunto de datos efectivamente almacenados en la tabla, abarcando información diversa. |
| **batch_id** | character varying(13) | Identificador de lote de datos, utilizado para realizar un seguimiento de la ingesta y gestión de los datos. |  

## Tabla promotion_created  

La tabla `promotion_created` contiene información sobre nuevas promociones creadas. Es esencial para realizar un seguimiento del lanzamiento de nuevas campañas promocionales, ofreciendo insights sobre estrategias e iniciativas de marketing actuales.  
Consulta a continuación los campos que componen la tabla:

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|:---:|:---:|:---:|
| **version** | character varying(16383) | Indica la versión de los datos presentes en la tabla. |
| **ingestion_time** | timestamp without time zone | Representa el momento en que se insertaron los datos en la tabla. |
| **payload** | super | Contiene el conjunto de datos o información efectivamente cargados en la tabla. |
| **batch_id** | character varying(13) | Identificador único del lote de datos, utilizado para hacer seguimiento y gestionar la ingesta de datos. |  

## Tabla promotion_removed  

La tabla `promotion_removed` registra las promociones eliminadas o desactivadas, proporcionando un análisis de aquellas que fueron descontinuadas y permitiendo comprender los motivos detrás de esas decisiones.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|:---:|:---:|:---:|
| **version** | character varying(16383) | Versión de los datos. |
| **ingestion_time** | timestamp without time zone | Fecha y hora de la ingesta de datos. |
| **payload** | super | Contenido de los datos insertados. |
| **batch_id** | character varying(13) | ID de control del lote de datos. |  

## Tabla promotion_unarchived  

La tabla `promotion_unarchived` almacena promociones que han sido reactivadas o eliminadas del archivo. Proporciona información sobre campañas reintroducidas, lo que ofrece perspectivas sobre estrategias para reutilización o revisión de promociones anteriores.  
Consulta a continuación los campos que componen la tabla:

| **Nombre de la columna** | **Tipo de columna** | **Descripción de la columna** |
|:---:|:---:|:---:|
| **version** | character varying(16383) | Versión de los datos de la tabla. |
| **ingestion_time** | timestamp without time zone | Fecha y hora de inserción de los datos en la tabla. |
| **payload** | super | Conjunto de datos efectivamente almacenados en la tabla. |
| **batch_id** | character varying(13) | Identificador del lote de datos insertados en la tabla. |  

## Análisis con datos de promociones

El conjunto de datos de promociones puede utilizarse para realizar los siguientes análisis:  

- **Análisis del ciclo de vida de la promoción:** comparar la frecuencia y duración de las promociones para evaluar la longevidad y el éxito de las campañas.  
- **Tasa de reactivación de promociones:** analizar el número de promociones reactivadas para evaluar la eficacia de reutilizar o revisar campañas anteriores.  
- **Tendencias de remoción de promociones:** realizar un seguimiento del número y tipos de promociones descontinuadas para comprender las razones de su remoción y ajustar las estrategias futuras.  
- **Impacto de nuevas promociones:** comparar los lanzamientos de promociones con las ventas y el tráfico para evaluar su impacto inmediato.  

## Correlaciones con otros datos

La relación entre el conjunto de datos de promociones y otros conjuntos de datos es esencial. A continuación, se muestran algunos ejemplos:  

- **Datos de [pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv):** analizar la influencia de las promociones en los pedidos ayuda a comprender su impacto sobre las ventas.  
- **Datos de [stock](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2):** la correlación con el stock es fundamental para garantizar la disponibilidad de los productos promocionados.  
- **Análisis de marketing y publicidad**: la integración con estos datos permite medir la efectividad de las promociones para atraer tráfico y engagement.  
- **Datos de [navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) en el sitio web:** analizar el efecto de las promociones en la navegación permite obtener insights sobre el comportamiento de los clientes y la eficacia de la exhibición de las promociones.  

### Descubra otros conjuntos de datos

- [Stock](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pagos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Pedidos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Precios](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Tarjeta de regalo](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Registro del Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

