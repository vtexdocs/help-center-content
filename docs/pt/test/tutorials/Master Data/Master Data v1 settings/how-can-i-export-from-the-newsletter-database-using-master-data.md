---
title: 'Exportar a base de newsletter pelo Master Data'
id: frequentlyAskedQuestions_1825
status: PUBLISHED
createdAt: 2019-01-24T20:45:58.818Z
updatedAt: 2024-05-24T18:56:12.924Z
publishedAt: 2024-05-24T18:56:12.924Z
firstPublishedAt: 2019-01-24T22:00:56.109Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slug: como-realizo-a-exportacao-da-base-de-newsletter-pelo-master-data
locale: pt
legacySlug: como-realizo-a-exportacao-da-base-de-newsletter-pelo-master-data
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

Para exportar sua base de clientes que optaram por receber newsletter, siga o passo a passo abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. Acesse a aba **Clientes**.
3. Clique em `Exportar XLS`.
4. Selecione o filtro `Recebe Newsletter?`, além de outros que deseje (`Nome` e `e-mail`, por exemplo).
5. Clique em `Exportar`.
6. Aparecerá uma janela informando que a exportação foi programada com sucesso. Clique em `OK` para fechá-la.

   Na planilha que terá sido enviada para o seu e-mail haverá uma coluna entitulada `isNewsletterOptIn`, que atribui o valor **true** para os clientes que recebem newsletter e **false** para os que não recebem.

>⚠️ Essa opção somente é válida para lojas que têm cadastro de newsletter pelo Master Data. Caso sua loja ainda não possua essa configuração e ela ainda seja feita pelo controle de página, leia o artigo [Configurar a captação de newsletter pelo Master Data](https://help.vtex.com/pt/tutorial/como-configuro-a-captacao-de-newsletter-pelo-master-data--frequentlyAskedQuestions_1816) para saber como configurar.
