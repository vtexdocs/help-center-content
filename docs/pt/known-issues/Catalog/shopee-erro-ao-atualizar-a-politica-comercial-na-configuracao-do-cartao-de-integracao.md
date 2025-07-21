---
title: "[Shopee] Erro ao atualizar a política comercial na configuração do cartão de integração"
id: cYd6EPrLcpjZNK51ADKpz
status: PUBLISHED
createdAt: 2025-06-04T20:42:25.961Z
updatedAt: 2025-06-04T20:42:27.041Z
publishedAt: 2025-06-04T20:42:27.041Z
firstPublishedAt: 2025-06-04T20:42:27.041Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: shopee-erro-ao-atualizar-a-politica-comercial-na-configuracao-do-cartao-de-integracao
locale: pt
kiStatus: Backlog
internalReference: 1238883
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao alterar a política comercial de uma conta Shopee já configurada, os itens anteriormente vinculados à política antiga permanecem ativos. Não há um processo automático para desativar esses itens ou publicá-los novamente sob a nova política comercial, o que leva a problemas de catálogo e falhas nos pedidos.

## Simulação



- Configure uma conta Shopee na VTEX usando uma política comercial (por exemplo, Política A).
- Publique SKUs como de costume.
- Altere a política comercial para uma nova (por exemplo, Política B).
- Os itens anteriormente vinculados à Política A permanecem ativos e acionam erros no Bridge, como:
["fields":0, "error":{"code": "ORDoo2", "message": "The item {item description} is no longer available", "exception":null}, "operationId": {operationId number}"

## Workaround


Defina o estoque como zero para todos os itens vinculados à política comercial antiga.
Aguarde até que essa atualização seja processada com êxito pelo marketplace.
Em seguida, atualize a conta com a nova política comercial e publique novamente os itens





