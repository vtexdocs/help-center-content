---
title: 'Emails transacionais para pedidos de assinaturas'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2024-10-04T14:15:54.337Z
publishedAt: 2024-10-04T14:15:54.337Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: transactional-emails-for-subscriptions-orders
locale: pt
legacySlug: e-mails-transacionais-para-pedidos-de-assinatura
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Toda a comunicação com o cliente da sua loja sobre [Assinaturas](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) ocorrerá através do módulo **Templates de email**. Os emails transacionais relacionados a assinaturas vem instalados no Admin VTEX e são customizáveis.

Para acessar os emails transacionais para pedidos de assinaturas, confira o passo a passo a seguir:

1. No Admin VTEX, acesse **Configurações da loja > Templates de email > Templates**, ou digite **Templates** na barra de busca no topo da página.  
2. Pesquise por _Subscriptions_ na caixa de busca, ou utilize o filtro. 
3. Clique no _card_ do template desejado para configurá-lo.
4. Faça as alterações desejadas.
5. Clique em `Salvar`.

Também é possível [criar seu próprio template de email](https://help.vtex.com/pt/tutorial/conhecendo-o-message-center/).

## Como seu cliente acompanha seus pedidos de assinatura

>ℹ️ Em [Minha Conta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), os clientes conseguem acessar somente os seus pedidos criados nos últimos dois anos.

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
| :---: | :---: | :--- |
| Paused subscription | `paused-subscription` | Assinatura pausada. |
| Canceled Subscription | `canceled-subscription` | Assinatura cancelada com sucesso. |
| Expired Subscription | `expired-subscription` | Período de assinatura expirado. |
| New Subscription | `new-subscription` | <p>Assinatura criada com sucesso.<br><br>>ℹ️ Existe um período de tempo entre a criação da assinatura e o disparo da notificação do template `new-subscription`.</p> |
| Next Subscription Order Reminder | `next-subscription-order-reminder` | Lembrete que a data da próxima compra do pedido de assinatura será em dois dias. |
| Payment not approved | `payment-not-approved` | Pagamento não aprovado do pedido de assinatura. |
| Reactivated Subscription | `reactivated-subscription` | Assinatura reativada. |
| Skipped Subscription | `skipped-subscription` | Pedido de assinatura “pulado” pelo cliente. |
| Subscription Creation Error | `subscription-creation-error` | Erro na criação da assinatura. |
| Subscription Error | `subscription-error` | Erro no pedido da assinatura. |
| Unavailable Items | `unavailable-items` | Pedido de assinatura criado com indisponibilidade em algum item. |
| Updated Subscription | `updated-subscription` | Assinatura atualizada com sucesso. |
