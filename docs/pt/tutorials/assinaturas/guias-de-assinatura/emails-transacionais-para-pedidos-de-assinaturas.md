---
title: 'Emails transacionais para pedidos de assinaturas'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2025-10-24T14:47:50.280Z
publishedAt: 2025-10-24T14:47:50.280Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: transactional-emails-for-subscriptions-orders
legacySlug: e-mails-transacionais-para-pedidos-de-assinatura
locale: pt
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Toda a comunicação com o cliente da sua loja sobre [Assinaturas](/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) ocorrerá através do módulo **Templates de email**. Os emails transacionais relacionados a assinaturas vem instalados no Admin VTEX e são customizáveis.

Para acessar os emails transacionais para pedidos de assinaturas, confira o passo a passo a seguir:

1. No Admin VTEX, acesse **Configurações da loja > Templates de email > Templates**, ou digite **Templates** na barra de busca no topo da página.  
2. Pesquise por _Subscriptions_ na caixa de busca, ou utilize o filtro. 
3. Clique no _card_ do template desejado para configurá-lo.
4. Faça as alterações desejadas.
5. Clique em `Salvar`.

Também é possível [criar seu próprio template de email](/pt/tutorial/conhecendo-o-message-center/).

## Como seu cliente acompanha seus pedidos de assinatura

> ℹ️ Em [Minha Conta](/pt/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), os clientes conseguem acessar somente os seus pedidos criados nos últimos dois anos.

Cada ação ocorrida dentro do fluxo de pedidos de **Assinaturas** contém um gatilho que dispara um email notificando o seu cliente. Após a ativação da assinatura, o cliente receberá emails com detalhes do estado de cada pedido da assinatura toda vez que realizar uma ação. 

Não é preciso ativar o envio de emails manualmente, pois são enviados de forma automática de acordo com cada cenário incluído em **Templates de email**. Porém, se desejar, é possível desativar o envio de emails específicos:

1. No Admin VTEX, acesse **Configurações da loja > Templates de email > Templates**, ou digite **Templates** na barra de busca no topo da página.  
2. Pesquise por _Subscriptions_ na caixa de busca, ou utilize o filtro. 
3. Clique no _card_ do template desejado para configurá-lo.
4. Desmarque a caixa `Ativar envio de e-mail?`, que vem marcada por padrão.
5. Clique em `Salvar`.

## Templates de email padrão

A tabela a seguir apresenta os templates de email padrão para **Assinaturas**:

| **Nome do template** | **ID** | **Descrição** |
| --- | --- | --- |
| Subscriptions - New | `vtexcommerce-subscriptions-create` | Nova assinatura criada com sucesso.<br><br>Existe um período de 30 minutos entre a criação da assinatura e o disparo da notificação do template `vtexcommerce-subscriptions-create`. |
| Subscriptions - Edited | `vtexcommerce-subscriptions-update` | Assinatura atualizada com sucesso. |
| Subscriptions - Cancelled | `vtexcommerce-subscriptions-cancel` | Assinatura cancelada com sucesso. |
| Subscriptions - Skipped | `vtexcommerce-subscriptions-skip` | Pedido de assinatura “pulado” pelo cliente. |
| Subscriptions - Paused | `vtexcommerce-subscriptions-stop` | Assinatura pausada. Nenhum pedido de assinatura será criado até que a assinatura seja reativada. |
| Subscriptions Reactivated | `vtexcommerce-subscriptions-reactivated` | Assinatura reativada. A nova data de execução será recalculada e os pedidos voltarão a ser executados na data definida. |
| Subscriptions - Next Order | `vtexcommerce-subscriptions-reminder` | Lembrete de que a data da próxima compra do pedido de assinatura será em dois dias. |
| Subscriptions Expired | `vtexcommerce-subscriptions-expired` | Período de assinatura expirado. |
| vtexcommerce-subscriptions-neworder | `vtexcommerce-subscriptions-neworder` | Assinatura gerou um novo pedido. |
| Subscriptions - Item Unavailable | `vtexcommerce-subscriptions-partialorder` | Pedido de assinatura foi gerado parcialmente. Você pode ativar esse template quando a loja não tem todos os SKUs do pedido ou não tem a quantidade necessária de SKU em estoque. |
| Subscriptions - No Order | `vtexcommerce-subscriptions-noorder`| Pedido de assinatura não gerado. Você pode ativar esse template quando a loja não tem nenhum dos SKUs do pedido em estoque. |
| Subscriptions - Error | `vtexcommerce-subscriptions-failorder`| Pedido de assinatura não pode ser gerado. |
| Subscription - Payment Not Approved | `vtexcommerce-subscriptions-payment-not-approved` | Pagamento não aprovado do pedido de assinatura. |
