---
title: 'Configurar o App Linking para app de pagamentos no inStore'
id: 5WERznsnLO6qqoSOsoMSK4
status: DRAFT
createdAt: 2018-02-26T16:53:07.497Z
updatedAt: 2021-05-19T14:56:43.872Z
publishedAt: 
firstPublishedAt: 2018-02-26T20:04:50.239Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: setting-up-app-linking-for-payments-app-in-instore
locale: pt
legacySlug: configurar-o-app-linking-para-pagamentos-no-instore
subcategoryId: unknown-subcategory
---

Este artigo tem como objetivo explicar como a app do inStore configura o AppLinking para as ações de `payment` e `payment-reversal` com as apps dos adquirentes.

![Payment app](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Untitled%20category/Untitled%20subcategory/configurar-o-app-linking-para-pagamentos-no-instore_1.png)

## Campos de configuração

### Geral

Todos os adquirentes devem ter:

- `acquirerProtocol`: string - o protocolo do AppLinking, ou seja, o scheme do app de pagamento. Ex: `stone`, `cielo-lio`, `cappta`.
- `scheme`: string - o padrão é `instore`. O scheme ao qual o `Intent` da app de pagamento responderá.
- `autoConfirm`: boolean - o  padrão é `True`. Indica ao app que não precisa pedir ao usuário nenhuma permissão adicional para completar a ação.
- `acquirerId`: string - ID de afiliação do adquirente que está registrado no [módulo de Pagamentos da VTEX](/pt/tutorial/configurar-o-app-linking-para-pagamentos-no-instore#configurar-conector-do-instore-no-pci-gateway-da-vtex). Ex: `<stone_code>`, `<sitef_storeId>`.

Se necessário, o inStore pode enviar informações adicionais. Exemplo com o subadquirente Cappta:

- `authKey`: string - por exemplo, `<cappta_authKey>`.
- `authPassword`: string - por exemplo, `<cappta_authPassword>`.
- `administrativePassword`: string - senha padrão. Por exemplo, `cappta`.
- `cnpj`: string.

>ℹ️ Para criar qualquer configuração extra, você precisa enviar para a equipe do inStore (instoredevs@vtex.com.br) os extras que a app precisa para concluir a transação. Assim, criaremos um formulário no módulo de Pagamentos para que o cliente possa configurar seu adquirente.

## URI de envio e URI de resposta para cada ação

Ação: `payment` ou `payment-reversal` (reembolsar um pagamento anterior).

&bull; Padrão de URI que é enviada pelo AppLinking:

```
<acquirerProtocol>://<action>?<params>
```

&bull; Padrão URI que é recebido pelo AppLinking:

```
instore://<action>?<response_params>
```

## Exemplos de URI de envio para cada ação

### - Exemplo para a ação `payment`

Contexto de pagamento que é usado para montar a URI (para que seja mais fácil de ler):

```json
{
  acquirerProtocol: "super-acquirer",
  action: "payment",
  acquirerId: "954090369",
  installmentType: 2, // 1: os juros para cada parcelam são aplicados pelo banco ou pelo cartão de crédito; 2: a loja é responsável pelos juros das parcelas
  installments: 3,
  paymentId: "1093019888",
  paymentType: "debit",  // também pode ser "credit"
  amount: 10, // As apps de pagamento geralmente esperam o valor em centavos (10 centavos neste exemplo)
  installmentsInterestRate: "1%" // se o pagamento não tiver taxa de juros, não deve estar no mobileLinkingUrl
  transactionId: "1093019039",
  scheme: "instore",
  urlCallback: "instore://payment",
  autoConfirm: "True",
  paymentSystem: 44,
  paymentSystemName: "Venda Direta Debito",
  paymentGroupName: "debitDirectSalePaymentGroup",
  sellerName: "instoreqa",
  payerEmail: 'customeremail@gmail.com', // E-mail do cliente
  payerIdentification: '12345678909', // CPF do cliente
  mobileLinkingUrl: "super-acquirer://payment?acquirerId=954090369&paymentId=1093019888&paymentType=debit&amount=10&installments=3&transactionId=1093019039&autoConfirm=True&scheme=instore&urlCallback=instore://payment"
}
```

URI final que a app de pagamento receberá para executar a ação de pagamento com o contexto do exemplo acima:

```
super-acquirer://payment?acquirerProtocol=super-acquirer&action=payment&acquirerId=954090369&installmentType=2&installments=3&paymentId=1093019888&paymentType=debit&amount=10&installmentsInterestRate=1%&transactionId=1093019039&paymentSystem=44&paymentSystemName=Venda%20Direta%20Debito&paymentGroupName=debitDirectSalePaymentGroup&sellerName=instoreqa&payerIdentification=12345678909&payerEmail=customeremail%40gmail.com&scheme=instore&urlCallback=instore://payment&autoConfirm=True
```

Com os valores presentes nessa URI, será possível reembolsar esse pagamento.

### - Exemplo para a ação `payment-reversal` (reembolso):

Contexto do reembolso que é usado para montar o URI (para que seja mais fácil de ler):

```json
{
  acquirerProtocol: "super-acquirer",
  action: "payment-reversal",
  acquirerAuthorizationCode: "86273634-3a05-4f0a-a430-f55ed3f21eab", // código de autorização do pagamento
  acquirerId: "954090369",
  transactionId: "1093019039",
  paymentId: "1093019888",
  acquirerTid: "1093019888",
  administrativeCode: "11010103033", // este valor deve ser recebido do pagamento e é salvo no PCI Gateway da VTEX.
  autoConfirm: "True",
  sellerName: "instoreqa",
  scheme: "instore",
  urlCallback: "instore://payment-reversal",
  mobileLinkingUrl: "super-acquirer://payment-reversal?acquirerAuthorizationCode=86273634-3a05-4f0a-a430-f55ed3f21eab&acquirerId=954090369&paymentId=1093019888&transactionId=1093019039&autoConfirm=True&scheme=instore&urlCallback=instore://payment-reversal"
}
```

URI final que a app de pagamento receberá para executar a ação de reembolso com o contexto do exemplo acima:

```
super-acquirer://payment-reversal?acquirerAuthorizationCode=86273634-3a05-4f0a-a430-f55ed3f21eab&acquirerId=954090369&transactionId=1093019039&paymentId=1093019888&acquirerTid=1093019888&administrativeCode=11010103033&autoConfirm=True&sellerName=instoreqa&scheme=instore&urlCallback=instore://payment-reversal
```

>⚠️ **OBSERVAÇÃO:** Nem todos os parâmetros serão utilizados por todos os adquirentes/apps de pagamento. Exemplo: `transactionId`. Este parâmetro é o ID de uma transação na VTEX que identifica todos os pagamentos de um pedido completo no PCI Gateway da VTEX. Uma transação pode conter vários pagamentos, como quando um pedido é pago com vários cartões de crédito ou débito.

## Exemplos de URI de resposta para cada ação

### - Exemplo para a ação `payment`

URI:

```
Success: instore://payment?responsecode=0&<response_params>
Failed:  instore://payment?responsecode=110&reason=card+refused+by+acquirer&paymentId=<value_of_the_sender_URI>
```

Parâmetros de resposta:

- `scheme`: "instore"
- `action`: "payment"
- `paymentId`: string - identificação do pagamento na VTEX
- `cardBrandName`: string - nome da bandeira, como "mastercard", "visa" etc.
- `firstDigits`: string - BIN / IIN do cartão (seis primeiros números)
- `lastDigits`: string - quatro últimos números do cartão
- `acquirerName`: string - nome do adquirente - opcional
- `tid`: string - código de identificação da transação necessário para realizar uma ação de reembolso
- `acquirerAuthorizationCode`: string - código de autorização da transação gerado pela adquirente
- `nsu`: string - número sequencial único que identifica a operação de venda
- `merchantReceipt`: string - texto do recibo para o estabelecimento. Deve estar na URI
- `customerReceipt`: string - texto do recibo para o cliente. Deve estar na URI
- `responsecode`: int - `0` significa "sucesso"; valores maiores que `0` significam códigos de erro do adquirente, e nesse caso, o parâmetro `reason` será uma mensagem de erro
- `reason`: string - em caso de sucesso, o valor é vazio; em caso de erro, contém a mensagem de erro
- `success`: `true` ou `false` - gerado pela app dado o valor do `responsecode`

### Exemplo para a ação `payment-reversal` (reembolso):

URI:

```
Success: instore://payment-reversal?responsecode=0&<response_params>
Failed:  instore://payment-reversal?responsecode=110&reason=card+refused+by+acquirer&paymentId=<id_sent_previously>
```

Parâmetros de resposta:

- `scheme`: `instore`
- `action`: `payment-reversal`
- `paymentId`: string - Ex: `1093019888` - para identificar qual pagamento foi reembolsado
- `paymentAcquirerAuthorizationCode`: string - código de autorização que foi usado para a  ação de reembolso (`tid`)
- `acquirerAuthorizationCode`: string - código de autorização da transação gerado pela adquirente
- `merchantReceipt`: string - texto do recibo para o merchant. Deve estar na URI
- `customerReceipt`: string - texto do recibo para o cliente. Deve estar na URI
- `responsecode`: int - `0` significa "sucesso"; valores maiores que `0` significam códigos de erro do adquirente, e nesse caso, o parâmetro `reason` será uma mensagem de erro
- `reason`: string - em caso de sucesso, o valor é vazio; em caso de erro, contém a mensagem de erro
- `success`: `true` ou `false` - gerado pela app dado o valor do `responsecode`

## Configurar conector do inStore no módulo de Pagamentos da VTEX

Para que a integração funcione, é preciso que o cliente configure no módulo de Pagamentos (nosso backend de pagamento) o conector do inStore. Neste conector, o cliente deve escolher no campo __Acquirer__ qual adquirente ou app receberá o pagamento. Este cadastro deve conter todas as informações necessárias para que o adquirente possa realizar a transação. *Exemplo: Acquirer Id, Token etc.)*.

A integração do AppLinking não inclui outras dependências, uma vez que a comunicação entre o aplicativo inStore e o aplicativo de pagamento acontece com URIs específicas contendo todos os parâmetros de configuração e pagamento necessários para a ação.

>⚠️ No Android, toda comunicação deve acontecer com uma nova `Intent`. Isso significa que você não deve enviar a resposta como um retorno de chamada da `Intent` inicial. Em vez disso, você deve enviar um novo `Intent` ao aplicativo inStore com a resposta do anterior.

Para configurar o conector do InStore, você deve seguir os passos abaixo:

1. Acesse o módulo de __Pagamentos__.
2. Acesse __Configurações__.
3. Na aba __Afiliações de Gateways__, clicar no botão __+__.
4. Clicar no conector __InStore__.
5. No campo __Acquirer__, selecionar o adquirente que receberá o pagamento.
6. Preencher os outros campos de configuração do conector de acordo com as informações passadas pelo adquirente (*Tipo de parcelamento, Acquirer Id, Configurações Extras etc.* )

## Links adicionais

- [App para simular o App Linking](https://github.com/vtex/vtex-payment-test/)
- [App de exemplo para fazer um pagamento](https://github.com/vtex/payment-example-app)
