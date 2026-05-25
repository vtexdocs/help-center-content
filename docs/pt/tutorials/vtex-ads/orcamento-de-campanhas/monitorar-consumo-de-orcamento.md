---
title: 'Monitorar o consumo de orçamento'
createdAt: '2026-06-22T00:00:00.000Z'
updatedAt: '2026-06-22T00:00:00.000Z'
contentType: tutorial
productTeam: Others
slugEN: monitor-budget-consumption
locale: pt
---

Este artigo explica como acessar e interpretar o **relatório de consumo de orçamento** de campanhas com Budget Pacing no VTEX Ads. O relatório permite que operadores de mídia e gerentes de conta acompanhem o ritmo de entrega da campanha e identifiquem rapidamente desvios de consumo.

> ⚠️ O relatório de consumo de orçamento está disponível apenas para campanhas de publicadores com Budget Pacing ativo. Para entender como o mecanismo funciona, veja [Budget Pacing](https://help.vtex.com/pt/docs/tutorials/budget-pacing-pt).

## Acessar o relatório

1. No painel Admin do VTEX Ads, role a página até a listagem de campanhas.
2. Localize a campanha desejada e clique na linha correspondente.
3. Na seção **Investimento,** clique em `Ver relatório de consumo`.

> ℹ️ O link do relatório pode ser compartilhado diretamente com o gerente de conta ou com o cliente.

## Informações no relatório

O relatório é composto por cards de visão geral, gráficos de consumo e um gráfico de calor horário.

### Cards de visão geral

Os cards exibem os seguintes dados para o ciclo atual:

| Card | Informação exibida |
| --- | --- |
| **Badge de status** | Status atual de pacing da campanha. Veja a descrição de cada status na seção [Interpretar o status de pacing](#interpretar-o-status-de-pacing). |
| **Consumo do dia** | Total gasto no dia atual até o momento da consulta. |
| **Consumo da semana** | Total gasto nos últimos 7 dias. |
| **Consumo total do ciclo** | Total acumulado no ciclo atual. |
| **Previsão de fechamento** | Projeção de gasto total ao final do ciclo com base no ritmo atual de consumo. |

### Gráficos de consumo

O relatório exibe três gráficos principais:

- **Gasto total da campanha:** evolução do gasto acumulado no ciclo, com três curvas:
    - **Realizado:** o que já foi gasto.
    - **Meta:** o que deveria ter sido gasto até o momento.
    - **Previsão:** estimativa de fechamento.
- **Gasto diário:** barras por dia, com indicação de dias acima e abaixo da meta de consumo.
- **Gasto acumulado do dia com projeção de fechamento:** ritmo de consumo no dia atual e projeção para o restante do dia.

### Gráfico de calor horário

O gráfico de calor exibe o consumo hora a hora da campanha. As colunas representam as horas do dia (0h–23h) e as linhas representam os dias do período selecionado.

| Elemento | Significado |
| --- | --- |
| **Intensidade de cor da célula** | Proporcional ao valor gasto naquela hora. Quanto mais intensa a cor, maior o gasto. |
| **Marcação visual distinta** | Indica períodos em que o orçamento diário foi esgotado, diferenciando de células com zero gasto por falta de inventário. |
| **Tooltip** | Exibido ao passar o cursor sobre a célula. Mostra hora, data, valor gasto e status da campanha naquele momento. |

O componente também exibe uma **projeção de consumo diário** calculada com base no ritmo das horas já decorridas.

> ℹ️ A projeção de consumo diário assume ritmo constante ao longo do dia. Variações de inventário no decorrer do dia não são consideradas na projeção.

## Interpretar o status de pacing

O badge de status indica o ritmo de consumo da campanha em relação ao esperado para o período:

| Badge | Faixa de consumo | O que está acontecendo |
| --- | --- | --- |
| **On track** (verde) | Entre 90% e 110% do esperado | A campanha está consumindo dentro do ritmo esperado. Nenhuma ação é necessária. |
| **Underpacing** (amarelo) | Abaixo de 90% do esperado | O consumo está abaixo do ritmo esperado. O motor já está com ramp-up ativo, acelerando a entrega automaticamente. |
| **Overpacing** (laranja) | Acima de 120% do esperado | O consumo está acima do ritmo esperado. O motor reduziu o teto diário automaticamente. |
| **Critical underpacing** (vermelho) | Abaixo de 60% nos últimos 3 dias | O consumo está muito abaixo do esperado por 3 dias consecutivos. O motor está com ramp-up ativo, mas pode haver um problema na configuração da campanha que o Budget Pacing não consegue resolver sozinho. |

### Investigar Critical underpacing

Quando o status é **critical underpacing,** o motor já está tentando recuperar o ritmo. Se a campanha continua com consumo muito abaixo do esperado, verifique se há restrições na configuração:

- **Segmentação muito restrita:** poucos produtos ou categorias elegíveis para exibição.
- **CPM abaixo do valor competitivo:** a campanha pode estar perdendo leilões por lance insuficiente.
- **Baixo inventário no publicador:** o publicador pode não ter volume de tráfego suficiente para o período.

> ⚠️ Evite fazer ajustes manuais no valor de alocação enquanto investiga o problema. Uma intervenção manual durante o ciclo reinicia o cálculo do motor e pode dificultar o diagnóstico.

## Navegar entre ciclos

O seletor de ciclo, exibido no cabeçalho do relatório, permite consultar ciclos anteriores:

- **Campanhas com data de término:** o seletor limita-se às datas de duração da campanha.
- **Campanhas always-on:** o seletor cobre os últimos 31 dias.

> ℹ️ O ciclo exibido no relatório é calculado a partir do início do ciclo definido pelo motor, não pelo mês civil.
