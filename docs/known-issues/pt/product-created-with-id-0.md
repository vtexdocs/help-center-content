---
title: 'Produto Criado com ID = 0.'
id: 5eMPxXAxxdJUKWMi1i8tWl
status: PUBLISHED
createdAt: 2022-05-04T15:30:22.045Z
updatedAt: 2022-11-25T21:45:57.621Z
publishedAt: 2022-11-25T21:45:57.621Z
firstPublishedAt: 2022-05-04T15:30:22.868Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: produto-criado-com-id-0
locale: pt
kiStatus: Backlog
internalReference: 335840
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


É possível criar produtos com ID = 0 se eles utilizarem nosso API ou WebService.

O produto com ID = 0 nunca será indexado e quebrará o fluxo para criar novos produtos usando a interface ou usando sugestões.



## Simulação


- Criar um produto com ID = 0 usando API ou serviço web.



## Workaround


Para corrigir o fluxo de criação de novos produtos, o usuário deve criar outro produto usando API ou WebService, mas desta vez, usando uma identificação válida. O próximo produto criado pela interface ou sugestão será criado corretamente.

