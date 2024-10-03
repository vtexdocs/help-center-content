---
title: 'Exportação de documentos com campos de duas entidades diferentes não é possível'
id: 5ed6rXDZNpVa5VOyAGrttf
status: PUBLISHED
createdAt: 2019-04-11T00:23:14.583Z
updatedAt: 2022-12-22T20:46:24.799Z
publishedAt: 2022-12-22T20:46:24.799Z
firstPublishedAt: 2019-04-11T21:57:42.707Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: unable-to-export-documents-across-entities
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O usuário deseja exportar documentos que possuem campos de duas entidades diferentes. Entretanto, a possibilidade de exportar entre entidades foi descontinuada recentemente, impedindo o usuário de fazer a exportação. 

Neste exemplo, iremos analisar um caso em que o usuário queira exportar o email e o endereço.

## Simulação



## Workaround

Para obter o mesmo resultado, basta seguir os passos abaixo:

1. Acesse a a entidade AD e seleciona os campos desejados marcando o campo userID, inclusive.
2. Em seguida, selecione os campos desejados na entidade CL, também marcando o campo userID.
3. Com as duas planilhas em mão, é possível unir as duas informações em uma planilha só utilizando o userId como chave.

