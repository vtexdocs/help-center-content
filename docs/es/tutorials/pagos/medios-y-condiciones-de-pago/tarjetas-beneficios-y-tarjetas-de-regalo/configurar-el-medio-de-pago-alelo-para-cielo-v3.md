---
title: "Configurar el medio de pago Alelo para Cielo V3"
id: 4fpnddmyMOAD6F5ixtdmY8
status: PUBLISHED
createdAt: 2020-06-30T13:26:40.843Z
updatedAt: 2023-03-26T22:07:43.484Z
publishedAt: 2023-03-26T22:07:43.484Z
firstPublishedAt: 2020-06-30T14:57:57.023Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: set-up-alelo-payment-method-for-cielo-v3
legacySlug: configurar-el-medio-de-pago-alelo-para-cielo-v3
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En este artículo, explicaremos cómo habilitar el vale de alimentación Alelo como medio de pago en el Checkout.

> ℹ️ El vale de alimentación Alelo es un medio de pago aceptado apenas entre clientes brasileños.

Actualmente, en VTEX, Cielo es el adquirente que acepta a Alelo como medio de pago. Por lo tanto, el primer paso es habilitar este adquirente como afiliación de gateway en su tienda. Puede consultar el tutorial completo sobre cómo hacer esta configuración [aquí](/es/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu).

Luego, puede configurar la condición de pago de Alelo.

Como toda condición de pago, la configuración de Alelo también permite incluir condiciones especiales. Sin embargo, estos criterios son opcionales y su ausencia no impide el buen funcionamiento del vale de alimentación.

Para más detalles, puede consultar el tutorial sobre [cómo configurar cada una de las condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).

Ahora, siga las instrucciones:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Verifique que se encuentre en la pestaña **Planes de pago**.
3. Haga clic en el botón verde **“+”**.
4. En la sección “Otro”, haga clic en el botón **“Alelo”**.
5. En la parte superior de la página, escriba un **nombre** para esa regla en el campo en blanco.
6. Haga clic en el botón **“Status”** para activar la condición de pago.
7. Si es necesario, seleccione la opción **“Usar Antifraude”**.
8. En el lado derecho de la pantalla, establezca las **condiciones especiales** de pago.
9. Haga clic en el botón azul **“Guardar”** para terminar.

> ℹ️ Recuerde que las condiciones especiales de pago tardan unos 10 minutos en aplicarse en el Checkout.
