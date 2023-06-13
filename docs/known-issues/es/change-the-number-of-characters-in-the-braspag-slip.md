---
title: Modificar el número de caracteres de la ficha Braspag
id: 61xK9vvImE3hZsmhYEoWBg
status: PUBLISHED
createdAt: 2023-03-20T18:02:38.120Z
updatedAt: 2023-03-20T18:02:38.715Z
publishedAt: 2023-03-20T18:02:38.715Z
firstPublishedAt: 2023-03-20T18:02:38.715Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: modificar-el-numero-de-caracteres-de-la-ficha-braspag
kiStatus: Backlog
internalReference: 771045
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se genera un pedido vía boleto con Braspag y en los datos de dirección, si tiene más de 40 caracteres, se están cortando los datos de dirección. Deberá realizar una mejora cambiando el límite de caracteres del campo de dirección de 40 caracteres a 60.



##

## Simulación


Realiza un pedido a braspag mediante justificante bancario y en los datos de dirección, introduce una dirección que supera los 40 caracteres.



## Workaround


N/D

