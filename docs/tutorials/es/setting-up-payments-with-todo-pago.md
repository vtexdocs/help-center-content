---
title: 'Configurar pago con Todo Pago'
id: 4nO5e9gKLCsQmkAASouiMM
status: DRAFT
createdAt: 2018-03-01T19:18:03.810Z
updatedAt: 2022-12-23T20:46:56.078Z
publishedAt: 
firstPublishedAt: 2018-03-01T21:30:00.544Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pago-con-todo-pago
legacySlug: configurar-pago-con-todo-pago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Todo Pago es una digital wallet argentina que funciona como un [subadquirente](/es/tutorial/que-es-un-subadquirente) en el flujo de pago. Su cliente necesita elegir el __medio de pago__ Todo Pago en su tienda y realizar la autenticación en el ambiente del wallet.

Para configurar Todo Pago, siga estos pasos:

## Configurar la afiliación de gateway Todo Pago
1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuración__.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Todo Pago__.
4. Rellene los campos de registro con los datos enviados por el Todo Pago (campos _Authorization_, _Merchant_, _Security_).
5. En el campo __Currency__, elija la moneda de la transacción (actualmente, sólo está habilitado el uso de Pesos Argentinos).
6. En __Maximum Installments__, se establece el número máximo de parcelas para ofrecer a su cliente.
7. Haga clic en __Guardar__.


## Configurar la condición de pago Todo Pago
1. Dentro de los __Configuración__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __Todo Pago__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si tiene un antifraude configurado, usted puede seleccionar la opción __Usar Antifraude__.
6. Configure la [condición de pago](/es/tutorial/condiciones-de-pago): en efectivo o parcelado.
7. Usted puede configurar también [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir todos los pasos arriba, su cliente podrá elegir la opción de pago Todo Pago al momento del checkout. Al hacer clic en __Finalizar Compra__, su cliente será redirigido al ambiente de Todo Pago, donde podrá elegir entre acceder a su cuenta o usar una tarjeta diferente.
