---
title: 'Como configurar campos extras no carrinho do inStore'
id: CDIG0jT2ak6eCOGKgOc0i
status: ARCHIVED
createdAt: 2017-08-14T23:05:34.624Z
updatedAt: 2022-09-16T17:09:43.790Z
publishedAt: 
firstPublishedAt: 2017-08-14T23:19:38.584Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slug: como-configurar-campos-extras-no-carrinho-do-instore
locale: pt
legacySlug: como-configurar-campos-extras-no-carrinho-do-instore
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

A configuração de campos extras no carrinho do inStore permite que as especificações dos produtos possam ser utilizadas no processo de emissão da nota fiscal do pedido.

Para criar os campos extras, siga os passos abaixo:

1. Consulte a configuração atual da loja por meio da requisição GET no endpoint [Get orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/getorderformconfiguration). Salve as informações do JSON retornado da requisição.

Exemplo utilizado para a loja "inStore":
![2017-08-14 20 12 34-Postman](https://images.contentful.com/alneenqid6w5/6I61we4oF2AMkgcIAMgEo/772e7d2b045312f1f5c76b4d8eb9d30f/2017-08-14_20_12_34-Postman.png)
    2. Faça uma requisição POST utilizando o endpoint [Update orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/updateorderformconfiguration) com os mesmos dados salvos do JSON, e acrescente os campos extras (`fields`) com as informações dentro da propriedade `apps`.

Exemplo de requisição POST:

![2017-08-14 20 11 18-Postman](https://images.contentful.com/alneenqid6w5/6QIwIi5IBiy4qCyu2qseey/538d03ceb7f47ea0e47eb8047b931da6/2017-08-14_20_11_18-Postman.png)
