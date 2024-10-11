---
title: 'A importação de arquivos da pesquisa avançada não funciona nos filtros do catálogo'
id: KB8nLgJorL1aKtUuf8Dga
status: PUBLISHED
createdAt: 2024-08-23T17:56:17.370Z
updatedAt: 2024-08-23T17:56:18.148Z
publishedAt: 2024-08-23T17:56:18.148Z
firstPublishedAt: 2024-08-23T17:56:18.148Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: advanced-searchs-file-import-not-functioning-on-catalog-filters
locale: pt
kiStatus: Backlog
internalReference: 1086454
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a pesquisa no catálogo legado tem uma funcionalidade, na guia "Pesquisa avançada", que permite importar um arquivo para criar um filtro de pesquisa.

No entanto, essa importação atualmente não está filtrando os dados adequadamente e acaba simplesmente não adicionando nenhum parâmetro a ser filtrado no catálogo.

## Simulação


1 - No módulo de catálogo, vá para qualquer UI que tenha um recurso de filtragem disponível, como /admin/Site/Relatorio_Skus.aspx

2 - Na seção de marca, clique no "Botão de pesquisa avançada"

 ![](https://vtexhelp.zendesk.com/attachments/token/evO2TGKzaTk0f0HBGqVrqemLF/?name=image.png)

3 - Será exibido um prompt, selecione a guia "file import" (importação de arquivos)

 ![](https://vtexhelp.zendesk.com/attachments/token/5zCBQ3MpC27ZGN6pnfKBycFwu/?name=image.png)

4 - Ao tentar importar um arquivo com uma lista de marcas, a referida lista não será adicionada aos filtros

## Workaround


Execute outros filtros ao pesquisar produtos no módulo de catálogo legado.





