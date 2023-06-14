---
title: Ativar o zoom do produto no template de página
id: 104Z7aky7IcYKYIgs4KUIg
status: PUBLISHED
createdAt: 2017-10-12T15:38:55.676Z
updatedAt: 2022-10-14T12:36:40.505Z
publishedAt: 2022-10-14T12:36:40.505Z
firstPublishedAt: 2017-10-12T15:46:34.188Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: ativar-o-zoom-do-produto-no-template-de-pagina
legacySlug: ativar-o-zoom-do-produto-no-template-de-pagina
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Antes de ativar o zoom no template, é necessário [configurar o CSS](https://developers.vtex.com/vtex-developer-docs/docs/setting-up-the-zoom).

Uma vez feito isso, é preciso inserir o controle que ativa o zoom no template da página de produto. O processo para isso também acontece dentro do _Gerenciador do Portal_, só que dessa vez localizando o template de página de produto que deve estar dentro da pasta _Portal > Templates de Página_. Uma vez localizado o template, é necessário colocar a referência para o arquivo .css que acabamos de subir. Para isso, você deve incluir uma tag como `<link href="/arquivos/zoom.css" rel="stylesheet" type="text/css">`.

Ela deve ser invluída dentro do head template, como faríamos com qualquer outro arquivo css. Agora basta inserir `zoom="on"` na tag do produto. Conforme abaixo:
`<vtex.cmc:ProductImage zoom="on">`
