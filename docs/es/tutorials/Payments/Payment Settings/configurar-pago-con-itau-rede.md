---
title: 'Configurar pago con Itaú Rede'
id: 77BYOKxVzONWulAf8dTVSX
status: PUBLISHED
createdAt: 2024-04-18T15:03:32.890Z
updatedAt: 2024-12-13T22:40:46.028Z
publishedAt: 2024-12-13T22:40:46.028Z
firstPublishedAt: 2024-04-25T14:54:53.085Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-itau-rede
locale: es
legacySlug: configurar-pago-con-itau-rede
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Itaú Rede. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, debito, como, Mastercard, Visa, Hiper, Elo, Diners, Sorocred, American Express, Hipercard, JCB, Banescard, Cabal, Mais, Credz, y tarjetas co-branded.

Se requieren las siguientes acciones dependiendo del método de pago que quieras ofrecer en tu tienda:

- __Tarjetas de crédito, débito o co-branded__

   1. [Obtener credenciales en el Portal Rede](#obtener-credenciales-en-el-portal-rede)
   2. [Configurar Itaú Rede en VTEX](#configurar-itau-rede-en-vtex)
   3. [Configurar condición de pago con tarjeta](#configurar-condicion-de-pago-con-tarjeta) 

- __PIX__

   1. [Obtener credenciales en el Portal Rede](#obtener-credenciales-en-el-portal-rede)
   2. [Configurar Itaú Rede en VTEX](#configurar-itau-rede-en-vtex)
   3. [Habilitar PIX en Rede](#habilitar-pix-en-rede)
   4. [Configurar condição de pagamento con PIX](#configurar-condicion-de-pago-con-pix)  

<div class="alert alert-warning">
Las configuraciones realizadas en un entorno externo a VTEX podrán ser discontinuadas o modificadas sin previo aviso. Consulta tu cuenta de Itaú Rede para obtener información actualizada.
</div>

## Obtener credenciales en el Portal Rede

Para iniciar el proceso de integración de su tienda en el entorno de Userede, envíe un correo electrónico a ecommerce@userede.com.br solicitando la acreditación de las soluciones de comercio electrónico de Rede. El tiempo estimado de respuesta es de hasta 1 día hábil.

<div class="alert alert-info">
Una vez completada la acreditación, recibirás por correo electrónico tu número de membresía (PV) e instrucciones de acceso al Portal Rede.
</div>

Luego de recibir la información de acceso, usted u otra persona con un perfil de administrador en su cuenta Rede (__usuario maestro__) deberá generar la clave de integración de acuerdo con los pasos a continuación:

<blockquote><ui>1. Acceda al <a href="https://meu.userede.com.br/login">Portal Userede</a> con los datos de su cuenta Itaú Rede.</ui>

<blockquote><ui>2. Seleccione la cuenta en la que desea realizar pagos en VTEX y haga clic en <b>Aplicar</b>. Guarde el número de cuenta, ya que debe ser utilizado en el campo <b>Clave de aplicación</b> de la sección <a href="#configurar-itau-rede-en-vtex">Configurar Itaú Rede en VTEX</a>.</ui>

![Itaú Rede_1_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_1.png)

<blockquote><ui>3. Después de que la pantalla se actualice a la cuenta deseada, en el menú <b>para vender</b>, seleccione la opción <b>e-commerce</b>.</ui>

![Itaú Rede_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_2.PNG)

<blockquote><ui>4. En la página <b>e-commerce</b>, haga clic en la tarjeta <b>chave de integração</b>.</ui>

![Itaú Rede_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_3.png)

<blockquote><ui>5. Después de leer la información de la "chave de integração", haga clic en <b>li, estou ciente</b>.</ui>

![Itaú Rede_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_4.png)

<blockquote><ui>6. Haga clic en el botón <b>gerar nova chave</b>.</ui>

![Itaú Rede_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_5.png)

<blockquote><ui>7. Verifique la información descrita en la ventana <b>gerar nova chave de integração</b> y haga clic en <b>gerar nova chave</b>.</ui>

![Itaú Rede_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_6.png)

<blockquote><ui>8. Después de crear la nueva clave, haga clic en <b>copiar</b> y conserve la información en un lugar seguro. Esta clave debe ser utilizada en el campo <b>Token de aplicación</b> de la sección <a href="#configurar-itau-rede-en-vtex">Configurar Itaú Rede en VTEX</a>.</ui>

<blockquote><ui><div class="alert alert-warning">
Si pierde el acceso a la información de la clave de integración, deberá repetir los pasos anteriores para generar una nueva clave. Luego de obtener la nueva clave para el mismo número de membresía (PV), también será necesario actualizar la información en todas las integraciones asociadas al PV. Las integraciones que no se actualizan con la nueva clave pueden tener un impacto en las operaciones.
  </div></ui></blockquote>

## Configurar Itaú Rede en VTEX

Para configurar Itaú Rede siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __ItauRede__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, complete el campo __Clave de aplicación__ con su número de membresía (PV) y el campo __Token de aplicación__ con su clave de integración.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Itaú Rede en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__. Esta opción actualmente no está disponible para este proveedor.
7. En __Liquidación automática__, seleccione una de las siguientes opciones:
<br>
<ul>
<br>
    	<li><b>Utiliza comportamiento recomendado por el procesador de pagos</b>: a captura no es automática, sino programada de acuerdo con el plazo especificado por el adquirente que, además de indicar si el pago ha sido autorizado, puede especificar o recomendar un número de días para la captura en el momento de la respuesta a la autorización de pago (este es el comportamiento predeterminado de la plataforma).</li>
    	<li><b>Liquidación automática inmediatamente después de la autorización del pago</b>: la captura es automática y se produce inmediatamente después de la autorización, incluso si la transacción tiene un análisis antifraude.</li>
   		<li><b>Liquidación automática inmediatamente después del análisis antifraude</b>: la captura es automática y se realiza inmediatamente después de la autorización y el análisis antifraude (si seleccionas este comportamiento y no tienes análisis antifraude, la captura de pago se realizará de la misma manera que en el comportamiento "Liquidación automática inmediatamente después de la autorización del pago").</li>
   		<li><b>Desactivado</b>: la captura se realiza solo cuando se factura el pedido. Si se opta por este comportamiento de captura, es importante estar atento al tiempo de facturación, ya que puede exceder el tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>

<blockquote><ui>8. En <b>merchantName</b>, ingresa el nombre de tu tienda.</ui>

<blockquote><ui>9. En <b>SoftDescriptor</b>, describa el mensaje de identificación que se mostrará en el extracto de la tarjeta de su cliente. Debe utilizar la misma información registrada en Soft Descriptor en el Portal Rede.</ui>

<blockquote><div class="alert alert-info">
  Si aún no ha habilitado <b>Soft Descriptor</b>, acceda al Portal Rede para habilitarlo o si prefiere no utilizar esta funcionalidad simplemente no complete este campo.
  </div>

<blockquote><ui>10. En el campo <b>delayToAutoSettle</b>, introduzca el período para liquidar la orden. Recuerde que el valor de este campo debe estar de acuerdo con la regla determinada en el campo <b>Liquidación automática</b>.</ui>

<blockquote><ui>11. Haga clic en `Guardar`.</ui></blockquote>

## Configurar condición de pago con tarjeta

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en el nombre de la marca de tarjeta de crédito deseada.
4. Active la condición en el campo __Status__.
5. En __Procesar con proveedor__, seleccione la opción __ItauRede__.  
6. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
7. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456).
8. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Itaú Rede puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

## Pagos con PIX

A través de la integración de Rede y VTEX, también podrás ofrecer PIX en tu tienda, permitiéndote recibir pagos vía Código QR PIX, realizar operaciones de reembolso total o parcial y recibir notificaciones del estado de las transacciones.

Antes de realizar los siguientes pasos, asegúrese de haber [obtenido las credenciales en el portal de la Rede](#obtener-credenciales-en-el-portal-rede) y [configurado Itaú Rede en VTEX](#configurar-itau-rede-en-vtex).

### Habilitar PIX en Rede

<div class="alert alert-info">
  Sólo los usuarios con perfil de administrador (<b>usuario maestro</b>) pueden habilitar Pix en Rede.
  </div>

Para habilitar la clave Pix, acceda al Portal Rede y siga los pasos: 

<blockquote><ui>1. Acceda al <a href="https://meu.userede.com.br/login">Portal Userede</a> con los datos de su cuenta Itaú Rede.</ui>

<blockquote><ui>2. Seleccione la cuenta en la que desea realizar pagos en VTEX y haga clic en <b>Aplicar</b>.</ui>

![Itaú Rede_1_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_7.png)

<blockquote><ui>3. Después de que la pantalla se actualice a la cuenta deseada, en el menú <b>para vender</b>, seleccione la opción <b>pix</b>.</ui>

![Itaú Rede_7_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_8.png)  

<blockquote><ui>4. Haga clic en el botón <b>Habilitar Pix na Rede</b>.</ui>  

![Itaú Rede_8_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_9.png)

<blockquote><ui>5. Selecciona la cuenta Itaú donde deseas recibir tus ventas con Pix y haz clic <b>Escolher conta</b>.</ui></blockquote>    

![Itaú Rede_9_es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_10.png)

### Configurar condición de pago con PIX

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago instantáneo__, haga clic en __Pix__.
4. Active la condición en el campo __Status__.
5. En __Procesar con proveedor__, seleccione la opción __ItauRede__.
6. Haga clic en `Guardar`.

Luego de seguir los pasos indicados, la opción PIX con el proveedor Itaú Rede puede tardar hasta 10 minutos en aparecer en el Checkout de tu tienda como opción de pago.
