---
title: 'Cómo configurar las funcionalidades de televentas'
id: 76FNgQP2Glc4umMJ5Yr50R
status: PUBLISHED
createdAt: 2021-05-13T18:07:05.617Z
updatedAt: 2023-03-29T21:17:46.146Z
publishedAt: 2023-03-29T21:17:46.146Z
firstPublishedAt: 2021-05-17T12:07:03.757Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-telesales-features
locale: es
legacySlug: como-configurar-las-funcionalidades-de-televentas
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

Para estructurar una operación de televentas y servicio al cliente, es necesario que el administrador de la tienda configure con anticipación algunos ajustes.

A continuación, consulte los pasos de configuración para utilizar las funciones de televentas disponibles en las tiendas VTEX.

- [Crear usuario de televentas](#crear-usuario-de-televentas)
- [Configurar la barra de herramientas de televentas](#configurar-la-barra-de-herramientas-de-televentas)
- [Configurar Carrito Compartido](#configurar-carrito-compartido) (opcional)
- [Habilitar precios manuales](#habilitar-precios-manuales) (opcional)

Para saber cómo operar las funcionalidades configuradas, consulte la guía [Cómo utilizar las funcionalidades de televentas](/es/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS).

## Crear usuario de televentas

Antes de iniciar una operación de televentas en su tienda, los operadores de televentas y de servicio al cliente deben estar registrados en **Configuración de la cuenta** con el perfil de acceso «Call Center Operator».

Consulte el tutorial [Crear usuario de televentas](/es/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227) para obtener más información sobre este proceso.

Después de la configuración, los usuarios que inicien sesión con un _email_ registrado en el perfil serán redirigidos a la página principal de la tienda donde se mostrará la [Barra de herramientas de televentas](/es/tutorial/toolbar-de-televendas--tutorials_5500).

Los usuarios que tengan el perfil de televentas («Call Center Operator») también pueden ver, dar seguimiento y realizar cambios a los pedidos efectuados en la página [Todos los pedidos](/es/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi).

Para conocer todos los perfiles de acceso disponibles en su tienda, lea el artículo [Perfiles de acceso](/es/tutorial/como-criar-perfil-de-acesso).

## Configurar la barra de herramientas de televentas

Las tiendas desarrolladas en [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/what-is-vtex-io) tienen que configurar la aplicación **VTEX Telemarketing** para habilitar y personalizar la barra de herramientas de televentas. Vea la guía de [VTEX Telemarketing](https://developers.vtex.com/vtex-developer-docs/docs/vtex-telemarketing) para saber más sobre este proceso.

En las demás tiendas, los colores y botones de la barra de herramientas de televentas se pueden personalizar. En el Admin VTEX, accede a **Storefront > Layout**, o escribe **Layout** en la barra de búsqueda en la parte superior de la página.

Consulte el artículo [Personalizar la barra de herramientas de televentas](/es/tutorial/customizar-a-toolbar-de-televendas--1XEz1zqO3KyIuwC4asUsOg) para saber cómo realizar la personalización.

## Configurar el Carrito Compartido

La aplicación [Carrito Compartido](https://apps.vtex.com/vtex-social-selling/p) permite a los vendedores seleccionar productos para sus clientes y compartir el carrito rellenado a través de canales como WhatsApp, Facebook Messenger e _email_ en acciones de _social selling_.

Para utilizar esta funcionalidad, debe instalar y activar la aplicación. También puede personalizar los botones de la interfaz para compartir el carrito.

Para realizar la configuración, siga las instrucciones en el artículo [Cómo activar la aplicación Carrito Compartido (Social Selling)](/es/tutorial/como-ativar-o-app-carrinho-compartilhavel--1lS3fQdXpOoC0BTeVhydfg).

## Habilitar precios manuales

La funcionalidad de precios manuales permite a los usuarios que tengan el perfil «Call Center Operator» y «Super Admin» cambiar el precio de los productos en el carrito de compras.

Para ello, los desarrolladores de la tienda deben habilitar la funcionalidad de precios manuales a través de la API de _checkout_. Consulte la [documentación de la API de Checkout](https://developers.vtex.com/docs/api-reference/checkout-api) para saber más sobre este procedimiento.

Los precios manuales registrados en el carrito deben ser aprobados por el administrador de la tienda o por un usuario con permiso de [Autorización de pedidos](/es/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn) en el sistema para que el pedido siga el flujo de facturación.

<div class="alert alert-info">
No es posible modificar los precios accediendo a la tienda a través de su URL final (<i>www.dominiotienda.com.br</i>). La funcionalidad de precio manual en televenta solo funciona si el operador accede a la tienda a través del dominio <i>www.dominiotienda.myvtex.com</i> y tiene el permiso de <a href="https://help.vtex.com/es/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#call-center-operator">Call Center operator</a> en su <a href="https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">Perfil de Acceso</a>. 
</div>

