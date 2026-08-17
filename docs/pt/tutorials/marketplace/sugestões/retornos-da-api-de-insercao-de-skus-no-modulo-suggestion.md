---
title: 'Retornos da API de inserção de SKUs no módulo Suggestion'
id: tutorials_4927
status: PUBLISHED
createdAt: 2017-04-27T21:49:35.443Z
updatedAt: 2020-12-18T12:34:45.310Z
publishedAt: 2020-12-18T12:34:45.310Z
firstPublishedAt: 2017-04-27T23:11:17.955Z
contentType: tutorial
productTeam: Channels
author: authors_41
slugEN: returns-from-api-for-entering-skus-in-the-suggestion-module
legacySlug: retornos-da-api-de-insercao-de-skus-no-modulo-suggestion
locale: pt
subcategoryId: 2P4LrAbvyEiCaekmaWaEOk
---

Algumas lojas recorrem a parceiros para integração dos SKUs dos sellers, em integrações VTEX-VTEX, utilizando APIs. O objetivo deste artigo é ajudá-lo a lidar com os erros que podem ser retornados durante essa operação.

As APIs utilizadas para a integração dos SKUs dos sellers estão disponíveis na seguinte documentação: [https://developers.vtex.com/docs/api-reference/marketplace-apis](https://developers.vtex.com/docs/api-reference/marketplace-apis)

No momento da inserção dos SKUs via API, esta pode retornar alguns erros em suas chamadas, além dos retornos de sucesso conhecidos. Estes erros são listados na tabela abaixo. Cada um deles é identificado por um número de 0 a 23 (além dos erros 99 e 999, que são desconhecidos). Na coluna da esquerda, estão os nomes que descrevem cada um dos erros.

Utilizando essa tabela, é possível entender a que se referem os erros retornados na integração, de modo que as sugestões de SKUs possam ser tratadas e aprovadas com sucesso.

| Erro     | Código     |
| ---------- | ---------- |
| NotSpecifiedError     | 0     |
| MatchCategoryIdIsEmpty       | 1       |
| MatchBrandIdIsEmpty       | 2       |
| ProductNameIsEmpty       | 3       |
| SkuNameIsRequired       | 4       |
| SkuHeightIsRequired       | 5       |
| SkuWeightIsRequired       | 6       |
| SkuLengthIsRequired       | 7       |
| SkuWidthIsRequired       | 8       |
| SkuImagesAreRequired       | 9       |
| EanOrRefIdAreRequired       | 10       |
| SkuImageUrlIsInvalid       | 11       |
| ProductOrSkuHasInvalidSpecificationLength       | 12       |
| MatcherIdRequired       | 13       |
| MatchSkuRefIsNotValid       | 14       |
| MatchScoreIsNotInRange       | 15       |
| SuggestionNotFound       | 16       |
| MatchOldVersion       | 17       |
| SuggestionIsNotPending       | 18       |
| MatchBrandIdIsInvalid       | 19       |
| MatchCategoryIdIsInvalid       | 20       |
| MatchProductRefIsInvalid       | 21       |
| SellerIdAndMarketplaceSkuIdAlreadyExists       | 22       |
| SellerIdAndSellerSkuIdAlreadyExists       | 23       |
| Unknown error (erro de comunicação com o catálogo; estamos trabalhando para que seja melhor descrito)       | 99       |
| Unknown error (erro de comunicação com o catálogo; estamos trabalhando para que seja melhor descrito)       | 999       |
