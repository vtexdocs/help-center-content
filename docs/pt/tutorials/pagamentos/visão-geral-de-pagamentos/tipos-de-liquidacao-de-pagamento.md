---
title: 'Tipos de liquidação de pagamento'
id:
status: PUBLISHED
createdAt: 2026-01-26T00:00:00.001Z
updatedAt: 2026-01-26T00:00:00.001Z
publishedAt: 2026-01-26T00:00:00.001Z
firstPublishedAt: 2026-01-26T00:00:00.001Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: payment-settlement-types
legacySlug: tipos-de-liquidacao-de-pagamento
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

> ⚠️ Este recurso está em Beta fechado, o que significa que apenas clientes específicos podem acessá-lo agora. Caso queira implementá-lo no futuro, entre em contato com nosso [Suporte](https://support.vtex.com/hc/pt-br/).


Quando um cliente finaliza uma compra em uma loja VTEX, um número de pedido é gerado e o pagamento é processado. Após essa etapa, a liquidação do pagamento, também conhecida como captura, pode ocorrer de três formas distintas:

- Total
- Hold
- Parcial

Cada uma delas impacta a forma como o gateway de pagamentos da VTEX repassa os valores ao provedor de pagamento.

A seguir, veja um exemplo de pedido no valor de R$ 100 e como ele pode ser liquidado em cada cenário:

## Liquidação total

Nesse modelo, o lojista emite uma nota fiscal com o valor total do pedido (R$ 100) ou com [valor parcial](https://help.vtex.com/pt/docs/tracks/faturas-parciais#enviar-fatura-parcial) (por exemplo, R$ 50).

O sistema de pedidos ([Orders](https://help.vtex.com/pt/docs/tutorials/pedidos-categoria)) solicita ao gateway de pagamentos da VTEX a liquidação do valor correspondente à nota emitida (R$ 100 ou R$ 50). Em seguida, o gateway repassa o valor total do pedido (R$ 100) ao provedor de pagamento, desconsiderando o valor inserido na nota fiscal.


## Liquidação hold

Nesse fluxo, o lojista emite uma [nota fiscal parcial](https://help.vtex.com/pt/docs/tracks/faturas-parciais#enviar-fatura-parcial), no mesmo exemplo, com valor de R$ 70. O sistema Orders solicita a liquidação desse valor, mas o gateway retém essa quantia - ou seja, não repassa ao provedor de pagamento até que o restante do valor do pedido (R$ 30) seja complementado com novas notas fiscais. Quando os valores das solicitações parciais alcançarem o valor total da transação (R$ 100), o gateway envia esse valor para o provedor.

## Liquidação parcial

Nessa configuração, quando o lojista emite uma [nota fiscal parcial](https://help.vtex.com/pt/docs/tracks/faturas-parciais) (por exemplo, R$ 60), o sistema Orders solicita a liquidação do valor correspondente, e o gateway automaticamente repassa os R$ 60 ao provedor de pagamento.

Conforme novas notas fiscais são adicionadas, o gateway vai liquidando os valores restantes (até R$ 40, neste exemplo), de forma proporcional e automática.

> ⚠️ Apenas o fluxo de liquidação **Total** é ativado por padrão em todas as contas VTEX. Caso deseje utilizar os fluxos de liquidação **Retida** ou **Parcial** em sua loja, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt).

## Como identificar a liquidação parcial de um pedido

Para identificar se em um pedido seguiu o fluxo de liquidação Parcial, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Transações** ou digite **Transações** na barra de busca no topo da página.
2. Realize uma busca ou clique sobre a transação desejada.
3. Na caixa principal de dados de pagamento do pedido, verifique se há informações sobre as liquidações parciais realizadas.

![Liquidação de pagamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/liquidacao-parcial-de-pagamento-1.png)

4. Em **Eventos da transação**, confirme a realização da liquidação **Parcial** por meio da presença do registro deste tipo de evento.

![Liquidação de pagamento 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/liquidacao-parcial-de-pagamento-2.png)
