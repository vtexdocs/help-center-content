---
title: 'Responsabilidades en el ecosistema VTEX'
id: 3vL9aWICDr3WR64DYi1fJ3
status: PUBLISHED
createdAt: 2024-01-31T17:08:24.444Z
updatedAt: 2024-02-16T17:22:16.507Z
publishedAt: 2024-02-16T17:22:16.507Z
firstPublishedAt: 2024-01-31T23:11:13.804Z
contentType: tutorial
productTeam: Billing
author: 1malnhMX0vPThsaJaZMYm2
slugEN: responsibilities-in-the-vtex-ecosystem
locale: es
legacySlug: responsabilidades-en-el-ecosistema-vtex
subcategoryId: 1VvCpaa8NCA6a0MK6W6oWg
---

VTEX considera que la colaboración es fundamental para el futuro del ecommerce, y sostiene que las asociaciones son imprescindibles para el éxito en la operación del retailer. Durante la operación de la tienda es habitual que surjan dudas sobre las funciones y responsabilidades de cada player del ecosistema.

Para optimizar la operación de tu tienda y garantizar una comunicación eficaz entre el retailer y el soporte de VTEX, este artículo presenta las responsabilidades de los principales players implicados en una operación de ecommerce. Consulta a continuación las responsabilidades en cada escenario:

- [Integraciones back office (ERP / PIM / WMS)](#integraciones-back-office-erp-pim-wms)
- [Integraciones con proveedores de pago](#integraciones-con-proveedores-de-pago)
- [Agencias implementadoras](#agencias-implementadoras)
- [Integraciones con marketplaces](#integraciones-con-marketplaces)

## Integraciones back office (ERP / PIM / WMS)

Durante la configuración inicial de VTEX, si tu tienda utiliza [integraciones externas con ERP/PIM/WMS](https://developers.vtex.com/docs/guides/erp-integration-guide), es responsabilidad de estos sistemas enviar los productos, precios y stock de tu tienda a VTEX. A continuación, es necesario desarrollar un middleware, que será responsable de enviar y recibir información de VTEX en función de los eventos rutinarios de tu operación.

Después de configurar la integración de productos, precios y stock, así como de desarrollar el middleware, el flujo de información se dará como se ilustra en el diagrama a continuación.

![back-office-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Support/Operational/responsabilidades-en-el-ecosistema-vtex_1.PNG)

Durante las operaciones rutinarias, las responsabilidades se dividen de la siguiente manera:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <tr>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Player</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Responsabilidades</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>ERP / PIM / WMS</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">Envío de la siguiente información a VTEX a través de la integración:
        <ul>
          <li>Modificaciones en el registro de productos</li>
          <li>Precios</li>
          <li>Stock</li>
          <li>Factura</li>
          <li>Información de seguimiento del pedido</li>
          <li>Modificaciones en el pedido</li>
          <li>Cancelaciones</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>VTEX</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">Envío de la siguiente información al ERP, según lo configurado por la tienda a través de <a href="https://developers.vtex.com/docs/guides/orders-feed" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Orders Feed</a> o <a href="https://developers.vtex.com/docs/guides/orders-feed" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Hook</a>:
        <ul>
          <li>Notificaciones de un nuevo pedido creado.</li>
          <li>Notificaciones sobre el progreso de un pedido.</li>
        </td>
    </tr>
  </tbody>
</table>

## Integraciones con proveedores de pago

Para procesar los pagos de los pedidos en una tienda VTEX, los integrantes de la infraestructura de pago dividen sus responsabilidades de la siguiente manera:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <tr>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Player</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Responsabilidades</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Retailer</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Contratar el servicio de un proveedor de pago (gateways, adquirentes o subadquirentes).</li>
          <li>Contratar los servicios de un proveedor de servicios antifraude (opcional).</li>
          <li>Configurar en la tienda los proveedores de pago y antifraude con los cuales se ha formalizado contrato.</li>
          <li>Configurar en la tienda los medios y condiciones de pago de acuerdo con las especificaciones de cada contrato establecido con los proveedores de servicios de pago y antifraude.</li>
          <li>Efectuar manualmente la cancelación o contracargo de un pago cuando este no sea realizado automáticamente por el proveedor de pago o en casos específicos en los que se requiera la intervención manual del retailer.</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Proveedores de pago (gateways, adquirentes o subadquirentes)</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Desarrollar la integración del proveedor de pago según las instrucciones disponibles en <a href="https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Integrating a new payment provider on VTEX</a>.</li>
          <li>Obtener la certificación <a href="https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">PCI-DSS</a> o desarrollar la integración con VTEX utilizando <a href="https://developers.vtex.com/docs/guides/payments-integration-secure-proxy" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Secure Proxy</a> para procesar transacciones de pago que contengan datos sensibles, como tarjetas de crédito, débito y tarjeta de tienda (cobranded).
          </li>
          <li>Procesar las transacciones financieras de forma segura y eficaz, permitiendo:
            <ul>
              <li>Aprobar o denegar pagos, de conformidad con las políticas internas.</li>
              <li>Capturar o reembolsar pagos.</li>
              <li>Adquirente: procesar pagos efectuados con tarjetas de crédito y débito.</li>
              <li>Subadquirente: intermediar pagos entre adquirentes, proveedores antifraude y retailers.</li>
              <li>Transmitir información sobre el status de las transacciones de pago al gateway de VTEX.</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Proveedor de antifraude</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Realizar análisis de riesgos sobre actividades fraudulentas en transacciones con tarjetas de crédito, débito y tarjetas de tienda (cobranded).</li>
          <li>Transmitir la información de los análisis al gateway VTEX.</li>
        </ul>
      </td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 15rem;"><strong>Gateway VTEX</strong></td>
      <td class="t-body pa5" style="min-width: 15rem;">
        <ul>
          <li>Crear transacciones de pago para nuevos pedidos.</li>
          <li>Enviar información sobre transacciones y pedidos a los partners responsables por procesar o analizar datos de pago (proveedores de pago y antifraude).</li>
          <li>Registrar todas las acciones que tienen lugar en el flujo de una operación de pago, como la creación, aprobación, cancelación, etc.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Al detectar cualquier inconsistencia o error durante la operación de pago de un pedido, el retailer deberá:

1. Entrar en contacto con los responsables de la respectiva transacción (proveedores de pago y antifraude).

2. Si la incidencia no se resuelve, ponerse en contacto con el [soporte VTEX](https://help.vtex.com/es/faq/como-funciona-el-suporte-de-vtex--3kACEfni4m8Yxa1vnf2ebe) indicando los detalles de la misma.

## Agencias implementadoras

En el caso de las soluciones CMS nativas, es habitual que el retailer cuente con la colaboración de una agencia de implementación para personalizar la apariencia y la experiencia del cliente en el storefront.

VTEX ofrece las siguientes posibilidades nativas de CMS: [Layout](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj#layout) para tiendas que utilizan [Portal CMS Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), [Site Editor](https://help.vtex.com/es/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) para las que utilizan [Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework) y [Headless CMS](https://help.vtex.com/es/tutorial/headless-cms-visao-geral--3U5gvhHdQL0jczYH8gjX09) para aquellas que usan [FastStore](https://www.faststore.dev/). También es posible integrar tu CMS externo con las API de VTEX basadas en [headless](https://developers.vtex.com/docs/guides/headless-commerce).

Los problemas relacionados con la apariencia del contenido para el usuario final siempre deben tratarse inicialmente con el soporte de la agencia. Algunos ejemplos de estos problemas son:

* Imágenes, títulos o banners incorrectos u obsoletos.
* Productos no disponibles en el storefront.
* Páginas en blanco.
* Menú de categorías incorrecto o desactualizado.
* Resultados de búsqueda o de colecciones incorrectos o incompletos.
* Botones de CTA (llamada a la acción), como Comprar, Avísame, Agregar al carrito que presentan un comportamiento inesperado.
* Precios de productos o valor de envío que no coincidan con lo registrado en la plataforma.

Si la agencia descubre que el problema está en los controles, aplicaciones o componentes nativos de VTEX, ponte en contacto con el [soporte VTEX](https://help.vtex.com/es/faq/como-funciona-el-suporte-de-vtex--3kACEfni4m8Yxa1vnf2ebe), incluyendo todas las pruebas sobre el caso recopiladas por la agencia. Si tienes dudas, consulta el siguiente artículo. 

## Integraciones con marketplaces externos

VTEX tiene una arquitectura multiseller nativa que permite a las tiendas VTEX convertirse en marketplaces o sellers en otras tiendas VTEX. La plataforma también dispone de integraciones nativas con marketplaces externos para ofrecer sus productos sin necesidad de desarrollo. Los marketplaces con integraciones nativas se encuentran en la guía [Marketplaces e integraciones](https://help.vtex.com/es/tutorial/marketplaces-e-integracoes--5AcBO1t29nhq7rBHas9b6V).

Aun así, pueden existir tiendas partner estratégicas para tu empresa que operen fuera de esta red de colaboración nativa. Para casos como este, VTEX permite el desarrollo de [integraciones con marketplaces externos](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide) con conectores externos (hubs) encargados de la comunicación entre una tienda VTEX y un marketplace externo no nativo.

Respecto al soporte a una operación en este contexto, es importante que el retailer comprenda las responsabilidades de cada participante en la operación, que se detallan a continuación.

>⚠️ Las secciones siguientes contemplan una tienda en operación integrada con un marketplace externo vía conector externo. Para saber cómo integrar por primera vez tu catálogo de VTEX con un conector externo, consulta el tutorial [Catalog Integration](https://developers.vtex.com/docs/guides/external-marketplace-integration-catalog" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word).

### Actualización o envío de nuevos productos y SKU

Estas son las responsabilidades que conlleva la actualización o el envío de nuevos productos y SKU a un marketplace externo:

| **Player** | **Responsabilidades** |
|---|---|
| **VTEX** | Enviar notificación de un nuevo producto o SKU creado o actualizado al endpoint del proveedor proporcionado por el hub y registrado en la plataforma VTEX. |
| **Conector partner (hub de integración)** | Procesar la notificación y enviar el producto o SKU actualizado al marketplace. <br /><br />Este procesamiento engloba diversas fases, como comprobar si ese SKU ya existe en el marketplace y registrarlo como nuevo si es necesario, validar si el producto está activo y asociado a la política comercial del marketplace, ejecutar una simulación de pedido para comprobar el precio y stock del SKU actualizados, entre otras. |
| **Marketplace externo no nativo** | Proporcionar los endpoints necesarios para que el hub envíe el SKU actualizado, registre el SKU recibido e informe el status al conector. |

### Actualización o creación de nuevos pedidos

Consulta las responsabilidades que conlleva la actualización o creación de pedidos según el flujo de pedidos:

1. El **marketplace** disponibiliza los productos y el checkout para que el pedido sea realizado y notifica al conector sobre un nuevo pedido creado.
2. El **conector** se encarga de crear el pedido en VTEX.
3. VTEX responde al conector con el status de creación del pedido, que puede ser éxito o error. En esta fase, si se produce un fallo en la creación del pedido en VTEX, o si el pedido se crea con el status **Cancelado**, es necesario ponerse en contacto con el soporte del conector.
4. Una vez creado el pedido en VTEX, la responsabilidad de actualizar su status en el OMS depende de la fase del proceso:
* Si el status del pedido es Preparando envío o Facturado, por ejemplo, es responsabilidad del **ERP **notificarlo a VTEX.
* Si el pedido fue cancelado en el marketplace, la responsabilidad recae en el **conector**.

Para más información sobre quién es responsable de cada fase del flujo de pedidos en un escenario de marketplace externo, consulta [Flujo y status de pedidos - Flujo de sellers](https://help.vtex.com/es/tutorial/flujo-y-status-de-pedidos--tutorials_196#flujo-de-seller).

Sigue los pasos que se indican a continuación para identificar al soporte con el que debes ponerte en contacto si hay un problema en la actualización del status del pedido:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**.
2. Haz clic en el pedido deseado para acceder a la [página de detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalles-del-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. En la sección **Historial de pedidos**, haz clic en `Ver interacciones` (botón ilustrado a continuación), y comprueba si hay algún mensaje de error. 

![ver-interacciones-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Support/Operational/responsabilidades-en-el-ecosistema-vtex_2.png)

Si el mensaje de error no es autoexplicativo, el retailer puede ponerse en contacto con el [equipo de soporte VTEX](https://help.vtex.com/es/faq/como-funciona-el-suporte-de-vtex--3kACEfni4m8Yxa1vnf2ebe) adjuntando capturas de pantalla de las interacciones y el ID del pedido, y el equipo de expertos lo ayudará a identificar el origen del problema.
