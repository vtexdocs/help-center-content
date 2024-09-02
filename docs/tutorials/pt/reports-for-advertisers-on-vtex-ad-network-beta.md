---
title: 'Relatórios para anunciantes no VTEX Ad Network (Beta)'
id: 1xjGaQR8dDyS8J8x9vuHcl
status: PUBLISHED
createdAt: 2024-08-09T21:22:13.442Z
updatedAt: 2024-08-22T19:35:17.136Z
publishedAt: 2024-08-22T19:35:17.136Z
firstPublishedAt: 2024-08-09T21:56:08.145Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: relatorios-para-anunciantes-no-vtex-ad-network-beta
locale: pt
legacySlug: relatorios-para-anunciantes-no-vtex-ad-network-beta
subcategory: 2AksvvAtAsbAfE7HsBIVDU
---

<div class="alert alert-info">
  <p>O VTEX Ad Network está em fase Beta, o que significa que estamos trabalhando para aprimorá-lo. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o <a href="https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Suporte Comercial</a>. Se ainda não é cliente, mas tem interesse nesta solução, preencha o <a href="https://vtex.com/br-pt/contato/">formulário de contato</a>.</p>
</div>

Com [VTEX Ad Network (Beta)](https://help.vtex.com/pt/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur), você pode anunciar produtos da sua marca em frentes de lojas VTEX que possuem seu produto no catálogo.

Para começar a anunciar no VTEX Ad Network, você deve entrar em contato com o [Suporte Comercial](https://help.vtex.com/pt/tracks/suporte-na-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar a instalação do app VTEX Ad Network na sua conta VTEX.

Se você já é um anunciante do VTEX Ad Network, confira neste artigo como você pode gerar relatórios em formato CSV para acompanhar a performance das suas campanhas.

## Criar relatório

Siga as instruções abaixo para gerar um novo relatório do VTEX Ad Network.

1. No Admin VTEX, acesse **Ad Network > Relatórios**.
2. Clique em `Criar relatório`.
3. Preencha o formulário:

    * **Tipo de relatório:** opção de relatório a ser gerado, que pode ser:

        * [Campanha](#relatorio-de-campanha)
        * [Produto](#relatorio-de-produto)
        * [Termo de busca por campanha](#relatorio-de-termo-de-busca-por-campanha)
        * [Termo de busca por produto](#relatorio-de-termo-de-busca-por-produto)

        Os relatórios de termo de busca têm um limite de 100 mil registros.

    * **Agrupamento de dados:** exibição dos dados no relatório gerado.

        Para os relatórios de [Campanha](#relatorio-de-campanha) e [Produto](#relatorio-de-produto), é possível escolher uma das opções abaixo:

        * **Consolidado:** uma linha por entidade. Por exemplo, cada campanha terá apenas uma linha.
        * **Diário:** uma linha por dia por entidade. Por exemplo, cada campanha terá uma linha para cada dia.

        Para os relatórios de [Termo de busca por campanha](#relatorio-de-termo-de-busca-por-campanha) ou [Termo de busca por produto](#relatorio-de-termo-de-busca-por-produto), apenas o agrupamento __Consolidado__ está disponível.

    * **Período:** intervalo de tempo a ser considerado no relatório.

4. Clique em `Criar relatório`.

Todos os relatórios gerados são disponibilizados em formato CSV para download em **Ad Network > Relatórios** após alguns minutos.

Para fazer download de um relatório, clique em `Baixar` na linha dele na listagem. Você pode utilizar a barra de busca e os filtros disponíveis para encontrar o relatório desejado.

![ad-network-relatorios](https://images.ctfassets.net/alneenqid6w5/60Jbe0tOM8Gl9a8BhTWMG1/cdf72d654899139293809d620f415b26/image1.png)

### Relatório de campanha

Confira a seguir as informações disponíveis no relatório de campanha:

| Coluna | Descrição |
|---|---|
| `date_from` | Data de início do período considerado no relatório, no formato `YYYY-MM-DD`. Esta coluna aparece somente para relatórios com agrupamento __Consolidado__. |
| `date_to` | Data de fim do período considerado no relatório, no formato `YYYY-MM-DD`. Esta coluna aparece somente para relatórios com agrupamento __Consolidado__. |
| `date` | Data no formato `YYYY-MM-DD`. Esta coluna aparece somente para relatórios com agrupamento __Diário__. |
| `campaign_id` | ID da campanha. |
| `campaign_name` | Nome da campanha. |
| `type` | Tipo de campanha. |
| `status` | Situação da campanha, que pode ser __active__ (ativa), __paused__ (pausada) ou __expired__ (expirada). |
| `campaign_start` | Data e hora do início da campanha no formato `YYYY-MM-DD HH:MM:SS`, no fuso horário UTC+0. |
| `campaign_end` | Data e hora do fim da campanha no formato `YYYY-MM-DD HH:MM:SS`, no fuso horário UTC+0. |
| `budget` | Orçamento da campanha. |
| `impressions` | Quantidade de vezes em que anúncios foram exibidos na página. |
| `views` | Quantidade de vezes em que anúncios foram de fato visualizados. O VTEX Ad Network considera uma visualização quando há uma impressão de anúncio e, se necessário, o usuário rola a página o suficiente para visualizar 50% da área do anúncio por um segundo. |
| `clicks` | Quantidade de cliques em anúncios. O VTEX Ad Network descarta cliques no mesmo produto caso ocorram em um período menor que um minuto entre si. |
| `ctr` | Taxa de cliques (CTR), calculada pela divisão do número de cliques pelo número de visualizações. |
| `spent` | Orçamento gasto até o momento. |
| `orders` | Quantidade de pedidos provenientes de cliques em anúncios. |
| `units_sold` | Quantidade de unidades de produtos vendidas a partir de anúncios daquela campanha. |
| `ad_sales` | Receita total de vendas. |
| `acos` | Custo de publicidade das vendas (ACOS), calculado pela divisão dos gastos com a campanha pela receita. |
| `roas` | Retorno sobre investimento em publicidade (ROAS), calculado pela divisão da receita pelos gastos com a campanha. |

### Relatório de produto

Confira a seguir as informações disponíveis no relatório de produto:

| Coluna | Descrição |
|---|---|
| `date_from` | Data de início do período considerado no relatório, no formato `YYYY-MM-DD`. Esta coluna aparece somente para relatórios com agrupamento __Consolidado__. |
| `date_to` | Data de fim do período considerado no relatório, no formato `YYYY-MM-DD`. Esta coluna aparece somente para relatórios com agrupamento __Consolidado__. |
| `date` | Data no formato `YYYY-MM-DD`. Esta coluna aparece somente para relatórios com agrupamento __Diário__. |
| `campaign_id` | ID da campanha. |
| `campaign_name` | Nome da campanha. |
| `ean` | Código EAN, que corresponde ao código de barras do produto. |
| `product_name` | Nome do produto. |
| `impressions` | Quantidade de vezes em que anúncios foram exibidos na página. |
| `views` | Quantidade de vezes em que anúncios foram de fato visualizados. O VTEX Ad Network considera uma visualização quando há uma impressão de anúncio e, se necessário, o usuário rola a página o suficiente para visualizar 50% da área do anúncio por um segundo. |
| `clicks` | Quantidade de cliques em anúncios. O VTEX Ad Network descarta cliques no mesmo produto caso ocorram em um período menor que um minuto entre si. |
| `ctr` | Taxa de cliques (CTR), calculada pela divisão do número de cliques pelo número de visualizações. |
| `cpc` | Custo por clique (CPC) médio, correspondente à média dos lances ganhos para esse produto. |
| `spent` | Orçamento gasto até o momento. |
| `orders` | Quantidade de pedidos provenientes de cliques em anúncios. |
| `units_sold` | Quantidade de unidades de produtos vendidas a partir de anúncios daquela campanha. |
| `ad_sales` | Receita total de vendas. |
| `acos` | Custo de publicidade das vendas (ACOS), calculado pela divisão dos gastos com a campanha pela receita. |
| `roas` | Retorno sobre investimento em publicidade (ROAS), calculado pela divisão da receita pelos gastos com a campanha. |
| `conversion_rate` | Taxa de conversão, calculada pela divisão entre cliques e compras. |

### Relatório de termo de busca por campanha

Cada relatório de termo de busca por campanha tem um limite de 100 mil registros. Confira a seguir as informações disponíveis:

| Coluna | Descrição |
|---|---|
| `date_from` | Data de início do período considerado no relatório, no formato `YYYY-MM-DD`. |
| `date_to` | Data de fim do período considerado no relatório, no formato `YYYY-MM-DD`. |
| `search_term` | Termo que o usuário buscou. |
| `campaign_id` | ID da campanha. |
| `campaign_name` | Nome da campanha. |
| `impressions` | Quantidade de vezes em que anúncios foram exibidos na página. |
| `views` | Quantidade de vezes em que anúncios foram de fato visualizados. O VTEX Ad Network considera uma visualização quando há uma impressão de anúncio e, se necessário, o usuário rola a página o suficiente para visualizar 50% da área do anúncio por um segundo. |
| `clicks` | Quantidade de cliques em anúncios. O VTEX Ad Network descarta cliques no mesmo produto caso ocorram em um período menor que um minuto entre si. |
| `ctr` | Taxa de cliques (CTR), calculada pela divisão do número de cliques pelo número de visualizações. |
| `orders` | Quantidade de pedidos provenientes de cliques em anúncios. |
| `units_sold` | Quantidade de unidades de produtos vendidas a partir de anúncios daquela campanha. |
| `ad_sales` | Receita total de vendas. |
| `conversion_rate` | Taxa de conversão, calculada pela divisão entre cliques e compras. |

### Relatório de termo de busca por produto

Cada relatório de termo de busca por produto tem um limite de 100 mil registros. Confira a seguir as informações disponíveis:

| Coluna | Descrição |
|---|---|
| `date_from` | Data de início do período considerado no relatório, no formato `YYYY-MM-DD`. |
| `date_to` | Data de fim do período considerado no relatório, no formato `YYYY-MM-DD`. |
| `search_term` | Termo que o usuário buscou. |
| `campaign_id` | ID da campanha. |
| `campaign_name` | Nome da campanha. |
| `ean` | Código EAN, que corresponde ao código de barras do produto. |
| `product_name` | Nome do produto. |
| `impressions` | Quantidade de vezes em que anúncios foram exibidos na página. |
| `views` | Quantidade de vezes em que anúncios foram de fato visualizados. O VTEX Ad Network considera uma visualização quando há uma impressão de anúncio e, se necessário, o usuário rola a página o suficiente para visualizar 50% da área do anúncio por um segundo. |
| `clicks` | Quantidade de cliques em anúncios. O VTEX Ad Network descarta cliques no mesmo produto caso ocorram em um período menor que um minuto entre si. |
| `ctr` | Taxa de cliques (CTR), calculada pela divisão do número de cliques pelo número de visualizações. |
| `orders` | Quantidade de pedidos provenientes de cliques em anúncios. |
| `units_sold` | Quantidade de unidades de produtos vendidas a partir de anúncios daquela campanha. |
| `ad_sales` | Receita total de vendas. |
| `conversion_rate` | Taxa de conversão, calculada pela divisão entre cliques e compras. |

## Saiba mais

* [Anunciar com VTEX Ad Network (Beta)](https://help.vtex.com/pt/tutorial/anunciar-com-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse)
* [VTEX Ad Network (Beta)](https://help.vtex.com/pt/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur)
