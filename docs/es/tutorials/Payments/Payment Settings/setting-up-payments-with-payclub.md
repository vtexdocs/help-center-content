---
title: 'Configurar pagos con PayClub'
id: 3C3bDia3Tyq48MOuMomcUW
status: ARCHIVED
createdAt: 2018-04-03T13:12:17.337Z
updatedAt: 2024-03-18T19:14:09.539Z
publishedAt: 
firstPublishedAt: 2018-04-03T15:07:32.416Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-payclub
locale: es
legacySlug: configurar-pagos-con-payclub
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Usted puede configurar el [subadquirente](/es/tutorial/que-es-un-subadquirente) PayClub para recibir pagos en su tienda. En esta modalidad, su cliente elige el __medio de pago__ PayClub y realiza la autenticación en el ambiente externo de la solución de pagos.

Para habilitar los pagos con PayClub, siga los pasos abajo:

## Configurar la afiliación de gateway PayClub
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PayClub__.
4. Rellene los campos de registro con los datos proporcionados por PayClub (campos _Código Adquirente_, _MerchantId_, _LocalId_, _ChavePrivadaAssinatura_, _ChavePrivadaCriptografia_, _ChavePublicaAssinaturaPayClub_, _ChavePublicaCriptografiaPayClub_ y _Simetrica_).
5. En el campo __RUC__, introduzca el código de registro de su tienda.
6. En __CodigoMoeda__, rellene con el código [ISO 4217](https://es.wikipedia.org/wiki/ISO_4217) de la moneda que se utilizará en los pagos.
7. En el campo __Vector__, escriba la secuencia de hasta 16 caracteres (sólo letras y números) generada por su tienda.
8. En __Zona Horaria__, defina la zona horaria para descargar el archivo de conciliación bancaria.
9. Haga clic en __Guardar__.

## Configurar la condición de pago PayClub
1. Dentro de los __Ajustes__ del módulo Pagos, haga clic en la pestaña __Condiciones de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __PayClub__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. En __Procesar con la afiliación__, la opción _PayClub_ estará seleccionada (ya que es la única disponible).
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Usted puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, PayClub aparecerá en el checkout de su tienda como una opción de pago. Después de hacer clic en __Finalizar Compra__, su cliente será redirigido para la autenticación en el ambiente de PayClub.
