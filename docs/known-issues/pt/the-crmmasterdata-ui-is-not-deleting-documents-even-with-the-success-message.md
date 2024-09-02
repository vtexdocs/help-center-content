---
title: 'A IU CRM/masterdata não está apagando documentos mesmo com a mensagem de sucesso'
id: 68de6QDUomjPPDXf9P14c3
status: PUBLISHED
createdAt: 2023-03-27T20:03:54.217Z
updatedAt: 2023-03-27T20:10:28.561Z
publishedAt: 2023-03-27T20:10:28.561Z
firstPublishedAt: 2023-03-27T20:03:54.901Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: a-iu-crmmasterdata-nao-esta-apagando-documentos-mesmo-com-a-mensagem-de-sucesso
locale: pt
kiStatus: No Fix
internalReference: 699374
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A IU CRM não está apagando documentos, embora a mensagem de sucesso seja mostrada.


##

## Simulação



- Acesse o sistema de aplicação (.vtexcrm.com.br)
- Selecione uma vista, como Clientes, clique em ![](https://vtexhelp.zendesk.com/attachments/token/l2EMLx8PT4mDFNKGPAtZQVGxt/?name=image.png)
- Em seguida, o sistema mostrará os documentos que pertencem aos dados da entidade selecionada
- Selecione um documento e clique no botão apagar ![](https://vtexhelp.zendesk.com/attachments/token/ipkMJC5WWN1LRfeRAkxr7RUCG/?name=image.png)
- Depois disso, o sistema pedirá para confirmar a ação
- Após a confirmação, é exibida a mensagem "_Registro excluído com sucesso!_".
- Mas o documento ainda está listado quando você clica no botão OK


##

## Workaround


Fazendo esta ação via DELETE Document API:

- v1: https://developers.vtex.com/docs/api-reference/masterdata-api#delete-/api/dataentities/-acronym-/documents/-id-
- v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#delete-/api/dataentities/-dataEntityName-/documents/-id-





