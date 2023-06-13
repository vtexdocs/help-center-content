---
title: Customer Credit - Visión General
id: 1uIqTjWxIIIEW0COMg4uE0
status: PUBLISHED
createdAt: 2018-11-08T17:11:28.486Z
updatedAt: 2023-03-29T14:46:02.462Z
publishedAt: 2023-03-29T14:46:02.462Z
firstPublishedAt: 2018-11-08T19:14:39.491Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slug: customer-credit-vision-general
legacySlug: credit-control-vision-general
subcategory: 7EWKfPIGfmI0G8iMYK8Aiy
---

Customer Credit es la aplicación de VTEX que permite que la tienda ofrezca crédito a los clientes de confianza. Con más tiempo para pagar, el cliente tiene más poder de compra.

Por la plataforma es posible configurar plazos y cuotas, así como gestionar cuentas, definiendo límites de crédito y acompañando los títulos de cobro emitidos. Sus clientes tienen visibilidad sobre el crédito disponible y los valores a pagar directamente en el sitio web de su tienda.

## Cuándo utilizar

Los modelos de negocio que tienen una relación comercial con sus clientes suelen necesitar un sistema de gestión de crédito para poder emitir boletas de pago para compras facturadas sin poner en riesgo el flujo de caja de la empresa. 

La aprobación de estos pagos en plataformas de comercio electrónico suele demandar esfuerzo manual de aprobación para cada pedido, incluso con clientes que tienen crédito disponible.

Las tiendas con relaciones B2B como distribuidores de redes minoristas, venta directa a revendedores, material de oficina para empresas o insumos industriales pueden utilizar Customer Credit para ofrecer una experiencia integrada a la plataforma VTEX de compra y pago a plazo.

## Cómo funciona

**Flujo básico de cómo funciona Customer Credit en las tiendas VTEX.**

1. La tienda instala la app de Customer Credit y hace las configuraciones iniciales.
2. La tienda establece límite de crédito para la cuenta corriente del usuario.
3. El usuario hace un pedido utilizando el crédito de la tienda en Smartcheckout.
4. El pedido carga el valor del límite de crédito del usuario y genera un título.
5. Después, el usuario paga el título generado.
6. El pago del título recarga el límite de crédito de la cuenta corriente del usuario.

Por haber sido desarrollado en VTEX, Customer Credit está plenamente integrado al SmartCheckout, lo que significa que la experiencia de compra de sus clientes sigue siendo la misma.
Usted puede elegir los usuarios que recibirán crédito, establecer el límite de crédito para cada uno de ellos y administrar individualmente cada título.

Customer Credit puede ser utilizado tanto por la interfaz web del Admin como por la API. 

## Conceptos

### Cuenta corriente

Para obtener acceso al pago a plazo el usuario debe tener acceso a una cuenta registrada en Customer Credit. Esta cuenta se compone de identificadores como e-mail y documento, así como el límite de crédito definido.

### Límite de crédito

Para cada cuenta usted debe definir un límite de crédito. Este límite indica el valor máximo que la cuenta puede tener en títulos abiertos al mismo tiempo. 
Cuando los títulos se pagan o se cancelan, sus valores restauran el límite de crédito. El límite puede ser restablecido por el usuario, en cualquier momento, con los permisos necesarios.

En el momento de la compra, el cliente tiene visibilidad de cuánto crédito tiene disponible. Cuando no es suficiente para el valor total, no es posible utilizar sus créditos.

El límite de crédito definido en una cuenta también puede ser utilizado por más de un dependiente. 

### Título

Títulos son referencias de pagos futuros. Se crean automáticamente cuando un pedido pagado con Customer Credit se factura. Se compone de fecha de vencimiento, valor y descripción. 

Un enlace de pago externo se puede agregar a cada título para facilitar su liquidación.

Hay tres estados posibles para los títulos: **Abierto**, **Pagado** y **Cancelado**. En la interfaz habrá un cuarto estado,  **Vencido**, pero que es en realidad un título **Abierto** cuya fecha de vencimiento ha expirado.

Un título siempre se crea con el estado Abierto, y dependiendo de las acciones del Admin o las llamadas de API puede transitar al estado de Pagado o Cancelado.

### Tolerancia

Permite que una compra sea aprobada aunque supere el crédito disponible del usuario. Si esta funcionalidad está activada, un porcentaje puede configurarse de forma individual para cada cuenta registrada.

### Plazos y cuotas

Customer Credit le permite configurar como desee los plazos de las cuotas que estarán disponibles para sus clientes. Algunos ejemplos comunes de plazos usados son de 7 días, 28, 45, 30/60, 30/60/90, etc.

### Preautorización y liquidación

Después de aprobado el pago con crédito, el sistema preautoriza el valor, reservándolo automáticamente después de 5 días hábiles o hasta que el pedido sea facturado. En ese momento, ocurre la liquidación del valor en la cuenta y los títulos se generan.

El flujo sigue el mismo estándar de las tarjetas de crédito: las modificaciones realizadas en el pedido durante el período de preautorización alteran el valor de crédito reservado. Las modificaciones realizadas después de la liquidación; es decir, después de la emisión de los títulos, actualizan los títulos ya emitidos si el valor disminuye y emiten nuevos títulos si el valor del pedido aumenta.

## Puntos de contacto

### Admin

La interfaz de Customer Credit en el Admin de VTEX proporciona visibilidad completa del sistema: títulos, cuentas y configuraciones generales. La interfaz también le permite buscar, filtrar y ordenar datos, además de importarlos y exportarlos.

### Checkout

Es por el Checkout de VTEX que el usuario podrá cerrar compras usando Customer Credit. El sistema comprobará automáticamente si el usuario ya tiene una cuenta con crédito y, en caso positivo, le permitirá autentificarse para visualizar el crédito disponible y las opciones de plazos y cuotas para cerrar la compra.

### Mis Créditos

Es la interfaz por la cual su cliente tendrá acceso a la información de su cuenta. Es muy similar a la página de Cuentas del Admin de VTEX. En esta, el usuario ve sus límites disponibles, títulos pagados y en abierto, además del historial de la cuenta.

## Instalación y configuración
Preparamos una guía detallada para que usted [empiece a usar Customer Credit en su tienda](/es/tracks/customer-credit-como-empezar). Acceda y ofrezca crédito exclusivo a sus mejores clientes ahora mismo.

Para obtener más información sobre las API de Customer Credit, visite [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api).

