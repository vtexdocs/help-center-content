---
title: 'Como saber qual página do sistema está sendo renderizada no site?'
id: 1GXswbUMu0CUG2uqCOGcgI
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.215Z
updatedAt: 2023-03-29T00:29:39.010Z
publishedAt: 2023-03-29T00:29:39.010Z
firstPublishedAt: 2019-01-24T22:10:37.513Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site
legacySlug: como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

Quando uma página do site é renderizada, o código-fonte traz sempre um comentário que indica a qual pasta do CMS o layout da página está relacionado.

Digamos, por exemplo, que você esteja numa página de departamento. Neste caso, se a pasta da página de departamento chama-se `@departamento@`, o seguinte código estará no código-fonte:

`<!-- CommerceContext.Current.VirtualFolder.Name: @departamento@ -->`

Para encontrar essa linha de código, acesse o front-end da sua loja, entre nas ferramentas de desenvolvedor do browser (F12 no Windows ou Cmd+Option+I no Mac, caso você esteja usando Google Chrome) e faça uma busca por `CommerceContext` (Ctrl+Shift+F no Windows ou Cmd+Shift+F no Mac).

Veja abaixo a relação entre a pasta no CMS e o código-fonte da loja.

![CommerceContext](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Layout/como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site_1.png)

> ℹ️ Essa linha de código está sempre comentada. Portanto, ela tem função apenas informativa. Ou seja, não realiza nenhuma ação.

Essa informação é útil, por exemplo, para saber qual pasta a busca da sua loja por determinado termo está retornando.
