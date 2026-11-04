---
title: 'Erros de SLA na integração de pedidos de marketplace'
id: X8lSfxT44OyxkxwvnRk1X
status: PUBLISHED
createdAt: 2021-08-02T22:55:49.181Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:48:42.116Z
firstPublishedAt: 2021-08-02T23:29:49.747Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sla-errors-in-marketplace-integration-orders
legacySlug: erros-de-sla-na-integracao-de-pedidos-de-marketplace
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logística
  - Integrações
symptomFilters:
  - Erro de sincronização
  - Configuração incorreta
---

Quando um pedido de marketplace não é integrado à VTEX por erro de SLA, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

O SLA é o acordo de serviço entre a loja e o marketplace. O erro indica que algum fator está inviabilizando a entrega ao consumidor final. Para identificar a causa, faça uma [simulação de envio](/pt/tutorial/simulacao-de-frete).

Os erros mais comuns de SLA na integração de pedidos de marketplace são:

- **Falta de estoque**
- **Item fora da coleção ou da política comercial**
- **CEP não atendido**
- **Doca sem política comercial**
- **SKU inativo**

## Solução

Para corrigir erros de SLA na integração de pedidos de marketplace, considere as opções apresentadas na tabela a seguir. Depois de corrigir a causa, reprocesse o pedido em **Marketplace > Conexões > Pedidos**, clicando em **Ações > Reprocessar**. Se o erro persistir, abra um [chamado para o suporte VTEX](/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Falta de estoque**|Um ou mais SKUs do pedido estão indisponíveis.|Confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace).|
|**Item não consta na coleção ou política comercial**|O SKU não está marcado na coleção ou na política comercial definida para o marketplace.|Associe o SKU conforme [Associação de SKU à Política Comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial).|
|**CEP de entrega não atendido pela estratégia de envio**|A entrega para o endereço do pedido não está configurada na política de envio.|Ajuste a [política de envio](/pt/docs/tutorials/politica-de-envio) para atender o CEP.|
|**Doca não associada à política comercial**|A doca usada na entrega não está vinculada à política comercial do marketplace.|Ao [cadastrar a doca](/pt/docs/tutorials/gerenciar-doca), vincule-a à política comercial do marketplace.|
|**SKU inativo**|O SKU não está ativo, e somente SKUs ativos são integrados.|Verifique o status em **Catálogo > Produtos e SKUs** e ative o SKU.|
