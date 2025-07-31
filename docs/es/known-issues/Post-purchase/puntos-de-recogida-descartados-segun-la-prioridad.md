---
title: "Puntos de recogida descartados según la prioridad"
id: 3bbsm8TELPBa0DpFtnlAGz
status: PUBLISHED
createdAt: 2021-09-29T14:38:08.930Z
updatedAt: 2024-06-14T16:56:59.120Z
publishedAt: 2024-06-14T16:56:59.120Z
firstPublishedAt: 2021-09-29T14:49:34.443Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: puntos-de-recogida-descartados-segun-la-prioridad
locale: es
kiStatus: Backlog
internalReference: 380545
---

## Sumario


Cuando el cliente está finalizando una compra, el módulo de logística calcula las opciones de entrega disponibles para la ubicación elegida y las presenta en el _checkout_. Por ejemplo, supongamos que para una ubicación hay dos puntos de recogida nombrados con el mismo [método de envío](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126), pero asociados a diferentes [políticas de envío](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). Al calcular los puntos de recogida que van a estar disponibles para el cliente, la plataforma solo muestra uno de ellos. 

En este caso, el módulo de logística ha descartado los demás puntos de recogida mediante su algoritmo de priorización. Durante este proceso, solo se presenta al cliente uno de los métodos de envío con el mismo nombre. Sepa más en este artículo sobre [las divergencias entre políticas de envío](https://help.vtex.com/pt/faq/por-que-minha-transportadora-nao-aparece-no-checkout--frequentlyAskedQuestions_165#concorrencia-entre-transportadoras-do-mesmo-tipo). 

Cuando se [simula una entrega](https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144) en la que hay métodos de envío con el mismo nombre para puntos de recogida en diferentes políticas de envío, solo uno estará disponible. Los otros puntos serán descartados y no serán mostrados por la interfaz, o se mostrarán con el mensaje:

“Motivo: Descartado según la prioridad".


## Simulación


To simulate the described scenario, at least two shipping policies serving the same delivery region must have been previously registered. These shipping policies must have shipping methods with the same name, and at least one pickup point must be associated with each one.

1. Open the [shipping simulator;](https://help.vtex.com/en/tutorial/simulador-de-envio--tutorials_144)
2. Select a SKU available at pickup points compatible with the scenario described above;
3. Run the simulation;
4. See which pickup point has been selected;
5. Check which pickup points were disregarded and note the message displayed.

![KIpontoderetirada ES](//images.ctfassets.net/alneenqid6w5/6TLSPTSA7E5EG2sevnDYXf/3a5671abaf682e8a0a52e73e5db41896/KIpontoderetirada_ES.png)

The pickup point was disregarded because there was another shipping method already named as **SCS Mall**.


## Workaround


Hay dos _workarounds_ posibles:

* Evitar utilizar el mismo nombre para dos métodos de envío de puntos de recogida que operen en la misma región. Por ejemplo, en el caso de la simulación descrita, la solución sería cambiar el nombre de uno de los métodos de envío.
* Registrar una única política de envío para ambos puntos de recogida. De este modo, habría dos puntos de recogida cuyos métodos de envío tienen el mismo nombre. No entraríamos en el escenario descrito anteriormente, ya que ambos estarían asociados a la misma política de envío.

