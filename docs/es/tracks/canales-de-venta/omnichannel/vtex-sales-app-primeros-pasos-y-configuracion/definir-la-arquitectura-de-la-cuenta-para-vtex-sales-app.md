---
title: 'Definir la arquitectura de la cuenta para VTEX Sales App'
createdAt: 2026-09-25T00:00:00.000Z
updatedAt: 2026-10-21T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: define-the-vtex-sales-app-account-architecture
locale: es
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 3
---

Antes de instalar **VTEX Sales App**, define las estrategias [omnichannel](/es/docs/tracks/comercio-unificado-101) que se van a implementar en tu operación. Esta decisión define los requisitos que la cuenta necesita tener antes de las siguientes etapas de esta serie de artículos, como [cuentas franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia), [puntos de recogida](/es/docs/tutorials/puntos-de-recogida) e integración con el ERP. Los ajustes que debes configurar en cada estrategia se describen en el artículo [Planificar la implementación de VTEX Sales App](/es/docs/tutorials/planificar-la-implementacion-de-vtex-sales-app).

## Definir la arquitectura técnica

La arquitectura de la cuenta depende de las estrategias adoptadas:

- **[Pasillo infinito](/es/docs/tracks/pasillo-infinito):** el cliente accede a todo tu stock, integrado entre los canales de venta. Es decir, un cliente que está en una tienda física puede comprar un producto del almacén de otras tiendas físicas o de la tienda de ecommerce, y el envío puede realizarse desde cualquiera de esos almacenes. Más información en [Configuración del pasillo infinito](/es/docs/tutorials/planificar-la-implementacion-de-vtex-sales-app#configuracion-del-pasillo-infinito).
- **[Envío desde la tienda](/es/docs/tracks/configurar-ship-from-store):** el cliente recibe a domicilio pedidos con productos que salen del almacén de una tienda física, de forma que la tienda funciona como un centro de distribución. Más información en [Configuración de envío desde la tienda](/es/docs/tutorials/planificar-la-implementacion-de-vtex-sales-app#configuracion-de-envio-desde-la-tienda).
- **[Recogida en tienda](/es/docs/tracks/configurar-tiendas-fisicas-como-puntos-de-recogida):** las tiendas físicas funcionan como puntos de recogida, lo que permite al vendedor realizar la venta en cualquier tienda física o tienda de ecommerce, y garantiza que el cliente pueda recoger el pedido en la tienda de su preferencia. Más información en [Configuración de la recogida en tienda](/es/docs/tutorials/planificar-la-implementacion-de-vtex-sales-app#configuracion-de-la-recogida-en-tienda).
- **[Venta de stock local y carritos mixtos](/es/docs/tutorials/habilitar-venta-de-inventario-local-en-vtex-sales-app):** el cliente se lleva el producto en el momento de la compra en la tienda física, es decir, permite la venta del tipo "Llevar ahora" (On Hands). Esta estrategia puede combinarse con carritos mixtos, cuando una misma venta contiene ítems que el cliente se lleva de inmediato e ítems que se entregarán en su domicilio desde otro almacén. Más información en [Configuración de la venta de stock local y carritos mixtos](/es/docs/tutorials/planificar-la-implementacion-de-vtex-sales-app#configuracion-de-la-venta-de-stock-local-y-carritos-mixtos).

## Crear cuentas franquicia

Si la estrategia elegida requiere cuentas franquicia, crea al menos una antes de continuar con la instalación de **Sales App** y las pruebas iniciales. Debes crear todas las cuentas antes del go live y configurar el stock y los equipos de las tiendas. Para crear cuentas franquicia, abre un ticket con el [Soporte VTEX](https://help.vtex.com/support).

Cada cuenta franquicia representa una tienda física, tiene un Admin VTEX propio y logística independiente, y hereda el catálogo de la cuenta principal. **Sales App** se instala solo en la cuenta principal y busca en las cuentas franquicia la información de almacén y envío de cada tienda.

> ⚠️ Cada cuenta franquicia debe tener un nro. de registro de persona jurídica diferente para que el pago de los pedidos funcione correctamente.

## Extensibilidad en Sales App

Para funcionalidades que **Sales App** no ofrece de forma nativa, como programas de fidelidad, servicios adicionales o formularios personalizados, evalúa el uso de [VTEX Sales App Extensibility](/es/docs/tutorials/vtex-sales-app-extensibility-es). Con este recurso tu equipo o un partner puede desarrollar módulos en puntos de la jornada de ventas.
