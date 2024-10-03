---
title: 'Comprenda el detalle de su factura'
id: tutorials_4322
status: PUBLISHED
createdAt: 2017-04-27T21:51:05.741Z
updatedAt: 2023-05-31T16:14:13.332Z
publishedAt: 2023-05-31T16:14:13.332Z
firstPublishedAt: 2017-04-27T23:11:15.957Z
contentType: tutorial
productTeam: Billing
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: understanding-the-value-of-approved-revenues
locale: es
legacySlug: comprenda-el-valor-de-los-ingresos-aprobados
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Para VTEX, ingresos son el valor total del consumo de los pedidos que pasaron por el status **Aprobado Financieramente** en el módulo **Pedidos**. Sépa más en [¿Qué considera VTEX como ingresos en el cálculo de la factura?](https://help.vtex.com/es/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq).

## Informe Financiero

En el Informe Financiero, el cliente encuentra una lista de los pedidos aprobados financieramente con la indicación debida del canal de ventas - si es B2C, B2B, Call Center, VTEX Sales App, Marketplace Certificado, Seller Certificado, y otros canales. 

Para acceder al **informe financiero** de la factura, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Apps > Customer Credit > Facturas**, o escribe **Facturas** en la barra de búsqueda en la parte superior de la página.
2. Seleccione la factura deseada.
3. Haz clic en `Informe Financiero`.

Recibirá un mensaje informándole de que el Informe Financiero solicitado será enviado al correo electrónico con el que accedió al Admin VTEX. 

## Detalles de las facturas

Para que nuestros clientes puedan entender sus facturas, VTEX proporciona el detalle de cada factura con la relación de los valores cobrados.

Esta contiene datos descriptivos sobre el _Gross Merchandise Value_ (GMV), que es la suma de los pedidos aprobados financieramente en el mes, detallados en el informe financiero. 

Además de la Tarifa Fija Mensual (Monthly Fixed Fee), y Take Rate aplicado, que puede variar según el plan que se haya contratado. 

Para ver el detalle de su factura, sigue los pasos a continuación: 

1. En el Admin VTEX, accede a **Apps > Customer Credit > Facturas**, o escribe **Facturas** en la barra de búsqueda en la parte superior de la página.
2. Seleccione la factura deseada.
3. Haz clic en `Detalles`.
6. Haga clic en la flecha, ubicada al lado de los valores descritos en la factura.

## Entienda los valores de los ingresos aprobados

La suma del valor total de los pedidos aprobados financieramente que figuran en el informe financiero se denomina _Gross Merchandise Value_ (GMV).  Para obtener el valor total del GMV, debe sumar todos los valores contenidos en _Total Value String_. 

_Take Rate_ es el porcentaje mensual que se cobra sobre el valor total de los pedidos aprobados financieramente. Calculamos el porcentaje sobre el __total de pedidos aprobados financieramente__, ya que es la etapa en la que el cliente completa todo el proceso de compra, consumiendo los recursos de Búsqueda, Infraestructura, Hosting, etc.

Diferentes canales de venta (B2C, B2B, Call Center, etc.) tienen Take Rate diferentes. Para entender el porcentaje que se cobra, consulte las condiciones de su contrato.

Para acceder al valor de los pedidos aprobados financieramente por cada canal de venta, es necesario filtrar en la columna **Type**.
