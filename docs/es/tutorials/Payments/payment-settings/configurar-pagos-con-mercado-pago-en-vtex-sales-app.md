---
title: 'Configurar pagos con Mercado Pago en VTEX Sales App'
id: 51fgSydGGOnlBdtwTfE8BE
status: PUBLISHED
createdAt: 2024-08-26T12:36:03.781Z
updatedAt: 2024-09-24T13:53:43.655Z
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

En VTEX, es posible integrarse con el proveedor de pago MercadoPagoV2. A través de este conector, su tienda puede ofrecer transacciones de pago en tiendas físicas (VTEX Sales App), utilizando puntos de venta (POS). Para más información acceda [¿Qué es VTEX Sales App?](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

<div class="alert alert-info">
Para utilizar el proveedor MercadoPagoV2 en su tienda a través de otros canales de venta en línea (excepto VTEX Sales App), visite <a href="https://help.vtex.com/es/tutorial/configurar-el-subadquirente-mercadopagov2--1y6k8lCSzJYfPs2yObNFo4">Configurar pago con MercadoPagoV2</a>.
</div>

Para utilizar el proveedor MercadoPagoV2 en la VTEX Sales App, es necesario:

- [Configurar claves en el entorno Mercado Pago](#configurar-claves-en-el-entorno-de-mercado-pago)
- [Configurar el conector MercadoPagoV2 (VTEX Sales App) en VTEX](#configurar-el-conector-mercadopagov2-vtex-sales-app-en-vtex)
- [Instalar las aplicaciones Mercado Pago Payment y Mercado Pago Instore en VTEX](#instalar-aplicaciones-mercado-pago-payment-y-mercado-pago-instore-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

<div class="alert alert-warning">
Las configuraciones realizadas en un entorno externo a VTEX puede interrumpirse o modificarse sin previo aviso. Consulta tu cuenta Mercado Pago para obtener información actualizada.
</div>

## Configurar claves en el entorno de Mercado Pago

Los siguientes pasos describen las configuraciones mínimas a realizar para que el conector MercadoPagoV2 quede correctamente configurado. Otras configuraciones personalizadas que se apliquen a los clientes, habilitando métodos de pago específicos o características particulares de la plataforma, deberán realizarse de acuerdo con [documentación de Mercado Pago](https://www.mercadopago.com.br/developers/es/docs/vtex/integration/create-gateway-affiliation-v2).

<blockquote><ui>1. Accede al <a href="https://www.mercadopago.com.br/developers/es">portal para desarrolladores de Mercado Pago</a> para crear una nueva cuenta.</ui>

<blockquote><ui><div class="alert alert-warning">
El portal para desarrolladores de Mercado Pago permite al usuario obtener información de todas las claves necesarias para configurar la conexión entre VTEX y Mercado Pago. Recomendamos que el procedimiento a continuación lo realice un usuario que ya tenga acceso a las demás claves de su cuenta de Mercado Pago.
  </div></blockquote>

<blockquote><ui>2. Después de iniciar sesión, acceda al <a href="https://www.mercadopago.com.br/developers/es/docs/vtex/additional-content/your-integrations/credentials">documentación de credenciales</a> de Mercado Pago para verificar cómo obtener la <b>Clave de aplicación
</b> y <b>Token de aplicación</b> que se utilizarán en la configuración de MercadoPagoV2 en VTEX.</ui> 

## Configurar el conector MercadoPagoV2 (VTEX Sales App) en VTEX

<blockquote><ui>1. En el Admin VTEX, accede a <b>Configuración de la tienda > Pago > Proveedores</b>, o escribe <b>Proveedores</b> en la barra de búsqueda en la parte superior de la página.</ui>

<blockquote><ui>2. En la pantalla de proveedores, haga clic en el botón <b>Nuevo proveedor</b>.</ui>

<blockquote><ui>3. Escriba el nombre <b>MercadoPagoV2</b> en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<blockquote><ui>4. En <b>Clave de aplicación</b>, ingresa el nombre de tu <b>Public Key</b> ubicada en el portal para desarrolladores de Mercado Pago.</ui>

<blockquote><ui>5. En <b>Token de aplicación</b>, ingresa la clave <b>Access Token</b> ubicada en el portal para desarrolladores de Mercado Pago.</ui>  

<blockquote><ui>6. Si desea modificar el nombre de identificación que se mostrará para el proveedor AdyenV3 en la pantalla VTEX Admin, ingrese la información en el campo <b>Nombre</b> en <b>Información general</b>.</ui>

<blockquote><ui>7. En <b>Control de pago</b>, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en <b>Activar modo de prueba</b>.</ui>

<blockquote><ui>8. En <b>Periodo de vencimiento del ticket</b>, definir el valor (en días hábiles) para que caduque la orden de compra. Si el cliente realiza el pago fuera de plazo, el monto será depositado en su cuenta de Mercado Pago.</ui>

<blockquote><ui>9. En <b>Nombre para resúmenes</b>, ingrese el nombre de su empresa. Esta información estará descrita en la factura de la tarjeta del cliente.</ui>

<blockquote><ui>10. En <b>Cuotas máximas</b>, escoja el número máximo de cuotas disponibles para realizar el pago. Con Mercado Pago podrás fraccionar compras en hasta 12 cuotas.</ui>  

<blockquote><ui>11. En <b>Soporte 3DS 2.0</b>, seleccione "Sí" si desea habilitar la validación de seguridad 3DS. Para que este protocolo funcione correctamente, asegúrese de que la <b>Mercado Pago Payment app</b> se instalará en su tienda y que el campo <b>Binario</b> (Paso 15), esté seleccionado como "No".</ui>  

<blockquote><ui>12. En <b>Categoría principal de la tienda</b>, elija la categoría de la industria de su tienda.</ui>

<blockquote><ui>13. En <b>Categoría (tienda o producto) compartida por transacción</b>, seleccione la opción <b>Categoría de la tienda</b>.</ui> 

<blockquote><ui>14. En la opción <b>Reembolso automático / manual</b>, elija si se reembolsará al cliente automáticamente o si quieres retener el importe pagado para que el cliente pueda utilizarlo en futuras compras en la misma tienda.</ui>   
<blockquote><ui>15. En <b>Binario</b>, indicar si la tienda debe aceptar pagos pendientes. Seleccionar "No" indica que la transacción estará pendiente por 48 horas o hasta que se realice el pago, y el inventario relacionado con esta compra será retirado por el mismo período de tiempo. Seleccionar "Sí" permite rechazar las transacciones y el stock se liberará automáticamente. Para utilizar la funcionalidad <b>Soporte 3DS 2.0</b> (Paso 11), el <b>Binario</b> debe estar configurado en "No".</ui>     

<blockquote><ui>16. En <b>Métodos de pago excluidos</b>, describa los métodos de pago que no desea ofrecer a través de Checkout Pro; obtenga más información en <a href="https://www.mercadopago.com.br/developers/es/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods">Excluir tipos y métodos de pago</a>. Si eliges dejar este campo en blanco, todos los métodos de pago disponibles de MercadoPagoV2 podrán ser utilizados en tu tienda.</ui>   

<blockquote><ui>17. En <b>Tipos de pago excluidos</b>, describa las marcas específicas de crédito, débito y boleto (Visa, Mastercard, entre otras) que no desea ofrecer a través de Checkout Pro, obtenga más información en <a href="https://www.mercadopago.com.br/developers/es/docs/vtex/payments-configuration/checkout-pro/exclude-payment-types-methods">Excluir tipos y métodos de pago</a>. Si eliges dejar este campo en blanco, todos los tipos de pago disponibles en MercadoPagoV2 podrán ser utilizados en tu tienda.</ui>   

<blockquote><ui>18. En <b>Modo de procesamiento</b>, seleccione la opción <b>Aggregator</b>.</ui>

<blockquote><ui>19. En <b>Integrator ID</b>, indicar el código identificador del desarrollador o agencia que realiza la configuración de Mercado Pago.</ui>  

<blockquote><ui>20. El campo <b>Moneda</b> identifica la moneda utilizada para el pago en la tienda. No es necesario llenarlo.</ui>      

<blockquote><ui>21. El campo <b>Merchant Account ID</b> identifica la cuenta comercial. No es necesario llenarlo.</ui>     

<blockquote><ui>22. En <b>Plazo de captura de pagos aprobado</b>, seleccione la fecha límite deseada para la captura de pago.</ui>     

<blockquote><ui>23. En <b>Fecha para cancelar compras de un carrito abandonado</b>, ingrese el intervalo de tiempo que se debe esperar hasta que los métodos de pago habilitados no estén disponibles para realizar la compra.</ui>    
<blockquote><ui>24. Haga clic en <b>Guardar</b>.</ui>

## Instalar aplicaciones Mercado Pago Payment y Mercado Pago Instore en VTEX

<div class="alert alert-warning">
  Antes de instalar la app <b>mercadopago.mercadopago-app</b>, confirma con el equipo de soporte de Mercado Pago la versión actual de la aplicación.
  </div>

1. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecute el comando `vtex login nombredecuenta` para iniciar sesión en su cuenta.
2. Instale la aplicación **mercadopago.mercadopago-app** usando el comando `vtex install mercadopago.mercadopago-app@{{current-app-version}}`. Se debe reemplazar la información {{current-app-version}} dcon la versión actual de la aplicación, por ejemplo: `vtex install mercadopago.mercadopago-app@2.3.15`.
3. Instale la aplicación **mercadopago.instore** usando el comando `vtex install mercadopago.instore`.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Venda Direta Debito** o **Venda Direta Credito**.
4. En **Procesar con proveedor**, seleccione el conector previamente configurado.
5. Active la condición en el campo **Status**.
6. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
8. Haga clic en `Guardar`.

Tras seguir los pasos indicados, el proveedor MercadoPagoV2 puede tardar hasta 10 minutos para aparecer como opción de pago en la App Ventas VTEX de su tienda.
