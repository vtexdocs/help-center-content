---
title: Nova seção de Meus Pedidos
id: 2WYPDPojbaAWmqSiqAyewg
status: DRAFT
createdAt: 2017-05-03T20:07:13.624Z
updatedAt: 2021-03-24T22:27:19.597Z
publishedAt: 
firstPublishedAt: 2017-05-03T20:41:22.681Z
contentType: tutorial
productTeam: Post-purchase
author: authors_6
slug: nova-secao-de-meus-pedidos
legacySlug: nova-secao-de-meus-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

<div class="alert alert-warning">
Esta atualização é uma <em>major</em> e <strong>não é compatível com as customizações da página atual de Meus Pedidos</strong>. 
<br />
<br />
Como a nova estrutura de páginas é completamente diferente, será necessário refazer as customizações para migrar para esta versão. Veja detalhes sobre como atualizar sua customização em <a href="http://help.vtex.com/pt/tutorial/customizando-a-secao-meus-pedidos">Customizando a Seção Meus Pedidos</a>.
</div>

A VTEX busca usar uma stack moderna para criar produtos que atendam cada vez melhor ao mercado de e-commerce. Por essa razão, começamos a usar a library React JS em nossas features mais recentes: a nova página de **Meus Pedidos** é um exemplo. Ela vem com novas features e novo design, e foi criada do zero usando React. 

![Tela de listagem do novo Meus Pedidos](//images.contentful.com/alneenqid6w5/5iEOW4etrGO208I4gMiqmq/3db31b5565b297daff34247be23dc7f0/my-orders-blog-1.png)

### Nova experiência de navegação

O React não foi escolhido apenas para ficar alinhado com a nova plataforma da VTEX — por ser uma single-page application carregada dentro da loja, a nova área de pedidos possui uma navegação suave, com uma experiência muito melhor para o usuário.

![Navegação Meus Pedidos](//images.contentful.com/alneenqid6w5/6LN7wTA0k8maaaGGwicqkG/cb11a2c95c14d9c707e5c2a50de3ffd5/MOg.gif)

### Features

Este update no Meus Pedidos vai servir de ponto de partida para novas features nesta seção, mas já traz melhorias nesta primeira versão, como layout mobile-ready e timeline do pedido — que muitas agências implementavam como customização.

![Meus Pedidos mobile & desktop](//images.contentful.com/alneenqid6w5/5PiNAlG8LekCssuiq2kuQ2/28b4d60785682b7b4a53a1583b11c9bf/my-orders-blog-2.png) 

![Detalhes do Pedido](//images.contentful.com/alneenqid6w5/1p3u7cATQAIgyEMAQCsyKa/151bd1aa2063456420a6716b4f6c57ad/my-orders-blog-3.png) 


Outra nova feature são as razões pré-definidas de cancelamento, que o cliente pode escolher caso não queria escrever uma razão. Estas opções podem ser facilmente customizadas e traduzidas nas configurações do Portal v2:

![Cancelamento do pedido](//images.contentful.com/alneenqid6w5/4KBPK3bXf2e8aO2MYkikAY/ce0f45e9fc81f778cfbf6c5904b9f39e/my-orders-blog-4.png) 

![Customizando razões de cancelamento](//images.contentful.com/alneenqid6w5/3Na3wIvSRG6ygy4YgkgICC/24e1ad1513b367326c46a481c0d79bcc/my-orders-blog-5.png)

Pela primeira vez, estamos suportando também tradução nativa do My Orders para francês!

### Como ativar

Para não causar problemas de compatibilidade e quebrar customizações, a nova seção de Meus Pedidos vem com um opt-in, que permite que as lojas inicialmente migrem na velocidade em que desejarem. Este opt-in fica no Portal v2, na mesma seção que a customização de razões de cancelamento:

![Opt-in para ativar a nova versão](//images.contentful.com/alneenqid6w5/Nf4NJcrnMWQEay0YmW0IU/af155d35e2db7ab7a8fa8f8e0ec8462e/MO6.png)

Antes de ativar a nova versão, é possível vê-lá acessando a sua loja pelo ambiente beta (accountname.vtexcommercestable.com.br/account/orders).

Este opt-in fica disponível até **24 de julho de 2017**. Depois disso, todas as lojas terão a versão nova ativada em stable, e a antiga será descontinuada.

É importante notar que as customizações deverão ser refeitas, pois a nova estrutura de páginas é completamente diferente. Para ver mais detalhes sobre como atualizar sua customização, veja o [tutorial sobre customização da seção Meus Pedidos](http://help.vtex.com/pt/tutorial/customizando-a-secao-meus-pedidos).
