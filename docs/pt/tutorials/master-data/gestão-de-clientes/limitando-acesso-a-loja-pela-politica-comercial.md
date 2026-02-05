---
title: 'Limitar acesso à loja pela política comercial'
id: tutorials_3063
status: PUBLISHED
createdAt: 2017-04-27T21:52:28.228Z
updatedAt: 2024-05-24T19:16:43.055Z
publishedAt: 2024-05-24T19:16:43.055Z
firstPublishedAt: 2017-04-27T23:03:54.732Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: limiting-access-to-the-store-by-means-of-the-trade-policy
legacySlug: limitando-acesso-a-loja-pela-politica-comercial
locale: pt
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

A limitação no acesso de uma loja pode ser implementado por diversos motivos, como quando a loja possui um site B2B em que só permite que empresas cadastradas e autorizadas realizem a navegação no site ou quando é um ambiente para clientes exclusivos, por exemplo.

Esse cenário pode ser atendido através do uso do Master Data v1 e da política comercial utilizada na loja.

> ⚠️ Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais: <ul> <li> [ Características das versões do Master Data ](/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available) </li> <li> [ Master Data v2 ](https://developers.vtex.com/docs/guides/master-data-v2-basics) </li> </ul>

## Criar cluster de clientes

O primeiro passo é a criação de um cluster que fará a identificação de quais clientes poderão acessar a loja. [Para saber como criar um cluster de clientes, acesse nosso manual](/pt/docs/tutorials/como-criar-um-cluster-de-clientes/).

## Alterar a política comercial

Após a criação do cluster, é preciso criar a regra na política comercial para que apenas clientes dentro daquele cluster possam acessar o site.

1. No Admin VTEX, acesse **Configurações da loja** > **Canais** > **Políticas comerciais**.
2. Na política comercial utilizada, clique em __Alterar__.
3. No campo **Regra condicional**, preencha com o valor **{NomeDoCluster}=”true”**. O valor **{NomeDoCluster}** deve ser alterado pelo nome do campo na entidade de dados.
4. Clique no botão **Salvar**.

![Catálogo PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/gestão-de-clientes/limitando-acesso-a-loja-pela-politica-comercial_1.png)

Na configuração acima, apenas o clientes com o valor true (utilizado um campo boolean – em que os valores são verdadeiro ou falso) acessarão o site.

Porém, existem outras possibilidades de configuração. Pode ser configurado, por exemplo, **NomeDoCluster="false"** – onde apenas clientes com valor **false** no campo acessarão o site ou **NomeDoCluster="silva"** – onde apenas clientes com o valor **silva** no campo utilizado para o cluster acessarão o site.

## Cadastrar os clientes que poderão acessar

Para um caso de B2B, onde a loja ainda não conhece quais são os clientes que poderão acessar, será necessário criar um formulário onde as empresas cadastrarão seus dados. Então, pelo Master Data a loja fará a verificação dos dados e liberação ou não do acesso à loja. [Para realizar essa configuração, acesse nosso manual para lojas B2B](/pt/docs/tutorials/configurando-b2b-na-vtex/).

## Saiba mais

- [Estratégias de marketplace na VTEX](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete)
- [Como funciona uma Política Comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial)
- [Criar uma política comercial](/pt/docs/tutorials/criar-uma-politica-comercial)
- [Configurar política comercial para marketplace](/pt/docs/tutorials/configurando-a-politica-comercial-para-marketplace)
