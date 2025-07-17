---
title: "A propriedade DefaultValue não é atualizada na API de especificação"
id: 6qNrQvBzrXMfVRdC2RGGOm
status: PUBLISHED
createdAt: 2025-05-14T16:25:21.841Z
updatedAt: 2025-05-14T16:25:22.706Z
publishedAt: 2025-05-14T16:25:22.706Z
firstPublishedAt: 2025-05-14T16:25:22.706Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-propriedade-defaultvalue-nao-e-atualizada-na-api-de-especificacao
locale: pt
kiStatus: Backlog
internalReference: 1226096
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a API para atualizar as especificações https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/specification/-specificationId-, em seus dados documentados, apresenta o campo DefaultValue como uma possível propriedade que pode ser atualizada.

Entretanto, a alteração desse campo após a criação da especificação não produz resultados.

## Simulação


1 - Busque dados, usando o verbo GET na mesma rota, para uma especificação que tenha um DefaultValue registrado nela https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specification/-specificationId- OU crie uma especificação com um.

2 - Usando o corpo da resposta como carga útil, tente alterar o campo DefaultValue

3 - O corpo da resposta não mostrará nenhuma alteração, apesar de o corpo da solicitação informado ser diferente

## Workaround


Altere manualmente esses valores por meio da UI do administrador.





