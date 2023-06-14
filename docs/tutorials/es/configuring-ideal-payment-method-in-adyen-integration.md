---
title: 'Configurar el medio de pago iDEAL en la integración con Adyen'
id: 6EY1uvOVcomIFgMv81FAub
status: PUBLISHED
createdAt: 2021-05-06T19:28:42.490Z
updatedAt: 2021-05-07T17:05:47.949Z
publishedAt: 2021-05-07T17:05:47.949Z
firstPublishedAt: 2021-05-07T14:02:07.647Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-el-medio-de-pago-ideal-en-la-integracion-con-adyen
locale: es
legacySlug: configurar-el-medio-de-pago-ideal-en-la-integracion-con-adyen
subcategory: 
---

__iDEAL__ es un medio de pago en línea disponible solo para los clientes de los Países Bajos, y que permite a los consumidores realizar pagos directamente desde su propio banco.

En este tutorial, podrá consultar los pasos para configurarlo en su tienda a través de la integración con [Adyen](https://help.vtex.com/es/tutorial/how-to-configure-the-adyen-gateway-on-vtex--tutorials_2337).

<div class="alert alert-danger">
  <div>Por el momento, <b>Adyen</b> es el único partner que acepta pagos con iDEAL. Por lo tanto, debe ponerse en contacto con Adyen para saber si iDEAL está disponible en su localidad.
<p>Si lo está, consulte el artículo <a href="https://help.vtex.com/es/tutorial/how-to-configure-the-adyen-gateway-on-vtex--tutorials_2337">Configurar el gateway Adyen en VTEX</a> y configure la afiliación en su tienda.
  </div>

1. Inicie sesión en el _Admin_ VTEX. 
2. Haga clic en __Pagos__ > __Configuración__. 
3. Acceda a __Planes de pago__ y haga clic en el botón verde «__+__». 
4. Haga clic en la opción __iDEAL__. 
5. En la parte superior de la página, rellene el campo __Nombre de la Regla__ con el nombre que desee utilizar para identificar la condición de pago. 
6. Abajo, en __Status__, cambie a __Activo__. 
7. En __Proceso con la afiliación__, Adyen ya estará definido. 
8. Si tiene una solución antifraude contratada, haga clic en la opción __Usando Antifraude__ para activarla. 

Si desea crear __condiciones especiales__ para este medio de pago, acceda a la documentación [Configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condicoes-especiais--tutorials_456) para obtener más información y detalles de los pasos. Si prefiere no crear ninguna condición, haga clic en __Guardar__ para completar la configuración.

Después de completar los pasos realizados, iDEAL se habrá instalado correctamente en su tienda.

