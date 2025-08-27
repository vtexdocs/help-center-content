---
title: 'Implementar a busca no frontend da loja'
id: 9BRHYNfuS6bP4WG4pOmgb
status: PUBLISHED
createdAt: 2024-09-06T20:20:32.084Z
updatedAt: 2024-09-06T20:26:56.567Z
publishedAt: 2024-09-06T20:26:56.567Z
firstPublishedAt: 2024-09-06T20:26:56.567Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: implementing-the-search-in-your-store-frontend
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
order: 4
---

Para começar a utilizar as funcionalidades da busca, é necessário adicionar os componentes do Intelligent Search no frontend da sua loja, de acordo com a tecnologia utilizada para criação da loja: Store Framework ou FastStore.

Entre em contato com a equipe de desenvolvedores da sua loja para customizar o frontend utilizando os componentes específicos para cada tecnologia apresentados a seguir.

> ℹ️ Esta etapa não se aplica a cenários de implementação headless, em que a tecnologia de frontend não é oferecida pela VTEX. Nesses casos, é necessário implementar o envio dos eventos de busca. Obtenha mais detalhes em [VTEX Intelligent Search Events API - Headless](https://developers.vtex.com/docs/api-reference/intelligent-search-events-api-headless).

## Store Framework

Se a sua loja foi desenvolvida no [Store Framework](https://developers.vtex.com/docs/guides/store-framework), utilize os componentes abaixo para implementar a busca:

| Componente | Descrição |
| :---- | :---- |
| [Search Result](https://developers.vtex.com/docs/guides/vtex-search-result)  | Processa os resultados obtidos pela API do Intelligent Search e os exibe aos usuários. Esse componente exporta todos os blocos de loja esperados em uma página de resultados de busca, como filtros e a galeria de produtos. |
| [Search Bar](https://developers.vtex.com/docs/apps/vtex.store-components/SearchBar) | Exibe uma barra de busca e apresenta os produtos correspondentes. |
| [Search](https://developers.vtex.com/docs/apps/vtex.search) | Fornece elementos de interface que aprimoram a experiência de busca, como a funcionalidade de autocomplete e outros blocos opcionais. |
| ↪ [Autocomplete](https://developers.vtex.com/docs/apps/vtex.search/Autocomplete) | Sugere resultados enquanto o usuário digita. Ele exibe resultados de busca anteriores com base nas buscas atuais e anteriores, apresentados em quatro listas: Últimas buscas efetuadas. Sugestão de busca. Sugestão de produtos. Termos mais buscados. Saiba mais sobre o comportamento desse componente no guia [Autocomplete](https://help.vtex.com/pt/tutorial/autocomplete--6qhP0ZQ4JqUBdgFnbnxS4a). |
| ↪ [Suggestions](https://developers.vtex.com/docs/apps/vtex.search/suggestions) | Sugere termos de busca semelhantes à consulta atual. |
| ↪ [Banner](https://developers.vtex.com/docs/apps/vtex.search/banner) | Exibe banners na página de resultados de busca do cliente, dependendo do contexto da busca. |
| ↪ [DidYouMean](https://developers.vtex.com/docs/apps/vtex.search/didyoumean) | Sugere uma possível correção de erro ortográfico para a consulta atual. |

Para mais informações sobre os componentes disponíveis, acesse o [guia de primeiros passos para desenvolvedores sobre o Search](https://developers.vtex.com/docs/guides/search-overview).

## FastStore

Se a sua loja foi desenvolvida na [FastStore](https://developers.vtex.com/docs/guides/faststore), utilize os componentes descritos no guia [Search](https://developers.vtex.com/docs/guides/faststore/features-search) na documentação da FastStore para implementar o Intelligent Search.

