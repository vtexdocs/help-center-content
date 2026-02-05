---
title: 'Fulfillment y logística en VTEX'
id: 53udnvI5eBy8DKo8FOjMoP
status: PUBLISHED
createdAt: 2022-01-05T21:24:22.705Z
updatedAt: 2023-03-29T20:29:49.016Z
publishedAt: 2023-03-29T20:29:49.016Z
firstPublishedAt: 2022-01-05T21:37:17.296Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: fulfillment-logistics-vtex
legacySlug: logistica
locale: es
subcategoryId: 63f22GypJIBLnMGh1QZUi0
---

La logística o fulfillment es el proceso de planificación y ejecución del transporte y almacenamiento de mercancías en la tienda, y envío de pedidos al cliente. Por lo tanto, está directamente relacionada con la experiencia del cliente y la estrategia de negocio de la tienda. De esta manera, la 
[configuración logística](/es/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP#configuracion-del-proceso-logistico) de tu tienda es fundamental. 

VTEX te permite registrar e controlar el _stock_, gestionar las tarifas de envío, controlar la disponibilidad de los ítems y hacer el seguimiento de las entregas. 

> ℹ️ Si tu tienda no ha dado los primeros pasos en el módulo de **Envío**, consulta el artículo [Logística: primeros pasos](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Y8C1JuPtO5E61Ew91tq1a). Consulta el artículo [Glosario de logística](/es/docs/tutorials/glosario-de-logistica) para consultar el significado de los términos logísticos utilizados en VTEX. Las configuraciones logísticas disponibles mediante [API](https://developers.vtex.com/vtex-rest-api/reference/logistics-api-overview).

Para saber qué configuraciones logísticas son necesarias y cómo realizarlas, primero hay que entender los pasos del flujo de compra de un producto:

1. El proceso comienza en el _storefront_: el cliente selecciona los productos que desea y procede al _checkout_.
2. En el _checkout_, el cliente introduce su ubicación y la plataforma verifica las formas de envío disponibles. En esta etapa de la compra, la plataforma calcula la mejor [estrategia de envío](/es/docs/tutorials/estrategia-de-envio) para el cliente. Para ello, VTEX: 
    * Verifica la disponibilidad de los ítems y el lugar donde se recogerán ([almacén](/es/docs/tutorials/almacen));
    * Selecciona el [muelle](/es/docs/tutorials/muelles) y el momento en que la transportadora debe recoger los ítems;
    * Analiza las [políticas de envío](/es/docs/tutorials/politica-de-envio) que satisfacen las condiciones de envío del cliente. A través de la política de envío, la plataforma analiza las transportadoras que pueden entregar el pedido y los [puntos de recogida](/es/docs/tutorials/puntos-de-recogida) disponibles. 
3. Tras el cálculo, la plataforma presenta las formas de entrega disponibles para el cliente (con plazos y valores). El cliente elige un tipo de envío (recogida o entrega) y finaliza el pedido. 

    Una vez finalizado el pedido, se [autoriza la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-autorizada) de los productos. Así, la plataforma se asegura de que los ítems no puedan volver a venderse. 

4. Cuando se confirma el [pago](/es/tracks/pagos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB), también [se confirma la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-confirmada).
5. Tras la confirmación del pago y el vencimiento del [periodo de carencia para la cancelación](/es/docs/tutorials/configurar-el-tiempo-de-espera-para-cancelar-el-pedido), la plataforma espera a que el administrador de la tienda prepare los ítems. Cuando el administrador de la tienda[ inicia la preparación del pedido,](/es/docs/tutorials/enviar-pedido-al-status-a-preparar-la-entrega) indica a la plataforma que se están preparando los ítems del pedido y sus facturas. A partir de esta etapa se [reconoce la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-reconocida).
6. La tienda incluye la [factura](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) del pedido en la plataforma.  
7. Se inicia el proceso de envío:
    * En el caso de los pedidos que se envían a la dirección del cliente (entrega), la tienda envía los paquetes al [muelle](/es/docs/tutorials/muelles) donde la [transportadora](/es/docs/tutorials/transportadoras-en-vtex) debe recogerlos. La transportadora (elegida mediante las [políticas de envío](/es/docs/tutorials/politica-de-envio)) entrega el pedido.
    * En el caso de los pedidos que se envían a los [puntos de recogida](/es/docs/tutorials/puntos-de-recogida) (recogida), la tienda debe dejar los paquetes disponibles para que el cliente los recoja. Para ello, los paquetes se sacan del [almacén](/es/docs/tutorials/almacen) y se transportan al punto de recogida. El transporte desde el muelle hasta el punto de recogida se define por una[ política de envío](/es/docs/tutorials/politica-de-envio).
8. Tras la facturación y el envío, la tienda se encarga de actualizar el _stock_, lo que para la plataforma significa también dar de baja a los ítems en el _stock_.

> ℹ️ Ten en cuenta que el proceso de envío dependerá de la configuración realizada en la plataforma. Aquí presentamos los escenarios para cada tipo de envío (entrega y recogida), pero hay otros flujos posibles en el proceso de envío. Por ejemplo, cuando se realiza el envío por recogida y el almacén coincide con el punto de recogida, no es necesario transportar los paquetes entre estos lugares.

![Envio ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/visión-general-de-la-logística/fulfillment-logistica-vtex_1.svg)
## Configuración del proceso logístico

El proceso logístico debe configurarse según las necesidades de tu tienda. Estas configuraciones se hacen en el módulo **Envío**. Mira las funcionalidades disponibles en el módulo y cómo afecta cada una de ellas a tu negocio:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Estrategia de envío](/es/docs/tutorials/estrategia-de-envio)<span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">
     Gestión de los almacenes, los muelles y las políticas de envío. A partir de las estrategias de envío configuradas, la plataforma calcula las posibilidades de envío y las presenta al cliente en el *checkout*.
<body>
<ul>
<li>[Almacén](/es/docs/tutorials/almacen);</li>
<li>[Muelle](/es/docs/tutorials/muelles);</li>
<li>[Política de envío](/es/docs/tutorials/politica-de-envio).</li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Capacidad de entrega](/es/docs/tutorials/gestionar-capacidad-de-entrega)<span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">
     Gestión de las entregas programadas. Puedes hacer un seguimiento de las entregas ya programadas y verificar los periodos que aún están disponibles.
<body>
<ul>
<li>[Entrega programada](/es/docs/tutorials/entrega-programada).</li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Tarifas de envío](/es/docs/tutorials/tarifas-de-envio)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gestión de los costos de envío de tu tienda.
<body>
<ul>
<li>[Gestionar las tarifas de envío](/es/docs/tutorials/gestionar-las-tarifas-de-envio);</li>
<li>[Costo final del envío](/es/docs/tutorials/costo-final-del-envio);</li>
<li>[Adicionales de flete](/es/docs/tutorials/adicionales-de-flete)<span style="text-decoration:underline;">.</span></li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
<td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Gestión del stock](/es/docs/tutorials/gestionar-items-en-inventario)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">
     Gestión de la disponibilidad de los ítems registrados en el *stock*. Puedes seguir el movimiento y las reservas de ítems.
<body>
<ul>
<li>[Acceder a las reservas de un producto](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#como-seguir-el-status-de-la-reserva);</li>
<li>[Cómo funciona la reserva](/es/docs/tutorials/como-se-maneja-la-reserva).</li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Simulador de envío](/es/docs/tutorials/simulador-de-envio)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Herramienta de simulación de envíos, que permite reproducir escenarios de envío (disponibilidad de ítems, tipos de entrega y recogida). 
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Envío por geolocalización](/es/docs/tutorials/gestionar-geolocalizacion)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Registro de los lugares de entrega mediante la latitud y la longitud de las direcciones.
Esta funcionalidad se utiliza normalmente en direcciones de zonas rurales e industriales o en zonas de riesgo (donde es necesario eliminar ciertos lugares de entrega dentro de una región).
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Feriados](/es/docs/tutorials/registrar-feriados)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Registro de los días que no se considerarán hábiles en tu tienda. 
Los días registrados como feriados no se contabilizan en el plazo de entrega de los pedidos.
<body>
<ul>
<li>[Registro de feriados](/es/docs/tutorials/registrar-feriados).</li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Configuración</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gestión de configuraciones específicas de las rutas logísticas. Estas configuraciones permiten detallar las condiciones de entrega que estarán disponibles para el cliente. Las posibles configuraciones en esta sección son:
<body>
<ul>
<li>[Adicional de flete](/es/docs/tutorials/adicionales-de-flete): costo adicional sobre el valor de la [tarifa de envío](/es/docs/tutorials/tarifas-de-envio);</li>
<li>[Envío](/es/docs/tutorials/configurar-grupos-de-envio): envío de un grupo de paquetes;</li>
<li>[Modalidad](/es/docs/tutorials/como-se-maneja-el-modal): modalidad de los ítems aceptados para la entrega.</li> 
<li>[División de la carga](/es/docs/tutorials/como-se-maneja-el-reparto-de-carga): cómo deben dividirse los productos para la entrega del pedido.</li>
<li>[Alerta de stock crítico](/es/docs/tutorials/configurar-la-alerta-de-stock-critico): alerta para cuando la cantidad de ítems está por debajo de lo previsto. </li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Puntos de recogida](/es/docs/tutorials/puntos-de-recogida)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gestión de los puntos de recogida. Esta funcionalidad permite a la tienda ofrecer a los clientes la opción de recoger pedidos en puntos físicos.
<body>
<ul>
<li>[Configurar puntos de recogida](/es/docs/tutorials/registro-de-puntos-de-recogida).</li>
</ul>
</body>
   </td>
  </tr>
</table>

