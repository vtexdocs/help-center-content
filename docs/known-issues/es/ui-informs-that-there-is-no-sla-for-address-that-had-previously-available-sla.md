---
title: 'UI informs that there is no SLA for address that had previously available SLA'
id: 2xXtoKl1OBiiyPyTVeUTrg
status: PUBLISHED
createdAt: 2022-05-24T21:48:17.537Z
updatedAt: 2022-11-25T21:49:17.360Z
publishedAt: 2022-11-25T21:49:17.360Z
firstPublishedAt: 2022-05-24T21:48:18.159Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-informs-that-there-is-no-sla-for-address-that-had-previously-available-sla
kiStatus: Fixed
internalReference: 585249
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el usuario conectado llega a la fase de envío, con la dirección ya preseleccionada y con el ANS disponible para esa ubicación, al editar su dirección con exactamente la misma información rellenada anteriormente, la UI informa que no hay entrega disponible. Incluso la respuesta de la API es que sí hay SLA disponible (ya que es la misma dirección).



## Simulación


Teniendo un usuario con una dirección registrada, y esta dirección tiene entrega disponible, al ir a la etapa de envío, editar la dirección con la misma información. Justo después de editar el mensaje es que no hay más SLA disponible.




## Workaround


N/A

