---
title: 'A pesquisa de produtos usando sinônimos pode não retornar todos os produtos do termo original'
id: 5mZGQRhsQ487FNgrgvNC5H
status: PUBLISHED
createdAt: 2024-09-06T18:15:56.706Z
updatedAt: 2024-09-09T12:27:02.861Z
publishedAt: 2024-09-09T12:27:02.861Z
firstPublishedAt: 2024-09-06T18:15:57.593Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: a-pesquisa-de-produtos-usando-sinonimos-pode-nao-retornar-todos-os-produtos-do-termo-original
locale: pt
kiStatus: Backlog
internalReference: 1094028
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os resultados ao pesquisar o sinônimo podem não incluir todos os produtos ao pesquisar o termo específico original.

Quando um sinônimo é criado, todos os produtos associados ao termo de pesquisa específico devem ser reindexados para incluir o sinônimo. No entanto, os produtos não estão sendo reindexados após a criação ou atualização de um sinônimo unidirecional.

Esse comportamento ocorre porque a notificação de reindexação desses produtos pode ser perdida no processo.

## Simulação


Para garantir que esse problema esteja ocorrendo, fique atento às seguintes evidências:

1 - O número de resultados difere um do outro.

- Em **Admin > Storefront > Intelligent Search > Synonyms**, crie ou atualize um sinônimo unidirecional.
- Em seguida, em **Admin > Storefront > Intelligent Search > Explained Search**, compare os resultados ao pesquisar o termo original e o sinônimo.
- Ao comparar os resultados, os resultados ao pesquisar o sinônimo não incluem todos os produtos ao pesquisar o termo específico original.

2 - A data da última reindexação de um produto é mais antiga do que a data de criação do sinônimo.

- Escolha um produto do termo original que não apareça ao pesquisar usando o sinônimo.
- Compare as datas entre a data da última reindexação do produto (**Admin > Storefront > Intelligent Search > Histórico de indexação**) e a data de criação/atualização do sinônimo (**Admin > Storefront > Intelligent Search > Sinônimos**).
- Se a data da última reindexação de um produto for mais antiga do que a data de criação do sinônimo, então esse caso pode se encaixar nesse KI

## Workaround


Abra um tíquete para a equipe de CX com as informações de evidência para que possamos reindexar os produtos afetados.





