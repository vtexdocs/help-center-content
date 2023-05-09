---
title: Cómo funciona el Healthcheck de VTEX
id: 4Dkcpwvbm0mWOOyimwCaWw
createdAt: 2019-01-24T20:45:43.117Z
updatedAt: 2023-05-08T19:39:43.547Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:13:46.649Z
contentType: tutorial
productTeam: Others
author: authors_59
slug: como-funciona-el-healthcheck-de-vtex
legacySlug: como-funciona-el-healthcheck-de-vtex
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

El Healthcheck de VTEX es una página pública que tiene como objetivo monitorear el status de los servicios de nuestra plataforma. En Healthcheck, tenemos más de 100 pruebas rodando por minuto. Por ese dashboard, usted puede acompañar la salud de cada módulo en tiempo real.

## Cómo funcionan las pruebas de status

Cada módulo tiene robots que hacen llamadas para comprobar el estado del servicio. Si el módulo responde con éxito, significa que el servicio funciona correctamente. En el Healthcheck, el módulo aparecerá con la señal de `Healthy`.

Si el robot recibe __dos veces seguidas__ una respuesta inesperada, una alerta de `Warning` aparecerá en la caja de este módulo en el Healthcheck. Ya en esta etapa, nuestro equipo se va movilizando para resolver una posible inestabilidad del módulo. En este momento, su tienda __no está impactada__.

Si el robot recibe __tres veces seguidas__ una respuesta inesperada, una alerta de `Unhealthy` aparecerá en la caja de este módulo en el Healthcheck. Si esta inestabilidad está afectando a las ventas de su tienda, esto será informado en nuestra [página de status](http://status.vtex.com/).

## Qué significa cada caja de Healthcheck

### Orders I y Orders II

Monitorea el cierre de compras en las tiendas. Si están con la señalización de `Healthy`, esto significa que las compras se cierran normalmente.

En __Orders I__, las pruebas se realizan desde nuestra red interna. En __Orders II__, las pruebas se realizan desde una red externa. Estas dos comprobaciones son importantes para probar la conectividad desde diferentes datacenters.

### Tasas y Promociones

Monitorea el módulo responsable de las promociones.

### Payments

Monitorea el módulo responsable de los servicios de pago.

### JANUS

Monitorea si las llamadas se están enrutadas correctamente para cada módulo.

### PortalV2

Monitorea el front-end del Checkout.

### Profile System

Monitorea el módulo responsable de almacenar la información de sus clientes.

### Dynamic Storage

Monitorea el módulo responsable de las estructuras de datos del Master Data.

### Fulfillment

Monitora el módulo responsable de las ventas de la tienda actuando como seller.

### Logística

Monitorea el módulo responsable de la gestión de las informaciones de logística (stocks, docas, transportistas, reservas etc.)

### License Manager

Monitorea el módulo responsable de la gestión de cuentas, permisos y perfiles de acceso a la plataforma.

### VTEX ID

Monitorea el módulo responsable de la identificación de los usuarios en la plataforma.

### Workflow

Monitorea el módulo responsable de la información del flujo de pedido.

### Catalog System

Monitorea el módulo responsable de la gestión de las informaciones del catálogo de las tiendas.

### File System

Monitorea el servicio responsable de los archivos de su tienda. Esto incluye los archivos de imágenes de los productos, archivos `.css`, archivos `.js` y etc.

### Giftcard

Monitorea el servicio responsable de la creación y mantenimiento de vales.

### Master Data

Monitorea el servicio del Master Data.
