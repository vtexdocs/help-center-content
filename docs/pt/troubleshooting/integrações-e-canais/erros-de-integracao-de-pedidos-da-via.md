---
title: 'Erros de integração de pedidos da Via'
id: 4JYKSqNNBO6OsSCylw3fAO
status: PUBLISHED
createdAt: 2021-08-17T21:03:43.699Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:10:37.741Z
firstPublishedAt: 2021-08-17T21:15:23.028Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-via-integration
legacySlug: erros-de-integracao-de-pedidos-da-via
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

Quando ocorre um erro de integração de pedidos entre a **Via** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos da Via são:

- **Erro de SLA**
- **SKU inativo ou fora da política comercial**
- **Divergência de preço**
- **Documento do cliente inválido**
- **SKU fora de estoque**
- **SKU inexistente**
- **SKU sem preço correto**
- **Pedido cancelado**

## Solução

Para corrigir erros de integração de pedidos da Via, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**O SLA selecionado não está disponível**<br>**Nenhum SLA disponível para entregar esse(s) SKU(s).**|Algum fator está inviabilizando a entrega do pedido ao consumidor final.|Confira [Erros de SLA na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-sla-na-integracao-de-pedidos-de-marketplace).|
|**Os skus estão inativos ou fora da política comercial**|O SKU não está ativo ou está fora da política comercial da integração.|Verifique o status em **Catálogo > Produtos e SKUs**. Ative o SKU em [Preencher campos de cadastro de SKU](/pt/docs/tutorials/adicionar-ou-editar-sku) ou em [Ativar SKUs em massa](/pt/docs/tutorials/ativar-skus-em-massa).|
|**Total do pagamento é diferente do pretendido pela loja**|O preço do produto na Via é diferente do preço configurado na VTEX.|Confira [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/troubleshooting/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace).|
|**O campo Documento no perfil do cliente é inválido**|O CPF não foi enviado para a Via ou foi preenchido incorretamente.|Entre em contato com a Via e ajuste o documento do cliente.|
|**Order with SKU out of stock**|Há falta ou insuficiência de estoque em um ou mais SKUs.|Confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace).|
|**Não é possível integrar um pedido composto por skus inexistentes na loja**|O SKU não foi identificado na VTEX porque foi removido do catálogo ou porque a Via enviou uma informação incorreta.|Se o SKU constar no catálogo, entre em contato com a Via.|
|**Order with SKU without the correct price**|Há inconsistência no preço do SKU ou no estoque.|Confira o [preço do SKU](/pt/docs/tutorials/alteracao-de-preco-de-sku). Se o preço estiver correto, consulte [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace).|
|**O pedido com marketplace id {XXX} para o afiliado {XXX} já está cancelado e não pode ser recriado**|O pedido foi cancelado e o status não pode mais ser alterado.|Não há correção para recriar o pedido. Consulte [Por que meu pedido foi cancelado?](/pt/troubleshooting/o-pedido-da-minha-loja-foi-cancelado).|
