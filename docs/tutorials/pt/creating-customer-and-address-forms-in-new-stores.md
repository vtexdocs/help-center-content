---
title: 'Criar formulários de Cliente e Endereço em novas lojas'
id: 46ETfuaGogKwaMau4ESAAM
status: PUBLISHED
createdAt: 2017-08-16T16:57:24.708Z
updatedAt: 2023-03-28T22:59:22.957Z
publishedAt: 2023-03-28T22:59:22.957Z
firstPublishedAt: 2017-08-16T17:21:19.815Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slug: criando-formularios-de-cliente-e-endereco-em-novas-lojas
legacySlug: criando-formularios-de-cliente-e-endereco-em-novas-lojas
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

No Master Data, os formulários de Cliente e Endereço não são criados por padrão em todas as novas lojas. Estão presentes somente na loja principal da conta. Este cenário é recorrente nos casos em que são criadas multi-lojas.

<div class="alert alert-warning">
Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais:
<ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Características das versões do Master Data
</a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
</a>
</li>
</ul>
</div>

É possível criar estes formulários automaticamente, bastando seguir as instruções abaixo para cada loja que desejar.

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Após autenticado, acesse a seguinte URL, de modo a fazer uma requisição (GET) à API: `meusegundosite.vtexcrm.com.br/api/crm/pvt/provisioning`.
3. O resultado será uma tela em branco no navegador, mas que corresponde à uma resposta de status "200".
4. Após alguns minutos, no Master Data, clique em **Área avançada**.
6. Na opção **Deseja limpar o cache?** clique em **Sim**.
7. Volte à página inicial do Master Data.
8. Clique em **Recarregar Aplicações**.

Concluídos os passos acima, os formulários da aplicação **Profile System** já deverão estar disponíveis em seu Master Data.

![2017-08-16 141744](//images.contentful.com/alneenqid6w5/1RWM1vPsmwUiqOA6oSEE8w/8c9cf5d38049f2cc6f16b6cc285828b3/2017-08-16_141744.jpg)
