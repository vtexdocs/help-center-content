---
title: 'Como utilizar Subtemplates'
id: tutorials_577
status: PUBLISHED
createdAt: 2017-04-27T21:59:46.725Z
updatedAt: 2023-03-29T15:25:52.828Z
publishedAt: 2023-03-29T15:25:52.828Z
firstPublishedAt: 2017-04-27T23:03:40.959Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: subtemplates
locale: pt
legacySlug: subtemplates
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

Os Subtemplates servem para pequenas estruturas que poderão ser reaproveitadas em mais de um Template de Página. Subtemplates funcionam como _“includes”_.

Você cria um bloco de HTML que deseja reaproveitar e depois insere uma chamada dentro de um Template de Página. Para criar um subtemplate:

1. No Admin VTEX, acesse **Storefront > Layout > CMS** e clique na pasta **Templates de Página > Subtemplates**.
2. Clique na opção **Novo Subtemplate**.
3. Preencha o campo `Nome do Template`.
4. Cole seu código no campo `XHTML do Template:`
5. Por último, clique no botão **salvar**.

Para referenciar um Subtemplate dentro de um Template de página, utilize a sintaxe abaixo:

`<vtex:template id="nome-do-id" />`

No atributo `id` preencha com o nome dado ao subtemplate.
