---
title: 'Configurar campos para emissão de nota fiscal no inStore'
id: 3DlxJlZI1Wqk2So6MGwWII
status: DRAFT
createdAt: 2018-03-13T19:40:22.188Z
updatedAt: 2022-09-13T21:24:23.416Z
publishedAt: 
firstPublishedAt: 2018-03-13T19:54:06.513Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: configurar-campos-para-emissao-de-nota-fiscal-no-instore
locale: pt
legacySlug: configurar-campos-para-emissao-de-nota-fiscal-no-instore
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

Para que a nota fiscal de um pedido feito pelo inStore tenha todos os campos necessários, é necessário configurar alguns campos extras no __orderForm__ do pedido. Além disso, estes campos extras permitem que o módulo de pedidos da VTEX identifique corretamente quando um pedido é realizado pelo inStore.

Para configurar estes campos extras, siga os passos abaixo:

- Faça um GET na rota `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`, onde `{AccountName}` é o nome da sua loja. Você deve utilizar os `x-vtex-api-appKey` e `x-vtex-api-appToken` da sua loja para realizar esta chamada.
- Salve a resposta deste GET em algum editor de texto.
- Você verá que a propriedade "apps" terá o valor de um array vazio (`[]`). Inclua dentro dos colchetes o snippet abaixo.

```json
     {
       "fields": [
  "cart-extra-context",
  "cart-type",
      ],
      "id": "cart-extra-context",
      "major": 1
      }
```

- Salve seu arquivo de texto.
- Faça um POST na rota `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`, onde `{AccountName}` é o nome da sua loja. Você deve utilizar os `x-vtex-api-appKey` e `x-vtex-api-appToken` da sua loja para realizar esta chamada. O body deste POST será todo o conteúdo do arquivo do passo anterior.

---

Agora o orderForm dos seus pedidos já possui os campos extras. Para checar se o POST ocorreu com sucesso, você pode realizar um GET na rota `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm` e verificar se a propriedade "apps" está salva com as novas informações.
