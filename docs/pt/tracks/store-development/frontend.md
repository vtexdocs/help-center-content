---
title: 'Frontend'
id: 5DTcawNjc5MovtD7HNqURl
status: PUBLISHED
createdAt: 2022-12-21T20:43:31.083Z
updatedAt: 2023-04-25T19:15:45.158Z
publishedAt: 2023-04-25T19:15:45.158Z
firstPublishedAt: 2022-12-22T19:57:08.694Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: frontend
locale: pt
trackId: 3fHF3GIjK8UugnQKIakpl9
trackSlugPT: desenvolvimento-de-loja
---

Frentes de loja são a camada de apresentação para o usuário, definindo sua experiência na plataforma e sendo decisiva na realização ou não de uma compra. Para que um negócio digital se mantenha relevante e competitivo, essa camada deve oferecer elementos como uma ótima experiência de usuário (via desktop e mobile), possibilidade de omnichannel, experiência personalizada de compra e uma excelente web performance. 

Para alcançar esses objetivos, a VTEX fornece diferentes tecnologias para o desenvolvimento frontend de uma loja. Dependendo do que se deseja, uma tecnologia pode ser mais recomendada que outra.

## Store Framework

O Store Framework surge a partir da ideia de composabilidade, em que permite a combinação de diferentes conteúdos, serviços e dados. Assim, além de integrações e orquestração de API, a VTEX oferece as ferramentas adequadas para atender necessidades comerciais mais específicas.

A maneira como essa extensão de funcionalidades ocorre é através de apps VTEX disponíveis globalmente.

O Store Framework é uma solução para construção de frente de loja que se alavanca do VTEX IO. Através dela podemos contar com a interface amigável do [Site Editor](/pt/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) e tornar o gerenciamento de conteúdo da loja mais simples.

![vtex io](https://images.ctfassets.net/alneenqid6w5/2ihbniXa1S2L7pLOPP0E3o/51d67a21e5ab6bf0517fee83f9455337/image3.png)

Lojas criadas com o Store Framework também contam com as features de: 
- **[Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)**: ferramenta de busca, que corrige erros ortográficos e possibilita regras condicionais para exibição do resultado de busca.
- **[Multi-idiomas](/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO?&utm_source=autocomplete)**: possibilidade que o VTEX IO traz de configurar a tradução automática na loja para outros idiomas.
- **[Cross-border](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-cross-border-stores)**: o que permite uma [multi-loja VTEX](/pt/tutorial/creating-multi-store-multi-domain--tutorials_510?locale=en&_ga=2.139338803.1060780652.1642427010-1001456323.1619912759) de operar em diferentes países com uma abordagem própria para cada um deles.

## FastStore 

Enquanto Store Framework foca em composabilidade, a FastStore foi construída com foco em performance e é baseada na arquitetura Jamstack (que significa Javascript, API e Markup). Em sites Jamstack, a lógica do aplicativo geralmente reside no lado do cliente, sem estar fortemente acoplada ao servidor de back-end.

A intenção é de se utilizar da arquitetura Jamstack para entregar frentes de loja de maneira rápida, segura e confiável. Além disso, acompanha diversas ferramentas e recursos voltados para esse propósito, incluindo pipeline de WebOps e starter packs otimizados para performance.

Dessa forma, a FastStore pode realizar integrações com qualquer CMS e qualquer plataforma de desenvolvimento — mas para se beneficiar das garantias e suporte fornecidos pela VTEX, FastStore, Webops e Headless CMS é necessário.

Algumas funcionalidades não estão disponíveis, a exemplo de customizações de My Account e total integração com apps do IO e Intelligent Search. 

## CMS Portal (Legado)

O CMS Portal é uma tecnologia legada da VTEX responsável por gerenciar, principalmente, o código fonte do site, sendo então o módulo onde está o conteúdo que aparece na loja. 

Para o CMS Legado, um conceito importante é o de Controles, que são snippets de código que renderizam dados nativos da VTEX. Os controles ajudam o lojista a criar conteúdo e incluir ferramentas no site de forma nativa utilizando o que a VTEX já oferece. Para que essa customização ocorra, são utilizados CSS, HTML e JavaScript no desenvolvimento, permitindo que se crie layouts e templates.

Por utilizar tecnologias mais defasadas, quando há necessidade de fazer alguma alteração no CMS Legado, é necessário acessar os códigos internamente e prosseguir com essas alterações no campo Layout. Dessa forma, CMS se torna uma tecnologia mais difícil de utilizar e manter, dificultando também que se mantenha uma boa performance conforme se realizam mais customizações. 

