---
title: 'Meu pedido foi fechado com o preço errado'
id: 5an0m7uLMwxWRlJlsyKxvl
status: PUBLISHED
createdAt: 2025-05-07T13:03:46.201Z
updatedAt: 2025-08-14T22:08:07.983Z
publishedAt: 2025-08-14T22:08:07.983Z
firstPublishedAt: 2025-05-07T13:25:11.579Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: my-order-was-closed-with-the-wrong-price
legacySlug: meu-pedido-foi-fechado-com-o-preco-errado
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags:
  - Pedidos
  - Integração
  - Marketplace
---

No Admin VTEX, em **Marketplace > Conexões > Pedidos**, são informados os status dos pedidos fechados por marketplaces certificados. Pedidos fechados com o preço errado apresentam status **Processado com erro**. 

> ℹ️ Para evitar que o pedido seja fechado com o preço errado, você pode criar [Regras de Divergência de Valores](/pt/docs/tutorials/regra-de-divergencia-de-valores).

Existem três possíveis causas para um pedido ser fechado com o preço errado:
- [Preço do produto assumido pelo marketplace](#preço-do-produto-assumido-pelo-marketplace)
- [Frete calculado no marketplace](#frete-calculado-no-marketplace)
- [Preço do SKU alterado antes da integração do pedido](#preço-do-SKU-alterado-antes-da-integração-do-pedido)

> ℹ️ Consulte outros erros de integração de pedidos de marketplace [nesse artigo](/pt/tutorial/porque-os-pedidos-do-marketplace-nao-integram-com-minha-loja--275YvF8dyry5KmfY9epoET).

## Preço do produto assumido pelo marketplace

Ocorre quando há algum empecilho ao enviar o preço da VTEX para o marketplace. Isto pode acontecer por dois motivos:
- Erro na integração, que será reportado no painel de integrações.
- Problema para o marketplace computar o preço novo, mesmo tendo recebido com sucesso a atualização da VTEX.

### Solução 	

Nesse caso, você deve reprocessar o pedido ignorando a divergência. Para isso, siga as instruções abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Pedidos**, ou digite **Pedidos** na barra de busca no topo da página.
2. Clique no botão `Ações`.
3. Selecione `Ignorar divergência e reprocessar`.
4. Acesse a aba de **Pedidos** e clique em `Todos os pedidos`.
5. Entre na página do pedido reprocessado.
6. Na parte superior, clique em `Aprovar`.

> ⚠️ Essa integração não muda o valor do pedido. Ele apenas será processado com a divergência de preço.

## Frete calculado no marketplace

Nas configurações da logística para as vendas pelo marketplace, lojas VTEX podem optar por usar o cálculo de frete pelo parceiro. Ou seja, o frete não é calculado pela VTEX. Porém, esse cenário pode causar diferença de preço.

Além disso, mesmo que a sua loja tenha optado por usar o cálculo de frete da VTEX, um pedido pode ser fechado com o valor de frete do marketplace. Isso acontece quando o marketplace não solicita o cálculo à VTEX ou quando há um erro neste processo. Neste caso, o marketplace pode usar valores de contingência para não perder a venda. Se estes valores forem diferentes dos valores calculados pela VTEX, isso pode fazer com que um pedido seja fechado com o preço errado.

### Solução

Nesse caso, você deve reprocessar o pedido. Para isso, siga as instruções abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Pedidos**, ou digite **Pedidos** na barra de busca no topo da página.
2. Clique no botão `Ações`.
3. Selecione `Reprocessar`.

## Preço do SKU alterado antes da integração do pedido

Ocorre quando o pedido é fechado e, logo após, a loja altera o preço de um SKU incluso no pedido. A integração do pedido finalizado leva alguns minutos. Então, quando a integração for realizada, o preço do SKU será outro e o cálculo na VTEX não dará o mesmo resultado do cálculo do marketplace.

### Solução

Nesse caso, você deve reprocessar o pedido. Para isso, siga as instruções abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Pedidos**, ou digite **Pedidos** na barra de busca no topo da página.
2. Clique em `Ações`.
3. Selecione `Reprocessar`.

