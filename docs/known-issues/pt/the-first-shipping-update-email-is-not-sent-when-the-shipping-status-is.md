---
title: O primeiro email de atualização de envio não é enviado com a primeira atualização
id: 55EJ7SR18hEeLXOP0TF9j3
status: PUBLISHED
createdAt: 2021-08-25T12:19:02.034Z
updatedAt: 2022-12-22T14:53:07.109Z
publishedAt: 2022-12-22T14:53:07.109Z
firstPublishedAt: 2021-08-25T22:23:26.627Z
contentType: knownIssue
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
tag: Message Center,Order Management
slug: o-primeiro-email-de-atualizacao-de-envio-nao-e-enviado-com-a-primeira
kiStatus: Backlog
internalReference: 
---

## Sumário

O primeiro email de atualização de envio não é enviado até que a segunda atualização de envio seja feita pela API, e apenas se essa segunda atualização for diferente da primeira.

## Simulação

1. Crie um pedido e siga o [fluxo normal](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) até o status **Faturado**
2. Envie uma atualização pela [API de atualização de envio](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus)
3. Note que o primeiro email de atualização de envio não é enviado
4. Envie outra atualização de envio idêntica à primeira
5. Note que o primeiro email de atualização de envio não é enviado
6. Crie outro pedido e siga o [fluxo normal](https://help.vtex.com/pt/tutorial/fluxo-de-pedido--tutorials_196) até o status **Faturado**
7. Envie uma atualização pela [API de atualização de envio](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus)
8. Note que o primeiro email de atualização de envio não é enviado
9. Envie outra atualização de envio que seja diferente da primeira
10. Note que o primeiro email de atualização de envio agora é enviado


## Workaround

Para contornar este problema, garanta que a segunda atualização enviada [API de atualização de envio](https://developers.vtex.com/vtex-rest-api/reference/tracking#updatetrackingstatus) é diferente da primeira. Dessa forma, o email deve ser enviado.

