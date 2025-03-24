---
title: 'Como configurar o Cartão de Débito Virtual da Caixa '
id: h5yEWP6FOJpKyXde2MjgF
status: PUBLISHED
createdAt: 2020-04-24T13:33:30.397Z
updatedAt: 2023-03-26T22:06:09.732Z
publishedAt: 2023-03-26T22:06:09.732Z
firstPublishedAt: 2020-04-29T19:00:54.400Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: how-to-configure-the-caixa-virtual-debit-card
locale: pt
legacySlug: como-configurar-o-cartao-de-debito-virtual-da-caixa
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O Cartão de Débito Virtual da Caixa é um meio de pagamento disponível para todos os clientes VTEX. 

Por meio dele, os consumidores finais podem realizar suas compras com o auxílio emergencial liberado pela Caixa Econômica por parte do Governo Federal. 

Além disso, o Cartão de Débito Virtual da Caixa suporta apenas pagamentos feitos com cartões de crédito que o número começa por __“5067228”__ ou __“5067229”__. Qualquer outro cartão não será reconhecido pelo sistema. 

Neste artigo, explicaremos como configurá-lo no seu e-commerce.

## Afiliações de gateway

Atualmente, o Cartão de Débito Virtual da Caixa se conecta a cinco afiliações de
Gateway: Adyen, Braspag, Cielo, Mundipagg e Rede. 

Dito isso, o primeiro passo é definir quais afiliações de Gateway processarão os pagamentos feitos com o Cartão de Débito Virtual e configurá-las. 

O processo de configuração das afiliações é semelhante. Contudo, as informações requeridas em cada formulário são diferentes. Para saber os detalhes de cada configuração, confira os tutoriais a seguir:

- [Adyen](https://help.vtex.com/pt/tutorial/como-configurar-o-gateway-adyen-na-vtex--tutorials_2337?locale=pt "Adyen");
- [Braspag](https://help.vtex.com/pt/tutorial/configurar-o-gateway-braspag--7tQmfLMvtYEsWoaaAaeKSC "Braspag"),
- [CieloV3](https://help.vtex.com/pt/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu?locale=pt "CieloV3");
- [Mundi](https://help.vtex.com/pt/tutorial/configurar-gateway-mundi--2yn9dKzvZOF5tn4RCX2Nbq?locale=pt "Mundi");
- [ERedeRest](https://help.vtex.com/pt/tutorial/configurar-adquirente-rede-con-erederest?locale=pt "ERedeRest").

## Condições de pagamento

Em seguida, você deverá configurar a condição de pagamento em si. 

Confira as instruções:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. No topo da página, clique na aba __Condições de pagamento_.
3. No lado superior direito da tela, clique no __botão verde “+”__.
4. No grupo __“Cartão de Débito”__, selecione a opção __“Cartão de débito virtual Caixa”__. 
5. Em __“Processar com a afiliação”__, selecione a __afiliação__ desejada;
6. Do lado direito da tela, preencha o __formulário__.  
7. Clique no botão azul __“Salvar”__.

Desse modo, uma aba “Cartão de Débito Virtual Caixa” será exibida entre as opções de pagamento apresentadas na página do Checkout.
