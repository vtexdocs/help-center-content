---
title: 'Configurar pagos con Mercado Pago en VTEX Sales App'
id: 51fgSydGGOnlBdtwTfE8BE
status: PUBLISHED
createdAt: 2024-08-26T12:36:03.781Z
updatedAt: 2026-02-02T13:53:43.655Z
publishedAt: 2024-09-24T13:53:43.655Z
firstPublishedAt: 2024-08-26T18:37:41.187Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-mercado-pago-in-vtex-sales-app
legacySlug: configurar-pagos-con-mercado-pago-en-vtex-sales-app
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible integrarse con el proveedor de pago MercadoPagoV2. A través de este conector, su tienda puede ofrecer transacciones de pago en tiendas físicas vía **VTEX Sales App**, utilizando puntos de venta (POS). Para más información acceda [¿Qué es VTEX Sales App?](https://help.vtex.com/es/docs/tracks/vtex-sales-app-primeros-pasos-y-configuracion).

> ℹ️ Para utilizar el proveedor MercadoPagoV2 en su tienda a través de otros canales de venta en línea (excepto **VTEX Sales App**), visite [Configurar pago con MercadoPagoV2](https://help.vtex.com/es/docs/tutorials/configurar-el-subadquirente-mercadopagov2).

Para utilizar el proveedor MercadoPagoV2 en la **VTEX Sales App**, es necesario:

- [Configurar claves en el entorno Mercado Pago](#configurar-claves-en-el-entorno-de-mercado-pago)
- [Configurar el conector MercadoPagoV2 (VTEX Sales App) en VTEX](#configurar-el-conector-mercadopagov2-vtex-sales-app-en-vtex)
- [Instalar las aplicaciones Mercado Pago Payment y Mercado Pago Instore en VTEX](#instalar-aplicaciones-mercado-pago-payment-y-mercado-pago-instore-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

> ⚠️ Las configuraciones realizadas en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Mercado Pago para obtener información actualizada.

## Configurar claves en el entorno de Mercado Pago

Los siguientes pasos describen las configuraciones mínimas a realizar para que el conector MercadoPagoV2 quede correctamente configurado. Otras configuraciones personalizadas que se apliquen a los clientes, habilitando métodos de pago específicos o características particulares de la plataforma, deberán realizarse de acuerdo con [documentación de Mercado Pago](https://www.mercadopago.com.br/developers/es/docs/vtex/create-application).

1. Accede al [portal para desarrolladores de Mercado Pago](https://www.mercadopago.com.br/developers/es) para crear una nueva cuenta.

    > ⚠️ El portal para desarrolladores de Mercado Pago permite al usuario obtener información de todas las claves necesarias para configurar la conexión entre VTEX y Mercado Pago. Recomendamos que el procedimiento a continuación lo realice un usuario que ya tenga acceso a las demás claves de su cuenta de Mercado Pago.

2. Después de iniciar sesión, acceda al [documentación de credenciales](https://www.mercadopago.com.br/developers/es/docs/vtex/additional-content/your-integrations/credentials) de Mercado Pago para verificar cómo obtener la **Clave de aplicación** y **Token de aplicación** que se utilizarán en la configuración de MercadoPagoV2 en VTEX. 

## Configurar el conector MercadoPagoV2 (VTEX Sales App) en VTEX

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón **Nuevo proveedor**.
3. Escriba el nombre **MercadoPagoV2** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Clave de aplicación**, ingresa el nombre de tu **Public Key** ubicada en el portal para desarrolladores de Mercado Pago.
5. En **Token de aplicación**, ingresa la clave **Access Token** ubicada en el portal para desarrolladores de Mercado Pago.
6. Si desea modificar el nombre de identificación que se mostrará para el proveedor AdyenV3 en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
7. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
8. En **Periodo de vencimiento del ticket**, definir el valor (en días hábiles) para que caduque la orden de compra. Si el cliente realiza el pago fuera de plazo, el monto será depositado en su cuenta de Mercado Pago.
9. En **Nombre para resúmenes**, ingrese el nombre de su empresa. Esta información estará descrita en la factura de la tarjeta del cliente.
10. En **Cuotas máximas**, escoja el número máximo de cuotas disponibles para realizar el pago. Con Mercado Pago podrás fraccionar compras en hasta 12 cuotas.
11. En **Soporte 3DS 2.0**, seleccione "Sí" si desea habilitar la validación de seguridad 3DS. Para que este protocolo funcione correctamente, asegúrese de que la **Mercado Pago Payment app** se instalará en su tienda y que el campo **Binario** (Paso 15), esté seleccionado como "No".
12. En **Categoría principal de la tienda**, elija la categoría de la industria de su tienda.
13. En **Categoría (tienda o producto) compartida por transacción**, seleccione la opción **Categoría de la tienda**.
14. En la opción **Reembolso automático / manual**, elija si se reembolsará al cliente automáticamente o si quieres retener el importe pagado para que el cliente pueda utilizarlo en futuras compras en la misma tienda.
15. En **Binario**, indicar si la tienda debe aceptar pagos pendientes. Seleccionar "No" indica que la transacción estará pendiente por 48 horas o hasta que se realice el pago, y el inventario relacionado con esta compra será retirado por el mismo período de tiempo. Seleccionar "Sí" permite rechazar las transacciones y el stock se liberará automáticamente. Para utilizar la funcionalidad **Soporte 3DS 2.0** (Paso 11), el **Binario** debe estar configurado en "No".
16. En **Métodos de pago excluidos**, describa los métodos de pago que no desea ofrecer a través de Checkout Pro; obtenga más información en [Excluir tipos y métodos de pago](https://www.mercadopago.com.br/developers/es/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Si eliges dejar este campo en blanco, todos los métodos de pago disponibles de MercadoPagoV2 podrán ser utilizados en tu tienda.
17. En **Tipos de pago excluidos**, describa las marcas específicas de crédito, débito y boleto (Visa, Mastercard, entre otras) que no desea ofrecer a través de Checkout Pro, obtenga más información en [Excluir tipos y métodos de pago](https://www.mercadopago.com.br/developers/es/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods). Si eliges dejar este campo en blanco, todos los tipos de pago disponibles en MercadoPagoV2 podrán ser utilizados en tu tienda.
18. En **Modo de procesamiento**, seleccione la opción **Aggregator**.
19. En **Integrator ID**, indicar el código identificador del desarrollador o agencia que realiza la configuración de Mercado Pago.
20. El campo **Moneda** identifica la moneda utilizada para el pago en la tienda. No es necesario llenarlo.
21. El campo **Merchant Account ID** identifica la cuenta comercial. No es necesario llenarlo.
22. En **Plazo de captura de pagos aprobado**, seleccione la fecha límite deseada para la captura de pago.
23. En **Fecha para cancelar compras de un carrito abandonado**, ingrese el intervalo de tiempo que se debe esperar hasta que los métodos de pago habilitados no estén disponibles para realizar la compra.
24. Haga clic en **Guardar**.

## Instalar aplicaciones Mercado Pago Payment y Mercado Pago Instore en VTEX

> ⚠️ Antes de instalar la app **mercadopago.mercadopago-app**, confirma con el equipo de soporte de Mercado Pago la versión actual de la aplicación.

1. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecute el comando `vtex login nombredecuenta` para iniciar sesión en su cuenta.
2. Instale la aplicación **mercadopago.mercadopago-app** usando el comando `vtex install mercadopago.mercadopago-app@{{current-app-version}}`. Se debe reemplazar la información {{current-app-version}} con la versión actual de la aplicación, por ejemplo: `vtex install mercadopago.mercadopago-app@2.3.15`.
3. Instale la aplicación **mercadopago.instore** usando el comando `vtex install mercadopago.instore`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Venda Direta Debito** o **Venda Direta Credito**.
4. En **Procesar con proveedor**, seleccione el conector previamente configurado.
5. Active la condición en el campo **Status**.
6. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/docs/tutorials/condiciones-especiales).
8. Haga clic en `Guardar`.

Tras seguir los pasos indicados, el proveedor MercadoPagoV2 puede tardar hasta 10 minutos para aparecer como opción de pago en el **VTEX Sales App** de su tienda.
