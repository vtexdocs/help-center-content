---
title: 'Budget Pacing'
createdAt: '2026-06-22T00:00:00.000Z'
updatedAt: '2026-06-22T00:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: budget-pacing
locale: pt
---

> ⚠️ O Budget Pacing está disponível somente para publicadores habilitados pela equipe VTEX. Para solicitar a ativação, entre em contato com o time de operações de anúncios (AdOps) da VTEX.

**Budget Pacing** é o mecanismo do [VTEX Ads](https://help.vtex.com/pt/tracks/retail-media/vtex-ads-primeiros-passos) que redistribui automaticamente o consumo de orçamento de uma campanha ao longo de um ciclo. Em vez de exigir um valor fixo de gasto a cada dia, o VTEX Ads monitora o ritmo de consumo e ajusta o teto diário para garantir que o orçamento total do ciclo seja entregue.

O objetivo é eliminar a necessidade de ajustes manuais diários por parte do operador de mídia quando uma campanha não gasta o esperado nos primeiros dias, especialmente as atreladas a Pedidos de Inserção mensais.

## Como funciona

Ao criar uma nova campanha, você define um único valor: a **alocação média diária.** A partir dessa informação, o sistema calcula a estimativa de gasto total do ciclo como dado derivado e passa a acompanhar o ritmo de entrega.

Uma vez ativo, o **Budget Pacing:**

- Monitora o consumo real da campanha em relação ao esperado para o período.
- Recalcula o teto diário de consumo na virada de cada dia, com base no saldo restante do ciclo.
- Acelera o ritmo de entrega nos dias seguintes a uma queda no consumo.
- Reduz o teto diário quando o consumo está acima do esperado.

> ℹ️ O mecanismo de redistribuição funciona nos bastidores. O que o operador vê e configura é a alocação média diária. O ajuste automático do teto diário não é exibido diretamente na interface de criação ou edição de campanhas.

### Variação do gasto diário

O gasto real de uma campanha com **Budget Pacing** varia ao longo do ciclo. Em alguns dias este gasto ficará abaixo da alocação média definida, e em outros poderá ser significativamente maior, especialmente quando o VTEX Ads precisar recuperar um período de subconsumo.

**Limites do teto diário:**

- **Nos últimos 30% do ciclo:** o teto diário pode chegar ao dobro da alocação média definida, para recuperar eventual subconsumo.
- **Em qualquer dia do ciclo:** o teto diário nunca ultrapassa três vezes a alocação média, mesmo em cenários de forte aceleração.

> ⚠️ O gasto total do ciclo tende a se manter dentro da estimativa calculada. A variação ocorre na distribuição dia a dia, não no total do ciclo.

## Tipos de campanhas e ciclos de orçamento

O comportamento do Budget Pacing varia conforme o tipo de campanha:

| Tipo de campanha | Ciclo de orçamento |
| --- | --- |
| **Com data de término** | O ciclo corresponde à duração da campanha, da data de início à data de término. |
| **Always-on** (sem data de término) | O ciclo tem duração fixa de 30 dias corridos, renovado automaticamente a partir da data de início da campanha. |

> ℹ️ O ciclo de 30 dias de **campanhas always-on** é calculado a partir da data de início da campanha, não pelo mês civil. Por exemplo, uma campanha iniciada em 10 de abril tem o primeiro ciclo de 10 de abril a 9 de maio.

### Campanhas já ativas

O Budget Pacing é aplicado somente às campanhas elegíveis a partir da data de ativação para o publicador. Campanhas com data de término que estejam ativas antes da habilitação seguem no modelo de orçamento diário fixo até o encerramento. **Campanhas always-on** já ativas migram automaticamente no início do próximo ciclo de 30 dias.

## Status de pacing

O **Budget Pacing** monitora o ritmo de consumo de cada campanha e atribui um status de pacing, exibido no [relatório de consumo de orçamento](https://help.vtex.com/pt/docs/tutorials/monitorar-consumo-de-orcamento):

| Status | Faixa de consumo esperado | Indicador |
| --- | --- | --- |
| **On track** | Entre 90% e 110% do esperado | Verde |
| **Underpacing** | Abaixo de 90% do esperado | Amarelo |
| **Overpacing** | Acima de 120% do esperado | Laranja |
| **Critical underpacing** | Abaixo de 60% nos últimos 3 dias | Vermelho |

Quando o status é **Underpacing** ou **Critical underpacing**, o Budget Pacing já está com ramp-up ativo (aceleração automática do orçamento), acelerando automaticamente o ritmo de entrega. O status **Critical underpacing** é apenas informativo e não leva a nenhuma ação dentro da plataforma.

> ℹ️ Se a campanha estiver com **Critical underpacing** por restrição de inventário (poucos produtos elegíveis, segmentação muito restrita ou CPM abaixo do valor competitivo), o ramp-up de orçamento não resolverá o problema.

