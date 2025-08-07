---
title: 'Pagos Data Pipeline'
id: 7LWkFaA1jPabzc5JAt1rGs
status: PUBLISHED
createdAt: 2024-02-02T17:53:35.949Z
updatedAt: 2025-04-15T14:55:06.016Z
publishedAt: 2025-04-15T14:55:06.016Z
firstPublishedAt: 2024-05-27T19:26:59.478Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: payments
legacySlug: pagos
locale: es
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de pagos se compone de dos tablas principales: `payments_transitions` y `transaction_transitions`.

En esta sección puedes consultar la siguiente información:

- [Características de los datos de pagos](#caracteristicas-de-los-datos)
- [Tabla payments_transitions](#tabla-payments_transitions)
- [Tabla transaction_transitions](#tabla-transaction_transitions)
- [Tabla transactions_interactions](#tabla-transactions_interactions)
- [Tabla authorizations_consolidated](#tabla-authorizations_consolidated)
- [Tabla transaction_consolidation](#tabla-transaction-consolidation)
- [Análisis con datos de pagos](#analisis-con-datos-de-pagos)
- [Correlaciones con otros datos](#correlaciones-con-otros-datos)

## Características de los datos

|**Característica**|**Descripción**|
| - | - |
|**Origen**|Los datos de este conjunto proceden del [módulo Pagos de VTEX](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB). Se recopilan y organizan para reflejar las transacciones y pagos realizados en la plataforma.|
|**Disponibilidad**|Solo se puede acceder a los datos de navegación en el Admin VTEX.|
|**Historial**|Los datos se conservan durante dos años, a partir de 2023 para clientes que ya utilizan la plataforma VTEX. Los datos en la tabla `transaction_interactions` solo tienen historial desde el 07/05/24 (dd/mm/aa).|
|**Intervalo mínimo de actualización**|Una hora.|

## Tabla payments_transitions

La tabla `payments_transitions` almacena información detallada sobre los pagos, incluido el proveedor y el medio de pago utilizados en cada transacción.  
Consulta a continuación los campos que componen la tabla:

| **Nombre de la columna** | **Tipo de la columna** | **Descripción de la columna** |
|:---:|:---:|---|
| **batch_id** | character varying(13) | ID de control del lote de ingesta de datos. |
| **event_date_time** | timestamp with time zone | Fecha y hora de la transición, con información sobre la zona horaria. |
| **account** | character varying(128) | Nombre de cuenta, mapeado a 'account_name' en VTEX License Manager. |
| **account_id** | character varying(36) | Identificador de la cuenta, mapeado a 'id' en VTEX License Manager tras eliminar los guiones. |
| **connector** | character varying(1024) | Proveedor que procesa el pago. |
| **delta_value** | double precision | Tiempo en milisegundos empleado en la transición 'from_transition'. |
| **from_transition** | character varying(64) | Status del pago hasta la fecha y hora del evento. |
| **to_transition** | character varying(64) | Nuevo status de la transacción a partir de la fecha y hora del evento. |
| **payment_id** | character varying(32) | Identificador único de pago. |
| **payment_system** | character varying(1024) | Tipo de pago: tarjeta de crédito, débito, etc. |
| **transaction_id** | character varying(36) | Identificador único de la transacción a la que pertenece este pago. |
| **tid** | character varying(1024) | Código externo proporcionado por el operador, que funciona como número de identificación para una transacción de ecommerce. |
| **nsu** | character varying(1024) | NSU (Número Sequencial Único) es un número secuencial único utilizado en Brasil para identificar una transacción de venta con tarjeta y está asociado a cada factura creada. |
| **currency_code** | character varying(1024) | Código de moneda representado por tres letras mayúsculas. |
| **value** | integer | Valor del pago multiplicado por 100, lo que significa que para un pago de $2.35 el valor será 235. |  

## Tabla transaction_transitions

La tabla `transaction_transitions` almacena las transacciones vinculadas a pedidos realizados. Cada transacción contiene un conjunto de pagos y cambia de status conforme a un flujo predefinido.  
Consulta a continuación los campos que componen la tabla:  

| **Nombre de la columna** | **Tipo de la columna** | **Descripción de la columna** |
|:---:|:---:|---|
| **batch_id** | character varying(13) | ID de control del lote de ingesta de datos. |
| **event_date_time** | timestamp with time zone | Fecha y hora de la transición, con información sobre la zona horaria. |
| **account** | character varying(128) | Mapea a un 'account_name' en el sistema de gestión de licencias de VTEX. |
| **account_id** | character varying(36) | Mapea a un 'id' en el sistema de gestión de licencias de VTEX tras eliminar los guiones. |
| **delta_value** | double precision | Tiempo en milisegundos empleado en la transición 'from_transition'. |
| **from_transition** | character varying(64) | Status de la transacción hasta la fecha y hora del evento. |
| **to_transition** | character varying(64) | Nuevo status de la transacción a partir de la fecha y hora del evento. |
| **transaction_id** | character varying(36) | Identificador único de la transacción. |  

## Tabla transactions_interactions

Esta tabla registra las actualizaciones de las transacciones a través de diversas interacciones. A continuación, se incluye una descripción detallada de cada campo:

| **Nombre de la Columna** |**Tipo de la columna** | **Descripción de la columna** |
|:----------:|:-----------:|-------------|
| key_id | character varying(35) | Identificador único de la interacción. Representa el ID de la interacción. |
| key_transaction_id | character varying(35) | Identificador único de la transacción relacionada. |
| payment_id | character varying(120) | Identificador único del pago. Este campo **no es obligatorio**. |
| source | character varying(120) | Indica el origen de la actualización de la interacción. Puede ser un nombre de función o regla de negocio. **Obligatorio**. |
| status | character varying(60) | Representa el estado actualizado de la transacción. Este campo es **obligatorio**. |
| date | timestamp without time zone | Fecha y hora en que ocurrió la transacción. Este campo es **obligatorio**. |
| message | character varying(65535) | Información detallada sobre la actualización de la transacción. Este campo es **no estructurado** y **obligatorio**. |
| ticks | character varying(60) | Identificador único del "tick" del pago. Este campo es **obligatorio**. |
| batch_id | character varying(13) | Indica la fecha y hora en que se procesó el job que ingirió los datos. Formato: `YYYY_MM_DD_hh`. |
| account | character varying(60) | Nombre de la cuenta asociada a la transacción. Este campo es **obligatorio**. |

## Tabla authorizations_consolidated

Esta tabla consolida los detalles sobre las autorizaciones de pago, el seguimiento de la información clave sobre cada transacción, incluida la evaluación de riesgos, los detalles de pago y el control de la ingesta. A continuación, se incluye una descripción de cada campo:

| **Nombre de la Columna** | **Tipo de la columna** | **Descripción de la columna** |
|:---------:|:----------:|-------------|
| account | character varying(63) | Nombre de la cuenta asociada a la transacción. Siempre será igual a `merchant_name`. |
| merchant_name | character varying(63) | Nombre del comerciante donde ocurrió la transacción. Siempre será igual a `account`. |
| transaction_start_date | timestamp with time zone | Fecha y hora en que se realizó la autorización, incluida la información de la zona horaria. |
| connector | character varying(80) | Nombre del conector de pago involucrado en la transacción (por ejemplo, gateway de pago). |
| payment_id | character varying(255) | Identificador único del pago. |
| payment_system | character varying(255) | Tipo de pago utilizado en la transacción (por ejemplo, tarjeta de crédito, tarjeta de débito, etc.). |
| transaction_id | character varying(63) | Identificador único de la transacción a la que pertenece este pago. |
| currency | character varying(4) | Código de la moneda representado por tres letras mayúsculas (por ejemplo, USD, EUR). |
| payment_value | double precision | Valor del pago multiplicado por 100. Por ejemplo, un pago de $2,35 se almacenará como 235. |
| authorized | boolean | Indica si la transacción fue autorizada (`true`) o no (`false`). |
| installments | integer | Número de cuotas en que se está pagando la transacción. |
| recipients_count | integer | Número de destinatarios involucrados en la transacción (por ejemplo, pagos divididos entre varios comerciantes). |
| risk_level | character varying(100) | Nivel de riesgo asociado a la transacción (por ejemplo, "bajo", "medio", "alto"). |
| return_code | character varying(255) | Código de retorno proporcionado por el proveedor de pagos, generalmente indicando el motivo del rechazo. |
| affiliation_id | character varying(37) | Identificador único de la afiliación asociada a la transacción. |
| antifraud_affiliation_id | character varying(37) | Identificador único de la afiliación antifraude asociada a la transacción. |
| ingestion_time | timestamp with time zone | Fecha y hora en que se insertó la fila en la tabla. |
| batch_id | character varying(13) | Identificador de control del lote de ingestión de datos, generalmente en formato `YYYY_MM_DD_hh`. |

## Tabla transaction_consolidation

Esta tabla contiene los metadatos de transacciones de pago, incluyendo información detallada sobre valores, estados, afiliaciones, conectores de pago, análisis antifraude, cuotas y datos de origen.

| **Nombre de la Columna** | **Tipo de la columna**| **Descripción de la columna** |
|:-------:|:------:|-----|
| id | character varying(65535) | ID único de la transacción a la que pertenece este pago. |
| transaction_value | double precision  | Valor del pago en formato decimal. |
| status_transaction | character varying(65535) | Último estado de la transacción. |
| reference_key | character varying(65535)| Identificador interno utilizado para conciliación o como referencia de transacción. Este campo es enviado por Checkout al solicitar la creación de la transacción. |
| merchant_name  | character varying(65535) | Nombre de la cuenta que incluye: cuenta principal, subcuentas, cuentas hijas, etc. |
| account_name  | character varying(16383) | Nombre de la cuenta que incluye: cuenta principal, subcuentas, cuentas hijas, etc. |
| main_account_name | character varying(16383)| Nombre de la cuenta principal. |
| is_active  | boolean  | Indica si la transacción fue autorizada o no. |
| is_operating  | boolean   | Indica si la cuenta o el conector estaba operando en el momento de la transacción. |
| recipients_count  | integer | Número de repartos: cantidad de vendedores que recibieron el pago, incluyendo la cuenta principal. |
| date  | date | Última fecha de la transacción. |
| account_verification_only     | boolean  | Indica si la transacción fue solo para verificar la cuenta o método de pago, sin valor monetario real. |
| payment_id   | character varying(65535)  | ID único del pago. |
| value_payment  | double precision  | Valor monetario del primer pago asociado a la transacción. |
| status_payment | character varying(65535) | Estado final del primer pago (ej: aprobado, cancelado). |
| currency_code | character varying(65535)| Código de moneda de tres letras en mayúscula. |
| connector_name | character varying(65535) | Nombre del conector que procesa el pago. |
| affiliation_id | character varying(65535) | ID de la afiliación del conector de pago configurado para una cuenta específica. |
| affiliation_name | character varying(65535)| Nombre descriptivo de la afiliación del conector utilizada en el primer pago. |
| is_legacy_connector| boolean | Indica si el conector es legado. |
| payment_system | integer   | Código numérico del tipo de pago (ej: 1, 2, 3...). |
| installments | integer  | Número de cuotas. |
| payment_system_name | character varying(65535)| Tipo de pago (ej: tarjeta de crédito, débito, etc.). |
| return_code | character varying(65535) | Código de retorno proporcionado por el conector. |
| antifraud_affiliation_id | character varying(65535) | Identificador de la instancia del servicio antifraude asociada al primer pago. |
| antifraud_affiliation_name    | character varying(65535)  | Nombre descriptivo de la afiliación del servicio antifraude. |
| antifraud_provider_name | character varying(65535)  | Nombre del proveedor del servicio antifraude. |
| antifraud_analysis_result | character varying(65535) | Resultado del análisis antifraude. |
| pan_type  | character varying(65535) | Tipo de tarjeta utilizada (ej: crédito, débito, prepaga). |
| payment_origin | character varying(65535)  | Origen o canal del pago (ej: tienda física, sitio web, app). |
| is_3ds_required | boolean   | Indica si el pago requirió autenticación 3D Secure. |
| payment_id_2 | character varying(65535)| ID del segundo pago (si aplica). |
| value_payment_2  | double precision | Valor del segundo pago (si aplica). |
| status_payment_2  | character varying(65535)| Estado final del segundo pago (ej: aprobado, cancelado). |
| currency_code_2  | character varying(65535) | Código de moneda del segundo pago. |
| connector_name_2  | character varying(65535) | Nombre del conector del segundo pago. |
| affiliation_id_2 | character varying(65535) | ID de afiliación del conector del segundo pago. |
| affiliation_name_2  | character varying(65535) | Nombre de la afiliación usada en el segundo pago. |
| is_legacy_connector_2  | boolean   | Indica si el segundo conector es legado. |
| installments_2   | integer   | Número de cuotas del segundo pago. |
| payment_system_2  | integer   | Código del método de pago del segundo pago. |
| payment_system_name_2 | character varying(65535) | Nombre del método de pago usado en el segundo pago. |
| return_code_2 | character varying(65535)| Código de retorno del segundo pago. |
| antifraud_affiliation_id_2    | character varying(65535)| ID de afiliación antifraude del segundo pago. |
| antifraud_affiliation_name_2  | character varying(65535)| Nombre de la afiliación antifraude usada en el segundo pago. |
| antifraud_provider_name_2     | character varying(65535)| Nombre del proveedor antifraude del segundo pago. |
| antifraud_analysis_result_2   | character varying(65535)| Resultado del análisis antifraude del segundo pago. |
| pan_type_2 | character varying(65535)| Tipo de tarjeta usada en el segundo pago. |
| payment_origin_2  | character varying(65535)| Origen del segundo pago (ej: tienda, app, web). |
| is_3ds_required_2   | boolean  | Indica si el segundo pago requirió autenticación 3D Secure. |
| transaction_value_usd | double precision | Valor de la transacción en dólares (FX Neutral). |
| value_payment_usd  | double precision | Valor del primer pago en dólares (FX Neutral). |
| value_payment_2_usd | double precision | Valor del segundo pago en dólares (FX Neutral). |
| batch_id  | character varying(13)| ID de control del lote de ingestión de datos. |

## Análisis con datos de pagos

El conjunto de datos de pagos puede utilizarse para llevar a cabo los siguientes análisis:  

- **Análisis de eficiencia del procesador de pago:** evaluar el rendimiento de distintos proveedores de pago mediante el análisis del tiempo promedio empleado en cada transición para identificar los más eficientes y confiables.  
- **Monitoreo de las transiciones del status de los pagos:** seguimiento de los cambios de status de los pagos a lo largo del tiempo para comprender patrones e identificar posibles problemas en el flujo de pagos.  
- **Análisis del volumen de transacciones por cuenta:** determinar el volumen de transacciones procesadas por cada cuenta, lo que ayuda a comprender la demanda de servicios de pago en las distintas cuentas.  
- **Distribución del tipo de pago:** analiza la distribución del uso de diferentes sistemas de pago para evaluar las preferencias de los clientes por los distintos medios de pago.  

## Correlaciones con otros datos

Los datos de pago de la plataforma VTEX muestran correlaciones con otros conjuntos de datos, ampliando la comprensión del ciclo de compra:

- **Interacción con datos de [pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv):** el análisis conjunto de los datos de pago y los pedidos proporciona información sobre cómo influyen los medios de pago en las conversiones de pedidos, revelando tendencias en el comportamiento de compra de los clientes.  
- **Análisis financieros y contables:** integrar datos de pago con análisis financieros contribuye a una gestión más eficiente del flujo de caja y permite realizar previsiones financieras más precisas, impulsando la salud financiera de la empresa.  

### Descubra otros conjuntos de datos

- [Catálogo](https://help.vtex.com/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Stock](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2) 
- [Navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Precios](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promociones](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Tarjeta de regalo](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Registro del Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
