---
title: "Coleções Legadas (CMS) A Validação de Caráteres Especiais diverge das Coleções Novas"
id: 2Pc1VACj7VF9n1IDtO6Mr4
status: PUBLISHED
createdAt: 2022-10-31T20:38:49.460Z
updatedAt: 2022-12-20T16:28:44.401Z
publishedAt: 2022-12-20T16:28:44.401Z
firstPublishedAt: 2022-10-31T20:38:50.012Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: colecoes-legadas-cms-a-validacao-de-carateres-especiais-diverge-das-colecoes-novas
locale: pt
kiStatus: Backlog
internalReference: 450569
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente, se um usuário cria uma coleção usando o novo administrador de coleção usando caracteres especiais, estes mesmos dados são listados no aplicativo CMS legado.

Entretanto, ao tentar editar uma subcoleta com este nome dado na IU, há uma validação que impede o usuário de salvar qualquer nome com caracteres especiais que não exista na nova aplicação.

Este comportamento pode levar o usuário a pensar erroneamente que os itens foram adicionados à coleção via ação de IU.


* * *


#

## Simulação


1) Criar uma nova coleção através da guia Colecções (beta admin)

2) Em seu nome, use caracteres especiais, tais como **%!@#$%***3) Depois de criar esta coleção vá para CMS --> Procut Clusters (Colecções) --> Selecione a coleção criada automaticamente

4) Tente inserir quaisquer novos dados e depois clique em salvar.

5) Um prompt de validação de caráter especial será exibido e nenhum dado será salvo.

 ![](https://vtexhelp.zendesk.com/attachments/token/pwqKP9iXeEaIFRjUGN93jwOOw/?name=inline773082053.png)



* * *


#

## Workaround


Mude os nomes das subcoleções após sua criação para valores sem caracteres especiais e depois salve.

OU

Inserir novos itens através das APIs das coleções legadas https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku-subcollection#catalog-api-post-subcollection-sku

