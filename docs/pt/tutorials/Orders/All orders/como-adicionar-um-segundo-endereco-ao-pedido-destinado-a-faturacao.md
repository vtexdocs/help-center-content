---
title: 'Como adicionar um segundo endereço ao pedido destinado à faturação'
id: 6Mow9ibQPDOcEggNnujuA
status: ARCHIVED
createdAt: 2020-05-29T12:20:39.086Z
updatedAt: 2022-08-30T23:07:06.496Z
publishedAt: 
firstPublishedAt: 2020-05-29T12:32:19.734Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-add-a-second-address-to-the-order-for-invoicing-purposes
locale: pt
legacySlug: como-adicionar-um-segundo-endereco-ao-pedido-destinado-a-faturacao
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Para negócios B2B, cadastrar um endereço na Nota Fiscal que seja diferente daquele registrado para a entrega é um cenário comum, já que muitas vezes o local onde o produto é recebido difere do endereço de cobrança.

O painel administrativo da VTEX permite cadastrar um segundo endereço apenas nos casos de Pontos de Retirada - já que neste caso consideramos que não haverá um endereço de entrega, mas sim um para a Nota Fiscal.

Para outros cenários, como os referentes ao modelo B2B, sugerimos que a loja cadastre essa opção por meio de uma manipulação do objeto `orderForm`, do Checkout. 

O `orderForm` é o principal conjunto de dados do processo de checkout na VTEX.
Ele é composto de diversas seções, cada uma com informações úteis que podem ser acessadas e alteradas. 
Vamos, então, manipular alguns dados do `orderForm` para inserir um segundo endereço. Há duas maneiras de fazer isso: 
- Usando a biblioteca vtex.js.
- Por meio de um request à API de Checkout da VTEX.

>⚠️ Embora seja possível criar uma interface customizada sobreposta à da VTEX, contendo o segundo campo de endereço, não recomendamos que se faça isso.

## vtex.js

O vtex.js é uma biblioteca de funções JavaScript que farão o request à API por você. A função usada para isso é a `sendAttachment`. Confira a documentação e as ações necessárias na [documentação específica da biblioteca](https://github.com/vtex/vtex.js/tree/master/docs/checkout#sendattachmentattachmentid-attachment-expectedorderformsections).

## API REST

No objeto `orderForm` há um campo chamado `invoiceData`. Precisamos acessá-lo para incluir o segundo endereço. Dentro do campo `invoiceData` há o objeto `address`, que será alimentado com os dados do endereço.

Para acessá-lo, faça um POST para o seguinte endpoint, com um body como o do exemplo logo abaixo:

`/api/checkout/pub/orderForm/{{orderFormId}}/attachments/invoiceData`

```json
{
    "address": {
        "postalCode": "22250-040",
        "city": "Rio de Janeiro",
        "state": "RJ",
        "country": "BRA",
        "street": "Praia Botafogo",
        "number": "300",
        "neighborhood": "Botafogo",
        "complement": null,
        "reference": null,
        "geoCoordinates": [
            -43.18218231201172,
            -22.94549560546875
        ]
    }
}
```

O valor de `{{orderFormId}}`, na URL da chamada, deve ser substituído pelo ID do orderForm que se deseja manipular. E os dados do endereço, como mostra o exemplo, devem ser enviados no body do request.
