---
title: 'Como o ERP diferencia um pedido normal do pedido recorrente?'
id: frequentlyAskedQuestions_4690
status: DRAFT
createdAt: 2019-01-24T20:46:01.256Z
updatedAt: 2021-04-30T14:38:46.094Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:06:32.659Z
contentType: tutorial
productTeam: Others
author: authors_61
slug: como-o-erp-diferencia-um-pedido-normal-do-pedido-recorrente
legacySlug: como-o-erp-diferencia-um-pedido-normal-do-pedido-recorrente
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

A diferença está no json de integração do pedido com o ERP.

No pedido de contratação da recorrência, o parâmetro “__itemAttachment__” vai informar a periodicidade (ex.: “__período__”: “__Semanal__”) e o parâmetro “__attachments__” informará o tipo de anexo “__Recorrência__”.

No pedido recorrente, gerado de forma automática, os parâmetros acima não são preenchidos, pois são informações da contratação do serviço. Mas a tag “__openTextField__” vai possuir valor = “__Order Created By VTEX Recurrence System__”.

São essas informações que diferenciam o pedido normal do pedido com recorrência.

