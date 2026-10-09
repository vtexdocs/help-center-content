---
title: 'Erros de integração de pedidos do Magazine Luiza'
id: 7j5iw0eqtZOfC5LDgSnkBa
status: PUBLISHED
createdAt: 2021-08-10T21:10:16.895Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:39:16.700Z
firstPublishedAt: 2021-08-10T21:29:47.059Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-magazine-luiza-integration
legacySlug: erros-de-integracao-de-pedidos-do-magazine-luiza
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

Quando ocorre um erro de integração de pedidos entre o **Magazine Luiza** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos do Magazine Luiza são:

- **Erro de SLA**
- **Documento ou telefone inválido**
- **SKU inativo ou fora da política comercial**
- **SKU sem estoque**
- **Tempo limite de integração**
- **Divergência de preço**

## Solução

Para corrigir erros de integração de pedidos do Magazine Luiza, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Não foi possível localizar o SLA de entrega no Marketplace**<br>**O SLA selecionado para o item não está disponível**|Algum fator está inviabilizando a entrega do pedido ao consumidor final.|Confira [Erros de SLA na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-sla-na-integracao-de-pedidos-de-marketplace).|
|**O campo Documento no perfil do cliente é inválido**<br>**O campo Telefone no perfil do cliente é inválido**|O CPF ou o telefone foi enviado fora do padrão aceito pela VTEX.|Entre em contato com o Magazine Luiza e ajuste o dado indicado na mensagem.|
|**Os skus estão inativos ou fora da política comercial**|O SKU não está ativo ou não está vinculado à política comercial usada no Magalu.|Verifique o status em **Catálogo > Produtos e SKUs**. Ative o SKU em [Preencher campos de cadastro de SKU](/pt/docs/tutorials/adicionar-ou-editar-sku) ou em [Ativar SKUs em massa](/pt/docs/tutorials/ativar-skus-em-massa). Se o SKU já estiver ativo, [associe-o à política comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial).|
|**Os skus não possuem estoque suficiente para integrar o pedido**|Há falta ou insuficiência de estoque.|Confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace).|
|**Tempo de limite para retry alcançado**|O pedido ultrapassou o prazo de 30 dias para tentativas de integração, contados a partir da criação.|O pedido não será mais integrado.|
|**Total do pagamento é diferente do pretendido pela loja**|O preço do produto no Magalu é diferente do preço configurado na VTEX.|Confira [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/troubleshooting/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace).|
