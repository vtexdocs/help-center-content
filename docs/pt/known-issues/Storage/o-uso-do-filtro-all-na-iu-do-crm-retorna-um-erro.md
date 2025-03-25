---
title: "O uso do filtro 'All' na IU do CRM retorna um erro"
id: 4B8l0OdT8TO907gc69X4mM
status: ARCHIVED
createdAt: 2024-11-12T22:02:47.025Z
updatedAt: 2024-11-22T20:58:26.049Z
publishedAt: 
firstPublishedAt: 2024-11-12T22:02:48.439Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: using-all-filter-in-the-crm-ui-returns-an-error
locale: pt
kiStatus: Backlog
internalReference: 1134321
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O filtro "All" (Todos) na interface do usuário do CRM retorna um erro quando usado em entidades com um grande número de documentos. Isso ocorre porque o filtro "All" executa uma pesquisa curinga em todos os campos pesquisáveis, o que pode resultar em um erro devido ao grande volume de dados que está sendo consultado.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Storage/o-uso-do-filtro-all-na-iu-do-crm-retorna-um-erro_1.png)

#

## Simulação



- Acesse a UI do CRM e navegue até um formulário de entidade com um grande número de documentos.
- Use o filtro "All" (Todos) para pesquisar qualquer termo em todos os campos pesquisáveis.
- Observe que o sistema tenta realizar uma pesquisa curinga em todos os campos pesquisáveis, o que pode resultar em um erro devido ao grande volume de dados.
"**Ocorreu um erro inesperado. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte. "**



## Workaround


Use filtros para campos específicos.

