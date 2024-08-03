---
title: 'E-mails Transacionais para pedidos de Assinatura'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2023-12-21T14:14:10.536Z
publishedAt: 2023-12-21T14:14:10.536Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: e-mails-transacionais-para-pedidos-de-assinatura
locale: pt
legacySlug: e-mails-transacionais-para-pedidos-de-assinatura
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

Toda a comunicação com o cliente da sua loja sobre Assinaturas ocorrerá através do módulo **Central de Mensagens**. Os e-mails transacionais relacionados a Assinatura são totalmente customizáveis e já vem instalados automaticamente na Central de Mensagens.

Para acessar os e-mails transacionais para pedidos de Assinatura, confira o passo a passo a seguir.

1. Acesse o módulo **Central de Mensagens** do Admin.  
2. Clique na aba **Templates**.  
3. Pesquise por **Subscriptions** na caixa de busca, ou utilize o filtro.  
4. Clique no **card** do template desejado para configurá-lo.  

Também é possível criar seu próprio template de e-mail. Entenda melhor como [configurar os templates de e-mails transacionais na plataforma VTEX.](https://help.vtex.com/pt/tutorial/conhecendo-o-message-center/)

## Como seu cliente acompanha seus Pedidos de Assinatura

<div class = "alert alert-info">
Em <a href="https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh">Minha Conta</a>, os clientes conseguem acessar somente os seus pedidos criados nos últimos dois anos.
</div>

Cada ação, ocorrida dentro do fluxo de pedidos de Assinatura, contém um gatilho que dispara um e-mail notificando o seu cliente. Após a ativação da Assinatura, seu cliente receberá e-mails com detalhes do estado de cada pedido da assinatura toda vez que realizar uma ação. 

Não é preciso ativar o envio de e-mails manualmente, pois são enviados de forma automática de acordo com cada cenário incluído na Central de Mensagens. Porém, se desejar, é possível desativar o envio de e-mails específicos:

1. Acesse o módulo **Central de Mensagens** do Admin.  
2. Clique na aba **Templates**.  
3. Pesquise por **Subscriptions** na caixa de busca.  
4. Clique no **card** do template desejado para configurá-lo.  
5. Desmarque a caixa `Ativar envio de e-mail?`, que por default, vem marcada como ativa.
6. Clique em **Salvar**.

![PT Subscription Message Center](https://images.ctfassets.net/alneenqid6w5/3g9hWtw1XUcYlUlwGCzagX/8161e2468d88999ec8505a46274b55f1/PT_Subscription_Message_Center.png)

## Templates default da Central de Mensagens

| Nome do Template                   | ID                                              | Descrição                                                                       |
|------------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------|
| Subscriptions - Cancelled          | vtexcommerce-subscriptions-cancel               | Assinatura cancelada com sucesso                                                |
| Subscriptions - New                |  vtexcommerce-subscriptions-create              | Assinatura criada com sucesso                                                   |
| Subscriptions Expired              | vtexcommerce-subscriptions-expired              | Período de assinatura expirado                                                  |
| Subscriptions - Error              | vtexcommerce-subscriptions-failorder            | Erro na criação da Assinatura                                                   |
| Subscriptions - New Order          | vtexcommerce-subscriptions-neworder             | Novo pedido gerado pela Assinatura                                              |
| Subscriptions - No Order           | vtexcommerce-subscriptions-noorder              | Pedido da Assinatura não criado por indisponibilidade de todos os produtos      |
| Subscriptions - Item Unavailable   | vtexcommerce-subscriptions-partialorder         | Pedido de Assinatura criado com indisponibilidade em algum dos itens            |
| Subscriptions Payment Not Approved | vtexcommerce-subscriptions-payment-not-approved | Pagamento não aprovado do pedido de Assinatura                                  |
| Subscriptions Reactivated          | vtexcommerce-subscriptions-reactivated          | Assinatura reativada                                                            |
| Subscriptions - Next Order         | vtexcommerce-subscriptions-reminder (Assinatura V2) / next-subscription-order-reminder (Assinatura V3)             | Lembrete que a data da próxima compra do pedido de Assinatura será em dois dias |
| Subscriptions - Skipped            | vtexcommerce-subscriptions-skip                 | Pedido de assinatura “pulado” pelo cliente                                         |
| Subscriptions - Paused             | vtexcommerce-subscriptions-stop                 | Assinatura pausada                                                              |
| Subscriptions - Edited             | vtexcommerce-subscriptions-update               | Assinatura atualizada com sucesso                                               |
