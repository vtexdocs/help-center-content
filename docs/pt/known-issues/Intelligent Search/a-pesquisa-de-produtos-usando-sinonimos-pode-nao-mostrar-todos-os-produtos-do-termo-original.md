---
title: "A pesquisa de produtos usando sinônimos pode não mostrar todos os produtos do termo original"
id: 5mZGQRhsQ487FNgrgvNC5H
status: PUBLISHED
createdAt: 2024-09-06T18:15:56.706Z
updatedAt: 2025-04-11T16:37:14.458Z
publishedAt: 2025-04-11T16:37:14.458Z
firstPublishedAt: 2024-09-06T18:15:57.593Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: a-pesquisa-de-produtos-usando-sinonimos-pode-nao-mostrar-todos-os-produtos-do-termo-original
locale: pt
kiStatus: Backlog
internalReference: 1094028
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os resultados ao pesquisar o sinônimo podem não incluir todos os produtos do termo original.

Esse comportamento ocorre porque os produtos associados ao termo original não estão sendo reindexados para incluir o sinônimo após a criação ou atualização de um sinônimo. A notificação de reindexação desses produtos pode ser perdida no processo.

## Simulação


Para garantir que esse problema esteja ocorrendo, esteja ciente das seguintes evidências:

1 - O número de resultados é diferente um do outro.

- Em **Admin > Storefront > Intelligent Search > Synonyms**, crie ou atualize um sinônimo unidirecional.
- Em seguida, em **Admin > Storefront > Intelligent Search > Explained Search**, compare os resultados ao pesquisar o termo original e o sinônimo.
- Ao comparar os resultados, os resultados ao pesquisar o sinônimo não incluem todos os produtos ao pesquisar o termo específico original.

2 - A data da última reindexação de um produto é mais antiga do que a data de criação do sinônimo.

- Escolha um produto do termo original que não apareça ao pesquisar usando o sinônimo.
- Compare as datas entre a data da última reindexação do produto (**Admin > Storefront > Intelligent Search > Histórico de indexação**) e a data de criação/atualização do sinônimo (**Admin > Storefront > Intelligent Search > Sinônimos**).
- Se a data da última reindexação de um produto for mais antiga do que a data de criação do sinônimo, então esse caso pode se encaixar nesse KI

## Workaround


Abra um tíquete para a equipe de CX com as informações de evidência para que possamos reindexar os produtos afetados.





