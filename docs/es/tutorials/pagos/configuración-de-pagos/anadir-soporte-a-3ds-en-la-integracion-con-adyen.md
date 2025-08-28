---
title: 'Añadir soporte a 3DS en la integración con Adyen'
id: 3DNZeC9qJaC2GMIw4mawYk
status: PUBLISHED
createdAt: 2017-07-25T18:20:05.681Z
updatedAt: 2024-06-13T21:44:14.602Z
publishedAt: 2024-06-13T21:44:14.602Z
firstPublishedAt: 2017-08-01T16:58:04.306Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: add-3ds-support-to-the-integration-with-adyen
legacySlug: anadir-soporte-a-3ds-en-la-integracion-con-adyen
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Para añadir soporte para [3DS](https://help.vtex.com/es/tutorial/what-is-3d-secure--1eWPdop8mECuaEomQgkAIa) (solución de seguridad que permite la autenticación del comprador con el banco emisor) en la integración de Adyen, primero tiene que configurar el conector. Para configurarlo, siga las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Acceda a la pestaña __Afiliaciones__.
3. Haga clic en la card de afiliación de Adyen.
4. Vaya a Live __Endpoint URL Prefix__ y siga este [tutorial](https://help.adyen.com/es_ES/knowledge/ecommerce-integrations/integrations-basics/how-can-i-find-the-endpoint-url-for-my-live-account) de Adyen para obtener la información.
5. Seleccione la opción __Sí__ en el campo __¿Activar 3D Secure?__.
6. Elija el modo de 3DS (3DS, 3DS2 o 3DS2 Data only) acordado cuando se creó la asociación comercial con Adyen.
7. Termine de rellenar los otros campos siguiendo [este tutorial](https://help.vtex.com/es/tutorial/configurar-pagos-con-adyenv3--7xAz67E2Eg63LWCQNjVdwv).
8. Haga clic en __Salvar__ para guardar los cambios.

### Habilitar las respuestas de 3DS

Después de configurar el conector en VTEX, tiene que acceder al panel de Adyen para habilitar el 3DS en las transacciones de su tienda.

> ⚠️ Se recomienda que primero realice la configuración en el entorno Test. Solo después de realizar las validaciones adecuadas, acceda al entorno **Live** para la configuración final.

1. Haga clic en los enlaces a continuación para acceder al entorno Test y Live de Adyen.

      - __Entorno Test de Adyen:__ https://ca-test.adyen.com/ca/ca/login.shtml
      - __Entorno Live de Adyen:__ https://ca-live.adyen.com/ca/ca/login.shtml

2. Haga clic en __Risk__ y luego en __Dynamic 3D Secure__.
3. Haga clic en __Create new rule__ para crear una nueva regla de activación de 3DS y siga [esta documentación de Adyen](https://docs.adyen.com/risk-management/dynamic-3d-secure) para ver más detalles.
4. Después de crear la regla, haga clic en __Save__.

Ahora el módulo de seguridad 3DS quedará configurado y listo para utilizarlo con Adyen.
