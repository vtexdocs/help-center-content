---
title: 'Como funciona o controle de nome de produto'
id: 4uYwXjOzH2OsK8SMWuWuCg
status: ARCHIVED
createdAt: 2019-01-24T20:45:37.973Z
updatedAt: 2022-09-08T16:44:09.262Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:14:36.647Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: como-funciona-o-controle-de-nome-de-produto
locale: pt
legacySlug: como-funciona-o-controle-de-nome-de-produto
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

O controle `<vtex.cmc:productName/>` renderiza o nome do produto conforme cadastrado no catálogo.

Portanto, ele funciona __apenas em páginas de produto__.

>ℹ️ O nome que esse controle imprime é o do **produto**, não do SKU.

Este é um exemplo do código HTML renderizado pelo controle Product Name.

```html
<div class="fn productName  Oculos-de-natacao-Speedo-Glypse ">Óculos de natação Speedo Glypse</div>
<input id="___rc-p-id" type="hidden" value="2">
<input id="___rc-p-dv-id" type="hidden" value="39,1">
<input id="___rc-p-sku-ids" type="hidden" value="2">
<input id="___rc-p-kit-ids" type="hidden" value="">
```

Veja que o nome do produto aparece dentro de uma tag `<div>`, que recebe a classe `productName`.

Você não precisa se preocupar com as quatro tags `<input>` também renderizadas pelo controle. Elas têm função interna à plataforma. 
