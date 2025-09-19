---
title: 'Formulários de Cliente e Endereço não existem em multiloja'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2024-11-21T14:53:44.434Z
publishedAt: 2024-11-21T14:53:44.434Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: customer-and-address-forms-do-not-exist-in-multistores
legacySlug: criando-formularios-de-cliente-e-endereco-em-novas-lojas
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Master Data v1
  - Cliente
  - Endereço
  - Multiloja
---

No Master Data v1, os formulários de Cliente e Endereço são criados por padrão somente na loja principal da conta. Por isso, ao criar uma [multiloja](/pt/tutorial/criar-subconta-multiloja-multidominio--tutorials_510), os formulários não são criados automaticamente.

> ⚠️ Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais: <ul> <li> [ Características das versões do Master Data ](/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available) </li> <li> [ Master Data v2 ](https://developers.vtex.com/vtex-rest-api/docs/getting-started-1) </li> </ul>

## Solução

Siga as instruções abaixo para cada multiloja em que desejar criar os formulários de Cliente e Endereço:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.  
2. Após a autenticação, acesse a URL a seguir na barra de endereços do seu navegador, de modo a fazer uma requisição GET à API: `{nomedaloja}.vtexcrm.com.br/api/crm/pvt/provisioning`. Substitua `{nomedaloja}` pelo nome da sua loja.

   Essa requisição será responsável por criar os formulários na multiloja. O resultado será uma tela em branco no navegador, que corresponde a uma resposta de status **200 OK**.  
3. No Master Data, clique em `Configurações avançadas`.  
4. Na opção **Deseja limpar o cache?**, clique em `Sim`.  
5. Clique na aba **Aplicações** para voltar à página inicial do Master Data.  
6. Clique em `Recarregar aplicações`.

Concluídos os passos acima, os formulários de Cliente e Endereço estarão disponíveis no Master Data.
