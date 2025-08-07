---
title: "Problema con las API de sesión que utilizan propiedades públicas que empiezan por el mismo prefijo"
id: RAoSKg2hwwiC6L7wFPyNv
status: PUBLISHED
createdAt: 2023-08-21T20:00:45.403Z
updatedAt: 2023-08-21T20:11:44.751Z
publishedAt: 2023-08-21T20:11:44.751Z
firstPublishedAt: 2023-08-21T20:00:46.132Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: problema-con-las-api-de-sesion-que-utilizan-propiedades-publicas-que-empiezan-por-el-mismo-prefijo
locale: es
kiStatus: Backlog
internalReference: 885011
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La API de sesión está generando algunas inconsistencias. El equipo de ingeniería ha identificado el fallo, el fallo está relacionado con propiedades que empiezan por la misma palabra.


##

## Simulación


Si haces un POST enviando 2 valores públicos con el mismo prefijo, la API sólo recibe uno. Si lo intentas de nuevo, haciendo el mismo POST enviando los mismos 2 valores, la API recibe ambos.



## Workaround


n/a





