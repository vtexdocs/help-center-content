---
title: 'Cambios en orderPlaced proporcionan datos más precisos en Google Analytics'
id: 4u1VqmUtriycuukqqcSKaA
status: PUBLISHED
createdAt: 2018-09-04T20:11:58.119Z
updatedAt: 2019-12-31T15:12:58.712Z
publishedAt: 2019-12-31T15:12:58.712Z
contentType: updates
productTeam: Channels
author: authors_24
slug: cambios-en-orderplaced-proporcionan-datos-mas-precisos-en-google-analytics
locale: es
legacySlug: cambios-en-orderplaced-proporcionan-datos-mas-precisos-en-google-analytics
announcementImageID: ''
announcementSynopsisES: 'Los pedidos con productos de más de un vendedor ahora generan un único evento en Google Analytics.'
---

La página de confirmación de pedido (también conocida como orderPlaced) recibió una serie de mejoras en el data layer. Los cambios corrigen las redundancias que existían en la creación de eventos en Google Analytics.


## Que ha cambiado
Antes, el orderPlaced creaba eventos separados para los pedidos que contenían productos de dos o más sellers diferentes. Esto significaba que un mismo pedido podría generar diversos eventos, multiplicando la cantidad de datos y haciéndolos poco confiables.

Para resolver esto, hicimos un cambio en la __versión 4 del orderPlaced__. Ahora, la creación de eventos en Google Analytics está condicionada al parámetro `orderGroup`. A continuación se indican los detalles del cambio:

`transactionId`: ahora es el orderGroup.

`transactionTotal`: valor de la suma de todas las transacciones de todos los pedidos de orderGroup.

`transactionShipping`: valor de la suma de todos los envíos de los pedidos de orderGroup.

`transactionTax`: valor de la suma de todas las tarifas de los pedidos de orderGroup.

`transactionPaymentType`: devuelve una lista de objetos (que son los tipos de pago de todos los pedidos de orderGroup) en el siguiente formato:
```json
{ 
       group: p.group,    
       paymentSystemName: p.paymentSystemName,    
       installments: p.installments,    
       value: p.value 
}
```

`transactionShippingMethod`: devuelve una lista de objetos (que son los tipos de entrega de todos los pedidos de orderGroup) en el siguiente formato:
```json
{    
        itemId: l.itemId,    
        selectedSla: l.selectedSla,    
}
```

`transactionProducts`: devuelve los productos de todos los pedidos de orderGroup.



## Principales ventajas
Las mejoras atienden principalmente a escenarios en los que uno mismo pedido tiene productos que serán entregados por diferentes sellers. Los pedidos con estas características ahora generan datos más limpios en Google Analytics, lo que proporciona una visión más precisa del comportamiento de compra de sus clientes.


## Lo que usted necesita hacer
Este cambio __no requiere__ ningún tipo de acción. Si su tienda ya usa la __versión 4 del orderPlaced__, que es compatible con todas las funcionalidades de [Omnichannel](/es/announcement/cambie-su-negocio-con-la-experiencia-omnichannel-vtex), el nuevo comportamiento ya se está aplicando.


>⚠️ Este cambio se llevó a cabo **sólo en la versión 4 del orderPlaced** y no afecta el comportamiento de las versiones anteriores.
