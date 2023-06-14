---
title: O aplicativo de televendas não está funcionando corretamente com RequiresAuthenticationToLoadProfile
id: 4L79woOuaUM2Ip5vG1Kp7D
status: PUBLISHED
createdAt: 2023-04-26T17:20:58.399Z
updatedAt: 2023-05-08T18:18:42.798Z
publishedAt: 2023-05-08T18:18:42.798Z
firstPublishedAt: 2023-04-26T17:20:59.230Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-aplicativo-de-televendas-nao-esta-funcionando-corretamente-com-requiresauthenticationtoloadprofile
kiStatus: Backlog
internalReference: 797651
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar o sinalizador RequiresAuthenticationToLoadProfile das APIs de checkout com um aplicativo de televendas para personificar usuários, não está sendo acionado nenhum tipo de feedback para o usuário se a personificação foi feita com sucesso e causa algumas inconsistências no fluxo

## Simulação



Para a simulação, você deve ter a opção RequiresAuthenticationToLoadProfile ativada, o que significa que você deve usar um token autorizado para acessar algumas APIs

Você também deve implementar a funcionalidade de televendas: https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R

https://developers.vtex.com/docs/guides/vtex-telemarketing

Depois disso, tente se passar por um usuário com um operador de call center. Você verá algumas inconsistências na plataform

## Workaround



Para algumas partes do fluxo, uma atualização pode resolver o problema; outras funcionalidades não estão preparadas para funcionar com RequiresAuthenticationToLoadProfile, portanto, se uma atualização não resolver o problema, a única solução possível é desativar o sinalizador




