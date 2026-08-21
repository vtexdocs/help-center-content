---
title: 'VTEX Pick and Pack: Insights'
createdAt: 2024-01-05T17:27:08.558Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-insights
locale: pt
hidden: false
---

**Insights** é a página do Admin VTEX que apresenta dados sobre o desempenho da sua operação no VTEX Pick and Pack. No Admin VTEX, acesse **Envio > Pick and Pack > Insights**.

> ⚠️ Os indicadores que dependem do status `Entregue` somente são calculados se a sua operação utiliza o [VTEX Pick and Pack Last Mile](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack-last-mile). Sem este módulo habilitado em sua loja, a VTEX não recebe a confirmação de entrega do pedido, e os indicadores **Tempo do ciclo do pedido**, **Tempo de envio**, **Precisão do prazo**, **Entrega no prazo** e **OTIF** são exibidos com erro.

A página está organizada nas abas:

- [Geral](#geral)
- [Itens](#itens)

## Geral

A aba **Geral** reúne, em um único painel, os gráficos de **Pedidos** e de **Ordens de serviço**, além dos cartões com os tempos de processamento e os indicadores de desempenho da sua operação. Todos os dados consideram o intervalo de datas e as unidades selecionados, definidos pelo seletor de datas e pela opção **Alterar unidade**. Nos gráficos, as opções **Último** e **Atual** permitem comparar períodos distintos.

![pick-pack-insights-1-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-insights_1.png)

O gráfico de **Pedidos** apresenta o total de pedidos do período selecionado, e o de **Ordens de serviço**, o total de [ordens de serviço](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack-ordens-de-servico) criadas no mesmo período.

### Tempos de processamento

Os tempos de processamento indicam a duração de cada etapa do fulfillment, medidos em dias, horas ou minutos:

| Indicador | O que mede | Como é calculado |
| :---: | :---: | :---: |
| **Tempo do ciclo do pedido** | Período entre a criação do pedido e a sua entrega ao cliente. | Σ (data em `Entregue` − data em `Pronto para manuseio`) / total de pedidos considerados |
| **Tempo de separação** | Período necessário para separar um pedido. | Σ (data em `Pronto para empacotamento` − data em `Pronto para separação`) / total de pedidos considerados |
| **Tempo de empacotamento** | Período necessário para empacotar um pedido. | Σ (data em `Preparando envio` − data em `Pronto para empacotamento`) / total de pedidos considerados |
| **Tempo de envio** | Período necessário para enviar um pedido. | Σ (data em `Entregue` − data em `Preparando envio`) / total de pedidos considerados |
| **Tempo médio de processamento** | Intervalo entre o início da separação e a conclusão do empacotamento. | Σ (data em `Preparando envio` − data em `Pronto para separação`) / total de pedidos considerados |

> ℹ️ Nos indicadores de tempo, entram no cálculo apenas os pedidos que passaram por ambos os status considerados. Consulte a descrição de cada status em [Fluxo e status de pedidos](https://help.vtex.com/pt/docs/tutorials/fluxo-e-status-de-pedidos).

### Indicadores de desempenho

Os indicadores de desempenho avaliam o resultado dos pedidos processados na operação:

| Indicador | O que mede | Como é calculado | Escopo |
| :---: | :---: | :---: | :---: |
| **Precisão do prazo** | Pedidos entregues dentro do prazo estimado, considerando a data de criação do pedido. | (pedidos entregues no prazo / total de pedidos entregues) x 100 | Entram no cálculo os pedidos criados no período selecionado, mesmo que entregues depois dele. Compara o prazo estimado com a data de entrega registrada no pedido. |
| **Entrega no prazo** | Pedidos entregues dentro do prazo estimado, considerando a data de entrega. | (pedidos entregues no prazo / total de pedidos entregues) x 100 | Entram no cálculo os pedidos entregues no período selecionado, mesmo que tenham sido criados antes dele. Compara o prazo estimado com o momento exato do evento de entrega. |
| **OTIF (On-Time in Full)** | Pedidos entregues no prazo e na quantidade corretos. | (pedidos perfeitos / total de pedidos do período) x 100 | O denominador considera todos os pedidos do período, independentemente do status. |
| **Taxa de precisão** | Pedidos processados com os itens corretos, sem divergências. | (pedidos processados sem substituições ou rejeições / total de pedidos) x 100| - |
| **Taxa de fulfillment** | Pedidos atendidos com sucesso em relação ao total de pedidos recebidos. | (pedidos entregues sem substituições ou rejeições / total de pedidos) x 100 | - |
| **Taxa de backorder** | Pedidos não atendidos imediatamente devido à falta de estoque disponível. | (pedidos com itens rejeitados por falta de estoque / total de pedidos) x 100 | Considera os itens rejeitados por falta de estoque, independentemente do status do pedido. |
| **Taxa de devolução** | Pedidos devolvidos em relação ao total de pedidos processados. | (pedidos devolvidos / total de pedidos) x 100 | - |
| **Taxa de separação de pedidos** | Volume de itens separados por hora na operação. | total de itens separados / horas decorridas | - |
| **Taxa de empacotamento** | Volume de itens empacotados por hora na operação. | total de itens empacotados / horas decorridas | - |

> ℹ️ O denominador do OTIF considera todos os pedidos do período, inclusive os que ainda estão em processamento, cancelados ou rejeitados. Por isso, pedidos que ainda não atingiram o status Entregue reduzem o indicador. O [Insights](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack-insights) usa o status do pedido na VTEX, que pode ser atualizado para Entregue por diferentes sistemas e fluxos, como o módulo [Last Mile](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack-last-mile).

> ℹ️ A **Taxa de backorder** considera apenas rejeições cujo motivo contém a palavra "faltante". Para que o indicador reflita a sua operação, configure o motivo de rejeição por falta de estoque utilizando esse termo.

## Itens

A aba **Itens** apresenta as métricas dos itens processados no VTEX Pick and Pack ao longo do período e para as unidades selecionadas.

![pick-pack-insights-2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-insights_2.png)

Os seguintes indicadores estão disponíveis:

- **Top 10 itens mais preparados**: itens com maior número de unidades preparadas, pedidos e ordens de serviço no período.
- **Distribuição de manuseados em**: distribuição dos itens manuseados de acordo com a especificação selecionada.
- **Itens mais recusados**: itens com o maior número de rejeições ou de remoções durante os processos de separação ou de empacotamento no período.
- **Motivos de recusa**: razões pelas quais itens foram rejeitados ou removidos durante o processamento dos pedidos.
- **Motivos de substituição**: razões pelas quais itens foram substituídos por outros durante o processamento dos pedidos.
- **Categorias com maior fulfillment**: categorias do catálogo com a maior taxa de atendimento de pedidos no período.
- **Categorias usadas**: categorias do catálogo às quais os itens estão associados.
- **Itens separados**: total de itens separados para atendimento de pedidos no período, comparado ao período anterior.
- **Itens empacotados**: total de itens incluídos em pacotes no período, comparado ao período anterior.
- **Itens transferidos**: total de itens transferidos entre locais ou estoques no período.
- **Pacotes**: distribuição dos itens cadastrados no catálogo por tipo de pacote (embalagem).
- **Pacotes criados**: total de pacotes criados no período, comparado ao período anterior.
- **Itens por pacote**: média de itens incluídos por pacote no período, comparada ao período anterior.
- **Eficiência de empacotamento**: indicador de aproveitamento dos pacotes em relação à capacidade disponível.


