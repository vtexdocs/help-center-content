---
title: "Store-graphql impersonate mutation no carga datos de perfil para usuarios creados manualmente"
id: DYMzV5TJmjV2sZPO2eosM
status: PUBLISHED
createdAt: 2025-04-23T18:10:05.562Z
updatedAt: 2025-04-28T14:20:08.920Z
publishedAt: 2025-04-28T14:20:08.920Z
firstPublishedAt: 2025-04-23T18:10:06.130Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: storegraphql-impersonate-mutation-no-carga-datos-de-perfil-para-usuarios-creados-manualmente
locale: es
kiStatus: Backlog
internalReference: 1214877
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La mutación de suplantación de la aplicación vtex.store-graphql no se comporta como se espera cuando el cliente no se creó a través de la plataforma VTEX, sino que se importó directamente a Masterdata (independientemente de si fue a través de API, hoja de cálculo o entrada manual). Cuando esto ocurre, los datos del perfil del cliente no están disponibles inmediatamente para la aplicación vtex.telemarketing después de la suplantación.



##

## Simulación


Para reproducir el problema:

Importe un usuario a Masterdata sin (puede ser vía API, entrada manual u hoja de cálculo).

Vaya a una tienda que utilice vtex.telemarketing con un rol de administrador válido de telemarketing.

Intente suplantar al nuevo usuario.

Observa que la información del perfil es nula en la respuesta de mutación.

Actualice la página manualmente. Después de eso, los datos del perfil aparecen correctamente.




## Workaround


**Actualice la página** después de utilizar la mutación "impersonar", ya sea manualmente o mediante programación. Esto hace que los datos del perfil se obtengan correctamente.





