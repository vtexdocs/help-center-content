---
title: 'Cómo funciona Mi Cuenta'
id: 2BQ3GiqhqGJTXsWVuio3Xh
status: PUBLISHED
createdAt: 2019-04-11T21:14:26.117Z
updatedAt: 2023-12-21T14:09:42.863Z
publishedAt: 2023-12-21T14:09:42.863Z
firstPublishedAt: 2019-05-21T19:48:15.019Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-my-account-works
legacySlug: como-funciona-el-my-account
locale: es
subcategoryId: 1RWR7qSyaREbD5RfgCjdYG
---

La página __Mi cuenta__ (__My Account)__ proporciona autonomía para que sus clientes puedan gestionar pedidos y datos personales en una única página. Este recurso facilita la operación de su negocio, reduciendo los costos operativos de los servicios al cliente.

Es posible configurar qué pestañas aparecen para el consumidor en las [configuraciones básicas](#configuraciones-basicas). Las pestañas existentes son las siguientes:

- [Perfil](#perfil)
- [Direcciones](#direcciones)
- [Pedidos](#pedidos)
- [Tarjetas de crédito](#tarjetas-de-credito)
- [Suscripciones](#subscripciones)
- [Autenticación](#autenticacion)

> ℹ️ Para saper sobre cómo personalizar la funcionalidad **Mi cuenta**, consulte la documentación para desarrolladores [My Account - StoreV2 version](https://developers.vtex.com/docs/guides/vtex-my-account). Es importante señalar que VTEX no presta soporte a **Mi cuenta** que es personalizada.

## Perfil

En esta pestaña, el cliente puede gestionar sus datos personales registrados en la tienda. Es posible [editar la información del perfil](#editar), [definir una nueva contraseña](#contrasena) y [elegir si desea recibir emails con promociones](#boletin-informativo).

![profile ES](//images.ctfassets.net/alneenqid6w5/6LUXeCU09v8EOyMXntPggz/98d696bdb6ca27fdcb6125d6ad83d60c/profile_ES.png)

### Editar

El botón `Editar` permite alterar la información de perfil que se muestra a continuación.

* Nombre
* Apellido
* CPF (n.º Id. Fiscal)
* Teléfono personal
* Género (campo opcional)
* Fecha de nacimiento (campo opcional)

El botón `Incluir campos corporativos` permite que el cliente complete la siguiente información sobre su empresa, en caso de que sea una persona jurídica.

* Nombre corporativo
* CNPJ (reg. persona jurídica)
* Teléfono corporativo
* Registro estatal
* Nombre comercial

### Contraseña

El botón `Definir contraseña` permite crear una nueva contraseña de acceso. 

### Boletín informativo

El cliente puede marcar la opción **Quiero recibir el boletín informativo con promociones** para recibir las promociones de productos de su tienda por _email_.

## Direcciones

En esta pestaña se pueden encontrar todas las direcciones informadas  en compras anteriores por un cliente en su tienda.

### Editar

El botón `Editar` permite alterar la información de las direcciones registradas.

### Añadir dirección

El botón `Añadir dirección` permite incluir direcciones diferentes a las que se registraron en compras anteriores.

## Pedidos

> ℹ️ En [Mi Cuenta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), los clientes solo pueden acceder a los pedidos de los últimos dos años.

Esta pestaña proporciona una lista completa de los pedidos realizados por un cliente en su tienda. La lista se ordena por fecha de creación y muestra detalles como la fecha del pedido, el valor total de la compra, el ID del pedido, el _status_ y los ítems comprados.

![orders ES](//images.ctfassets.net/alneenqid6w5/1VTgMxrq3WI02LZt21wuw6/c6d01d4becb2a0f1173e34a82f83cb90/orders_ES.png)

La pestaña **Pedidos** permite que el cliente haga el seguimiento del progreso del pedido y realice solicitudes como la cancelación y la modificación. Consulte a continuación todas las opciones disponibles.

* [Hacer pedido de nuevo](#hacer-pedido-de-nuevo)
* [Solicitar cancelación](#solicitar-cancelacion)
* [Ver detalles del pedido](#ver-detalles-del-pedido)
    * [Modificar pedido](#modificar-pedido)

### Hacer pedido de nuevo

En `Hacer pedido de nuevo`, el carrito del pedido seleccionado será duplicado. Esto significa que el cliente podrá generar un nuevo carrito, con los mismos artículos que el carrito original, para realizar una nueva compra.

### Solicitar cancelación

El cliente puede solicitar la cancelación de su pedido en cualquier momento. Si se solicita durante el [periodo de espera](https://help.vtex.com/es/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido--jYFdnPDtNm4WCEkYWqqC#), no es necesaria la aprobación de la tienda para que la misma surta efecto.

Obtén más información en el artículo sobre [cómo funciona la cancelación de pedido solicitada por el cliente](https://help.vtex.com/es/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo#).

### Ver detalles del pedido

Al hacer clic en un pedido del listado, el cliente podrá visualizar todos los detalles de su pedido, como la dirección de entrega, la forma de pago utilizada y el total pagado. Además, puede ver la información de rastreo por ítems del pedido y una línea de tiempo con todos los _status_ del [flujo del pedido](https://help.vtex.com/es/tutorial/fluxo-de-pedido--tutorials_196).

El cliente también puede [Hacer pedido de nuevo](#hacer-pedido-de-nuevo) desde esta página. Al hacer clic en `Más opciones`, se muestran las funcionalidades de [Modificar pedido](#modificar-pedido) (en caso de que esté habilitada y el _status_ del pedido sea `Preparando el pedido`) y [Solicitar cancelación](#solicitar-cancelacion).

![order details ES](//images.ctfassets.net/alneenqid6w5/JQbiFPVtCl1Q8F6PaM0A0/d29f723e144d008ee0fc142db264a4a0/order_details_ES.png)

#### Modificar pedido

Si el _status_ del pedido es `Preparando el pedido`, se puede elegir **Modificar pedido** haciendo clic en `Más opciones` en la página de detalles del pedido.

Para habilitar esta opción, el administrador de la tienda debe [permitir que los clientes realicen modificaciones en los pedidos](https://help.vtex.com/es/tutorial/como-funciona-a-substituicao-de-pedidos?locale=pt#como-ativar-a-substituicao-de-pedidos) en la configuración del módulo **Pedidos**.

Este botón permite que el cliente modifique la información del pedido, como dirección, forma de pago e ítems del carrito, sin necesidad de realizar un nuevo pedido o contactar al equipo de servicio al cliente de la tienda. Lea el artículo [Cómo funciona la substitución de pedidos](https://help.vtex.com/es/tutorial/como-funciona-a-substituicao-de-pedidos?locale=pt) para saber más.

## Tarjetas de crédito

En la pestaña **Tarjetas de crédito**, el cliente tiene autonomía para administrar las tarjetas de crédito relacionadas con su cuenta a través de las siguientes acciones:

- Agregar nuevas tarjetas
- Eliminar tarjetas con fecha de vencimiento alcanzada

Para agregar nuevas tarjetas, sigue los pasos a continuación:

1. Abre **Mi cuenta** (My Account) en la tienda.
2. Haz clic en la sección **Tarjetas de crédito**.
3. Haz clic en el botón **AGREGAR TARJETA**.
4. Ingresa los datos de la tarjeta y la dirección de facturación.
5. Haz clic en el botón **GUARDAR TARJETA**.
6. Resuelve el desafío de reCaptcha.
7. Automáticamente se producirá un proceso de validación de tarjeta. Si no hay ningún problema, serás redirigido a la lista de tarjetas y la nueva tarjeta aparecerá en la lista.

![Card ReCaptcha](//images.ctfassets.net/alneenqid6w5/2xGRuG3f5S56POV684Q2Y3/eb678f63dc5c69a402bae6db631c5ba8/Card_ReCaptcha_EN.gif)

Sin embargo, hay **limitaciones** que las tiendas que utilizan la autenticación [3DS](https://help.vtex.com/pt/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) (V1 o V2) en sus adquirentes deben considerar:

* Si el comprador intenta registrar una nueva tarjeta sin haberla usado previamente en su tienda, aparecerá el mensaje_ _«_Se produjo_ _un error al intentar registrar la tarjeta_». Para saber más detalles, acceda a nuestra documentación [‘Guardar tarjeta’ no funciona al usar la autenticación 3DS](https://help.vtex.com/es/known-issues/the-save-new-card-option-does-not-work-when-using-3-d-secure-3ds--20INELA5LVhY1XqFWG7047).

* En **Suscripciones**, no se puede guardar la tarjeta primero y luego activar la suscripción del servicio deseado. En situaciones como esta, es necesario activar la suscripción al realizar la compra. De esa manera, la tarjeta se guardará automáticamente.

* Si la tarjeta de crédito guardada en la pestaña **Tarjetas de crédito** está vencida, se deberá eliminar y realizar una nueva compra para guardarla, ya que, debido a la autenticación **3DS**, no es posible actualizar y confirmar los datos de la tarjeta sin haber realizado una transacción en la tienda.

* En tiendas que actúan como _marketplace_, la opción `Guardar tarjeta` de la pestaña **Tarjetas de crédito** no estará disponible para los casos en que la condición de pago de la tarjeta de crédito solo esté asociada al [seller white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa). Esto se debe a que la validación de la tarjeta se realiza directamente en la cuenta principal, a través de una transacción de prueba por el valor de USD 1,50, que se reembolsa inmediatamente.

    En otras palabras, para guardar la tarjeta, la [condición de pago](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) de tarjeta de crédito también debe estar en la cuenta principal, en este caso, en Marketplace.

## Suscripciones

En esta pestaña, el cliente puede gestionar todas sus suscripciones registradas, así como modificar los datos relacionados con las mismas. Lea el artículo [Cómo funciona Suscripciones](https://help.vtex.com/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453#como-o-cliente-da-sua-loja-visualiza-suas-assinaturas) para saber más.

## Autenticación 

Esta pestaña se puede acceder a ella en el panel izquierdo a través de **Autenticación** en la configuración del perfil del usuario. En la pestaña encontrará opciones para la gestión de contraseña y gestión de sesiones.

![My Authentication app ES](//images.ctfassets.net/alneenqid6w5/20aIW7imMlRsfDbKYu9IuM/3ac0c69ccace5c9b274318b06bea409f/My_Authentication_app_ES.png)

### Gestión de contraseña 

El componente **Contraseña** permite al usuario crear una contraseña (si aún no la tiene) o cambiar la existente. Para crear una nueva contraseña:

1. Haga clic en el botón `DEFINIR CONTRASEÑA`. Después de hacer clic, aparecerán campos que le permitirán crear una contraseña y se enviará un email con un código para autorizar el procedimiento. La dirección a la que se envía el email de verificación aparece en la parte superior del componente.
2. En el campo **Código**, introduzca el código de verificación que recibió por email.
3. En el campo **Nueva contraseña**, introduzca la nueva contraseña que desea asignar a su cuenta. Debajo del campo aparecen los requisitos que debe cumplir la contraseña para ser válida. A medida que escriba la contraseña, los símbolos de cada requisito cambiarán de rojo a verde. La contraseña solo será válida si todos los símbolos aparecen en verde.
4. Una vez que haya introducido una contraseña válida, haga clic en el botón `GUARDAR CONTRASEÑA` para completar la creación de la contraseña.  
![My Authentication create password ES](//images.ctfassets.net/alneenqid6w5/5EDsOOYVAUmNolMnzs22FD/c8f8a07de5442b0ffbc49c3b6a66de29/My_Authentication_create_password_ES.png)

Para cambiar la contraseña actual:

1. Haga clic en el botón `DEFINIR CONTRASEÑA`.
2. Introduzca la contraseña actual en el campo correspondiente.
3. Introduzca la nueva contraseña en el campo correspondiente, cumpliendo todos los requisitos.
4. Haga clic en el botón `GUARDAR CONTRASEÑA` para completar el cambio de contraseña.  
![My Authentication change password ES](//images.ctfassets.net/alneenqid6w5/7qyiWDAjdSBEjppq6Ti94c/55e5cdfbb4f5daeb591eadbbccf82183/My_Authentication_change_password_ES.png)

> ℹ️ Si ha olvidado su contraseña, no podrá recuperarla a través del componente de gestión de contraseña. Para ello, debe cerrar la sesión actual, hacer un intento de inicio de sesión con el email y la contraseña, y hacer clic en el link **Olvidé mi contraseña**.

### Gestión de sesiones 

El componente **Gestión de sesiones** le permite ver todas sus sesiones activas, incluida la sesión actual, y cancelar el acceso a las demás sesiones de forma remota.

Para ver sus sesiones activas, haga clic en el botón `VER SESIONES` y accederá a la pantalla de gestión de sesiones. En esta pantalla aparecen componentes con cada una de las sesiones activas.  Dentro del componente de cada sesión aparece el tipo de dispositivo, hace cuánto tiempo se realizó el último acceso, el navegador, el sistema operativo, la dirección IP y la fecha y hora del primer acceso. El primer componente se refiere a la sesión actual y no tiene la opción de cerrar la sesión. A partir del segundo componente, en caso de que aparezca, podrá ver las demás sesiones.

Para cancelar el acceso a las demás sesiones, haga clic en el botón `CIERRE DE SESIÓN` de la sesión deseada.

![My Authentication Session Management ES](//images.ctfassets.net/alneenqid6w5/3qxpIRREWnGmRmv97jhOML/1fe19f90a71681bf3f46a5d8ab52aabb/My_Authentication_Session_Management_ES_blur.png)

## Configuraciones básicas

En **My Orders**, puedes determinar qué secciones estarán visibles para el cliente en su espacio. Las opciones configurables son las siguientes:

* En **PROFILE**, la opción <a class="far fa-check-square"></a> _Show non-binary genders when editing profile_ determina si el cliente es tratado como términos de género neutros cuando edita su información en [Perfil](#perfil).
* En **CARDS**, la opción <a class="far fa-check-square"></a> _Visible_ define si el cliente tendrá la sección [Tarjetas de crédito](#tarjetas-de-credito) para gestionar sus tarjetas.
* En **ORDERS**, la opción <a class="far fa-check-square"></a> _Visible_ determina si el cliente tiene la sección [Pedidos](#pedidos) para seguir sus pedidos.
* En **ADDRESSES**, la opción <a class="far fa-check-square"></a> _Visible_ define si el cliente tendrá la sección [Direcciones](#direcciones) con detalles de su dirección. 

![vtex-my-account_ES](//images.ctfassets.net/alneenqid6w5/4x5BM7dpNcnjHagpycIeWt/95b29a5b64c84fe70b4dc01e4a36b26a/vtex-my-account_ES.png)

Por defecto, las opciones **CARDS** y **ORDERS** vienen configuradas como visibles. Para cambiarlas o habilitar otras configuraciones, realiza los pasos a continuación:

1. En el Admin VTEX, accede a **Apps > App Store**, o escribe **App Store** en la barra de búsqueda en la parte superior de la página.
2. En la sección **Todas las apps**, utiliza la barra de búsqueda para encontrar _My account_.
3. En el card de _My account_, haz clic en <i class="fas fa-cog" alt="engrenagem azul"></i> `Configuración`.
4. Marca las casillas de selección <a class="far fa-check-square"></a> de las opciones que deseas habilitar. 
5. Haz clic en `Guardar`.

