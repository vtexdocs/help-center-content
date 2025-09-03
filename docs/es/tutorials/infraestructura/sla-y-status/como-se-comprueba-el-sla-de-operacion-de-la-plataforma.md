---
title: '¿Cómo se comprueba el SLA de operación de la plataforma?'
id: frequentlyAskedQuestions_662
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.436Z
updatedAt: 2024-03-11T22:38:31.694Z
publishedAt: 2024-03-11T22:38:31.694Z
firstPublishedAt: 2019-01-24T22:11:03.028Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-is-the-platforms-operation-sla-determined
legacySlug: como-se-comprueba-el-sla-de-operacion-de-la-plataforma
locale: es
subcategoryId: 5PYkoNDZyo2G80yiiqG2YW
---

Cualquier minuto de interrupción es muy costoso, tanto para las tiendas como para la misma VTEX. Así, tratamos de ser lo más transparentes posible con relación a la salud de nuestra plataforma. Ponemos a disposición la [página de status](https://status.vtex.com) en la que registramos todos los incidentes que impactaron nuestro SLA. Esos eventos se contabilizan como sigue.

Para determinar las violaciones del SLA, es decir, para contabilizar el tiempo de indisponibilidad de la plataforma, consideramos los siguientes acontecimientos:

- Interrupciones en la tienda virtual que estén impactando significativamente el número de pedidos realizados, por ejemplo: interrupción de la tienda, acceso lento, error en el checkout.
- Interrupciones que duren al menos 10 minutos.

> ⚠️ No contabilizamos el mantenimiento programado como tiempo de indisponibilidad.

## Verificar el status de VTEX

Para facilitar la identificación de escenarios de instabilidad, recomendamos consultar la página [Status VTEX](http://status.vtex.com) si sospecha que la herramienta no está disponible. El status se actualiza cuando la incidencia ha superado un mínimo de 10 minutos, con la siguiente información:

- __Investigando/Identificado__: el equipo está investigando el incidente y llevando a cabo las acciones necesarias para restablecer el servicio.
- __Monitoreando__: el incidente se ha resuelto y el servicio se ha estabilizado. Se está supervisando el ambiente.
- __Resuelto__: caso cerrado, con registro del tiempo total de interrupción del SLA. En la mayoría de los casos, el tiempo total de interrupción es la suma del tiempo de inactividad del incidente.

## Más información

- [Página VTEX Status](https://help.vtex.com/es/tutorial/pagina-de-status-da-vtex--gPhqDn9IQ3c67wbJEX3JJ)
