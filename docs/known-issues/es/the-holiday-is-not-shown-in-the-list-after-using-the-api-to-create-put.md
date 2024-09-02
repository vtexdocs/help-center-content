---
title: 'Las vacaciones no se muestran en la lista después de utilizar la API para crear (PUT)'
id: WqzSTP6oFwk4MbGaO5mIU
status: PUBLISHED
createdAt: 2022-05-02T22:26:55.630Z
updatedAt: 2024-02-16T20:28:28.551Z
publishedAt: 2024-02-16T20:28:28.551Z
firstPublishedAt: 2022-05-02T22:26:56.888Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: las-vacaciones-no-se-muestran-en-la-lista-despues-de-utilizar-la-api-para-crear-put
locale: es
kiStatus: No Fix
internalReference: 571040
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



El registro de las vacaciones puede hacerse tanto directamente en nuestra interfaz de administración (`/admin/logistics/#/holidays`) como utilizando nuestra API.

En este caso, el problema surge cuando se utiliza la API y se realizan varias peticiones al mismo tiempo _(más o menos en el mismo segundo)_. Esto está generando una inconsistencia en la información causada por un problema en la indexación del registro una vez creado.

Para detallar un poco más este escenario, es importante hacer una referencia al **registro individual** y al **tratamiento de este registro para que se muestre en el listado** y que nuestro sistema logístico lo tenga en cuenta _confirmando aquí que el día festivo sólo se tendrá en cuenta en los cálculos logísticos si efectivamente este día se muestra en el listado_.

Cuando se produce este problema, se mantiene el registro individual, es decir, si se hizo un **GET por ID de día festivo**, se obtendrán los detalles, sin embargo, cuando se hizo un **GET la lista de días festivos**, este registro no aparecerá, lo que significa que dicho registro quedó inconsistente y no hay forma de recuperarlo ya que cada PUT realizado con el mismo ID encontrará un registro inconsistente que no generará una actualización o reprocesamiento.



## Simulación



Para intentar simular este problema, es necesario registrar varios días festivos en la misma cuenta al mismo tiempo. Es posible que uno o varios de estos días festivos sean incoherentes.

Después de eso, puede:

1. Validar con el GET por ID
2. A continuación, validar con el GET de la lista de vacaciones o directamente en la UI.



## Workaround



Recomendamos revisar los siguientes comentarios:

- Por un lado, validar la integración y las peticiones a esta API, ya que para el registro de vacaciones en una misma cuenta se recomienda tener procesos que **garanticen espacios de tiempo prudentes entre cada PUT**, quizás pensando en dar un **espacio de +-15 segundos o incluso minutos**.
- Por otro lado, en caso de presentar este comportamiento, es posible enviar un nuevo registro **(PUT) modificando el ID**. Esto creará un nuevo registro que si se respeta el punto anterior, no habrá problema y se mostrará en la lista.

