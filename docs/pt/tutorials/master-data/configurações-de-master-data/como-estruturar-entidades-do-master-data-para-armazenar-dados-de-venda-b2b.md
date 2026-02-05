---
title: 'Como estruturar entidades do Master Data para armazenar dados de venda B2B'
id: 7vHtMxXLc9oYnEfajjtTqL
status: PUBLISHED
createdAt: 2020-05-29T12:32:31.968Z
updatedAt: 2021-11-24T13:35:52.020Z
publishedAt: 2021-11-24T13:35:52.020Z
firstPublishedAt: 2020-05-29T12:50:42.308Z
contentType: tutorial
productTeam: Master Data
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: how-to-structure-master-data-entities-to-store-b2b-sales-data
legacySlug: como-estruturar-entidades-do-master-data-para-armazenar-dados-de-venda-b2b
locale: pt
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Por meio do [Master Data](/pt/docs/tutorials/master-data) - o módulo da VTEX que permite a criação de arquiteturas de bancos de dados - é possível colher, armazenar e disponibilizar dados nos mais diversos formatos para os clientes e usuários administrativos de uma loja. Trata-se de um módulo da plataforma VTEX que pode ser configurado de duas maneiras:
- Utilizando-se um Sistema de Gestão de Conteúdo (CMS) interno ao painel administrativo da loja.
- Por meio do envio de requisições à [API do Master Data](https://developers.vtex.com/docs/api-reference/master-data-api-v2-overview).

Os dados armazenados são descritos por [Entidades de Dados](/pt/docs/tutorials/entidade-de-dados), que são modelos representativos que permitem ao Master Data validar as informações recebidas e criar formulários. O sistema permite que se criem [conexões entre os dados](/pt/tutorial/creating-relationships-between-data-entities--6TdIa6Q2IgWYUu2wsYIG48) de diferentes entidades, além de fornecer uma série de possibilidades de automação. 

Um exemplo são os [Triggers](/pt/docs/tutorials/criando-trigger-no-master-data) que podem ser acionados por mudanças em dados armazenados e podem gerar efeitos como envio de e-mails e outras alterações nesses dados. Entenda mais sobre todas as diferentes configurações possíveis desse módulo na [documentação oficial do Master Data](/pt/subcategory/configuracoes-de-master-data--5tSNDlvmik8gGuKw2goW4q).

## Modelando estruturas de vendas e metas

Uma das aplicações recorrentes do Master Data é a __representação das estruturas de vendas de uma operação B2B__. Lojas podem contar com diversos representantes comerciais com funções diferentes, e é de grande valor conseguir rastrear suas vendas, além de estabelecer e acompanhar suas metas. Vamos ver a seguir alguns exemplos de Entidades de Dados que podem ser criadas ou customizadas para aplicações B2B.

### Representante ou RCA

Uma tabela de representantes ou de Representantes Comerciais Autônomos pode ser útil para controlar todos aqueles que efetuam vendas em nome de uma operação B2B, além de se permitir a geração de relatórios mais bem filtrados.

Alguns campos importantes em tabelas com esse objetivo são:
- Nome e email do representante
- Nome e ID do supervisor
- Marcas representadas
- Região de atuação
- É usuário administrativo?
  - ID de usuário administrativo

### Supervisor

Uma tabela de supervisores permite associar a cada representante comercial ou RCA um supervisor que gerenciará seu trabalho, além de dar controle controle sobre os dados desse supervisor. 

Alguns campos importantes em tabelas com esse objetivo são:
- Nome do supervisor
- Email do supervisor
- Telefone
- ID de usuário administrativo

### Clientes

Toda loja tem uma Entidades de Dados que configura a tabela de clientes. É possível adicionar campos a essa entidade seguindo os passos do artigo [Criar um campo no Master Data](/pt/docs/tutorials/como-crio-um-campo-no-master-data). Dessa forma, quando um cliente visita uma loja, o front-end tem acesso a informações relevantes quanto à sua posição na estrutura de vendas e pode apresentar uma experiência personalizada. Além disso, é possível limitar o acesso à loja apenas para clientes aprovados, como explicado no artigo [Configurar B2B na VTEX](/pt/tutorial/configurando-b2b-na-vtex).

Alguns campos importantes que podem ser adicionados à tabela de Clientes são:
- ID do representante/RCA
- É Empresa?
- Dados da Empresa
  - CNPJ
  - Razão Social
  - Nome Fantasia
  - Telefone Comercial
  - Inscrição Estadual
- Cadastro aprovado?
- Canal de compras

### Metas

Uma tabela de metas permite controlar as metas de vendas dos representantes e RCAs, podendo-se definir políticas como a do ciclo de validade para tais metas, além de especificidades como regiões geográficas de ação e metas por marcas e produtos. 

Alguns campos importantes em tabelas com esse objetivo são:
- ID do representante/RCA
- Região do ciclo
- Data de início do ciclo
- Data final do ciclo
- Valor da meta
  - Por produto
  - Por Marca
- Valor alcançado
- Valor retornado

## Entrada de dados no Master Data

Além de apresentar uma poderosa ferramenta de modelagem de estruturas de dados, o sistema de gestão de conteúdo do Master Data, acessado por meio do painel administrativo da VTEX, oferece diversas maneiras de se preencher as tabelas que estruturam o conteúdo.

### Formulários

O CMS do Master Data permite que se configurem formulários para o preenchimento das tabelas modeladas. É útil para informações que serão inseridas e editadas por usuários administrativos, já que é possível limitar o uso utilizando [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso). 

Você pode aprender a configurar estes formulários acessando o artigo [Criar formulário no Master Data](/pt/docs/tutorials/criando-formulario-no-master-data). Também é possível criar uma Aplicação, que é um agrupador de formulários, seguindo os passos do artigo [Criar aplicação no Master Data](/pt/docs/tutorials/criar-aplicacao-no-master-data).

### Front-end ou API

Formulários também podem ser apresentados via front-end para o preenchimento dos clientes, como descrito no artigo [Criar formulário de Fale Conosco usando o Master Data](/pt/tutorial/criar-formulario-de-fale-conosco-usando-master-data--frequentlyAskedQuestions_614). Outra forma de acessar os dados no front-end ou em integrações diversas é por meio da [API do Master Data](https://developers.vtex.com/docs/api-reference/master-data-api-v1-overview). 

### Triggers

Eventos em uma entidade de dados do Master Data podem disparar alterações nos dados. Entenda melhor acessando o artigo [Criar trigger no Master Data v1](/pt/docs/tutorials/criando-trigger-no-master-data).

### Envio em massa

Também é possível preencher tabelas de forma massiva enviando planilhas, como explicado no artigo [Importar dados no Master Data](/pt/docs/tutorials/importar-dados-no-master-data-v1).

## Saiba mais

- [O que é o Master Data](/pt/docs/tutorials/master-data)
- [API do Master Data](https://developers.vtex.com/docs/api-reference/master-data-api-v2-overview)
- [Criar entidades de dados](/pt/docs/tutorials/entidade-de-dados)
- [Criar relacionamentos entre entidades de dados](/pt/tutorial/creating-relationships-between-data-entities--6TdIa6Q2IgWYUu2wsYIG48)
- [Como criar um trigger no Master Data](/pt/docs/tutorials/criando-trigger-no-master-data)
- [Criar um campo no Master Data](/pt/docs/tutorials/como-crio-um-campo-no-master-data)
- [Configurar B2B na VTEX](/pt/tutorial/configurando-b2b-na-vtex)
- [Criar formulário no Master Data](/pt/docs/tutorials/criando-formulario-no-master-data)
- [Criar aplicação no Master Data](/pt/docs/tutorials/criar-aplicacao-no-master-data)
- [Criar formulário de Fale Conosco usando Master Data](/pt/tutorial/criar-formulario-de-fale-conosco-usando-master-data--frequentlyAskedQuestions_614)
- [Importar dados no Master Data](/pt/docs/tutorials/importar-dados-no-master-data-v1)
