---
title: 'Erro ao exportar entidade com muitos documentos'
id: 1uLEk6e9z3011GaoJ4DNU0
status: PUBLISHED
createdAt: 2023-07-07T15:59:46.214Z
updatedAt: 2023-07-07T15:59:46.899Z
publishedAt: 2023-07-07T15:59:46.899Z
firstPublishedAt: 2023-07-07T15:59:46.899Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: erro-ao-exportar-entidade-com-muitos-documentos
locale: pt
kiStatus: Backlog
internalReference: 857894
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A exportação de um grande número de documentos de uma entidade resulta em processamento excessivo, causando erros na fila do processo e impedindo a exportação da lista de documentos.

## Simulação



1. Acesse a plataforma de CRM de dados mestres e navegue até o formulário da entidade desejada.
2. Localize o botão "Export XLS" na interface e clique nele.
3. Localize e clique no botão "Export XLS".
4. Inicie o processo de exportação confirmando a seleção e iniciando a exportação.
5. Para monitorar o andamento da exportação, navegue até a guia Applications (Aplicativos) na plataforma.
6. Procure o botão "Exports" (Exportações) e clique nele para ver a lista em andamento.
7. Observe o status da exportação e verifique se há erros ou problemas encontrados durante o processo de exportação.




## Workaround


Uma solução alternativa para esse problema é utilizar a API de rolagem.

