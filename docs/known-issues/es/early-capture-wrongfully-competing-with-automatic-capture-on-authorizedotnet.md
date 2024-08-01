---
title: 'Early Capture compite injustamente con Automatic Capture en AuthorizeDotNet'
id: 2IDoJIBiGzhkVZGHurLsnj
status: PUBLISHED
createdAt: 2023-07-20T18:08:30.934Z
updatedAt: 2023-07-20T18:08:31.479Z
publishedAt: 2023-07-20T18:08:31.479Z
firstPublishedAt: 2023-07-20T18:08:31.479Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: early-capture-compite-injustamente-con-automatic-capture-en-authorizedotnet
locale: es
kiStatus: Backlog
internalReference: 866068
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para que podamos entender este comportamiento, primero tenemos que comprender la diferencia entre captura automática y captura anticipada:

**Captura Automática:** Llamará a la solicitud de liquidación automáticamente una vez alcanzada la fecha, sin importar si la transacción es o no aprobada por la adquirente y el antifraude.

**Captura Temprana:** Llamará a la solicitud de liquidación después de que el antifraude apruebe la transacción, una vez que se alcance la cantidad de días configurada.

En este conector, la captura automática está codificada para que se produzca a los 4 días, mientras que la captura temprana puede configurarse hasta un máximo de 10 días después de la aprobación del antifraude. Terminan compitiendo entre sí, y si la captura anticipada se configura con un valor superior a 4 días, la captura automática siempre se producirá antes, por lo que siempre se llamará primero.

Esto hace que los valores permitidos en la captura temprana sean inútiles si son mayores de 4 días.


##

## Simulación




1. Configure el conector AuthorizeDotNet en su tienda;
2. Configure el campo "Captura anticipada" con un importe superior a 4 días;
3. Realice una transacción de prueba;
4. 4. Vaya a la interfaz de usuario de la transacción y compruebe que el valor programado para la captura automática se llama primero.



## Workaround


N/A





