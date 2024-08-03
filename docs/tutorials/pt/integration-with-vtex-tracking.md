---
title: 'Integração com o VTEX Tracking'
id: uzhbxlN6jIEiqYvSPNHhR
status: PUBLISHED
createdAt: 2021-09-24T15:05:02.411Z
updatedAt: 2023-03-23T18:06:14.457Z
publishedAt: 2023-03-23T18:06:14.457Z
firstPublishedAt: 2021-09-24T15:26:07.314Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: integracao-com-o-vtex-tracking
locale: pt
legacySlug: integracao-com-o-vtex-tracking
subcategory: t5ai1r0dN7J4U1IYLbHmG
---

O [VTEX Tracking ](https://help.vtex.com/pt/tutorial/vtex-tracking-overview--1uDRquVudbPuoK05MtbZGh) é uma solução para rastreio de entregas. A plataforma permite acompanhar e gerenciar cada entrega da sua loja. Para que as informações necessárias para realização das entregas dos pedidos estejam disponíveis na plataforma VTEX Tracking é preciso realizar uma integração de pedidos. Dessa forma, os pedidos e serviços ficam disponíveis para criação de rotas no VTEX Tracking.

<div class="alert alert-warning">
Para importar pedidos, é necessário cumprir os requisitos abaixo:
<body>
<ol>
<li>Os pedidos precisam estar faturados.</li>
<li>Nos casos em que o pedido é roteirizado externamente (fora do VTEX Tracking), a roteirização precisa ser feita antes da importação.</i>
</ol>
</body>
</div>

Há dois cenários de integração:

* **Integração nativa:** para os pedidos que já estão cadastrados no Gerenciamento de Pedidos do Admin VTEX.  Sua integração ocorre automaticamente após a [instalação do App](#instalacao-do-aplicativo). 
* **Integração não nativa:** para os pedidos que não estão no Gerenciamento de Pedidos do Admin VTEX. Além da [instalação do App](#instalacao-do-aplicativo) é necessário o cadastro via API ou cadastro pela interface do VTEX Admin (utilizando da função televendas).

![integracao tracking](https://images.contentful.com/alneenqid6w5/L4u1MHbVvqNeKovdUv2ve/a9dfb661c1a2ac48b6f9400f75d0eaa8/integracao_tracking.jpg)

## Instalação do aplicativo 

A instalação do aplicativo VTEX Tracking  é o primeiro passo para a integração, e é comum aos dois tipos de integração.

1. A instalação é feita no ambiente Admin na App Store da VTEX.
2. A configuração permite selecionar se deseja integrar apenas pedidos com o arquivo da nota fiscal e se deseja habilitar as atualizações de status. Para que as configurações ocorram, é preciso validar o Token, que deve ser solicitado pelo [suporte](https://help.vtex.com/pt/faq/suporte-vtex-brasil--5q861sTw1n7H2BENOu7ls9). 

Os passos para a instalação e configuração do aplicativo estão detalhados no artigo[ Como instalar e configurar a app VTEX Tracking](https://help.vtex.com/pt/tutorial/como-instalar-e-configurar-a-app-vtex-tracking-no-seu-admin-vtex--3ejuFsJ1m0r08cT6afpIPf).

Depois da instalação, os pedidos que já estão disponíveis no Admin VTEX serão integrados automaticamente e ficarão disponíveis no VTEX Tracking. Os pedidos que são externos ao Admin VTEX precisam ser adicionados pela integração não nativa.

## Integração não nativa

Clientes VTEX Tracking que possuem pedidos externos à plataforma VTEX também podem integrar seus pedidos utilizando o Admin. A integração permite que pedidos de lojas físicas, pedidos de outras plataformas, ou pedidos  que foram roteirizados externamente sejam incluídos na plataforma. Com isso, se torna possível um melhor gerenciamento e visibilidade de todas as suas entregas.

Há duas formas de integrar os pedidos que estão externos a VTEX: 

* **Integração via API:** a utilização da API tem o objetivo de incluir os pedidos ao VTEX Tracking pelo ERP. Assim, os dados dos pedidos são enviados do ERP para o OMS VTEX de forma automática.  Siga os passos descritos em [Integrating external orders via API to be used with VTEX Tracking](https://developers.vtex.com/vtex-rest-api/docs/integrating-external-orders-via-api-to-be-used-with-vtex-tracking).
* **Integração manual via Televendas:** a utilização da funcionalidade televendas permite adicionar pedidos individualmente e de forma manual, seguindo todos os passos de um pedido. 
Para a integração:
1. Crie um [usuário de televendas](https://help.vtex.com/pt/tutorial/how-can-i-create-callcenter-user--frequentlyAskedQuestions_4227).
2. Utilize as [funcionalidades](https://help.vtex.com/pt/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS#gerenciamento-de-pedidos) disponíveis para a conta de televendas para adicionar o pedido ao Gerenciamento de Pedidos VTEX.
