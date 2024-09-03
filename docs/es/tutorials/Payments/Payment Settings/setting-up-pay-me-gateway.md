---
title: 'Configurar gateway Pay-me'
id: 34IXQJGJdea666aiOA8y8S
status: ARCHIVED
createdAt: 2018-03-28T19:01:07.670Z
updatedAt: 2022-12-23T20:40:43.255Z
publishedAt: 
firstPublishedAt: 2018-03-28T22:58:57.093Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-pay-me
locale: es
legacySlug: configurar-gateway-pay-me
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Desarrollada por Alignet, Pay-me es una solución de pago que tiene varias funcionalidades. En la plataforma VTEX, ella actúa exclusivamente como [gateway](/es/tutorial/que-es-un-gateway-de-pagos) para procesar la __condición de pago__ Alignet (que también tiene un conector del mismo nombre para realizar esa función).

Para habilitar los pagos con Alignet, mediante el gateway Pay-me, siga los pasos abajo:

## Configurar la afiliación de gateway Pay-me
1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuraciones__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __Payme__.
5. Rellene los campos de registro con los datos proporcionados por Alignet (campos _Código de adquirente_, _Código de Comercio_, _Password_, _PrivateKey Comercio_ y _PublicKey Alignet_).
6. En el campo __Moneda__, seleccione una de las monedas que su tienda puede procesar por el gateway.
7. En __Idioma__, elija entre español e inglés.
8. Haga clic en __Guardar__.

## Configurar la condición de pago Alignet
1. Dentro de la __Configuración__ del módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Haga clic en el medio de pago __Alignet__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. Si su tienda tiene un antifraude configurado, usted puede activarlo marcando la casilla __Usar Antifraude__.
6. Si lo desea, también puede añadir una [condición especial de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados arriba, Alignet aparecerá en el checkout de su tienda como una opción de pago. Después de hacer clic en __Finalizar Compra__, su cliente será redirigido para autenticación en el ambiente de Alignet. Otra opción para habilitar esta condición de pago es utilizar el conector [Alignet](/es/tutorial/configurar-pagos-con-alignet).
