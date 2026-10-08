---
title: 'Erros de integração de pedidos da B2W'
id: 2iQqCJIfySN0JsCJkOG2h8
status: PUBLISHED
createdAt: 2021-08-26T15:31:43.878Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T21:25:20.723Z
firstPublishedAt: 2021-08-26T15:57:34.837Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-b2w-integration
legacySlug: erros-de-integracao-de-pedidos-da-b2w
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

Quando ocorre um erro de integração de pedidos entre a **B2W** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos da B2W são:

- **Erro de SLA**
- **Pedido cancelado**
- **Pedido incompleto**
- **Pedido não encontrado**
- **Pedido fora do status**
- **Chave da nota inválida**
- **Divergência de preço**

## Solução

Para corrigir erros de integração de pedidos da B2W, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Não há SLA disponível para o item do pedido**<br>**O SLA não está disponível**<br>**O item não está mais disponível**|Algum fator está inviabilizando a entrega do pedido ao consumidor final.|Confira [Erros de SLA na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-sla-na-integracao-de-pedidos-de-marketplace) para identificar a causa e aplicar a correção.|
|**Não é possível integrar o pedido pois o mesmo se encontra cancelado**|O pedido foi cancelado no Admin VTEX ou pelo consumidor, e o status não pode mais ser alterado.|Não há correção para reintegrar o pedido. Consulte [Por que meu pedido foi cancelado?](/pt/troubleshooting/o-pedido-da-minha-loja-foi-cancelado) para entender a causa.|
|**Não é possível avançar com pedido incompleto**|O pedido não recebeu todas as informações necessárias para ser finalizado.|Reprocesse o pedido em **Marketplace > Conexões > Pedidos**, clicando em **Ações > Reprocessar**. Veja também [Como funcionam os pedidos incompletos](/pt/docs/tutorials/entendendo-os-pedidos-incompletos).|
|**Pedido não encontrado**|A B2W não localizou o pedido para a integração.|Abra um [chamado para o suporte VTEX](/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).|
|**Pedido fora do status para integrar**|O pedido foi processado diretamente na B2W e saiu dos status New ou Approved, que são os únicos integráveis.|Não há correção depois que o status muda na B2W. Processe o pedido pelo Admin VTEX, e não pela plataforma do marketplace.|
|**Pedido com chave da nota inválida**|A chave de acesso da nota fiscal eletrônica está ausente ou não tem 44 caracteres numéricos.|Altere a chave para um valor aceito, conforme [Inserir nota fiscal no pedido](/pt/docs/tutorials/faturar-um-pedido-manualmente), e reprocesse o pedido em **Marketplace > Conexões > Pedidos**.|
|**O preço do pedido no marketplace é diferente do seu valor determinado na VTEX.**|O preço do seller é diferente do preço oferecido pela B2W.|Configure uma [regra de divergência de valores](/pt/troubleshooting/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace). Somente usuários com perfil Admin Super (Owner) ou OMS Full podem fazer essa configuração.|
