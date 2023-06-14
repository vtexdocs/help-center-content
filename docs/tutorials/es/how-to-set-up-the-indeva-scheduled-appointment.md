---
title: 'Cómo configurar y utilizar la Atención Programada de Indeva'
id: 4nWpoai0ChD2BKPCjcwoV0
status: DRAFT
createdAt: 2020-06-16T21:03:30.475Z
updatedAt: 2021-01-21T23:27:53.575Z
publishedAt: 
firstPublishedAt: 2020-06-16T21:22:44.494Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: como-configurar-y-utilizar-la-atencion-programada-de-indeva
legacySlug: como-configurar-y-utilizar-la-atencion-programada-de-indeva
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Indeva es una empresa VTEX que ya se consolidó en el mercado minorista como una de las principales soluciones de interfaz entre el cliente final y el vendedor de la tienda física. Es así que, para satisfacer la demanda actual del mercado de herramientas que permiten un mayor control y seguridad del flujo de pedidos en tiendas físicas, la compañía creó Atención Programada Indeva.

A través de esta funcionalidad, su marca permite a sus clientes programar visitas a las tiendas más cercanas de una manera segura, confiable y personalizada. Su tienda ahora tiene una fila de oportunidades de ventas por atención programada.

Este artículo explica cómo funciona esta funcionalidad y muestra el paso a paso para implementarla.

<div class="alert alert-info">
Su tienda no necesita tener una cuenta VTEX para usar la funcionalidad Atención Programada de Indeva.
</div>

## Formulario de programación

El consumidor programa una atención por medio de un formulario preparado por Indeva. La tienda debe incluirlo en su sitio web mediante un iframe.

El flujo de la programación que recorre el cliente comienza en la elección de la tienda física donde prefiere ser atendido. En la siguiente imagen, solo observamos una tienda registrada; sin embargo, su marca puede registrar las tiendas físicas que desee.

![indeva1](//images.ctfassets.net/alneenqid6w5/3QXzMhoJN1qYZZ6c8mlfcB/4cf28e34420ac49bfcaa6f78a9b2951a/indeva1.png)

<div class="alert alert-info">
También es posible proporcionar al cliente un enlace que conduce directamente al formulario de una tienda física específica. Simplemente agregue el ID de la tienda al final de la URL. Con eso, el vendedor puede compartir el enlace de su tienda, por ejemplo, a través de un código QR o en los medios sociales.
</div>

Al hacer clic en la tienda deseada, el cliente es conducido al formulario. Allí, encuentra información sobre la tienda (que debe definirse en la etapa de implementación), además de los campos para ingresar la información sobre la visita:

- Fecha y hora.
- Nombre del cliente.
- Número de Whatsapp del cliente.
- Correo electrónico del cliente.
- Mensaje sobre el objetivo de la visita.
- Número de personas que harán la visita.

Finalmente, el cliente simplemente hace clic en Programar horario. Con eso, esta visita entrará en la fila de atención programada mostrada por la aplicación de los vendedores.

![indeva2](//images.ctfassets.net/alneenqid6w5/sD5kRl2jv7QxksElwMibF/5aa5ec8582c10891ee90bfcf556144aa/indeva2.png)

<div class="alert alert-warning">
Por el momento, la confirmación de la programación debe ser realizada de forma manual por la tienda. El cliente no recibirá ningún mensaje automático.
</div>

## Aplicación de los vendedores

La aplicación de Indeva Store organiza la fila de programaciones realizadas para cada tienda física. Este puede ser usado por vendedores o gerentes tanto para controlar las próximas atenciones programadas como para la visualización del historial de visitas ya atendidas.

![indeva3](//images.ctfassets.net/alneenqid6w5/71ZOQFSA8uKJKMdjrfsaX1/ae2b7836ab6e76efe752cfd3cdca0dd4/indeva3.png)

Al hacer clic en una programación específica, el vendedor tiene acceso a sus detalles: fecha, hora de la visita, nombre del cliente, mensaje enviado, cantidad de personas y el número de teléfono del cliente.

Si desea entrar en contacto con el cliente a partir de esa pantalla, el vendedor puede hacer clic en el botón Abrir Whatsapp. Será direccionado directamente a una ventana de conversación con el cliente específico en la aplicación de mensajes.

![indeva4](//images.ctfassets.net/alneenqid6w5/6xnGRcIBINTYj7n9HDnTJ4/97e54074b046a5295936d66bd17761fe/indeva4.png)

<div class="alert alert-info">
La aplicación puede ser instalada en diversos dispositivos de la misma tienda, pero recomendamos que su equipo utilice una app por tienda, y no por vendedor.
</div>

## Implementación

### Registro de las tiendas en el admin de Indeva

El primer paso para implementar la funcionalidad de Atención Programada es registrar las tiendas físicas en el panel administrativo de Indeva.

Es allí donde debe definir la información que aparecerá en el formulario de programación:

- Descripción del evento
- Duración de cada programación
- Número máximo de reservas en el mismo horario
- Tiempo de tolerancia (en días)
- Tiempo mínimo de anticipación para cada programación
- Horarios de atención de la tienda

<div class="alert alert-info">
Cada tienda física debe ser registrada y configurada individualmente.
</div>

### Implementación del formulario en la tienda en línea

<div class="alert alert-info">
Esta orientación está dirigida a tiendas que usan la plataforma VTEX. En otras plataformas, el método de implementación del formulario será diferente.
</div>

Para insertar el iframe con el formulario en su tienda VTEX, debe crear una nueva página que contenga este iframe.

Hay dos opciones para crear esa página:

- A través del CMS de VTEX.
- A través de un componente instalable mediante VTEX IO (en este caso, su tienda necesita usar la estructura VTEX IO).

Para crear la página en el CMS, siga los pasos a continuación:

En el panel administrativo de VTEX, acceda al CMS y [cree un template de página](https://help.vtex.com/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/Y6dPEF6GzROQ8PuYKxrKe) que contenga el código del iframe.

[Asocie ese template a un layout](https://help.vtex.com/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/53N9sPOOOCqBRaoqmqTAOw).

Para tiendas que utilizan VTEX IO, existe un componente que permite insertar el iframe en una página de la tienda. Entienda cómo hacer esa implementación en la [documentación del componente vtex.iframe](https://vtex.io/docs/components/all/vtex.iframe@0.2.0/).

### Instalación de la aplicación

La aplicación para los vendedores y gerentes de la tienda está disponible tanto para Android como para iOS. Basta realizar la descarga en la app store de Apple o de Android, e instalar la aplicación.

> Nombre de la aplicación: __Indeva Store__

Después de instalar y abrir la aplicación, el vendedor deberá informar el token de 10 dígitos de la tienda para sincronizar el dispositivo e iniciar sesión.

![indeva5](//images.ctfassets.net/alneenqid6w5/8K9WlmZVH3omGfWus5jke/ce2eb6f9b3b9ba58ba119d285184aca5/indeva5.png)

Para recibir el token, entre en contacto con el equipo de Indeva por los canales de soporte:

- __Teléfono__: (21)3609-2830
- __Correo electrónico__: suporte@indeva.com.br

Si su tienda es cliente de Indeva, también es posible entrar en contacto con el equipo a través del chat en el panel administrativo de esa plataforma.
