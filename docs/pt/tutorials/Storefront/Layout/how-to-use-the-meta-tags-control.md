---
title: 'Como usar o controle de meta tags'
id: 2OPiSPubgcEqIikAWsCouk
status: PUBLISHED
createdAt: 2019-01-24T20:45:38.270Z
updatedAt: 2023-10-17T14:24:54.898Z
publishedAt: 2023-10-17T14:24:54.898Z
firstPublishedAt: 2019-01-24T22:06:45.424Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: como-usar-o-controle-de-meta-tags
locale: pt
legacySlug: como-usar-o-controle-de-meta-tags
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

O controle `<vtex:metaTags/>` insere no código as meta tags correspondentes à página.

Normalmente, ele é inserido logo após a abertura do elemento `<head>`.

Essas meta tags usam informações cadastradas em diferentes partes da plataforma. Elas são importantes principalmente por dois motivos:
- SEO. Ou seja, elas interferem no grau de encontrabilidade das suas páginas por motores de busca.
- A forma como os navegadores interpretam o seu site.

Duas das tags mais importantes são a `title` (que, por definição, não é exatamente uma meta tag, mas é de extrema importância) e a `meta name="description"`.

A primeira informa o título da página (aquele que aparece na aba da página, no navegador) e a segunda informa a descrição (aquela que aparece, por exemplo, nos resultados de busca do Google).

Para as páginas de __produto__, __categoria__ e __marca__, tanto o título quanto a descrição são definidos em suas páginas de cadastro. Por exemplo, ao criar uma nova marca, você deve cadastrar um título e uma descrição para ela.

Quando a página dessa marca for carregada, ela conterá essas informações nas tags `title` e `meta name="description"`, desde que o controle `<vtex:metaTags/>` esteja presente no template de páginas de marca.

Para a __home page__ e a __página de busca__, a tag `meta name="description"` é populada com a informação contida na seção de SEO do site. Para ver essa seção, siga o caminho __Configurações da loja__>__Storefront__>__Configurações__>__Gerais__, clique na opção __SEO__.

Também é possível configurar a tag `title` da __home page__ pelo Admin. Para isso, siga o caminho __Configurações da loja__>__Storefront__>__Configurações__>__Gerais__ e preencha o campo __Título da página inicial (Tag Title)__.

Veja abaixo um exemplo de meta tags inseridas pelo controle `<vtex:metaTags/>` para a página da categoria "Escalada" da loja de account name "lojadobreno".

```html
<meta name="language" content="pt-BR">
<meta name="country" content="BRA">
<meta name="currency" content="R$">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="description" content="Equipamento para a prática de escalada em rocha, indoor e no gelo.">
<meta name="Abstract" content="Escalada">
<meta name="author" content="lojadobreno">
<meta name="copyright" content="lojadobreno">
<meta name="vtex-version" content="1.4.904.1590">
<meta http-equiv="pragma" content="no-cache">
<meta name="robots" content="noindex,nofollow">
<title>Escalada</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="http://lojadobreno.vtexcommercestable.com.br/escalada">
```

>ℹ️ Caso não queira usar a tag canonical (&lt;link rel="canonical"&gt;), você pode desabilitá-la por meio de um [controle específico para isso](https://developers.vtex.com/docs/guides/control-to-disable-the-canonical-tag).
