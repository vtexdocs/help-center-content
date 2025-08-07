---
title: 'A API de marca PUT não atualiza a propriedade "LinkID'
id: 7IK10cFmwCLVUdroqFNXYp
status: PUBLISHED
createdAt: 2025-05-07T16:06:45.066Z
updatedAt: 2025-05-07T16:06:45.722Z
publishedAt: 2025-05-07T16:06:45.722Z
firstPublishedAt: 2025-05-07T16:06:45.722Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-api-de-marca-put-nao-atualiza-a-propriedade-linkid
locale: pt
kiStatus: Backlog
internalReference: 1222015
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a API disponível para atualizar os dados da marca não está recebendo as informações para atualizar corretamente a propriedade "LinkId".

Se os dados forem enviados modificando essas informações no corpo da solicitação, a resposta da API será exibida como se tivesse sido atualizada, mas, na realidade, nada foi alterado.

## Simulação


1 - Para uma marca existente, atualize seus dados de linkId usando a API mencionada anteriormente.

2 - Verifique o corpo da resposta, que mostrará falsamente que os dados foram atualizados.

3 - Use a API GET Brand and Context para buscar os dados e eles não terão sido atualizados https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/brand/-brandId-



## Workaround


A única solução alternativa é criar uma nova marca com o linkId já correto





