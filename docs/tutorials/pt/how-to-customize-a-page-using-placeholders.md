---
title: 'Personalizar uma página usando placeholder'
id: tutorials_544
status: PUBLISHED
createdAt: 2017-04-27T22:01:48.368Z
updatedAt: 2020-01-29T19:45:53.363Z
publishedAt: 2020-01-29T19:45:53.363Z
firstPublishedAt: 2017-04-27T23:03:37.686Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-personalizar-uma-pagina-usando-placeholder
legacySlug: como-personalizar-uma-pagina-usando-placeholder
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Criar uma descrição para **Categoria** pode influenciar positivamente no SEO do site. É muito interessante manter o site como um todo bem mapeado para aumentar a relevância dos termos citados em textos como descrição, footer, menu, etc.

## Colocando a descrição no site
Para incluir uma descrição no site, siga os passos abaixo:
1. Entre em CMS > Layout
1. Entre em **Templates de Página**
2. Clique em **Categoria**
3. No XHTML do Template, insira o código contendo o placeholder, como no exemplo abaixo
4. Clique em **Salvar Template**

### Exemplo de código

```
html
<div class="bloco-de-conteudo"/>
  <!-- Content Place Holder: Html Seo -->
    <vtex:contentPlaceHolder id="htmlSeo"/>
  <!-- /Content Place Holder: Html Seo -->
</div>
```

Lembrando que o `htmlSeo` é o nome do controle criado lá em cima. Este controle pode ter outro nome, como por exemplo `Banner-Principal`.

**Exemplos**

![](//images.contentful.com/alneenqid6w5/5LY7pZwZpe8iQiWccqCc26/d4c10dc57a8f6091dd5c23ec3fdad12e/2016-04-05_17_15_29-Index.png)

![](//images.contentful.com/alneenqid6w5/45kPL4QTfqMkYuAYQEeuC2/aed1934b3268ccb8310226e0e6ce9ff3/2016-04-05_17_15_58-Index.png)

**Obs.:** A aplicação do placeholder pode ser realizada de outras maneiras até que atenda o local, o formato, ou seja, a necessidade do lojista.

## Criando a descrição

Para incluir uma descrição para Categoria, siga os passos abaixo:

1. Entre em Configurações > Portal
2. Clique em Portal > Web-sites > [nomedaloja] > / > categoria > @categoria@ > categoria
![](//images.contentful.com/alneenqid6w5/5IrVEkqOlyy644oAwGS0Ou/b82465f649790ab7bbbce5ea4d416265/2016-04-05_16_21_49-Index.png)
3. Entre na aba **Configurações**
![](//images.contentful.com/alneenqid6w5/bhebyo6cBaKy2wa8O4moA/fe1f57b2ef00101ba21effb442206043/2016-04-05_16_25_11-Index.png)
4. Clique em **Adicionar Controle**
5. Selecione o tipo de controle que deseja, geralmente HTML
![](//images.contentful.com/alneenqid6w5/42vmuVKKdWSwcc0gsuwimi/91fe4618316504de9ea0fb385e46df6b/2016-04-05_16_34_31-Index.png)
6. Clique em **Adicionar**
7. Clique em **Salvar Configurações**
8. Clique em **Editar**
9. Clique em **Adicionar Conteúdo**
![](//images.contentful.com/alneenqid6w5/6Ou1gOdTZCWKqIwUA682C6/6f241a6ad96fc83cf6830622ababe08f/2016-04-05_16_34_58-Index.png)
10. Crie o HTML que gostaria que aparecesse no site
11. Na aba **Preview** poderá ter uma pré-visualização do HTML
12. Nos campos **Condições de Exibição**, configure de acordo com sua necessidade, por exemplo, selecione uma Categoria, onde este conteúdo será disponibilizado.
13. Clique no checkbox **Conteúdo Ativo**
14. Clique em **Adicionar na Lista de Conteúdo**
![](//images.contentful.com/alneenqid6w5/5tqciHrAD6aAgiSIwiKSKE/8ba1d1a683c168257e16dd949133809b/2016-04-05_16_28_19-Index.png)
15. Clique em **Salvar Configurações**
