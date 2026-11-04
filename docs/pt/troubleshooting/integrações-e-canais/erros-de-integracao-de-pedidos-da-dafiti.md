---
title: 'Erros de integração de pedidos da Dafiti'
id: 4t8AIA9R671jGHY8MOwHhS
status: PUBLISHED
createdAt: 2021-09-08T14:37:11.608Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:37:09.005Z
firstPublishedAt: 2021-09-08T14:56:15.029Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-dafiti-integration
legacySlug: erros-de-integracao-de-pedidos-da-dafiti
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

Quando ocorre um erro de integração de pedidos entre a **Dafiti** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar os erros, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.

Os erros mais comuns de integração de pedidos da Dafiti são:

- **Produto criado manualmente**
- **Falta de estoque**
- **Preço sem vigência**
- **Frete FOB ou Milk Run**
- **Variação inválida**
- **Pedido fora do status Pendente**
- **FOB habilitado sem cadastro**

## Solução

Para corrigir erros de integração de pedidos da Dafiti, considere as opções apresentadas na tabela a seguir:

|Mensagem de erro|Significado|Ação requerida|
|---|---|---|
|**Não é possível integrar um pedido composto por produtos criados manualmente**|O item foi cadastrado diretamente na Dafiti, então o ID do SKU não é reconhecido pela VTEX.|Exclua o cadastro do item na Dafiti, confirme que o [SKU está cadastrado](/pt/docs/tracks/cadastrar-sku) na VTEX e reprocesse o pedido em **Marketplace > Conexões > Pedidos**, clicando em **Ações > Reprocessar**.|
|**Não foi possível integrar o pedido, pois um ou mais itens não possuem estoque suficiente para o canal de vendas do Marketplace**<br>**Não foi possível integrar o pedido, pois um ou mais itens não estão disponíveis**|Há falta ou insuficiência de estoque em um ou mais itens.|Confira [Erros de falta de estoque na integração de pedidos de marketplace](/pt/troubleshooting/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace).|
|**Não foi possível integrar o pedido, pois um ou mais itens não possui preço vigente para o canal de vendas configurado**|O preço do SKU expirou ou tem erro de cadastro.|[Altere o preço do SKU](/pt/docs/tutorials/alteracao-de-preco-de-sku) e reprocesse o pedido em **Marketplace > Conexões > Pedidos**.|
|**This api call "SetStatusToShipped" is currently not allowed**|A configuração logística da Dafiti está marcada como sim, mas o seller não cadastrou frete FOB nem Milk Run.|Entre em contato com a Dafiti para alterar essa configuração de sim para não.|
|**Valor de variação inválido**|A planilha de mapeamento de categorias e atributos tem um ou mais valores incorretos.|Corrija o mapeamento conforme [Envio dos produtos para a Dafiti](/pt/docs/tracks/envio-dos-produtos-para-a-dafiti).|
|**Pedido não integrado pois o mesmo não está pendente**<br>**Não é possível integrar um pedido que ja tenha passado do status Pendente na Dafiti**|O status foi alterado no portal da Dafiti. O pedido só integra no status Pending.|Não há correção depois da mudança de status. Processe o pedido pelo Admin VTEX, e não pela plataforma da Dafiti.|
|**OMS Api Error Occurred**|O campo FOB está habilitado no conector, mas esse frete não está cadastrado na Dafiti.|No Admin VTEX, acesse **Marketplace > Conexões > Integrações**, edite a configuração da Dafiti, marque **FOB** como **Não** e salve. Depois, solicite à Dafiti a habilitação do frete FOB.|
