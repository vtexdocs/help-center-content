---
title: 'Configurar o favicon'
id: tutorials_6370
status: PUBLISHED
createdAt: 2017-04-27T21:48:57.080Z
updatedAt: 2020-07-09T15:57:35.902Z
publishedAt: 2020-07-09T15:57:35.902Z
firstPublishedAt: 2017-04-27T23:11:18.833Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_31
slug: como-configurar-o-favicon-em-meu-site
locale: pt
legacySlug: como-configurar-o-favicon-em-meu-site
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

O favicon é o ícone exibido na aba do browser, ao lado do título da página. O browser carrega essa imagem a partir do elemento `<link rel="shortcut icon">` que referencia uma imagem com extensão `.ico`.

Exemplo:

![favicon_2](https://images.contentful.com/alneenqid6w5/2azvX7m3asGckkU6c8WAcM/2e66d9a107c0394c3f1a63afff7f3149/favicon_2-1024x537.png "Favicon 2")

Usei o Google como exemplo apenas para reforçar que esse recurso não é exclusivo da VTEX e pode ser utilizado em qualquer conteúdo reproduzido em um browser. Leia mais sobre esse assunto no Google. 🙂

### Favicon na VTEX

Na VTEX, para garantir que o favicon estará carregado durante toda a navegação do cliente (portal, checkout e orderPlaced), as boas práticas indicam que os templates sejam configurados com o elemento `<link>` dentro do `<head>`, da seguinte forma:

`<link rel="shortcut icon" href="/arquivos/**{storeName}**-favicon.ico" />`

**Obs.:** No portal (/admin/a/) é possível configurar o favicon em outro padrão de URLs (por exemplo, outro nome de arquivo). No entanto, como  o Checkout e o OrderPlaced carregam a URL nesse padrão, o indicado é carregar também no portal da mesma forma.

**Obs. 2:** A variável `{storeName}` deve ser substituída pelo nome da loja, como cadastrado no Gerenciamento da conta.

![fav](https://images.contentful.com/alneenqid6w5/6j5eZzVMEE6E2KgqGgsOwU/c2292316f75f3620cd870c96df9e65fc/fav-1024x554.png)

