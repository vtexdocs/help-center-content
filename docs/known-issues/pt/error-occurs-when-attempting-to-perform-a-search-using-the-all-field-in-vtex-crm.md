---
title: "Ocorre um erro ao tentar realizar uma pesquisa usando o campo 'Todos' no VTEX CRM"
id: 1OKMTJuUZx6mnDmYW3MBjP
status: PUBLISHED
createdAt: 2023-10-25T18:46:48.120Z
updatedAt: 2023-10-25T18:46:48.731Z
publishedAt: 2023-10-25T18:46:48.731Z
firstPublishedAt: 2023-10-25T18:46:48.731Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: ocorre-um-erro-ao-tentar-realizar-uma-pesquisa-usando-o-campo-todos-no-vtex-crm
locale: pt
kiStatus: Backlog
internalReference: 925679
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Esse caso ocorre com entidades que contêm um grande número de campos e milhões de registros em uma entidade. O problema ocorre porque o mecanismo de busca usa o campo "All", que envia solicitações individuais para cada campo pesquisável da entidade e multiplica a carga de solicitações para cada documento.

## Simulação



1. Acesse `https://.vtexcrm.com.br/`.
2. Navegue até uma visualização que represente uma entidade com milhões de registros.
3. Inicie uma pesquisa usando o campo "All".
 ![](https://vtexhelp.zendesk.com/attachments/token/NGWvp5vsTzd31GA07N6vp0Wev/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.42.35.png)
4. Observe a resposta do sistema e verifique se ele retorna um erro ou apresenta problemas significativos de desempenho.
 ![](https://vtexhelp.zendesk.com/attachments/token/aFWGBmUtDtl9ppgmMNOkDX8Fu/?name=Captura+de+Tela+2023-10-25+a%CC%80s+15.40.50.png)
5. Repita a pesquisa com um campo pesquisável específico para confirmar se o problema está relacionado ao mecanismo de pesquisa do campo "Todos"

## Workaround


Pesquise com um campo pesquisável específico.

