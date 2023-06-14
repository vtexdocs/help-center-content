---
title: Save user data opt-in en el Checkout: utilizar la información personal y de pago guardada para futuras compras
id: ZZQyqkBLort425Mer2E7N
status: PUBLISHED
createdAt: 2022-06-21T11:47:21.760Z
updatedAt: 2022-10-21T16:44:56.661Z
publishedAt: 2022-10-21T16:44:56.661Z
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: save-user-opt-in-utilizando-informacion-guardada-para-compras-futuras
legacySlug: save-user-opt-in-utilizando-informacion-guardada-para-compras-futuras
announcementImageID: 
announcementSynopsisES: Permite a tus clientes elegir si quieren guardar sus datos para utilizarlos en futuras compras.
---

En cumplimiento de las normativas de preservación y protección de los datos de los consumidores, como el GDPR (Reglamento General de Protección de Datos en Europa) y la LGPD (Ley General de Protección de Datos) en Brasil, VTEX desarrolló la funcionalidad **Save user data opt-in**. A través de esta solución, el administrador de la tienda permite al cliente tomar la decisión de mantener sus datos guardados o no en la tienda en la que está realizando la compra.

## ¿Qué cambió?

Anteriormente, tras el registro en la tienda o la primera compra, los datos del cliente se guardaban automáticamente en la tienda, sin necesidad de ningún tipo de confirmación.

A partir de ahora, dos casillas de verificación en la pantalla de pago permitirán al usuario indicar si quiere que su información personal y de pago se almacene y se reutilice para futuras compras. De este modo, se reducirá el tiempo que tarda el cliente en realizar la compra. 

![ Save user data opt-in ES](//images.ctfassets.net/alneenqid6w5/6NGmOzVPMDNlcptCwaqTsM/503e29a5bdf5749d0d44bd525b96117e/Save_user_data_-_ES.PNG)

Más información en [SmartCheckout - Rellenado automático de los datos del cliente](https://help.vtex.com/es/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#).

## ¿Qué se necesita hacer?

Para activar la funcionalidad **Save user data opt-in** en tu tienda, debes modificar el parámetro `savePersonalDataAsOptIn` en el objeto `orderForm` del Checkout. Obtén más información en [Save user data opt-in in the checkout](https://developers.vtex.com/vtex-rest-api/docs/enable-the-save-user-data-opt-in).
