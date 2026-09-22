---
title: 'VTEX Sales App: configurar o arquivo checkout-instore-custom.js'
status: PUBLISHED
createdAt: 2026-09-22T21:43:00.000Z
updatedAt: 2026-09-22T21:43:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: vtex-sales-app-configuring-the-checkout-instore-custom-js-file
locale: pt
---

O `checkout-instore-custom.js` é o arquivo no qual você realiza configurações e customizações no **VTEX Sales App**, e este artigo descreve quais de suas propriedades podem ser configuradas. Para encontrar o arquivo, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout** ou digite **Checkout** no campo de busca.
2. Clique na engrenagem do campo **Default**.
3. Clique na aba **Código**.
4. Na seção **Arquivos**, você verá o arquivo `checkout-instore-custom.js`.

## Idioma e locale

- `window.LOCALE_MESSAGES.locale`: idioma usado no **Sales App**, como `'pt-br'`, `'en-us'` e `'es-es'`.

## Configuração por conta

- `window.INSTORE_CONFIG_BY_ACCOUNT`: objeto que mapeia lojas e contas para configurações específicas.
  - **Chave:** ID e nome da loja (ex: `"1"` e `"nomedaloja"`).
  - `name`: nome da conta.
- `accounts`: dentro do `INSTORE_CONFIG`, recebe `window.INSTORE_CONFIG_BY_ACCOUNT`. Liga o Sales App às lojas configuradas.

## Fluxo de checkout e navegação

- `enableNewCheckout`: ativa o novo fluxo de checkout do Sales App.
- `enableExplore`: ativa a tela com a experiência "Explore" (vitrine/anúncios).
- `initialPage`: define a página que abre primeiro após o login (ex: `'advertisements'`).
- `pathAfterLogin`: rota interna para onde o usuário é enviado depois de realizar o login (ex: `'/sale'`).
- `topbarTitle`: texto exibido na barra superior do Sales App (ex: `'Nome da loja'`).
- `enableChangePrice`: controla se o vendedor pode alterar preço manualmente no Sales App. Está relacionado ao campo `manualPrice` do [orderform](https://developers.vtex.com/docs/guides/orderform-fields).

## Autenticação

- `auth.oAuthProviderName`: nome do provedor de login OAuth usado (ex.: `'Google'`).

## Vendas e rastreio

- `sales.enabled`: habilita a funcionalidade de venda no Sales App.
- `salesAssociateTracking.enabled`: liga o rastreio de vendas por vendedor (associa pedidos a um código de vendedor).

## Pagamentos

- `challengeDrivenPaymentWorkflow`: ativa um fluxo de pagamento com etapas e validações adicionais (payment App).
- `payments.filters`: lista de IDs de meios de pagamento (`paymentSystemId`) que podem aparecer no checkout do Sales App. (Ex.: `'1'`, `'4'`, `'125'`, `'202'`, `'44'`, `'45'`, `'207'`, `'208'`, `'209'`).
- `newPaymentArchitectureEnabled`: define a bifurcação no fluxo de pagamento dentro do Sales App. Quando configurado como `true`, o Sales App usa a arquitetura na qual ele resolve o pagamento localmente sem chamar o endpoint do gateway.

## Código do vendedor (`noteAsVendorCode`)

- `noteAsVendorCode.type`: tipo de campo do código do vendedor, que pode ser `'text'`, `'input'` ou `'select'`.
- `noteAsVendorCode.skipValidation`: quando configurado como `false`, realiza a validação no código do vendedor, quando `true`, não realiza essa validação.
- `noteAsVendorCode.autofill`: quando configurado como `true`, tenta preencher automaticamente o código do vendedor, quando `false`, não tenta o preenchimento automático.

## Anexos e serviços

- `enableAttachments`: habilita serviços e anexos no fluxo de venda (ex: embalagem para presente).
- `giftPackagingName`: nome exibido para o serviço do serviço ou anexo em questão (ex: `'embalagem'`).

## Estoque e venda sem estoque

- `sellWithoutStockInHands`: permite vender produtos sem estoque local em lojas com configuração de vendas de estoque local (On Hands).

## Busca de produtos (`search`)

- `search.vtexSearch`: quando configurado como `true`, usa o [VTEX Search (Legado)](https://help.vtex.com/pt/docs/tutorials/como-funciona-vtex-search-legado) direto, quando `false`, usa o [Intelligent Search](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral), que é a busca padrão do Sales App.
- `search.filtersEnabled`: habilita filtros na interface de busca (ex: filtros de produto).
- `search.alternateIdRegex`: identifica a expressão regular (regex) usada para reconhecer IDs alternativos (ex: código de barras).

## Cancelamento de pedido

- `isCancelOrderAlwaysVisible`: mantém sempre visível na interface a opção de cancelar o pedido.

## Configuração de dispositivo / impressora

- `configureDeviceEnabled`: habilita a tela de configuração de dispositivos, como impressoras.
- `printingConfig.printByBroker`: define como o Sales App realiza a impressão. Quando `false`, a impressão é feita diretamente pelo dispositivo; quando `true`, a solicitação passa por um "broker" de impressão, serviço intermediário que a encaminha para a impressora.
- `defaultDevice.deviceName`: nome da impressora padrão (ex: `'PDFwriter'`).
- `remotePrinterOptions.deviceName`: nome da impressora usada para impressão remota.

## Cliente anônimo

- `allowAnonymousUser`: quando configurado como `true`, permite finalizar pedidos sem identificar o cliente, quando `false`, não permite.

## Social Selling

- `socialShare.vendorType`: determina como o vendedor é identificado nos links de Social Selling (ex: `'code'` para usar o código do vendedor).

## Tipos de identificação do cliente

- `enableIdentificationTypes`: define quais tipos de identificação do cliente ficam disponíveis no Sales App, conforme o exemplo abaixo:

```js
enableIdentificationTypes: {
  QRCode: false,
  CPF: false,
  Email: true,
  Phone: false,
}
```
