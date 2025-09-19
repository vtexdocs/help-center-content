---
title: 'Visão Geral do Layout'
id: EmO8u2WBj2W4MUQCS8262
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.730Z
updatedAt: 2023-03-24T13:48:26.495Z
publishedAt: 2023-03-24T13:48:26.495Z
firstPublishedAt: 2019-01-24T22:11:38.588Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-cms-layout
legacySlug: o-que-e-o-cms
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  Essa funcionalidade está disponível para lojas usando a tecnologia Portal Legada
</div>

A seção [Layout](/pt/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW) permite que você crie seu storefront usando HTML e CSS.

## Sites and channels

Se você ainda não criou um Web Site (ou deseja [criar um novo](/pt/tutorial/como-criar-um-web-site)), é nesse diretório que você deve ir primeiro. Se você já tem um Web Site, é aqui que você vai acessar e gerenciar toda a sua estrutura de pastas.

**Sites and channels** é também o lugar onde você vai poder criar e organizar os layouts do seu site, como veremos mais à frente.

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  Este recurso também está disponível para lojas que utilizam o Site Editor.
</div>

## Binding

Antes de começar a organizar o conteúdo do seu Web Site, ele precisa estar vinculado a um account name. Dessa forma, o sistema entende onde vão ser aplicadas todas as informações adicionadas ou modificadas nas pastas, arquivos ou código do Web Site.

Esse é um processo fundamental para o perfeito funcionamento da sua loja, mas também é muito simples. Basta seguir os passos [deste artigo](/pt/tutorial/vincular-um-account-name-a-um-website-binding).

![Binding](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/o-que-e-o-cms-layout_1.png)

## Layouts e templates

Com seu Web Site criado e já vinculado a um account name, você vai precisar definir templates e layouts.

- **Template**: é aqui que fica o código propriamente dito. Entre outras coisas, é ele que determina como as informações vão aparecer na tela, inclusive a posição em que os placeholders vão aparecer. Os templates ficam reunidos nas pastas **HTML Templates** e **Shelves Templates** (Templates de prateleira).
- **Layout**: é responsável por determinar quais elementos vão aparecer em uma página. É ele que configura os placeholders (elementos como banners, coleções e outros), que serão exibidos para o usuário final. Para funcionar, cada layout precisa estar vinculado a um único template. Você encontra os layouts do seu Web Site organizados por pastas, no diretório **Sites and channels**.

## Placeholders

São elementos (Banner DHTML, HTML, Coleção, Banner, Produtos relacionados) que podem ou não ser usados nas páginas do seu Web Site. Eles são configurados nos layouts (que ficam armazenados no diretório **Sites and channels**), mas sua posição na página é determinada pelo código presente nos templates (armazenados no diretório **HTML Templates**). 

O layout define quais placeholders vão ser usados, e o que eles exibem, mas é o código (ou seja, o template) que vai dizer onde eles aparecem na página.

## Coleção
Para o CMS, coleções são placeholders que exibem grupos de produtos (product clusters) em uma determinada página. Esses grupos precisam ser definidos no diretório **Product Clusters (Collections)**.

## Controles
Os controles nativos da VTEX renderizam diversas funcionalidades úteis e replicáveis nos templates do seu site. Por exemplo, ao inserir o controle `<vtex.cmc:productName/>` na sua página de produto, o sistema renderizará automaticamente o nome do produto.

Veja a lista completa de controles nativos para templates [neste artigo](/pt/tutorial/lista-de-controles-para-templates).

## Custom Elements
Além dos controles nativos da VTEX, o sistema permite que você crie controles customizados. Eles ficam armazenados no diretório Custom Elements, e podem ser usados em qualquer template, da mesma maneira que os controles nativos.

## URL Builder
Nesta seção você pode construir URLs mais amigáveis, tornando as páginas do seu Web Site mais fáceis de serem encontradas pelo usuário.

## Files Manager
Para gerenciar os arquivos do seu Web Site, você pode acessar este diretório. Nele, é possível adicionar, deletar e modificar arquivos CSS, JavaScript, XML e imagens.

### Referências

- [Layout](/pt/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW)
- [Configurações](/pt/subcategory/configuracoes-de-cms--6kovkwzMRyeOOc2iEC4suM)
- [O que são templates?](/pt/tutorial/o-que-sao-templates--4l7BQBYO9ycumsqua2CU88?&utm_source=autocomplete)
- [O que é um web site?](/pt/tutorial/o-que-e-um-web-site--5sPUdFEv9C02i0MMqqSo0U?&utm_source=autocomplete)
- [O que são controles?](/pt/tutorial/o-que-sao-controles--6e2qsk9zu8IQuyEysKweag?&utm_source=autocomplete)
- [O que são layouts?](/pt/tutorial/o-que-sao-layouts--CckPh00rZIcIUG60y8Gse?&utm_source=autocomplete)
- [O que são prateleiras?](/pt/tutorial/o-que-sao-prateleiras--28D8d6GFfuAsuAoeWC8eq0?&utm_source=autocomplete)
- [O que é binding?](/pt/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W?&utm_source=autocomplete)

### Artigos relacionados
- [Como criar um web site](/pt/tutorial/como-criar-um-web-site)
- [Vincular um account name a um web site (binding)](/pt/tutorial/vincular-um-account-name-a-um-website-binding)
- [Lista de controles para templates](/pt/tutorial/lista-de-controles-para-templates)

- [Criar e editar um template de página](/pt/tutorial/como-criar-um-template-de-pagina--frequentlyAskedQuestions_1850)

- [Associar um template a um layout](/pt/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK?&utm_source=autocomplete)

- [Gerenciando placeholders](/pt/tutorial/gerenciandoplaceholders--29Y7r9JqcWIqmGipReGLQI)

- [Usando controles nativos da VTEX](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/7mGkGmo8l6wf4fXJCkWwPi?&utm_source=autocomplete)

- [Para que serve o Controle Customizado?](/pt/tutorial/what-is-the-purpose-of-the-customized-control--frequentlyAskedQuestions_627)
