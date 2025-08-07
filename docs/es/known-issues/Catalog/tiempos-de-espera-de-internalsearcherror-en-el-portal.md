---
title: "Tiempos de espera de InternalSearchError en el Portal"
id: 6D6mdJ3zQypy1lcuht7WuU
status: PUBLISHED
createdAt: 2024-06-03T15:25:56.353Z
updatedAt: 2024-07-30T13:55:06.518Z
publishedAt: 2024-07-30T13:55:06.518Z
firstPublishedAt: 2024-06-03T15:25:57.378Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: tiempos-de-espera-de-internalsearcherror-en-el-portal
locale: es
kiStatus: Backlog
internalReference: 1043003
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la actualidad, las tiendas que utilizan la búsqueda heredada del Portal pueden enfrentarse, al utilizar varios filtros en su tienda, como filtros de colección en plantillas, a tiempos de espera aleatorios e intermitentes que a menudo se muestran como un error "Algo ha ido mal" para los clientes.

Este problema es, internamente, un tiempo de espera, que está siendo analizado por los equipos técnicos para aumentar su tiempo.


##

## Simulación


Este error es muy intermitente y difícil de replicar de forma consistente. Suele ser más frecuente en cuentas que utilizan varios filtros de recogida en sus plantillas, pero no hay una forma fiable de replicarlo.



## Workaround


Mientras no se investigan y aumentan los tiempos de espera, se recomienda reducir la cantidad de filtros que se utilizan en las búsquedas y los menús, aunque no se garantiza que se eliminen por completo dichos tiempos de espera, pero sí que se reducen significativamente.





