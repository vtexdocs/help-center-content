---
title: "La aplicación Storefront permissions establece 'documentType' como 'cpf'"
id: 1vd0gFWrP50UZacQ0QBKP8
status: PUBLISHED
createdAt: 2023-04-27T15:19:53.064Z
updatedAt: 2023-05-23T18:01:51.986Z
publishedAt: 2023-05-23T18:01:51.986Z
firstPublishedAt: 2023-04-27T15:19:53.612Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: la-aplicacion-storefront-permissions-establece-documenttype-como-cpf
locale: es
kiStatus: Fixed
internalReference: 798330
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La aplicación de permisos de la tienda siempre establece el campo "clientProfileData.documentType" como "cpf" en el orderForm. Esto puede causar que la transacción sea denegada por el proveedor.


##

## Simulación



- Instale el paquete B2B;
- Configurar una organización;
- Acceder a la página web y realizar un pedido.



## Workaround


Utilice el siguiente fragmento para sustituir el "documentType" de su país en el orderForm

    vtexjs.checkout .getOrderForm() .then(function(orderForm) { var clientProfileData = orderForm.clientProfileData clientProfileData.documentType = 'añade aquí la clave para' return vtexjs.checkout.sendAttachment( "clientProfileData", clientProfileData ) }) .done(function(orderForm){})





