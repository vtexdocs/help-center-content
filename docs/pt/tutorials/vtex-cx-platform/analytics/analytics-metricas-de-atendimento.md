---
title: "Analytics"
createdAt: 2025-09-12T16:25:21.244Z
updatedAt: 2026-11-10T19:45:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: analytics-support-metrics
locale: pt
categoryCover: true
---

A página de **Analytics** apresenta métricas sobre atendimentos, conversas de agentes de IA e envio de mensagens da sua operação. Use-a para monitorar atendimentos ativos em tempo real, avaliar o desempenho da equipe e analisar tendências operacionais em três dashboards: **Live Desk**, **Conversacional** e **WhatsApp**.

## Live Desk

O **Live Desk** é o painel de atendimento humano de Analytics. Ele está dividido em duas abas: **Monitoramento** e **Análise**.

Nessa página, você encontra os seguintes controles:

![Botões de atualização, filtros e exportação de dados](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/live-desk-controle-de-dados-e-filtros.png)

- `Atualizar`: Recarrega os dados do painel manualmente.
- `Filtros`: Abre as opções de filtragem por setor, fila, agente, tags, canal e período. Em **Canal**, pesquise e selecione um ou mais canais usados no projeto, como **Instagram**, **Facebook**, **WhatsApp**, **Teams** e **Email**. A seleção se aplica às métricas do painel.
- `Exportar dados`: Permite baixar os dados exibidos no painel.

Esses dados são atualizados automaticamente e você consegue visualizar a hora da última atualização ao lado do botão **Atualizar**.

Para configurar as preferências do Live Desk, acesse **Configurações > Live Desk**. Saiba mais no artigo [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

### Monitoramento

A aba **Monitoramento** exibe informações em tempo real sobre os atendimentos em andamento na sua operação.

Ela contém as seguintes seções:

![Tela de monitoramento 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-1.png)

#### 1. Status dos atendimentos

Apresenta um resumo do estado atual dos atendimentos com três contadores:

- **Em espera:** Número de contatos na fila aguardando o início do atendimento.
- **Em andamento:** Número de atendimentos conduzidos por um agente no momento.
- **Finalizado:** Número de atendimentos encerrados no dia corrente.

#### 2. Métricas de tempo agora

Exibe as médias de tempo calculadas em tempo real para os atendimentos ativos:

- **Tempo médio de espera:** Tempo médio que os contatos aguardam na fila antes de o atendimento começar.
- **Tempo médio para 1ª resposta:** Intervalo médio entre o início do atendimento e a primeira mensagem do agente.
- **Duração média da conversa:** Duração média total de cada atendimento, do início ao fim.

Cada métrica também exibe o valor máximo registrado no período.

Moderadores do projeto podem definir uma meta de tempo opcional para qualquer uma dessas métricas. As metas são independentes, então você pode configurar uma, algumas ou todas, e escolher a unidade em segundos, minutos ou horas. Quando uma meta está definida e o máximo atual dessa métrica a ultrapassa, o widget exibe um alerta visual. Uma métrica sem meta não exibe alerta.

As mesmas metas também podem notificar a operação fora do widget:

- Um toast aparece em **Analytics**, em qualquer dashboard aberto, quando o número de atendimentos acima do limite atinge o número configurado. O padrão é 5. O toast volta a aparecer somente depois que essa contagem fica abaixo do limite e o atinge de novo. Enquanto a contagem permanece no limite ou acima dele, o toast não aparece outra vez.
- Um e-mail pode ser enviado aos moderadores e gerentes selecionados, com uma mensagem por meta (tempo de espera, tempo para a 1ª resposta ou duração da conversa), usando a mesma regra de contagem do toast.

Para definir as metas, o número de atendimentos que devem ultrapassá-las e os destinatários de e-mail, consulte [Analytics: Configurar alertas operacionais](https://help.vtex.com/pt/docs/tutorials/analytics-configurar-alertas-operacionais).

#### 3. Atendimentos abertos por hora

Gráfico de linha que mostra a distribuição de atendimentos iniciados ao longo das horas do dia. Use esse gráfico para identificar os horários de pico de demanda e planejar a escala de agentes.

![Tela de monitoramento 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-2.png)

#### 4. Volume por fila

Tabela que lista todas as filas de atendimento ativas e exibe, para cada uma, a quantidade de atendimentos **em espera**, **em andamento** e **finalizados**. Cada lista é exibida em ordem decrescente.

Para expandir e visualizar a lista completa de filas, clique em `Ver todos`.

#### 5. Volume por tag

Tabela que lista todas as tags associadas aos atendimentos ativos e exibe, para cada uma, a quantidade de atendimentos **em espera** e **finalizados**. Permite identificar quais assuntos ou categorias concentram mais volume. Cada lista é exibida em ordem decrescente.

Para expandir e visualizar a lista completa de tags, clique em `Ver todos`.

#### 6. Volume por canal

Mostra como os atendimentos se distribuem entre os canais usados no projeto. Selecione **Em espera** ou **Em andamento** para ver a quantidade desse status. Cada canal exibe o ícone e o número de atendimentos. Com **Em andamento** selecionado, o rodapé mostra quantos canais têm atendimentos em andamento.

#### 7. CSAT

Exibe a avaliação de satisfação do cliente (CSAT) coletada ao fim dos atendimentos.

- **Avaliação geral:** Nota média calculada com base em todas as avaliações recebidas no período, com o total de atendimentos e de avaliações respondidas.
- **Avaliação por agente:** Nota individual de cada agente, com o número de atendimentos e avaliações recebidas. Os atendentes com as maiores notas aparecem nessa lista.
- **Distribuição das avaliações:** Gráfico de barras com o percentual e o número de respostas em cada nível: Muito satisfeito, Satisfeito, Neutro, Insatisfeito e Muito insatisfeito.

> ⚠️ Para exibir o widget de CSAT, ele precisa estar nativo em pelo menos um dos setores do projeto. Caso não esteja ativo, você precisa clicar no botão `Ativar` e ativá-lo em um setor. Para mais informações sobre os setores, leia o artigo [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

![Tela de monitoramento 3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/vtex-cx-platform/analytics/tela-de-monitoramento-3.png)

#### 8. Monitoramento detalhado

Tabela que lista os atendimentos individuais em tempo real. Você pode alternar entre as seguintes visões usando as abas na parte superior da tabela:

- **Em espera:** Contatos aguardando atendimento, com o tempo de espera acumulado.
- **Em andamento:** Atendimentos ativos, com dados de agente, setor, fila, canal, tag e tempos registrados. A coluna **Canal** exibe o ícone do canal. A coluna **Duração** exibe uma seta azul ao lado do tempo quando o atendimento está aguardando resposta.
- **Atendimento:** Histórico dos atendimentos do período.
- **Pausas personalizadas:** Registro de pausas realizadas pelos agentes.

Quando uma meta de tempo está configurada, a tabela destaca os atendimentos que a ultrapassam:

- **Em espera:** Destaca os atendimentos cujo tempo de espera ultrapassa a meta de tempo médio de espera.
- **Em andamento:** Destaca os atendimentos que ultrapassam a meta de tempo para a 1ª resposta ou a meta de duração da conversa. Se um atendimento ultrapassa as duas, a linha exibe o alerta de primeira resposta.

As colunas exibem informações como contato, tempo de espera, tempo para a primeira resposta, agente responsável, setor e fila.

Ao clicar em um dos atendimentos, você será redirecionado à página do Live Desk dentro de **Operações**.

### Análise

A aba **Análise** exibe dados históricos sobre atendimentos finalizados. Use o seletor de período para definir o intervalo de datas que deseja consultar.

Essa aba contém as seguintes seções:

#### 1. Métricas do período

Apresenta um resumo consolidado dos atendimentos finalizados no período selecionado:

| Métrica | Descrição |
| --- | --- |
| **Finalizado** | Total de atendimentos encerrados no período. |
| **Tempo médio de espera** | Tempo médio que os contatos aguardaram na fila antes de serem atendidos. |
| **Tempo médio para 1ª resposta** | Intervalo médio entre o contato entrar no atendimento e receber a primeira mensagem do agente. |
| **Tempo médio de resposta** | Média do tempo que um contato esperou para receber uma resposta a cada mensagem enviada. |
| **Duração média da conversa** | Tempo médio de cada atendimento, do início ao fim. |

#### 2. Atendimentos abertos por hora

Gráfico de linha que mostra a distribuição de atendimentos iniciados ao longo das horas do dia no período selecionado. Você pode usar esse gráfico para identificar padrões de demanda e planejar a escala de agentes.

#### 3. Volume por fila

Tabela que lista as filas de atendimento e exibe a quantidade de atendimentos finalizados em cada uma, ordenados de forma decrescente. Para ver a lista completa, clique em `Ver todos`.

#### 4. Volume por tag

Tabela que lista as tags associadas aos atendimentos e exibe a quantidade de atendimentos finalizados em cada uma, ordenados de forma decrescente. Essa tabela identifica os assuntos ou categorias que concentraram mais volume no período. Para ver a lista completa, clique em `Ver todos`.

#### 5. CSAT

Exibe a avaliação de satisfação do cliente (CSAT) coletada ao fim dos atendimentos no período selecionado.

- **Avaliação geral:** Nota média calculada com base em todas as avaliações recebidas, com o total de atendimentos e de avaliações respondidas.
- **Avaliação por agente:** Nota individual de cada agente, com o número de atendimentos, número de avaliações e média das avaliações recebidas.
- **Distribuição das avaliações:** Gráfico de barras com o percentual e o número de respostas em cada nível: Muito satisfeito, Satisfeito, Neutro, Insatisfeito e Muito insatisfeito.

#### 6. Análise detalhada

Tabela que lista os atendimentos individuais finalizados no período. Você pode alternar entre as seguintes abas:

- [Finalizado](#finalizado)
- [Atendente](#atendente)
- [Pausas personalizadas](#pausas-personalizadas)

##### Finalizado

Essa aba contém informações sobre os atendimentos encerrados, com dados de atendente, setor, fila, tempo de espera, tempo para a primeira resposta, duração, contato, protocolo e nota de CSAT. Você pode filtrar os resultados por **atendente**, **contato** e **protocolo**.

| Coluna | Descrição |
| --- | --- |
| **Atendente** | Nome do atendente. |
| **Setor** | Setor do atendente (como **Logística**, **Finanças**, entre outros). |
| **Fila** | Fila do atendimento (como **Rastreio**, **Pagamentos**, entre outros). |
| **Tempo de espera** | Tempo que o contato esperou na fila antes de o atendimento começar. |
| **Tempo para a 1ª resposta** | Intervalo médio entre o contato entrar no atendimento e receber a primeira mensagem do agente. |
| **Duração** | Tempo que durou o atendimento do início ao fim. |
| **Contato** | Nome do cliente que entrou em contato com o atendimento. |
| **Protocolo** | Número do protocolo do atendimento. |
| **Nota de CSAT** | Nota de satisfação do cliente a partir da resposta nativa de CSAT daquele atendimento encerrado, quando o contato respondeu à pesquisa. |

##### Atendente

Essa aba fornece informações dos atendentes no período selecionado. Você também consegue filtrar por atendente, no campo **Atendente**.

| Coluna | Descrição |
| --- | --- |
| **Atendente** | Nome do atendente. |
| **Total de atendimentos** | Número de atendimentos desse atendente no período selecionado. |
| **Tempo médio para a 1ª resposta** | Intervalo médio entre o contato entrar no atendimento e receber a primeira mensagem do atendente. |
| **Tempo médio de resposta** | Intervalo médio das respostas do atendente. |
| **Duração média** | Tempo de duração média de todos os atendimentos do atendente. |
| **Tempo em atendimento** | Tempo de atendimento total do atendente. |

##### Pausas personalizadas

Nessa aba, você consegue visualizar as pausas realizadas pelos agentes. Cada coluna se refere a uma pausa personalizada e mostra quanto tempo o atendente pausou no período selecionado.

Para saber como adicionar, remover ou editar as pausas personalizadas, leia o artigo [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

## Conversacional

O dashboard **Conversacional** oferece dados sobre as conversas gerenciadas por agentes de IA na sua operação. Por meio dele, você acompanha o volume de conversas, o comportamento dos contatos, o desempenho dos agentes de IA, a recuperação de carrinho abandonado e os indicadores numéricos que você define para a sua operação.

> ℹ️ O dashboard **Conversacional** inclui janelas de conversa encerradas até 23:59:59 do dia de início, no fuso horário do projeto. As conversas do dia atual aparecem depois que esse período é encerrado.

O dashboard oferece os seguintes controles:

- `Seletor de período:` Define o intervalo de datas para a exibição dos dados.
- `Atualizar`: recarrega os dados do painel manualmente.
- `Exportar dados`: permite baixar os dados exibidos no painel.

### Recuperação de carrinho abandonado

**Recuperação de carrinho abandonado** mostra os resultados das mensagens de recuperação de carrinho abandonado no período selecionado no topo do dashboard.

> ℹ️ **Recuperação de carrinho abandonado** aparece quando a automação de recuperação de carrinho abandonado está ativa na conta. Com a automação inativa, esse widget não aparece no dashboard.

| Métrica | Descrição |
| --- | --- |
| **Enviadas** | Número de mensagens de recuperação de carrinho abandonado enviadas no período selecionado. |
| **Entregues** | Número de mensagens de recuperação entregues aos contatos. |
| **Lidas** | Número de mensagens de recuperação lidas pelos contatos. |
| **Cliques** | Número de cliques nas mensagens de recuperação. |
| **Receita recuperada** | Valor total das vendas convertidas no período selecionado. |
| **RoAS** | Múltiplo de retorno exibido ao lado de **Receita recuperada**. |
| **Total de envios** | Número total de mensagens de recuperação enviadas no período selecionado. |
| **Vendas convertidas** | Número de vendas convertidas no período selecionado. |
| **Taxa de conversão** | Percentual de mensagens de recuperação enviadas que resultaram em uma venda convertida. |
| **Ticket médio** | Valor médio das vendas convertidas no período selecionado. |

### Conversas

A seção **Conversas** apresenta um resumo do volume e da distribuição das conversas no período selecionado.

| Métrica | Descrição |
| --- | --- |
| **Total de conversas** | Número total de conversas iniciadas no período. |
| **Atendido por IA** | Percentual e número total de conversas encerradas inteiramente pelo agente de IA, sem transferência para atendimento humano. |
| **Não atendido por IA** | Percentual e número total de conversas em que o agente de IA não conseguiu completar o atendimento. |
| **Transferidas para live desk** | Percentual e número total de conversas que necessitaram de atendimento humano no Live Desk. |

### Contatos

A seção **Contatos** exibe métricas sobre os contatos que iniciaram conversas no período.

| Métrica | Descrição |
| --- | --- |
| **Contatos únicos** | Número de contatos distintos que iniciaram pelo menos uma conversa no período. |
| **Contatos recorrentes** | Número de contatos que iniciaram mais de uma conversa. Exibe também o percentual em relação ao total de contatos únicos. |
| **Média de conversas por contato** | Média de conversas iniciadas por contato no período. |

### Assuntos

A seção **Assuntos** permite categorizar e analisar as conversas por tema. Após adicionar assuntos, esta seção exibe a distribuição das conversas por categoria, ajudando a identificar os temas mais recorrentes na sua operação.

Para começar, clique em <i class="fas fa-plus" aria-hidden="true"></i> `Adicione seu primeiro assunto` e defina as categorias relevantes para a sua operação.

### Valores gerados pelo agente

A seção **Valores gerados pelo agente** mostra indicadores numéricos que você define para a sua operação. Cada indicador aparece como um card com o nome definido e o valor do período selecionado. O valor pode ser um montante monetário ou um número.

Para adicionar um indicador, clique no botão de adicionar da seção. Escolha como o valor é calculado: total, média, mínimo ou máximo.

### Personalize seu dashboard

Você pode adicionar widgets ao dashboard para exibir as métricas mais relevantes para a sua operação. Para isso, clique em <i class="fas fa-plus" aria-hidden="true"></i> `Adicionar widget` e escolha as métricas que deseja acompanhar.

Você pode escolher entre widgets nativos do VTEX CX Platform ou widgets personalizados.

#### Widgets nativos

- **CSAT:** Acompanha o nível de satisfação dos clientes a partir da pontuação do CSAT.
- **NPS:** Mede a probabilidade de um contato recomendar o serviço recebido.
- **Agentes mais usados:** Classifica os agentes mais usados nas conversas do período.
- **Ferramentas mais usadas:** Classifica as ferramentas mais usadas nas conversas do período.
- **Funil e dados de vendas:** Relaciona as conversas com os resultados comerciais gerados no período.
- **Termos mais buscados:** Lista os termos de busca que os compradores mais usam nas conversas do período.
- **Produtos mais adicionados ao carrinho:** Lista os produtos que os compradores mais adicionam ao carrinho nas conversas do período.

> ℹ️ O widget **Termos mais buscados** aparece automaticamente quando o agente Concierge está atribuído ao projeto. O widget **Produtos mais adicionados ao carrinho** aparece quando o agente Payments está atribuído. Você pode removê-los do dashboard e adicioná-los de novo depois. Eles mostram a atividade de busca e de adição ao carrinho dentro das conversas. Eles não medem compras concluídas, taxas de conversão nem impacto no negócio.

#### Widgets personalizados

- **Gráfico de barras horizontal:** Exibe os dados de um agente selecionado em um gráfico de barras.
- **Tabela cruzada:** Compara duas métricas entre si em uma tabela.
- **Números absolutos:** Exibe o valor numérico total de uma métrica selecionada.

## WhatsApp

O dashboard WhatsApp exibe dados sobre o volume de mensagens enviadas pelo número do WhatsApp cadastrado na sua operação. Por meio dele, você acompanha a distribuição das mensagens por categoria e filtra os dados por template e período.

> ℹ️ Cada número do WhatsApp com integração ativa com a Meta tem o próprio dashboard, criado automaticamente. Para acessar informações de atendimento de outro número, use o seletor de dashboard.

O dashboard oferece os seguintes controles:

- **Seletor de período:** Define o intervalo de datas para a exibição dos dados.
- **Seletor de template favorito:** Exibe a lista dos templates que você favoritou. Selecione um template para visualizar mais informações.
- **Busca de template:** Exibe a lista de todos os templates da sua loja. Selecione um template para visualizar mais informações.

Após selecionar um template, o gráfico exibe:

- **Mensagens enviadas:** Número total de mensagens enviadas no período selecionado para esse template.
- **Mensagens entregues:** Número total e porcentagem das mensagens entregues aos contatos.
- **Mensagens lidas:** Número total e porcentagem das mensagens lidas pelos contatos.
- **Cliques:** Número total e porcentagem de cliques nas mensagens enviadas para os contatos.

A tabela de **Cliques nos botões** exibe as informações dos botões clicados pelos contatos.

| Dado | Descrição |
| --- | --- |
| **Texto do botão** | Texto do botão que o cliente clicou. |
| **Tipo** | Tipo do botão, como link ou resposta rápida. |
| **Total** | Total de cliques no botão. |
| **Taxa de cliques** | Porcentagem de cliques no botão com base na quantidade de mensagens enviadas. |

Para visualizar todos os dados, clique em `Todos os dados` ao lado do nome do template. Essa seção exibe uma tabela com o volume de mensagens enviadas, agrupadas por categoria de template do WhatsApp Business.

| Categoria | Descrição |
| --- | --- |
| **Marketing** | Mensagens promocionais, como ofertas, lançamentos e comunicações de campanha. |
| **Serviço** | Mensagens de atendimento ao cliente iniciadas em resposta a uma conversa aberta pelo contato. |
| **Utilitário** | Mensagens transacionais, como confirmações de pedido, atualizações de entrega e notificações de conta. |
| **Autenticação** | Mensagens de verificação de identidade, como senhas de uso único (OTP). |
