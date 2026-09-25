---
title: 'Consultar Carteira de Crédito'
createdAt: '2026-09-27T00:00:00.000Z'
updatedAt: '2026-09-27T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: checking-credit-wallet
locale: pt
---

Para acessar a Carteira de Crédito, clique no seu avatar — identificado pela inicial do seu e-mail — no canto superior direito da tela. Em seguida, clique em **Informações de faturamento > Crédito**.

> ⚠️ Somente usuários com o perfil de acesso [Finance](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance), [Finance Full Access](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance-full-access) ou com o recurso `View Credtis` de [Billing](/pt/docs/tutorials/perfis-de-acesso-predefinidos#billing) vinculados ao perfil podem acessar **Informações de faturamento > Crédito** no Admin VTEX.

<!-- TODO: inserir imagem da página Crédito (visão geral da Carteira de Crédito) -->

Na página **Crédito**, você encontra as seguintes informações:

- **Saldo total**: o saldo atual da sua Carteira de Crédito.
- **Cobertura estimada para o consumo atual**: estimativa de quantos meses o saldo atual cobriria, mantendo o ritmo de consumo recente. É uma projeção, não uma garantia — muda conforme sua operação cresce ou o consumo varia.
- **Resumo anual de crédito**: resumo anual do crédito, com dois indicadores:
  - **Entradas e saídas**: total de crédito gerado ("entradas") e efetivamente usado para abater cobranças de Master Data ("saídas") no período. Crédito expirado é contabilizado separadamente (coluna **Expirado** do extrato) e não entra nesse número.
  - **Taxa de consumo**: percentual do crédito acumulado que foi consumido no período. Como o crédito não utilizado continua acumulando para os meses seguintes, quanto mais baixo esse percentual, maior a folga do seu saldo em relação ao consumo de Master Data.
- **Extrato de crédito**: extrato mês a mês com saldo inicial, crédito gerado, valor usado, valor expirado e saldo final.

### Detalhamento por Master Data

<!-- TODO: inserir imagem da página Detalhamento por Master Data -->

Ao abrir o detalhamento de Master Data dentro da página **Crédito**, você encontra:

- **Custo estimado para o próximo ciclo**: custo bruto de Master Data no próximo ciclo, calculado com base no volume de documentos armazenados na última atualização do dashboard (semanal) — antes de aplicar o crédito da Carteira de Crédito.
- **Cobertura de crédito**: percentual do custo estimado de Master Data para o próximo ciclo que é coberto pelo saldo atual da Carteira de Crédito. Se for menor que 100%, a diferença é cobrada na fatura.
- **Documentos armazenados**: volume atual de documentos e o tier de preço correspondente.
- **Volume de documentos** (gráfico): volume de documentos armazenados por mês. A barra do mês corrente mostra o acumulado até a última atualização do dashboard (última segunda-feira), não o volume final do mês — diferente das barras de meses já fechados, que mostram o total definitivo daquele mês.

> ℹ️ O indicador **Cobertura de crédito** responde a uma pergunta diferente do **Cobertura estimada para o consumo atual** da página geral, que é medido em meses e indica por quanto tempo o saldo total dura no ritmo de consumo atual. O **Coverage from credit** do Master Data é especificamente sobre a suficiência do saldo para o ciclo atual, isto é, se o custo do ciclo está 100% coberto ou se vai gerar cobrança adicional.