---
title: 'Operações de pagamentos pós-compra'
id:
status: PUBLISHED
createdAt: 2025-12-15T00:00:00.00Z
updatedAt: 2025-12-15T00:00:00.00Z
publishedAt: 2025-12-15T00:00:00.00Z
firstPublishedAt: 22025-12-15T00:00:00.00Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: post-purchase-payment-operations
legacySlug: operacoes-de-pagamentos-pos-compra
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---
As operações de pagamento pós-compra acontecem após a aprovação do pedido e podem ser de três tipos: liquidação, cancelamento e reembolso.

O comportamento dessas operações depende do modo de processamento configurado para cada conector no VTEX Gateway, que pode ser:

- [Modo Total](#modo-total)
- [Modo Hold](#modo-hold)
- [Modo Parcial](#modo-parcial)

> ℹ️ Uma mesma conta (loja) pode ter conectores configurados com diferentes modos dentro do VTEX Gateway — por exemplo, um conector no **Modo Parcial** e outro no **Modo Hold**. Quando uma transação envolve mais de um conector com modos distintos, como **Hold** e **Parcial**, o sistema ajusta automaticamente o comportamento para o **Modo Total**, garantindo a consistência e a integridade do processo de pagamento.

## Visão geral dos modos de processamento

A tabela abaixo apresenta o comportamento geral de cada operação conforme o modo configurado:


| Operação | Modo Total | Modo Hold | Modo Parcial |
| :---: | :--- | :--- | :--- |
| **Liquidação** | Sempre envia ao conector a solicitação para liquidar o valor total do pedido, mesmo que o merchant tenha solicitado um valor inferior ao total. | Mantém internamente as solicitações de valores inferiores ao total. Envia a solicitação de liquidação ao conector apenas quando o valor total é atingido. | Envia ao conector exatamente o valor solicitado em cada operação de liquidação. |
| **Cancelamento** | Mantém internamente solicitações de cancelamentos parciais. Envia a solicitação de cancelamento ao conector apenas quando o valor total é atingido.  | Mantém internamente solicitações de cancelamentos parciais. Envia a solicitação de cancelamento ao conector apenas quando o valor total é atingido. | Envia ao conector exatamente o valor solicitado em cada operação de cancelamento. |
| **Reembolso** | Envia ao conector exatamente o valor solicitado em cada operação de reembolso. | Envia ao conector exatamente o valor solicitado em cada operação de reembolso. | Envia ao conector exatamente o valor solicitado em cada operação de reembolso. |

> ⚠️ O modo selecionado para cada conector determina uniformemente o comportamento das operações de liquidação, cancelamento e reembolso. Não é possível combinar comportamentos de modos diferentes em um mesmo conector simultaneamente.

## Fluxo das operações por modo

Os exemplos e diagramas a seguir demonstram como cada modo de processamento atua nas operações de liquidação, cancelamento e reembolso. Para facilitar a compreensão, todos os exemplos utilizam um pedido no valor de R$ 100.

> ⚠️ O **Modo Total** é o comportamento padrão adotado nas lojas VTEX. Caso os modos **Hold** ou **Parcial** sejam mais adequados à sua estratégia de negócio, entre em contato com o [Suporte VTEX](https://newhelp.vtex.com/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex#suporte-tecnico) para solicitar a alteração da configuração da sua loja.

## Modo Total

### Liquidação

1. Merchant solicita ao Gateway a liquidação de R$ 20
2. Gateway solicita ao Conector a liquidação de R$ 100
3. Merchant solicita ao Gateway a liquidação do valor restante do pedido (R$ 80)
4. Gateway não realiza comunicação com o Conector, pois o valor total do pedido já foi solicitado

![Modo total liquidação](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-total-liquidacao.png)

### Cancelamento

1. Merchant solicita ao Gateway o cancelamento de R$ 20
2. Gateway não realiza comunicação com o Conector
3. Merchant solicita ao Gateway o cancelamento do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector o cancelamento de R$ 100

![Modo total cancelamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-total-cancelamento.png)

### Reembolso

1. Merchant solicita ao Gateway o reembolso de R$ 20
2. Gateway solicita ao Conector o reembolso de R$ 20
3. Merchant solicita ao Gateway o reembolso do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector o reembolso do valor restante do pedido (R$ 80)

![Modo total reembolso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-total-reembolso.png)

> ℹ️ O conector somente executa uma operação de reembolso se o valor solicitado já tiver sido liquidado anteriormente.


## Modo Hold

### Liquidação

1. Merchant solicita ao Gateway a liquidação de R$ 20
2. Gateway não realiza comunicação com o Conector
3. Merchant solicita ao Gateway a liquidação do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector a liquidação de R$ 100

![Modo hold liquidação](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-hold-liquidacao.png)

### Cancelamento

**Exemplo 1**: cancelamento do valor total do pedido

1. Merchant solicita ao Gateway o cancelamento de R$ 20
2. Gateway não realiza comunicação com o Conector
3. Merchant solicita ao Gateway o cancelamento do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector o cancelamento de R$ 100

![Modo hold cancelamento 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-hold-cancelamento-1.png)

**Exemplo 2**: cancelamento de uma parte do valor do pedido

1. Merchant solicita ao Gateway o cancelamento de R$ 20
2. Gateway não realiza comunicação com o Conector
3. Merchant solicita ao Gateway a liquidação do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector a liquidação de R$ 80
5. O valor de R$ 20 permanece cancelado no Gateway, mas não é informado ao conector

![Modo hold cancelamento 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-hold-cancelamento-2.png)

### Reembolso

1. Merchant solicita ao Gateway o reembolso de R$ 20
2. Gateway solicita ao Conector o reembolso de R$ 20
3. Merchant solicita ao Gateway o reembolso do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector o reembolso do valor restante do pedido (R$ 80)

![Modo hold reembolso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-hold-reembolso.png)

> ℹ️ O conector somente executa uma operação de reembolso se o valor solicitado já tiver sido liquidado anteriormente.

## Modo Parcial

> ⚠️ Em pedidos pagos com múltiplos meios de pagamento, o sistema processa a operação inicialmente no meio com o menor valor atribuído à transação.

### Liquidação

1. Merchant solicita ao Gateway a liquidação de R$ 20
2. Gateway solicita ao Conector a liquidação de R$ 20
3. Merchant solicita ao Gateway a liquidação do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector a liquidação do valor restante do pedido (R$ 80)

![Modo parcial liquidação](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-parcial-liquidacao.png)

### Cancelamento

1. Merchant solicita ao Gateway o cancelamento de R$ 20
2. Gateway solicita ao Conector o cancelamento de R$ 20
3. Merchant solicita ao Gateway o cancelamento do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector o cancelamento do valor restante do pedido (R$ 80)

![Modo parcial cancelamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-parcial-cancelamento.png)

### Reembolso

1. Merchant solicita ao Gateway o reembolso de R$ 20
2. Gateway solicita ao Conector o reembolso de R$ 20
3. Merchant solicita ao Gateway o reembolso do valor restante do pedido (R$ 80)
4. Gateway solicita ao Conector o reembolso do valor restante do pedido (R$ 80)

![Modo parcial reembolso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/visão-geral-de-pagamentos/modo-parcial-reembolso.png)

> ℹ️ O conector somente executa uma operação de reembolso se o valor solicitado já tiver sido liquidado anteriormente.


## Como escolher o modo ideal

O modo configurado na conta pode gerar impactos no fluxo financeiro da loja, nos custos operacionais e na experiência pós-compra dos clientes.

Antes de solicitar qualquer alteração, avalie como cada opção se comporta em relação à liquidação, cancelamento e reembolso, e escolha aquela que melhor se adapta à estratégia da sua operação.

> ⚠️ O **Modo Parcial** exige que o conector de pagamento ofereça suporte a múltiplas operações parciais. Esse modo não é compatível com [split de pagamento](https://help.vtex.com/pt/docs/tutorials/split-de-pagamento).

| Modo | Indicado para | Vantagens | Limitações |
| :---: | :--- | :--- | :--- |
| **Total** | Lojas que desejam processar rapidamente a liquidação após a aprovação do pedido. | <ul><li>Reduz o tempo entre a aprovação e o repasse dos valores.</li><li>Ideal para merchants que preferem liquidação imediata.</li></ul> | <ul><li>Pode gerar custos elevados de taxas de reembolso caso seja necessário devolver valores já liquidados.</li><li>Não oferece suporte a liquidações parciais.</li></ul> |
| **Hold** | Lojas que aguardam múltiplas confirmações (como emissão de notas fiscais de vários sellers) antes de liquidar o valor total. | <ul><li>Suporta [split de pagamento](https://help.vtex.com/pt/docs/tutorials/split-de-pagamento), permitindo modificações de itens e valores em uma ordem com múltiplos sellers (caso necessário).</li><li>Evita custos de reembolso, pois só liquida quando o valor total é atingido.</li><li>Centraliza o envio de informações ao conector, reduzindo transações intermediárias.</li></ul> | <ul><li>Em pedidos com múltiplos sellers, a liquidação só ocorre após todos emitirem as notas fiscais.</li><li>Não oferece suporte a liquidações parciais.</li></ul> |
| **Parcial** | Lojas que operam com operações frequentes de liquidações, cancelamentos ou reembolsos parciais. | <ul><li>Permite múltiplas operações parciais de liquidação e cancelamento.</li><li>Em pedidos com múltiplos sellers, possibilita a liquidação parcial sem aguardar todos os sellers.</li><li>Pode evitar custos adicionais de taxas de reembolso.</li></ul> | <ul><li>Não suporta [split de pagamento](https://help.vtex.com/pt/docs/tutorials/split-de-pagamento).</li><li>Exige que o conector ofereça suporte a operações múltiplas.</li><li>Requer maior controle operacional.</li></ul> |