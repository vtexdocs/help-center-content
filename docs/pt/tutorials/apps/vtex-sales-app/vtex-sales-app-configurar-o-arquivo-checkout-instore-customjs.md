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

O `checkout-instore-custom.js` é o arquivo usado para personalizar as configurações do **VTEX Sales App**. Este artigo descreve as propriedades disponíveis nesse arquivo e como defini-las. Para localizá-lo, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout** ou digite **Checkout** no campo de busca.
2. Clique na engrenagem da conta principal em que o **Sales App** foi instalado.
3. Clique na aba **Código**.
4. Na seção **Arquivos**, você verá o arquivo `checkout-instore-custom.js`.

## Idioma e localidade

- `window.LOCALE_MESSAGES.locale`: define o idioma e a localidade usados no **Sales App**, como português do Brasil (`'pt-br'`), inglês dos EUA (`'en-us'`) e espanhol da Espanha (`'es-es'`).

## Configuração por conta

- `window.INSTORE_CONFIG_BY_ACCOUNT`: objeto que mapeia lojas e contas para configurações específicas.
  - **Chave:** ID e nome da loja (ex: `"1"` e `"nomedaloja"`).
  - `name`: nome da conta VTEX.
- `accounts`: localizado dentro de `INSTORE_CONFIG`, recebe o valor de `window.INSTORE_CONFIG_BY_ACCOUNT` e associa o **Sales App** às lojas configuradas.

## Autenticação

- `auth.oAuthProviderName`: define o provedor de autenticação OAuth usado para fazer login no **Sales App** (ex.: `'Google'`).

## Fluxo de checkout e navegação

- `enableNewCheckout`: ativa o novo fluxo de checkout do **Sales App**. O valor padrão dessa flag é `false`. Quando o lojista conclui a configuração inicial, essa flag é salva como `true` na loja.

  > ⚠️ Não altere o valor de `enableNewCheckout`.

- `enableExplore`: ativa a tela com a experiência **Explore** (vitrine e anúncios).
- `initialPage`: define a página que abre primeiro após o login. Os valores aceitos são:

  | Valor | Rota | O que abre |
  | :--- | :--- | :--- |
  | `'advertisements'` | `/checkout/advertisements` | Vitrine e anúncios (a página **Explore**) |
  | `'sale'` | `/sale` | Fluxo de venda (rota descontinuada) |
  | `'turn-list'` | `/turn-list` | Lista da vez |
  | `'b2b'` | `/b2b` | Página inicial B2B |

- `pathAfterLogin`: determina a rota interna para onde o usuário é direcionado depois de realizar o login (ex: `'/sale'`). Essa flag foi descontinuada e substituída por `initialPage`. Ela ainda tem precedência sobre `initialPage`. Se a loja tiver `pathAfterLogin` no arquivo, `initialPage` é ignorado.

  > ⚠️ Use `initialPage` no lugar de `pathAfterLogin`.

- `topbarTitle`: define o texto exibido na barra superior do **Sales App** (ex: `'Nome da loja'`).
- `enableChangePrice`: quando configurado como `true`, permite que o vendedor altere o preço manualmente no **Sales App**. Quando `false`, não permite. Está relacionado ao campo `manualPrice` do [OrderForm](https://developers.vtex.com/docs/guides/orderform-fields).

## Vendas e rastreio

- `sales.enabled`: habilita a funcionalidade de venda no **Sales App**.
- `salesAssociateTracking.enabled`: ativa o rastreio de vendas por vendedor, de forma que pedidos sejam associados a um código de vendedor.

  > ⚠️ Tanto `sales.enabled` quanto `salesAssociateTracking.enabled` precisam estar configurados como `true` para que o **Sales App** funcione corretamente.

- `salesPerformance.enabled`: quando configurado como `true`, exibe o monitor de performance da loja no menu novo do **Sales App**. Quando `false`, não exibe.
- `enableStorePerformance`: quando configurado como `true`, exibe a performance da loja na barra lateral da versão anterior do **Sales App**. Quando `false`, não exibe. Essa flag é independente de `salesPerformance.enabled`.
- `showItemOriginSeller`: quando configurado como `true`, exibe o texto **loja parceira** nos itens vendidos por um seller externo. Quando `false`, não exibe.

## Busca de produtos (`search`)

- `search.vtexSearch`: quando configurado como `true`, usa o [**Intelligent Search**](https://help.vtex.com/pt/docs/tutorials/intelligent-search-visao-geral). Quando `false` ou ausente do arquivo, usa o [**VTEX Search (Legado)**](https://help.vtex.com/pt/docs/tutorials/como-funciona-vtex-search-legado). Os filtros facetados (`search.filtersEnabled`) e a regionalização (`search.regionalizationEnabled`) dependem desta flag estar configurada como `true`.
- `search.filtersEnabled`: habilita filtros facetados na interface de busca. Só tem efeito quando `search.vtexSearch` está configurada como `true`.
- `search.regionalizationEnabled`: ativa a [busca regionalizada](https://help.vtex.com/pt/docs/tutorials/regionalizacao). Só tem efeito quando `search.vtexSearch` está configurada como `true`.
- `search.alternateIdRegex`: expressão regular (regex) usada para reconhecer IDs alternativos de SKU, como códigos de barras.

## Estoque e venda sem estoque

- `sellWithoutStockInHands`: permite vender produtos sem estoque local em lojas com configuração de vendas de estoque local (**On Hands**).
- `showStock`: quando configurado como `true`, exibe a quantidade em estoque nas telas de produto e de busca. Quando `false`, não exibe.

## Anexos e serviços

- `enableAttachments`: habilita serviços e anexos no fluxo de venda (ex: embalagem para presente).
- `giftPackagingName`: nome exibido para o serviço ou anexo (ex: `'embalagem'`).

## Social Selling

- `socialShare.vendorType`: determina a identificação do vendedor nos links de [**Social Selling**](https://help.vtex.com/pt/docs/tracks/compartilhar-carrinho-utilizando-o-vtex-sales-app-social-selling) (ex: `'code'` para usar o código do vendedor).
- `socialShare.hostName`: define o endereço do site que aparece no link compartilhado com o cliente. O **Sales App** usa, nesta ordem, o valor definido nesta propriedade (`socialShare.hostName`), o endereço já salvo para o compartilhamento (`share.hostName`) e, por último, o endereço da página em que o vendedor está (`window.location.host`).

## Código do vendedor (`noteAsVendorCode`)

- `noteAsVendorCode.type`: define o tipo de campo do código do vendedor. Apenas o valor `'select'` cria uma lista de seleção. Os outros valores exibem um campo aberto de texto. Os valores aceitos são:

  | Valor | Resultado |
  | :--- | :--- |
  | `'select'` | Lista de seleção com os vendedores da loja do vendedor logado. A lista é preenchida pelo `getVendorsByStore` a partir do `storeId` desse vendedor. |
  | `'input'` | Campo de texto (`TextBox`). |
  | `'text'` | Campo de texto (`TextBox`). |

- `noteAsVendorCode.skipValidation`: controla a obrigatoriedade do código do vendedor e a consulta ao [Master Data](https://help.vtex.com/pt/docs/tutorials/master-data).

  | Valor | Resultado |
  | :--- | :--- |
  | `false` | Torna o campo obrigatório. |
  | `true` | Salva o código sem consultar o **Master Data**. |
  | Flag ausente do arquivo | O campo não fica obrigatório, mas o **Sales App** ainda valida se o código informado está correto. |

- `noteAsVendorCode.autofill`: define se o código do vendedor é preenchido automaticamente no link compartilhado. Essa flag só funciona se `socialShare` estiver definido. Veja [Social Selling](#social-selling).

  | Valor | Resultado |
  | :--- | :--- |
  | `false` | Não preenche o código automaticamente. |
  | `true` | Preenche automaticamente o código do vendedor no link compartilhado. |
  | Flag ausente do arquivo | O valor padrão é `true`. |

- `noteAsVendorCode.mask`: expressão regular (regex) que valida o formato do código do vendedor.

  | Valor | Resultado |
  | :--- | :--- |
  | Regex configurada | Valida o formato do código do vendedor. É ignorada quando `noteAsVendorCode.type` é `'select'`. |
  | Flag ausente do arquivo | A expressão regular (regex) permanece vazia e o campo aceita qualquer formato. |

Veja um exemplo de como configurar o `noteAsVendorCode`:

```js
noteAsVendorCode: {
  type: 'input',
  mask: '^LL.{0,8}$',
  skipValidation: true,
  autofill: false,
}
```

## Cliente anônimo

- `allowAnonymousUser`: quando configurado como `true`, permite finalizar pedidos sem identificar o cliente. Quando `false`, não permite. Utilizado para vendas de estoque local (**On Hands**).

## Cadastro e perfil do cliente

- `customerProfile.isCorporate`: define se a venda para pessoa jurídica (PJ) fica disponível no cadastro do cliente. Além de `true` e `false`, a flag aceita o objeto `{ optional: true }`.

  | Valor | Resultado |
  | :--- | :--- |
  | `false` | Desabilita a venda para pessoa jurídica. |
  | `true` | Torna obrigatório identificar a venda como pessoa jurídica. |
  | `{ optional: true }` | Mantém a venda para pessoa jurídica disponível, mas o preenchimento é opcional. |

## Tipos de identificação do cliente

- `enableIdentificationTypes`: define quais tipos de identificação do cliente ficam disponíveis no **Sales App**. Configure cada propriedade como `true` para habilitar o método ou como `false` para desabilitá-lo.
  - `QRCode`: quando configurado como `true`, permite que o cliente identifique-se usando o QR Code. Quando `false`, não permite.
  - `CPF`: quando configurado como `true`, permite que o cliente identifique-se usando o CPF. Quando `false`, não permite.
  - `Email`: quando configurado como `true`, permite que o cliente identifique-se usando o email. Quando `false`, não permite.
  - `Phone`: quando configurado como `true`, permite que o cliente identifique-se usando o número de telefone. Quando `false`, não permite.

Veja um exemplo de como configurar o `enableIdentificationTypes`:

```js
enableIdentificationTypes: {
  QRCode: false,
  CPF: false,
  Email: true,
  Phone: false,
}
```

## Pagamentos

- `challengeDrivenPaymentWorkflow`: ativa um fluxo de pagamento com validações adicionais, como [carteiras digitais (ewallets)](https://help.vtex.com/pt/docs/tracks/carteira-digital-e-wallet), [Payment Apps](https://developers.vtex.com/docs/guides/payments-integration-payment-app) e [POS (Point of Sale)](https://developers.vtex.com/docs/guides/payments-integration-ppp-applied-to-pos).
- `payments.filters`: lista os IDs dos meios de pagamento (`paymentSystemId`) que podem aparecer no checkout do **Sales App** (ex: `'1'`, `'4'`, `'125'`, `'202'`, `'44'`, `'45'`, `'207'`, `'208'`, `'209'`).

## Cancelamento de pedido

- `isCancelOrderAlwaysVisible`: quando configurado como `true`, mantém sempre visível na interface a opção de cancelar o pedido. Quando `false`, não mantém visível.

## Dispositivos e impressora

- `printedOrderExtraText`: texto adicional impresso no comprovante do pedido.
- `enablePrintButton`: quando configurado como `true`, exibe o botão de imprimir no pedido. Quando `false`, não exibe. O valor padrão é `true`.
