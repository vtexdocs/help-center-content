---
title: 'Funcionalidades de televentas'
id: UqhiccIRIK2KD0OqkzJaS
status: CHANGED
createdAt: 2021-05-13T18:26:51.189Z
updatedAt: 2023-12-20T16:58:46.983Z
publishedAt: 2023-10-18T17:09:06.185Z
firstPublishedAt: 2021-05-17T12:07:02.897Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: funcionalidades-de-televentas
locale: es
legacySlug: funcionalidades-de-televentas
subcategory: 6SEjoixhY5LlA7G15W6oZS
---

Las funcionalidades de televentas le brindan a su equipo de servicio al cliente autonomía para ayudar a los clientes con la compra al dar seguimiento y cambiar pedidos.

Las funcionalidades de televentas disponibles en VTEX son:

- [Barra de herramientas de televentas](#barra-de-herramientas-de-televentas)
    - [Mi Cuenta](#mi-cuenta)
    - [Comprar a nombre del cliente](#comprar-a-nombre-del-cliente)
- [Carrito Compartido](#carrito-compartido)
- [Ingresar precio manual](#ingresar-precio-manual)
- [Gestión de pedidos](#gestion-de-pedidos)

Para acceder a la barra de herramientas de televentas, precios manuales y **Todos los pedidos**, el usuario debe estar registrado en la tienda con el [perfil de acceso Call Center Operator](https://help.vtex.com/es/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227). Además, es necesario configurar estas funcionalidades de antemano, siguiendo los pasos del tutorial [Cómo configurar las funcionalidades de televentas](https://help.vtex.com/es/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R).

Cuando inicie sesión con el _email_ registrado en el perfil, el operador de televentas será redirigido a la página de inicio de la tienda.

## Barra de herramientas de televentas

La barra de herramientas de televentas es una barra superior que se muestra en el sitio web de la tienda para los usuarios con el perfil «Call Center Operator». Mediante la barra de herramientas, los operadores pueden navegar a la tienda, realizar compras y gestionar pedidos a nombre de los clientes.

Para saber cómo utilizar esta función, consulte el tutorial [Barra de herramientas de televentas](https://help.vtex.com/es/tutorial/usando-e-customizando-toolbar-de-televendas--tutorials_5500).

<div class = "alert alert-info">
Un caso de uso de la funcionalidad de televentas es importar pedidos de otras plataformas al módulo <b>Pedidos</b> de Admin VTEX. Para ello, puedes asociar una <a href="https://help.vtex.com/es/tutorial/crear-una-politica-comercial--563tbcL0TYKEKeOY4IAgAE">política comercial</a> específica con el pago mediante <a href="https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ">pagaré</a> (medio de pago aprobado de forma inmediata y manual por el propio operador).
  </div>

### Mi cuenta

Al navegar por la tienda a nombre del cliente a través de la barra de herramientas, el operador de televentas puede acceder a la página **Mi cuenta** para gestionar datos personales, direcciones, pedidos, tarjetas y suscripciones de forma simplificada en una sola página.

Para saber más, consulte el tutorial [Cómo funciona Mi Cuenta](https://help.vtex.com/es/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh).

### Comprar a nombre del cliente

Para realizar un pedido a nombre del cliente, el operador de televentas debe entrar en la tienda como cliente desde la barra de herramientas y seguir el flujo de compra, es decir, incluir los productos en el carrito, rellenar la información de entrega y pago y completar la compra.

Cuando el operador de televentas cierra un pedido a nombre del cliente, el _email_ del operador se registra en la información del pedido, que se puede ver en la página **Todos los pedidos**.

## Carrito Compartido

Con el carrito compartido, el operador de televentas puede incluir los productos deseados por el cliente en el carrito y compartir el enlace del carrito completado para que el cliente pueda completar la compra.

En este caso, el _email_ del operador no se registra en la información del pedido.

Para utilizar esta funcionalidad, la tienda debe tener la aplicación **[Carrito Compartido](https://help.vtex.com/es/tutorial/como-ativar-o-app-carrinho-compartilhavel--1lS3fQdXpOoC0BTeVhydfg)** [(Social Selling)](https://help.vtex.com/es/tutorial/como-ativar-o-app-carrinho-compartilhavel--1lS3fQdXpOoC0BTeVhydfg) instalada y activada.

Para saber más, consulte el artículo [Cómo usar la aplicación Carrito Compartido (Social Selling)](https://help.vtex.com/es/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN).

## Ingresar precio manual

El operador de televentas puede cambiar el precio de los productos en el carrito de la compra, ya sea al comprar a nombre del cliente o al crear un carrito para compartir luego.

Para ello, los desarrolladores de la tienda deben habilitar la funcionalidad de precios manuales a través de la [API de checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

Para modificar el precio, el operador debe hacer doble clic en el precio mostrado en el carrito e ingresar cualquier otro valor. No hay restricciones en cuanto al aumento y la reducción de precios.

Después de cerrar el pedido, el precio manual debe ser aprobado por el administrador de la tienda o por un usuario que tenga el permiso de [Autorización de pedidos](https://help.vtex.com/es/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn) en el sistema. Una vez validado el precio manual ingresado, el pedido sigue el flujo de facturación.

## Gestión de pedidos

Los usuarios que tengan el perfil de televentas («Call Center Operator») pueden ver, dar seguimiento y realizar cambios a los pedidos efectuados en la tienda desde la vista del Admin en la página **Todos los pedidos**.

Para acceder a la página, el operador de televentas debe utilizar el enlace `https://nombreTienda.vtexcommercestable.com/admin/orders`.

Para saber más, consulte el tutorial [Estructura de la página de Gestión de pedidos](https://help.vtex.com/es/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A#todos-los-pedidos).

Para entender las principales funcionalidades de la página **Todos los pedidos**, consulte los artículos:

* [Cambiar ítems del pedido](https://help.vtex.com/es/tutorial/como-fazer-a-alteracao-de-itens--tutorials_190).
* [Cancelar pedidos](https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186).
* [Devolver ítem del pedido](https://help.vtex.com/es/tutorial/como-fazer-a-devolucao-de-itens--tutorials_191).
* [Verificar detalles de errores en los pedidos](https://help.vtex.com/es/tutorial/como-verificar-detalhes-de-erros-nos-pedidos--frequentlyAskedQuestions_6718).
