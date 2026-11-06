---
title: 'Planificar la implementación de VTEX Sales App'
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-10-23T00:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: planning-vtex-sales-app-implementation
locale: es
---

El éxito de una operación con **VTEX Sales App** depende de decisiones de negocio tomadas antes de la configuración técnica. Este artículo presenta una guía para que tu empresa se familiarice con las decisiones y configuraciones de cada etapa.

Antes de iniciar la implementación, revisa estas cuatro etapas:

| Etapa a definir | Decisiones |
| --- | --- |
| [Casos de uso de Sales App](#definir-los-casos-de-uso-de-sales-app) | Principales situaciones en las que se utilizará **Sales App**. |
| [Arquitectura técnica](#definir-la-arquitectura-tecnica) | Estrategias [omnichannel](/es/docs/tracks/comercio-unificado-101) que se adoptarán y sus requisitos, como [cuentas franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia), puntos de recogida, almacenes e integración con el ERP. |
| [Operación de ventas](#definir-la-operacion-de-ventas) | Acceso y uso de **Sales App** para los vendedores, acciones que podrán realizar y el seguimiento de las ventas. El modelo de comisiones es un punto importante. En operaciones omnichannel, el engagement del equipo depende de cómo se acredite la venta realizada en la tienda y entregada por la tienda de ecommerce. |
| [Configuración de pagos](#definir-la-configuracion-de-pagos) | Medios de pago que se aceptarán, como link de pago, tarjeta y efectivo. Algunos métodos requieren la contratación y homologación de proveedores y adquirentes específicos para la operación física. |

> ℹ️ Si la arquitectura de tu cuenta es compleja o requiere recursos personalizados, considera contratar al equipo de Professional Services de VTEX para obtener mayor eficiencia y seguridad en la implementación. Si te interesa ese recurso, abre un ticket con [nuestro soporte comercial](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex#soporte-financiero-y-comercial).

## Definir los casos de uso de Sales App

Los casos de uso más frecuentes de **Sales App** son:

- **Ruptura de stock:** Sales App se usa solo cuando el producto no está disponible en la tienda, para venderlo desde otros almacenes.
- **Consulta de stock y ventas móviles:** Sales App es la primera opción de los vendedores para consultar el stock local y remoto y cerrar ventas en cualquier punto de la tienda.
- **Herramienta única de la tienda física:** Sales App reemplaza el punto de venta (PDV) tradicional en todas las ventas de la tienda.
- **Servicio al cliente remoto:** los vendedores usan Sales App para cerrar ventas asistidas por canales digitales.
- **Eventos y tiendas pop-up:** Sales App se puede llevar a donde esté el cliente, como en ferias o kioscos temporales.

> ℹ️ Si tienes un caso de uso específico o quieres ampliar tus ventas asistidas, abre un ticket con el [Soporte VTEX](https://help.vtex.com/support). Nuestro equipo te ayudará a entender cómo **Sales App** puede responder a las necesidades de tu negocio.

### Extensibilidad en Sales App

Para funcionalidades que **Sales App** no ofrece de forma nativa, como programas de fidelidad, servicios adicionales o formularios personalizados, evalúa el uso de [VTEX Sales App Extensibility](/es/docs/tutorials/vtex-sales-app-extensibility-es). Con este recurso tu equipo o un partner puede desarrollar módulos en puntos estratégicos de la jornada de ventas.

## Definir la arquitectura técnica

La arquitectura técnica depende de las estrategias que tu operación adoptará con **Sales App**. Las siguientes secciones presentan las principales estrategias y las decisiones y configuraciones requeridas por cada una.

### Pasillo infinito

El [Pasillo infinito](/es/docs/tracks/pasillo-infinito) permite que tus clientes accedan a todo el stock integrado entre los canales de venta. Es decir, un cliente que está en una tienda física puede comprar un producto del almacén de otras tiendas físicas o de la tienda de ecommerce, y el envío puede realizarse desde cualquiera de ellos.

- **Público objetivo:** empresas que buscan ventas incrementales, evitando la ruptura de stock local al ofrecer el catálogo de la tienda de ecommerce.
- **Decisiones:** modelo de almacenes y arquitectura de tiendas, incluyendo si habrá cuentas franquicia y [puntos de recogida](#recogida-en-tienda).
- **Requisitos:** tener Sales App instalado en la cuenta principal y definir la [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial) que va a usar.

#### Configuración del pasillo infinito

Elige la configuración según la arquitectura de la operación:

- **Sin [arquitectura omnichannel](/es/docs/tracks/comercio-unificado-101):** configura Sales App en la cuenta principal usando la misma política comercial y los mismos almacenes de la tienda de ecommerce.
- **Con arquitectura omnichannel y multialmacén:** registra cada tienda física como un almacén en la cuenta principal. Esta opción se recomienda si no se necesita gestionar los precios por tienda de forma separada.
- **Con cuentas franquicia:** crea una cuenta franquicia para cada tienda. Las cuentas franquicia tienen obligatoriamente el mismo catálogo que la cuenta principal, pero pueden tener configuración logística propia.

### Envío desde la tienda

El [Envío desde la tienda](/es/docs/tracks/configurar-ship-from-store) permite que el cliente reciba a domicilio pedidos con productos que salen del almacén de una tienda física. Es decir, la tienda funciona como un centro de distribución.

- **Público objetivo:** marcas que desean reducir costos y plazos de entrega usando las tiendas físicas más cercanas al cliente como origen de los pedidos.
- **Decisiones:** qué tiendas harán envíos, qué transportadoras atenderán cada tienda y cómo integrar el ERP para que el stock de cada tienda esté siempre actualizado.

#### Configuración de envío desde la tienda

- **Arquitectura de cuenta franquicia:** recomendamos crear una [cuenta franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia) para cada tienda para que cada una tenga su propia logística.
- **Configuración logística:** en la cuenta franquicia registra la transportadora como una [política de envío](/es/docs/tutorials/politica-de-envio), asocia esa política a un muelle e indica el muelle como origen del almacén de la tienda.
- **Integración con ERP:** obligatoria para que el stock de la tienda esté siempre actualizado.

### Recogida en tienda

Con la [recogida en tienda](/es/docs/tracks/configurar-tiendas-fisicas-como-puntos-de-recogida), las tiendas físicas funcionan como puntos de recogida. En **Sales App**, esto permite que el vendedor realice la venta en cualquier tienda física o tienda de ecommerce y que el cliente recoja el pedido en la tienda física de su preferencia.

- **Público objetivo:** marcas con tiendas físicas que desean ofrecer al cliente la opción de recoger el pedido en la tienda, reduciendo costos de envío y generando más visitas a las tiendas.
- **Decisiones:** las tiendas que actuarán como puntos de recogida, si los pedidos recogidos saldrán del almacén de la propia tienda o de otro almacén y el método de actualización del stock de cada tienda. Se recomienda la actualización mediante la integración con el ERP.

#### Configuración de la recogida en tienda

- **Arquitectura de cuenta franquicia:** recomendamos que cada tienda que funcione como punto de recogida sea una [cuenta franquicia](/es/docs/tutorials/que-es-una-cuenta-franquicia).
- **Configuración logística:** crea un [punto de recogida](/es/docs/tutorials/registro-de-puntos-de-recogida) y asócialo al almacén de la tienda siguiendo los pasos descritos en el artículo [Tiendas físicas como puntos de recogida](/es/docs/tracks/configurar-tiendas-fisicas-como-puntos-de-recogida). Además, asocia el punto de recogida a una [política de envío](/es/docs/tutorials/politica-de-envio).

### Venta de stock local y carritos mixtos

La [venta de stock local](/es/docs/tutorials/habilitar-venta-de-inventario-local-en-vtex-sales-app) permite que el cliente se lleve el producto en el momento de la compra en la tienda física, en una venta de tipo "Llevar ahora" (On Hands). Esta estrategia puede combinarse con carritos mixtos, cuando una misma venta contiene ítems que el cliente se lleva en el momento e ítems que se entregarán a domicilio desde otro almacén.

- **Público objetivo:** tiendas físicas que desean vender productos del stock local y combinar en un mismo pedido ítems para llevar en el momento e ítems para entrega.
- **Decisiones:** la integración del ERP y el sistema fiscal de la tienda para que el stock esté siempre actualizado y la factura se emita en el momento de la venta.

#### Configuración de la venta de stock local y carritos mixtos

- **Arquitectura de cuenta franquicia:** usa la misma base de la [recogida en tienda](#recogida-en-tienda), es decir, una cuenta franquicia para cada tienda, con un punto de recogida registrado con la dirección de la tienda física.
- **Configuración logística:** sigue las instrucciones de [venta de stock local](/es/docs/tutorials/habilitar-venta-de-inventario-local-en-vtex-sales-app) para vincular el punto de recogida al almacén de la tienda y habilitar ventas de tipo "Llevar ahora" (On Hands). La venta de carritos mixtos ya viene configurada de forma predeterminada en las tiendas VTEX.
- **Facturación:** integra las facturas al sistema de facturación mediante el punto de venta o el ERP para permitir la salida inmediata del producto.
- **Conciliación:** ajusta el sistema y la operación de conciliación para garantizar el flujo correcto de facturación de acuerdo con las definiciones de tu equipo financiero.

> ℹ️ Para usar la recogida en tienda y los carritos mixtos, debes activar **Checkout v6**. Esta versión permite que el cliente elija un punto de recogida y divida un mismo pedido entre ítems entregados en casa e ítems recogidos en tienda. Para más información, consulta el artículo [Cómo activar Checkout v6](/es/docs/tutorials/activar-el-checkout-v6).

## Definir la operación de ventas

Con la arquitectura definida, decide cómo los vendedores usarán Sales App en el día a día y cómo se dará seguimiento a las ventas.

### Acceso a Sales App

- **Dispositivo:** si los vendedores usarán Sales App en un dispositivo móvil (celular o tablet), en la computadora o en ambos.
- **Inicio de sesión:** si habrá un inicio de sesión único por tienda o uno para cada vendedor.
- **Código del vendedor:** cuál será el formato del código y si será obligatorio u opcional en el flujo de venta.

Con estas definiciones, registra las [tiendas físicas](/es/docs/tracks/gestionar-tiendas-fisicas-en-vtex-sales-app) y los [vendedores](/es/docs/tracks/gestionar-vendedores-en-vtex-sales-app).

### Permisos de los vendedores

Puedes habilitar o deshabilitar algunas acciones de los vendedores en **Sales App**. Cada configuración tiene su propia forma de activación. Las principales son:

- Aplicar precio manual.
- [Forzar stock local](https://developers.vtex.com/docs/guides/force-stock-availability).
- Cancelar pedido.
- Ver el propio desempeño de ventas.
- Ver el desempeño de ventas de los demás vendedores.

### Desempeño y comisiones

- **Seguimiento en la app:** activa el desempeño de ventas para que los vendedores den seguimiento a sus métricas básicas directamente en Sales App.
- **Integración con sistemas internos:** usa los campos del pedido para enviar los datos de venta a tus sistemas internos y calcular las comisiones. En [customData.customApps](https://developers.vtex.com/docs/guides/orderform-fields#customdata), el `id` de Sales App es `sales-app`.
- **Modelo de comisiones:** define con los departamentos internos, tiendas propias y franquicias la manera de contabilizar las ventas omnichannel en las metas y la distribución entre tiendas, franquicias, gerentes y vendedores. Esta definición no depende de la configuración en VTEX, pero es importante para el modelo de distribución y para el engagement del equipo con Sales App.

> ⚠️ **Sales App** no calcula la comisión de ventas. Este cálculo debe realizarlo un sistema externo con base en los datos del pedido.

## Definir la configuración de pagos

Determina los medios de pago que estarán disponibles en **Sales App**. Algunos medios reutilizan la configuración de la tienda de ecommerce, mientras que otros requieren contratar partners o integraciones:

- **Link de pago (social selling):** usa el checkout de la tienda de ecommerce. Para configurarlo, sigue el tutorial [Cómo activar la app Carrito Compartido (Social Selling)](/es/docs/tutorials/como-activar-la-app-carrito-compartido).
- **Pix (Brasil):** usa el mismo gateway de pago de la tienda de ecommerce.
- **Efectivo:** el pago se controla fuera de la plataforma, y el pedido se registra con el medio pagaré.
- **Adquirentes homologados:** requieren contratar un partner disponible en tu región, configurar los terminales de pago y el proveedor en la cuenta principal, y realizar pruebas.
- **Pagos no integrados:** usan el medio pagaré y requieren integración con sistemas externos, como punto de venta o ERP, para recibir la confirmación del pago. Se recomiendan para tarjetas private label o medios de pago ya consolidados en la tienda.

> ℹ️ Para más información, consulta el artículo [Configurar medios de pago para VTEX Sales App](/es/docs/tracks/configuracion-de-metodos-de-pago-vtex-sales-app).
