---
title: 'Incluir um registro em um formulário do Master Data'
id: tutorials_6264
status: PUBLISHED
createdAt: 2017-04-27T21:48:37.277Z
updatedAt: 2023-03-28T23:17:17.849Z
publishedAt: 2023-03-28T23:17:17.849Z
firstPublishedAt: 2017-04-27T23:11:18.994Z
contentType: tutorial
productTeam: Master Data
author: authors_35
slug: como-incluir-um-registro-em-um-formulario-do-master-data
legacySlug: como-incluir-um-registro-em-um-formulario-do-master-data
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

Para incluir um registro, basta acessar o módulo Master Data e escolher a aplicação que você deseja visualizar.

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

Vamos dizer, por exemplo, que voce deseje editar as informações de um cliente da sua loja.

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. No Master Data, clique em **Aplicações**.
3. Dentro da aplicação **Profile System**, escolha o formulário **Clientes**.![IncluirRegistro1](//images.contentful.com/alneenqid6w5/RnwtCnfBccYk06g8se4OE/94fbce274f877694e8f4cbd09e44e9ba/IncluirRegistro1.png)
4. Busque o usuário pelo campo **E-mail** (ou outro campo definido na entidade de dados como buscável).
5. Clique em **Editar** uma vez dentro do cadastro do usuário.![IncluirRegistro2](//images.contentful.com/alneenqid6w5/2KvY5k3iTSI8CsEaG4mkyq/546835e1a58293c1d3c350733c5e7f7e/IncluirRegistro2.png)
6. Faça a edição desejada e clique em **Salvar**.

As informações apresentadas neste exemplo vêm da da entidade de dados **CL**, e seus campos podem ser configurados como editáveis ou não diretamente na entidade de dados.

Para acessar essa área, é necessário entrar no **Dynamic Storage**, que fica no seguinte endereço: https://_NOMEDALOJA_.ds.vtexcrm.com.br
