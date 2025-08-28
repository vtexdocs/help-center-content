---
title: 'Criar cluster de clientes'
id: frequentlyAskedQuestions_1724
status: PUBLISHED
createdAt: 2019-01-24T20:45:58.065Z
updatedAt: 2024-08-12T16:09:00.345Z
publishedAt: 2024-08-12T16:09:00.345Z
firstPublishedAt: 2019-01-24T22:05:41.666Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-can-i-create-cluster-of-customers
legacySlug: como-criar-um-cluster-de-clientes
locale: pt
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

Clusterização de clientes é o mesmo que segmentação de clientes. Essas duas abordagens servem para dar ao lojista uma maior identificação de qual é o perfil do cliente, para obter mais assertividade nas atividades relacionadas a esse usuário.

> ⚠️ Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais: <ul> <li> [ Características das versões do Master Data ](https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available) </li> <li> [ Master Data v2 ](https://developers.vtex.com/vtex-rest-api/docs/getting-started-1) </li> </ul>

Esse dado, quando adquirido, é muito válido para o marketing e a publicidade da empresa. Cada loja pode definir quais serão seus clusters e quais serão as regras para que um cliente entre em cada um deles.

Esse artigo tem como finalidade mostrar, tecnicamente, como configurar seu CRM para a criação de um cluster.

<ol start="1">
    <li>O primeiro passo é criar um campo no MasterData com o nome do cluster que deseja. Ex.: Revendedores. Assim, serão destacados os clientes que são revendedores, recebendo uma promoção exclusiva, por exemplo. [Acesse nosso manual de como criar um campo.](https://help.vtex.com/tutorial/como-crio-um-campo-no-master-data)</li>
</ol>

> ℹ️ Para que um cluster funcione corretamente em uma promoção, defina o novo campo personalizado criado como **pesquisável** e **filtrável** no MasterData.

<ol start="2">
    <li>O segundo é criar esse campo no formulário, para que seja possível ver os dados. [Para isso, veja nosso manual.](https://help.vtex.com/tutorial/como-crio-um-campo-no-master-data)</li>
</ol>

Ou seja, tecnicamente, um cluster no CRM nada mais é do que um campo.

Para popular esse campo, você pode usar [planilha de importação](https://help.vtex.com/pt/tutorial/importando-dados-no-master-data/ "Importar dados no Master Data"), API ou fazer isso manualmente pelo formulário de Cliente dentro do CRM. Tudo vai depender da estratégia da loja sobre a clusterização de seus clientes.

## Saiba mais

- [Saiba como criar uma promoção para um cluster](/pt/tutorial/criando-promocao-para-um-cluster-de-clientes)
