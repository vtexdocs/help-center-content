---
title: "O comerciante não consegue abrir uma conta para alguns clientes na API de crédito ao cliente"
id: 4NGCingtQxzFV1gMbxFzT1
status: PUBLISHED
createdAt: 2023-09-25T13:22:58.063Z
updatedAt: 2023-09-25T13:22:58.651Z
publishedAt: 2023-09-25T13:22:58.651Z
firstPublishedAt: 2023-09-25T13:22:58.651Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: o-comerciante-nao-consegue-abrir-uma-conta-para-alguns-clientes-na-api-de-credito-ao-cliente
locale: pt
kiStatus: Backlog
internalReference: 906509
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Por algum motivo, ao tentar abrir uma nova conta para clientes específicos por meio da API, ele retorna o seguinte erro:

{
"code": 1099,
"message": "A conta de crédito já está aberta".
}


Nesse cenário, os dados do cliente (nome, documento etc.) nunca foram usados antes em nenhuma outra conta.

## Simulação


Isso ocorre de forma inconsistente, portanto, só ocorrerá a cada duas tentativas.



## Workaround


Crie a conta por meio da interface do usuário do administrador.





