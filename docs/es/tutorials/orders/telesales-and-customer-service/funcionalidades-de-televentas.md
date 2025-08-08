---
title: 'Funcionalidades de televentas'
id: UqhiccIRIK2KD0OqkzJaS
status: PUBLISHED
createdAt: 2021-05-13T18:26:51.189Z
updatedAt: 2025-01-16T18:40:14.359Z
publishedAt: 2025-01-16T18:40:14.359Z
firstPublishedAt: 2021-05-17T12:07:02.897Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: telesales-features
legacySlug: funcionalidades-de-televentas
locale: es
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

Las funcionalidades de televentas le brindan a su equipo de servicio al cliente autonomía para ayudar a los clientes con la compra al dar seguimiento de pedidos y suscripciones.

Las funcionalidades de televentas disponibles en VTEX son:

- [Barra de herramientas de televentas](#barra-de-herramientas-de-televentas)
    - [Mi Cuenta](#mi-cuenta)
    - [Comprar a nombre del cliente](#comprar-a-nombre-del-cliente)
    - [Suscripciones](#suscripciones)
- [Carrito Compartido](#carrito-compartido)
- [Ingresar precio manual](#ingresar-precio-manual)
- [Gestión de pedidos](#gestion-de-pedidos)

<div class="alert alert-warning">
  <p>Para acceder a la barra de herramientas de televentas, precios manuales y a la página <b><a href="https://help.vtex.com/es/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi">Todos los pedidos</a></b>, el usuario debe estar registrado en la tienda con el rol de <a href="https://help.vtex.com/es/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227">Call center operator</a>.</p>
</div>

Además, es necesario configurar estas funcionalidades de antemano, siguiendo los pasos del tutorial [Cómo configurar las funcionalidades de televentas](https://help.vtex.com/es/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R).

Cuando inicie sesión con el email asociado al rol, el operador de televentas será redirigido a la página de inicio de la tienda.

## Barra de herramientas de televentas

La barra de herramientas de televentas es una barra superior que se muestra en el sitio web de la tienda para los usuarios con el rol Call Center operator. Mediante la barra de herramientas, los operadores pueden navegar a la tienda, realizar compras y gestionar pedidos a nombre de los clientes.

Para saber cómo utilizar esta función, consulte el tutorial [Barra de herramientas de televentas](https://help.vtex.com/es/tutorial/usando-e-customizando-toolbar-de-televendas--tutorials_5500).

<div class = "alert alert-info">
Un caso de uso de la funcionalidad de televentas es importar pedidos de otras plataformas al módulo Pedidos de Admin VTEX. Para ello, puedes asociar una <a href="https://help.vtex.com/es/tutorial/crear-una-politica-comercial--563tbcL0TYKEKeOY4IAgAE">política comercial</a> específica con el pago mediante <a href="https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ">pagaré</a> (medio de pago aprobado de forma inmediata y manual por el propio operador).
  </div>

### Mi cuenta

Al navegar por la tienda a nombre del cliente a través de la barra de herramientas, el operador de televentas puede acceder a la página **Mi cuenta** para gestionar datos personales, direcciones, pedidos, tarjetas y suscripciones de forma simplificada en una sola página.

Para saber más, consulte el tutorial [Cómo funciona Mi Cuenta](https://help.vtex.com/es/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh).

### Comprar a nombre del cliente

Para realizar un pedido a nombre del cliente, el operador de televentas debe entrar en la tienda como cliente desde la barra de herramientas y seguir el flujo de compra, es decir, incluir los productos en el carrito, rellenar la información de entrega y pago y completar la compra.

Cuando el operador de televentas cierra un pedido a nombre del cliente, el email del operador se registra en la información del pedido, que se puede consultar en la página **Todos los pedidos**.

### Suscripciones
En el módulo Suscripciones, el operador de televentas puede crear nuevas suscripciones o editar las existentes a nombre del cliente. Además, puede modificar los productos suscritos, las cantidades, la fecha y frecuencia de entrega, el medio de pago y la dirección de envío.

Para acceder al menú Suscripciones sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Suscripciones > Dashboards**, o ingresa **Dashboards** en la barra de búsqueda en la parte superior de la página.

2. Haz clic en la pestaña **Suscriptores**.

3. Selecciona el cliente deseado y haz clic en `Personificar`.

4. En la barra de herramientas, haz clic en `Ingresar como cliente` e inicia sesión. Se abrirá un nuevo menú de suscripciones.

5. En **Suscripciones**, puedes hacer clic en:
- `Nueva suscripción` para crear una suscripción.
- `Ver detalles` para editar una suscripción existente.

<div class = "alert alert-info">
  <p>Para saber más sobre suscripciones, consulta <a href="https://help.vtex.com/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453">Cómo funciona Suscripciones</a>.</p>
</div>

## Carrito Compartido

Con el carrito compartido, el operador de televentas puede incluir los productos deseados por el cliente en el carrito y compartir el link del carrito completado para que el cliente pueda finalizar la compra.

En este caso, el email del operador no se registra en la información del pedido.

Para utilizar esta funcionalidad, la tienda debe tener la aplicación [Carrito Compartido (Social Selling)](https://help.vtex.com/es/tutorial/como-ativar-o-app-carrinho-compartilhavel--1lS3fQdXpOoC0BTeVhydfg) instalada y activada.

Consulta [Cómo activar la app Carrito Compartido (Social Selling)](https://help.vtex.com/es/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) para saber más.

## Ingresar precio manual

El operador de televentas puede cambiar el precio de los productos en el carrito de la compra, ya sea al comprar a nombre del cliente o al crear un carrito para compartir luego.

Para ello, los desarrolladores de la tienda deben habilitar la funcionalidad de precios manuales a través de la [API de checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

Para modificar el precio, el operador debe hacer doble clic en el precio mostrado en el carrito e ingresar cualquier otro valor. No hay restricciones en cuanto al aumento y la reducción de precios.

Después de cerrar el pedido, el precio manual debe ser aprobado por el administrador de la tienda o por un usuario que tenga el permiso de [Autorización de pedidos](https://help.vtex.com/es/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn) en el sistema. Una vez validado el precio manual ingresado, el pedido sigue el flujo de facturación.

## Gestión de pedidos

Los usuarios con el rol Call Center operator pueden consultar, dar seguimiento y realizar cambios en los pedidos efectuados en la tienda desde la vista del Admin en la página **Pedidos > Todos los pedidos**.

Para saber más, consulta [Estructura de la página de gestión de pedidos](https://help.vtex.com/es/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A#todos-los-pedidos).

Para entender las principales funcionalidades de la página **Todos los pedidos**, consulta:

* [Cambiar ítems de un pedido finalizado](https://help.vtex.com/es/tutorial/como-fazer-a-alteracao-de-itens--tutorials_190).
* [Cómo cancelar pedido](https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186).
* [Cómo devolver ítems del pedido](https://help.vtex.com/es/tutorial/como-fazer-a-devolucao-de-itens--tutorials_191).
* [Verificar detalles de error en los pedidos](https://help.vtex.com/es/tutorial/como-verificar-detalhes-de-erros-nos-pedidos--frequentlyAskedQuestions_6718).
