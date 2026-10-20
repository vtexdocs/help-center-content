---
title: 'Erros de integração de pedidos da Amazon'
id: QCOquR8cai882HhDOqNm7
status: PUBLISHED
createdAt: 2021-08-31T15:43:51.365Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:46:13.266Z
firstPublishedAt: 2021-08-31T16:03:20.021Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-amazon-integration
legacySlug: erros-de-integracao-de-pedidos-da-amazon
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

Quando ocorre um erro de integração de pedidos entre a **Amazon** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos da Amazon são:

- **Erro de SLA**
- **SKU fora de estoque**
- **SKU inativo ou sem política comercial**
- **SKU não identificado**

## Solução

Para corrigir erros de integração de pedidos da Amazon, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**No available sla to deliver this order**|Algum fator está inviabilizando a entrega do pedido ao consumidor final.|Confira [Erros de SLA na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-sla-na-integracao-de-pedidos-de-marketplace) para identificar a causa e aplicar a correção.|
|**Order with SKU out of stock**|Há falta ou insuficiência de estoque em um ou mais SKUs do pedido.|Confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace) e siga a correção correspondente.|
|**SKU está inativo ou sem política comercial vinculada**|O SKU não está ativo ou não está vinculado à política comercial usada na Amazon.|Verifique o status em **Catálogo > Produtos e SKUs**. Ative o SKU em [Preencher campos de cadastro de SKU](/pt/docs/tutorials/adicionar-ou-editar-sku) ou em [Ativar SKUs em massa](/pt/docs/tutorials/ativar-skus-em-massa). Se o SKU já estiver ativo, [associe-o à política comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial).|
|**Sku in order don't belong to a VTEX Store, sku id it's not a integer**|O SKU não foi identificado na VTEX porque foi removido do catálogo ou porque a Amazon enviou uma informação incorreta.|Se o SKU constar no catálogo, entre em contato com a Amazon. Se o item não existir mais, o pedido não pode ser integrado.|
