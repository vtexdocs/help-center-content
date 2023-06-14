---
title: 'Tempo limite das coleções herdadas do CMS'
id: 3TgWP83kn8G8NClnUHmaoS
status: PUBLISHED
createdAt: 2022-02-25T12:33:00.051Z
updatedAt: 2023-05-19T18:23:32.371Z
publishedAt: 2023-05-19T18:23:32.371Z
firstPublishedAt: 2022-02-25T12:33:00.399Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: tempo-limite-das-colecoes-herdadas-do-cms
locale: pt
kiStatus: Backlog
internalReference: 434026
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Frequentemente, ao tentar salvar os dados de um grupo de coleções usando o aplicativo de coleções legado, no caminho /admin/a e ao tentar salvar o grupo, o usuário, em casos de catálogos grandes (grande quantidade de categorias, marcas, produtos), recebe uma mensagem de erro de tempo limite e não consegue salvar as alterações.

`{account}.myvtex.com/admin/a/`

 ![](https://vtexhelp.zendesk.com/attachments/token/pBcpo1sWfBMio0mpL5iMc4Iek/?name=inline-1265713773.png)

## Simulação


1) Acesse o aplicativo CMS UI usando uma loja que tenha uma base de catálogo grande, por exemplo, >10000 produtos.
2) Vá para "Product Clusters (Collections)" (Grupos de produtos (coleções)) e selecione "_new group_" (novo grupo)
3) Crie um grupo e, em seguida, marque algumas caixas de seleção no formulário
4) Tente salvar essas alterações
5) Se a solicitação demorar mais de 50 segundos para ser salva, o que geralmente acontece em contas com uma grande quantidade de dados, a solicitação será interrompida e os dados não serão salvos

## Workaround


Use o novo administrador de coleções OU use nossos pontos de extremidade da API de coleções: https://developers.vtex.com/vtex-rest-api/reference/collection-cms





