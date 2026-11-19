---
title: 'Ficha de Depósito'
createdAt: 2019-01-24T20:45:35.451Z
updatedAt: 2026-10-30T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: what-is-deposit-slip
locale: es
hidden: false
---

La Ficha de Depósito es un medio de pago muy popular en México. Funciona de manera muy similar a los boletos bancarios de Brasil, con una diferencia: el pago solo puede realizarse en puntos autorizados.

## Como funciona
Para pagar con Ficha de Depósito, el comprador elige este medio de pago en el checkout y recibe un documento con código de barras que contiene la información del pago. Para completar la compra, el comprador debe ir a uno de los puntos autorizados y pagar el valor del documento en efectivo o con tarjeta de crédito.

## Cómo aceptar Ficha de Depósito en su tienda

Para ofrecer Ficha de Depósito en el checkout debes crear una condición de pago para este medio de pago en el Admin VTEX. La diferencia entre estos dos conceptos se explica en [Diferencia entre medios de pago y condiciones de pago](/es/docs/tutorials/diferencia-entre-medios-de-pago-y-condiciones-de-pago).

Antes de crear la condición, [registra un proveedor de pago](/es/docs/tutorials/afiliaciones-de-gateway) que procese Ficha de Depósito. Los proveedores disponibles en México están en la [Lista de proveedores de pago por país](/es/docs/tutorials/lista-de-proveedores-de-pago-por-pais). Una vez el proveedor esté registrado, sigue los pasos a continuación:

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __FichaDepósito__.
4. Active la condición en el campo __Status__.
5. En el campo __Procesar con proveedor__, seleccione el proveedor que procesará los pagos con Ficha de Depósito.
6. Haga clic en `Guardar`.
