---
title: 'Flujo de autenticación 3DS2: acepte pagos en línea de forma más segura'
id: 6UdTjjVU1AcEQ2aE3Ftxsl
status: PUBLISHED
createdAt: 2020-12-21T21:03:33.860Z
updatedAt: 2021-05-20T17:06:23.794Z
publishedAt: 2021-05-20T17:06:23.794Z
contentType: updates
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: 2020-12-21-3ds2-authentication-flow-accept-online-payments-more-securely-1
locale: es
legacySlug: flujo-de-autenticacion-3ds2-acepte-pagos-en-linea-de-forma-mas-segura
announcementImageID: 'undefined'
announcementSynopsisES: 'El nuevo protocolo implementa un proceso de verificación de datos del cliente final más robusto y moderno'
---

3DS2 es un flujo de autenticación de pagos que reduce la posibilidad de fraude debido a un proceso de verificación más robusto.

El flujo 3DS2 trae un nuevo protocolo de autenticación: el sistema realiza varias secuencias de verificación de datos entre procesadores de pagos y bancos para garantizar que la información del consumidor final es verídica. 

### ¿Qué cambió?

En el flujo ofrecido hasta entonces, el usuario era redirigido a la página del banco al cerrar la compra en SmartCheckout. 

Allí, el usuario necesitaba instalar plugins y extensiones para lograr confirmar sus datos, lo que generaba fricción en el flujo de pago.

Ahora, el flujo 3D2S puede aplicar tres posibles procesos de autenticación, sin que el consumidor final sea redirigido desde la página de cierre de compra.

Estos son:
- Contraseña;
- Biometría;
- Código a través de SMS o correo electrónico. 

De este modo, cada banco emisor decide cuál verificación enviará al consumidor final.  

### Principales beneficios 

- __Mayor seguridad en la compra__: verificación de datos más robusta.
- __Flujo sin redireccionamiento__: el usuario permanece en el SmartCheckout durante el pago, es decir, no sale del ambiente de la tienda.
- __Impacto positivo en las conversiones de ventas__: menos fricción sin redireccionamiento, más seguridad con las autenticaciones, proporcionando una mejor experiencia al usuario y una mayor tasa de aprobación por el grado de confianza generado.
- __Sigue las normas para el comercio electrónico europeo__: reglamento PSD2, que exige que los pagos sean autentificados.
- __Liability Shift__: exención de chargeback en casos de fraude, de acuerdo con los criterios adicionales de las redes de las tarjetas y bancos emisores.

###  ¿Cómo funciona?

El flujo 3DS2 estará inicialmente disponible para los conectores CieloV3, Adyen y Redsýs. Por lo tanto, corresponde a cada cliente VTEX contactar a ambas adquirentes para confirmar su habilitación.

Además, el cliente debe [abrir un ticket para el soporte](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex) VTEX y solicitar la instalación de la función.  

En el mismo ticket, también es necessario decir cuales los conectores y las cuentas que deben ser habilitadas para el flujo 3DS2.

Para saber cómo habilitar el flujo con Adyen, lea este [artículo](/es/docs/tutorials/anadir-soporte-a-3ds-en-la-integracion-con-adyen). Para hacer el mismo proceso con CieloV3, consulte este [tutorial](/es/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu).
