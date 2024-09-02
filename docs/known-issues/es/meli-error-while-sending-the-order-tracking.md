---
title: 'Error MELI al enviar el seguimiento del pedido'
id: 4wdzb5xjelAkFnbuRCFXAt
status: PUBLISHED
createdAt: 2023-03-06T10:06:58.255Z
updatedAt: 2023-10-20T17:28:38.314Z
publishedAt: 2023-10-20T17:28:38.314Z
firstPublishedAt: 2023-03-06T10:06:59.162Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: error-meli-al-enviar-el-seguimiento-del-pedido
locale: es
kiStatus: Fixed
internalReference: 764885
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente estamos registrando un mensaje de error dentro del menú Brige - Seguimiento, este error está siendo devuelto por MELI cuando les enviamos el flujo de seguimiento.

Es importante señalar que esto no está afectando el flujo como el seguimiento está funcionando correctamente, pero el problema es que estamos creando el registro como un mensaje de error cuando debería ser éxito en su lugar. (Debido a lo que devuelve MELI)


##

## Simulación



Dentro del menú Bridge - Tracking se mostrará un mensaje de error como el siguiente.

"Mensagem de erro não mapeada pela integração. Póngase en contacto con VTEX para informarle de lo ocurrido y realizar la reparación.
Mensaje de error Mercado Libre:"



## Workaround



No se requiere ninguna acción, es importante tener en cuenta que a pesar de que el mensaje de error se muestra esto no está afectando el flujo de seguimiento, el XML se envía a MELI y el estado del pedido se actualiza.




