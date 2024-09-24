---
title: 'Como identificar promoções atribuídas a um SKU?'
id: frequentlyAskedQuestions_4813
status: PUBLISHED
createdAt: 2019-01-24T20:46:01.523Z
updatedAt: 2022-08-31T22:33:34.388Z
publishedAt: 2022-08-31T22:33:34.388Z
firstPublishedAt: 2019-01-24T22:06:21.209Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-to-identify-promotions-attributed-to-an-sku
locale: pt
legacySlug: como-identificar-promocoes-atribuidas-a-um-sku
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

>⚠️ As etapas documentadas neste artigo utilizam o Google Chrome. Por se tratar de uma ferramenta externa à VTEX, ela pode ser atualizada sem aviso prévio.

Escrevemos este artigo para responder a uma dúvida recorrente dos usuários da plataforma VTEX: qual o motivo de uma promoção estar aplicada a um SKU quando aparentemente não deveria?

Para descobrir quais promoções estão sendo atribuídas a um SKU, devemos analisar suas `priceTags`.

1. Acesse o carrinho com o produto.
2. No Google Chrome, acesse **Ferramentas de Desenvolvedor** (`Ctrl+Shift+I`).![ferramentas-do-desenvolvedor](//images.contentful.com/alneenqid6w5/3NBGEPjXEkkSqA2WOYs8us/5219ffe6515a120ac0e6d489c78e5820/ferramentas-do-desenvolvedor.png)
3. Selecione a aba **Network** e pressione `F5` para gravar o carregamento da página.![network-f5](//images.contentful.com/alneenqid6w5/1TZRay17qkEO8As8w0MKOS/f4d88d06f2a3fd656aa41e3809f35d45/network-f5.png)
4. Após o carregamento, pressione `Ctrl+F` para fazer uma busca na janela das __Ferramentas de Desenvolvedor__ e busque por `orderForm`.![order-form](//images.contentful.com/alneenqid6w5/jtqrcUjDAAqoMUGiYM4qE/94803953c1577a7954ba09f163738e0e/order-form.png)
5. Clique em `orderForm` e vá em `items`. Após clicar em `items`, clique nos números (`0`, `1`, `2` etc.) para ver as características do produto desejado. Em nosso exemplo, como temos apenas um item, este é representado pelo número `0` no array.![items-0](//images.contentful.com/alneenqid6w5/DUtSiCdnrwSmoKqqYW8E6/ec7335a0c9308b17b9d8aa2274057220/items-0.png)
6. Após clicar no número, desça o scroll até `priceTags`. Clique em priceTags e então clique nos números (`0`, `1`, `2` etc.) para ver as características da promoção desejada. Em nosso exemplo, como temos apenas uma promoção, esta é representada pelo número `0` no array. Após isto, busque pelo `identifier` da promoção.![priceTags-0-identifier](//images.contentful.com/alneenqid6w5/5MCOrSJPaMSYQcimY8CKos/ca8960a1a98f680406daf7879d241987/priceTags-0-identifier.png)
7. Em outra aba, acesse a URL `https://{accountName}.vtexcommercestable.com.br/admin/rnb/#/benefit/{numero-do-identifier}`. Esta é a promoção que está sendo efetivamente aplicada ao produto no carrinho. Verifique as configurações da promoção e veja se as condições se aplicam ao SKU em questão.![promo-debug-help](//images.contentful.com/alneenqid6w5/5G2eJ4AilySK0o8ugaOMq4/b4dba231e9812906a45af5a4432d9783/promo-debug-help.png)

## Saiba mais

- [Como funcionam as promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N)
- [Como identificar promoções aplicadas no carrinho](https://help.vtex.com/pt/tutorial/como-identificar-as-promocoes-no-carrinho--frequentlyAskedQuestions_345)
