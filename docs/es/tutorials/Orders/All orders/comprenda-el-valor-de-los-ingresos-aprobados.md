---
title: 'Explicación del valor de ingresos aprobados'
id: tutorials_4322
status: PUBLISHED
createdAt: 2017-04-27T21:51:05.741Z
updatedAt: 2025-02-28T13:48:02.348Z
publishedAt: 2025-02-28T13:48:02.348Z
firstPublishedAt: 2017-04-27T23:11:15.957Z
contentType: tutorial
productTeam: Billing
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: understanding-the-value-of-approved-revenues
locale: es
legacySlug: comprenda-el-valor-de-los-ingresos-aprobados
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

En VTEX, el valor total de todo pedido financieramente aprobado se considera como ingreso, incluyendo el envío y el impuesto aplicado al precio final del producto. Todos los pedidos que pasan por este status son considerados en la factura, independientemente de cancelaciones o devoluciones posteriores.

## 1. Ingresos en VTEX
El concepto de ingresos es importante para entender la factura. Todos los pedidos marcados como **aprobado** en el módulo **Pedidos** se consideran como parte de los ingresos en VTEX. Se toma en consideración lo siguiente:

- El valor total de los pedidos, incluyendo envío e impuestos.
- Los pedidos cancelados, incluyendo aquellos rechazados por el sistema antifraude.
- Pruebas de compra.

Todos los casos mencionados utilizan toda la infraestructura de la plataforma, ya que este es el punto en que el cliente finaliza la compra. Por eso estos pedidos se consideran en los ingresos.

### Identificar pedidos aprobados
Un pedido se marca como aprobado en el momento en que se autoriza el pago. El proceso varía dependiendo del medio de pago utilizado en el pedido:

- **Tarjeta de crédito:** el pedido se marca como aprobado cuando el adquirente valida el saldo y los datos de la tarjeta.
- **Pix y boleto (Brasil):** el pedido se marca como aprobado tras la confirmación del pago.

Después de que el pedido se marca como aprobado, VTEX no considera otras modificaciones al pedido en relación con la facturación.

## 2. Exportar el informe financiero de la factura
El informe financiero contiene **todos los pedidos aprobados** en el periodo correspondiente a la factura, pero solo contiene datos del entorno en que se realizó la exportación. Si tienes varios entornos, debes exportar el informe de cada uno. Después de realizar la exportación, pronto recibirás un email con el informe.

El informe financiero se genera en la sección **Facturas**. Para exportarlo, sigue los pasos a continuación:

1. En Admin VTEX, haz clic en la inicial de tu nombre en la esquina superior derecha.
2. Haz clic en **Facturación > Facturas** o ingresa **Facturas** en la barra de búsqueda.
3. Selecciona la factura deseada.
4. Haz clic en `Informe financiero`.

<div class = "alert alert-info">
El informe financiero es estático y no cambia una vez generado. Puedes acceder al informe en cualquier momento para consultar los ingresos.
</div>

## 3. Análisis y manipulación del informe financiero
El informe financiero está en formato **CSV** y muestra varias columnas que detallan cada pedido. Para validar los valores de tu factura, **filtra las columas** del informe utilizando los siguientes criterios:

### Filtros y cálculos del GMV de transacciones
Utiliza la función `=SUMAR.SI` (SUMIF) en Excel para calcular el total de pedidos en diferentes casos:

| **Tipo de ingresos**                           | **Filtros aplicados**                                                | **Columna sumada**                | **Descripción**                                                                                                    |
|------------------------------------------------|----------------------------------------------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Marketplace certificado                        | `IsCertifiedMarketplace (Q) = Verdadero (T)`                         | `Value STR (G)` o `Value (F)`     | `Value STR` contiene el valor de cada pedido en formato 00,00 y `Value (F)` contiene los valores en formato 00.00. |
| Seller externo<br>                             | `IsExternalSeller (S) = Verdadero (T)`                               | `Value STR (G)` o `Value (F)`     | `G` y `F` indican la columna utilizada para la suma.                                                               |
| B2B                                            | `IsB2B (O) = Verdadero (T) y IsCertifiedMarketplace (Q) = Falso (F)` | `Value STR (G)` o `Value (F)`     | `O` y `Q` son columnas del informe.                                                                                |
| B2C                                            | `BillingType (O) = B2C`                                              | `Value STR (G)` o `Value (F)`<br> | Los filtros se aplican por columna.                                                                                |
| Seller interno certificado y cuenta secundaria | `IsInternalCertifiedSellerAndIsChildAccount (AF) = Verdadero (T)`    | `Value STR (G)` o `Value (F)`     | `T` y `F` son valores booleanos (True o False).                                                                    |

Los filtros permiten segmentar los datos y contabilizar correctamente cada categoría de pedido en la factura.

## 4. Correlación de los datos del informe financiero con el módulo Pedidos
Aunque el **informe financiero** es la fuente oficial para validar las facturas, puedes correlacionar estos datos con el **informe de pedidos** para obtener más detalles sobre los pedidos facturados.

### Exportar el informe de Pedidos para verificación
A continuación, se describen los pasos para exportar el informe generado, incluyendo los formatos disponibles para descarga y acceso posterior.

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos** o ingresa **Todos los pedidos** en la barra de búsqueda.
2. Filtra por la fecha de **autorización** del primer día del mes deseado hasta el primer día del mes siguiente a las 12:00 AM.
3. Haz clic en `Utilizar mi zona horaria` para ignorar la zona horaria.
4. Haz clic en `Aplicar`. 
5. Haz clic en `Exportar`.

Después de descargar el informe, utiliza la columna **OrderId** para correlacionar los datos con el informe financiero.

