---
title: 'Configurar pagos para el inStore'
id: 5Fo72INzO06MCGoMm6u0uk
status: ARCHIVED
createdAt: 2018-04-26T22:17:23.559Z
updatedAt: 2020-08-03T19:57:13.887Z
publishedAt: 
firstPublishedAt: 2018-04-27T18:04:34.910Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-payments-for-instore
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

Para configurar los pagos para el inStore, siga los pasos abajo.

## Configurar el Pago inStore

1. Acceda al módulo de __Pagos__.
2. Haga clic en __Ajustes__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __inStore__.
5. En el campo __Acquirer__, elija la adquirente que procesará los pagos.
6. En __Tipo de parcelamento__ ("Tipo de parcelación"), seleccione si los intereses de la parcelación serán de responsabilidad de la Administradora, banco o de su tienda.
7. Rellene los campos específicos con la información proporcionada por el adquirente elegido en el __paso 5__.

## Configurar Venta Directa Débito

Si desea recibir sus pagos en la modalidad __débito__, siga estos pasos:

1. Dentro de los __Ajustes__ del módulo de Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __Venda Direta Debito__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Usted también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
6. Después de realizar la configuración, haga clic en __Guardar__.

## Configurar venta directa de crédito

Si desea recibir sus pagos en la modalidad __crédito__, siga los pasos abajo:

1. Dentro de los __Ajustes__ del módulo de Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __Venda Direta Crédito__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Usted puede elegir [configurar la condición de pago en efectivo o parcelada](/es/tutorial/condiciones-de-pago).
6. Si lo desea, también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
7. Después de realizar la configuración, haga clic en __Guardar__.

## Ocultar pagos de inStore en el checkout del e-commerce

Una vez configurado el pago para el inStore, será necesario ocultar esa opción de pago en el checkout de su e-commerce. Para ello, siga estos pasos:

1. Acceda al módulo __Portal__.
2. Haga clic en el __botón de engranaje__ para acceder a la configuración del website de su tienda.
3. Haga clic en la pestaña __Código__.
4. En __Archivos__, haga clic en `checkout-instore-custom.css`.
5. Agregue el código siguiente al final del archivo y haga clic en __Guardar__.

```css
#payment-group-creditDirectSalePaymentGroup, #payment-group-debitDirectSalePaymentGroup {
    display: none;
}
```
