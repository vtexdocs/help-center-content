---
title: 'Mudar classe do body de uma página'
id: 17BMTbjmQW28I6g6y80qAi
status: PUBLISHED
createdAt: 2018-03-02T13:32:41.619Z
updatedAt: 2023-03-29T14:48:54.728Z
publishedAt: 2023-03-29T14:48:54.728Z
firstPublishedAt: 2018-03-02T13:46:27.480Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: changing-a-pages-body-class
locale: pt
legacySlug: mudar-classe-do-body-de-uma-pagina
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

Os templates usados pelos layouts da loja, por padrão, não carregam nenhuma classe em seu elemento `<body>`.

Veja, por exemplo, o código do template Department.

![changeBodyClass1](https://images.contentful.com/alneenqid6w5/pbQCDMUz3qO0q4SuwYaq4/7ebd6ca8a0af6cbce899535b83cd719a/changeBodyClass1.jpg)

Ele tem um `id`, mas não uma `class`.

No entanto, ao carregar um layout que use esse template, vemos que a classe `departamento` foi adicionada ao body da página.

![changeBodyClass2](//images.contentful.com/alneenqid6w5/132c4r8rtGowUkOYe4YUaM/6b4a3bd0a9fc5f65fe1d950484088ba1/changeBodyClass2.jpg)

Ou seja, o sistema insere essa classe automaticamente.

Você pode definir o valor dessa classe no próprio CMS. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout > CMS**.
2. Clique em __Sites and Channels__ e entre no __layout__ cuja classe deseja alterar.
3. Mude o valor do campo __Body Class__.
4. Clique no botão __Salvar Layout__.
