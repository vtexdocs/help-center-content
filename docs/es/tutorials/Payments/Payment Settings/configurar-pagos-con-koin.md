---
title: 'Configurar pagos con Koin'
id: 415vLlrVSUgeYYwycCaGiQ
status: ARCHIVED
createdAt: 2018-04-24T19:48:39.401Z
updatedAt: 2024-03-18T18:30:25.798Z
publishedAt: 
firstPublishedAt: 2018-04-24T21:17:23.835Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-koin
locale: es
legacySlug: configurar-pagos-con-koin
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Usted puede configurar Koin para recibir pagos en su tienda. En esta modalidad, su cliente escoge el __medio de pago__ Koin Pospago para efectuar la compra.

Para configurar los pagos con Koin, siga estos pasos:

## Configurar la afiliación de gateway Koin
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones de Gateway__, haga clic en el botón __+__.
3. Haga clic en el conector __Koin__.
4. En el campo __Chave de identificación__, rellene la clave proporcionada por Koin en el registro de su tienda.
5. En __Senha de identificación__, introduzca la contraseña registrada durante el registro de su tienda en Koin.
6. En el campo __Moeda__, elija la moneda que se utilizará en las transacciones. Actualmente, la única opción disponible es el __Real__.
7. Haga clic en __Guardar__.

## Configurar la condición de pago Koin Post-Pago
1. Dentro de los __Configuración__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __Koin Pós-Pago__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. El campo __Procesar con la afiliación__ ya va a ser llenado por la opción _Koin_.
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Es posible configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados, Koin aparecerá en el checkout de su tienda como una opción de pago para sus clientes.
