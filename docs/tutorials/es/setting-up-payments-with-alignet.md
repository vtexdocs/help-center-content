---
title: Configurar pagos com Alignet
id: 4qfl6jgDyMGA0IuM0siEii
status: PUBLISHED
createdAt: 2018-03-28T20:48:01.728Z
updatedAt: 2023-03-29T01:04:08.516Z
publishedAt: 2023-03-29T01:04:08.516Z
firstPublishedAt: 2018-03-28T23:00:56.209Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-com-alignet
legacySlug: configurar-pagos-com-alignet
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En la plataforma VTEX, es posible configurar el [subadquirente](/es/tutorial/que-es-un-subadquirente) Alignet para recibir pagos en su tienda. En esta modalidad, el cliente escoge el __medio de pago__ Alignet y se redirige a la autenticación en el ambiente del subadquirente.

Para realizar la configuración, siga los pasos abajo:

## Configurar la afiliación de gateway Alignet
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Alignet__.
4. En el campo __Acquirer__, elija el adquirente que se utilizará en la integración.
5. Rellene los campos de registro con los datos proporcionados por Alignet (campos _Código Adquirente_, _CodigoComercio_, _CodigoMall_, _CodigoTerminal_ _ChavePrivadaAssinatura_, _ChavePrivadaCriptografia_, _ChavePublicaAssinaturaAlignet_ y _ChavePublicaCriptografiaAlignet_).
6. En el campo __CodigoMoeda__, rellene con el código [ISO 4217](https://es.wikipedia.org/wiki/ISO_4217) de la moneda que se utilizará en los pagos.
7. En __Idioma__ ("Lengua"), elija entre español e inglés.
8. En el campo __Vector__, rellene la secuencia de hasta 16 caracteres (sólo letras y números) generada por su tienda.
9. Haga clic en __Guardar__.

## Configurar la condición de pago Alignet
1. En los __Configuración__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __Alignet__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si su tienda tiene un antifraude configurado, usted puede activarlo marcando la casilla __Usar Antifraude__.
6. Si lo desea, también puede añadir una [condición especial de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, Alignet aparecerá en el checkout de su tienda como una opción de pago. Después de hacer clic en __Finalizar Compra__, su cliente será redirigido para autenticación en el ambiente de Alignet. 

Otra opción para habilitar esta condición de pago es utilizar el [conector Pay-me](/es/tutorial/configurar-gateway-pay-me).
