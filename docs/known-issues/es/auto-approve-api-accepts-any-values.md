---
title: 'La API de aprobación automática acepta cualquier valor'
id: kLl4mtwKPPqW6jk5hZMWs
status: PUBLISHED
createdAt: 2022-12-12T14:18:51.059Z
updatedAt: 2022-12-12T14:18:51.733Z
publishedAt: 2022-12-12T14:18:51.733Z
firstPublishedAt: 2022-12-12T14:18:51.733Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-aprobacion-automatica-acepta-cualquier-valor
locale: es
kiStatus: Backlog
internalReference: 713704
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la API de autoaprobación no comprueba si el vendedor existe, lo que puede dar lugar a configuraciones incorrectas.

/suggestions/configuration/autoapproval/toggle/seller/1a?sellerId=

Si el identificador de vendedor anterior se envía, por ejemplo, con un carácter diferente que distinga entre mayúsculas y minúsculas: Myseller en lugar de myseller, la API responderá con 200OK y la autoaprobación se establecerá, engañosamente, como verdadera. Sin embargo, no se activará la aprobación automática del vendedor, ya que la cadena debe coincidir exactamente para que funcione.




##

## Simulación



## Workaround



