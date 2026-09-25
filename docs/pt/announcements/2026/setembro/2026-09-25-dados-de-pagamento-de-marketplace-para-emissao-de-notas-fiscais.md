---
title: 'Dados de pagamento de marketplace para notas fiscais passam a vir em paymentData'
createdAt: '2026-09-25T15:00:00.000Z'
updatedAt: '2026-09-25T15:00:00.000Z'
contentType: updates
productTeam: Channels
slugEN: 2026-09-25-marketplace-payment-data-for-invoice-issuance
locale: pt
announcementSynopsisPT: 'Pedidos de marketplace passam a trazer em paymentData os dados de pagamento usados na nota fiscal (NT 2025.001).'
tags:
  - Breaking change
  - Pedidos
  - Integrações
---

Pedidos criados em marketplace passam a receber, em `paymentData`, os dados de pagamento operados pelo marketplace. O lojista usa esses dados para preencher a nota fiscal, conforme a NT 2025.001.

Acesse a [nota técnica completa](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=trSXReoZPuY=).

> ⚠️ Esses dados preenchem a nota fiscal. Eles não autorizam, capturam, estornam nem liquidam pagamento no Gateway da conta.

## O que mudou?

Anteriormente, os dados de pagamento eram gravados em `customApps`, que não aceita atualização depois do `placeOrder`. Isso fazia com que pedidos com pagamento assíncrono, como Pix e boleto, só pudessem ser integrados depois da confirmação do pagamento, e o estoque não era reservado nesse intervalo. Esse formato está descrito no anúncio [Novos campos obrigatórios para emissão de notas fiscais](/pt/announcements/2025-08-29-novos-campos-obrigatorios-para-emissao-de-notas-fiscais) e na [release note](https://developers.vtex.com/updates/release-notes/2025-08-29-orders-api-support-for-nt-2025-001-fields) do endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-).

A VTEX passa a gravar os mesmos dados em `paymentData` do pedido. Cada pagamento operado pelo marketplace corresponde a um item de `paymentData.payments[]`. Veja abaixo os campos correspondentes:

| Dado da nota fiscal | Campo anterior em `customApps` | Campo em `paymentData` |
| --- | --- | --- |
| Meio de pagamento | `marketplacePaymentMethods` | `group`, `paymentSystem` e `paymentSystemName` |
| Bandeira do cartão | `marketplacePaymentCreditCardBrands` | `paymentSystemName` |
| Código de autorização | `marketplacePaymentAuthorizationCodes` | `connectorResponses.authId` |
| CNPJ da credenciadora | `marketplacePaymentCnpjAcquirers` | `connectorResponses.acquirerCnpj` |

Quando o nome enviado pelo marketplace corresponde a um meio de pagamento da VTEX, `paymentSystem` recebe o id desse meio e `group` recebe o grupo correspondente, como `creditCard`. Quando não há correspondência, `paymentSystem` fica `"0"`, `paymentSystemName` mantém o nome enviado pelo marketplace e `group` fica `promissory`. Os valores seguem sem padronização: o mesmo meio pode chegar como `CARD`, `Credit Card` ou `credit_card`.

`connectorResponses` pode incluir `Message`, com a indicação de que o valor foi assumido pelo afiliado. Esse texto não é resultado de uma operação do Gateway.

```json
{
  "payments": [
    {
      "paymentSystem": "0",
      "paymentSystemName": "Mastercard",
      "value": 100000,
      "installments": 1,
      "referenceValue": 100000,
      "group": "creditCard",
      "connectorResponses": {
        "acquirerCnpj": "01425787000104",
        "authId": "01010202"
      }
    }
  ]
}
```

`value` e `referenceValue` estão em centavos.

### Pedidos com pagamento assíncrono

Com `paymentData`, a integração pode criar o pedido antes da confirmação do Pix ou do boleto e preencher os dados fiscais quando o marketplace aprovar o pagamento. Até essa atualização, o pedido pode existir sem esses campos.

### Responsabilidade compartilhada para marketplaces

Os conectores listados na tabela já enviam `paymentData` com os dados de pagamento exigidos pela NT 2025.001 para a emissão da nota fiscal. Se o marketplace ainda não tiver disponibilizado essas informações, a nota fiscal poderá ser rejeitada.

| Marketplace        | API disponibilizada | Data disponível VTEX | Status |
|--------------------|---------------------|----------------------|--------|
| Amazon FBAOS       | 28/08/2025 | 29/08/2025 | Disponível |
| Amazon MFN         | 01/09/2025 | 01/09/2025 | Disponível |
| Mercado Livre      | 29/08/2025 |29/08/2025  | Disponível |
| Shopee             | 27/08/2025 | 29/08/2025 | Disponível |
| Dafiti Cartão      | 26/08/2025 | 28/08/2025 | Disponível |
| Dafiti Pix         | 18/09/2025 | 30/09/2025 | Disponível |
| Magalu             | 02/09/2025 | 03/09/2025 | Disponível |
| Netshoes           | 01/09/2025 | 09/09/2025 | Disponível |
| Grupo CasasBahia   | 05/09/2025 | 05/09/2025 | Disponível |
| Carrefour          | 05/09/2025 | 08/09/2025 | Disponível |
| Livelo             | 05/09/2025 | 03/10/2025 | Em desenvolvimento |
| Americanas (B2W)   | Não disponível | Sem data definida | Aguardando marketplace |
| Centauro           | Não disponível | Sem data definida | Aguardando marketplace |
| Posthaus           | Não disponível | Sem data definida | Aguardando marketplace |

> ⚠️ Os marketplaces que não estão listados acima não têm suas integrações controladas pela VTEX. Nesses casos, é necessário contatar diretamente o integrador responsável.

## O que precisa ser feito?

Verifique com seu integrador ou marketplace se os campos exigidos pela NT 2025.001 estão sendo enviados. Quando o pedido trouxer `paymentData`, o ERP ou o emissor fiscal deve ler os campos dessa seção. Nos conectores que ainda enviam apenas `customApps`, continue consumindo esses campos até a migração.

Em caso de dúvidas, entre em contato com o [Suporte VTEX](https://support.vtex.com/).
