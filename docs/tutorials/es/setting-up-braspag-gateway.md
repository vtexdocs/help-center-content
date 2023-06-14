---
title: Configurar el gateway Braspag
id: 7tQmfLMvtYEsWoaaAaeKSC
status: PUBLISHED
createdAt: 2018-02-27T18:21:37.603Z
updatedAt: 2023-03-29T01:03:06.303Z
publishedAt: 2023-03-29T01:03:06.303Z
firstPublishedAt: 2018-02-27T18:52:38.519Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-el-gateway-braspag
legacySlug: configurar-el-gateway-braspag
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible realizar la integración con el gateway Braspag. Con este conector, su tienda puede realizar ventas con tarjeta de crédito y boleto bancario, por ejemplo. Para saber cómo configurar Braspag, siga los pasos abajo:

## Configurar la afiliación de gateway Braspag

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Braspag__.
4. En el campo __Id do Merchant__, rellene con el dato proporcionado por Braspag.
5. En cada campo de las __Banderas__ *(Visa, Mastercard, Diners y etc)*, elija el adquirente que procesará el pago con las tarjetas de estas banderas.
6. En __Boleto Bancário__, elija el adquirente que hará la comunicación con el banco emisor del boleto.
7. En el campo __Instruções no boleto ao Caixa__, introduzca las orientaciones necesarias al empleado del banco que recibirá el pago del boleto.
8. En __Validade do boleto em dias__, introduzca la información de vencimiento del boleto.
9. En __Usa cartão protegido__, seleccione *Sí* para guardar los datos de la tarjeta en Braspag o *No* para no guardar la información de la tarjeta. El servicio para __compra en un clic__ debe estar contratado junto a Braspag para que los datos de la tarjeta sean salvos.
10. En __Boleto Registrado__, seleccione *Sí* si los boletos emitidos son del tipo registrado o *No* si no son registrados.
11. En el campo __País__, seleccione el país donde se realizan los pagos.
12. En __Moeda__, seleccione la moneda que se utilizará en las transacciones.
13. En el campo __Captura de segurança antecipada__, seleccione el tiempo deseado para realizar una captura anticipada del valor del pago.
14. Haga clic en __Guardar__.

## Configurar la condición de pago

En VTEX, el conector de Braspag procesa principalmente __tarjetas de crédito__ y __boletos bancarios__. 
Para configurar los medios de pago a ser procesados por el gateway de Braspag, [acceda a nuestro tutorial](/es/tutorial/condiciones-de-pago).
