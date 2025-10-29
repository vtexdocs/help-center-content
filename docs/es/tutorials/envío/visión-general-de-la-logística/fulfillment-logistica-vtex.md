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

> ℹ️ Si tu tienda no ha dado los primeros pasos en el módulo de **Envío**, consulta el artículo [Logística: primeros pasos](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Y8C1JuPtO5E61Ew91tq1a). Consulta el artículo [Glosario de logística](/es/tutorial/logistics-glossary--16DSSiXn548rsidi0A8Hby) para consultar el significado de los términos logísticos utilizados en VTEX. Las configuraciones logísticas disponibles mediante [API](https://developers.vtex.com/vtex-rest-api/reference/logistics-api-overview).

Para saber qué configuraciones logísticas son necesarias y cómo realizarlas, primero hay que entender los pasos del flujo de compra de un producto:

1. El proceso comienza en el _storefront_: el cliente selecciona los productos que desea y procede al _checkout_.
2. En el _checkout_, el cliente introduce su ubicación y la plataforma verifica las formas de envío disponibles. En esta etapa de la compra, la plataforma calcula la mejor [estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) para el cliente. Para ello, VTEX: 
    * Verifica la disponibilidad de los ítems y el lugar donde se recogerán ([almacén](/es/tutorial/almacen--6oIxvsVDTtGpO7y6zwhGpb));
    * Selecciona el [muelle](/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj) y el momento en que la transportadora debe recoger los ítems;
    * Analiza las [políticas de envío](/es/tutorial/politica-de-envio--tutorials_140) que satisfacen las condiciones de envío del cliente. A través de la política de envío, la plataforma analiza las transportadoras que pueden entregar el pedido y los [puntos de recogida](/es/tutorial/como-funcionan-puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R) disponibles. 
3. Tras el cálculo, la plataforma presenta las formas de entrega disponibles para el cliente (con plazos y valores). El cliente elige un tipo de envío (recogida o entrega) y finaliza el pedido. 

    Una vez finalizado el pedido, se [autoriza la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-autorizada) de los productos. Así, la plataforma se asegura de que los ítems no puedan volver a venderse. 

4. Cuando se confirma el [pago](/es/tracks/pagos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB), también [se confirma la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-confirmada).
5. Tras la confirmación del pago y el vencimiento del [periodo de carencia para la cancelación](/es/tutorial/configurar-el-tiempo-de-espera-para-cancelar-el-pedido--jYFdnPDtNm4WCEkYWqqC), la plataforma espera a que el administrador de la tienda prepare los ítems. Cuando el administrador de la tienda[ inicia la preparación del pedido,](/es/tutorial/enviar-pedido-al-status-listo-para-manejo--tutorials_198) indica a la plataforma que se están preparando los ítems del pedido y sus facturas. A partir de esta etapa se [reconoce la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-reconocida).
6. La tienda incluye la [factura](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) del pedido en la plataforma.  
7. Se inicia el proceso de envío:
    * En el caso de los pedidos que se envían a la dirección del cliente (entrega), la tienda envía los paquetes al [muelle](/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj) donde la [transportadora](/es/tutorial/transportadoras-en-vtex--7u9duMD5UQa2QQwukAWMcE) debe recogerlos. La transportadora (elegida mediante las [políticas de envío](/es/tutorial/politica-de-envio--tutorials_140)) entrega el pedido.
    * En el caso de los pedidos que se envían a los [puntos de recogida](/es/tutorial/como-funcionan-puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R) (recogida), la tienda debe dejar los paquetes disponibles para que el cliente los recoja. Para ello, los paquetes se sacan del [almacén](/es/tutorial/almacen--6oIxvsVDTtGpO7y6zwhGpb) y se transportan al punto de recogida. El transporte desde el muelle hasta el punto de recogida se define por una[ política de envío](/es/tutorial/politica-de-envio--tutorials_140).
8. Tras la facturación y el envío, la tienda se encarga de actualizar el _stock_, lo que para la plataforma significa también dar de baja a los ítems en el _stock_.

> ℹ️ Ten en cuenta que el proceso de envío dependerá de la configuración realizada en la plataforma. Aquí presentamos los escenarios para cada tipo de envío (entrega y recogida), pero hay otros flujos posibles en el proceso de envío. Por ejemplo, cuando se realiza el envío por recogida y el almacén coincide con el punto de recogida, no es necesario transportar los paquetes entre estos lugares.

![Envio ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/visión-general-de-la-logística/fulfillment-logistica-vtex_1.svg)
## Configuración del proceso logístico

El proceso logístico debe configurarse según las necesidades de tu tienda. Estas configuraciones se hacen en el módulo **Envío**. Mira las funcionalidades disponibles en el módulo y cómo afecta cada una de ellas a tu negocio:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)<span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">
     Gestión de los almacenes, los muelles y las políticas de envío. A partir de las estrategias de envío configuradas, la plataforma calcula las posibilidades de envío y las presenta al cliente en el *checkout*.
<body>
<ul>
<li>[Almacén](/es/tutorial/almacen--6oIxvsVDTtGpO7y6zwhGpb);</li>
<li>[Muelle](/es/tutorial/muelles--5DY8xHEjOLYDVL41Urd5qj);</li>
<li>[Política de envío](/es/tutorial/politica-de-envio--tutorials_140).</li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Capacidad de entrega](/es/tutorial/gestionar-capacidad-de-entrega--2y217FQZCjD0I1n62yxVcz)<span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">
     Gestión de las entregas programadas. Puedes hacer un seguimiento de las entregas ya programadas y verificar los periodos que aún están disponibles.
<body>
<ul>
<li>[Entrega programada](/es/tutorial/entrega-programada--22g3HAVCGLFiU7xugShOBi).</li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Tarifas de envío](/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gestión de los costos de envío de tu tienda.
<body>
<ul>
<li>[Gestionar las tarifas de envío](/es/tutorial/gestionar-las-tarifas-de-envio--tutorials_141);</li>
<li>[Costo final del envío](/es/tutorial/costo-final-del-envio--5bwhIO108VA5Y2YOpef9lV);</li>
<li>[Adicionales de flete](/es/tutorial/adicionales-de-flete--2vqGwMn0LabkOHY6zSHYNV)<span style="text-decoration:underline;">.</span></li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
<td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Gestión del stock](/es/tutorial/gestionar-items-en-inventario--tutorials_139)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">
     Gestión de la disponibilidad de los ítems registrados en el *stock*. Puedes seguir el movimiento y las reservas de ítems.
<body>
<ul>
<li>[Acceder a las reservas de un producto](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#como-seguir-el-status-de-la-reserva);</li>
<li>[Cómo funciona la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92).</li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Simulador de envío](/es/tutorial/simulador-de-envio--tutorials_144)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Herramienta de simulación de envíos, que permite reproducir escenarios de envío (disponibilidad de ítems, tipos de entrega y recogida). 
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Envío por geolocalización](/es/tutorial/gestionar-geolocalizacion--tutorials_138)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Registro de los lugares de entrega mediante la latitud y la longitud de las direcciones.
Esta funcionalidad se utiliza normalmente en direcciones de zonas rurales e industriales o en zonas de riesgo (donde es necesario eliminar ciertos lugares de entrega dentro de una región).
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Feriados](/es/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Registro de los días que no se considerarán hábiles en tu tienda. 
Los días registrados como feriados no se contabilizan en el plazo de entrega de los pedidos.
<body>
<ul>
<li>[Registro de feriados](/es/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk).</li>
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
<li>[Adicional de flete](/es/tutorial/adicionales-de-flete--2vqGwMn0LabkOHY6zSHYNV): costo adicional sobre el valor de la [tarifa de envío](/es/tutorial/tarifas-de-envio--1Balpg3rv0854udEPedvMM);</li>
<li>[Envío](/es/tutorial/configurar-grupos-de-envio--tutorials_118): envío de un grupo de paquetes;</li>
<li>[Modalidad](/es/tutorial/como-se-maneja-el-modal--tutorials_125): modalidad de los ítems aceptados para la entrega.</li> 
<li>[División de la carga](/es/tutorial/como-se-maneja-el-reparto-de-carga--tutorials_109): cómo deben dividirse los productos para la entrega del pedido.</li>
<li>[Alerta de stock crítico](/es/tutorial/configurar-la-alerta%20de%20Stock%20Cr%C3%ADtico--6FD0GHeQPCsKIMgkQ88SGu): alerta para cuando la cantidad de ítems está por debajo de lo previsto. </li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Puntos de recogida](/es/tutorial/como-funcionan-puntos-de-recogida--2fljn6wLjn8M4lJHA6HP3R)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gestión de los puntos de recogida. Esta funcionalidad permite a la tienda ofrecer a los clientes la opción de recoger pedidos en puntos físicos.
<body>
<ul>
<li>[Configurar puntos de recogida](/es/tutorial/configurar-puntos-de-recogida-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).</li>
</ul>
</body>
   </td>
  </tr>
</table>

