---
title: "OrderForm no se actualiza debido a que Faststore/entorno seguro no está sincronizado"
id: 4Xkk9LA95PRXbKxFYy189f
status: PUBLISHED
createdAt: 2024-06-27T15:22:19.922Z
updatedAt: 2025-07-08T18:00:26.684Z
publishedAt: 2025-07-08T18:00:26.684Z
firstPublishedAt: 2024-06-27T15:22:20.951Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: orderform-no-se-actualiza-debido-a-que-faststoreentorno-seguro-no-esta-sincronizado
locale: es
kiStatus: Backlog
internalReference: 1056870
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Normalmente, después de realizar un pedido, el orderFormId no se actualiza, haciendo que los artículos permanezcan visibles en el carrito. Este problema afecta a las cuentas FastStore.
También puede ocurrir sin cerrar un pedido, simplemente al limpiar las cookies e intentar comprobar de nuevo el entorno seguro.
Este problema puede estar relacionado con el retraso en la actualización del orderFormId debido a cambios relacionados con la cookie de comprobación.

Después de la respuesta gatewayCallback, el escenario esperado sería una nueva cookie orderFormId para el usuario. Este escenario se rompe porque el dominio de la nueva cookie no coincide con el dominio de la cookie anterior del usuario (debido al dominio seguro).


##

## Simulación



- Completar un pedido en una cuenta Faststore
- Volver a la página de inicio
- Los artículos que acaba de comprar permanecerán en su cesta



## Workaround


Este problema sigue afectando a las tiendas que utilizan la versión v1 de Faststore.

Para las tiendas que utilizan la v3 que están con nuestro CLI actualizado, la solución es actualizar a la característica de unificación de dominios, así este problema será resuelto. Puedes abrir un ticket de soporte solicitando esta funcionalidad.




