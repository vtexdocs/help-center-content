---
title: 'Como funciona o Contexto de busca das pastas do WebSite?'
id: tutorials_543
status: ARCHIVED
createdAt: 2017-04-27T22:01:57.778Z
updatedAt: 2019-12-31T15:21:59.700Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:38.176Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-does-the-search-context-on-website-folders-operate
locale: pt
legacySlug: 
subcategoryId: unknown-subcategory
---

O buscador da VTEX é extremamente customizável, sendo possível adaptar as mais complexas necessidades aos seus controles. 

É possível aplicar filtros por departamento, categoria, marca, coleção, especificação, SKU etc.

Como a aplicação desses filtros acontece na URL, quando a demanda exige uma busca complexa, muitas vezes essa URL acaba não ficando amigável, tendo menos relevância para crawlers de buscadores como o Google.

Este artigo foi desenvolvido para apresentar um recurso extremamente importante para a utilização de buscas complexas em landing pages: o __Contexto de Busca__.

Quando a busca pretendida utiliza muitos filtros (categoria, marca e especificação de produto, por exemplo), sempre indicamos a construção de uma Landing Page.

### Exemplo

Busca pretendida: `/busca?fq=C:111&fq=B:222&fq=spec_fct_1:333`

Essa busca retornará todos os produtos pertencentes à categoria **111** que também sejam da marca **222** e tenham o campo de ID **1** com valor **333**. O resultado apresentado ao cliente será correto. No entanto, a forma como os crawlers olharão para essa URL não será interessante para a sua loja.

É nesse momento que entram a Landing Page e o Contexto de Busca.

No CMS da sua loja (`{AccountName}.myvtex.com/admin/a/`), todas as pastas possuem um campo chamado **Search Context (Default)**, que tem a função de carregar a busca pretendida sem a necessidade de escrevê-la na URL.

Usando o mesmo exemplo anterior, se criarmos uma pasta chamada **minha-landing-page** e configurarmos seu **Contexto de Busca** com o valor `fq=C:111&fq=B:222&fq=spec_fct_1:333`, essa pasta renderizará exatamente os mesmos produtos do exemplo anterior, porém em uma URL mais amigável.

### Configuração

![](https://images.contentful.com/alneenqid6w5/ZvEGMDPUs0OsuCkoUsqqS/4411604b8b78124edcbacd46cc45ed53/ContextoDeBusca.PNG)

**Importante**:

- Para o Contexto de Busca funcionar, é necessária a utilização do controle `searchResult`.
- A busca aplicada nesse campo substituirá qualquer busca aplicada na URL. Ou seja, se uma pasta estiver com esse campo configurado, incluir parâmetros para a busca diretamente na URL dessa pasta não funcionará, inclusive ordenação (parâmetro **O**).

### Artigos relacionados

- [Como funciona a busca da VTEX?](/pt/tutorial/como-funciona-a-busca-da-vtex/)
- [Parâmetros de busca](/pt/tutorial/parametros-de-busca)
