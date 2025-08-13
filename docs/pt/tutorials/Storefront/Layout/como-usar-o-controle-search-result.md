---
title: 'Como usar o controle Search Result'
id: 6xOLxZA2Ws8Q2ug6U6ksyo
status: PUBLISHED
createdAt: 2018-03-02T13:14:11.357Z
updatedAt: 2022-03-23T17:19:01.219Z
publishedAt: 2022-03-23T17:19:01.219Z
firstPublishedAt: 2018-03-06T12:31:03.507Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-use-the-search-result-control
legacySlug: como-usar-o-controle-search-result
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

O controle `<vtex.cmc:searchResult/>` renderiza uma vitrine com os produtos retornados por uma busca do usuário.

> ℹ️ Esse controle funciona **apenas em páginas com contexto de busca**, ou seja, páginas onde os resultados exibidos foram trazidos por uma busca do usuário.

Quando o usuário faz uma busca na loja, o sistema da VTEX tenta trazer resultados de acordo com uma ordem de prioridade de filtros. Entenda como funciona a busca no artigo [Como funciona a busca da VTEX](/pt/tutorial/como-funciona-a-busca-da-vtex).

Digamos, por exemplo que o resultado seja um contexto de categoria. Ou seja, o usuário buscou, por exemplo, pelo termo “Camisas”, o sistema identificou que existe uma categoria com o nome “Camisas” e carregou a página dessa categoria - usando, portanto, o template de categoria. Se o controle Search Result está no código desse template (onde de fato está, por padrão), ele vai renderizar uma vitrine com os produtos dessa categoria.

Este controle tem disponíveis alguns atributos, que são usados para dar indicações ao sistema quanto às condições de exibição dos produtos.

Alguns desses atributos são opcionais, mas outros são __obrigatórios__, como o atributo que indica qual template de prateleira será usado para exibir os produtos.

Veja abaixo a lista de todos os atributos do controle Search Result:

| Atributo     | Função     | Obrigatório?     | Exemplo de uso     |
| ---------- | ---------- | ---------- | ---------- |
| `layout`       | Código do template da prateleira que exibirá os produtos.       | Sim       | `<vtex.cmc:searchResult layout="48e223e6-da80-4610-b3d5-4e5cfaf94f13" />`       |
| `itemCount`       | Quantidade de itens a serem apresentados.       | Sim       | `<vtex.cmc:searchResult itemCount="10" />`       |
| `columnCount`       | Quantidade de colunas para exibição dos produtos.       | Sim       | `<vtex.cmc:searchResult columnCount="4" />`       |
| `showUnavailable`       | Quando está setado para true, significa que devem ser exibidos os produtos esgotados.       | Não       | `<vtex.cmc:searchResult showUnavailable="false" />`       |
| `selectionMode=”batch-buy”`       | Permite a realização de compras em lote.       | Não       | `<vtex.cmc:searchResult selectionMode="batch-buy" />`       |
| `isTrackable`       | Quando está setado para true, significa que este controle deve ser rastreável.       | Não       | `<vtex.cmc:searchResult isTrackable=true />`       |
| `InternalCampaign`       | Nome da audiência de interna.       | Não       | `<vtex.cmc:searchResult InternalCampaign="Resultado busca landing" />`       |
| `InternalPart`       | Nome da viewpart interna.       | Não       | `<vtex.cmc:searchResult InternalPart="Resultado Busca" />`       |

## Código HTML renderizado

O código renderizado pelo controle Search Result tem, por padrão, a seguinte estrutura:

![searchResult1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-usar-o-controle-search-result_1.jpg) 

E os elementos correspondentes que são renderizados pelo controle em sua versão não customizada seguem o padrão abaixo:

![searchResult2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-usar-o-controle-search-result_2.jpg) 

![searchResult3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-usar-o-controle-search-result_3.jpg) 

![searchResult4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-usar-o-controle-search-result_4.jpg) 

![searchResult5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-usar-o-controle-search-result_5.jpg)
