---
title: 'Criar formulários de Cliente e Endereço em novas lojas'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2024-06-11T17:38:43.775Z
publishedAt: 2024-06-11T17:38:43.775Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slug: criando-formularios-de-cliente-e-endereco-em-novas-lojas
locale: pt
legacySlug: criando-formularios-de-cliente-e-endereco-em-novas-lojas
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

No Master Data, os formulários de Cliente e Endereço não são criados por padrão em todas as novas lojas. Estão presentes somente na loja principal da conta. Este cenário é recorrente nos casos em que são criadas multi-lojas.

>⚠️ Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais:
>
> *<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
> Características das versões do Master Data
> </a>
>
> *<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
> Master Data v2
> </a>
> 

É possível criar estes formulários automaticamente, bastando seguir as instruções abaixo para cada loja que desejar.

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Após a autenticação, acesse a URL a seguir, de modo a fazer uma requisição (GET) à API: `{nomedaloja}.vtexcrm.com.br/api/crm/pvt/provisioning`. Substitua `{nomedaloja}` pelo nome da sua loja.

  O resultado será uma tela em branco no navegador, que corresponde a uma resposta de status __200 OK__.
3. Após alguns minutos, no Master Data, clique em **Configurações avançadas**.
4. Na opção **Deseja limpar o cache?**, clique em **Sim**.
5. Clique na aba __Aplicações__ para voltar à página inicial do Master Data.
6. Clique em **Recarregar aplicações**.

Concluídos os passos acima, os formulários da aplicação **Profile System** já deverão estar disponíveis em seu Master Data.
