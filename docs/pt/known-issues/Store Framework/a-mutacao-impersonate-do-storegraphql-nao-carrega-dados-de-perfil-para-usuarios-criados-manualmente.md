---
title: "A mutação impersonate do Store-graphql não carrega dados de perfil para usuários criados manualmente"
id: DYMzV5TJmjV2sZPO2eosM
status: PUBLISHED
createdAt: 2025-04-23T18:10:05.562Z
updatedAt: 2025-04-28T14:20:08.920Z
publishedAt: 2025-04-28T14:20:08.920Z
firstPublishedAt: 2025-04-23T18:10:06.130Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: a-mutacao-impersonate-do-storegraphql-nao-carrega-dados-de-perfil-para-usuarios-criados-manualmente
locale: pt
kiStatus: Backlog
internalReference: 1214877
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A mutação impersonate do aplicativo vtex.store-graphql não se comporta como esperado quando o cliente não foi criado por meio da plataforma VTEX, mas importado diretamente para o Masterdata (independentemente de ter sido via API, planilha ou entrada manual). Quando isso acontece, os dados do perfil do cliente não ficam imediatamente disponíveis para o aplicativo vtex.telemarketing após a personificação.


## Simulação


Para reproduzir o problema:

Importe um usuário para o Masterdata sem (pode ser via API, entrada manual ou planilha).

Vá para uma loja que use vtex.telemarketing com uma função de administrador válida de telemarketing.

Tente se passar pelo novo usuário.

Observe que as informações do perfil são nulas na resposta de mutação.

Atualize a página manualmente. Depois disso, os dados do perfil serão exibidos corretamente.




## Workaround


**Atualize a página** depois de usar a mutação `impersonate`, seja manual ou programaticamente. Isso força os dados do perfil a serem obtidos corretamente.





