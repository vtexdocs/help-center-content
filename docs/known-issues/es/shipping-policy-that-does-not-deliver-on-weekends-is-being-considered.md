---
title: 'Se está estudiando una política de envíos que no entregue los fines de semana'
id: 25bhUZXA9sZvyFVNeMUSJl
status: PUBLISHED
createdAt: 2022-06-08T18:32:07.971Z
updatedAt: 2024-02-16T20:25:34.078Z
publishedAt: 2024-02-16T20:25:34.078Z
firstPublishedAt: 2022-06-08T18:32:08.836Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: se-esta-estudiando-una-politica-de-envios-que-no-entregue-los-fines-de-semana
locale: es
kiStatus: No Fix
internalReference: 594828
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Antes, la funcionalidad "**Fines de semana y festivos**" y "**horario comercial**" funcionaban conjuntamente, es decir, una información dependía de la otra.
Sin embargo, como algunas arquitecturas han optado por utilizar el "Horario comercial" como horario de muelle, entonces hubo la necesidad de separar esta información.
Así que con esto, los "Fines de semana y días festivos" no desprecian las políticas de envío que no entregarían en un día determinado. Y en consecuencia, se considera que las pólizas de envío que no entregan en fines de semana y festivos tienen un SLA mucho más largo de lo esperado, sin tener en cuenta otras pólizas de envío del mismo método de envío que cubrirían el pedido.



## Simulación


Tener una política de envío en la que la opción "**Fines de semana y festivos**" esté **desmarcada** (entrega en sábado, entrega en domingo y/o entrega en festivo) y la única opción de entrega (horario comercial) de esta política de envío sea el sábado y/o el domingo. Este es un ejemplo:

No hay entrega los sábados, domingos y festivos:
 ![](https://vtexhelp.zendesk.com/attachments/token/bCySQokwEktvbjouwE8O0e9Jj/?name=image.png)

El horario comercial se establece sólo para los sábados:
 ![](https://vtexhelp.zendesk.com/attachments/token/0IEYFx0IeeCa39loJzekErluI/?name=image.png)

Aunque la política de envío no es capaz de entregar los sábados, está disponible porque el sábado está incluido en su horario de funcionamiento, pero el tiempo es mucho mayor que el definido:
 ![](https://vtexhelp.zendesk.com/attachments/token/jefQyreOWL8Ty0V1vPTTS270v/?name=image.png)



## Workaround


Es posible habilitar la opción "Fines de semana y festivos" en función del "Horario comercial" de la política de envíos. Es decir, si la política de envío entrega sólo los sábados, se debe habilitar la opción de "Fines de semana y festivos" de los sábados.

