---
title: 'Erros de integração de pedidos da Netshoes'
id: 616rbFQyCGEQnkAWFKMmr1
status: PUBLISHED
createdAt: 2021-08-26T16:12:38.158Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:42:00.113Z
firstPublishedAt: 2021-08-26T16:24:12.608Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-netshoes-integration
legacySlug: erros-de-integracao-de-pedidos-da-netshoes
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

Quando ocorre um erro de integração de pedidos entre a **Netshoes** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos da Netshoes são:

- **Erro de SLA**
- **Produto inexistente na VTEX**
- **Pedido incompleto**

## Solução

Para corrigir erros de integração de pedidos da Netshoes, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Pedido não importado pois o SLA de entrega selecionado para o mesmo não está disponível**|Algum fator está inviabilizando a entrega do pedido ao consumidor final.|Confira [Erros de SLA na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-sla-na-integracao-de-pedidos-de-marketplace).|
|**Este pedido possui Produto(s) que não existe(m) na VTEX. Os produtos devem ser integrados pela VTEX para que os pedidos possam ser integrados com sucesso**|O item foi cadastrado diretamente na Netshoes, então o ID do SKU não é reconhecido pela VTEX.|Exclua o cadastro do item na Netshoes, confirme que o [SKU está cadastrado](/pt/docs/tracks/cadastrar-sku) na VTEX e reprocesse o pedido em **Marketplace > Conexões > Pedidos**, clicando em **Ações > Reprocessar**.|
|**O pedido não pode ser criado. Por favor, tente novamente**|O pedido não recebeu todas as informações necessárias para ser finalizado.|Reprocesse o pedido em **Marketplace > Conexões > Pedidos**, clicando em **Ações > Reprocessar**. Veja também [Como funcionam os pedidos incompletos](/pt/docs/tutorials/entendendo-os-pedidos-incompletos).|
