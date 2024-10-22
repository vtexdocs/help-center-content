---
title: 'Aplicativo Amazon Multi-Channel Fulfillment (MCF)'
id: X4b62PHi80OK3YwywZStG
status: PUBLISHED
createdAt: 2021-09-20T13:50:23.210Z
updatedAt: 2023-03-29T15:00:56.198Z
publishedAt: 2023-03-29T15:00:56.198Z
firstPublishedAt: 2021-09-20T14:18:16.966Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: amazon-multi-channel-fulfillment-mcf-app
locale: pt
legacySlug: aplicativo-amazon-multi-channel-fulfillment-mcf
subcategoryId: 1P1vFnzQ4TQJsBRDoPVKUI
---

>ℹ️ Esse aplicativo está em fase Beta, o que significa que estamos trabalhando para aprimorá-lo. Em caso de dúvidas, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.

O aplicativo Amazon Multi-Channel Fulfillment (MCF) possibilita a integração do seu negócio com o programa homônimo. Com a integração, clientes VTEX podem usar a rede de logística da Amazon em suas próprias lojas. Assim, os itens de venda ficam armazenados nos centros de distribuição Amazon, e após cada venda no seu ecommerce, a plataforma VTEX envia os dados do pedido para que a Amazon separe, embale e envie aos destinatários.

Com a solução, os preços e prazos de entrega da sua loja serão calculados pela Amazon, recebidos pela VTEX e apresentados ao cliente final durante o checkout. A cada finalização de pedido na sua loja, as informações são enviadas para a Amazon e o acompanhamento do fluxo do pedido é automaticamente atualizado entre as plataformas (VTEX e Amazon).

O MCF permite uma experiência de entrega mais rápida ao cliente final, uma operação logística mais simples e uma redução de custos logísticos. 

Este tutorial contém as informações necessárias para a instalação e configuração do aplicativo. 

## Requisitos

Antes de instalar, é preciso:

* Ter uma conta de [Seller na Amazon](https://sell.amazon.com/). Consulte o artigo [Configurações de conta na Amazon](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/43L0dpbjLBz6tcim1BbTzf) para saber mais sobre as configurações de conta necessárias.
* Conferir se os produtos da sua loja atendem às [políticas de restrições da Amazon](https://sellercentral.amazon.com/gp/help/external/200164330).
* Garantir que sua loja está localizada nos países onde o MCF está disponível. Países como Estados Unidos, Austrália, México, Alemanha e Canadá já possuem o MCF da Amazon. Confira a lista atualizada de países [nesta página da Amazon](https://sell.amazon.com/fulfillment-by-amazon/fba-multi-channel.html).

>❗ Ao instalar o aplicativo, a plataforma VTEX trata a integração como uma loja externa Amazon e utiliza a integração do tipo marketplace com a Amazon.
> <p>A instalação do aplicativo deve ser feita em todas as contas VTEX em que se deseja utilizar a funcionalidade. 
> <p>Recomendamos utilizar o Checkout V6.

## Instalação, configuração e acesso:

Com os requisitos mínimos atendidos, siga os passos abaixo para instalar o aplicativo:

* [Realizar as configurações de localização](#configuracoes-de-localizacao):
As configurações de localização garantem que o cliente selecione o endereço de entrega corretamente, cumprindo os requisitos de fulfillment da Amazon e com o cálculo de frete correto.

* [Instalar o aplicativo MCF disponível na VTEX App Store](#instalacao-do-aplicativo):
Acessar o aplicativo na VTEX App Store.

* [Integrar o catálogo de itens da sua loja com o catálogo da Amazon](#integracao-do-catalogo).:
É preciso que os SKUs da sua loja estejam no mesmo formato na Amazon e na VTEX. Além disso, a integração é feita via marketplace e há configurações necessárias para integrar uma loja VTEX à Amazon. 

* [Autorizar a integração](#autorizacao-entre-contas):
Para a integração ocorrer, no primeiro acesso ao aplicativo, depois da instalação, é preciso acessar a sua conta Amazon e autorizar o envio de informações para a VTEX.

### Configurações de localização

As configurações de localização são utilizadas para o cálculo correto do prazo e do custo de entrega da Amazon.  

A partir da API de geolocalização do Google, a VTEX envia à Amazon os dados de localização da entrega. A Amazon então realiza os cálculos e retorna à VTEX o custo e tempo de entrega. 

Para realizar essa configuração, acesse o Admin e siga os passos abaixo.

1. Instale o aplicativo **Checkout Customizer**: 
    * Acesse a App Store VTEX;
    * Busque por `Checkout Custom`;
    * Clique em Instalar;
2. Clique no botão do ícone `Store Settings`, no menu esquerdo;
3. Busque a seção **Storefront** e clique em `Checkout UI Custom`;
4. Desça a página e ative o campo <i class="fas fa-toggle-on"></i> Google Address Form Format.
5. Na mesma página, no canto superior direito, clique em `PUBLISH`;
6. Clique no botão do ícone `Store Settings`, no menu esquerdo;
7. No menu lateral esquerdo, busque a seção **Storefront** e clique em `Checkout`.
8. Clique no <i class="fas fa-cog"></i>  que está no cartão das configurações de **Checkout;**
9. Preencha o campo **Google Maps API Key:**
10. No menu lateral esquerdo, busque a seção **Shipping** e clique em `Geolocation Shipping`.
11. Preencha a chave **Google Geolocation API**;
12. Clique em `Register Key`.

Nos passos 8 e 10, a chave que deve ser preenchida é a chave de geolocalização Google. Confira [como gerar uma chave no guia de desenvolvedores do Google.](https://developers.google.com/maps/documentation/geocoding/overview) 

>ℹ️ Se tiver dúvidas sobre a chave de geolocalização Google, confira detalhadamente como essa configuração é utilizada pela plataforma VTEX nos artigos [Configurar geolocalização no checkout](https://help.vtex.com/pt/tutorial/geolocalizacao-no-checkout--tutorials_4345)
>   e [Cadastrar geolocalização](https://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao--tutorials_138).

### Instalação do aplicativo

Para instalar o aplicativo, acesse a App Store VTEX:

1. Procure na loja o aplicativo **Amazon MCF**;
2. Clique em `Instalar`.
3. Preencha os seguintes campos: 
    * **Fatura Automática:** Selecione <i class="fas fa-toggle-on"></i> para ativar (**Ativado) **ou desativar** (Desativado).**
        * Utilize `Ativado` para a geração automática de nota fiscal (quando a loja não envia a nota fiscal para os pedidos); 
        * Utilize `Desativado` para incluir as notas fiscais dos pedidos manualmente ou via ERP.
    * **Embalagem Branca:** Selecione <i class="fas fa-toggle-on"></i> para ativar (**Ativado**) ou desativar (**Desativado**).
        * Utilize `Ativado` para que os pedidos sejam enviados em embalagens que não possuem a logomarca da Amazon.
        * Utilize `Desativado` para que os pedidos sejam enviados com embalagens da Amazon.
    * **Logística Amazon:** Selecione <i class="fas fa-toggle-on"></i> para ativar (**Ativado**) ou desativar (**Desativado**).
        * Utilize `Ativado` para utilizar o serviço de transporte da Amazon.
        * Utilize `Desativado` para não utilizar o serviço de transporte da Amazon.
    * **ERP Hook URL:** Endereço do ERP que incluirá as notas fiscais dos pedidos (para o caso em que o campo **Automatic Invoice** estiver como Deactivate).
    * **Amazon Marketplace:** país em que você irá utilizar o Amazon MCF.

>⚠️ As configurações feitas no campo Automatic Invoice serão aplicadas a todos os pedidos.

![MCF](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Apps/Amazon MCF App/aplicativo-amazon-multi-channel-fulfillment-mcf_1.PNG)

### Integração do catálogo

Para que os itens que estão cadastrados em uma das plataformas fiquem disponíveis em ambas, é preciso realizar uma integração entre catálogos via marketplace. 

Para realizar a integração, consulte e siga os passos do tutorial [Cadastro da integração da Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan).

### Autorização entre contas

Com o aplicativo instalado, é preciso autorizar o acesso à sua conta Amazon. Para isso, siga os passo abaixo:

1. No menu lateral à esquerda, clique no ícone de Aplicativos;
2. Em **Gerenciamento de Aplicativos, **clique em `Meus Aplicativos`;
3. Selecione o **Amazon MCF (Multi-Channel Fulfillment)**;
4. Clique em `Authorize`;
5. Você será redirecionado para a página da Amazon. Faça o login na sua conta;
6. Autorize o MCF VTEX: leia os termos, selecione o <i class="far fa-check-square"></i> e aceite as condições;
7. Clique em `Confirm`.

## Links úteis 

* [Multi-Channel Fulfillment FAQs](https://supplychain.amazon.com/support) (Amazon)
* [Seller Central Guide for MCF](https://supplychain.amazon.com/learn/seller-central-guide) (Amazon)
