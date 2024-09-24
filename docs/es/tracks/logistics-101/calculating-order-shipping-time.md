---
title: 'Cálculo del plazo de entrega de un pedido'
id: 7IkKo1XSxiBj30hdn37oOE
status: ARCHIVED
createdAt: 2019-10-23T15:25:20.218Z
updatedAt: 2022-03-08T18:48:05.968Z
publishedAt: 
firstPublishedAt: 2019-10-23T20:05:01.736Z
contentType: trackArticle
productTeam: Post-purchase
slug: calculo-del-plazo-de-entrega-de-un-pedido
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugES: logistica-101
---

El plazo de entrega de un pedido tiene en cuenta los __tiempos de costo__ definidos para las tres etapas de la ruta logística, además de los feriados y horarios de corte registrados:
- Stock.
- Muelle.
- Transportadora.
- Feriados.
- Horario de atención de las transportadoras (entienda en detalle lo que son en el tutorial [Horario de atención de las transportadoras](https://help.vtex.com/en/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS))

Para cada una de las tres etapas de la ruta logística, puede establecer un tiempo de costo - y el tiempo de entrega que verá su cliente en el checkout es la suma de estos tiempos de costo (+ feriados, y considerando también los horarios de corte).

![deliveryCostTimes](//images.contentful.com/alneenqid6w5/hA6N4VPj440AEqEecIUck/0a6784f0c3d6f6d88b65547762600a7d/deliveryCostTimes.png)

Los tiempos de costo del __stock__ y del __muelle__ se definen en las pantallas de configuración de cada una de estas etapas, en el módulo Inventario y Envío > Paneles.

![calculoPrazoEntrega1](//images.contentful.com/alneenqid6w5/4QgQlroxxCK4iu6YoU2uIQ/a2df01bdbe2449e924a6380b5a39a19b/calculoPrazoEntrega1.png) 

![calculoPrazoEntrega2](//images.contentful.com/alneenqid6w5/6xAiBHXxwA2cMIaaK4AKm2/bfff8d81b7363121cc84de1149cfd587/calculoPrazoEntrega2.png)

El tiempo de costo de la __transportadora__ se define en la tabla de flete, que se envía a VTEX a través de la pantalla de configuración de la transportadora, también en el módulo Inventario y Envío.

![calculoPrazoEntrega3](//images.contentful.com/alneenqid6w5/2bL9Gw0AeswGAeKSqYCYw4/57c492eb08239d61e463839a768101ad/calculoPrazoEntrega3.png)

## Ejemplos

### Ejemplo 1

Pedido hecho el lunes.

- Tiempo de costo del Stock: 2 días
- Tiempo de costo del Muelle: 1 día
- Tiempo de costo de la Transportadora: 5 días
- Feriados registrados: No
- Hora de corte (11:00 a.m. del lunes) inferior al horario del pedido aprobado (3:00 p.m. el mismo lunes)

En este caso, la suma de los tiempos de costo de las tres etapas de la ruta logística (Stock + Muelle + Transportadora) es de 8 días.

Como no hay ningún feriado registrado, no se añade ningún día extra a este tiempo.

Pero como el pedido solo se aprobó después de la hora de corte, el lunes no cuenta para el plazo de entrega. El día 0 del recuento (D0) será, por tanto, el martes; y el plazo de entrega será de __8 días después del martes__.

### Ejemplo 2

Pedido hecho el lunes.

- Tiempo de costo del Stock: 3 días
- Tiempo de costo del Muelle: 0 días
- Tiempo de costo de la Transportadora: 2 días
- Feriados registrados: Sí, hay un feriado el miércoles siguiente al día del pedido.
- Horario de corte (6:00 p.m. del lunes) superior al horario del pedido aprobado (3:00 p.m. el mismo lunes). 

En este caso, la suma de los tiempos de costo de las tres etapas de la ruta logística (Stock + Muelle + Transportadora) es de 5 días.

Como hay un feriado registrado, se añade un día extra a este tiempo. Por lo tanto, el plazo pasa a ser de 6 días (5 días + 1 día de feriado).

Como el pedido se aprobó antes del horario de corte, el lunes entra en el plazo de entrega como día 0 (D0). El plazo de entrega será por tanto de __6 días después del lunes__.

