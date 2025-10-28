---
title: 'Para que serve o Controle Customizado?'
id: frequentlyAskedQuestions_627
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.169Z
updatedAt: 2023-03-29T17:53:50.202Z
publishedAt: 2023-03-29T17:53:50.202Z
firstPublishedAt: 2019-01-24T22:01:30.892Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: what-is-the-purpose-of-the-customized-control
legacySlug: para-que-serve-o-controle-customizado
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Em diversos projetos existe a necessidade de criar um banner, uma vitrine ou até mesmo um código HTML que será utilizado em várias páginas do site. Um exemplo é o banner de frete grátis e descontos, normalmente localizado no header, logo abaixo do menu.

Para evitar o trabalho de adicionar manualmente o mesmo conteúdo várias vezes em cada página, temos a área de Controles Customizados (Custom Elements).

Os controles customizados são muito úteis no desenvolvimento e facilitam a atualização do conteúdo. Podem ser usados em templates e subtemplates.

## Criando um controle customizado

Para criar um controle customizado, acesse o Admin e entre no **menu Storefront**. Clique em **Layout**, depois na pasta CMS e em **Custom Elements**.

Dentro da área de Controles Customizados, podemos criar até quatro tipos de características para personalizar cada tag.

Os tipos são:
- Banner
- BannerDHTML
- Coleção
- HTML

Para criar uma tag personalizada de controle customizado, basta clicar em __Add__ e cadastrar um nome e uma tag, e então selecionar o tipo.

![cms-custom-elements PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/para-que-serve-o-controle-customizado_1.png)

> ⚠️ **Atenção:** não crie um controle do tipo HTML com um elemento `title`. Isso pode interferir no funcionamento correto da sua loja.

## Aplicando um controle customizado a um template de página

A aplicação da tag de um controle customizado é semelhante ao uso de outros elementos como controles normais e subtemplates. A tag deve ser colocada no local onde queremos que o conteúdo seja carregado.

Para identificar o controle customizado a ser usado, inserimos o nome da tag cadastrada na sintaxe do controle.

Abaixo, seguem as sintaxes para cada tipo de controle:

1. Tipo Banner: `<vtex:nomedatag />`
2. Tipo HTML: `<vtex.cmc:nomedatag />`
3. Tipo Coleção: `<vtex.cmc:nomedatag />`
