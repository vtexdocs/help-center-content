---
title: ¿Cómo se comprueba el SLA de operación de la plataforma?
id: frequentlyAskedQuestions_662
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.436Z
updatedAt: 2019-12-31T17:00:45.718Z
publishedAt: 2019-12-31T17:00:45.718Z
firstPublishedAt: 2019-01-24T22:11:03.028Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-se-comprueba-el-sla-de-operacion-de-la-plataforma
legacySlug: como-se-comprueba-el-sla-de-operacion-de-la-plataforma
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

Además de los plazos, hay que identificar qué asumimos como violación del SLA. O sea, qué realmente contará como tiempo de indisponibilidad.

Como nuestro modelo comercial se basa en el rendimiento de la tienda, queda muy claro para todo el equipo VTEX que cualquier minuto de interrupción es muy costoso, tanto para las tiendas como para la misma VTEX. Así, tratamos de ser lo más transparentes posible con relación a la salud de nuestra plataforma. Ponemos a disposición la [página de status](http://status.vtex.com "página de status") en la que registramos todos los incidentes que impactaron nuestro SLA. Esos eventos se contabilizan como sigue.

### Se contabilizan

- Cualquier interrupción en la tienda virtual que esté impactando significativamente el número de pedidos realizados. Ej.: tienda fuera del aire, lentitud en el acceso, error en el checkout.
- Contabilizamos interrupciones con duración de, como mínimo, 10 minutos.

### No se contabilizan

- Manutenimientos programados.
- Interrupción de algún servicio en el módulo administrativo.

### Verificando en el status

Para facilitar la identificación de esos escenarios, siempre recomendamos que se verifique el status en cualquier sospecha de indisponibilidad de la herramienta. El status es actualizado cuando el incidente excede del prazo mínimo de 10 minutos, con la siguiente información:

- __Investigando/Identificado__: Incidente siendo investigado por el equipo. El equipo está tomando la acción necesaria para el restablecimiento del servicio.
- __Monitoreando__: Incidente resuelto, servicio estabilizado. Ambiente bajo monitoreo.
- __Resuelto__: Caso cerrado. Registrado tiempo total de interrupción. En la mayoría de los casos, el SLA es la suma del tiempo de indisponibilidad de cada incidente.

![](//images.contentful.com/alneenqid6w5/2Le8koNu7YUoICaquSSuuY/134a3f2ca7cee4614a09c96397573dd9/Screen_Shot_2016-04-22_at_16.28.39.png)
