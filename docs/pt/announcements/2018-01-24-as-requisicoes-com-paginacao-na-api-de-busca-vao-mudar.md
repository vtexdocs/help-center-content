---
title: 'Requisições com paginação na API de busca vão mudar'
id: 3UZR4qoAisiqE6kmuuYEAc
status: PUBLISHED
createdAt: 2018-01-24T14:11:26.225Z
updatedAt: 2023-12-15T13:03:53.872Z
publishedAt: 2023-12-15T13:03:53.872Z
contentType: updates
productTeam: Identity
author: authors_24
slugEN: 2018-01-24-requests-with-pagination-will-change-in-the-search-api
locale: pt
legacySlug: as-requisicoes-com-paginacao-na-api-de-busca-vao-mudar
announcementImageID: ''
announcementSynopsisPT: 'A partir de 31/03/18, requisições com paginação na API de busca não vão ser feitas com o header resources do request.'
---

>⚠️ **Atenção**: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.

A partir de __31 de março__, as requisições com paginação na API de busca não vão mais poder ser feitas com o header `resources` do request. Ele será descontinuado e, para requisitar uma resposta da API, você deverá utilizar os parâmetros `_from` e `_to` na URL, conforme o exemplo:

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/search?ft=geladeira&_from=1&_to=30`

Essa mudança já foi implementada na API, mas até a data limite, ainda será possível realizar a request das duas formas. Já o `resources` no header do response vai continuar funcionando normalmente.

>⚠️ **Importante:**
>
>  
> - Para funcionar, os parâmetros **_from** e **_to** não devem ter uma diferença maior do que **50**. Isso vai fazer com que sejam exibidos, no máximo, 50 resultados de busca por vez.
>
> 
>
>
> 
> - Também há um limite de 2500 itens para uma busca. Por isso, não é possível adicionar um valor maior que 2500 ao parâmetro **_to**.
>
> 

Para saber todos os detalhes do funcionamento das requisições de paginação na API de busca, acesse este [documento](https://developers.vtex.com/docs/api-reference/search-api).

