---
title: 'Nova seção de Meus Pedidos'
id: 2WYPDPojbaAWmqSiqAyewg
status: ARCHIVED
createdAt: 2017-05-03T20:07:13.624Z
updatedAt: 2021-03-24T22:27:19.597Z
publishedAt: 
firstPublishedAt: 2017-05-03T20:41:22.681Z
contentType: tutorial
productTeam: Post-purchase
author: authors_6
slugEN: new-my-orders-area
locale: pt
legacySlug: nova-secao-de-meus-pedidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>⚠️ Esta atualização é uma *major* e **não é compatível com as customizações da página atual de Meus Pedidos**. 
>
>
> 
>
>
> 
> Como a nova estrutura de páginas é completamente diferente, será necessário refazer as customizações para migrar para esta versão. Veja detalhes sobre como atualizar sua customização em [Customizando a Seção Meus Pedidos](http://help.vtex.com/pt/tutorial/customizando-a-secao-meus-pedidos).

A VTEX busca usar uma stack moderna para criar produtos que atendam cada vez melhor ao mercado de e-commerce. Por essa razão, começamos a usar a library React JS em nossas features mais recentes: a nova página de **Meus Pedidos** é um exemplo. Ela vem com novas features e novo design, e foi criada do zero usando React. 

![Tela de listagem do novo Meus Pedidos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/nova-secao-de-meus-pedidos_1.png)

### Nova experiência de navegação

O React não foi escolhido apenas para ficar alinhado com a nova plataforma da VTEX — por ser uma single-page application carregada dentro da loja, a nova área de pedidos possui uma navegação suave, com uma experiência muito melhor para o usuário.

![Navegação Meus Pedidos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/nova-secao-de-meus-pedidos_2.gif)

### Features

Este update no Meus Pedidos vai servir de ponto de partida para novas features nesta seção, mas já traz melhorias nesta primeira versão, como layout mobile-ready e timeline do pedido — que muitas agências implementavam como customização.

![Meus Pedidos mobile & desktop](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/nova-secao-de-meus-pedidos_3.png) 

![Detalhes do Pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/nova-secao-de-meus-pedidos_4.png) 


Outra nova feature são as razões pré-definidas de cancelamento, que o cliente pode escolher caso não queria escrever uma razão. Estas opções podem ser facilmente customizadas e traduzidas nas configurações do Portal v2:

![Cancelamento do pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/nova-secao-de-meus-pedidos_5.png) 

![Customizando razões de cancelamento](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/nova-secao-de-meus-pedidos_6.png)

Pela primeira vez, estamos suportando também tradução nativa do My Orders para francês!

### Como ativar

Para não causar problemas de compatibilidade e quebrar customizações, a nova seção de Meus Pedidos vem com um opt-in, que permite que as lojas inicialmente migrem na velocidade em que desejarem. Este opt-in fica no Portal v2, na mesma seção que a customização de razões de cancelamento:

![Opt-in para ativar a nova versão](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All orders/nova-secao-de-meus-pedidos_7.png)

Antes de ativar a nova versão, é possível vê-lá acessando a sua loja pelo ambiente beta (accountname.vtexcommercestable.com.br/account/orders).

Este opt-in fica disponível até **24 de julho de 2017**. Depois disso, todas as lojas terão a versão nova ativada em stable, e a antiga será descontinuada.

É importante notar que as customizações deverão ser refeitas, pois a nova estrutura de páginas é completamente diferente. Para ver mais detalhes sobre como atualizar sua customização, veja o [tutorial sobre customização da seção Meus Pedidos](http://help.vtex.com/pt/tutorial/customizando-a-secao-meus-pedidos).
