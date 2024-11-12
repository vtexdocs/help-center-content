---
title: 'Controle de breadcrumb'
id: 3qQS5O9XpusAC6oUqSIQMM
status: PUBLISHED
createdAt: 2018-02-07T11:57:17.362Z
updatedAt: 2020-01-08T20:23:45.528Z
publishedAt: 2020-01-08T20:23:45.528Z
firstPublishedAt: 2018-02-07T12:28:18.865Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: breadcrumb-control
locale: pt
legacySlug: controle-de-breadcrumb
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Breadbrumbs melhoram a experiência de navegação na loja por incentivarem os usuários a explorarem sua hierarquia de páginas.

Na VTEX, o controle `<vtex.cmc:breadCrumb/>` é responsável por renderizar breadcrumbs como o do exemplo abaixo.

![breadcrumb1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Se, como neste exemplo, o usuário acessar diretamente a página de um produto da categoria *Camisetas*, o breadcrumb exibido na página do produto lhe dará a informação de que o usuário se encontra nessa categoria (*Camisetas*), que por sua vez está abaixo do departamento *Moda masculina*.

Esse controle funciona apenas nos seguintes tipos de página:
- Produto
- Departamento
- Categoria
- Busca

Veja abaixo um exemplo de código HTML renderizado pelo controle de breadcrumb:

```
<div id="box-bread-brumb" class="hidden-xs">
  <div class="bread-crumb" xmlns:v="http://rdf.data-vocabulary.org/#">
    <ul>
      <li typeof="v:Breadcrumb"><a href="http://lojadobreno.vtexcommercestable.com.br/" rel="v:url" property="v:title">lojadobreno</a></li>
      <li class="last" typeof="v:Breadcrumb"><a href="http://lojadobreno.vtexcommercestable.com.br/livros" rel="v:url" property="v:title">Livros</a>
      </li>
    </ul>
  </div>
</div>
```

O código acima renderiza o seguinte breadcrumb no site:

![breadcrumb2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
