---
title: "‘Guardar tarjeta’ no funciona al usar la autenticación 3DS"
id: 20INELA5LVhY1XqFWG7047
status: PUBLISHED
createdAt: 2021-06-15T17:10:05.803Z
updatedAt: 2024-08-20T19:15:09.444Z
publishedAt: 2024-08-20T19:15:09.444Z
firstPublishedAt: 2021-06-15T18:33:22.941Z
contentType: knownIssue
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
tag: Order Management
slugEN: guardar-tarjeta-no-funciona-al-usar-la-autenticacion-3ds
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al intentar guardar una tarjeta en [My Account](https://help.vtex.com/es/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh) de tiendas que utilizan la autenticación [3DS](https://help.vtex.com/es/tutorial/what-is-3d-secure--1eWPdop8mECuaEomQgkAIa) (V1 o V2) en sus adquirentes, se genera un error y se muestra el mensaje Se produjo un error al intentar registrar la tarjeta.

Este error se produce si la tarjeta no es validada por el sistema. Para validarla, debe ser asociada a una [condición de pago](https://help.vtex.com/es/tutorial/how-to-configure-payment-conditions--tutorials_455). Al asociar una condición de pago a la tarjeta, se genera una transacción de USD 1,50 (que posteriormente es cancelada) y se valida la tarjeta.  
Cuando se genera esta transacción de USD 1,50, si la tienda utiliza [3DS](https://help.vtex.com/es/tutorial/what-is-3d-secure--1eWPdop8mECuaEomQgkAIa) en sus adquirentes, se activará el flujo de autenticación y se solicitará la validación de la tarjeta. En esta etapa, la validación no podrá completarse porque no es una compra de producto. Esto impide una etapa adicional de autenticación del 3DS, conocida como challenge, para completar el proceso. Por este motivo, se muestra el error mencionado anteriormente cuando se intenta guardar una tarjeta.

## Simulación

En caso de que desee simular las etapas que dirigen a este error, realice el siguiente paso a paso: 

1. Acceda al __Admin__ VTEX.
2. Configure un [adquirente](https://help.vtex.com/es/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E) para efectuar transacciones con 3DS (en la V1 esta configuración se encuentra al lado del adquirente. Para V2, vea más detalles en [Configurar flujo de autenticación 3DS2](https://help.vtex.com/es/tutorial/setting-up-3ds-2-authentication-flow--58XMn5LOA6fwrSkoDoAsg2)).
3. Configure una tarjeta de crédito (Master, Visa, American Express, etc.) como medio de pago que será procesado por el adquirente en cuestión. 
4. Acceda a la página inicial de su tienda.
5. Inicie sesión con *email* y contraseña.
6. Haga clic en __Mi Cuenta__.
7. Acceda la pestaña __Tarjetas de crédito__.
8. Haga clic en __Añadir tarjeta de crédito__.
9. Complete todos los campos y haga clic en __Guardar tarjeta__.
10. Se generará un error después de ese proceso.

## Workaround

Para solucionar este error, puede crear una condición de pago para la tarjeta de crédito vinculada a un adquirente que no esté utilizando la autenticación 3DS (V1 o V2).

