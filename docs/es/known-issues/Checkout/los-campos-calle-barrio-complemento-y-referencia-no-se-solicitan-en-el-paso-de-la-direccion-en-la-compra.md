---
title: "Los campos Calle, Barrio, Complemento y Referencia no se solicitan en el paso de la dirección en la compra"
id: 2wY4t0iIie4pjpJrs0Af3F
status: PUBLISHED
createdAt: 2022-04-19T18:20:30.913Z
updatedAt: 2022-11-25T21:53:33.585Z
publishedAt: 2022-11-25T21:53:33.585Z
firstPublishedAt: 2022-04-19T18:20:31.606Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: los-campos-calle-barrio-complemento-y-referencia-no-se-solicitan-en-el-paso-de-la-direccion-en-la-compra
locale: es
kiStatus: Backlog
internalReference: 563507
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la dirección se introduce a través de la API de código postal y estos datos se actualizan en el shippingData antes de llegar a la caja. Si nuestra API postal no devuelve todos los datos completos, por ejemplo, calle, barrio, etc. faltarán en shippingData. El problema es que cuando el cliente utiliza el componente de geolocalización en su checkout, no realiza la validación de estos campos que faltan, dejando que el usuario vaya al paso de pago sin rellenar los datos que no están completos.



## Simulación


Llame a `api/checkout/pub/postal-code/BRA` informando del código postal `75345-000` antes de llegar a la caja.

Actualice el shippingData con los datos devueltos por esta API. Al llegar a Checkout, el componente sólo pedirá que se rellene el campo número y destinatario, permitiendo así que el usuario vaya al paso de pago con estos datos que faltan.



## Workaround


N/A

