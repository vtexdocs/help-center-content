---
title: 'Erros de integração de pedidos do Mercado Livre'
id: 4w4jAIWUy3OELgu3HFmGgh
status: PUBLISHED
createdAt: 2021-08-30T18:04:27.780Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-08-04T18:43:32.189Z
firstPublishedAt: 2021-08-30T18:37:05.901Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-mercado-livre-integration
legacySlug: erros-de-integracao-de-pedidos-do-mercado-livre
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

Quando ocorre um erro de integração de pedidos entre o **Mercado Livre** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos do Mercado Livre são:

- **Erro de SLA**
- **Documento do cliente inválido**
- **Dado cadastral pendente**
- **SKU fora de estoque**
- **SKU inativo ou fora da política comercial**
- **Divergência de preço**
- **Token inválido**

## Solução

Para corrigir erros de integração de pedidos do Mercado Livre, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Pedido não importado pois o SLA de entrega selecionado para o mesmo não está disponível**|Algum fator está inviabilizando a entrega do pedido ao consumidor final.|Confira [Erros de SLA na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-sla-na-integracao-de-pedidos-de-marketplace).|
|**O campo Documento no perfil do cliente é inválido**|O CPF não foi enviado ou foi preenchido incorretamente.|Entre em contato com o Mercado Livre e ajuste o documento do cliente.|
|**Seller.unable_to_list (information)**|Falta um dado cadastral ou ele foi preenchido fora do padrão aceito pelo Mercado Livre. O tipo de informação aparece na mensagem, como _phone_pending_.|Entre em contato com o Mercado Livre e ajuste o dado indicado.|
|**Order with SKU out of stock**|Há falta ou insuficiência de estoque.|Confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace).|
|**Order with SKU inactive or out of sales channel**|O SKU não está ativo ou não está vinculado à política comercial usada no Mercado Livre.|Verifique o status em **Catálogo > Produtos e SKUs**. Ative o SKU em [Preencher campos de cadastro de SKU](/pt/docs/tutorials/adicionar-ou-editar-sku) ou em [Ativar SKUs em massa](/pt/docs/tutorials/ativar-skus-em-massa). Se o SKU já estiver ativo, [associe-o à política comercial](/pt/docs/tutorials/associacao-de-sku-a-politica-comercial).|
|**Taxes are diferents from store desired values**|O preço do produto no Mercado Livre é diferente do preço configurado na VTEX.|Confira [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/troubleshooting/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace).|
|**Error validating grant. Your authorization code or refresh token may be expired or it was already used**|O token da integração expirou ou foi desativado.|Entre em contato com o Mercado Livre e refaça a autorização da integração.|
