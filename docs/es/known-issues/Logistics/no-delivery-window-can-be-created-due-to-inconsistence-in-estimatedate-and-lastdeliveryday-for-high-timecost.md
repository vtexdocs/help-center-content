---
title: 'No se puede crear ninguna ventana de entrega debido a la incoherencia en estimateDate y lastDeliveryDay para timecost alto'
id: 3E5ZPyrjSOPD68vH4SXunM
status: PUBLISHED
createdAt: 2024-03-06T19:38:26.954Z
updatedAt: 2024-03-06T19:38:27.765Z
publishedAt: 2024-03-06T19:38:27.765Z
firstPublishedAt: 2024-03-06T19:38:27.765Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: no-se-puede-crear-ninguna-ventana-de-entrega-debido-a-la-incoherencia-en-estimatedate-y-lastdeliveryday-para-timecost-alto
locale: es
kiStatus: Backlog
internalReference: 995491
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



El `estimateDate` tiene en cuenta el tiempo total de entrega pero sólo considerando los días que entrega el transportista, por lo que en el caso de este ejemplo no considera los fines de semana.
Pero el `lastDeliveryDay` se calcula como días naturales (días consecutivos), que es `today date + delivery time + maximum number of days` configurado para la entrega programada, como cuenta días consecutivos, considerará los fines de semana.

Para que el sistema arme la ventana de entrega disponible, comparará si:

    lastDeliveryDay > estimateDate : TRUE


Y sólo si cumple esta condición creará la ventana de entrega.

Pero con un tránsito total `timecost` excesivamente alto, hay una inconsistencia con la variable `estimateDate` y `lastDeliveryDay`, la condición devolverá `false`, y por tanto no se creará ninguna ventana de entrega.



##

## Simulación



Cambie la configuración de envío a la siguiente:

- Días y horas de proceso de almacén con 100 días;
- Timecost en el fichero de tarifas de la hoja de cálculo con 1 día;
- Eliminar fines de semana y festivos para la configuración de la política de envío;
- Programar la entrega de lunes a viernes de 0h a 23:59h;
- Tiempo máximo de entrega en la configuración de Programar entrega para 5 días;

Esta configuración dará como resultado `lastDeliveryDay=10/05/2024` y `estimateDate=14/06/2024`;
Y por lo tanto la condición será falsa:

    10/05/2024 > 14/06/2024 : FALSE


y no se creará ninguna ventana de entrega;




## Workaround


No hay ninguna solución disponible.






