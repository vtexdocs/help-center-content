---
title: ' Configurar el medio de pago Alelo para Cielo V3'
id: 4fpnddmyMOAD6F5ixtdmY8
status: PUBLISHED
createdAt: 2020-06-30T13:26:40.843Z
updatedAt: 2023-03-26T22:07:43.484Z
publishedAt: 2023-03-26T22:07:43.484Z
firstPublishedAt: 2020-06-30T14:57:57.023Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-el-medio-de-pago-alelo-para-cielo-v3
legacySlug: configurar-el-medio-de-pago-alelo-para-cielo-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En este artículo, explicaremos cómo habilitar el vale de alimentación Alelo como medio de pago en el Checkout.

<div class="alert alert-info">
<strong>Atención</strong>: el vale de alimentación Alelo es un medio de pago aceptado apenas entre clientes brasileños.
</div>

Actualmente, en VTEX, Cielo es el adquirente que acepta a Alelo como medio de pago. Por lo tanto, el primer paso es habilitar este adquirente como afiliación de gateway en su tienda. Puede consultar el tutorial completo sobre cómo hacer esta configuración [aquí](https://help.vtex.com/es/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu?locale=es "aquí"). 

Luego, puede configurar la condición de pago de Alelo.

Como toda condición de pago, la configuración de Alelo también permite incluir condiciones especiales. Sin embargo, estos criterios son opcionales y su ausencia no impide el buen funcionamiento del vale de alimentación. 

Para más detalles, puede consultar el tutorial sobre [cómo configurar cada una de las condiciones especiales de pago](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456?locale=es "cómo configurar cada una de las condiciones especiales de pago"). 

Ahora, siga las instrucciones:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Verifique que se encuentre en la pestaña __Planes de pago__.
3. Haga clic en el botón verde __“+”__.
4. En la sección “Otro”, haga clic en el botón __“Alelo”__.
5. En la parte superior de la página, escriba un __nombre__ para esa regla en el campo en blanco.
6. Haga clic en el botón __“Status”__ para activar la condición de pago.
7. Si es necesario, seleccione la opción __“Usar Antifraude”__.
8. En el lado derecho de la pantalla, establezca las __condiciones especiales__ de pago.
9. Haga clic en el botón azul __“Guardar”__ para terminar.

<div class="alert alert-info">
<strong>Atención</strong>: recuerde que las condiciones especiales de pago tardan unos 10 minutos en aplicarse en el Checkout.
</div>
