---
title: 'Configurar el adquirente Pagar.me para el inStore'
id: 6vPPMU01zS2CgEm2aLl12C
status: DRAFT
createdAt: 2020-03-04T20:23:52.210Z
updatedAt: 2022-09-05T22:21:14.647Z
publishedAt: 
firstPublishedAt: 2020-03-11T23:52:14.271Z
contentType: trackArticle
productTeam: Financial
slug: configurar-el-adquirente-pagar-me-para-el-instore
locale: es
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugES: instore-pagos
---

Para configurar Pagar.me como adquirente de pagos a través de inStore, sigue los pasos a continuación.

1. Accede al Admin.
2. Haz clic en _Pagos_.
3. Luego, haz clic en __Configuración__.
4. En la pestaña __Afiliaciones de gateway__, haz clic en el botón `+`.
5. Haz clic en el conector __inStore__.
6. Completa los siguientes campos:
   - __Merchant Name__: nombre que el usuario creará para la afiliación.
   - __External Reference__: código de la tienda. Campo opcional.
   - __Corporate Document__: nro. de registro de persona jurídica del cliente. Campo opcional.
   - __Acquirer__: adquirente que procesará los pagos. Selecciona la opción __pagarme__.
   - __Tipo de parcelamento (Tipo de cuotas)__: define si los intereses de las cuotas serán responsabilidad de la administradora de la tarjeta de crédito, del administrador de la tienda o del banco.
   - __API Key__: ingresa la información de tu clave secreta proporcionada por Pagar.me.
   - __Encryption Key__: ingresa la información de tu clave pública proporcionada por Pagar.me.
   - __Formato__: corresponde al formato de los mensajes aceptados por la máquina de tarjeta de crédito. Selecciona la opción __Default__.
7. Para terminar, haz clic en el botón `Guardar`.

Después de esto, debes configurar las __Condiciones de pago__. Haz clic en `SIGUIENTE` para leer los artículos de esta serie que explican cómo configurar las condiciones de pago de débito y crédito.
