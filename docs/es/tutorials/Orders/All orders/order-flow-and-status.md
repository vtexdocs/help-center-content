---
title: 'Flujo y status de pedidos'
id: tutorials_196
status: PUBLISHED
createdAt: 2017-04-27T22:14:33.518Z
updatedAt: 2024-04-01T15:37:30.788Z
publishedAt: 2024-04-01T15:37:30.788Z
firstPublishedAt: 2017-04-27T23:02:47.616Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: flujo-y-status-de-pedidos
locale: es
legacySlug: flujo-de-pedido-en-el-oms
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

El flujo de pedidos describe los status, posibilidades y acciones a lo largo del ciclo de vida de un pedido. Con el flujo, el administrador de la tienda también da seguimiento a las etapas del pedido mapeadas en la plataforma (status).

Este artículo contiene la siguiente información:
- Los [tipos de flujos](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#tipos-de-flujo) de pedidos posibles en la plataforma: [marketplace](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-de-marketplace), [seller](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-de-seller), [cadena](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-de-cadena) y [completo](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-completo).
- Una [tabla con todos los status mostrados en el Admin y las APIs](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#tabla-de-status-de-los-pedidos).
- Los [casos en que se produce la cancelación de un pedido](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#cancelacion-del-pedido).

>ℹ️ Para saber cómo seguir el flujo de un pedido, consulta el artículo [Seguimiento de pedidos](https://help.vtex.com/es/tutorial/acompanhamento-de-pedidos--et0Ei7F3bjcrEmVAR2kKS).

## Tipos de flujo

Hay cuatro tipos de flujo de pedidos en VTEX:
- **[Flujo de marketplace](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-de-marketplace):** es el flujo de pedidos realizados en la [tienda únicamente responsable por la venta](https://help.vtex.com/es/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8).
- **[Flujo de seller](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-de-seller):** es el flujo de pedidos visto por la [tienda responsable de la preparación para envío del pedido](https://help.vtex.com/es/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w).
- **[Flujo completo](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-completo):** es el flujo de pedidos realizados en la tienda responsable de la venta y envío del pedido. En este caso, la tienda actúa como _seller_ y _marketplace_ simultáneamente.
- **[Flujo de cadena](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196#flujo-de-cadena)**: es el flujo de pedidos visto por la tienda que media la venta entre el _marketplace_ y el _seller_. Este flujo es similar al de _marketplace_, sin embargo, el proceso de pago se realiza solo en el _marketplace_ y no en la tienda que actúa como cadena. Este flujo se ve en escenarios de venta de [Multilevel Omnichannel Inventory](https://help.vtex.com/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4).

>⚠️ Para los casos de pedidos incompletos, consulta el artículo [Cómo funcionan los pedidos incompletos](https://help.vtex.com/es/tutorial/entendendo-os-pedidos-incompletos--tutorials_294) para entender las razones de este flujo y de su cancelación.

### Flujo de marketplace

![pedido_marketplace_es](https://images.ctfassets.net/alneenqid6w5/5XrrV8mQNzqESn0XKJHJW7/390a09b29e0385c23be5ce5228e8b9f4/pedido_marketplace_es.png)

El flujo del _marketplace_ está integrado con el flujo del _seller_. Cuando se finaliza un pedido que será enviado por un _seller_ externo (que no es el _seller_ principal), el flujo visto por el _marketplace_ es el siguiente: 

1. Se inicia con el status `Esperando confirmación del seller` y automáticamente pasa a `Pago pendiente`. Como el _marketplace_ es responsable de recibir el pago, hay dos posibles status: 
    * **El marketplace recibe la aprobación del pago:** el status pasa a `Pago aprobado`. 
    * **El marketplace no recibe el pago:** se inicia el proceso de cancelación y el status pasa a `Cancelando`.
2. Después de que el pago es aprobado y pasa el [periodo de cancelación](https://help.vtex.com/es/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido--jYFdnPDtNm4WCEkYWqqC) (etapa visible para el _seller_), el _marketplace_ debe esperar a que el _seller_ inicie la preparación del pedido. Esta es una acción activa e indica que el _seller_ ha comenzado a preparar los paquetes del pedido. Si el _seller_ no realiza esta acción, el [pedido se queda en el status «Listo para preparación»](https://help.vtex.com/es/faq/pedido-esta-travado-em-pronto-para-manuseio-o-que-fazer--frequentlyAskedQuestions_771).
3. Después de la confirmación de la preparación por parte del _seller_, el status del pedido visto por el _marketplace_ puede permanecer como `Verificando factura` si hay algún error. Consulta [los casos más comunes](https://help.vtex.com/es/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm) para que el pedido se quede en este status. Es importante recordar que si el pedido se factura parcialmente, puede volver al status `Pago aprobado` y la plataforma espera que el administrador de la tienda incluya las facturas correctamente. El valor de la suma de las facturas debe corresponder al valor total del pedido.
4. Después de la confirmación de la preparación, el pedido es preparado para envío por el _seller_.
5. Cuando el _seller_ agrega correctamente las facturas, el status cambia a `Facturado`. Este status significa que la transacción de compra se realizó con éxito y ya no es posible revertir o cambiar el status del pedido. La liquidación del pago se produce cuando el pedido llega a esta etapa.
6. El _seller_ debe completar el proceso de envío del pedido.

Para saber cómo identificar pedidos que provienen de _marketplaces_, consulta el artículo [Visualizar pedidos de marketplace ](https://help.vtex.com/es/tutorial/lista-de-pedidos-beta--2QTduKHAJMFIZ3BAsi6Pi) en el modulo Todos los pedidos.

### Flujo de seller

![pedido_fluxo_seller_es](https://images.ctfassets.net/alneenqid6w5/wAez6nwupt5Fw7OosaTUH/51c2f48ff1629813b469311d8c867ec9/pedido_fluxo_seller_es.png)

Este es el flujo del pedido visto por la tienda responsable de enviar los productos que componen el pedido. El pedido se realiza a través de otra tienda (o _marketplace_) y el flujo del _seller_ se inicia después de la confirmación del pedido.

1. Cuando el _seller_ recibe el pedido, el status inicial es `Pedido aceptado`.
2. Después de que el seller recibe el pedido, el status cambia automáticamente a `Esperando autorización para fufillment`. Este es un status de espera para que el marketplace indique que obtuvo la confirmación del pago del pedido.

  >❗ La plataforma permite adelantar manualmente el status <i>Esperando autorización para fufillment</i> al hacer clic en <i>Autorizar fulfillment</i>. Sin embargo, si el seller adelanta el status manualmente no significa que el marketplace haya liberado el pedido para preparación, lo que puede implicar discrepancias en la información. Utiliza el cambio manual con precaución. Recomendamos su uso solo cuando se tiene la autorización del marketplace para el envío del pedido.

3. El status cambia automáticamente a `Periodo de cancelación`. El pedido permanecerá en esta etapa hasta que haya transcurrido el [tiempo de espera para cancelar configurado](https://help.vtex.com/es/tutorial/configuracoes-gerais/#pedidos). 

  >ℹ️ El Periodo de cancelación existe para que el cliente pueda cancelar la compra sin la aprobación de la tienda en un determinado periodo de tiempo previamente configurado. Después de este periodo, la tienda debe autorizar la solicitud de cancelación del cliente.

4. En esta etapa hay dos posibilidades:
    * **Pedido no cancelado:** si la ventana de cancelación vence y el cliente no solicita la cancelación de la compra, el status pasa a `Listo para preparación`. Este status indica al _seller_ que el pedido ya debe ser preparado para el envío.
    * **Pedido cancelado:** si el cliente solicita la cancelación del pedido durante el tiempo de espera para cancelar, en vez de pasar a la preparación, pasará a la cancelación y el status cambiará a `Cancelando`. 
5. El pedido permanecerá en el status `Listo para preparación` hasta que el _seller_ confirme. Esta confirmación significa que el _seller_ inició la preparación del pedido, que puede realizarse manualmente mediante el Admin o por integración con el ERP utilizando el request [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling).

  >❗ Al confirmar el inicio de la preparación, el seller asume la responsabilidad de la reserva de los ítems del pedido. A partir de ese momento, si hay alguna actualización en el stock, la plataforma VTEX desestima la reserva de estos SKU. Por lo tanto, actualiza el stock para los SKU de un pedido determinado únicamente al facturarlo. De este modo, se evitan las divergencias de stock que dependen de la interacción con la [integración backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) de tu tienda.

6. Una vez iniciada la preparación, es momento de facturar el pedido. La plataforma espera a que se incluya la factura, el status del pedido puede estar en `Verificando factura` si hay un error. Consulta [los casos más comunes](https://help.vtex.com/es/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm) para que el pedido se quede en este status. Es importante recordar que si el pedido se factura parcialmente, puede volver al status `Pago aprobado` hasta que el administrador de la tienda incluya las facturas que sumadas corresponden al valor total del pedido.
7. El último status del flujo es `Facturado`. Después de eso, el seller debe completar el envío del pedido.

>❗ Ten en cuenta que:
>
> * La **cancelación del pedido** puede iniciarse en varias etapas del flujo del pedido, ya sea por parte del cliente o de la tienda. En este caso, después de solicitar la cancelación, el proceso se realiza de forma automática, incluyendo el reembolso del valor pagado al cliente. La cancelación finaliza cuando el pedido cambia al status <i>Cancelado</i>.
>
> * Los sellers tienen la autonomía de forzar manualmente el cambio del pedido durante el status <i>Esperando autorización para fufillment</i>. Esto significa realizar la entrega sin que el marketplace haya confirmado la liberación y sin recibir el pago del pedido. En caso de cambio manual, es obligación del seller comprobar que el pedido está en condiciones de ser preparado, incluyendo si el pago ha sido confirmado.
>     

### Flujo completo

![pedido_fluxo_completo_es_2](https://images.ctfassets.net/alneenqid6w5/hQ09aEM1eaW28N7TRG0PY/ccb76d6a281ae006d08b4d060866073a/pedido_fluxo_completo_es.png)

El flujo completo del pedido es visto por la tienda que realiza la venta y el envío del pedido. El flujo completo está compuesto por el flujo del _marketplace_ y el flujo del _seller_ de forma secuencial.

1. La etapa inicial de un pedido en el flujo es el status `Esperando confirmación del seller` que representa la recepción del pedido.
2. El pedido automáticamente cambia al status `Pago pendiente`. 
3. El sistema espera la confirmación del pago y hay dos maneras de continuar el flujo:
    * **El pago del pedido es aprobado:** el status del pedido cambia a `Pago aprobado` y comienza el status `Periodo de cancelación`. Este status determina el tiempo de espera para cancelar en que el cliente puede cancelar la compra sin aprobación de la tienda. El pedido permanece en este status hasta que termine [el tiempo límite configurado](https://help.vtex.com/es/tutorial/configuracoes-gerais/#pedidos).
    * **El pago del pedido no fue aprobado:** la plataforma inicia el proceso de cancelación. Este proceso es automático cuando el status del pedido cambia `Pago rechazado` y luego a `Cancelando`. El pedido permanece en este status hasta que la plataforma finaliza la cancelación y el status cambia a `Cancelado`. Después de que se cancela el pedido, el flujo termina.
4. Una vez aprobado el pago y vencida el periodo de cancelación, el status del pedido cambia a `Listo para preparación`. Este status indica al administrador de la tienda que el pago ha sido confirmado y que se debe preparar el pedido. La tienda debe confirmar a la plataforma que ha iniciado la preparación y que, por lo tanto, el pedido debe avanzar en el flujo. Hay dos maneras de realizar la confirmación:
    *  De forma manual, en el Admin, haciendo clic en la flecha que se encuentra encima del status `Iniciar preparación`.
    * A través de la [API con un ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide), por ejemplo, utilizando la ruta [Start handling order.](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling)

  >❗ Al confirmar el inicio de la preparación, el seller asume la responsabilidad de la reserva de los ítems del pedido. A partir de ese momento, si hay alguna actualización en el stock, la plataforma VTEX desestima la reserva de estos SKUs. Por lo tanto, actualiza el stock para los SKUs de un pedido determinado únicamente al facturarlo. De este modo, se evitan las divergencias de stock que dependen de la interacción con la [integración backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) de tu tienda.

5. Una vez iniciada la preparación, el status del pedido cambia a `Preparando envío` y la próxima etapa es facturar el pedido. El sistema espera la factura en el status `Verificando factura`. Se debe [incluir la factura](https://help.vtex.com/es/tutorial/como-inserir-a-nota-fiscal) que corresponde al valor total del pedido. 
6. Después de incluir las facturas, el status del pedido cambia a `Facturado`, el último status del flujo, y la tienda debe completar el envío del pedido.

La tienda puede cancelar el pedido hasta antes de `Facturado`. Después de facturado, el pedido puede tener ítems devueltos, pero no puede ser modificado. Consulta los artículos [Cómo cancelar pedidos](https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186) y [Cancelación solicitada por el cliente](https://help.vtex.com/es/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo) para saber más sobre la cancelación de pedidos desde la perspectiva de la tienda y del cliente.

### Cancelación del pedido

La cancelación de un pedido se inicia en varios escenarios. Para cada tipo de cancelación hay un resultado en el flujo del pedido:

- **[Pedidos incompletos](https://help.vtex.com/es/tutorial/entendendo-os-pedidos-incompletos--tutorials_294):** cuando el pedido está incompleto no se inicia el flujo de pedidos. Esto es para que el _seller_ no realice la preparación y no haya reserva de _stock_.
- **[Solicitud de cancelación por parte del cliente](https://help.vtex.com/es/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo):** el cliente realiza la cancelación durante el periodo de cancelación o solicita la cancelación a la tienda. Cuando la cancelación ocurre dentro del periodo de cancelación, los ítems del pedido no se reservan. Pero, si la cancelación se produce después de la preparación del pedido (después del status `Iniciar preparación`), los ítems han sido reservados.
- **[Cancelación por parte de la tienda](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4ts2ItvjYo8wm5gg76miS3):** el _seller_ o _marketplace_ renunció a la venta y canceló el pedido.

Cuando se solicita la cancelación de un pedido, la plataforma procesa automáticamente la cancelación del pedido. El reembolso del pago al cliente depende de la etapa en la que se encuentre el pago y del medio de pago utilizado.

No es posible [cancelar](https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186) pedidos [parcialmente facturados](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Si el cliente desea sustituir o remover ítems del pedido, es posible [modificar el pedido](https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

>ℹ️ Ve más información sobre la cancelación y el reembolso en los artículos [¿Por qué se cobró en la factura del cliente mi pedido cancelado?](https://help.vtex.com/pt/faq/por-que-meu-pedido-cancelado-foi-cobrado-na-fatura-do-cliente) y [Reembolso o cancelación](https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#reembolsocancelamento).

Mientras se realiza el proceso de cancelación, el status permanece en `Cancelando`. Una vez completada la cancelación, el status del pedido cambia a `Cancelado`. 

>❗ Ten en cuenta que cuando la cancelación se realiza antes de que la tienda inicie la preparación del pedido (status <i>Preparando envío</i>), los ítems tienen la [reserva cancelada](https://help.vtex.com/es/tutorial/how-does-reservation-work--tutorials_92) en el stock. Sin embargo, si la cancelación se realiza después de este status, los ítems ya tienen la [reserva reconocida](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92#reserva-reconocida) en el stock y la tienda debe actualizar la cantidad de ítems del stock para que se cancele la reserva de los SKUs de un pedido cancelado (que fueron reservados).

Para saber más sobre la cancelación de pedidos, consulta el artículo [¿Por qué un pedido fue cancelado?](https://help.vtex.com/es/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493).

### Flujo de cadena

![pedido_fluxo_chain_es](https://images.ctfassets.net/alneenqid6w5/1H891HnUzdCfoEVuO3Ry3Q/86fb6d87fbe872f1f81aa5219a7f92d6/pedido_fluxo_chain_es.png)

El flujo de pedidos visto por la tienda intermediaria en una venta [Multinivel Omnichannel Inventory](https://help.vtex.com/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) es similar al flujo de pedidos del _marketplace_, excepto al recibir el pago de los pedidos. En la etapa de `Pago pendiente`, en lugar de la cadena recibir el pago directamente del _gateway_, el _marketplace_ informa a la cadena que recibió la confirmación del pago. 

## Observaciones

- [Pedidos incompletos](https://help.vtex.com/es/tutorial/entendendo-os-pedidos-incompletos--tutorials_294): todos los pedidos comienzan en la plataforma como incompletos. Los pedidos se completan durante el proceso de finalización de la compra.  Si el pedido no continúa a la finalización, puede que haya problemas durante el pago (externo a VTEX) o que falten datos.
- Se pueden hacer cambios a los ítems del pedido hasta que se inicia la facturación. Ve más información sobre el cambio y la sustitución de ítems en los artículos [Cambio de pedido](https://help.vtex.com/es/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8) y [Cambiar ítems de un pedido finalizado](https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).
- Si el cliente solicita la cancelación y el administrador de la tienda deniega la solicitud, el pedido puede cambiar al status `Pago pendiente`.
- En los flujos de pedidos que tienen el status `Listo para preparación`, la tienda debe realizar una confirmación. Se requiere una autorización activa de la tienda para confirmar este status y continuar el flujo del pedido.
- La baja en el almacén se realiza automáticamente cuando la tienda actualiza la cantidad de ítems del _stock_. Para saber más sobre la reserva y baja en el almacén, consulta el artículo [Cómo funciona la reserva](https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92). 

## Tabla de status de los pedidos

A continuación se muestra la tabla con los status de los pedidos. La información de la tabla está dividida en las siguientes columnas:
- **Status (Gestión de pedidos):** identificación del status en el Admin.
- **Status (API):** identificación del status a través de API.
- **Visto por:** en qué flujo es visible el status (_marketplace_, _seller_, cadena y completo).
- **Significado:** significado del status detallado.   

>⚠️ Ten en cuenta que los status del flujo de pedido completo (flujo visto por las tiendas responsables de la venta y envío de los pedidos) coincide con los status del marketplace y seller. Algunos status pueden ser vistos a través de API, pero no son visibles en el flujo del pedido que se ve en el Admin en «Todos los pedidos».

<style type="text/css">
.tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
.tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Fabriga, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Fabriga, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-cly1{text-align:left;vertical-align:middle}
.tg .tg-9p9e{background-color:#FFF;color:#F71963;text-align:left;text-decoration:underline;vertical-align:top}
.tg .tg-1547{background-color:#FFF;font-style:italic;text-align:left;vertical-align:top}
.tg .tg-36r3{background-color:#727273;color:#FFF;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-zr06{background-color:#FFF;text-align:left;vertical-align:middle}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-36r3"><span style="font-weight:700">Status Admin</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Status API</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Visto por</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Significado</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">null</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Pedidos creados e incompletos. El flujo puede ser iniciado por el sistema o el status del pedido aparece como</span> <span style="font-weight:400;color:#3F3F40;background-color:#E3E4E6">CancellationData</span><span style="font-weight:400">, lo que indica que se ha producido una falla al intentar completarlo.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">order-created*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Pedido creado. Se inicia el procesamiento de los datos del pedido. Este es el primer status de un pedido y significa que el sistema ha reunido la información básica para procesarlo.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pedido aceptado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">order-accepted</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">El</span> <span style="font-style:italic">seller</span> <span style="font-weight:400">recibe el pedido.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelando</span></td>
    <td class="tg-zr06"><span style="font-weight:400">cancel*</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">,</span> <span style="font-style:italic">seller</span><span style="font-weight:400">, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Punto en que el pedido pasa a ser cancelado. En esta etapa, se notifica la cancelación al módulo</span> <a href="https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG"><span style="font-weight:400;color:#F71963;background-color:transparent">Pagos</span></a><span style="font-weight:400">. El pedido permanecerá en este status hasta que el módulo Pagos complete el proceso de cancelación.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">on-order-completed</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">La compra ha sido procesada en el</span> <span style="font-style:italic">checkout</span><span style="font-weight:400">. Los datos del pedido están completos.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">on-order-completed-ffm</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">La compra ha sido procesada en el</span> <span style="font-style:italic">checkout</span><span style="font-weight:400">. Los datos del pedido están completos.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pago rechazado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">El pago del pedido fue denegado.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pago aprobado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">payment-approved</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">El pago del pedido ha sido aprobado.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pago pendiente</span></td>
    <td class="tg-zr06"><span style="font-weight:400">payment-pending</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status de espera para la confirmación del pago en el módulo</span> <a href="https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG"><span style="font-weight:400;color:#F71963;background-color:transparent">Pagos</span></a><span style="font-weight:400">. Independientemente de si el pago ha sido confirmado, este paso es obligatorio.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelación solicitada</span></td>
    <td class="tg-zr06"><span style="font-weight:400">request-cancel</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span> <span style="font-weight:400">y flujo completo</span></td>
    <td class="tg-9p9e"><a href="https://help.vtex.com/es/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo"><span style="font-weight:400;color:#F71963;background-color:transparent">El cliente solicita la cancelación del pedido</span></a><span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">canceled</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">,</span> <span style="font-style:italic">seller</span> <span style="font-weight:400">y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">El pedido se finaliza sin éxito. La transacción de pago en el módulo</span> <a href="https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG"><span style="font-weight:400;color:#F71963;background-color:transparent">Pagos</span></a> <span style="font-weight:400">se cancela en el momento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Ventana para cambiar el pago</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-change-payment</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Plazo para realizar cambios de pago.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Ventana para cambiar el seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-change-seller</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Plazo para realizar un</span> <a href="https://help.vtex.com/es/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO"><span style="font-weight:400;color:#F71963;background-color:transparent">cambio de seller</span></a><span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Esperando confirmación del seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-authorization</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">, flujo completo y cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">En espera de la liberación del seller para continuar con el flujo del pedido.</span></td>
  </tr>
   <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-fulfillment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">En espera por el fulfillment del pedido. Status exclusivo para tiendas que utilizan un Warehouse Management System (WMS).</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-ffmt-authorization</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">En espera de la autorización del</span> <span style="font-style:italic">marketplace</span><span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Esperando autorización para fufillment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-manual-authorization</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Es un status de espera en el que el seller espera a que el</span> <span style="font-style:italic">marketplace</span> <span style="font-weight:400">autorice continuar con los procesos del pedido.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Autorizar fulfillment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">authorize-fulfillment</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span><span style="font-weight:400">, flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Proceso interno de liberación a preparación. Aquí se realiza la</span> <a href="https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92#reserva-confirmada"><span style="font-weight:400;color:#F71963;background-color:transparent">confirmación de la reserva</span></a><span style="font-weight:400">. Cuando el marketplace no autoriza al seller el fulfillment del pedido dentro de 30 días, la plataforma cancela el pedido automáticamente.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Periodo de cancelación</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-cancel</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span> <span style="font-weight:400">y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status de plazo de cancelación del cliente. Después de la aprobación del pago, el cliente tiene 30 minutos (estándar en la</span> <a href="https://help.vtex.com/es/tutorial/configuracoes-gerais/"><span style="font-weight:400;color:#F71963;background-color:transparent">Configuración</span></a> <span style="font-weight:400">del módulo</span> <span style="font-weight:700">Gestión de pedidos</span><span style="font-weight:400">) para cancelar. En este periodo, el reembolso del pedido se realiza automáticamente.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">ready-for-invoicing</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400"> y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">El pedido está listo para ser facturado en las tiendas que tienen picking y packinge en el proceso de fulfillment.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Verificando factura</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoice*</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">, cadena y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">La plataforma está verificando la factura incluida. Si el flujo se queda en este status, puede haber problemas en la liquidación del pago o inclusión de la factura. Obtén más información en</span> <a href="https://help.vtex.com/es/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm"><span style="font-weight:400;color:#F71963;background-color:transparent">¿Por qué el status del pedido es «Verificando factura»?</span></a><span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Facturado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoiced</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span><span style="font-weight:400">,</span> <span style="font-style:italic">seller</span> <span style="font-weight:400">y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">El flujo se completó con éxito y el pedido fue enviado. Si la transacción se realizó con tarjeta de crédito, la liquidación del valor se realiza en este momento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Listo para preparación</span></td>
    <td class="tg-zr06"><span style="font-weight:400">ready-for-handling</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status que indica que hay que iniciar la preparación del envío, preparar la factura y hacer el seguimiento del pedido. En este status se realiza la confirmación de la</span> <a href="https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92"><span style="font-weight:400;color:#F71963;background-color:transparent">reserva</span></a> <span style="font-weight:400">del ítem. En general, esta acción se realiza mediante una</span> <a href="https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide#send-order-cancelations"><span style="font-weight:400;color:#F71963;background-color:transparent">integración de ERP</span></a><span style="font-weight:400">, pero se puede completar manualmente a través de «Gestión de pedidos». El pedido solo continuará el flujo después de la confirmación.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Iniciar preparación</span></td>
    <td class="tg-zr06"><span style="font-weight:400">start-handling*</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span><span style="font-weight:400">, flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status de autorización para que el flujo de preparación continúe. Se utiliza cuando la autorización se hace manualmente. Si hay integración con el ERP, este status espera la confirmación del ERP para que el flujo del pedido continúe.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelación solicitada</span></td>
    <td class="tg-zr06"><span style="font-weight:400">cancellation-requested</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Cancelación solicitada</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-mkt-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Cadena</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Se espera la autorización del</span> <span style="font-style:italic">marketplace</span> <span style="font-weight:400">para enviar la autorización al seller.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-seller-handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace de la cuenta principal esperando que inicie el proceso de manejo, cuando se trata de un pedido de Multilevel Omnichannel Inventory. Para el seller white label, aparece el status authorize-fulfillment.</td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Preparando envío</span></td>
    <td class="tg-zr06"><span style="font-weight:400">handling</span></td>
    <td class="tg-1547"><span style="font-style:italic">Seller</span><span style="font-weight:400">, flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status en que se</span> <a href="https://help.vtex.com/es/tutorial/como-a-reserva-funciona--tutorials_92"><span style="font-weight:400;color:#F71963;background-color:transparent">reservan</span></a> <span style="font-weight:400">los ítems del pedido. El pedido permanece en preparación en espera de notificaciones de factura, generalmente procedentes del ERP.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Aprobar pago</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span> <span style="font-weight:400">y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Acción del sistema. El flujo no se detiene en este status a menos que haya un error.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Esperando decisión del</span> <span style="font-style:italic">seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span> <span style="font-weight:400">y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">El pedido está en espera de la confirmación de cancelación.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Solicitar cancelación</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-1547"><span style="font-style:italic">Marketplace</span> <span style="font-weight:400">y flujo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status que inicia el flujo de cancelación. Hay dos tipos de cancelación: por la</span> <a href="https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186"><span style="font-weight:400;color:#F71963;background-color:transparent">tienda</span></a> <span style="font-weight:400">y por el</span> <a href="https://help.vtex.com/es/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo"><span style="font-weight:400;color:#F71963;background-color:transparent">cliente</span></a><span style="font-weight:400">.</span></td>
  </tr>
</tbody>
</table>

<br></br>

>ℹ️ Los status marcados con asteriscos (*) en la tabla no permiten cambio o cancelación, ya que están bajo la acción de la plataforma.

