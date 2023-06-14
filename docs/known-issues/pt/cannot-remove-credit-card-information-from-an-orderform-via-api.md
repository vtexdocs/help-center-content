---
title: 'Não é possível remover as informações de cartão de crédito de um orderForm via API'
id: 2EEKXZk35YE9nb0L3A8TUF
status: PUBLISHED
createdAt: 2021-09-13T23:41:59.223Z
updatedAt: 2022-12-22T20:41:11.317Z
publishedAt: 2022-12-22T20:41:11.317Z
firstPublishedAt: 2021-09-13T23:45:57.194Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: nao-e-possivel-remover-as-informacoes-de-cartao-de-credito-de-um-orderform-via-api
kiStatus: Backlog
internalReference: 
---

## Sumário

Não é possível remover as informações de cartão de crédito de um [`orderForm`](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview), através da rota `/api/checkout/pub/orderForm/{orderFormId}/paymentAccount/{accountId}/remove` caso utilize `appKey`/`appToken` como credenciais.

Quando uma `appKey` que possui as [permissões](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) adequadas realiza uma requisição para esta rota, a API retorna um erro com `status 500`:
"Attempted to perform an unauthorized operation."

Note que não é um erro com `status 403`, como de costume para falhas de autorização.

## Simulação

1. [Create an orderForm;](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#newshoppingcart)
2. [Enter the email address of a customer](https://developers.vtex.com/vtex-rest-api/reference/cart-attachments#addclientprofile) who has a credit card saved in their profile;
3. Try deleting the credit card information using the API route mentioned above, authenticating the request with `appKey`/`appToken`;
4. Notice that the error occurs and that the credit card information has not been deleted.

## Workaround

Atualmente não existe workaround.

