## Test 1

- File: docs\pt\tutorials\Beta\Orders Beta\como-funciona-a-alterar-pedido-beta.md
- Is there title error? No
- What is the error? Table
- How to fix? You can ask copilot the following:
  
  ```sh
  The table syntax on this file seems to have some errors. Idetify and fix them.
  ```

- Exemplo:

    ```sh
    | **Como alterar** | **Descrição** | **Status que admite alteração** |
    |:---|:---|:---|
    | Via Admin VTEX | A alteração é feita pela [página de detalhes do pedido](https://help.vtex.com/pt/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl), que pode ser acessada em **Pedidos > Todos os pedidos**, selecionando o pedido desejado. Também é possível acessar o pedido usando a barra de busca no topo do Admin VTEX. Para isso, clique sobre a barra, selecione a opção **Pedidos** e utilize algum dos seguintes critérios: ID do pedido, Nome do cliente, Email do cliente, Documento do cliente. **Artigo no Help Center:** [Como alterar pedidos (Beta)](https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw) | `preparando entrega` |
    | Via API | Altera pelos endpoints: [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview), [Get order change detail](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-), [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes), [Retry order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry), [Cancel order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel), [Get Change order settings](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings), [Update Change order settings](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings) | `ready-for-handling`, `handling`, `waiting-for-fulfillment`, `ready for invoicing` |
    ```

## Test 2

File: docs\en\known-issues\Catalog\attachents-api-doesnt-allow-null-domainvalues-and-it-should.md

### What's the problem?

The title field is incorrectly quoted:
It starts with a double quote (") but inside the title, there is another double quote before domainValues' and then a single quote at the end.
The single quote at the end is unmatched and not valid in this context.

### Fixed

From:

```sh
title: "Attachents API doesn't allow null "domainValues' (and it should)"
```

To:

```sh
title: "Attachents API doesn't allow null 'domainValues' (and it should)"
```

- The outer quotes are double quotes (").
- The inner quotes are single quotes ('), which do not need to be escaped inside double quotes in YAML.
- There are no unescaped or mismatched quotes.

## Test 3

File: docs\en\known-issues\Catalog\product-name-contains-search-with-more-than-one-term-doesnt-work-on-catalogs-redesigned-ui.md

### What's the problem?

The title field is incorrectly quoted:
- It starts with two double quotes ("").
- The title content itself contains a single quote (') and another double quote at the start.
- The closing quote is a single double quote at the end.

### Fixed

From:

```sh
title: ""Product name contains' search with more than one term doesn't work on catalog's redesigned UI"
```

to

```sh
title: "Product name contains search with more than one term doesn't work on catalog's redesigned UI"
```

## Test 4

File: \docs\en\known-issues\Catalog\telesales-search-doesnt-accept-special-characters-aside-from.md

### What's the problem?

The title field is incorrectly quoted:
- The outer quotes are double quotes (").
- Inside the title, there is a double quote (") before the @', and a single quote (') after the @.
- The closing quote is a double quote at the end.

### Fixed

From:

```sh
title: "Telesales search doesn't accept special characters aside from "@'."
```

to

```sh
title: "Telesales search doesn't accept special characters aside from '@'."
```

## Test 5

File: docs\en\known-issues\Checkout\go-to-payment-button-doesnt-work-in-delivery-split-when-switching-between-delivery-and-pick-up-options.md

### What's the problem?

The title field is incorrectly quoted:
- It starts with two double quotes ("").
- The title content itself contains a single quote (') and another double quote at the start.
- The closing quote is a single double quote at the end.

### Fixed

From:

```sh
title: ""Go to payment' button doesn't work in delivery split when switching between Delivery and Pick up options"
```

to

```sh
title: "Go to payment' button doesn't work in delivery split when switching between Delivery and Pick up options"
```

## Test 6

File: docs\en\known-issues\Intelligent Search\prioritization-by-products-keyword-not-considering-stopwords.md

### What's the problem?

The title contains unescaped, mismatched quotes:
- The outer quotes are double quotes (").
- Inside the string, you have another double quote before keyword and a single quote after it: "Prioritization by product's "keyword' not considering stopwords"
YAML interprets the first inner double quote (before keyword) as the end of the string.
- The rest (keyword' not considering stopwords") is then seen as invalid YAML, causing a YAML parse error.

### Fixed

From:

```sh
title: "Prioritization by product's "keyword' not considering stopwords"
```

to

```sh
title: "Prioritization by product's keyword not considering stopwords"
```

## Test 7

File: docs\en\known-issues\Marketing & Merchandising\i-dont-know-my-zip-code-link-in-the-wedding-list-creation-page-is-redirecting-to-the-wedding-list-creation-page.md

### What's the problem?

The title field is incorrectly quoted:
- The outer quotes are two double quotes at the start ("").
- The title content itself starts with a double quote (") and contains a single quote (').
- The closing quote is a single double quote at the end.

### Fixed

From:

```sh
title: ""I don't know my ZIP code' link in the wedding list creation page is redirecting to the wedding list creation page"
```

to

```sh
title: "I don't know my ZIP code link in the wedding list creation page is redirecting to the wedding list creation page"
```

## Test 8

File: docs\en\known-issues\Marketing & Merchandising\let-me-know-email-is-sent-even-when-the-product-is-not-available-for-the-websites-trade-policy.md

### What's the problem?

The title field is incorrectly quoted:
- The outer quotes are two double quotes at the start ("").
- The title content itself starts with a double quote (") and contains a single quote (').
- The closing quote is a single double quote at the end.

### Fixed

From:

```sh
title: ""Let me know' email is sent even when the product is not available for the website's trade policy"
```

to

```sh
title: "Let me know' email is sent even when the product is not available for the website's trade policy"
```
