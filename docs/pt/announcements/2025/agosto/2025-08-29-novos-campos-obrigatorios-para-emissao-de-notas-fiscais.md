---
title: 'Novos campos obrigatórios para emissão de notas fiscais'
id: 5jDozNwc272jtq92dvKQkq
status: PUBLISHED
createdAt: 2025-08-29T23:29:00.226Z
updatedAt: 2025-09-30T17:22:53.181Z
publishedAt: 2025-09-30T17:22:53.181Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: 2025-08-29-new-mandatory-fields-for-invoice-issuance
locale: pt
legacySlug: novos-campos-obrigatorios-para-emissao-de-notas-fiscais
announcementImageID: 'undefined'
announcementSynopsisPT: 'Pedidos de marketplace trazem em paymentData os dados de pagamento usados na nota fiscal (NT 2025.001).'
tags:
  - Breaking change
  - Pedidos
  - Integrações
---

A NT 2025.001 é uma Nota Técnica que detalha mudanças nos documentos fiscais eletrônicos no Brasil (NF-e, NFC-e, CT-e, MDF-e.) em função da Reforma Tributária.
Por isso a VTEX implementou novos campos que serão utilizados pelos sistemas de geração de Nota Fiscal.

> ℹ️ Acesse a [nota técnica completa](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=trSXReoZPuY=).

> ⚠️ **Atualização:** em pedidos criados em marketplace, os dados de pagamento usados na nota fiscal passam a ser gravados em `paymentData`. Esses dados preenchem a nota fiscal do lojista. Eles não autorizam, capturam, estornam nem liquidam pagamento no Gateway da conta. O envio em `customApps` continua apenas nos conectores que ainda não migraram.

## O que mudou?

A VTEX passou a disponibilizar novos campos nos pedidos para atender às exigências da NT 2025.001. Esses campos são obrigatórios para a emissão de notas fiscais e garantem que não haja rejeição durante o processo. Agora, os pedidos incluem:

- Meio de pagamento utilizado 
- CNPJ da credenciadora (empresa responsável pelo processamento do pagamento)
- Código de autenticação/autorização da operação
- Bandeira do cartão de crédito ou débito (quando aplicável)

A primeira entrega gravou esses dados em `customApps`. A [release note de 29/08/2025](https://developers.vtex.com/updates/release-notes/2025-08-29-orders-api-support-for-nt-2025-001-fields) descreve esse formato. A leitura atual para a nota fiscal está na seção **Dados de pagamento em paymentData**.

### Responsabilidade compartilhada para marketplaces

A VTEX já está preparada para receber esses novos campos. No entanto, se o marketplace ainda não tiver disponibilizado essas informações, a nota fiscal poderá ser rejeitada.

Acompanhe na tabela abaixo o status de cada integração:

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

A tabela acima registra quando cada marketplace passou a enviar os dados da NT 2025.001. A migração desses dados de `customApps` para `paymentData` é outra etapa: nem todo conector já envia `paymentData`.

## Dados de pagamento em paymentData

Cada pagamento operado pelo marketplace corresponde a um item de `paymentData.payments[]`, consultado no endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-). No formato anterior, vários pagamentos vinham concatenados com `|` na mesma string de `customApps`. Na Dafiti, esses nomes iam no singular.

| Dado da nota fiscal | Campo anterior em `customApps` | Campo em `paymentData` |
| --- | --- | --- |
| Meio de pagamento | `marketplacePaymentMethods` | `group`, `paymentSystem` e `paymentSystemName` |
| Bandeira do cartão | `marketplacePaymentCreditCardBrands` | `paymentSystemName` |
| Código de autorização | `marketplacePaymentAuthorizationCodes` | `connectorResponses.authId` |
| CNPJ da credenciadora | `marketplacePaymentCnpjAcquirers` | `connectorResponses.acquirerCnpj` |

Quando o nome enviado pelo marketplace corresponde a um meio de pagamento da VTEX, `paymentSystem` recebe o id desse meio e `group` recebe o grupo correspondente, como `creditCard`. Quando não há correspondência, `paymentSystem` fica `"0"`, `paymentSystemName` mantém o nome enviado pelo marketplace e `group` fica `promissory`. Os valores seguem sem padronização: o mesmo meio pode chegar como `CARD`, `Credit Card` ou `credit_card`.

`connectorResponses` pode incluir `Message`, com a indicação de que o valor foi assumido pelo afiliado. Esse texto não é resultado de uma operação do Gateway. Neste fluxo, os campos da nota fiscal são `acquirerCnpj` e `authId`.

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

Pix e boleto confirmam o pagamento depois da criação do pedido. `customApps` não aceita atualização depois do `placeOrder`, então os dados fiscais só podiam ser gravados com o pagamento já confirmado, e o estoque não era reservado nesse intervalo.

Com `paymentData`, a integração pode criar o pedido antes da confirmação e preencher os dados fiscais quando o marketplace aprovar o pagamento. Até essa atualização, o pedido pode existir sem esses campos. Nem todo conector já envia `paymentData`, e não há uma data única de desligamento de `customApps`.

## O que precisa ser feito?

Verifique com seu integrador ou marketplace se os campos exigidos pela NT 2025.001 estão sendo enviados. Quando o pedido trouxer `paymentData`, o ERP ou o emissor fiscal deve ler os campos dessa seção. Nos conectores que ainda enviam apenas `customApps`, continue consumindo esses campos até a migração.  

Em caso de dúvidas, entre em contato com o [Suporte VTEX](https://support.vtex.com/).  

