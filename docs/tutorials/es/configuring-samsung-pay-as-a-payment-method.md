---
title: Configurar Samsung Pay como medio de pago 
id: 5Yj9rgzOCVYuGmAumQlfpP
status: PUBLISHED
createdAt: 2020-08-26T13:40:16.356Z
updatedAt: 2023-03-29T01:17:07.597Z
publishedAt: 2023-03-29T01:17:07.597Z
firstPublishedAt: 2020-08-26T16:30:52.180Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-samsung-pay-como-medio-de-pago
legacySlug: configurar-samsung-pay-como-medio-de-pago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En este tutorial, enseñaremos cómo configurar una cartera digital Samsung Pay como un medio de pago. 

El primer paso es configurar el conector de Adyen —afiliación de gateway que procesa los pagos realizados a través de Samsung Pay— en su tienda. Usted puede ver el paso a paso completo para realizar esa acción [aquí](https://help.vtex.com/es/tutorial/como-configurar-o-gateway-adyen-na-vtex--tutorials_2337?locale=es "aquí").

A continuación, configure el medio de pago en cuestión. 

Siga las instrucciones:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Asegúrese de estar en la pestaña __Planes de pago__.
3. Al lado de la barra de búsqueda, haga clic en el __botón verde “+”__.
4. En la sección “Otro”, haga clic en la opción __Samsung Pay__.
5. Al inicio de la página, defina un nombre en el campo __Nombre de la Regla__.
6. Debajo, haga clic en el botón __Status__ para activar la regla.
7. En Proceso con la afiliación, seleccione la opción __Adyen__
8. Si es necesario, seleccione el servicio de __Antifraude__ que será utilizado.

De esa manera, usted habrá realizado la configuración más básica del medio de pago. 

Sin embargo, aún existe la opción de __definir las condiciones especiales de pago__, estas son reglas específicas para Samsung Pay que solo se aplican en determinados contextos definidos por periodo, país, política comercial (canal de ventas), condición comercial o nombre de una cuenta. 

Solamente necesita hacer clic en el botón blanco __“Condición Especial”__ y seleccionar el contexto que desea especificar. Es importante recordar que es posible definir más de una condición especial por medio de pago. Para saber más detalles, revise el [tutorial sobre cómo configurar cada una de las condiciones especiales de pago](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456?locale=es "tutorial sobre cómo configurar cada una de las condiciones especiales de pago").

Si eso no es necesario, finalice la configuración haciendo clic en el botón __“Salva”__ para guardar los ajustes.
