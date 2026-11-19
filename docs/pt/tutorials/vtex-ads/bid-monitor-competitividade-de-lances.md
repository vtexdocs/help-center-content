---
title: 'Bid Monitor (competitividade de lances)'
createdAt: 2026-11-25T00:00:00.000Z
updatedAt: 2026-11-25T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: bid-monitor-bid-competitiveness
locale: pt
---

> ⚠️ O **Bid Monitor** está em Open Beta e disponível para todas as contas em campanhas 1:1. Campanhas Network não exibem o **Bid Monitor**.

**Bid Monitor** é o indicador de competitividade do [VTEX Ads](https://help.vtex.com/pt/docs/tracks/vtex-ads-primeiros-passos) que mostra, no painel Admin do **VTEX Ads**, se o lance de um anúncio está bem posicionado em relação à concorrência. O indicador é um anel exibido ao lado do valor do CPC (custo por clique) ou do CPM (custo por mil impressões). Quando o lance pode ficar mais competitivo, o **Bid Monitor** também exibe uma sugestão de valor, que o anunciante aplica dentro da campanha, conforme descrito em [Aplicar uma sugestão](#aplicar-uma-sugestao).

O indicador está disponível para os dois perfis que operam campanhas no **VTEX Ads**:

- **Anunciante:** vê o anel e a sugestão de valor, e pode aplicar a sugestão dentro da campanha.
- **Publisher:** vê o mesmo anel e a mesma sugestão nos anúncios 1:1 que publica, sem a opção `Aplicar`.

## Onde o indicador aparece

Para ver o indicador, faça login no painel Admin do **VTEX Ads** e clique na aba **Anúncios**. O anel aparece ao lado do valor na coluna **CPC** ou **CPM** em dois lugares:

- **Lista de anúncios:** na aba **Anúncios**, a sugestão de valor aparece abaixo do lance, mas é apenas informativa. Ao passar o mouse sobre ela, um texto indica que é preciso acessar a campanha para alterar o lance.
- **Tabela de anúncios da campanha:** ao clicar em `Ver campanha`, a sugestão aparece abaixo do lance e pode ser clicada para alterar o valor.

## Como funciona

Para cada anúncio, o **VTEX Ads** compara o CPC ou o CPM atual com o que outros anunciantes pagam por posições parecidas, ou seja: mesma categoria de produto, mesmo publisher e mesmo tipo de anúncio. Dessa comparação resultam dois elementos:

- **Nível de competitividade:** anel com cor e preenchimento que mostra o quão competitivo o lance está naquele momento.
- **Sugestão de valor:** exibida quando o lance atual pode ficar mais competitivo. Na **Lista de anúncios**, a sugestão é apenas informativa. O anunciante aplica a sugestão na tela da campanha.

A comparação usa a categoria do produto anunciado, não a da campanha, e considera o nível mais específico da hierarquia de categorias que tenha dados suficientes. Quando não há concorrência suficiente em uma categoria mais específica, a comparação passa a usar a categoria acima dela.

Por isso, o nível de um anúncio pode mudar sem que você altere o lance: se os concorrentes ajustarem os lances deles, ou se o volume de concorrência da categoria mudar, a posição relativa do seu anúncio também muda. O indicador é sempre uma fotografia do momento.

> ℹ️ O indicador é uma referência de mercado, não uma garantia. Ele reflete a posição do lance em relação à concorrência, mas o resultado do leilão de anúncios também depende da qualidade e da relevância do anúncio, não só do valor do lance.

## Níveis de competitividade

O **Bid Monitor** classifica o lance em quatro níveis, indicados pela cor e pelo preenchimento do anel:

| Nível                 | Indicador        | O que significa                                                                                                 |
| :-------------------- | :--------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Lance forte**       | Verde (completo) | O lance já está entre os mais competitivos da categoria. Nenhuma sugestão é exibida.                            |
| **Lance razoável**    | Verde (parcial)  | O lance está acima da média da categoria. Há espaço para melhorar, mas a situação não é crítica.                |
| **Lance fraco**       | Laranja          | O lance está abaixo da maioria dos concorrentes da categoria. Uma sugestão de valor mais competitivo é exibida. |
| **Lance muito fraco** | Vermelho         | O lance está bem abaixo do mercado. Uma sugestão de valor mais competitivo é exibida.                           |

## Quando o indicador não aparece

O anel não é exibido nos seguintes casos:

- **Campanha Network:** o **Bid Monitor** está disponível apenas em campanhas 1:1.
- **Campanha com estratégia automática por objetivo:** quando o sistema controla o CPC ou CPM automaticamente, a célula exibe um traço no lugar do indicador, porque uma sugestão de valor fixo não se aplica a um lance dinâmico.
- **Menos de duas campanhas concorrentes:** quando há menos de duas campanhas concorrendo no mesmo publisher, na mesma categoria de produto e no mesmo tipo de anúncio, apenas o valor do lance é exibido. O anel passa a aparecer conforme a concorrência aumenta.
- **Anúncio pausado ou em rascunho:** o indicador não é exibido para anúncios que não estão ativos.

## Aplicar uma sugestão

O anunciante aplica a sugestão de valor dentro da campanha, pelo editor de lance. Para isso, siga os passos abaixo:

1. Faça login no painel Admin do **VTEX Ads** e clique na aba **Anúncios**.
2. Na **Lista de anúncios**, localize o anúncio com uma sugestão de valor abaixo do CPC ou CPM.
3. Clique no nome da campanha.
4. Na tabela de anúncios da campanha, clique na sugestão abaixo do valor do lance.
5. No editor de lance, que abre com o valor sugerido preenchido, confira o valor ou edite-o, se necessário.
6. Clique em `Aplicar`.

O CPC ou CPM do anúncio é atualizado com o valor confirmado. Para fechar o editor sem alterar o lance, clique em `Cancelar`.

Publishers veem a sugestão de valor, mas não têm a opção `Aplicar`.

## Desfazer uma sugestão aplicada

O **Bid Monitor** não tem um botão para desfazer uma sugestão aplicada. Para voltar ao lance anterior, clique no ícone de lápis ao lado do valor do CPC ou CPM na tabela de anúncios da tela campanha e edite o lance manualmente.

## Bid Monitor e **percentual de impressões**

O **Bid Monitor** e as métricas de **[percentual de impressões](https://help.vtex.com/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads#metricas-de-percentual-de-impressoes)** medem coisas diferentes e, juntos, ajudam a decidir o que ajustar em um anúncio:

- **Bid Monitor:** mostra como o lance está em relação à referência da categoria e sugere um lance mais competitivo. É uma ferramenta para melhorar a posição do anúncio na sua categoria.
- **Percentual de impressões:** mede quanto do total de oportunidades de leilão o anúncio capturou, e quanto foi perdido por classificação ou por orçamento. Considera todas as categorias em que o anúncio disputa e fatores além do lance.

A classificação no leilão depende do lance e da qualidade do anúncio. Por isso, a leitura combinada dos dois indicadores aponta para ações diferentes:

| Cenário                                                                                                                                                                                                                    | O que está acontecendo                                                                                                                                                                                                        | O que fazer                                                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lance forte** ou **Lance razoável** e **[percentual de impressões perdidas (por classificação)](https://help.vtex.com/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads#metricas-de-percentual-de-impressoes)** baixo. | O lance está competitivo na categoria e o anúncio ganha a maioria dos leilões que disputa.                                                                                                                                    | Manter o lance. Se o nível mudar para **Lance fraco** ou **Lance muito fraco**, aplique a nova sugestão para acompanhar as mudanças do mercado. |
| **Lance fraco** ou **Lance muito fraco** e **percentual de impressões perdidas (por classificação)** alto.                                                                                                                 | O lance está abaixo da maioria dos concorrentes da categoria. O anúncio disputa muitos leilões, mas perde para concorrentes com lances maiores.                                                                               | Aplicar a sugestão do **Bid Monitor**. Um lance mais competitivo ajuda a ganhar parte dos leilões perdidos.                                     |
| **Lance forte** e **percentual de impressões perdidas (por classificação)** alto                                                                                                                                           | O lance está entre os mais competitivos da categoria, mas o anúncio perde muitos leilões. A classificação do leilão também considera a qualidade e a relevância do anúncio, como taxa de cliques, taxa de conversão e imagem. | Melhorar a qualidade do anúncio (imagem, descrição, categoria e precificação). Aumentar o lance não resolve quando o problema é relevância.     |

> ℹ️ Para saber como as métricas de **percentual de impressões** são calculadas e onde encontrá-las, consulte **[Métricas de percentual de impressões](https://help.vtex.com/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads#metricas-de-percentual-de-impressoes)**.
