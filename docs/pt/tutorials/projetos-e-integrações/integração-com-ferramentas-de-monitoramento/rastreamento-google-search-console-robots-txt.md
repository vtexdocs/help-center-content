---
title: 'Rastreamento Google Search Console - robots.txt'
id: tutorials_574
status: PUBLISHED
createdAt: 2017-04-27T22:00:09.026Z
updatedAt: 2023-03-29T17:32:57.686Z
publishedAt: 2023-03-29T17:32:57.686Z
firstPublishedAt: 2017-04-27T23:03:39.731Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: google-search-console-tracking-robots-txt
legacySlug: rastreamento-google-search-console-robots-txt
locale: pt
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

O robots.txt é um arquivo de texto que os mecanismos de buscas utilizam para definir regras de escaneamento do site para os crawlers.

A VTEX possui nativamente interface para edição e customização de seu arquivo robots.txt.

Para acessar:

1. Clique no menu __Configurações da loja__;
2. Na seção __Storefront__, clique __Configurações__;
3. Em seguida, clique na aba __SEO__;
4. Faça as alterações desejadas na caixa de texto __Robots.txt__.

Para compreender melhor o conteúdo, detalho a seguir as funções básicas a seguir:

- **Allow:** ao utilizar esse termo você estará permitindo que o crawler das ferramentas de busca navegue e indexe o endereço indicado.
- **Disallow:** você estará bloqueando o conteúdo indicado.

Para validar o conteúdo do arquivo `robots.txt`, é importante:

- Verificar se as URLs listadas realmente precisam de regras específicas de rastreamento;
- Confirmar se as regras estão corretamente aplicadas às URLs desejadas;
- Garantir que o arquivo `sitemap.xml` esteja corretamente informado.

A edição do arquivo `robots.txt` da loja está disponível em:
```
{accountName}.vtexcommercestable.com.br/admin/Site/ConfigSEOContents.aspx
```

Após configurar o `robots.txt`, o próximo passo é revisar o `sitemap.xml` da loja. O sitemap tem a função de apresentar a estrutura do site aos mecanismos de busca, indicando quais páginas devem ser rastreadas e indexadas, como categorias, produtos e páginas institucionais.

Ao informar corretamente o sitemap no Google Search Console, você facilita o trabalho do crawler, permitindo que as páginas da loja sejam descobertas e indexadas de forma mais rápida nos resultados de busca.
