---
title: 'Rotas bloqueadas e não encontradas na plataforma'
id: iAGlRJtK1KMBGxH2tAsrX
status: PUBLISHED
createdAt: 2023-04-19T15:54:48.241Z
updatedAt: 2023-06-28T15:56:47.493Z
publishedAt: 2023-06-28T15:56:47.493Z
firstPublishedAt: 2023-04-19T15:54:48.788Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: rotas-bloqueadas-e-nao-encontradas-na-plataforma
locale: pt
kiStatus: Backlog
internalReference: 793457
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Devido à falta de notificações e a problemas de cache, algumas rotas são armazenadas em cache como não encontradas no vbase e no rewriter pelo store-indexer, afetando a experiência quando essas rotas estão disponíveis novamente, sendo necessário enviar uma nova indexação e novas notificações ou aguardar o tempo do store-indexer para acionar a nova indexação novamente

## Simulação


Esse é um problema intermitente, portanto, basicamente, não é fácil de simular, mas uma vez que você armazena rotas no vbase e/ou no rewriter como não encontradas, há uma chance de não receber uma notificação em um curto espaço de tempo para atualizar isso

## Workaround


Para produtos,

- Tente não armazenar rotas dentro do rewriter, a menos que seja estritamente necessário
- Redefina ou remova as rotas no vbase acessando o aplicativo do rewriter - admin/apps/vtex.rewriter@x.x.x/setup/ - e atualizando a versão das rotas para uma nova
- Reindexar as rotas usando o store-indexer
- Salvar o produto para notificar o transmissor de que o produto foi alterado e que ele precisa enviar novas notificações
Para outras rotas

- Verifique se a rota está armazenada no rewriter como não encontrada se ela for atualizada para novos valores
- Verifique se a API do tipo de página está presa em um não encontrado e notifique a equipe do catálogo: `https://.vtexcommercestable.com.br/api/catalog_system/pub/portal/pagetype/`





