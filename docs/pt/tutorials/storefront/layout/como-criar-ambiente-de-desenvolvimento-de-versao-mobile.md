---
title: 'Criar um ambiente de desenvolvimento de versão mobile'
id: frequentlyAskedQuestions_587
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.089Z
updatedAt: 2023-03-29T18:35:02.578Z
publishedAt: 2023-03-29T18:35:02.578Z
firstPublishedAt: 2019-01-24T22:05:49.842Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-create-a-development-environment-with-a-mobile-version
legacySlug: como-criar-ambiente-de-desenvolvimento-de-versao-mobile
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal (Legado).
</div>

Iniciamos esse artigo reforçando que a tendência e as boas práticas indicam a utilização de uma única versão (responsiva) para desktop e mobile. A criação de uma versão mobile apartada era uma prática adotada quando os recursos de CSS dificultavam a adaptação de uma versão desktop para mobile. 

Hoje em dia, com os recursos que o CSS oferece, a criação de uma versão responsiva tornou-se padrão. Leia mais sobre esse assunto no artigo [Responsivo × Versão Mobile](/pt/tutorial/responsivo-x-versao-mobile/).

Esse artigo tem objetivo de ilustrar como preparar um ambiente de desenvolvimento para versão mobile sem impactar a versão de produção.

Existem algumas maneiras de desenvolver uma versão mobile sem impactar a versão desktop e sem que esse desenvolvimento esteja público em navegações de mobile. Nesse artigo, abordaremos a principal.

## Preparando ambiente

Para desenvolver uma versão mobile com um novo WebSite, você deve seguir os seguintes passos:

1. Configurar uma nova loja (temporária) no módulo **Configurações da conta** Esse passo deve ser realizado pelo responsável pela loja (ambiente). No Admin, acesse __Configurações da conta > Conta__. Selecione a conta deseja e clique __Configurar outra loja__.
2. Criar (ou clonar o principal) um novo WebSite no **CMS Portal (Legado)**:

  Storefront > Layout > Pasta CMS > Sites and Channels > New Website

![cms-new-website](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-criar-ambiente-de-desenvolvimento-de-versao-mobile_1.png)

3. Criar estrutura de pastas do WebSite Mobile: Nesse passo será necessário criar as pastas padrões do sistema que serão utilizadas na versão mobile (busca, departamento, categoria, marca, produto etc.)

## Desenvolver versão mobile

Para visualizar a versão mobile, acesse o site pelo ambiente _myvtex.com.br_ através de algum host configurado no Configurações da conta. Não se esqueça dos seguintes parâmetros: `?uam=true&amp;mobile={versao_mobile)`

Exemplo: http://(nomedaloja).myvtex.com?uam=true&mobile=4

## Publicando versão mobile

Quando o desenvolvimento estiver concluído, para publicar a versão mobile, siga os passos abaixo:

1. __Definir versão mobile do WebSite Principal:__ No WebSite Principal, configure o campo WebSite-Mobile, apontando para o WebSite mobile.
2. __Definir WebSite-Pai da versão Mobile:__ No WebSite Mobile, configure o campo WebSite-Pai, apontando para o WebSite Principal.
3. __Excluir Ligação (WebSite Binding) da versão Mobile:__ No WebSite Mobile, exclua a Ligação (Binding) criada. Versões mobile não precisam de ligação pois eles herdam essa configuração do WebSite Pai.
4. __Exclua a loja Mobile (Temporária) criada no Configurações da conta:__ Essa loja foi criada apenas para servir como ambiente para o desenvolvimento do mobile. Como a versão mobile herdará os hosts do WebSite Principal, essa loja não será mais utilizada e, por isso, indica-se sua exclusão.
