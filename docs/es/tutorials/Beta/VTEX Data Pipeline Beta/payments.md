---
title: 'Pagos Data Pipeline'
id: 7LWkFaA1jPabzc5JAt1rGs
status: PUBLISHED
createdAt: 2024-02-02T17:53:35.949Z
updatedAt: 2024-09-13T17:31:09.050Z
publishedAt: 2024-09-13T17:31:09.050Z
firstPublishedAt: 2024-05-27T19:26:59.478Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slug: pagos
locale: es
legacySlug: pagos
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

El conjunto de datos de pagos se compone de dos tablas principales: `payments_transitions` y `transaction_transitions`.

En esta sección puedes consultar la siguiente información:

- [Características de los datos de pagos](#caracteristicas-de-los-datos)
- [Tabla payments_transitions](#tabla-payments_transitions)
- [Tabla transaction_transitions](#tabla-transaction_transitions)
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

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
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

| **Nombre de la columna** | **Tipo de campo** | **Descripción** |
|:---:|:---:|:---:|
| **batch_id** | character varying(13) | ID de control del lote de ingesta de datos. |
| **event_date_time** | timestamp with time zone | Fecha y hora de la transición, con información sobre la zona horaria. |
| **account** | character varying(128) | Mapea a un 'account_name' en el sistema de gestión de licencias de VTEX. |
| **account_id** | character varying(36) | Mapea a un 'id' en el sistema de gestión de licencias de VTEX tras eliminar los guiones. |
| **delta_value** | double precision | Tiempo en milisegundos empleado en la transición 'from_transition'. |
| **from_transition** | character varying(64) | Status de la transacción hasta la fecha y hora del evento. |
| **to_transition** | character varying(64) | Nuevo status de la transacción a partir de la fecha y hora del evento. |
| **transaction_id** | character varying(36) | Identificador único de la transacción. |  

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

- [Stock](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)  
- [Navegación](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd)   
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Precios](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)  
- [Promociones](https://help.vtex.com/tutorial/promocoes-data-pipeline-beta--3WZ1syNucDFdvVhfKtA6Qd)
- [Tarjeta de regalo](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
- [Registro del Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)
