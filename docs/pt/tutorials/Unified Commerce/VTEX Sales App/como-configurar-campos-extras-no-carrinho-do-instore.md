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
slugEN: how-to-configure-extra-fields-in-instore-cart
locale: pt
legacySlug: como-configurar-campos-extras-no-carrinho-do-instore
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

A configuração de campos extras no carrinho do inStore permite que as especificações dos produtos possam ser utilizadas no processo de emissão da nota fiscal do pedido.

Para criar os campos extras, siga os passos abaixo:

1. Consulte a configuração atual da loja por meio da requisição GET no endpoint [Get orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/getorderformconfiguration). Salve as informações do JSON retornado da requisição.

Exemplo utilizado para a loja "inStore":
![2017-08-14 20 12 34-Postman](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Unified Commerce/VTEX Sales App/como-configurar-campos-extras-no-carrinho-do-instore_1.png)
    2. Faça uma requisição POST utilizando o endpoint [Update orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/updateorderformconfiguration) com os mesmos dados salvos do JSON, e acrescente os campos extras (`fields`) com as informações dentro da propriedade `apps`.

Exemplo de requisição POST:

![2017-08-14 20 11 18-Postman](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Unified Commerce/VTEX Sales App/como-configurar-campos-extras-no-carrinho-do-instore_2.png)
