---
title: Configurar chaves alternativas
id: 3Sa78TnD9SSS6aI44QY6eE
status: DRAFT
createdAt: 2017-12-04T18:55:27.299Z
updatedAt: 2022-08-04T22:35:33.916Z
publishedAt: 
firstPublishedAt: 2017-12-06T18:46:01.372Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: configurar-chaves-alternativas
legacySlug: configurar-chaves-alternativas
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Com o Master Data, você pode configurar uma chave alternativa, que é cross JSON Schema.

Existem dois tipos de chaves alternativas:
- Single
- Multiple

O tipo `Single` define o valor do campo como exclusivo na entidade de dados, enquanto com o tipo `Multiple` outros documentos podem ter esse mesmo valor.
Para obter um documento usando uma chave alternativa, basta adicionar a seguinte query na API de busca:

`/search?fieldName=fieldValue`

Neste cenário, o Master Data não tentará obter o documento no indexador. É um processo mais rápido do que obter um único documento no indexador.

O tipo `Multiple` deve ser usado no caso de low events. O Profile System usa este índice "múltiplo" para obter os endereços do cliente.

O número de endereços de um cliente é inferior a 100. Portanto, este é um bom caso de uso. Se sua chave alternativa for maior que 100, você precisa definir o campo como indexado e paginar suas pesquisas.
