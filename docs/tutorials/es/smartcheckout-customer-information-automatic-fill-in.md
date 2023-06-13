---
title: SmartCheckout - Rellenado automático de los datos del cliente
id: 2Nuu3xAFzdhIzJIldAdtan
status: PUBLISHED
createdAt: 2022-05-26T11:11:00.643Z
updatedAt: 2022-06-01T18:22:33.350Z
publishedAt: 2022-06-01T18:22:33.350Z
firstPublishedAt: 2022-06-01T16:54:34.605Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: smartcheckout-rellenado-automatico-de-los-datos-del-cliente
legacySlug: smartcheckout-rellenado-automatico-de-los-datos-del-cliente
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

SmartCheckout permite que los datos del cliente se completen automáticamente durante el Checkout. Para que esto suceda, el cliente solo debe ingresar el email registrado en la tienda. Esta funcionalidad reduce el tiempo de compra y elimina la necesidad de ingresar los datos cada vez que se realiza una compra en la misma tienda.

<div class="alert alert-info">
Para que SmartCheckout reutilice los datos del cliente durante el Checkout, es necesario que el cliente haya realizado alguna compra o que tenga un perfil registrado en la tienda.
</div>

## Datos de registro del cliente

Los datos del cliente que se usan en el checkout provienen de la información registrada en [Master Data](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629#). La lista a continuación muestra la relación estándar de estos datos. Sin embargo, pueden variar de un país al otro:

- Cliente (CL)
   - email
   - firstName
   - lastName
   - homePhone
   - document
   - documentType

- Dirección (AD)
   - addressName
   - addressType
   - country
   - state
   - postalCode or geoCoordinates
   - street
   - receiverName

<div class = "alert alert-warning">
Si la información de uno o más campos no está completa en el Master Data, SmartCheckout no mostrará ningún dato del cliente de manera automática en la pantalla del Checkout. En este caso, el cliente deberá completar todos los datos de identificación de manera manual en cada compra que realice.  
</div>

## Procedimiento de compra con SmartCheckout

El flujo de rellenado automático de los datos del cliente en el Checkout es el que se indica a continuación:

1. El cliente accede a la tienda VTEX, elije los productos que desea comprar y los agrega al carrito.
2. Al seleccionar `Terminar pedido` em **Mi carrito**, el cliente debe ingresar su email.
3. SmartCheckout verifica que el email ingresado pertenezca a un cliente registrado en la tienda.  
4. Al verificar el email, los campos de identificación del cliente se completan automáticamente con los datos que se recuperan del Master Data durante el Checkout.

<div class = "alert alert-warning">
Para proteger los datos del cliente, la información de identificación se mostrará parcialmente en la pantalla del checkout (parte de los datos están enmascarados de acuerdo con el estándar <a href="https://help.vtex.com/es/tutorial/what-is-the-pci-ssc--4jo3Vkox3amSO2w4qIWa0E#">PCI-DSS</a> de seguridad de pagos). Este procedimiento le permite al cliente identificar si sus datos son correctos y elegir entre las distintas direcciones registradas para la entrega, en caso de que corresponda.
</div>
<ul>
5. El cliente selecciona los medios de entrega y pago, y termina el pedido de compra.
</ul>
<div class = "alert alert-warning">
Si el cliente elije tarjeta de crédito o débito como medio de pago, se adoptarán los criterios adicionales de seguridad a continuación:
  <ul>
    <li>Solicitación del CVV (código de seguridad de la tarjeta) para la validación final y finalización del pedido de compra.</li>
    <li>Imposibilidad de realizar compras con tarjeta si se utiliza una dirección diferente a la registrada en el perfil del cliente.</li>
  </ul>
</div>

Cualquier modificación en los datos registrados, como la dirección o el teléfono, solo se permitirá una vez que el cliente haya [iniciado sesión en la tienda](https://help.vtex.com/es/tutorial/como-meu-cliente-pode-fazer-login-na-minha-loja--3FCNpwbpZe0U4auiI4CC0C). 

Para más información sobre protección de datos, visita [Seguridad de SmartCheckout](https://help.vtex.com/es/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).
