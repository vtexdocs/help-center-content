---
title: 'A atualização das políticas comerciais disponíveis do vendedor não aciona a indexação automática'
id: 45FOjSN4a5ZhCqilQfUX99
status: PUBLISHED
createdAt: 2024-05-31T13:49:57.732Z
updatedAt: 2024-05-31T13:49:58.764Z
publishedAt: 2024-05-31T13:49:58.764Z
firstPublishedAt: 2024-05-31T13:49:58.764Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-atualizacao-das-politicas-comerciais-disponiveis-do-vendedor-nao-aciona-a-indexacao-automatica
locale: pt
kiStatus: Backlog
internalReference: 1041874
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Na UI de gerenciamento do vendedor, remova ou adicione uma nova política comercial a um vendedor.

Esse processo é salvo com êxito, mas as informações não são atualizadas automaticamente no indexador de produtos relacionados a esse vendedor específico.

Como consequência, a oferta do vendedor para esses produtos ficará desatualizada como:
- ainda disponível na política comercial (se a ação foi removê-la);
- não disponível na política comercial (se a ação foi adicioná-la).


## Simulação



- Verifique um produto que tenha uma oferta de um vendedor em uma política comercial específica;
- Remova a política comercial desse vendedor usando a UI de gerenciamento do vendedor;
- Verificar se a ação não foi refletida no produto

## Workaround


Indexar o produto manualmente.





