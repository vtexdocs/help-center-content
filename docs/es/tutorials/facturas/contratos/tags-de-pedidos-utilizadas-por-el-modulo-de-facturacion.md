---
title: 'Tags de pedidos utilizadas por el módulo de facturación'
id: 4v33NVnAEe6HTgbF6sOBF2
status: PUBLISHED
createdAt: 2024-10-04T20:18:55.246Z
updatedAt: 2024-10-31T18:40:41.214Z
publishedAt: 2024-10-31T18:40:41.214Z
firstPublishedAt: 2024-10-04T21:40:07.736Z
contentType: tutorial
productTeam: Billing
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: consumption-tags-used-in-the-billing-module
legacySlug: tags-de-pedidos-utilizadas-por-el-modulo-de-facturacion
locale: es
subcategoryId: 22TaEgFhwE6a6CG2KASYkC
---

VTEX cuenta como [ingresos de la tienda](/es/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq) el valor total de los pedidos aprobados en el [flujo de transacciones de pago](/es/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ) y lo utiliza para calcular la factura. Sin embargo, puede que se apliquen diferentes cargos a pedidos con el mismo valor, ya que el módulo de facturación se basa en tags.

Las tags son categorías que definen las características del pedido e indican las reglas de negocio aplicadas a la venta. El pedido se analiza en función de determinados criterios y se le asignan tags que definen el _take rate_ que se cobrará.

Este artículo describe las tags del módulo de facturación. El objetivo de este contenido es aumentar la transparencia en tu relación comercial con VTEX.

> ⚠️ El sistema de tags de pedidos no realiza ningún tipo de cobro a los clientes de la tienda. Solo es una fuente de datos consultada por el módulo de facturación para calcular la factura. 

## Pasos iniciales para la asignación de tags a pedidos

Para que se le puedan asignar tags, un pedido debe cumplir las siguientes condiciones:

* Tener toda la [información que compone un pedido](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa) (no se les asignan tags a pedidos [incompletos](/es/tutorial/entendendo-os-pedidos-incompletos--tutorials_294)).
* Tener la información de pago con los datos de autorización de la transacción financiera.

> ℹ️ Los pedidos generados por [Multinivel Omnichannel Inventory (MOI)](/es/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4), también conocidos como pedidos *chain*, no incluyen la información de pago y, por lo tanto, no se les asignan tags ni pueden ser cobrados.

## Modificación de pedidos y tags

Las tags solo se asignan a un pedido una vez que ha sido finalizado. Sin embargo, cuando un pedido se [modifica](/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw#status-del-pedido-a-modificar), las tags se vuelven a procesar, ya que el cambio puede afectar las condiciones del take rate que se cobrará.

> ❗ El pedido puede modificarse varias veces, lo que a su vez puede resultar en cambios en las tags asignadas por el módulo de facturación. Mientras el pedido tiene el status `esperando fulfillment`, se pueden realizar modificaciones y actualizar las tags.

## Grupos de tags

En VTEX, las tags se clasifican en tres grupos principales:

* [Tags de canal de venta:](#tags-de-canal-de-venta) indica el canal por el que se genera el pedido.
* [Tags de origen del pedido:](#tags-de-origen-del-pedido) indica el contexto de [marketplace y seller](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).
* [Tags de tipo de cliente:](#tags-de-tipo-de-cliente) indica la naturaleza jurídica del cliente, si es persona física o jurídica.

Las próximas secciones describen cada uno de estos grupos.

## Tags de canal de venta

A continuación se listan las tags de los canales de venta que generan el pedido:

* **IsInStore:** solución [VTEX Sales App](/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc).
* **IsInfiniteShelf:** funcionalidad [Pasillo infinito](/es/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv/40KMlmGI5tN0r0KPCDWgGn) de **VTEX Sales App**. Esta tag se aplica cuando el ítem del [stock](/es/tutorial/gerenciar-inventario--tutorials_139) que fue vendido no estaba almacenado localmente.
* **IsSalesAppDeliveredByMainAccount:** solución [VTEX Sales App](/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc). Esta tag se aplica cuando el ítem vendido pertenecía a la [cuenta principal](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-cuenta-vtex) y la venta se realizó en el entorno de la cuenta principal.
* **IsSocialSelling:** aplicación [Carrito compartido (Social Selling)](/es/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN).

  > ℹ️ La tag `IsSocialSelling` solo es válida para los pedidos de [Carrito compartido (Social Selling)](/es/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) iniciados por **VTEX Sales App**.

* **IsCallCenter:** solución VTEX Sales App. Esta tag se aplica cuando la venta fue promovida por un vendedor, agente o consultor, como es el caso de [televentas](/es/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R).
* **IsOnHands:** solución de **VTEX Sales App**. Esta tag se aplica cuando el pedido se realizó en una tienda física y el ítem del stock estaba almacenado localmente. Esta tag se asigna en el entorno del marketplace.
* **IsOnHandsFulfillment:** solución **VTEX Sales App**. Esta tag se aplica cuando el ítem vendido pertenecía al seller. Esta tag se asigna en el entorno del seller.

> ℹ️ Cuando la tienda opera como marketplace y seller, se le asigna la tag `IsOnHandsFulfillment` al pedido.

## Tags de origen del pedido

La siguiente imagen muestra como se asignan las tags de origen de pedido en el caso de marketplaces y sellers:

![marcacao_pedidos_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/facturas/contratos/tags-de-pedidos-utilizadas-por-el-modulo-de-facturacion_1.png)

> ⚠️ A través de acuerdos comerciales, VTEX otorga un tipo de certificación a determinados canales de venta. Cuando el pedido se generó en un canal de venta que no tiene este nivel de certificación, no hay tag de pedido por origen y el pedido se marca como `IsB2C`. Es decir, sólo los canales de venta certificados están marcados por origen.

El flujo de `IsMarketplace` marca pedidos en el entorno del seller y el flujo `IsSeller` marca pedidos en el entorno del marketplace. Todas las tags de los flujos se describen a continuación.

### Marketplace

A continuación se listan las tags para pedidos en el entorno del seller asociadas al marketplace en el que se creó el pedido:

* **IsMarketplace:** pedido generado en un [marketplace](/es/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8), ya sea [marketplace certificado](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-certificado), [marketplace partner](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-partner), [marketplace VTEX](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-marketplace-vtex) (tienda actuando como marketplace) o [marketplace externo](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide). Todo pedido `IsMarketplace` es  `IsCertifiedMarketplace` o un marketplace externo. Esta primera tag es para el sistema.
* **IsCertifiedMarketplace:** pedido generado en un [marketplace certificado](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-certificado), [marketplace partner](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-partner) o [marketplace VTEX](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-marketplace-vtex) (tienda actuando como marketplace). Después de que se le asigna esta tag al pedido, el próximo paso obligatorio es asignarle `IsInternalCertifiedMarketplace` o `IsExternalCertifiedMarketplace`.
    * **IsExternalCertifiedMarketplace:** pedido generado en un [marketplace certificado](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-certificado) (Amazon, Mercado Libre, entre otros) o [marketplace partner](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-partner) (Shopee, Facebook, entre otros).
    * **IsInternalCertifiedMarketplace:** pedido generado en un [marketplace VTEX](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-marketplace-vtex), es decir, en una tienda actuando como marketplace para un seller. Esta tag puede incluir otro nivel opcional de tags.
        * **IsInternalCertifiedMarketplaceAndIsParentAccount:** pedido generado en un marketplace VTEX donde el marketplace es la cuenta principal y el seller es una [subcuenta](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#entorno-adicional), es decir, es un entorno adicional.

### Seller

A continuación se listan las tags de pedidos en el entorno del marketplace asociadas al seller propietario del ítem vendido:

* **IsSeller:** pedido generado en un marketplace cuando el ítem vendido pertenece al [seller](/es/tutorial/o-que-e-um-seller). Todo pedido `IsSeller` es por obligación `IsExternalSeller` o `IsCertifiedSeller`. Esta primera tag es para el sistema.
* **IsExternalSeller:** pedido generado en un [marketplace VTEX](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#como-marketplace-vtex) (tienda actuando como marketplace) donde el seller propietario del ítem vendido es un [seller externo](https://developers.vtex.com/docs/guides/external-seller-integration-guide).
* **IsCertifiedSeller:** pedido generado en [marketplace certificado](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-certificado), [marketplace partner](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-marketplace-partner) o marketplace VTEX (tienda actuando como marketplace) donde el seller propietario del ítem vendido es un [seller VTEX](/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-seller-vtex). Todo pedido `IsCertifiedSeller` es por obligación `IsInternalCertifiedSeller`.
    * **IsInternalCertifiedSeller:** esta tag es para el sistema, ya que a todo pedido `IsInternalCertifiedSeller` debe obligatoriamente asignársele la tag `IsInternalCertifiedSellerAndIsChildAccount` o `IsSellerPortal`.
        * **IsInternalCertifiedSellerAndIsChildAccount:** pedido generado en un marketplace VTEX donde el marketplace es una cuenta principal y el seller propietario del ítem vendido es una [cuenta franquicia](/es/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa#relacion-entre-seller-white-label-y-cuenta-franquicia).
        * **IsSellerPortal:** pedido generado en un marketplace VTEX donde el marketplace es una cuenta principal y el seller propietario del ítem vendido es una [cuenta Seller Portal](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-cuenta-vtex).

## Tags de tipo de cliente

A continuación se listan las tags de tipo de cliente del pedido:

* **IsB2B:** el cliente es una persona jurídica y el pedido se generó en un [escenario B2B](/es/tutorial/configurando-b2b-na-vtex--tutorials_238) (_Business to Business_).
* **IsB2C:** el cliente es una persona física y el pedido se generó en un escenario B2C (_Business to Customer_).

