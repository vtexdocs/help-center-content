---
title: 'Erro ao listar as dependências do espaço de trabalho" ao tentar acessar uma conta'
id: 668VbRnIy8mdfMFyRH9ehX
status: PUBLISHED
createdAt: 2025-07-16T13:57:30.593Z
updatedAt: 2025-07-18T13:31:31.640Z
publishedAt: 2025-07-18T13:31:31.640Z
firstPublishedAt: 2025-07-16T13:57:31.816Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: erro-ao-listar-as-dependencias-do-espaco-de-trabalho-ao-tentar-acessar-uma-conta
locale: pt
kiStatus: Backlog
internalReference: 1260934
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar acessar uma conta que está há muito tempo sem acesso ou que não foi atualizada, você pode ver o seguinte erro:


    {"code": "route_map_error", "message": "Erro ao buscar dados de origem para o mapa de rotas: Error listing workspace dependencies: (500 generic_error at http://infra.io.vtex.com/apps/v0//master/v2/apps?fields=_activationDate%2C_isRoot%2C_resolvedDependencies%2CcredentialType%2Clink%2Cname%2Cpolicies%2Cregistry%2Cvendor%2Cversion) Error listing workspace dependencies: Falha ao obter as dependências instaladas: Failed to read data from cache: Unable to fetch data from remote cache: got 4 elements in cluster info address, expected 2 or 3", "requestId": ""}


Isso acontece porque a governanta não atualiza essas contas, já que elas estão há muito tempo sem acesso. O problema está relacionado a uma atualização em nossa infraestrutura de cache.

## Simulação


É difícil simular; você precisaria de uma conta antiga. Esse problema também impedirá o acesso ao administrador da conta; não é possível fazer login usando a CLI também. É algo mais provável de acontecer em contas de franquia ou de vendedor.



## Workaround


Abra um tíquete para o PS Apps para que possamos executar a solução alternativa para esse problema.





