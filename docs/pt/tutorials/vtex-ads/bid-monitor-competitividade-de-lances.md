---
title: 'Bid Monitor (competitividade de lances)'
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: bid-monitor-bid-competitiveness
locale: pt
---

> ⚠️ O **Bid Monitor** está em Open Beta e é ativado por publisher. Durante esse período, o indicador pode não estar visível em todas as contas.

**Bid Monitor** é o indicador de competitividade do [VTEX Ads](https://help.vtex.com/pt/tracks/retail-media/vtex-ads-primeiros-passos) que mostra, na tela de **Anúncios** do painel Admin do VTEX Ads, se o lance de um anúncio está bem posicionado em relação à concorrência. O indicador aparece ao lado do valor do CPC (custo por clique) ou do CPM (custo por mil impressões) e, quando o lance está abaixo da faixa competitiva da categoria, exibe uma sugestão de valor que pode ser aplicada com um clique.

O indicador está disponível para os dois perfis que operam campanhas no VTEX Ads:

- **Anunciante:** vê o indicador e pode aplicar a sugestão de lance.
- **Publisher:** vê o mesmo indicador nos anúncios da sua rede, em modo somente leitura, sem alterar valores.

## Como funciona

Para cada anúncio, o VTEX Ads compara o CPC ou o CPM atual com o que outros anunciantes pagam por posições parecidas, ou seja: mesma categoria de produto, mesmo publisher e mesmo tipo de anúncio. Dessa comparação resultam dois elementos:

- **Nível de competitividade:** indicador com cor e rótulo que mostra o quão competitivo o lance está naquele momento.
- **Sugestão de valor:** exibida quando o lance atual está abaixo da faixa competitiva da categoria. Se exibida, um anunciante pode clicar para atualizar o CPC ou CPM do anúncio para o valor sugerido.

A comparação usa a categoria do produto anunciado, não a da campanha, e considera o nível mais específico da hierarquia de categorias que tenha dados suficientes. Quando não há concorrência suficiente em uma categoria mais específica, a comparação passa a usar a categoria acima dela.

Por isso, o nível de um anúncio pode mudar sem que você altere o lance: se os concorrentes ajustarem os lances deles, ou se o volume de concorrência da categoria mudar, a posição relativa do seu anúncio também muda. O indicador é sempre uma fotografia do momento.

> ℹ️ O indicador é uma referência de mercado, não uma garantia. Ele reflete a posição do lance em relação à concorrência, mas o resultado do leilão de anúncios também depende da qualidade e da relevância do anúncio, não só do valor do lance.



## Níveis de competitividade

O **Bid Monitor** classifica o lance em quatro níveis:


| Nível                 | Indicador        | O que significa                                                                                                 |
| --------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| **Lance forte**       | Verde (completo) | O lance já está entre os mais competitivos da categoria. Nenhuma sugestão é necessária.                         |
| **Lance razoável**    | Verde (parcial)  | O lance está acima da média da categoria. Há espaço para melhorar, mas a situação não é crítica.                |
| **Lance fraco**       | Laranja          | O lance está abaixo da maioria dos concorrentes da categoria. Uma sugestão de valor mais competitivo é exibida. |
| **Lance muito fraco** | Vermelho         | O lance está bem abaixo do mercado. A sugestão de valor é exibida com prioridade.                               |




## Quando o indicador não aparece

Se a funcionalidade está ativa para o publisher e você vê apenas o valor do CPC ou CPM, sem o nível de competitividade, o motivo pode ser um destes dois:

- **Campanha com estratégia automática (por objetivo):** quando o sistema controla o CPC ou CPM automaticamente, o indicador não é exibido, porque uma sugestão de valor fixo não se aplica a um lance dinâmico.
- **Dados insuficientes:** quando há poucos anunciantes concorrendo na categoria, ou quando o anúncio é muito recente, não há base de comparação. O indicador passa a aparecer conforme a concorrência na categoria aumenta.



## Aplicar uma sugestão

Quando o indicador exibe uma sugestão de valor, o anunciante pode clicar em `Aplicar` para atualizar o CPC ou CPM do anúncio com o valor sugerido. O valor do lance é atualizado imediatamente.

Publishers veem a sugestão em modo somente leitura e não podem aplicá-la.

> ℹ️ O nível de competitividade não muda no mesmo instante do clique. Ele é recalculado na próxima vez que a lista de anúncios é carregada. Se o indicador continuar com o nível anterior logo após aplicar a sugestão, recarregue a lista de anúncios.



## Desfazer uma sugestão aplicada

O **Bid Monitor** não tem um botão para desfazer uma sugestão aplicada. Para voltar ao lance anterior, edite o CPC ou CPM do anúncio manualmente, usando o mesmo controle de edição de lance. O valor anterior está registrado no histórico de alterações da campanha.

## Bid Monitor e percentual de impressões

O **Bid Monitor** e as métricas de [percentual de impressões](https://help.vtex.com/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads#metricas-de-percentual-de-impressoes) medem coisas diferentes e, juntos, ajudam a decidir o que ajustar em um anúncio:

- **Bid Monitor:** mostra como o lance está em relação à referência da categoria e sugere um lance mais competitivo. É uma ferramenta para melhorar a classificação do anúncio na sua categoria.
- **Percentual de impressões:** mede quanto do total de oportunidades de leilão o anúncio capturou, e quanto foi perdido por classificação ou por orçamento. Considera todas as categorias em que o anúncio disputa e fatores além do lance.

A classificação no leilão depende do lance e da qualidade do anúncio. Por isso, a leitura combinada dos dois indicadores aponta para ações diferentes:


| Cenário                                                                                                                                                                                                                                 | O que está acontecendo                                                                                                                                                                                                        | O que fazer                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Indicador verde (**Lance forte** ou **Lance razoável**) e [percentual de impressões perdidas (por classificação)](https://help.vtex.com/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads#metricas-de-percentual-de-impressoes) baixo | O lance está competitivo na categoria e o anúncio ganha a maioria dos leilões que disputa.                                                                                                                                    | Manter o lance. Se o nível mudar para **Lance fraco** ou **Lance muito fraco**, aplique a nova sugestão para acompanhar as mudanças do mercado. |
| Indicador laranja ou vermelho (**Lance fraco** ou **Lance muito fraco**) e percentual de impressões perdidas (por classificação) alto                                                                                                   | O lance está abaixo da maioria dos concorrentes da categoria. O anúncio disputa muitos leilões, mas perde para concorrentes com lances maiores.                                                                               | Aplicar a sugestão do **Bid Monitor**. Um lance mais competitivo ajuda a ganhar parte dos leilões perdidos.                                     |
| Indicador verde (**Lance forte**) e percentual de impressões perdidas (por classificação) alto                                                                                                                                          | O lance está entre os mais competitivos da categoria, mas o anúncio perde muitos leilões. A classificação do leilão também considera a qualidade e a relevância do anúncio, como taxa de cliques, taxa de conversão e imagem. | Melhorar a qualidade do anúncio (imagem, descrição, categoria e precificação). Aumentar o lance não resolve quando o problema é relevância.     |


> ℹ️ Para saber como as métricas de percentual de impressões são calculadas e onde encontrá-las, consulte [Métricas de percentual de impressões](https://help.vtex.com/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads#metricas-de-percentual-de-impressoes).

