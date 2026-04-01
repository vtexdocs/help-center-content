---
title: 'Cómo funciona Suscripciones'
id: frequentlyAskedQuestions_4453
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.886Z
updatedAt: 2025-02-19T20:14:45.602Z
publishedAt: 2025-02-19T20:14:45.602Z
firstPublishedAt: 2019-01-24T22:14:56.290Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-subscriptions-work
legacySlug: como-funciona-suscripciones
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

El **Sistema de Suscripciones** es una aplicación desarrollada por VTEX para facilitar las ventas recurrentes, que sustiye el módulo de *Recurrencia*. Funciona como un programador automático: realiza una recompra en la frecuencia solicitada por el cliente de la tienda. 

Su cliente indica con qué frecuencia desea repetir la compra de un determinado SKU y el sistema rehace el pedido de la compra automáticamente en cada periodo programado, con las mismas características configuradas en el pedido original. La suscripción es una forma simple de ahorrarle tiempo a su cliente y traer un flujo programado de ventas adicional a su tienda. 

Una suscripción para VTEX consiste en una lista de SKUs vinculada a cierta configuración de compra. Todas las operaciones de gestión giran en torno a la entidad «Suscripción», que contiene toda la información necesaria para generar el pedido correspondiente, tal como:

- Perfil de usuario
- Dirección
- Forma de pago
- Frecuencia
- Fecha de inicio del pedido por subscripción

## Cómo el cliente de su tienda genera un pedido con Suscripciones 

Cuando termine la [configuración de la funcionalidad Suscripciones V2](/es/docs/tutorials/como-configurar-suscripciones), ya estará habilitada para que el cliente de su tienda genere un pedido con Suscripciones. Hay dos maneras en que su cliente puede crear una suscripción: 

### Añadir productos para suscripción durante el checkout

Al añadir un *producto habilitado para Suscripción*, durante el checkout, se mostrará un selector desplegable para cada producto con las opciones de suscripción asociadas a ese SKU. Su cliente deberá seleccionar la opción «Suscripción» y seleccionar la frecuencia de la suscripción. Tenga en cuenta que este flujo puede ser personalizado en algunos casos, dependiendo de la necesidad del negocio. 

Después de seleccionar los detalles de la suscripción, el cliente procederá con el flujo normal de compra. Deberá ingresar la dirección de entrega y utilizar uno de los [**métodos de pago habilitados para el Sistema de Suscripción**](/es/docs/tutorials/como-configurar-suscripciones). La suscripción se activará después de la aprobación del pago.

### Crear una nueva suscripción en la página «Mi cuenta»

El cliente de su tienda tiene acceso a la creación de suscripciones en la página **Mi cuenta**. Este espacio permite configurar una nueva suscripción sin tener que pasar por el checkout y completar un pedido.

Para ello, solo hay que entrar a la página **Mi cuenta** en el sitio web de su tienda, acceder a la sección **Suscripciones** y hacer clic en el botón **Nueva suscripción**. Una vez que se registren los métodos de pago y la dirección de entrega, solo hay que hacer clic en el botón **Suscribirse** para activar la suscripción de los productos seleccionados.

## Cómo el cliente de su tienda visualiza las Suscripciones

> ℹ️ En [Mi Cuenta](/es/docs/tutorials/como-funciona-mi-cuenta), los clientes solo pueden acceder a los pedidos de los últimos dos años.

Después de finalizar el pedido con Suscripción, su cliente visualiza en la página **Mi cuenta** la sección **Suscripciones**. En esta sección, el cliente también puede encontrar la lista de suscripciones realizadas con los detalles y el estado individual. Su cliente también recibirá por *email* una confirmación de la suscripción y del pedido generado.

La comunicación con su cliente acerca de la suscripción se llevará a cabo por el módulo **Centro de mensajes**. Consulte nuestro artículo [Correos Electrónicos Transaccionales para Pedidos de Suscripción](/es/docs/tutorials/correos-electronicos-transaccionales-para-pedidos-de-suscripciones). 

## Detalles de suscripción

Nuestra página de detalles de suscripción ha sido remodelada para mejorar la experiencia del consumidor al reducir el tiempo que toma encontrar información y realizar tareas. Además, tenemos una nueva función para añadir ítems a una suscripción existente.

### Barra de acciones

Añadimos una barra de acciones para mejorar la comunicación con el usuario sobre lo que necesita hacer o informar sobre eventos importantes de la suscripción. En esta sección su cliente podrá:

- Editar la frecuencia de la suscripción.
- Cambiar el periodo de la suscripción.
- Editar el día de facturación.
- Editar la dirección registrada en la suscripción.
- Pausar la suscripción.
- Cancelar la suscripción.
- Cambiar el método de pago utilizado en el cobro recurrente de la suscripción.

## Añadir productos a su suscripción

Ahora es posible añadir un nuevo ítem a su suscripción a través de la búsqueda de los productos disponibles en la tienda.
