---
title: "Criação de redirecionamentos errados contendo caracteres/consultas que não deveriam ser carregados o upload/download do csv por meio da CLI não funciona"
id: 6ShJSvo6g8ZJFaejSo0gx3
status: PUBLISHED
createdAt: 2024-01-25T19:00:17.586Z
updatedAt: 2024-01-25T19:00:18.204Z
publishedAt: 2024-01-25T19:00:18.204Z
firstPublishedAt: 2024-01-25T19:00:18.204Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: criacao-de-redirecionamentos-errados-contendo-caracteresconsultas-que-nao-deveriam-ser-carregados-o-uploaddownload-do-csv-por-meio-da-cli-nao-funciona
locale: pt
kiStatus: No Fix
internalReference: 971936
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Após criar redirecionamentos incorretos contendo caracteres que não devem ser carregados, ou seja, #, consultas ou redirecionamentos que devem ser criados no nível do servidor, o upload/download em massa do csv por meio da CLI não funciona mais: #, consultas ou redirecionamentos que devem ser criados no nível do servidor, o upload/download em massa do csv por meio da CLI não funciona mais.

## Simulação


Crie um redirecionamento para uma consulta, por exemplo: /?binding=XXXXX
Exclua o redirecionamento pelo IDE do Graphql (você não conseguirá excluir de outra forma)
Tente fazer download ou upload do CSV dos redirecionamentos por meio da CLI e você conseguirá fazer isso.

 ![](https://vtexhelp.zendesk.com/attachments/token/etn94WlrSAYOFFj0rZfVwoowE/?name=image.png

## Workaround


No momento, não há solução alternativa para isso e o download em massa da CLI não poderá ser usado.





