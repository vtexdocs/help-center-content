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
slugEN: how-to-customize-a-page-using-placeholders
locale: pt
legacySlug: como-personalizar-uma-pagina-usando-placeholder
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
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

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

**Obs.:** A aplicação do placeholder pode ser realizada de outras maneiras até que atenda o local, o formato, ou seja, a necessidade do lojista.

## Criando a descrição

Para incluir uma descrição para Categoria, siga os passos abaixo:

1. Entre em Configurações > Portal
2. Clique em Portal > Web-sites > [nomedaloja] > / > categoria > @categoria@ > categoria
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)
3. Entre na aba **Configurações**
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)
4. Clique em **Adicionar Controle**
5. Selecione o tipo de controle que deseja, geralmente HTML
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)
6. Clique em **Adicionar**
7. Clique em **Salvar Configurações**
8. Clique em **Editar**
9. Clique em **Adicionar Conteúdo**
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)
10. Crie o HTML que gostaria que aparecesse no site
11. Na aba **Preview** poderá ter uma pré-visualização do HTML
12. Nos campos **Condições de Exibição**, configure de acordo com sua necessidade, por exemplo, selecione uma Categoria, onde este conteúdo será disponibilizado.
13. Clique no checkbox **Conteúdo Ativo**
14. Clique em **Adicionar na Lista de Conteúdo**
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
15. Clique em **Salvar Configurações**
