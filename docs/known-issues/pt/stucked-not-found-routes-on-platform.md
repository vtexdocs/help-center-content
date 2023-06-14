---
title: 'Rotas presas não encontradas na plataforma'
id: iAGlRJtK1KMBGxH2tAsrX
status: PUBLISHED
createdAt: 2023-04-19T15:54:48.241Z
updatedAt: 2023-04-19T16:00:28.874Z
publishedAt: 2023-04-19T16:00:28.874Z
firstPublishedAt: 2023-04-19T15:54:48.788Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: rotas-presas-nao-encontradas-na-plataforma
locale: pt
kiStatus: Backlog
internalReference: 793457
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Devido à falta de notificações e problemas de cache, algumas rotas são armazenadas em cache em não encontradas no vbase e no reescritor por meio de store-indexer impactando a experiência quando essas rotas estão disponíveis novamente, sendo necessário enviar uma nova indexação e novas notificações ou esperar o tempo de store-indexer para acionar a nova indexação novamente


##

## Simulação


Esta é uma questão intermitente, portanto, basicamente, não é fácil de simular, mas uma vez que você armazena rotas no vbase e/ou reescritor como não encontrado, há uma chance de não receber uma notificação em um curto espaço de tempo para atualizar que



##

## Workaround


Para produtos,

- Tente não armazenar rotas dentro do reescritor, a menos que seja estritamente necessário
- Redefinir ou remover rotas no vbase indo para o aplicativo reescritor - admin/apps/vtex.rewriter@x.x.x/setup/ - e atualizando sua versão de rotas para uma nova
- Reindexar as rotas utilizando store-indexer
- Salvar o produto para notificar a emissora de que o produto mudou e então ele precisa enviar novas notificações
Para outras rotas

- Verificar se a rota está armazenada em reescrita como não encontrada se for atualizada para novos valores
- Verifique se a página tipo API está presa em uma página não encontrada e notifique a equipe do catálogo: https://.vtexcommercestable.com.br/api/catalog_system/pub/portal/pagetype/





