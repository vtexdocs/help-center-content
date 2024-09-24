---
title: 'Multilevel Omnichannel Inventory'
id: 7M1xyCZWUyCB7PcjNtOyw4
status: PUBLISHED
createdAt: 2020-11-30T19:44:58.255Z
updatedAt: 2024-07-24T14:21:41.092Z
publishedAt: 2024-07-24T14:21:41.092Z
firstPublishedAt: 2020-12-08T19:12:43.325Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: multilevel-omnichannel-inventory
locale: es
legacySlug: marketplace-recursivo-v2
subcategoryId: 5RAUzLD6X9Wa1maenj1eGA
---

__Multilevel omnichannel inventory__ es la configuración de VTEX que permite que una cuenta principal ofrezca el _stock_ de [sellers white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) y de [cuentas franquicia](https://help.vtex.com/es/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa) para la venta en los _marketplaces_. Este artículo incluye la siguiente información sobre la funcionalidad:  

- [Arquitectura de cuentas](#arquitectura-de-cuentas)  
- [Beneficios](#beneficios)  
- [Restricciones](#restricciones)  
- [Cómo configurar](#como-configurar)  

>ℹ️ Para obtener más información sobre la arquitectura de los pedidos de tipo Multilevel Omnichannel Inventory y aprender a realizar la configuración a través de la API REST, consulta nuestro artículo en el [Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

## Arquitectura de cuentas

El [marketplace](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) es el entorno donde se vende el producto, también llamado vitrina, y el [seller](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#selling-on-marketplaces) es el propietario del envío del producto.

Cuando una tienda vende sus productos en un _marketplace_, tenemos una relación de dos niveles. Sin embargo, la arquitectura de VTEX permite que las tiendas actúen tanto como _marketplaces_ como _sellers_, ampliando el número de combinaciones posibles.

Es posible que un _seller_ de una cuenta principal actúe como _marketplace_ para [sellers white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa). Este es el caso de las redes de tiendas configuradas como [cuentas franquicia](https://help.vtex.com/es/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa) y de las tiendas físicas, que son por definición _sellers_ en otra tienda VTEX.

También es posible que este _seller_ principal venda sus productos en un _marketplace_.

Cuando esto ocurre, tenemos una arquitectura de tres niveles entre el _marketplace_, el _seller_ principal y sus _sellers white label_, como se ilustra en la imagen de abajo.

![Arquitetura Multilevel omichannel inventory](//images.ctfassets.net/alneenqid6w5/7k6hYv3kWxBVZrPFkUbsCK/abf2341444442ee6ef770afdfd044a06/Screen_Shot_2022-09-30_at_18.57.26.png)

De forma predeterminada, los productos de las tiendas físicas, o _sellers white label_ (nivel 3 en la imagen), no están disponibles para ser vendidos por el _marketplace_ de nivel 1, pero con la funcionalidad _Multilevel Omnichannel Inventory_ puedes disponibilizarlos.

De este modo, es posible que un _marketplace_ venda los productos de sus _sellers_ directos, así como de las tiendas físicas y de los _sellers white label_ vinculados a estos _sellers_.

Esto significa que cuando el _seller_ de la cuenta principal configura una integración con un _marketplace_, las cuentas franquicia también se integran automáticamente con él, por lo que no es necesario gestionar cada franquicia individualmente para configurar su integración con el _marketplace_.

>ℹ️ Actualmente, solo se permite un nivel de recursión. En otras palabras, el marketplace puede vender productos de sellers white label integrados con un seller directo.

## Beneficios

Esta funcionalidad aporta ventajas competitivas al _marketplace_, como:  

- Mayor diversidad de productos ofrecidos al cliente final.  
- Menos problemas de _stock_ insuficiente al incluir más tiendas que ofrecen productos.  
- La opción de ofrecer todo el _stock_ de una operación omnichannel a otros _marketplaces_, aumentando la oferta de puntos de recogida, por ejemplo.  
- La posibilidad de trabajar con nuevos modelos de negocio y conectar diferentes marcas con relaciones de colaboración entre el _marketplace_ y el _seller_.  
- Acceso a nuevos mercados y nichos de consumidores.  
- Orquestar los pedidos de múltiples canales con visibilidad sobre toda la cadena.  

Para más información sobre la arquitectura de pedidos aplicada en Multilevel omnichannel inventory, consulta nuestro [artículo para desarrolladores](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

## Restricciones

Algunas de las funcionalidades que forman parte del modelo tradicional de _marketplace_ no están disponibles para un escenario de _Multilevel omnichannel inventory_. Es importante conocer estas restricciones antes de habilitar la configuración.

### Disponibilidad

La funcionalidad Multilevel Omnichannel Inventory está disponible únicamente para [marketplaces VTEX](https://help.vtex.com/es/tutorial/marketplace-strategies-at-vtex--tutorials_402#ser-un-marketplace-vtex). Para utilizar la funcionalidad, el marketplace (nivel 1) debe realizar la configuración para cada seller directo (nivel 2) deseado. Puedes hacerlo al registrar nuevos sellers o al editar la configuración de sellers existentes en tu tienda. Consulta más información accediendo a [Configurar](#configuracion) y al [Developer portal](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory).

### Distribución de cuentas por cobrar

No es posible distribuir las cuentas por cobrar en toda la cadena (_marketplace, seller directo y sellers white label_). Los pagos de los pedidos de _Multilevel Omnichannel Inventory_ solo pueden realizarse en el _marketplace._ La conciliación y la transferencia de valores a los _sellers_ de nivel 3 deben realizarse fuera de VTEX, ya que no hay soporte nativo para esta etapa.

Puedes utilizar la solución de [split de pagos](https://help.vtex.com/es/tracks/split-de-pagamentos--1ouDg8q56Kuz1AgtJUY9nv/4EOhp8cdVXaHl68KykPG6) solo para dividir las cuentas por cobrar entre los niveles _marketplace_ y _seller directo_ (nivel 2). En este caso, se recomienda utilizar el [split de cobros](https://help.vtex.com/es/tutorial/split-payment#split-de-recebiveis).

En estos casos, el _seller_ directo se convierte en receptor de los ítems de sus _sellers white label_ y de sus propios ítems, eliminando las comisiones establecidas en la relación con el _marketplace_.

La solución puede ser suficiente en los casos en que el _seller_ directo forma parte del mismo grupo económico que sus _sellers white label_, lo que permite concentrar todas las cuentas por cobrar en una sola cuenta bancaria.

Es importante destacar que cuando el _seller directo_ no es responsable de las cuentas por cobrar de los _sellers white label_, la solución de split de cobros estará limitada al no permitir la distribución a los _sellers white label_.

### Medios de pago

Una vez realizada la configuración, solo los medios de pago del _marketplace_ aparecerán como opción en el _checkout_. Los medios de pago de los _sellers_ directos (nivel 2) y de los _sellers white label_ (nivel 3) no se importan a la arquitectura de las cuentas. Por lo tanto, el _checkout_ solo muestra los medios de pago del _marketplace_, incluso si el afiliado del _seller_ directo está configurado para utilizar sus medios de pago. 

>⚠️ El [afiliado](https://help.vtex.com/es/tutorial/como-configurar-afiliado--tutorials_187) de la cuenta franquicia debe tener siempre desmarcada la opción de usar los medios de pago.

### Cambio de seller

Si un _seller white label_ (nivel 3) recibe un pedido y lo rechaza, este pedido no se asigna a otro _seller white label_. En consecuencia, el comprador deberá crear un nuevo pedido en el _storefront_ del _marketplace_. Obtén más información en [Change seller](https://help.vtex.com/es/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO).

### Modificación de los pedidos finalizados por la tienda

La tienda no puede modificar los pedidos finalizados en un escenario de Multilevel Omnichannel Inventory. Por lo tanto, debe cancelar el pedido y crear uno nuevo. Consulta más información en [Change chain orders in external marketplaces](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces).

### Modificación de los pedidos finalizados por el cliente

El cliente no puede modificar los pedidos en la sección _Mis pedidos_ del _storefront_ del _marketplace_. Cualquier cambio en los pedidos debe realizarse a través del servicio de soporte al cliente o vía API.

### Manual price

La funcionalidad _Manual price_ no se aplica al _Multilevel omnichannel inventory._ Por lo tanto, no es posible modificar manualmente los precios en el carrito. Es necesario actualizar el precio a través de:

- [Integración con el ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide)  
- [Pricing API REST](https://developers.vtex.com/vtex-rest-api/reference/createupdatepriceorfixedprice)  
- [Página de precios en el Admin VTEX](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu)

### Información de usuario

Cuando un nuevo usuario realiza una compra, sus datos no se registran en el Profile system del _seller_ directo, que es la tienda que realizó la venta (nivel 2 en el diagrama anterior). Es decir, el _seller_ no tiene visibilidad de este usuario. Los datos del perfil del usuario solo se guardarán en el _marketplace_, que es responsable de toda la comunicación con él. Obtén más información en [Información compartida entre el marketplace y el seller en VTEX](https://help.vtex.com/es/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3).

### Regionalización

Un _marketplace_ no puede configurar la exhibición de los precios y la disponibilidad de los productos para los _sellers white label_ (nivel 3) con la funcionalidad [Region.](https://help.vtex.com/es/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc)

### UTM, cupones y tarjetas de regalo

La aplicación de [cupones](https://help.vtex.com/es/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL),[tarjetas de regalo (vales)](https://help.vtex.com/es/tutorial/gift-card--tutorials_995) y beneficios vinculados a los [UTM](https://help.vtex.com/es/tutorial/what-are-utm-source-utm-campaign-and-utm-medium--2wTz7QJ8KUG6skGAoAQuii) está restringido a _marketplaces_ nivel 1. No se aplicarán los configurados en _sellers_ directos (nivel 2) ni en cuentas franquicia o _sellers white label_ (nivel 3).

### Tablas de precios

No es posible crear tablas de precios mediante la funcionalidad [Tablas de precios](https://help.vtex.com/es/tutorial/criar-tabelas-de-precos--58YmY2Iwggyw4WeSCGg24S). Los precios deben registrarse vía integración con ERP o a través de plantillas.

## Configuracíon

La configuración de la funcionalidad __Multilevel omnichannel inventory__ debe ser realizada por el _marketplace_ en tu Admin VTEX o a través de la [API Rest](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory). Esta configuración puede realizarse tanto para los _sellers_ ya integrados como para los _sellers_ agregados por primera vez.

>ℹ️ Ten en cuenta que la configuración debe realizarse para cada seller directo (nivel 2) al que quieras aplicar la funcionalidad, pero no para cada cuenta de seller white label o cuenta franquicia (nivel 3).

### Sellers ya integrados

Para configurarla en los _sellers_ que se han integrado previamente, el _marketplace_ debe seguir los pasos a continuación.

1. En el Admin VTEX, ve a **Marketplace > Gestión.**  
2. En la fila correspondiente al seller cuyos sellers white label deseas acceder, haz clic en <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
3. Haz clic en Datos del seller.  
4. Rellena el campo **Fulfillment endpoint** siguiendo el ejemplo:
`https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{tradePolicyId}}`  
5. Sustituye los campos que están entre llaves por los valores que se describen a continuación, eliminando las llaves:  

    - **sellerAccount**: [el nombre de la cuenta](https://help.vtex.com/es/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) del seller en VTEX.  
    - **affiliateId**: el código de tres dígitos correspondiente al[ afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) creado por el _seller_. El _seller_ debe informar este valor al _marketplace_.  
    - **tradePolicyId**: ID de la[ política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) creada por el _seller_ en su propio entorno VTEX para vender en su _marketplace_. El _seller_ debe informar este valor al _marketplace_.  
6. Haz clic en ` Guardar`.  

### Sellers integrados por primera vez

Si el _marketplace_ desea agregar un nuevo _seller_ con _Multilevel omnichannel inventory_ configurado desde cero, debe seguir las instrucciones en [Agregar seller](https://help.vtex.com/es/tutorial/adicionar-seller--tutorials_392) y rellenar el campo `Fulfillment endpoint` siguiendo los paso 4 y 5 del tutorial en _Sellers_ ya integrados.

### Ejemplo

Supongamos que tu _marketplace_ ya está integrado con el _seller_ _"Tienda ABC"_ y quieres vender productos de _sellers white label_ integrados con ese _seller_.

Actualmente, el valor del campo _Fulfillment endpoint_ del _seller_ tiene el siguiente formato y se puede identificar accediendo a **Marketplace > Sellers > Gestión de sellers**:  

`https://storeabc.vtexcommercestable.com.br/api/fulfillment?affiliateId=mkp&sc=2`

Para habilitar la funcionalidad Multilevel omnichannel inventory, el nuevo valor del campo debe contener el _endpoint_ de **_checkout_, **en lugar del _endpoint_ de _fulfillment_:  

`https://storeabc.vtexcommercestable.com.br/api/checkout?affiliateid=mkp&sc=2`

Ten en cuenta que los valores introducidos en los campos `sellerAccount`, `affiliateId` y `tradePolicyId` que ya estaban rellenados en el _endpoint_ de _fulfillment_ permanecen los mismos en el _endpoint_ de _checkout_. Lo que cambia es el fragmento `/checkout`.

