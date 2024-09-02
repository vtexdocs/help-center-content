---
title: 'Cómo funciona la Sustitución de Pedidos'
id: 3aBxdbUPKgweug68YyK8oQ
status: DRAFT
createdAt: 2017-05-25T18:12:10.611Z
updatedAt: 2021-12-07T18:16:14.226Z
publishedAt: 
firstPublishedAt: 2017-05-30T20:52:49.085Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: como-funciona-la-sustitucion-de-pedidos
locale: es
legacySlug: como-funciona-la-sustitucion-de-pedidos
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

La **Sustitución de Pedidos** les permite a los clientes de su tienda modificar datos de pedidos ya realizados. El objetivo es ayudarlos a corregir errores sin la necesidad de realizar un nuevo pedido manualmente o de entrar en contacto con su soporte, lo que facilita la operación de su tienda.


### Como activar el Cambio de Pedido

La funcionalidad está disponible para todas tiendas, pero para la activación será necesário cambiar la configuración inicial del **Gestión de Pedidos**:

- Ingresar a **Configuraciones** en **Gestión de Pedidos**;
- En configuraciones **General** marcar la opción **Permitir a los clientes realizar cambios en los pedidos**;  
- En 15 minutos, después de la actualización automatica del cache, la funcionalidad estará disponible.

### Especificaciones de la Funcionalidad


Los siguientes datos del pedido pueden modificarse:
- Dirección
- Tipo de flete
- Forma de pago
- SKU

Y lo más importante es que **las condiciones comerciales del pedido original son mantenidas**. O sea, si el cliente tenía promociones o descuentos aplicados al pedido original, éstos siguen válidos en el pedido sustituido. En los casos en los que no sea posible mantener las condiciones comerciales para un pedido, la sustitución queda indisponible.

Pero, ¡atención!: las condiciones comerciales sólo se mantendrán si tres aspectos permanecen iguales: mismos productos, misma cantidad de SKUs por producto y mismo precio-base del SKU. Si esto no ocurre, el pedido deja de ser una sustitución, caracterizándose como un nuevo pedido.

### Casos que no permiten sustitución

Los siguientes casos no permiten sustitución:
- Pedidos incompletos
- Pedidos con transacción compartida (pedidos con más de un Seller con pago efectuándose al Marketplace)
- Pedidos con alguna modificación hecha por el comerciante
- Pedidos realizados antes del día 27 de mayo de 2017

Además de eso, no es posible realizar la sustitución en los siguientes status de pedido:
- Facturando
- Facturado
- Cancelar
- Cancelado
- Solicitud de cancelación
- Sustituido
- Procesando

## Nuevo layout

Con esta funcionalidad, los usuarios de su tienda ganan una página de Mis Pedidos rediseñada, con opciones de modificación y cancelación:

![meus pedidos1 ES](https://images.contentful.com/alneenqid6w5/2ebQjrhfvOOCQMY486QSy4/3bc4cd2897dd9414e0a8b42c56bed1ff/meus_pedidos1_ES.png)

![meus pedidos3 ES](https://images.ctfassets.net/alneenqid6w5/6yYHPkdA8EeIyAU4iUEKOI/f7fa26cebb8d40dce657324941fcc02e/meus_pedidos3_ES.png)

Al seleccionar **Alterar pedido**, el cliente es llevado a una pantalla en la que elige qué información le gustaría sustituir:

![meus pedidos2 ES](https://images.contentful.com/alneenqid6w5/2OC2x7ypIQ0kgwGS8SuAY0/799dffcb0ebe3a6c4073abbe12ae13f3/meus_pedidos2_ES.png)

Para concluir la modificación, él es llevado al carrito y el Checkout, donde puede modificar dirección, tipo de flete, forma de pago y SKU.

>⚠️ Es necesario cerrar la compra para concluir el proceso, pero **el cliente jamás es cobrado dos veces**. En algunos casos se reaprovechará el pago anterior; cuando esto no sea posible, la cobranza anterior en la tarjeta de crédito será automáticamente estornada.

La reutilización de pago sólo puede utilizarse si el valor del pedido nuevo es igual al del pedido original. Además, si el pago expira en hasta 2 días, no puede reutilizarse.
