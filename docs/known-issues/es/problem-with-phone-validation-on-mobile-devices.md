---
title: 'Problema con la validación del teléfono en dispositivos móviles'
id: 2KpjpNZEbAZ7PFFPvMvwNA
status: PUBLISHED
createdAt: 2024-01-12T14:24:34.604Z
updatedAt: 2024-01-12T14:24:56.084Z
publishedAt: 2024-01-12T14:24:56.084Z
firstPublishedAt: 2024-01-12T14:24:35.388Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: problema-con-la-validacion-del-telefono-en-dispositivos-moviles
locale: es
kiStatus: Backlog
internalReference: 964802
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La validación del campo del teléfono en dispositivos móviles no se comporta como es debido. Cuando se alcanza el número esperado de caracteres, la validación marca correctamente el campo con un check. Sin embargo, cuando se añaden caracteres adicionales y luego se eliminan uno a uno, la validación no reconoce que el recuento de caracteres sigue siendo superior al esperado, marcando incorrectamente la entrada como válida. La validación también marca como válidas las entradas con menos caracteres de los esperados.



## Simulación



1. Navega hasta la página de pago comprando cualquier artículo al azar.
2. Durante el paso de perfil, introduzca un número de teléfono hasta que el campo se valide y se marque con un check.
3. 3. Experimente añadiendo más caracteres al número de teléfono y luego eliminándolos uno a uno, observando cómo el campo conserva la marca de verificación incluso con un número reducido de caracteres en comparación con la validación inicial.


##

## Workaround


N/A





