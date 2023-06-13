---
title: Configurar cache para consultas ao Master Data
id: SmOSkCybOCa02Ssakca28
status: DRAFT
createdAt: 2018-03-01T20:30:33.229Z
updatedAt: 2020-09-28T18:43:34.113Z
publishedAt: 
firstPublishedAt: 2018-03-01T20:59:50.024Z
contentType: tutorial
productTeam: Master Data
author: authors_24
slug: configurar-cache-de-consultas-ao-master-data
legacySlug: configurar-cache-de-consultas-ao-master-data
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Nas configurações da entidade de dados, você pode configurar uma camada de cache - localizada no próprio Master Data - para consultas a essa entidade.

Sempre que for refeita a mesma consulta a essa entidade - usando os mesmos parâmetros, como filtros e campos - dentro do período definido, serão retornados os dados cacheados.

Isso é importante principalmente para entidades que ficam expostas a uma quantidade elevada de requests.

Para configurar essa camada de cache, siga os passos abaixo:
1. Entre no __Master Data__.
2. Clique em __Novo__ para criar uma nova entidade ou no ícone de lápis de uma entidade existente caso queira editá-la.
3. Clique na caixa de seleção __Tempo de cache para consultas paginadas__ e escolha o tempo de cache para a entidade.

![cacheMD](//images.contentful.com/alneenqid6w5/7EJ8s7Z3uE0coc4QUkQcQC/0efbe18c6bd8018165e18f6d87da765f/cacheMD.jpg)

As opções de tempo de cache são:
- 5 horas
- 10 horas
- 1 dia
- 7 dias
- 30 dias
