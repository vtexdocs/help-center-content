---
title: "Ocorre um erro ao tentar realizar uma pesquisa usando o campo 'All' na interface do usuário do VTEX CRM"
id: 1OKMTJuUZx6mnDmYW3MBjP
status: PUBLISHED
createdAt: 2023-10-25T18:46:48.120Z
updatedAt: 2024-11-13T12:00:08.720Z
publishedAt: 2024-11-13T12:00:08.720Z
firstPublishedAt: 2023-10-25T18:46:48.731Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-occurs-when-attempting-to-perform-a-search-using-the-all-field-in-vtex-crm-ui
locale: pt
kiStatus: Backlog
internalReference: 925679
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O filtro "All" (Todos) na interface do usuário do CRM retorna um erro quando usado em entidades com muitos documentos. Isso ocorre porque o filtro "All" executa uma pesquisa curinga em todos os campos pesquisáveis, o que pode resultar em um erro devido ao grande volume de dados que está sendo consultado.

 ![](https://vtexhelp.zendesk.com/attachments/token/Lg1SGLizHjIXrJNiBSaBpJXqk/?name=Captura+de+Tela+2024-11-12+a%CC%80s+18.40.15.png)

## Simulação



- Acesse a interface de usuário do CRM `https://.vtexcrm.com.br/` e navegue até uma exibição que represente uma entidade com muitos registros.
- Inicie uma pesquisa usando o campo "All" (Todos). ![](https://vtexhelp.zendesk.com/attachments/token/H2fobh96F4aBJ8gYJweT5YaP8/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.42.35.png)
- Pesquise qualquer termo no campo de pesquisa.
- Observe que o sistema tenta realizar uma pesquisa curinga em todos os campos pesquisáveis, o que pode resultar em um erro devido ao grande volume de dados.
"**Ocorreu um erro inesperado. Por favor, tente novamente. Se o problema persistir, entre em contato com o suporte. "**![](https://vtexhelp.zendesk.com/attachments/token/wq7uWjOgY9S2I1M8CgyReJANR/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.40.50.png)



## Workaround


Use filtros para campos específicos.

