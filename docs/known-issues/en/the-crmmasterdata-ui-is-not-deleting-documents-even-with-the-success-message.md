---
title: 'The CRM/masterdata UI is not deleting documents even with the success message'
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
slug: the-crmmasterdata-ui-is-not-deleting-documents-even-with-the-success-message
kiStatus: No Fix
internalReference: 699374
---

## Summary


The CRM UI is not deleting documents, although the success message is shown.


##

## Simulation



- Access the application system (.vtexcrm.com.br)
- Select a view, like Clientes, click on ![](https://vtexhelp.zendesk.com/attachments/token/l2EMLx8PT4mDFNKGPAtZQVGxt/?name=image.png)
- Then, the system will show the documents that belong to the entity data selected
- Select one document and click on the delete button ![](https://vtexhelp.zendesk.com/attachments/token/ipkMJC5WWN1LRfeRAkxr7RUCG/?name=image.png)
- After that, the system will ask to confirm the action
- After the confirmation, the message "_Registro excluído com sucesso!_" is shown
- But the document is still listed when you click on the OK button


##

## Workaround


Doing this action via DELETE Document API:

- v1: https://developers.vtex.com/docs/api-reference/masterdata-api#delete-/api/dataentities/-acronym-/documents/-id-
- v2: https://developers.vtex.com/docs/api-reference/master-data-api-v2#delete-/api/dataentities/-dataEntityName-/documents/-id-





