---
title: "Analytics: Criar dashboard personalizado"
createdAt: 2026-05-29T16:25:21.244Z
updatedAt: 2026-06-16T18:47:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: create-analytics-dashboard
locale: pt
---

O módulo de **Analytics** do VTEX CX Platform permite criar dashboards personalizados com widgets que exibem métricas específicas da sua operação. Você pode usar esses dashboards para monitorar funis de atendimento, resultados de fluxo e dados de vendas na VTEX, entre outros dados.

## Criar um dashboard

Para criar um dashboard personalizado, siga as etapas a seguir:

1. No módulo de **Analytics**, clique no menu ao lado do nome **Analytics**.
2. Clique em <i class="fas fa-plus" aria-hidden="true"></i>`Novo dashboard`.
3. Insira um nome para o dashboard, selecione a moeda da sua loja e escolha um layout.
4. Clique em `Salvar`. O novo dashboard será aberto.

> ⚠️ O layout escolhido afeta os widgets e os dados que eles exibem. Os widgets em formato de quadrado oferecem três modelos: Execuções, Resultados do fluxo e Cruzamento de dados. Os widgets em formato de coluna oferecem quatro modelos: Funil, Recorrência, VTEX e Conversão de templates.

## Adicionar e configurar widgets quadrados

Após criar o dashboard, adicione os widgets que deseja exibir. Cada espaço vazio no dashboard corresponde a um widget a ser configurado.

Para configurar um widget quadrado, siga as etapas abaixo:

1. Clique no botão do card quadrado que você deseja configurar. A **Galeria de widgets** abrirá ao lado.
2. Selecione o tipo de widget que deseja configurar:
  - [Execuções](#execuções).
  - [Resultado do fluxo](#resultado-do-fluxo).
  - [Cruzamento de dados](#cruzamento-de-dados).
3. Preencha os campos de configuração do widget selecionado.
4. Clique em `Salvar`.

Para redefinir as configurações de um widget, clique em `Redefinir widget` no painel de configuração do widget.

### Execuções

O widget **Execuções** exibe a lista de execuções de um fluxo.

Para configurar o widget, preencha os campos abaixo:

1. Em **Dê um nome para o card**, insira um nome para identificar o widget no dashboard.
2. Selecione o fluxo cujas execuções deseja monitorar.
3. Escolha um emoji para o widget. Esse passo é opcional. O emoji fica ao lado da métrica e pode ajudar a identificar o widget visualmente.
4. Clique em `Salvar`.

### Resultado do fluxo

O widget **Resultado do fluxo** retorna o resultado de um fluxo e permite realizar operações básicas com os dados.

Para configurar o widget, preencha os campos abaixo:

1. Em **Dê um nome para o card**, insira um nome para identificar o widget no dashboard.
2. Selecione o fluxo que deseja monitorar.
3. Em **Resultado do fluxo**, busque ou selecione o resultado que deseja exibir.
4. Na tabela de **Operação**, selecione as operações que serão aplicadas ao resultado:
   - Total ou Média.
   - Valor mais alto ou Menor valor.
5. Para monitorar dados com símbolo de moeda, ative a caixa de seleção de **Moeda**.
6. Escolha um emoji para o widget. Esse passo é opcional. O emoji fica ao lado da métrica e pode ajudar a identificar o widget visualmente.
7. Clique em `Salvar`.

### Cruzamento de dados

O widget **Cruzamento de dados** combina dois valores para gerar uma métrica personalizada.

Para configurar o widget, preencha os campos abaixo:

1. Em **Dê um nome para o card**, insira um nome para identificar o widget no dashboard.
2. Em **Primeiro valor**, selecione o primeiro fluxo e o tipo de resultado:
   - **Execuções do fluxo:** Usa o número de execuções como valor.
   - **Resultado do fluxo:** Usa o resultado de uma etapa específica do fluxo como valor.
     - Caso selecione **Resultado do fluxo**, você precisa escolher um resultado do fluxo e qual tipo de dado deseja (soma, média, mínimo ou máximo).
3. Em **Segundo valor**, selecione o segundo fluxo e o tipo de resultado:
   - **Execuções do fluxo:** Usa o número de execuções como valor.
   - **Resultado do fluxo:** Usa o resultado de uma etapa específica do fluxo como valor.
     - Caso selecione **Resultado do fluxo**, você precisa escolher um resultado do fluxo e qual tipo de dado deseja (soma, média, mínimo ou máximo).
4. Em **Operação**, escolha como os dois valores serão combinados:
  - **Multiplicar:** Multiplica o primeiro valor pelo segundo.
  - **Diferença:** Calcula a diferença entre os dois valores.
  - **Soma:** Soma os dois valores.
  - **Porcentagem:** Calcula a porcentagem do primeiro valor em relação ao segundo.
5. Para monitorar dados com símbolo de moeda, ative a caixa de seleção de **Moeda**.
6. Clique em `Salvar`.

## Adicionar e configurar widgets de coluna

Após criar o dashboard, adicione os widgets que deseja exibir. Cada espaço vazio no dashboard corresponde a um widget a ser configurado.

Para configurar um widget de coluna, siga as etapas abaixo:

1. Clique no botão da coluna que você deseja configurar. A **Galeria de widgets** abrirá ao lado.
2. Selecione o tipo de widget que deseja configurar:
  - [Funil](#funil).
  - [Recorrência](#recorrência).
  - [VTEX](#vtex).
  - [Conversão de templates](#conversão-de-templates).
3. Preencha os campos de configuração do widget selecionado.
4. Clique em `Salvar`.

Para redefinir as configurações de um widget, clique em `Redefinir widget` no painel de configuração do widget.

### Funil

O widget **Funil** exibe dados em um gráfico de funil, mostrando como o volume de atendimentos diminui a cada etapa de um fluxo.

Para configurar o widget, preencha os campos abaixo:

1. Em **Primeira métrica**, insira um nome para a primeira métrica e selecione o fluxo de origem.
2. Em **Segunda métrica**, insira um nome para a segunda métrica e selecione o fluxo de origem.
3. Em **Terceira métrica**, insira um nome para a terceira métrica e selecione o fluxo de origem.
4. Para incluir outras métricas, clique em `+ Adicionar métrica` e preencha os campos.
5. Clique em `Salvar`.

> ℹ️ O widget Funil precisa de no mínimo três métricas para gerar a visualização e aceita até cinco métricas.

### Recorrência

O widget **Recorrência** exibe resultados recorrentes em gráficos, como as avaliações de uma pesquisa de satisfação ou CSAT.

Para configurar o widget, preencha os campos abaixo:

1. Em **Nome da métrica**, insira um nome para identificar o widget no dashboard.
2. Em **Selecionar fluxo de origem**, selecione o fluxo desejado.
3. Em **Resultado do fluxo**, busque ou selecione o resultado recorrente que deseja visualizar.
4. Clique em `Salvar`.

### VTEX

O widget **VTEX** exibe dados de vendas da sua loja VTEX.

Para configurar o widget, preencha os campos abaixo:

1. Em **Nome do widget**, insira um nome para identificar o widget no dashboard.
2. Em **UTM**, insira a UTM da VTEX correspondente à sua loja e app.
3. Clique em `Salvar`.

### Conversão de templates

O widget **Conversão de templates** acompanha a taxa de conversão entre mensagens de template enviadas e vendas concluídas.

Para configurar o widget, preencha os campos abaixo:

1. Em **Nome do widget**, insira um nome para identificar o widget no dashboard.
2. Em **Definir metadados**, selecione o número de WhatsApp associado ao envio dos templates.
3. Em seguida, selecione os templates cuja conversão deseja acompanhar.
4. Em **Definir dados da VTEX**, insira a UTM da VTEX correspondente à sua loja e app.
5. Clique em `Salvar`.
