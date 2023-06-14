---
title: 'Configurar pagos con PagoEfectivo'
id: 1GGyNqZSYE2a8ga4UemYyw
status: PUBLISHED
createdAt: 2018-04-09T20:26:14.388Z
updatedAt: 2021-06-17T18:59:09.202Z
publishedAt: 2021-06-17T18:59:09.202Z
firstPublishedAt: 2018-04-09T21:57:41.363Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-pagoefectivo
legacySlug: configurar-pagos-con-pagoefectivo
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Usted puede configurar PagoEfectivo para recibir pagos en su tienda. En esta modalidad, su cliente escoge el __medio de pago__ PagoEfectivo para efectuar la compra.

Para habilitar pagos con PagoEfectivo, siga los pasos abajo:

## Configurar la afiliación de gateway PagoEfectivo
1. Acceda al módulo __Pagos__.
2. Haga clic en __Ajustes__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __PagoEfectivo__.
5. Rellene los campos de registro con los datos proporcionados por PagoEfectivo (campos _Id Comercio_ y _Email Comercio_).
6. En el campo __Nombre Comercio__, rellene el nombre que se mostrará en la impresión del boleto.
7. En __Moneda__, elija la moneda que se utilizará en las transacciones de su tienda.
8. En el campo __Time Zone__, introduzca la zona horaria que se utilizará para definir la fecha de vencimiento en PagoEfectivo.
9. En __Horas para vencimiento__, defina el tiempo que desea esperar por la autorización del pago antes de que se cancele el pedido.
10. En __Seleccione el certificado privado (.1pz)__, cargue un certificado privado válido, con extensión `.1pz` y clave.
11. En __Seleccione el certificado público de respuesta (.1pz)__, cargue un certificado público válido con extensión `.1pz` (enviado por PagoEfectivo).
12.  En el campo __Usar nuevo URL de boleto__, considere «Token» como el token que su tienda tiene con Pago Efectivo y escoja una de las siguientes opciones:

- Escoja __No__:<br>
    - Si ya utiliza una personalización para redirigir a la URL más reciente de Pago Efectivo. Así, no habrá conflicto entre su personalización y nuestra solución.
URL predeterminada: http://cip.pagoefectivo.pe/GenPago.aspx?Token=
</br>
- Escoja __Si__: <br>
    - (1) Si no utiliza ninguna personalización para este conector, pero desea utilizar la URL de redirección más reciente.
 (2) Si desea cambiar su personalización a nuestra solución nativa.
Nueva URL: https://cip.pagoefectivo.pe/genpagoif.aspx?Token=</br>

<ui>
13. Haga clic en <b>Guardar</b>.
  </ui>

## Configurar la condición de pago PagoEfectivo
1. Dentro de los __Ajustes__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __PagoEfectivo__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. En __Procesar con la afiliación__, la opción _Pago Efectivo_ ya va a estar seleccionada (ya que es la única disponible).
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Usted puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, PagoEfectivo aparecerá en el checkout de su tienda como una opción de pago para sus clientes.
