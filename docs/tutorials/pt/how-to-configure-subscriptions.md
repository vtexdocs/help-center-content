---
title: Como configurar Assinaturas na sua loja
id: 1FA9dfE7vJqxBna9Nft5Sj
status: PUBLISHED
createdAt: 2019-01-31T16:00:03.228Z
updatedAt: 2023-04-11T00:33:27.310Z
publishedAt: 2023-04-11T00:33:27.310Z
firstPublishedAt: 2019-01-31T16:01:57.927Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: como-configurar-assinaturas
legacySlug: como-configurar-assinatura-v2
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

<div class = "alert alert-info">
A instalação do módulo Assinaturas é feita por meio de solicitação ao <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.
</div>

O sistema de __Assinaturas__ é um aplicativo desenvolvido pela VTEX para facilitar as vendas recorrentes. Funciona como um agendador automático, repetindo um pedido na frequência desejada pelo cliente da sua loja.

Seu cliente pode indicar a periodicidade que deseja repetir a compra de um determinado produto e o sistema vai refazer o pedido de compra automaticamente a cada período agendado, de forma recorrente.

Essa compra é feita  automaticamente, a cada período agendado, com as mesmas características configuradas no pedido original. A assinatura é uma forma simples de poupar o tempo de seu cliente, trazendo mais um fluxo programado de vendas para a sua loja.

Para ativar a funcionalidade será necessário:

1. [Instalar o app de Assinaturas](#1-instalar-o-app-de-assinaturas)
2. [Configurar meios de pagamento](#2-configurar-meios-de-pagamento)
3. [Criar um plano de assinatura](#3-criar-um-plano-de-assinatura)
4. [Configurar Perfis de acesso para Assinaturas](#4-configurar-perfis-de-acesso-para-assinaturas)

## 1. Instalar o app de Assinaturas

<div class="alert alert-warning">
No momento, a instalação do módulo Assinaturas é feita somente por solicitação ao <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.
</div>

Para instalar o app gratuito de Assinaturas na [VTEX App Store](https://apps.vtex.com/), siga os passos abaixo:

1. Na VTEX App Store, acesse a página do app [Subscriptions](https://apps.vtex.com/vtex-admin-subscriptions/p).
2. Clique em `Obter app`.
3. Em **Digite sua conta**, escreva o nome da sua conta VTEX.
4. Clique em `Confirmar`.
5. No carrinho do seu pedido na VTEX App Store, clique em `Fechar pedido`.
6. Clique em `Vá para a página de instalação`.
7. No Admin VTEX, clique em `Instalar`.

Após a instalação, as configurações do aplicativo estarão disponíveis no Admin VTEX, em **Pedidos > Assinaturas**.

## 2. Configurar meios de pagamento

Para configurar os meios de pagamento de pedidos com assinatura, siga os passos abaixo.

1. Acesse o Módulo de **Assinaturas** do seu Admin. 
2. Clique na aba **Configurações**.
3. Marque a caixa de seleção do meio de pagamento que deseja disponibilizar como **Ativado**.

Atualmente, os seguintes meios de pagamento estão habilitados para pedidos de assinaturas:

* **Boleto Bancário**
* **Cartão de Crédito**

<div class="alert alert-info">
  <p>Para disponibilizar a opção de pagamento <strong>Cartão de Crédito</strong>, entre em contato com o adquirente da sua loja e certifique-se que ele aceita transações de compras recorrentes oriundas de cartões tokenizados (sem CVV). O sistema de <strong>Assinaturas</strong> utilizará os mesmos dados do cartão da primeira compra para realizar os pedidos seguintes da assinatura, garantindo a segurança de todo o processo.</p>
</div>

Para habilitar esse tipo de transação no conector, o gestor da loja deverá solicitar ao adquirente a liberação para transacionar pagamentos recorrentes. Confira o nosso artigo sobre [como configurar um gateway de pagamento na sua loja](https://help.vtex.com/pt/tutorial/pci-gateway-visao-geral/).

## 3. Criar um plano de assinatura

No módulo de __Assinaturas__, você precisa criar planos de assinatura para disponibilizar para seus clientes e associar produtos a esses planos. Os planos servem para indicar que a funcionalidade de Assinaturas está ativa para determinados produtos e apresentar as frequências de assinaturas disponíveis. Confira o artigo [Como criar um plano de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) para saber mais sobre esse processo.

Existe uma outra opção para criar um plano de assinatura, que consiste em criar manualmente um anexo de SKU no __Catálogo__. O **Anexo de SKU** é responsável por indicar que a funcionalidade de Assinatura está ativa para esse SKU, e também quais são as frequências disponíveis. Confira o artigo [Como criar um anexo de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK) para saber mais sobre esse processo.

## 4. Configurar Perfis de acesso para Assinaturas

Existe uma série de recursos relacionados a assinaturas, disponíveis no módulo de **Perfis de Acesso** da sua loja. São esses recursos que permitem o acesso dos usuários do seu Admin VTEX a determinadas funcionalidades, para operarem o módulo de Assinaturas. Para saber mais sobre perfis de acesso, confira o nosso [artigo](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

<div class="alert alert-warning">
<p>Se o usuário não tiver as permissões necessárias para acessar os dados das telas de <strong>Assinaturas</strong>, o sistema exibe um alerta informando que ele não tem essas permissões, e o usuário não consegue ver os dados.</p>
</div>

Veja a tabela abaixo para saber quais são os recursos relacionados ao módulo de Assinaturas.

| Nome do Recurso na tela de Perfis de Acesso | Nome da Chave       | Descrição                                                                        |
|---------------------------------------------|---------------------|----------------------------------------------------------------------------------|
| Subscription view only                      | SubscriptionViewer  | Somente visualização das listagens relativas aos assinantes e pedidos            |
| Subscription view and edit                  | SubscriptionManage  | Permite edições e ações, mas não tem acesso a gráficos e relações não monetárias |
| Subscription metrics and reports            | SubscriptionMetrics | Visualização de gráficos, valores e tendências                                   |
| Subscription admin                          | SubscriptionAdmin   | Permite configuração de Assinaturas                                              |

Para configurar os Perfis de acesso de Assinatura, siga as instruções abaixo.

1. No módulo **Configurações da Conta**, acesse a aba **Perfis de Acesso**.
2. Clique no botão `Novo Perfil`.  
3. Preencha o **Nome do Perfil**.
4. Em **Produtos e Recursos** selecione **OMS**.
5. Marque as caixas dos **recursos de Assinatura** que deseja adicionar.
6. Clique em `Salvar`. 

Agora que as Assinaturas já estão configuradas em sua loja, acesse nosso artigo para conferir como [gerenciar assinaturas](https://help.vtex.com/pt/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x).

É possível testar o fluxo de compra de uma Assinatura na perspectiva do seu cliente. Para checar como o cliente da sua loja gera um pedido com Assinatura, confira nosso artigo sobre [Como funciona a Assinatura](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453).

