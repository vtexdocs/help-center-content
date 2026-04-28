---
title: 'Como criar landing pages com URLs customizadas'
id: q0p2UU6sBaYcEMsq24YSi
status: PUBLISHED
createdAt: 2018-10-02T21:22:13.046Z
updatedAt: 2023-03-29T15:54:22.828Z
publishedAt: 2023-03-29T15:54:22.828Z
firstPublishedAt: 2018-10-02T21:24:34.630Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-create-landing-pages-with-customized-urls
legacySlug: como-funciona-o-contexto-de-busca, como-funciona-o-contexto-de-busca-das-pastas-do-website
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Atenção**: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse [nossa track](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb).

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal (Legado).
</div>

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

**Importante**:

- Para o Contexto de Busca funcionar, é necessária a utilização do controle `searchResult`.
- A busca aplicada nesse campo substituirá qualquer busca aplicada na URL. Ou seja, se uma pasta estiver com esse campo configurado, incluir parâmetros para a busca diretamente na URL dessa pasta não funcionará, inclusive ordenação (parâmetro **O**).
