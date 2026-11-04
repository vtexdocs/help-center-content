---
title: 'Erros de integração de pedidos do Carrefour'
id: 7d64msl56pE98MVMKfvRM
status: PUBLISHED
createdAt: 2021-08-10T19:41:36.567Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:40:49.189Z
firstPublishedAt: 2021-08-10T19:48:48.112Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-carrefour-integration
legacySlug: erros-de-integracao-de-pedidos-do-carrefour
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Pedidos
  - Integrações
symptomFilters:
  - Erro de sincronização
  - Configuração incorreta
---

Quando ocorre um erro de integração de pedidos entre o **Carrefour** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos do Carrefour são:

- **SKU fora de estoque**
- **Erro de SLA**
- **Divergência de preço**

## Solução

Para corrigir erros de integração de pedidos do Carrefour, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Order with SKU out of stock**<br>**Sku não possui estoque suficiente para integrar o pedido**|Há falta ou insuficiência de estoque em um ou mais SKUs.|Confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace).|
|**O SLA selecionado para o item não está disponível**|Algum fator está inviabilizando a entrega do pedido ao consumidor final.|Confira [Erros de SLA na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-sla-na-integracao-de-pedidos-de-marketplace).|
|**Total do pagamento é diferente do pretendido pela loja**|O preço do produto no Carrefour é diferente do preço configurado na VTEX.|Confira [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/troubleshooting/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace).|
