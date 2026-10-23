---
title: 'Erros de falta de estoque na integração de pedidos de marketplace'
id: s1i5OCcPFslrMkZJLDnfP
status: PUBLISHED
createdAt: 2021-07-28T19:50:13.475Z
updatedAt: 2026-10-07T22:21:00.000Z
publishedAt: 2023-03-28T14:41:11.666Z
firstPublishedAt: 2021-07-28T19:55:21.464Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: out-of-stock-errors-in-marketplace-integration-orders
legacySlug: erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace
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

Quando um pedido realizado em um marketplace não é integrado à VTEX por falta de estoque, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Para conferir se o SKU está disponível, faça uma [simulação de envio](/pt/tutorial/simulacao-de-frete). O simulador mostra as condições de entrega do produto sem abrir um pedido.

Os erros mais comuns de falta de estoque na integração de pedidos de marketplace são:

- **Indisponibilidade de estoque**
- **SKU inativo**
- **Estoque negativo**
- **Item fora da coleção ou da política comercial**

## Solução

Para corrigir erros de falta de estoque na integração de pedidos de marketplace, considere as opções apresentadas na tabela a seguir. Depois de corrigir a causa, reprocesse o pedido em **Marketplace > Conexões > Pedidos**, clicando em **Ações > Reprocessar**. Se o erro persistir, abra um [chamado para o suporte VTEX](/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Indisponibilidade de estoque**|Um ou mais SKUs do pedido não têm quantidade disponível.|[Atualize a quantidade de SKUs em estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque).|
|**SKU inativo**|O SKU não está ativo, e somente SKUs ativos são integrados.|Verifique o status do item no Admin VTEX, em **Catálogo > Produtos e SKUs**, e ative o SKU.|
|**Estoque negativo**|Há mais itens reservados do que a quantidade total disponível em estoque.|Consulte [por que o estoque está negativo](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque#por-que-meu-estoque-esta-negativo) e ajuste a quantidade disponível.|
|**Item não consta na coleção ou política comercial**|O SKU não está marcado na coleção ou na política comercial definida para o marketplace.|Associe o SKU à política comercial da integração, conforme [Associação de SKU à Política Comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial).|
