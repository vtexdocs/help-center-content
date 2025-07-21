---
title: "Não é possível remover um valor de atributo de tipo texto por WebService para um produto"
id: 3jyqCliMA8026y2GgwQoyG
status: PUBLISHED
createdAt: 2018-01-02T21:22:34.885Z
updatedAt: 2022-12-22T20:46:03.803Z
publishedAt: 2022-12-22T20:46:03.803Z
firstPublishedAt: 2018-01-03T14:15:26.277Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Web Service
slugEN: nao-e-possivel-remover-um-valor-de-atributo-de-tipo-texto-por-webservice-para-um-produto
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Quando de um produto específico se tenta remover pelo WebService o valor de um dos seus atributos de tipo texto, a resposta indica que é obrigatório ter um valor, mas pela interface de usuário é possível fazer a alteração. Quando você quiser automatizar a integração para remover atributos já associados, não é possível por esse motivo.


## Simulação

1. Fazer uma chamada ao WS ProductEspecificationInsert, indicando o idProduct e seu fieldName corretos.
2. Dentro de fieldValues, deixe vazio o string, simulando remover o valor do atributo.
3. Execute a chamada ao webservice e, logo depois, é possível ver o erro indicando que o valor do atributo não pode estar vazio.


## Workaround

É possível remover o valor do atributo desejado a partir da interface de usuário do administrador de Produto. Você deverá entrar ao produto, identificar o atributo e apagar o valor carregado. Em seguida, salve as alterações e o valor removido será atualizado.


