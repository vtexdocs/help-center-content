---
title: 'Alguns comportamentos inesperados no MasterData'
id: 4E9jB5vkUMucnAuwUMOGQL
status: PUBLISHED
createdAt: 2023-09-18T21:27:15.291Z
updatedAt: 2023-10-10T21:16:04.759Z
publishedAt: 2023-10-10T21:16:04.759Z
firstPublishedAt: 2023-09-18T21:27:15.908Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: some-unexpected-behavior-in-masterdata
locale: pt
kiStatus: Backlog
internalReference: 669048
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Mesmo com dados disponíveis (documentos), as informações não são retornadas como esperado.
Esse comportamento pode afetar algumas das seguintes funcionalidades:

- As imagens no Editor do site (CMS) não estão disponíveis, devido à mensagem de erro "_Algo deu errado. Por favor, tente novamente.";
- Não é possível acessar entidades e seus documentos devido à mensagem de erro "_Ocorreu um erro inesperado. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte._";
- O `_sort` não é respeitado na API Search documents;
- Nenhuma informação é retornada ao usar a API Search Documents (uma resposta vazia, como `[]`), mesmo quando eles contêm documentos.

## Simulação



## Workaround



