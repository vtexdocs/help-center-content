---
title: 'Como funciona o controle Search Navigator'
id: 2VFmZawWZiW0ckeqoscieS
status: PUBLISHED
createdAt: 2018-02-22T19:19:44.082Z
updatedAt: 2020-12-11T16:41:27.980Z
publishedAt: 2020-12-11T16:41:27.980Z
firstPublishedAt: 2018-03-02T18:43:54.011Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: search-navigator-control
legacySlug: controle-search-navigator
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Atenção:** existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo, refere-se à [configuração de coleções por meio do CMS](/pt/docs/tutorials/cadastro-de-colecoes-cms).

O controle `<vtex.cmc:searchNavigator/>` renderiza um menu de filtros relacionados ao resultado de uma busca.

> ℹ️ Esse controle funciona **apenas em páginas com contexto de busca**, ou seja, páginas onde os resultados exibidos foram trazidos por uma busca do usuário.

Quando o usuário faz uma busca na loja, o sistema da VTEX tenta trazer resultados de acordo com uma ordem de prioridade de filtros. [Entenda como funciona a busca aqui.](/pt/docs/tutorials/como-funciona-a-busca-da-vtex)

Digamos, por exemplo que o resultado seja um contexto de categoria. Ou seja, o usuário buscou, por exemplo, pelo termo "Camisas", o sistema identificou que existe uma categoria com o nome "Camisas" e carregou a página dessa categoria - usando, portanto, o template de categoria. Se o controle Search Navigator está no código desse template, ele vai renderizar um menu com filtros na página.

Por padrão, os filtros que podem ser exibidos pelo Search Navigator são os seguintes, nesta ordem:
- Coleções.
- Categorias.
- Marcas.
- Especificações.
- Faixas de preço.

Mas para cada um desses filtros há algumas condições de exibição. Ou seja, você pode definir se eles devem ou não aparecer como filtro em contextos de busca.

## Coleções

Para que uma coleção seja exibida no menu pelo controle Search Navigator, ela deve estar com a flag __Searchable__ marcada.

Essa flag fica nas configurações da própria coleção, dentro do CMS.

![searchNavigator2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/controle-search-navigator_1.jpg)

## Categorias

Para uma categoria ser exibida por ação desse controle, ela deve estar com a flag __Menu__ marcada. 

Essa flag fica na tela de cadastro da categoria.

![searchNavigator1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/controle-search-navigator_2.jpg)

> ℹ️ **Importante**: O controle `&lt;vtex.cmc:searchNavigator/&gt;` exibe, por padrão, apenas a categoria raiz (primeiro nível) e a subcategoria mais específica (último nível) dentro do contexto atual. Desdobramentos intermediários da árvore de categorias são omitidos. Além disso, o controle só funciona nos três primeiros níveis, que são tradicionalmente Departamento, Categoria e Subcategoria. Caso sua [arquitetura de catálogo](/pt/docs/tracks/arquitetura-do-catalogo) contenha subdivisões além do 3º nível, estas não serão exibidas usando o controle nativo.

## Marcas

### Em páginas de categoria:

A página de cadastro de marca não tem uma flag de exibição no menu renderizado pelo Search Navigator.

Então, por padrão, marcas sempre são exibidas.

> ⚠️ No entanto, em páginas de departamento ou categoria, as marcas somente serão exibidas pelo controle Search Navigator se, no cadastro da categoria, a flag **Filtro de Marca** estiver marcada.

### Em outras páginas:

Em páginas que não carregam templates de departamento ou categoria, o filtro por marcas sempre será exibido.

Se quiser escondê-lo, você deve fazer isso por CSS.

## Especificações

Para que um campo de produto ou um campo de SKU seja exibido no menu pelo controle Search Navigator, ele precisa ter duas flags marcadas:
- Filtro
- Link no Menu Lateral

Ambas se encontram na tela de cadastro do campo.

![searchNavigator3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/controle-search-navigator_3.jpg)

## Faixas de preço

Se você tem alguma [faixa de preço](/pt/docs/tutorials/configurando-filtro-de-faixa-de-preco) configurada na loja, ela também funciona como filtro e, por padrão, é exibida no menu pelo controle Search Navigator.

Por serem filtros cadastrados nas categorias, as faixas de preço somente são exibidas em páginas de departamento ou categoria.

---

> ℹ️ Os filtros **sempre** são renderizados com base nos atributos dos produtos do contexto de busca. Ou seja, com base na categoria, especificação (cor, tamanho), marca, coleção etc.<br><br>Portanto, além das condições listadas acima para que esses atributos apareçam como filtros no menu, é necessário antes de mais nada que o termo buscado retorne um contexto com produtos que tenham esses atributos.<br><br>Se o usuário fizer, por exemplo, uma busca por "celular" e a categoria Camisas não contiver nenhum celular, ela não será exibida no menu, ainda que no cadastro dessa categoria a flag de exibição esteja marcada.
