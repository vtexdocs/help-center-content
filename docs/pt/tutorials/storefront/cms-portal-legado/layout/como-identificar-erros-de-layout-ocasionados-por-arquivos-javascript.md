---
title: 'Identificar erros de layout ocasionados por arquivos JavaScript'
id: frequentlyAskedQuestions_588
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.986Z
updatedAt: 2023-03-29T13:44:10.202Z
publishedAt: 2023-03-29T13:44:10.202Z
firstPublishedAt: 2019-01-24T22:14:27.348Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-identify-layout-errors-caused-by-javascript-files
legacySlug: como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
seeAlso:
  - /pt/docs/tutorials/como-identificar-qual-arquivo-javascript-esta-sendo-aplicado-em-uma-pagina
  - /pt/faq/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja
  - /pt/docs/tutorials/como-realizar-um-teste-para-verificar-problemas-de-layout
---

> ⚠️ Tutorial válido apenas para lojas CMS Portal (Legado).

Você pode usar a página `/tools.html` para verificar se um erro de layout vem de um arquivo JavaScript customizado da loja ou do comportamento nativo da VTEX.

Para desabilitar o JavaScript do cliente e testar a página, siga os passos abaixo:

1. Acesse `https://{accountName}.myvtex.com/tools.html`, substituindo `{accountName}` pelo nome da conta da sua loja.
2. Na aba **Client JavaScript is**, clique em **Disable**.

![Página tools.html com a opção de desabilitar o JavaScript do cliente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript_1.png)

3. Remova `/tools.html` da URL e atualize a página da loja.

Se o erro desaparecer, ele provavelmente é causado por um arquivo JavaScript customizado. Nesse caso, ajuste o arquivo.

Ao inserir JavaScript na página, siga estas recomendações:

- Use um arquivo JavaScript externo, e não código inline.
- Verifique se o arquivo não prejudica a performance da loja.
