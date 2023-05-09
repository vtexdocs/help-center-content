---
title: La aplicación Storefront permissions establece "documentType" como "cpf"
id: 1vd0gFWrP50UZacQ0QBKP8
createdAt: 2023-04-27T15:19:53.064Z
updatedAt: 2023-05-08T18:20:15.566Z
publishedAt: 2023-05-08T18:20:15.566Z
firstPublishedAt: 2023-04-27T15:19:53.612Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: la-aplicacion-storefront-permissions-establece-documenttype-como-cpf
status: Backlog
internalReference: 798330
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La aplicación de permisos de la tienda siempre establece el campo "clientProfileData.documentType" como "cpf" en el orderForm. Esto puede causar que la transacción sea denegada por el proveedor.


##

## Simulación



- Instale el paquete B2B;
- Configurar una organización;
- Acceder a la página web y realizar un pedido.



## Workaround


Utilice el siguiente fragmento para sustituir el "documentType" de su país en el orderForm

    vtexjs.checkout .getOrderForm() .then(function(orderForm) { var clientProfileData = orderForm.clientProfileData clientProfileData.documentType = 'añade aquí la clave para' return vtexjs.checkout.sendAttachment( "clientProfileData", clientProfileData ) }) .done(function(orderForm){})





