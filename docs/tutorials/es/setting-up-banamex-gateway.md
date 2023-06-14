---
title: 'Configurar gateway Banamex'
id: 8TnJhdKnPGYsoUyAGGQgI
status: DRAFT
createdAt: 2018-05-11T21:13:33.957Z
updatedAt: 2022-12-23T20:12:15.664Z
publishedAt: 
firstPublishedAt: 2018-05-23T21:47:31.912Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-banamex
legacySlug: configurar-gateway-banamex
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

El banco mexicano Citibanamex tiene un [gateway de pagos](/es/tutorial/que-es-un-gateway-de-pagos) integrado a VTEX. Con Banamex, su tienda puede recibir pagos con Ficha de Depósito, siempre que actúe en México y tenga cuenta en Citibanamex.

Para configurar Banamex (el gateway de Citibanamex), siga los pasos abajo:

## Configurar la afiliación de gateway Banamex
1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuración__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __Banamex__.
5. En el campo __Cuenta Habiente__, introduzca el nombre del titular de la cuenta.
7. En __Cuenta de Depósito__, rellene el número de la cuenta de su tienda en Citibanamex para el depósito de los pagos.
8. En el campo __Sucursal__, indique la agencia bancaria en que su tienda tiene cuenta.
9. En __Lugar del Pago__, introduzca los lugares autorizados para recibir los pagos.
10. En el campo __Días hasta el vencimiento__, informe cuántos días su cliente tendrá para efectuar el pago. El patrón es 3 días de validez.
11. En __Nombre del campo en Masterdata__, indique el nombre que se le dará al campo en el Master Data.
12. Deje el campo __Efectivo__ en blanco.
13. Rellene los campos __Texto 1__ y __Texto 2__ con las instrucciones que desea dar en la Ficha de Depósito.
14. Haga clic en __Salva__.

## Configurar la condición de pago Ficha de Depósito
1. Dentro de __Configuración__ en el módulo _Pagos_, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __FichaDeposito__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. En __Procesar con la afiliación__, la opción _Banamex_ ya estará seleccionada.
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Usted puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Salva__.

Después de seguir los pasos indicados, el checkout de su tienda pasará a contar con ficha de depósito como condición de pago. Sus clientes sólo tienen que seleccionar la condición de pago, imprimir la ficha y hacer el pago en una agencia de Citibanamex.
