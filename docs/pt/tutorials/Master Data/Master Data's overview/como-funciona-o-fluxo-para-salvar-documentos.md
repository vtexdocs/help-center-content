---
title: 'Como funciona o fluxo para salvar documentos'
id: 1abjrkwcROMUyiEoEkmCWE
status: ARCHIVED
createdAt: 2017-12-10T17:32:00.685Z
updatedAt: 2022-08-04T22:35:40.821Z
publishedAt: 
firstPublishedAt: 2017-12-10T17:39:18.212Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slugEN: how-the-documents-saving-flow-works
locale: pt
legacySlug: como-funciona-o-fluxo-para-salvar-documentos
subcategoryId: 5gtjaqCG7eIseyCI0aSqc2
---

A imagem abaixo mostra o fluxo interno de salvamento de documentos no Master Data. Vamos explicar cada passo.

![Save flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data's%20overview/como-funciona-o-fluxo-para-salvar-documentos_1.png)

#### Salvar chamada de API
Ocorre quando o usuário chama a API de salvamento de documentos (POST, PUT ou PATCH).
#### Resolve ID
Adicionar um ID ao documento. Se o ID não existir no conteúdo, o Master Data tenta obter o documento por índice (chave alternativa). Se o documento por índice não existir, é criado um novo ID.
#### Validar Schema
Validar o conteúdo com JSON Schema (se o parâmetro `_schema` existir na consulta).
#### Lock
Após essa etapa, apenas uma operação pode ser executada por ID ou chave alternativa.
#### Obter campos alterados
Obter a última versão do documento no banco de dados e comparar com o conteúdo. Se houver alguma mudança, avança-se para o próximo passo.
#### Validar a Cláusula de Condição
Se você passar o parâmetro `_where` na consulta, o Master Data fará a validação neste momento.
#### Persistência no banco de dados
Salvar o documento no banco de dados.
#### Enfileirar para o processo do worker
Enfileirar a operação. Algum tempo depois, o *Background Worker* iniciará as operações de backgroud (validação com outros schemas e indexação).
