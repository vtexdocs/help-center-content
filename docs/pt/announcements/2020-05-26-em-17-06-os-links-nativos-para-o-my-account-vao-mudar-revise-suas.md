---
title: 'My Account: Em 17/06, os links nativos para o My Account da sua loja vão mudar - revise suas configurações'
id: 2N9T3weFs2VDXan6vrGgnC
status: CHANGED
createdAt: 2020-05-26T14:16:56.645Z
updatedAt: 2020-11-27T19:40:22.264Z
publishedAt: 2020-06-04T13:39:08.653Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: on-06-17-the-native-links-to-your-stores-my-account-page-will-change-review
locale: pt
legacySlug: em-17-06-os-links-nativos-para-o-my-account-vao-mudar-revise-suas
announcementImageID: ''
announcementSynopsisPT: 'Dia 17 de junho seu cliente acessará todas as suas informações, incluindo os pedidos, através da única URL "/account"'
---

A página "Minha Conta", nativa na plataforma, que exibe todas as informações pessoais e de compra ao consumidor, recebeu uma série de evoluções nos últimos meses. Uma dessas evoluções foi a unificação de todos os dados relacionados ao cliente em uma só página. 

Em termos práticos, isso significa que o cliente acessará todas as suas informações, incluindo os pedidos, através da única URL "/account". A URL anterior "/account/orders", que listava os pedidos, será descontinuada.

A partir do dia __17 de junho de 2020__, todos os links nativos da plataforma passarão a direcionar o usuário para a URL "/account". Por exemplo, nos emails transacionais de pedido, o link para a página de meus pedidos, que antes era "/account/orders", mudará para "/account#/orders", com link interno.

## O que mudará?

Os links nativos da plataforma, presentes nos e-mails transacionais, página de confirmação de compra, OMS e outras, passarão a direcionar o usuário para a URL "/account" ou como dito anteriormente "/account#/orders". Deixaremos de dar suporte à URL anterior "/account/orders".

## Por que estamos realizando esta mudança?

Essa padronização é necessária para continuarmos evoluindo os produtos da VTEX de maneira uniforme. Além disso, a tecnologia utilizada na nova página garante uma maior performance e melhor experiência para o cliente.

## O que precisa ser feito?

A revisão e o eventual ajuste desta mudança devem ser aplicados através dos três passos abaixo. Envolva o responsável pelo front-end da sua loja e compartilhe esta mensagem com ele.

Passos necessários para a revisão e adaptação:

1. __Configuração básica__: revise se o template da página "/account" (ilustração abaixo) já utiliza a view part `<vtex.cmc:accountUserProfile />` e a atualize se houver necessidade. Esta view part é responsável por carregar todas as informações do cliente, incluindo seus pedidos. As view parts anteriores, `<vtex.cmc:accountAddress/>` e `<vtex.cmc:orderList />` devem ser removidas deste template.![account](https://images.ctfassets.net/alneenqid6w5/LIki0Pf7j1gOUi01EIajh/f7089fece0b6b10921fcb969066e2f4a/account.png)
2. __Customização__: se a página "/account/orders" possuir alguma customização de front-end, esta deve ser migrada e adaptada para a nova URL "/account#/orders". Revise e realize todos os testes necessários garantindo funcionamento de todas as recursos personalizados;  
3. __Links do site__: Revise e atualize todos os links customizados do site e dos e-mails transacionais que antes direcionavam o usuário para a URL "/account/orders". Estes links agora devem direcionar o usuário para "/account#/orders".

## Quais impactos sua operação poderá sofrer caso não ocorra a adequação?

Na maioria dos casos, quando a loja não possui muita customização de front-end, a nova versão da página de "Minha Conta" funciona perfeitamente sem a necessidade de qualquer ajuste. No entanto, a revisão se faz necessária para validar a experiência do consumidor.

Em outras situações, se não houver a revisão e eventual adaptação, a experiência do usuário poderá ficar comprometida, fazendo com que algumas ações não funcionem conforme esperado e, em casos extremos, impedindo até a visualização dos pedidos e de outras informações.

Para mais informações, confira nossa documentação sobre o [My Account](https://help.vtex.com/pt/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh?locale=pt). Em caso de dúvidas, entre em contato conosco.
